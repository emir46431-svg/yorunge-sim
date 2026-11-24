use serde_json::{Value, json};
use yorunge_sim::enzymes::{
    Experiment, Inhibition, MAX_INPUT_BYTES, MAX_SAMPLES, MODEL, RATE_CURVE_MAX_UM, Simulation,
    presets, simulate, simulate_json, sweep_json,
};

fn close(actual: f64, expected: f64, tolerance: f64) {
    assert!(
        (actual - expected).abs() <= tolerance,
        "{actual} != {expected}; tolerance={tolerance}"
    );
}

fn check_invariants(result: &Simulation) {
    let experiment = &result.experiment;
    assert_eq!(result.model, MODEL);
    assert_eq!(result.frames.len(), experiment.samples as usize);
    assert_eq!(result.frames.first().unwrap().t_s, 0.0);
    assert_eq!(result.frames.last().unwrap().t_s, experiment.duration_s);
    let total = experiment.substrate_um + experiment.product_um;
    for frame in &result.frames {
        for value in [
            frame.t_s,
            frame.substrate_um,
            frame.product_um,
            frame.rate_um_s,
        ] {
            assert!(
                value.is_finite() && value >= 0.0,
                "invalid frame: {frame:?}"
            );
        }
        assert!(frame.substrate_um <= experiment.substrate_um);
        assert!(frame.product_um >= experiment.product_um);
        close(frame.substrate_um + frame.product_um, total, 1e-9);
        assert!(frame.rate_um_s <= result.summary.apparent_vmax_um_s + 1e-10);
    }
    for pair in result.frames.windows(2) {
        assert!(pair[1].t_s > pair[0].t_s);
        assert!(pair[1].substrate_um <= pair[0].substrate_um + 1e-12);
        assert!(pair[1].product_um + 1e-12 >= pair[0].product_um);
    }
    assert_eq!(result.rate_curve.len(), 61);
    assert_eq!(result.rate_curve[0].substrate_um, 0.0);
    assert_eq!(result.rate_curve[0].rate_um_s, 0.0);
    assert!(result.rate_curve.last().unwrap().substrate_um <= RATE_CURVE_MAX_UM);
    for point in &result.rate_curve {
        assert!(point.substrate_um.is_finite() && point.substrate_um >= 0.0);
        assert!(point.rate_um_s.is_finite() && point.rate_um_s >= 0.0);
    }
    for value in [
        result.summary.initial_rate_um_s,
        result.summary.final_product_um,
        result.summary.substrate_conversion_fraction,
        result.summary.apparent_km_um,
        result.summary.apparent_vmax_um_s,
        result.summary.max_conservation_error_um,
    ] {
        assert!(value.is_finite() && value >= 0.0);
    }
    assert!((0.0..=1.0).contains(&result.summary.substrate_conversion_fraction));
    assert!(
        result
            .summary
            .half_time_s
            .is_none_or(|time| time.is_finite() && time > 0.0)
    );
    assert!(result.summary.max_conservation_error_um < 1e-9);
}

#[test]
fn default_json_and_presets_expose_the_agreed_contract() {
    let result: Value = serde_json::from_str(&simulate_json("{}").unwrap()).unwrap();
    assert_eq!(result["model"], MODEL);
    assert_eq!(result["experiment"]["samples"], 121);
    assert_eq!(result["experiment"]["inhibition"], "none");
    assert_eq!(result["frames"].as_array().unwrap().len(), 121);
    assert_eq!(result["rate_curve"].as_array().unwrap().len(), 61);
    assert!(result["warnings"].is_array());
    assert!(result["assumptions"].as_array().unwrap().len() >= 7);
    let catalog = presets();
    let entries = catalog["presets"].as_array().unwrap();
    assert_eq!(
        entries
            .iter()
            .map(|entry| entry["id"].as_str().unwrap())
            .collect::<Vec<_>>(),
        [
            "baseline",
            "competitive",
            "noncompetitive",
            "uncompetitive",
            "slow-activity"
        ]
    );
    for entry in entries {
        check_invariants(
            &simulate(serde_json::from_value(entry["experiment"].clone()).unwrap()).unwrap(),
        );
    }
}

