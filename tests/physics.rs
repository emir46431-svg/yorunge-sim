use yorunge_sim::{Parameters, simulate, simulate_json};

fn close(actual: f64, expected: f64, tolerance: f64) {
    assert!(
        (actual - expected).abs() <= tolerance,
        "actual={actual}, expected={expected}, tolerance={tolerance}"
    );
}

#[test]
fn vacuum_matches_analytical_solution() {
    for angle in [-60.0_f64, 0.0, 40.0, 90.0] {
        let p = Parameters {
            pressure_hpa: 0.0,
            angle_deg: angle,
            time_step_s: 0.037,
            ..Parameters::default()
        };
        let vx = p.speed_m_s * angle.to_radians().cos();
        let vy = p.speed_m_s * angle.to_radians().sin();
        let t = (vy + (vy * vy + 2.0 * p.gravity_m_s2 * p.height_m).sqrt()) / p.gravity_m_s2;
        let peak = p.height_m + vy.max(0.0).powi(2) / (2.0 * p.gravity_m_s2);
        let result = simulate(p).unwrap();
        assert_eq!(result.status, "landed");
        close(result.summary.flight_time_s.unwrap(), t, 1e-8);
        close(result.summary.landing_x_m.unwrap(), vx * t, 1e-8);
        close(result.summary.maximum_height_m, peak, 1e-8);
        assert_eq!(result.trajectory.last().unwrap().y_m, 0.0);
    }
}

#[test]
fn vacuum_does_not_depend_on_mass_diameter_or_wind() {
    let p = Parameters {
        pressure_hpa: 0.0,
        ..Parameters::default()
    };
    let a = simulate(p.clone()).unwrap();
    let b = simulate(Parameters {
        mass_g: 9000.0,
        diameter_cm: 30.0,
        wind_m_s: -25.0,
        ..p
    })
    .unwrap();
    close(a.summary.elapsed_s, b.summary.elapsed_s, 1e-12);
    close(
        a.summary.horizontal_displacement_m,
        b.summary.horizontal_displacement_m,
        1e-12,
    );
}

#[test]
fn drag_reduces_horizontal_travel_in_still_air() {
    let air = simulate(Parameters::default()).unwrap();
    let vacuum = simulate(Parameters {
        pressure_hpa: 0.0,
        ..Parameters::default()
    })
    .unwrap();
    assert!(air.summary.horizontal_displacement_m < vacuum.summary.horizontal_displacement_m);
}

#[test]
fn wind_force_uses_relative_velocity_and_can_reverse_motion() {
    let p = Parameters {
        speed_m_s: 0.0,
        height_m: 3.0,
        wind_m_s: -12.0,
        ..Parameters::default()
    };
    let left = simulate(p.clone()).unwrap();
    let right = simulate(Parameters {
        wind_m_s: 12.0,
        ..p
    })
    .unwrap();
    assert!(left.summary.horizontal_displacement_m < 0.0);
    close(
        left.summary.horizontal_displacement_m,
        -right.summary.horizontal_displacement_m,
        1e-9,
    );
    close(left.summary.elapsed_s, right.summary.elapsed_s, 1e-9);
}

#[test]
fn vertical_fall_matches_quadratic_drag_closed_form() {
    let p = Parameters {
        speed_m_s: 0.0,
        height_m: 100.0,
        mass_g: 10.0,
        max_time_s: 2.0,
        ..Parameters::default()
    };
    let result = simulate(p.clone()).unwrap();
    assert_eq!(result.status, "time_limit");
    let k = 0.5
        * result.derived.air_density_kg_m3
        * p.drag_coefficient
        * result.derived.cross_section_m2
        / (p.mass_g / 1000.0);
    let terminal = (p.gravity_m_s2 / k).sqrt();
    let vy = -terminal * (p.gravity_m_s2 * p.max_time_s / terminal).tanh();
    let height = p.height_m - (p.gravity_m_s2 * p.max_time_s / terminal).cosh().ln() / k;
    let last = result.trajectory.last().unwrap();
    close(last.vy_m_s, vy, 1e-6);
    close(last.y_m, height, 1e-6);
}

