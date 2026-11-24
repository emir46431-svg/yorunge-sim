//! Reduced, irreversible, single-substrate Michaelis–Menten progress curves.
//! Free inhibitor is held constant. This is not a mass-action mechanism or a
//! calibrated model of a particular enzyme, organism, or experimental assay.

use serde::{Deserialize, Serialize};
use serde_json::{Value, json};

pub const MODEL: &str = "michaelis-menten-progress-v1";
pub const MAX_INPUT_BYTES: usize = 16 * 1024;
pub const MAX_SAMPLES: u32 = 601;
pub const MAX_SWEEP_RUNS: usize = 6;
pub const RATE_CURVE_SAMPLES: usize = 61;
pub const RATE_CURVE_MAX_UM: f64 = 100_000.0;

#[derive(Debug, Clone, Copy, Default, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum Inhibition {
    #[default]
    None,
    Competitive,
    /// Pure noncompetitive: both factors use Ki; Ki' is intentionally ignored.
    Noncompetitive,
    Uncompetitive,
    Mixed,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct Experiment {
    pub substrate_um: f64,
    pub product_um: f64,
    pub enzyme_um: f64,
    pub km_um: f64,
    pub kcat_per_s: f64,
    pub inhibitor_um: f64,
    pub inhibition: Inhibition,
    pub ki_um: f64,
    pub ki_prime_um: f64,
    pub activity_fraction: f64,
    pub duration_s: f64,
    pub samples: u32,
}

impl Default for Experiment {
    fn default() -> Self {
        Self {
            substrate_um: 100.0,
            product_um: 0.0,
            enzyme_um: 0.1,
            km_um: 30.0,
            kcat_per_s: 10.0,
            inhibitor_um: 0.0,
            inhibition: Inhibition::None,
            ki_um: 25.0,
            ki_prime_um: 25.0,
            activity_fraction: 1.0,
            duration_s: 120.0,
            samples: 121,
        }
    }
}

impl Experiment {
    pub fn validate(&self) -> Result<(), String> {
        for (name, value, minimum, maximum) in [
            ("substrate_um", self.substrate_um, 0.1, 10_000.0),
            ("product_um", self.product_um, 0.0, 10_000.0),
            ("enzyme_um", self.enzyme_um, 0.0, 10.0),
            ("km_um", self.km_um, 0.01, 10_000.0),
            ("kcat_per_s", self.kcat_per_s, 0.0, 1000.0),
            ("inhibitor_um", self.inhibitor_um, 0.0, 10_000.0),
            ("ki_um", self.ki_um, 0.01, 10_000.0),
            ("ki_prime_um", self.ki_prime_um, 0.01, 10_000.0),
            ("activity_fraction", self.activity_fraction, 0.0, 1.0),
            ("duration_s", self.duration_s, 0.1, 3600.0),
        ] {
            if !value.is_finite() || value < minimum || value > maximum {
                return Err(format!(
                    "{name}: {minimum} ile {maximum} arasında sonlu bir sayı olmalı."
                ));
            }
        }
        if !(2..=MAX_SAMPLES).contains(&self.samples) {
            return Err(format!(
                "samples: 2 ile {MAX_SAMPLES} arasında bir tamsayı olmalı."
            ));
        }
        Ok(())
    }
}

#[derive(Debug, Clone, Serialize)]
pub struct Frame {
    pub t_s: f64,
    pub substrate_um: f64,
    pub product_um: f64,
    pub rate_um_s: f64,
}

#[derive(Debug, Serialize)]
pub struct Summary {
    pub initial_rate_um_s: f64,
    pub final_product_um: f64,
    pub substrate_conversion_fraction: f64,
    pub apparent_km_um: f64,
    pub apparent_vmax_um_s: f64,
    /// Time to consume half of the initial substrate, not half of final product.
    /// May be outside the requested observation window. Null for zero activity
    /// or a mathematical time larger than the finite f64 range.
    pub half_time_s: Option<f64>,
    pub max_conservation_error_um: f64,
}

#[derive(Debug, Serialize)]
pub struct RatePoint {
    pub substrate_um: f64,
    pub rate_um_s: f64,
}

#[derive(Debug, Serialize)]
pub struct Simulation {
    pub model: &'static str,
    pub experiment: Experiment,
    pub frames: Vec<Frame>,
    pub summary: Summary,
    pub rate_curve: Vec<RatePoint>,
    pub assumptions: Vec<&'static str>,
    pub warnings: Vec<String>,
}

