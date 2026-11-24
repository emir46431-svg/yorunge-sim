use serde_json::{Value, json};
use yorunge_sim::cells::{
    CellExperiment, CellSimulation, MAX_FRAMES, presets, simulate, simulate_json,
};

fn close(actual: f64, expected: f64, tolerance: f64) {
    assert!(
        (actual - expected).abs() <= tolerance,
        "{actual} != {expected}; tolerance={tolerance}"
    );
}

fn check_conservation(result: &CellSimulation) {
    let total_volume = result.experiment.cell_volume_pl + result.experiment.external_volume_pl;
    let total_solute = result.experiment.cell_volume_pl * result.experiment.inside_concentration_mm
        + result.experiment.external_volume_pl * result.experiment.outside_concentration_mm;
    for frame in &result.frames {
        let volume =
            frame.external_volume_pl + frame.cells.iter().map(|cell| cell.volume_pl).sum::<f64>();
        let solute = frame.external_solute_fmol
            + frame.cells.iter().map(|cell| cell.solute_fmol).sum::<f64>();
        close(volume, total_volume, 1e-11);
        close(solute, total_solute, 1e-8);
        assert!(frame.external_volume_pl.is_finite() && frame.external_volume_pl > 0.0);
        assert!(frame.external_solute_fmol.is_finite() && frame.external_solute_fmol >= 0.0);
        assert!(
            frame.external_concentration_mm.is_finite() && frame.external_concentration_mm >= 0.0
        );
        for cell in &frame.cells {
            assert!(cell.volume_pl.is_finite() && cell.volume_pl > 0.0);
            assert!(cell.solute_fmol.is_finite() && cell.solute_fmol >= 0.0);
            assert!(cell.concentration_mm.is_finite() && cell.concentration_mm >= 0.0);
            close(
                cell.concentration_mm,
                cell.solute_fmol / cell.volume_pl,
                1e-10,
            );
        }
    }
    assert!(result.summary.max_volume_conservation_error_pl < 1e-11);
    assert!(result.summary.max_solute_conservation_error_fmol < 1e-8);
    assert!(
        result
            .frames
            .windows(2)
            .all(|pair| pair[0].t_s < pair[1].t_s)
    );
    assert_eq!(result.frames[0].t_s, 0.0);
    assert_eq!(result.frames[0].cells.len(), 1);
    assert_eq!(result.summary.elapsed_s, result.frames.last().unwrap().t_s);
}

#[test]
fn defaults_and_json_contract_are_complete() {
    let result: Value = serde_json::from_str(&simulate_json("{}").unwrap()).unwrap();
    assert_eq!(result["experiment"]["duration_s"], 120.0);
    assert_eq!(result["experiment"]["sample_hz"], 5);
    assert_eq!(result["frames"][0]["cells"][0]["id"], "cell-1");
    assert_eq!(result["frames"][0]["cells"][0]["solute_fmol"], 300.0);
    assert!(result["assumptions"].as_array().unwrap().len() >= 6);
    assert!(!result["summary"]["status"].is_null());
}

#[test]
fn isotonic_state_is_static_even_when_both_membranes_are_permeable() {
    let result = simulate(CellExperiment {
        outside_concentration_mm: 300.0,
        water_permeability_pl_s_mm: 0.001,
        solute_permeability_pl_s: 0.05,
        ..CellExperiment::default()
    })
    .unwrap();
    assert_eq!(result.summary.status, "completed");
    for frame in &result.frames {
        close(frame.cells[0].volume_pl, 1.0, 1e-12);
        close(frame.cells[0].solute_fmol, 300.0, 1e-10);
        close(frame.external_volume_pl, 10.0, 1e-12);
    }
    check_conservation(&result);
}

#[test]
fn water_moves_toward_the_higher_solute_concentration() {
    for (outside, expected_direction) in [(100.0, 1.0), (600.0, -1.0)] {
        let result = simulate(CellExperiment {
            duration_s: 10.0,
            outside_concentration_mm: outside,
            ..CellExperiment::default()
        })
        .unwrap();
        let end = result.frames.last().unwrap();
        assert!((end.cells[0].volume_pl - 1.0) * expected_direction > 0.0);
        assert!((end.external_volume_pl - 10.0) * expected_direction < 0.0);
        close(end.cells[0].solute_fmol, 300.0, 1e-11);
        check_conservation(&result);
    }
}

