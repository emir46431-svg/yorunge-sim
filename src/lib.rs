//! İki boyutlu, sabit rüzgârlı ve karesel hava dirençli atış modeli.
//! İç hesaplarda SI birimleri kullanılır. Bu bir yaklaşık eğitim modelidir.

use serde::{Deserialize, Serialize};
use std::f64::consts::PI;

pub mod cells;
pub mod chemistry;
pub mod engineering;
pub mod enzymes;
pub mod lab;

pub const MODEL_VERSION: &str = "sphere-drag-rk4-v1";
const AIR_GAS_CONSTANT: f64 = 287.05;
const MAX_INTERNAL_STEPS: usize = 1_000_000;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct Parameters {
    pub mass_g: f64,
    pub diameter_cm: f64,
    pub speed_m_s: f64,
    pub angle_deg: f64,
    pub height_m: f64,
    pub gravity_m_s2: f64,
    pub wind_m_s: f64,
    pub temperature_c: f64,
    pub pressure_hpa: f64,
    pub drag_coefficient: f64,
    pub time_step_s: f64,
    pub max_time_s: f64,
}

impl Default for Parameters {
    fn default() -> Self {
        Self {
            mass_g: 100.0,
            diameter_cm: 4.0,
            speed_m_s: 12.0,
            angle_deg: 40.0,
            height_m: 1.5,
            gravity_m_s2: 9.80665,
            wind_m_s: 0.0,
            temperature_c: 15.0,
            pressure_hpa: 1013.25,
            drag_coefficient: 0.47,
            time_step_s: 0.01,
            max_time_s: 60.0,
        }
    }
}

impl Parameters {
    pub fn validate(&self) -> Result<(), String> {
        for (name, value, min, max) in [
            ("mass_g", self.mass_g, 1.0, 10_000.0),
            ("diameter_cm", self.diameter_cm, 0.1, 50.0),
            ("speed_m_s", self.speed_m_s, 0.0, 60.0),
            ("angle_deg", self.angle_deg, -90.0, 90.0),
            ("height_m", self.height_m, 0.0, 100.0),
            ("gravity_m_s2", self.gravity_m_s2, 0.1, 30.0),
            ("wind_m_s", self.wind_m_s, -30.0, 30.0),
            ("temperature_c", self.temperature_c, -60.0, 60.0),
            ("pressure_hpa", self.pressure_hpa, 0.0, 1100.0),
            ("drag_coefficient", self.drag_coefficient, 0.0, 2.0),
            ("time_step_s", self.time_step_s, 0.001, 0.05),
            ("max_time_s", self.max_time_s, 0.01, 120.0),
        ] {
            if !value.is_finite() || value < min || value > max {
                return Err(format!(
                    "{name}: {min} ile {max} arasında sonlu bir sayı olmalı."
                ));
            }
        }
        if self.max_time_s / self.time_step_s > 120_000.0 + 1e-8 {
            return Err("En fazla 120000 çıktı aralığı kullanılabilir.".into());
        }
        Ok(())
    }
}

#[derive(Debug, Clone, Copy, Serialize)]
pub struct Point {
    pub t_s: f64,
    pub x_m: f64,
    pub y_m: f64,
    pub vx_m_s: f64,
    pub vy_m_s: f64,
}

#[derive(Debug, Serialize)]
pub struct Derived {
    pub air_density_kg_m3: f64,
    pub cross_section_m2: f64,
}

#[derive(Debug, Serialize)]
pub struct Summary {
    pub elapsed_s: f64,
    /// İşaretlidir: rüzgâr, cismi başlangıç noktasının gerisine taşıyabilir.
    pub horizontal_displacement_m: f64,
    pub maximum_height_m: f64,
    /// Yere ulaşılmadığında bilinmez; sıfır yerine null döner.
    pub flight_time_s: Option<f64>,
    pub landing_x_m: Option<f64>,
}

#[derive(Debug, Serialize)]
pub struct Simulation {
    pub model: &'static str,
    pub parameters: Parameters,
    pub derived: Derived,
    pub status: &'static str,
    pub summary: Summary,
    pub trajectory: Vec<Point>,
    pub assumptions: Vec<&'static str>,
}

// Durum: [x, y, vx, vy]. Türev: [vx, vy, ax, ay].
type State = [f64; 4];

fn derivative(s: State, p: &Parameters, drag_per_mass: f64) -> State {
    let ux = s[2] - p.wind_m_s;
    let uy = s[3];
    let relative_speed = ux.hypot(uy);
    [
        s[2],
        s[3],
        -drag_per_mass * relative_speed * ux,
        -p.gravity_m_s2 - drag_per_mass * relative_speed * uy,
    ]
}

fn add_scaled(s: State, d: State, scale: f64) -> State {
    std::array::from_fn(|i| s[i] + scale * d[i])
}

fn rk4(s: State, h: f64, p: &Parameters, k: f64) -> State {
    let a = derivative(s, p, k);
    let b = derivative(add_scaled(s, a, h / 2.0), p, k);
    let c = derivative(add_scaled(s, b, h / 2.0), p, k);
    let d = derivative(add_scaled(s, c, h), p, k);
    std::array::from_fn(|i| s[i] + h * (a[i] + 2.0 * b[i] + 2.0 * c[i] + d[i]) / 6.0)
}

