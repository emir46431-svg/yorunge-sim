//! A bounded educational model of passive transport between two finite pools.
//! Amounts are fmol, volumes are pL, and fmol/pL is numerically mM.
//! Division partitions an identical intracellular pool; it is not cell biology.

use serde::{Deserialize, Serialize};
use serde_json::{Value, json};

pub const MAX_FRAMES: usize = 3002;
const MAX_INPUT_BYTES: usize = 16 * 1024;
const MAX_INTERNAL_STEPS: usize = 100_000;
const MAX_STEP_S: f64 = 0.02;
const MIN_VOLUME_RATIO: f64 = 0.2;
const MAX_VOLUME_RATIO: f64 = 2.0;
const MIN_EXTERNAL_RATIO: f64 = 0.05;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct CellExperiment {
    pub duration_s: f64,
    pub sample_hz: u32,
    pub cell_volume_pl: f64,
    pub external_volume_pl: f64,
    pub inside_concentration_mm: f64,
    pub outside_concentration_mm: f64,
    pub water_permeability_pl_s_mm: f64,
    pub solute_permeability_pl_s: f64,
    pub division_at_s: Option<f64>,
}

impl Default for CellExperiment {
    fn default() -> Self {
        Self {
            duration_s: 120.0,
            sample_hz: 5,
            cell_volume_pl: 1.0,
            external_volume_pl: 10.0,
            inside_concentration_mm: 300.0,
            outside_concentration_mm: 150.0,
            water_permeability_pl_s_mm: 0.00004,
            solute_permeability_pl_s: 0.0,
            division_at_s: None,
        }
    }
}

impl CellExperiment {
    pub fn validate(&self) -> Result<(), String> {
        for (name, value, minimum, maximum) in [
            ("duration_s", self.duration_s, 1.0, 300.0),
            ("cell_volume_pl", self.cell_volume_pl, 0.1, 10.0),
            ("external_volume_pl", self.external_volume_pl, 1.0, 100.0),
            (
                "inside_concentration_mm",
                self.inside_concentration_mm,
                0.0,
                1000.0,
            ),
            (
                "outside_concentration_mm",
                self.outside_concentration_mm,
                0.0,
                1000.0,
            ),
            (
                "water_permeability_pl_s_mm",
                self.water_permeability_pl_s_mm,
                0.0,
                0.001,
            ),
            (
                "solute_permeability_pl_s",
                self.solute_permeability_pl_s,
                0.0,
                0.05,
            ),
        ] {
            if !value.is_finite() || value < minimum || value > maximum {
                return Err(format!(
                    "{name}: {minimum} ile {maximum} arasında sonlu bir sayı olmalı."
                ));
            }
        }
        if !(1..=10).contains(&self.sample_hz) {
            return Err("sample_hz: 1 ile 10 arasında bir tamsayı olmalı.".into());
        }
        if let Some(time) = self.division_at_s
            && (!time.is_finite() || time <= 0.0 || time >= self.duration_s)
        {
            return Err(
                "division_at_s: sıfırdan büyük ve deney süresinden küçük sonlu bir sayı olmalı."
                    .into(),
            );
        }
        Ok(())
    }
}

#[derive(Debug, Clone, Serialize)]
pub struct Cell {
    pub id: &'static str,
    pub volume_pl: f64,
    pub solute_fmol: f64,
    pub concentration_mm: f64,
}

#[derive(Debug, Clone, Serialize)]
pub struct Frame {
    pub t_s: f64,
    pub cells: Vec<Cell>,
    pub external_volume_pl: f64,
    pub external_solute_fmol: f64,
    pub external_concentration_mm: f64,
}

#[derive(Debug, Serialize)]
pub struct Event {
    pub t_s: f64,
    pub kind: &'static str,
    pub message: String,
}

#[derive(Debug, Serialize)]
pub struct Summary {
    pub status: &'static str,
    pub elapsed_s: f64,
    pub final_cell_count: usize,
    pub initial_total_volume_pl: f64,
    pub final_total_volume_pl: f64,
    pub volume_conservation_error_pl: f64,
    pub initial_total_solute_fmol: f64,
    pub final_total_solute_fmol: f64,
    pub solute_conservation_error_fmol: f64,
    pub max_volume_conservation_error_pl: f64,
    pub max_solute_conservation_error_fmol: f64,
}

#[derive(Debug, Serialize)]
pub struct CellSimulation {
    pub experiment: CellExperiment,
    pub frames: Vec<Frame>,
    pub summary: Summary,
    pub events: Vec<Event>,
    pub assumptions: Vec<&'static str>,
}