#[test]
fn fixed_volume_diffusion_matches_the_finite_reservoir_analytic_solution() {
    let experiment = CellExperiment {
        duration_s: 40.0,
        cell_volume_pl: 2.5,
        external_volume_pl: 8.0,
        inside_concentration_mm: 700.0,
        outside_concentration_mm: 100.0,
        water_permeability_pl_s_mm: 0.0,
        solute_permeability_pl_s: 0.03,
        ..CellExperiment::default()
    };
    let vi = experiment.cell_volume_pl;
    let ve = experiment.external_volume_pl;
    let total = vi * experiment.inside_concentration_mm + ve * experiment.outside_concentration_mm;
    let equilibrium = total / (vi + ve);
    let rate = experiment.solute_permeability_pl_s * (1.0 / vi + 1.0 / ve);
    let initial = experiment.inside_concentration_mm;
    let result = simulate(experiment).unwrap();
    for frame in &result.frames {
        let expected_inside = equilibrium + (initial - equilibrium) * (-rate * frame.t_s).exp();
        let expected_outside = (total - vi * expected_inside) / ve;
        close(frame.cells[0].volume_pl, vi, 1e-13);
        close(frame.external_volume_pl, ve, 1e-13);
        close(frame.cells[0].concentration_mm, expected_inside, 2e-9);
        close(frame.external_concentration_mm, expected_outside, 2e-9);
    }
    check_conservation(&result);
}

#[test]
fn division_occurs_at_the_exact_requested_time_and_preserves_amounts() {
    let time = 0.735;
    let result = simulate(CellExperiment {
        duration_s: 2.0,
        sample_hz: 5,
        division_at_s: Some(time),
        water_permeability_pl_s_mm: 0.0,
        ..CellExperiment::default()
    })
    .unwrap();
    let split = result
        .frames
        .iter()
        .find(|frame| frame.t_s == time)
        .unwrap();
    assert_eq!(split.cells.len(), 2);
    assert_eq!(split.cells[0].id, "cell-1a");
    assert_eq!(split.cells[1].id, "cell-1b");
    for child in &split.cells {
        close(child.volume_pl, 0.5, 1e-14);
        close(child.solute_fmol, 150.0, 1e-12);
        close(child.concentration_mm, 300.0, 1e-12);
    }
    assert!(
        result
            .frames
            .iter()
            .filter(|frame| frame.t_s < time)
            .all(|frame| frame.cells.len() == 1)
    );
    assert!(
        result
            .frames
            .iter()
            .filter(|frame| frame.t_s >= time)
            .all(|frame| frame.cells.len() == 2)
    );
    assert_eq!(result.events.len(), 1);
    assert_eq!(result.events[0].kind, "division");
    assert_eq!(result.events[0].t_s, time);
    assert_eq!(result.summary.final_cell_count, 2);
    check_conservation(&result);
}

#[test]
fn coupled_transport_conserves_both_quantities_across_division() {
    let result = simulate(CellExperiment {
        duration_s: 10.0,
        division_at_s: Some(2.13),
        water_permeability_pl_s_mm: 0.0002,
        solute_permeability_pl_s: 0.02,
        ..CellExperiment::default()
    })
    .unwrap();
    assert_eq!(result.summary.status, "completed");
    assert_eq!(result.summary.final_cell_count, 2);
    for frame in result.frames.iter().filter(|frame| frame.cells.len() == 2) {
        assert_eq!(frame.cells[0].volume_pl, frame.cells[1].volume_pl);
        assert_eq!(frame.cells[0].solute_fmol, frame.cells[1].solute_fmol);
    }
    check_conservation(&result);
}

#[test]
fn extreme_swelling_and_shrinking_stop_with_explicit_model_limit_events() {
    for (inside, outside, ratio) in [(1000.0, 0.0, 2.0), (0.0, 1000.0, 0.2)] {
        let result = simulate(CellExperiment {
            inside_concentration_mm: inside,
            outside_concentration_mm: outside,
            water_permeability_pl_s_mm: 0.001,
            ..CellExperiment::default()
        })
        .unwrap();
        assert_eq!(result.summary.status, "model_limit");
        assert!(result.summary.elapsed_s > 0.0 && result.summary.elapsed_s < 120.0);
        close(
            result.frames.last().unwrap().cells[0].volume_pl,
            ratio,
            1e-10,
        );
        assert_eq!(result.events.last().unwrap().kind, "model_limit");
        assert_eq!(result.events.last().unwrap().t_s, result.summary.elapsed_s);
        check_conservation(&result);
    }
}

