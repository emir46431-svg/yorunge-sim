use yorunge_sim::engineering::{self, Circuit, Resistor, ThermalExperiment};
fn close(a: f64, b: f64) {
    assert!((a - b).abs() < 1e-8 * b.abs().max(1.0), "{a} != {b}");
}
fn resistor(id: &str, a: u32, b: u32, ohm: f64) -> Resistor {
    Resistor {
        id: id.into(),
        a,
        b,
        ohm,
    }
}
#[test]
fn dc_series_parallel_and_power_balance() {
    let series = Circuit {
        voltage_v: 12.0,
        resistors: vec![resistor("R1", 1, 2, 100.0), resistor("R2", 2, 0, 200.0)],
    };
    let out = engineering::circuit(&series).unwrap();
    close(out["source_current_a"].as_f64().unwrap(), 0.04);
    close(out["nodes"][2]["voltage_v"].as_f64().unwrap(), 8.0);
    close(out["total_power_w"].as_f64().unwrap(), 0.48);
    let parallel = Circuit {
        voltage_v: 12.0,
        resistors: vec![resistor("R1", 1, 0, 100.0), resistor("R2", 1, 0, 200.0)],
    };
    let out = engineering::circuit(&parallel).unwrap();
    close(out["source_current_a"].as_f64().unwrap(), 0.18);
    close(
        out["equivalent_resistance_ohm"].as_f64().unwrap(),
        200.0 / 3.0,
    );
    close(out["power_balance_error_w"].as_f64().unwrap(), 0.0);
}
#[test]
fn dc_balanced_bridge_reverse_orientation_and_zero_voltage() {
    let mut c = Circuit {
        voltage_v: 10.0,
        resistors: vec![
            resistor("a", 1, 2, 100.0),
            resistor("b", 2, 0, 100.0),
            resistor("c", 1, 3, 100.0),
            resistor("d", 3, 0, 100.0),
            resistor("bridge", 2, 3, 10.0),
        ],
    };
    let out = engineering::circuit(&c).unwrap();
    close(out["branches"][4]["current_a"].as_f64().unwrap(), 0.0);
    close(out["source_current_a"].as_f64().unwrap(), 0.1);
    c.voltage_v = -10.0;
    let reverse = engineering::circuit(&c).unwrap();
    close(reverse["total_power_w"].as_f64().unwrap(), 1.0);
    close(reverse["source_current_a"].as_f64().unwrap(), -0.1);
    c.voltage_v = 0.0;
    let zero = engineering::circuit(&c).unwrap();
    close(zero["total_power_w"].as_f64().unwrap(), 0.0);
    assert!(zero["equivalent_resistance_ohm"].is_null());
}
#[test]
fn dc_open_branch_is_zero_and_invalid_networks_rejected() {
    let c = Circuit {
        voltage_v: 5.0,
        resistors: vec![resistor("open", 1, 2, 100.0)],
    };
    close(
        engineering::circuit(&c).unwrap()["source_current_a"]
            .as_f64()
            .unwrap(),
        0.0,
    );
    for rs in [
        vec![],
        vec![resistor("r", 2, 3, 1.0)],
        vec![resistor("r", 1, 1, 1.0)],
        vec![resistor("r", 1, 0, 0.0)],
        vec![resistor("r", 1, 0, f64::NAN)],
        vec![resistor("r", 1, 0, 1.0), resistor("r", 1, 0, 2.0)],
    ] {
        assert!(
            engineering::circuit(&Circuit {
                voltage_v: 5.0,
                resistors: rs
            })
            .is_err()
        );
    }
    assert!(engineering::circuit_json(r#"{"voltage_v":2,"resistors":[],"extra":1}"#).is_err());
}
#[test]
fn thermal_insulated_energy_and_cooling_analytic_solution() {
    let mut t = ThermalExperiment {
        mass_kg: 2.0,
        specific_heat_j_kg_k: 100.0,
        power_w: 20.0,
        duration_s: 100.0,
        convection_w_m2_k: 0.0,
        ..Default::default()
    };
    let out = engineering::thermal(&t).unwrap();
    let end = out["frames"].as_array().unwrap().last().unwrap();
    close(end["temperature_c"].as_f64().unwrap(), 30.0);
    close(end["stored_energy_j"].as_f64().unwrap(), 2000.0);
    close(end["net_to_ambient_j"].as_f64().unwrap(), 0.0);
    t.initial_c = 100.0;
    t.ambient_c = 20.0;
    t.power_w = 0.0;
    t.area_m2 = 1.0;
    t.convection_w_m2_k = 2.0;
    let out = engineering::thermal(&t).unwrap();
    let end = out["frames"].as_array().unwrap().last().unwrap();
    close(
        end["temperature_c"].as_f64().unwrap(),
        20.0 + 80.0 * (-1.0_f64).exp(),
    );
    close(out["time_constant_s"].as_f64().unwrap(), 100.0);
}
#[test]
fn thermal_steady_state_near_zero_convection_and_energy_balance() {
    let mut t = ThermalExperiment {
        initial_c: 30.0,
        ambient_c: 20.0,
        power_w: 10.0,
        ..Default::default()
    };
    let out = engineering::thermal(&t).unwrap();
    for frame in out["frames"].as_array().unwrap() {
        close(frame["temperature_c"].as_f64().unwrap(), 30.0);
    }
    t.convection_w_m2_k = 1e-15;
    let out = engineering::thermal(&t).unwrap();
    for f in out["frames"].as_array().unwrap() {
        close(
            f["temperature_c"].as_f64().unwrap(),
            30.0 + 10.0 * f["time_s"].as_f64().unwrap() / 900.0,
        );
        close(
            f["input_energy_j"].as_f64().unwrap(),
            f["stored_energy_j"].as_f64().unwrap() + f["net_to_ambient_j"].as_f64().unwrap(),
        );
    }
}
#[test]
fn thermal_input_and_output_bounds() {
    for t in [
        ThermalExperiment {
            mass_kg: 0.0,
            ..Default::default()
        },
        ThermalExperiment {
            samples: 2002,
            ..Default::default()
        },
        ThermalExperiment {
            initial_c: -274.0,
            ..Default::default()
        },
        ThermalExperiment {
            power_w: 1e6,
            convection_w_m2_k: 0.0,
            ..Default::default()
        },
    ] {
        assert!(engineering::thermal(&t).is_err());
    }
    assert!(engineering::thermal_json(r#"{"nonsense":3}"#).is_err());
}