// The daughters have identical parameters and start identically, so their
// trajectories remain symmetric. Store totals rather than subtracting a flux
// independently from several pools; the finite exterior is always a residual.
#[derive(Clone, Copy)]
struct State {
    volume: f64,
    solute: f64,
    count: usize,
}

struct Model<'a> {
    experiment: &'a CellExperiment,
    total_volume: f64,
    total_solute: f64,
    minimum_volume: f64,
    maximum_volume: f64,
}

impl Model<'_> {
    fn area_factor(&self, volume: f64, count: usize) -> f64 {
        let n = count as f64;
        n * (volume / (n * self.experiment.cell_volume_pl)).powf(2.0 / 3.0)
    }

    fn rates(&self, state: State) -> (f64, f64) {
        let external = self.total_volume - state.volume;
        let area = self.area_factor(state.volume, state.count);
        let water = area * self.experiment.water_permeability_pl_s_mm * self.total_solute
            / (state.volume * external);
        let solute =
            area * self.experiment.solute_permeability_pl_s * (1.0 / state.volume + 1.0 / external);
        (water, solute)
    }

    fn exchange_solute(&self, mut state: State, dt: f64) -> State {
        if self.experiment.solute_permeability_pl_s == 0.0 || self.total_solute == 0.0 {
            return state;
        }
        let equilibrium = self.total_solute * (state.volume / self.total_volume);
        let (_, rate) = self.rates(state);
        state.solute = relax(state.solute, equilibrium, rate, dt);
        state
    }

    fn advance(&self, state: State, dt: f64) -> State {
        // Strang splitting: exact fixed-volume solute exchange on each side
        // of a midpoint-rate exponential water update. Every sub-update is a
        // convex relaxation toward equilibrium, avoiding negative quantities.
        let mut next = self.exchange_solute(state, dt * 0.5);
        if self.experiment.water_permeability_pl_s_mm > 0.0 && self.total_solute > 0.0 {
            let equilibrium = self.total_volume * (next.solute / self.total_solute);
            let (rate, _) = self.rates(next);
            let middle_volume = relax(next.volume, equilibrium, rate, dt * 0.5);
            let (middle_rate, _) = self.rates(State {
                volume: middle_volume,
                ..next
            });
            next.volume = relax(next.volume, equilibrium, middle_rate, dt);
        }
        self.exchange_solute(next, dt * 0.5)
    }

    fn outside_limits(&self, state: State) -> bool {
        state.volume <= self.minimum_volume || state.volume >= self.maximum_volume
    }

    fn limit_contact(&self, state: State, dt: f64) -> (f64, State) {
        let (mut lo, mut hi) = (0.0, dt);
        for _ in 0..44 {
            let middle = (lo + hi) * 0.5;
            if self.outside_limits(self.advance(state, middle)) {
                hi = middle;
            } else {
                lo = middle;
            }
        }
        (lo, self.advance(state, lo))
    }

    fn frame(&self, t_s: f64, state: State) -> Frame {
        let volume = state.volume / state.count as f64;
        let solute = state.solute / state.count as f64;
        let ids: &[&str] = if state.count == 1 {
            &["cell-1"]
        } else {
            &["cell-1a", "cell-1b"]
        };
        let cells = ids
            .iter()
            .map(|&id| Cell {
                id,
                volume_pl: volume,
                solute_fmol: solute,
                concentration_mm: solute / volume,
            })
            .collect();
        let external_volume_pl = self.total_volume - state.volume;
        let external_solute_fmol = self.total_solute - state.solute;
        Frame {
            t_s,
            cells,
            external_volume_pl,
            external_solute_fmol,
            external_concentration_mm: external_solute_fmol / external_volume_pl,
        }
    }
}

fn relax(current: f64, target: f64, rate: f64, dt: f64) -> f64 {
    let fraction = -(-rate * dt).exp_m1();
    // Clamp to the endpoints of the mathematical convex combination solely
    // against roundoff; no independently computed reservoir is clipped.
    (current + (target - current) * fraction).clamp(current.min(target), current.max(target))
}

fn totals(frame: &Frame) -> (f64, f64) {
    (
        frame.external_volume_pl + frame.cells.iter().map(|cell| cell.volume_pl).sum::<f64>(),
        frame.external_solute_fmol + frame.cells.iter().map(|cell| cell.solute_fmol).sum::<f64>(),
    )
}

fn push_frame(frames: &mut Vec<Frame>, frame: Frame) {
    if frames
        .last()
        .is_some_and(|previous| previous.t_s == frame.t_s)
    {
        *frames.last_mut().expect("existing frame") = frame;
    } else {
        frames.push(frame);
    }
}