#[test]
fn progress_satisfies_the_integrated_equation_for_every_inhibition_mode() {
    for (inhibition, alpha, alpha_prime) in [
        (Inhibition::None, 1.0, 1.0),
        (Inhibition::Competitive, 3.0, 1.0),
        (Inhibition::Noncompetitive, 3.0, 3.0),
        (Inhibition::Uncompetitive, 1.0, 1.5),
        (Inhibition::Mixed, 3.0, 1.5),
    ] {
        let experiment = Experiment {
            substrate_um: 120.0,
            product_um: 7.0,
            enzyme_um: 0.2,
            km_um: 35.0,
            kcat_per_s: 8.0,
            activity_fraction: 0.6,
            inhibitor_um: 50.0,
            ki_um: 25.0,
            ki_prime_um: 100.0,
            inhibition,
            duration_s: 20.0,
            samples: 101,
        };
        let v = 8.0 * 0.2 * 0.6;
        let result = simulate(experiment).unwrap();
        for frame in &result.frames {
            let left = alpha * 35.0 * (120.0 / frame.substrate_um).ln()
                + alpha_prime * (120.0 - frame.substrate_um);
            close(left, v * frame.t_s, 2e-11);
        }
        check_invariants(&result);
    }
}

#[test]
fn initial_rate_half_saturation_and_low_high_substrate_limits_are_correct() {
    let half = simulate(Experiment {
        substrate_um: 30.0,
        duration_s: 0.1,
        samples: 2,
        ..Experiment::default()
    })
    .unwrap();
    close(half.summary.initial_rate_um_s, 0.5, 1e-14);
    let low = simulate(Experiment {
        substrate_um: 0.1,
        km_um: 10000.0,
        duration_s: 0.1,
        samples: 2,
        ..Experiment::default()
    })
    .unwrap();
    close(low.summary.initial_rate_um_s, 0.1 / 10000.0, 2e-10);
    let high = simulate(Experiment {
        substrate_um: 10000.0,
        km_um: 0.01,
        duration_s: 0.1,
        samples: 2,
        ..Experiment::default()
    })
    .unwrap();
    close(high.summary.initial_rate_um_s, 1.0, 1.1e-6);
    assert!(low.summary.initial_rate_um_s < half.summary.initial_rate_um_s);
    assert!(half.summary.initial_rate_um_s < high.summary.initial_rate_um_s);
}

#[test]
fn inhibition_changes_the_correct_apparent_parameters() {
    let baseline = simulate(Experiment::default()).unwrap();
    for (mode, expected_km, expected_vmax) in [
        (Inhibition::Competitive, 90.0, 1.0),
        (Inhibition::Noncompetitive, 30.0, 1.0 / 3.0),
        (Inhibition::Uncompetitive, 20.0, 2.0 / 3.0),
        (Inhibition::Mixed, 60.0, 2.0 / 3.0),
    ] {
        let result = simulate(Experiment {
            inhibition: mode,
            inhibitor_um: 50.0,
            ki_um: 25.0,
            ki_prime_um: 100.0,
            ..Experiment::default()
        })
        .unwrap();
        close(result.summary.apparent_km_um, expected_km, 1e-12);
        close(result.summary.apparent_vmax_um_s, expected_vmax, 1e-12);
        assert!(result.summary.initial_rate_um_s < baseline.summary.initial_rate_um_s);
        assert!(result.summary.final_product_um < baseline.summary.final_product_um);
    }
}

#[test]
fn pure_noncompetitive_ignores_ki_prime_and_zero_inhibitor_removes_all_effects() {
    let first = simulate(Experiment {
        inhibition: Inhibition::Noncompetitive,
        inhibitor_um: 50.0,
        ki_prime_um: 0.01,
        ..Experiment::default()
    })
    .unwrap();
    let second = simulate(Experiment {
        inhibition: Inhibition::Noncompetitive,
        inhibitor_um: 50.0,
        ki_prime_um: 10000.0,
        ..Experiment::default()
    })
    .unwrap();
    assert_eq!(
        first.summary.initial_rate_um_s,
        second.summary.initial_rate_um_s
    );
    assert_eq!(
        first.summary.final_product_um,
        second.summary.final_product_um
    );
    assert!(first.warnings.iter().any(|warning| warning.contains("Ki′")));
    let baseline = simulate(Experiment::default()).unwrap();
    for inhibition in [
        Inhibition::Competitive,
        Inhibition::Noncompetitive,
        Inhibition::Uncompetitive,
        Inhibition::Mixed,
    ] {
        let result = simulate(Experiment {
            inhibition,
            inhibitor_um: 0.0,
            ..Experiment::default()
        })
        .unwrap();
        assert_eq!(
            result.summary.final_product_um,
            baseline.summary.final_product_um
        );
        assert_eq!(
            result.summary.initial_rate_um_s,
            baseline.summary.initial_rate_um_s
        );
    }
}