#[test]
fn finite_external_pool_cannot_be_depleted_silently() {
    let result = simulate(CellExperiment {
        cell_volume_pl: 10.0,
        external_volume_pl: 1.0,
        inside_concentration_mm: 1000.0,
        outside_concentration_mm: 0.0,
        water_permeability_pl_s_mm: 0.001,
        ..CellExperiment::default()
    })
    .unwrap();
    assert_eq!(result.summary.status, "model_limit");
    close(
        result.frames.last().unwrap().external_volume_pl,
        0.05,
        1e-10,
    );
    check_conservation(&result);
}

#[test]
fn all_zero_solute_stays_finite_and_static() {
    let result = simulate(CellExperiment {
        duration_s: 2.0,
        inside_concentration_mm: 0.0,
        outside_concentration_mm: 0.0,
        water_permeability_pl_s_mm: 0.001,
        solute_permeability_pl_s: 0.05,
        division_at_s: Some(1.0),
        ..CellExperiment::default()
    })
    .unwrap();
    assert_eq!(result.summary.status, "completed");
    assert_eq!(result.summary.final_total_solute_fmol, 0.0);
    check_conservation(&result);
}

#[test]
fn maximum_output_budget_includes_off_grid_division_and_terminal_frames() {
    let result = simulate(CellExperiment {
        duration_s: 300.0,
        sample_hz: 10,
        division_at_s: Some(30.03),
        water_permeability_pl_s_mm: 0.0,
        ..CellExperiment::default()
    })
    .unwrap();
    assert_eq!(result.frames.len(), MAX_FRAMES);
    assert_eq!(result.frames.last().unwrap().t_s, 300.0);
    check_conservation(&result);

    let result = simulate(CellExperiment {
        duration_s: 1.23,
        sample_hz: 5,
        division_at_s: Some(0.2),
        water_permeability_pl_s_mm: 0.0,
        ..CellExperiment::default()
    })
    .unwrap();
    assert_eq!(
        result
            .frames
            .iter()
            .filter(|frame| frame.t_s == 0.2)
            .count(),
        1
    );
    assert_eq!(result.frames.last().unwrap().t_s, 1.23);
}

#[test]
fn invalid_unknown_and_nonfinite_inputs_are_rejected() {
    for input in [
        r#"{"unknown":1}"#,
        r#"{"sample_hz":1.5}"#,
        r#"{"sample_hz":0}"#,
        r#"{"sample_hz":11}"#,
        r#"{"duration_s":301}"#,
        r#"{"duration_s":0.5}"#,
        r#"{"cell_volume_pl":0}"#,
        r#"{"external_volume_pl":101}"#,
        r#"{"inside_concentration_mm":-1}"#,
        r#"{"outside_concentration_mm":1001}"#,
        r#"{"water_permeability_pl_s_mm":0.002}"#,
        r#"{"solute_permeability_pl_s":0.06}"#,
        r#"{"division_at_s":0}"#,
        r#"{"division_at_s":120}"#,
        r#"{"duration_s":NaN}"#,
        r#"{"duration_s":1e999}"#,
    ] {
        assert!(simulate_json(input).is_err(), "must reject {input}");
    }
    for value in [f64::NAN, f64::INFINITY, f64::NEG_INFINITY] {
        assert!(
            simulate(CellExperiment {
                cell_volume_pl: value,
                ..CellExperiment::default()
            })
            .is_err()
        );
        assert!(
            simulate(CellExperiment {
                division_at_s: Some(value),
                ..CellExperiment::default()
            })
            .is_err()
        );
    }
    assert!(simulate_json(&" ".repeat(16 * 1024 + 1)).is_err());
}

#[test]
fn all_presets_are_valid_conservative_experiments() {
    let catalog = presets();
    let entries = catalog["presets"].as_array().unwrap();
    assert_eq!(entries.len(), 5);
    assert_eq!(
        entries
            .iter()
            .map(|entry| entry["id"].as_str().unwrap())
            .collect::<Vec<_>>(),
        [
            "isotonic",
            "hypotonic",
            "hypertonic",
            "diffusion",
            "division"
        ]
    );
    for entry in entries {
        let experiment: CellExperiment =
            serde_json::from_value(entry["experiment"].clone()).unwrap();
        check_conservation(&simulate(experiment).unwrap());
    }
    let division = &entries[4]["experiment"];
    assert_eq!(division["division_at_s"], json!(30.0));
    assert_eq!(division["water_permeability_pl_s_mm"], json!(0.0));
    assert_eq!(division["solute_permeability_pl_s"], json!(0.0));
}