pub fn simulate(experiment: CellExperiment) -> Result<CellSimulation, String> {
    experiment.validate()?;
    let model = Model {
        total_volume: experiment.cell_volume_pl + experiment.external_volume_pl,
        total_solute: experiment.cell_volume_pl * experiment.inside_concentration_mm
            + experiment.external_volume_pl * experiment.outside_concentration_mm,
        minimum_volume: experiment.cell_volume_pl * MIN_VOLUME_RATIO,
        maximum_volume: (experiment.cell_volume_pl * MAX_VOLUME_RATIO).min(
            experiment.cell_volume_pl + experiment.external_volume_pl * (1.0 - MIN_EXTERNAL_RATIO),
        ),
        experiment: &experiment,
    };
    let mut state = State {
        volume: experiment.cell_volume_pl,
        solute: experiment.cell_volume_pl * experiment.inside_concentration_mm,
        count: 1,
    };
    let mut targets: Vec<f64> = (1..=(experiment.duration_s * experiment.sample_hz as f64).ceil()
        as usize)
        .map(|i| (i as f64 / experiment.sample_hz as f64).min(experiment.duration_s))
        .collect();
    if let Some(time) = experiment.division_at_s {
        targets.push(time);
    }
    targets.sort_by(f64::total_cmp);
    targets.dedup();
    let mut frames = Vec::with_capacity(targets.len() + 1);
    frames.push(model.frame(0.0, state));
    let mut events = Vec::new();
    let mut t = 0.0;
    let mut steps = 0;
    let mut status = "completed";

    'timeline: for target in targets {
        while t < target {
            let remaining = target - t;
            if remaining <= 1e-12
                || (experiment.water_permeability_pl_s_mm == 0.0
                    && experiment.solute_permeability_pl_s == 0.0)
            {
                t = target;
                break;
            }
            let (water_rate, solute_rate) = model.rates(state);
            let dt = remaining
                .min(MAX_STEP_S)
                .min(0.1 / (water_rate + solute_rate).max(1e-12));
            if steps >= MAX_INTERNAL_STEPS || !dt.is_finite() || dt <= 1e-14 {
                status = "model_limit";
                events.push(Event {
                    t_s: t,
                    kind: "model_limit",
                    message:
                        "Sayısal adım bütçesine ulaşıldı; sonuç son hesaplanan anda durduruldu."
                            .into(),
                });
                push_frame(&mut frames, model.frame(t, state));
                break 'timeline;
            }
            steps += 1;
            let next = model.advance(state, dt);
            if !next.volume.is_finite()
                || !next.solute.is_finite()
                || next.volume <= 0.0
                || next.volume >= model.total_volume
                || next.solute < 0.0
                || next.solute > model.total_solute
            {
                return Err(
                    "Hücre çözümü sonlu ve pozitif bölmeler üretemedi; deney durduruldu.".into(),
                );
            }
            if model.outside_limits(next) {
                let (elapsed, contact) = model.limit_contact(state, dt);
                t += elapsed;
                state = contact;
                status = "model_limit";
                events.push(Event { t_s: t, kind: "model_limit", message:
                    "Eğitim modelinin hacim sınırına ulaşıldı: toplam iç hacim başlangıcın %20–%200 aralığında, dış hacim en az %5 olmalı. Bu sınırlar canlılık ölçütü değildir.".into() });
                push_frame(&mut frames, model.frame(t, state));
                break 'timeline;
            }
            state = next;
            t = if dt >= remaining { target } else { t + dt };
        }
        if experiment.division_at_s == Some(target) && state.count == 1 {
            state.count = 2;
            events.push(Event { t_s: target, kind: "division", message:
                "Tek hücre, hacmi ve çözüneni eşit paylaşan iki özdeş kız hücreye ayrıldı. Bu yalnız geometrik bir bölme işlemidir; DNA ve biyolojik hücre döngüsü modellenmez.".into() });
        }
        push_frame(&mut frames, model.frame(target, state));
    }

    if frames.len() > MAX_FRAMES {
        return Err("Hücre çıktısı örnek bütçesini aştı.".into());
    }
    let end = frames.last().expect("initial frame always exists");
    let (final_volume, final_solute) = totals(end);
    let max_volume_error = frames
        .iter()
        .map(|frame| (totals(frame).0 - model.total_volume).abs())
        .fold(0.0, f64::max);
    let max_solute_error = frames
        .iter()
        .map(|frame| (totals(frame).1 - model.total_solute).abs())
        .fold(0.0, f64::max);
    let summary = Summary {
        status,
        elapsed_s: end.t_s,
        final_cell_count: end.cells.len(),
        initial_total_volume_pl: model.total_volume,
        final_total_volume_pl: final_volume,
        volume_conservation_error_pl: final_volume - model.total_volume,
        initial_total_solute_fmol: model.total_solute,
        final_total_solute_fmol: final_solute,
        solute_conservation_error_fmol: final_solute - model.total_solute,
        max_volume_conservation_error_pl: max_volume_error,
        max_solute_conservation_error_fmol: max_solute_error,
    };
    Ok(CellSimulation {
        experiment,
        frames,
        summary,
        events,
        assumptions: vec![
            "Bu eğitim modeli gerçek hücre canlılığını, bir tedaviyi veya tıbbi bir durumu öngörmez; deneysel olarak doğrulanmış değildir.",
            "Her bölme iyi karışmıştır; tek bir ideal, yüksüz çözünen türü vardır. fmol/pL sayısal olarak mM'ye eşittir.",
            "Dış ortam sonlu bir havuzdur. Toplam hacim ve toplam çözünen korunur; dış derişim sabit tutulmaz.",
            "Su akışı P × (iç derişim − dış derişim), çözünen akışı k × (dış derişim − iç derişim) ile yaklaşık temsil edilir.",
            "Her hücrenin taşınım katsayısı, (güncel hücre hacmi / başlangıçtaki tek hücre hacmi)^(2/3) bağıl alanıyla ölçeklenir.",
            "Bölünme anında bir hücre iki özdeş parçaya ayrılır; her kız hücre hacmin ve çözünenin yarısını alır. DNA, mitoz, büyüme veya metabolizma hesaplanmaz.",
            "İyon yükü, aktif pompalar, seçici kanallar, basınç, hücre duvarı ve membran gerilimi yoktur; gerçek lizis veya plazmoliz sonucu üretilmez.",
            "Toplam iç hacim başlangıcın %20–%200 aralığından çıkmadan veya dış hacim başlangıcın %5'ine düşmeden model durur. Bunlar biyolojik eşikler değildir.",
        ],
    })
}