#[test]
fn half_time_is_the_integrated_time_to_half_initial_substrate() {
    let baseline = simulate(Experiment::default()).unwrap();
    let half_time = 30.0 * std::f64::consts::LN_2 + 50.0;
    close(baseline.summary.half_time_s.unwrap(), half_time, 1e-12);
    let result = simulate(Experiment {
        duration_s: half_time,
        samples: 2,
        product_um: 40.0,
        ..Experiment::default()
    })
    .unwrap();
    close(result.frames[1].substrate_um, 50.0, 1e-12);
    close(result.frames[1].product_um, 90.0, 1e-12);
    close(result.summary.substrate_conversion_fraction, 0.5, 1e-14);
    let short = simulate(Experiment {
        duration_s: 0.1,
        ..Experiment::default()
    })
    .unwrap();
    assert!(short.summary.half_time_s.unwrap() > short.experiment.duration_s);
}

#[test]
fn zero_enzyme_turnover_or_activity_is_static() {
    for experiment in [
        Experiment {
            enzyme_um: 0.0,
            ..Experiment::default()
        },
        Experiment {
            kcat_per_s: 0.0,
            ..Experiment::default()
        },
        Experiment {
            activity_fraction: 0.0,
            ..Experiment::default()
        },
    ] {
        let result = simulate(experiment).unwrap();
        assert!(result.summary.half_time_s.is_none());
        assert_eq!(result.summary.substrate_conversion_fraction, 0.0);
        for frame in &result.frames {
            assert_eq!(frame.substrate_um, result.experiment.substrate_um);
            assert_eq!(frame.product_um, result.experiment.product_um);
            assert_eq!(frame.rate_um_s, 0.0);
        }
        check_invariants(&result);
    }
}

#[test]
fn extremes_and_tiny_positive_rates_remain_finite() {
    for experiment in [
        Experiment {
            substrate_um: 0.1,
            km_um: 0.01,
            enzyme_um: 10.0,
            kcat_per_s: 1000.0,
            duration_s: 3600.0,
            samples: MAX_SAMPLES,
            ..Experiment::default()
        },
        Experiment {
            substrate_um: 10000.0,
            product_um: 10000.0,
            km_um: 10000.0,
            inhibitor_um: 10000.0,
            inhibition: Inhibition::Mixed,
            ki_um: 0.01,
            ki_prime_um: 0.01,
            enzyme_um: 10.0,
            kcat_per_s: 1000.0,
            duration_s: 3600.0,
            samples: MAX_SAMPLES,
            ..Experiment::default()
        },
        Experiment {
            enzyme_um: f64::from_bits(1),
            kcat_per_s: 1.0,
            duration_s: 3600.0,
            ..Experiment::default()
        },
        Experiment {
            enzyme_um: f64::from_bits(1),
            kcat_per_s: 0.001,
            ..Experiment::default()
        },
    ] {
        let result = simulate(experiment).unwrap();
        check_invariants(&result);
        let encoded = serde_json::to_value(&result).unwrap();
        assert!(!encoded["summary"]["apparent_vmax_um_s"].is_null());
    }
}

#[test]
fn rate_curve_cap_and_model_validity_warnings_are_explicit() {
    let large = simulate(Experiment {
        km_um: 10000.0,
        inhibitor_um: 10000.0,
        inhibition: Inhibition::Competitive,
        ki_um: 0.01,
        ..Experiment::default()
    })
    .unwrap();
    assert_eq!(
        large.rate_curve.last().unwrap().substrate_um,
        RATE_CURVE_MAX_UM
    );
    assert!(
        large
            .warnings
            .iter()
            .any(|warning| warning.contains("100000"))
    );
    let qssa = simulate(Experiment {
        enzyme_um: 10.0,
        substrate_um: 0.1,
        km_um: 0.01,
        ..Experiment::default()
    })
    .unwrap();
    assert!(
        qssa.warnings
            .iter()
            .any(|warning| warning.contains("E₀/(S₀ + Km)"))
    );
    let ignored = simulate(Experiment {
        inhibitor_um: 50.0,
        ..Experiment::default()
    })
    .unwrap();
    assert!(
        ignored
            .warnings
            .iter()
            .any(|warning| warning.contains("inhibition=none"))
    );
}

