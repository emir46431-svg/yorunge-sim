//! Constant-property thermal capacitance and ideal, passive DC resistor networks.
use serde::{Deserialize, Serialize};
use serde_json::{Value, json};
use std::collections::{BTreeMap, BTreeSet};

fn bound(name: &str, value: f64, min: f64, max: f64) -> Result<(), String> {
    if !value.is_finite() || value < min || value > max {
        return Err(format!(
            "{name}: {min}–{max} aralığında sonlu bir sayı olmalı."
        ));
    }
    Ok(())
}

#[derive(Clone, Debug, Serialize, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct ThermalExperiment {
    pub mass_kg: f64,
    pub specific_heat_j_kg_k: f64,
    pub area_m2: f64,
    pub convection_w_m2_k: f64,
    pub initial_c: f64,
    pub ambient_c: f64,
    pub power_w: f64,
    pub duration_s: f64,
    pub samples: usize,
}
impl Default for ThermalExperiment {
    fn default() -> Self {
        Self {
            mass_kg: 1.0,
            specific_heat_j_kg_k: 900.0,
            area_m2: 0.1,
            convection_w_m2_k: 10.0,
            initial_c: 20.0,
            ambient_c: 20.0,
            power_w: 10.0,
            duration_s: 600.0,
            samples: 301,
        }
    }
}
pub fn thermal(input: &ThermalExperiment) -> Result<Value, String> {
    for (name, v, min, max) in [
        ("mass_kg", input.mass_kg, 0.001, 1000.0),
        (
            "specific_heat_j_kg_k",
            input.specific_heat_j_kg_k,
            1.0,
            100_000.0,
        ),
        ("area_m2", input.area_m2, 0.000001, 1000.0),
        ("convection_w_m2_k", input.convection_w_m2_k, 0.0, 10000.0),
        ("initial_c", input.initial_c, -273.15, 3000.0),
        ("ambient_c", input.ambient_c, -273.15, 3000.0),
        ("power_w", input.power_w, 0.0, 1_000_000.0),
        ("duration_s", input.duration_s, 0.001, 86400.0),
    ] {
        bound(name, v, min, max)?;
    }
    if !(2..=2001).contains(&input.samples) {
        return Err("samples: 2–2001 arasında olmalı.".into());
    }
    let capacity = input.mass_kg * input.specific_heat_j_kg_k;
    let conductance = input.convection_w_m2_k * input.area_m2;
    let initial_offset = input.initial_c - input.ambient_c;
    let mut frames = Vec::with_capacity(input.samples);
    for i in 0..input.samples {
        let t = input.duration_s * i as f64 / (input.samples - 1) as f64;
        let x = conductance * t / capacity;
        let decay_change = -(-x).exp_m1();
        // Stable for h=0 and hA*t/C approaching zero; avoid cancellation P/(hA).
        let gain = if x == 0.0 { 1.0 } else { decay_change / x };
        let delta = -initial_offset * decay_change + input.power_w * t / capacity * gain;
        let temperature = input.initial_c + delta;
        bound("Hesaplanan sıcaklık (°C)", temperature, -273.15, 3000.0)?;
        let stored = capacity * delta;
        let supplied = input.power_w * t;
        frames.push(
            json!({"time_s":t,"temperature_c":temperature,"stored_energy_j":stored,
            "input_energy_j":supplied,"net_to_ambient_j":supplied-stored,
            "heat_flow_to_ambient_w":conductance*(temperature-input.ambient_c)}),
        );
    }
    Ok(
        json!({"model":"lumped-thermal-v1","experiment":input,"frames":frames,
        "heat_capacity_j_k":capacity,
        "time_constant_s":if conductance > 0.0 {Some(capacity/conductance)} else {None},
        "equilibrium_c":if conductance > 0.0 {Some(input.ambient_c+input.power_w/conductance)} else {None},
        "assumptions":["Cisim tek ve homojen sıcaklıkta; ısı kapasitesi, alan ve taşınım katsayısı sabit.",
          "Işınım, uzaysal iletim, faz değişimi ve sıcaklığa bağlı malzeme özellikleri yok.",
          "Isıl yığılma yaklaşımının uygunluğu (ör. küçük Biot sayısı) kullanıcı tarafından değerlendirilmelidir."]}),
    )
}

#[derive(Clone, Debug, Serialize, Deserialize)]
#[serde(deny_unknown_fields)]
pub struct Resistor {
    pub id: String,
    pub a: u32,
    pub b: u32,
    pub ohm: f64,
}
#[derive(Clone, Debug, Serialize, Deserialize)]
#[serde(deny_unknown_fields)]
pub struct Circuit {
    pub voltage_v: f64,
    pub resistors: Vec<Resistor>,
}