pub fn simulate_json(input: &str) -> Result<String, String> {
    if input.len() > MAX_INPUT_BYTES {
        return Err("Hücre deneyi JSON girdisi en fazla 16 KiB olabilir.".into());
    }
    let experiment: CellExperiment =
        serde_json::from_str(input).map_err(|error| format!("JSON okunamadı: {error}"))?;
    serde_json::to_string_pretty(&simulate(experiment)?).map_err(|error| error.to_string())
}

pub fn presets() -> Value {
    let defaults = CellExperiment::default();
    let entries = [
        (
            "isotonic",
            "İzotonik denge",
            "İç ve dış derişim eşit; net su taşınımı yok.",
            CellExperiment {
                outside_concentration_mm: 300.0,
                ..defaults.clone()
            },
        ),
        (
            "hypotonic",
            "Hipotonik dış ortam",
            "Dış derişim daha düşük; su iç bölmeye geçer ve hacim artar.",
            CellExperiment {
                outside_concentration_mm: 60.0,
                ..defaults.clone()
            },
        ),
        (
            "hypertonic",
            "Hipertonik dış ortam",
            "Dış derişim daha yüksek; su dış bölmeye geçer ve hacim azalır.",
            CellExperiment {
                outside_concentration_mm: 600.0,
                ..defaults.clone()
            },
        ),
        (
            "diffusion",
            "Sabit hacimde difüzyon",
            "Su geçirgenliği sıfır; çözünen derişim farkı zamanla azalır.",
            CellExperiment {
                inside_concentration_mm: 600.0,
                outside_concentration_mm: 100.0,
                water_permeability_pl_s_mm: 0.0,
                solute_permeability_pl_s: 0.01,
                ..defaults.clone()
            },
        ),
        (
            "division",
            "Geometrik bölünme",
            "30. saniyede hacim ve çözünen iki eşit parçaya ayrılır; biyolojik hücre döngüsü değildir.",
            CellExperiment {
                water_permeability_pl_s_mm: 0.0,
                solute_permeability_pl_s: 0.0,
                division_at_s: Some(30.0),
                ..defaults
            },
        ),
    ];
    json!({ "presets": entries.into_iter().map(|(id, label, description, experiment)| {
        json!({"id": id, "label": label, "description": description, "experiment": experiment})
    }).collect::<Vec<_>>() })
}