#[test]
fn sweeps_use_independent_experiments_and_enforce_the_frame_budget() {
    let request = json!({"experiment":{"samples":601},"parameter":"enzyme_um",
        "values":[0.0,0.01,0.1,0.5,1.0,2.0]});
    let result: Value = serde_json::from_str(&sweep_json(&request.to_string()).unwrap()).unwrap();
    assert_eq!(result["parameter"], "enzyme_um");
    let runs = result["runs"].as_array().unwrap();
    assert_eq!(runs.len(), 6);
    let total_frames: usize = runs
        .iter()
        .map(|run| run["result"]["frames"].as_array().unwrap().len())
        .sum();
    assert_eq!(total_frames, 3606);
    for run in runs {
        assert_eq!(run["value"], run["result"]["experiment"]["enzyme_um"]);
        assert_eq!(run["result"]["experiment"]["substrate_um"], 100.0);
    }
    assert_eq!(runs[0]["result"]["summary"]["initial_rate_um_s"], 0.0);
    for (parameter, values) in [
        ("substrate_um", vec![10.0, 100.0]),
        ("inhibitor_um", vec![0.0, 50.0]),
        ("activity_fraction", vec![0.0, 1.0]),
    ] {
        let request = json!({"experiment":{"inhibition":"competitive"},"parameter":parameter,"values":values});
        let response: Value =
            serde_json::from_str(&sweep_json(&request.to_string()).unwrap()).unwrap();
        assert_eq!(response["runs"].as_array().unwrap().len(), 2);
        for run in response["runs"].as_array().unwrap() {
            assert_eq!(run["value"], run["result"]["experiment"][parameter]);
        }
    }
}

#[test]
fn invalid_inputs_and_sweep_values_are_rejected() {
    for input in [
        r#"{"unknown":1}"#,
        r#"{"samples":1}"#,
        r#"{"samples":602}"#,
        r#"{"samples":2.5}"#,
        r#"{"substrate_um":0}"#,
        r#"{"product_um":-1}"#,
        r#"{"enzyme_um":11}"#,
        r#"{"km_um":0}"#,
        r#"{"kcat_per_s":1001}"#,
        r#"{"inhibitor_um":10001}"#,
        r#"{"ki_um":0}"#,
        r#"{"ki_prime_um":0}"#,
        r#"{"activity_fraction":1.1}"#,
        r#"{"duration_s":3601}"#,
        r#"{"inhibition":"other"}"#,
        r#"{"substrate_um":NaN}"#,
        r#"{"substrate_um":1e999}"#,
    ] {
        assert!(simulate_json(input).is_err(), "must reject {input}");
    }
    for value in [f64::NAN, f64::INFINITY, f64::NEG_INFINITY] {
        assert!(
            simulate(Experiment {
                enzyme_um: value,
                ..Experiment::default()
            })
            .is_err()
        );
    }
    for values in [
        json!([]),
        json!([0, 1, 2, 3, 4, 5, 6]),
        json!([1, 1]),
        json!([0, -0.0]),
        json!([-1]),
        json!([11]),
    ] {
        let request = json!({"experiment":{},"parameter":"enzyme_um","values":values});
        assert!(sweep_json(&request.to_string()).is_err());
    }
    for input in [
        r#"{"experiment":{},"parameter":"km_um","values":[1]}"#,
        r#"{"experiment":{},"parameter":"enzyme_um","values":[NaN]}"#,
        r#"{"experiment":{},"parameter":"enzyme_um","values":[1],"unknown":1}"#,
        r#"{"experiment":{"samples":602},"parameter":"enzyme_um","values":[1]}"#,
    ] {
        assert!(sweep_json(input).is_err());
    }
    let oversized = " ".repeat(MAX_INPUT_BYTES + 1);
    assert!(simulate_json(&oversized).is_err());
    assert!(sweep_json(&oversized).is_err());
}