#[derive(Clone, Copy)]
struct Kinetics {
    vmax: f64,
    b: f64,
    c: f64,
}

impl Kinetics {
    fn from_experiment(experiment: &Experiment) -> Self {
        let competitive = 1.0 + experiment.inhibitor_um / experiment.ki_um;
        let uncompetitive = 1.0 + experiment.inhibitor_um / experiment.ki_prime_um;
        let (alpha, alpha_prime) = match experiment.inhibition {
            Inhibition::None => (1.0, 1.0),
            Inhibition::Competitive => (competitive, 1.0),
            Inhibition::Noncompetitive => (competitive, competitive),
            Inhibition::Uncompetitive => (1.0, uncompetitive),
            Inhibition::Mixed => (competitive, uncompetitive),
        };
        Self {
            vmax: experiment.kcat_per_s * experiment.enzyme_um * experiment.activity_fraction,
            b: alpha * experiment.km_um,
            c: alpha_prime,
        }
    }

    fn rate(self, substrate: f64) -> f64 {
        // Compute the bounded ratio first, also avoiding premature underflow
        // in V*S when a representable V and S are both very small.
        self.vmax * (substrate / (self.b + self.c * substrate))
    }

    fn consumed_equation(self, initial_substrate: f64, log_ratio: f64) -> f64 {
        self.b * log_ratio + self.c * initial_substrate * -(-log_ratio).exp_m1()
    }

    fn substrate_at(self, initial_substrate: f64, t: f64) -> f64 {
        let progress = self.vmax * t;
        if progress == 0.0 {
            return initial_substrate;
        }
        // For x=ln(S0/S), F(x)=b*x+c*S0*(1-exp(-x)) is strictly increasing.
        // These bounds follow from 1-exp(-x) <= x and F(x) >= b*x.
        let a = self.c * initial_substrate;
        let mut low = progress / (self.b + a);
        let mut high = progress / self.b;
        if progress < a {
            // Ignoring the positive b*x term gives a tighter upper bound.
            high = high.min(-(-progress / a).ln_1p());
        } else {
            low = low.max((progress - a) / self.b);
        }
        high = high.max(low);
        for _ in 0..80 {
            let middle = low + (high - low) * 0.5;
            if middle == low || middle == high {
                break;
            }
            if self.consumed_equation(initial_substrate, middle) > progress {
                high = middle;
            } else {
                low = middle;
            }
        }
        let x = low + (high - low) * 0.5;
        initial_substrate * (-x).exp()
    }
}