#[test]
fn smaller_time_step_converges_to_same_trajectory_summary() {
    let p = Parameters {
        mass_g: 15.0,
        diameter_cm: 6.0,
        wind_m_s: -8.0,
        ..Parameters::default()
    };
    let fine = simulate(Parameters {
        time_step_s: 0.001,
        ..p.clone()
    })
    .unwrap();
    let coarse = simulate(Parameters {
        time_step_s: 0.05,
        ..p
    })
    .unwrap();
    close(coarse.summary.elapsed_s, fine.summary.elapsed_s, 0.0001);
    close(
        coarse.summary.horizontal_displacement_m,
        fine.summary.horizontal_displacement_m,
        0.001,
    );
    close(
        coarse.summary.maximum_height_m,
        fine.summary.maximum_height_m,
        0.001,
    );
}

#[test]
fn no_ground_penetration_and_time_strictly_increases() {
    let r = simulate(Parameters::default()).unwrap();
    assert!(r.trajectory.iter().all(|p| p.y_m >= 0.0));
    assert!(r.trajectory.windows(2).all(|p| p[1].t_s > p[0].t_s));
}

#[test]
fn starting_on_ground_handles_upward_and_downward_launches() {
    for angle in [-45.0, 0.0] {
        let r = simulate(Parameters {
            height_m: 0.0,
            angle_deg: angle,
            ..Parameters::default()
        })
        .unwrap();
        assert_eq!(r.trajectory.len(), 1);
        assert_eq!(r.summary.flight_time_s, Some(0.0));
    }
    let r = simulate(Parameters {
        height_m: 0.0,
        angle_deg: 40.0,
        ..Parameters::default()
    })
    .unwrap();
    assert!(r.summary.elapsed_s > 0.0);
}

#[test]
fn time_limit_is_explicit_and_never_fabricates_landing() {
    let r = simulate(Parameters {
        max_time_s: 0.025,
        ..Parameters::default()
    })
    .unwrap();
    assert_eq!(r.status, "time_limit");
    assert!(r.summary.flight_time_s.is_none());
    assert!(r.summary.landing_x_m.is_none());
    close(r.summary.elapsed_s, 0.025, 1e-12);
}

#[test]
fn input_validation_rejects_mistakes_instead_of_hiding_them() {
    for input in [
        "{",
        "{\"mass_g\":0}",
        "{\"energy\":20}",
        "{\"mass_g\":\"100\"}",
        "{\"temperature_c\":-273.15}",
        "{\"pressure_hpa\":-1}",
        "{\"time_step_s\":0}",
    ] {
        assert!(simulate_json(input).is_err(), "accepted: {input}");
    }
    assert!(
        simulate(Parameters {
            speed_m_s: f64::NAN,
            ..Parameters::default()
        })
        .is_err()
    );
    assert!(
        simulate(Parameters {
            gravity_m_s2: f64::INFINITY,
            ..Parameters::default()
        })
        .is_err()
    );
    assert!(simulate_json("{}").is_ok());
}

#[test]
fn unit_conversion_and_air_density_are_consistent() {
    let r = simulate(Parameters::default()).unwrap();
    close(
        r.derived.cross_section_m2,
        std::f64::consts::PI * 0.02_f64.powi(2),
        1e-12,
    );
    close(r.derived.air_density_kg_m3, 1.225, 0.0001);
}

#[test]
fn light_large_body_stays_finite_with_internal_substeps() {
    let r = simulate(Parameters {
        mass_g: 1.0,
        diameter_cm: 50.0,
        drag_coefficient: 2.0,
        wind_m_s: -30.0,
        speed_m_s: 60.0,
        max_time_s: 0.5,
        time_step_s: 0.05,
        ..Parameters::default()
    })
    .unwrap();
    assert!(r.trajectory.iter().all(|p| p.x_m.is_finite()
        && p.y_m.is_finite()
        && p.vx_m_s.is_finite()
        && p.vy_m_s.is_finite()));
}

#[test]
fn mechanical_energy_decreases_without_wind() {
    let p = Parameters::default();
    let g = p.gravity_m_s2;
    let r = simulate(p).unwrap();
    let energy = |p: &yorunge_sim::Point| 0.5 * (p.vx_m_s.powi(2) + p.vy_m_s.powi(2)) + g * p.y_m;
    assert!(
        r.trajectory
            .windows(2)
            .all(|w| energy(&w[1]) <= energy(&w[0]) + 1e-8)
    );
}

#[test]
fn identical_parameters_give_identical_json() {
    assert_eq!(simulate_json("{}").unwrap(), simulate_json("{}").unwrap());
}