/// Ground is node 0; node 1 is held at voltage_v by an ideal DC source.
pub fn circuit(input: &Circuit) -> Result<Value, String> {
    bound("voltage_v", input.voltage_v, -1000.0, 1000.0)?;
    if input.resistors.is_empty() || input.resistors.len() > 48 {
        return Err("Devre 1–48 direnç içermeli.".into());
    }
    let mut ids = BTreeSet::new();
    let mut nodes = BTreeSet::from([0, 1]);
    for r in &input.resistors {
        if r.id.is_empty()
            || r.id.len() > 40
            || !r
                .id
                .chars()
                .all(|c| c.is_ascii_alphanumeric() || c == '-' || c == '_')
            || !ids.insert(&r.id)
        {
            return Err(
                "Direnç kimlikleri benzersiz ve en fazla 40 ASCII harf/rakam/alt çizgi olmalı."
                    .into(),
            );
        }
        if r.a == r.b || r.a > 23 || r.b > 23 {
            return Err("Farklı iki düğüm seç; düğüm numarası 0–23 olmalı.".into());
        }
        bound("Direnç (Ω)", r.ohm, 0.01, 1_000_000.0)?;
        nodes.insert(r.a);
        nodes.insert(r.b);
    }
    // Each component needs a fixed potential; floating islands are invalid.
    let mut reached = BTreeSet::from([0, 1]);
    loop {
        let size = reached.len();
        for r in &input.resistors {
            if reached.contains(&r.a) {
                reached.insert(r.b);
            }
            if reached.contains(&r.b) {
                reached.insert(r.a);
            }
        }
        if reached.len() == size {
            break;
        }
    }
    if reached != nodes {
        return Err("Bağlantısız/yüzen düğüm var; her ağ 0 veya 1 düğümüne bağlanmalı.".into());
    }
    let unknown: Vec<u32> = nodes.iter().copied().filter(|n| *n > 1).collect();
    let n = unknown.len();
    let index: BTreeMap<u32, usize> = unknown.iter().enumerate().map(|(i, &v)| (v, i)).collect();
    let mut matrix = vec![vec![0.0; n + 1]; n];
    for r in &input.resistors {
        let g = 1.0 / r.ohm;
        for (a, b) in [(r.a, r.b), (r.b, r.a)] {
            if let Some(&i) = index.get(&a) {
                matrix[i][i] += g;
                if let Some(&j) = index.get(&b) {
                    matrix[i][j] -= g;
                } else if b == 1 {
                    matrix[i][n] += g * input.voltage_v;
                }
            }
        }
    }
    for k in 0..n {
        let pivot = (k..n)
            .max_by(|&a, &b| matrix[a][k].abs().total_cmp(&matrix[b][k].abs()))
            .unwrap();
        if matrix[pivot][k].abs() < 1e-14 {
            return Err(
                "Devre sayısal olarak çözülemiyor; bağlantıları ve direnç ölçeklerini kontrol et."
                    .into(),
            );
        }
        matrix.swap(k, pivot);
        let scale = matrix[k][k];
        for value in matrix[k].iter_mut().skip(k) {
            *value /= scale;
        }
        for i in 0..n {
            if i == k {
                continue;
            }
            let factor = matrix[i][k];
            for j in k..=n {
                matrix[i][j] -= factor * matrix[k][j];
            }
        }
    }
    let mut potentials = BTreeMap::from([(0, 0.0), (1, input.voltage_v)]);
    for (i, &node) in unknown.iter().enumerate() {
        potentials.insert(node, matrix[i][n]);
    }
    let mut balances: BTreeMap<u32, f64> = nodes.iter().map(|&node| (node, 0.0)).collect();
    let mut total_power = 0.0;
    let mut branches = Vec::new();
    for r in &input.resistors {
        let voltage = potentials[&r.a] - potentials[&r.b];
        let current = voltage / r.ohm;
        let power = voltage * current;
        *balances.get_mut(&r.a).unwrap() += current;
        *balances.get_mut(&r.b).unwrap() -= current;
        total_power += power;
        branches.push(json!({"id":r.id,"a":r.a,"b":r.b,"resistance_ohm":r.ohm,"voltage_v":voltage,"current_a":current,"power_w":power}));
    }
    let source_current = balances[&1];
    let residual = unknown
        .iter()
        .map(|node| balances[node].abs())
        .fold(0.0, f64::max);
    let power_error = (input.voltage_v * source_current - total_power).abs();
    if !total_power.is_finite()
        || residual > 1e-6 * source_current.abs().max(1.0)
        || power_error > 1e-6 * total_power.max(1.0)
    {
        return Err("Sayısal korunum toleransı aşıldı; direnç ölçeklerini daralt.".into());
    }
    Ok(
        json!({"model":"resistive-dc-v1","experiment":input,"nodes":potentials.iter().map(|(&id,&voltage_v)|json!({"id":id,"voltage_v":voltage_v})).collect::<Vec<_>>(),
        "branches":branches,"source_current_a":source_current,"total_power_w":total_power,
        "equivalent_resistance_ohm":if source_current.abs()>1e-15 {Some(input.voltage_v/source_current)}else{None},
        "max_kcl_residual_a":residual,"power_balance_error_w":power_error,
        "assumptions":["Tek ideal DC gerilim kaynağı; düğüm 0 referans, düğüm 1 kaynak gerilimi.",
          "Sabit, pozitif ve ideal dirençler. AC, kondansatör, bobin, yarı iletken ve elektromanyetik alan hesabı yok."]}),
    )
}
pub fn thermal_json(text: &str) -> Result<String, String> {
    let input = serde_json::from_str(text).map_err(|e| format!("Isı girdisi: {e}"))?;
    thermal(&input).map(|v| v.to_string())
}
pub fn circuit_json(text: &str) -> Result<String, String> {
    let input = serde_json::from_str(text).map_err(|e| format!("Devre girdisi: {e}"))?;
    circuit(&input).map(|v| v.to_string())
}