pub fn simulate(experiment: Experiment) -> Result<Simulation, String> {
    experiment.validate()?;
    let kinetics = Kinetics::from_experiment(&experiment);
    let apparent_km = kinetics.b / kinetics.c;
    let apparent_vmax = kinetics.vmax / kinetics.c;
    let mut warnings = Vec::new();
    let qssa_indicator = experiment.enzyme_um / (experiment.substrate_um + experiment.km_um);
    if qssa_indicator >= 0.1 {
        warnings.push("E₀/(S₀ + Km) ≥ 0,1: enzim başlangıç substratına ve Km'ye göre küçük değil. Yarı kararlı durum yaklaşımı zayıf olabilir; bu eşik yalnız eğitim amaçlı bir uyarı göstergesidir.".into());
    }
    if experiment.inhibition == Inhibition::None && experiment.inhibitor_um > 0.0 {
        warnings.push(
            "inhibition=none seçildiği için girilen inhibitör derişimi hızı etkilemez.".into(),
        );
    }
    if experiment.inhibition == Inhibition::Noncompetitive
        && experiment.inhibitor_um > 0.0
        && experiment.ki_prime_um != experiment.ki_um
    {
        warnings.push("noncompetitive burada saf noncompetitive durumudur: iki çarpan da Ki kullanır. Girilen Ki′ değeri bu modda kullanılmaz; farklı iki sabit için mixed seçin.".into());
    }
    if experiment.product_um > 0.0 {
        warnings.push("Başlangıç ürünü yalnız miktar bilançosuna eklenir; geri tepkime ve ürün inhibisyonu bu modelde yoktur.".into());
    }

    let half_time = if kinetics.vmax > 0.0 {
        let value = (kinetics.b * std::f64::consts::LN_2
            + kinetics.c * experiment.substrate_um * 0.5)
            / kinetics.vmax;
        if value.is_finite() {
            Some(value)
        } else {
            warnings.push("Kuramsal yarılanma zamanı sonlu sayı aralığını aşıyor; half_time_s=null döndürüldü.".into());
            None
        }
    } else {
        if experiment.enzyme_um > 0.0
            && experiment.kcat_per_s > 0.0
            && experiment.activity_fraction > 0.0
        {
            warnings.push("Etkin hız kayan nokta sayı aralığının altına yuvarlandı; ilerleme sayısal olarak durağan ve half_time_s=null.".into());
        }
        None
    };

    let total = experiment.substrate_um + experiment.product_um;
    let mut max_conservation_error: f64 = 0.0;
    let frames: Vec<Frame> = (0..experiment.samples)
        .map(|index| {
            let t_s = if index + 1 == experiment.samples {
                experiment.duration_s
            } else {
                experiment.duration_s * (index as f64 / (experiment.samples - 1) as f64)
            };
            let substrate_um = kinetics.substrate_at(experiment.substrate_um, t_s);
            let product_um = experiment.product_um + (experiment.substrate_um - substrate_um);
            max_conservation_error =
                max_conservation_error.max((substrate_um + product_um - total).abs());
            Frame {
                t_s,
                substrate_um,
                product_um,
                rate_um_s: kinetics.rate(substrate_um),
            }
        })
        .collect();
    let final_frame = frames.last().expect("at least two validated samples");
    if final_frame.substrate_um == 0.0 && kinetics.vmax > 0.0 {
        warnings.push("Son substrat derişimi kayan nokta sayı aralığının altına yuvarlandı ve 0 gösteriliyor. Denklem sonlu zamanda tam tükenme olayı tanımlamaz.".into());
    }
    let summary = Summary {
        initial_rate_um_s: frames[0].rate_um_s,
        final_product_um: final_frame.product_um,
        substrate_conversion_fraction: (experiment.substrate_um - final_frame.substrate_um)
            / experiment.substrate_um,
        apparent_km_um: apparent_km,
        apparent_vmax_um_s: apparent_vmax,
        half_time_s: half_time,
        max_conservation_error_um: max_conservation_error,
    };

    let requested_curve_max = (2.0 * experiment.substrate_um).max(5.0 * apparent_km);
    let curve_max = requested_curve_max.min(RATE_CURVE_MAX_UM);
    if requested_curve_max > RATE_CURVE_MAX_UM {
        warnings.push(format!("Hız eğrisinin üst sınırı {RATE_CURVE_MAX_UM} µM ile sınırlandı; istenen 2×S₀ veya 5×görünür Km aralığının tamamını kapsamaz. Gerçek çizim üst sınırı rate_curve son noktasındadır."));
    }
    let rate_curve = (0..RATE_CURVE_SAMPLES)
        .map(|index| {
            let substrate_um = curve_max * index as f64 / (RATE_CURVE_SAMPLES - 1) as f64;
            RatePoint {
                substrate_um,
                rate_um_s: kinetics.rate(substrate_um),
            }
        })
        .collect();

    Ok(Simulation {
        model: MODEL,
        experiment,
        frames,
        summary,
        rate_curve,
        assumptions: vec![
            "Tek substratın tek ürüne 1:1 dönüştüğü, sabit hacimli ve geri dönüşsüz indirgenmiş Michaelis–Menten modeli kullanılır; elementer kütle etkisi tepkimeleri çözülmez.",
            "Enzim–substrat ve enzim–inhibitör kompleksleri ayrı durum değişkenleri değildir. Substrat ve ürün toplamı bu indirgenmiş bilanço içinde korunur.",
            "İnhibitör, zaman boyunca sabit serbest derişimde tutulur; bağlanmayla tüketimi ve tight-binding etkileri hesaplanmaz.",
            "noncompetitive saf noncompetitive anlamındadır: her iki inhibisyon çarpanı aynı Ki değerini kullanır. mixed modunda Ki ve Ki′ bağımsızdır.",
            "Etkin hız kcat × enzim derişimi × activity_fraction değeridir. activity_fraction kullanıcı girdisidir; pH veya sıcaklıktan otomatik türetilmez.",
            "Geri tepkime, ürün inhibisyonu, kooperativite, substrat inhibisyonu, enzim bozunması ve taşıma sınırlamaları dahil değildir.",
            "Parametreler örnek değerlerdir; belirli bir gerçek enzime, biyolojik sisteme veya laboratuvar ölçümüne kalibre edilmiş değildir.",
            "Yarılanma zamanı başlangıç substratının yarısının tüketilme zamanıdır; istenen gözlem süresinin dışında olabilir. Sıfır etkin hızda veya sayı aralığı aşılırsa null döner.",
        ],
        warnings,
    })
}