fn point(t: f64, s: State) -> Point {
    Point {
        t_s: t,
        x_m: s[0],
        y_m: s[1],
        vx_m_s: s[2],
        vy_m_s: s[3],
    }
}

// Sıfır geçişini, mevcut RK4 alt adımının içinde bulur.
fn zero_crossing(s: State, h: f64, component: usize, p: &Parameters, k: f64) -> (f64, State) {
    let (mut lo, mut hi) = (0.0, h);
    for _ in 0..45 {
        let mid = (lo + hi) / 2.0;
        if rk4(s, mid, p, k)[component] > 0.0 {
            lo = mid;
        } else {
            hi = mid;
        }
    }
    let dt = (lo + hi) / 2.0;
    (dt, rk4(s, dt, p, k))
}

pub fn simulate(p: Parameters) -> Result<Simulation, String> {
    p.validate()?;
    let mass_kg = p.mass_g / 1000.0;
    let radius_m = p.diameter_cm / 200.0;
    let area = PI * radius_m * radius_m;
    let rho = p.pressure_hpa * 100.0 / (AIR_GAS_CONSTANT * (p.temperature_c + 273.15));
    let k = 0.5 * rho * p.drag_coefficient * area / mass_kg;
    let angle = p.angle_deg.to_radians();
    let mut state = [
        0.0,
        p.height_m,
        p.speed_m_s * angle.cos(),
        p.speed_m_s * angle.sin(),
    ];
    // cos(90°)'nin kayan nokta kalıntısını kaldır.
    if p.angle_deg.abs() == 90.0 {
        state[2] = 0.0;
    }
    let mut t = 0.0;
    let mut maximum_height = state[1];
    let mut trajectory = vec![point(t, state)];
    let mut landed = state[1] == 0.0 && state[3] <= 0.0;
    let mut internal_steps = 0;
    let frames = (p.max_time_s / p.time_step_s).ceil() as usize;

    for frame in 1..=frames {
        if landed {
            break;
        }
        let frame_end = (frame as f64 * p.time_step_s).min(p.max_time_s);
        while t < frame_end - 1e-12 {
            internal_steps += 1;
            if internal_steps > MAX_INTERNAL_STEPS {
                return Err(
                    "Hesaplama sınırı aşıldı. Süreyi kısalt veya daha az uç parametreler seç."
                        .into(),
                );
            }
            // Çok hafif/geniş nesnelerde drag sertleşir: RK4'ü küçük alt adımlara böl.
            let relative_speed = (state[2] - p.wind_m_s).hypot(state[3]);
            let drag_rate = k * relative_speed + (k * p.gravity_m_s2).sqrt();
            let stable_step = if drag_rate > 0.0 {
                0.1 / drag_rate
            } else {
                f64::INFINITY
            };
            let h = (frame_end - t).min(stable_step);
            let next = rk4(state, h, &p, k);
            if next.iter().any(|n| !n.is_finite()) {
                return Err("Sayısal çözüm sonlu değil; parametreleri kontrol et.".into());
            }
            if state[3] > 0.0 && next[3] <= 0.0 {
                let (_, apex) = zero_crossing(state, h, 3, &p, k);
                maximum_height = maximum_height.max(apex[1]);
            }
            if next[1] <= 0.0 {
                let (dt, mut contact) = zero_crossing(state, h, 1, &p, k);
                contact[1] = 0.0;
                state = contact;
                t += dt;
                landed = true;
                break;
            }
            state = next;
            t += h;
            maximum_height = maximum_height.max(state[1]);
        }
        trajectory.push(point(t, state));
    }

    Ok(Simulation {
        model: MODEL_VERSION,
        derived: Derived {
            air_density_kg_m3: rho,
            cross_section_m2: area,
        },
        status: if landed { "landed" } else { "time_limit" },
        summary: Summary {
            elapsed_s: t,
            horizontal_displacement_m: state[0],
            maximum_height_m: maximum_height,
            flight_time_s: landed.then_some(t),
            landing_x_m: landed.then_some(state[0]),
        },
        trajectory,
        parameters: p,
        assumptions: vec![
            "Taş, girilen eşdeğer çapa sahip küresel bir noktasal kütle olarak modellenir; çap hava direnci alanını belirler.",
            "Sabit sürükleme katsayısı bir varsayımdır; düzensiz taş şekli, yönelimi ve Reynolds sayısıyla değişim modellenmez.",
            "Kuru hava yoğunluğu sıcaklık ve yerel mutlak basınçtan hesaplanır; hava ve yatay rüzgâr uçuş boyunca sabittir.",
            "İki boyut, sabit yerçekimi ve düz zemin kullanılır. y=0 kütle merkezinin model zeminine ulaşmasıdır.",
            "Nem, yağış, türbülans, dönme/Magnus etkisi, kaldırma, sekme ve deformasyon dahil değildir.",
            "Bu yaklaşık eğitim modeli gerçek deney verisiyle doğrulanmış değildir. Sayısal hassasiyet fiziksel doğruluk garantisi değildir.",
        ],
    })
}

pub fn simulate_json(input: &str) -> Result<String, String> {
    let parameters: Parameters =
        serde_json::from_str(input).map_err(|e| format!("JSON okunamadı: {e}"))?;
    serde_json::to_string_pretty(&simulate(parameters)?).map_err(|e| e.to_string())
}