fn check_input_size(input: &str) -> Result<(), String> {
    if input.len() > MAX_INPUT_BYTES {
        return Err("Enzim deneyi JSON girdisi en fazla 16 KiB olabilir.".into());
    }
    Ok(())
}

pub fn simulate_json(input: &str) -> Result<String, String> {
    check_input_size(input)?;
    let experiment: Experiment =
        serde_json::from_str(input).map_err(|error| format!("JSON okunamadı: {error}"))?;
    serde_json::to_string_pretty(&simulate(experiment)?).map_err(|error| error.to_string())
}

#[derive(Debug, Clone, Copy, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum SweepParameter {
    EnzymeUm,
    SubstrateUm,
    InhibitorUm,
    ActivityFraction,
}

#[derive(Deserialize)]
#[serde(deny_unknown_fields)]
struct SweepRequest {
    experiment: Experiment,
    parameter: SweepParameter,
    values: Vec<f64>,
}

#[derive(Serialize)]
struct SweepRun {
    value: f64,
    result: Simulation,
}

#[derive(Serialize)]
struct SweepResult {
    parameter: SweepParameter,
    runs: Vec<SweepRun>,
}

pub fn sweep_json(input: &str) -> Result<String, String> {
    check_input_size(input)?;
    let request: SweepRequest =
        serde_json::from_str(input).map_err(|error| format!("JSON okunamadı: {error}"))?;
    request.experiment.validate()?;
    if request.values.is_empty() || request.values.len() > MAX_SWEEP_RUNS {
        return Err(format!(
            "values: 1 ile {MAX_SWEEP_RUNS} arasında değer içermeli."
        ));
    }
    let mut experiments = Vec::with_capacity(request.values.len());
    for (index, &value) in request.values.iter().enumerate() {
        if !value.is_finite() || request.values[..index].contains(&value) {
            return Err("Tarama değerleri sonlu ve birbirinden farklı olmalı.".into());
        }
        let mut experiment = request.experiment.clone();
        match request.parameter {
            SweepParameter::EnzymeUm => experiment.enzyme_um = value,
            SweepParameter::SubstrateUm => experiment.substrate_um = value,
            SweepParameter::InhibitorUm => experiment.inhibitor_um = value,
            SweepParameter::ActivityFraction => experiment.activity_fraction = value,
        }
        experiment
            .validate()
            .map_err(|error| format!("values[{index}]: {error}"))?;
        experiments.push((value, experiment));
    }
    let runs = experiments
        .into_iter()
        .map(|(value, experiment)| simulate(experiment).map(|result| SweepRun { value, result }))
        .collect::<Result<Vec<_>, _>>()?;
    serde_json::to_string_pretty(&SweepResult {
        parameter: request.parameter,
        runs,
    })
    .map_err(|error| error.to_string())
}

pub fn presets() -> Value {
    let baseline = Experiment::default();
    let experiments = [
        (
            "baseline",
            "Temel enzim deneyi",
            "İnhibitörsüz, tek substratlı örnek ilerleme eğrisi.",
            baseline.clone(),
        ),
        (
            "competitive",
            "Kompetitif inhibisyon",
            "Görünür Km artar; yüksek substrat sınırındaki hız aynı kalır.",
            Experiment {
                inhibitor_um: 50.0,
                inhibition: Inhibition::Competitive,
                ..baseline.clone()
            },
        ),
        (
            "noncompetitive",
            "Saf noncompetitive inhibisyon",
            "Görünür Vmax azalır; aynı Ki iki çarpanda da kullanılır ve Km değişmez.",
            Experiment {
                inhibitor_um: 50.0,
                inhibition: Inhibition::Noncompetitive,
                ..baseline.clone()
            },
        ),
        (
            "uncompetitive",
            "Uncompetitive inhibisyon",
            "Görünür Km ve Vmax aynı çarpanla azalır.",
            Experiment {
                inhibitor_um: 50.0,
                inhibition: Inhibition::Uncompetitive,
                ..baseline.clone()
            },
        ),
        (
            "slow-activity",
            "Düşük etkinlik payı",
            "Kullanıcının seçtiği %20 etkinlik; otomatik sıcaklık veya pH modeli değildir.",
            Experiment {
                activity_fraction: 0.2,
                ..baseline
            },
        ),
    ];
    json!({"presets": experiments.into_iter().map(|(id, label, description, experiment)| {
        json!({"id": id, "label": label, "description": description, "experiment": experiment})
    }).collect::<Vec<_>>()})
}
