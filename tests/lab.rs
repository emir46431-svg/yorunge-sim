use serde_json::json;
use yorunge_sim::lab::{Body, Scene, Shape, Spring, presets, run_json, run_scene};

fn single(body: Body, duration_s: f32) -> Scene {
    Scene {
        duration_s,
        floor_restitution: 0.0,
        bodies: vec![body],
        ..Scene::default()
    }
}

#[test]
fn free_fall_matches_analytic_motion_before_contact() {
    let result = run_scene(single(
        Body {
            position: [0.0, 15.0, 0.0],
            velocity: [2.0, 1.0, -0.5],
            ..Body::default()
        },
        1.0,
    ))
    .unwrap();
    let end = &result.frames.last().unwrap().bodies[0];
    assert!((end.position[0] - 2.0).abs() < 0.002);
    assert!((end.position[1] - (15.0 + 1.0 - 0.5 * 9.81)).abs() < 0.05);
    assert!((end.position[2] + 0.5).abs() < 0.002);
    assert!((end.velocity[1] - (1.0 - 9.81)).abs() < 0.005);
}

#[test]
fn sphere_lands_with_center_one_radius_above_ground() {
    let result = run_scene(single(
        Body {
            position: [0.0, 3.0, 0.0],
            restitution: 0.0,
            ..Body::default()
        },
        4.0,
    ))
    .unwrap();
    for frame in &result.frames {
        assert!(
            frame.bodies[0].position[1] >= 0.47,
            "floor penetration at {}",
            frame.t_s
        );
    }
    let end = &result.frames.last().unwrap().bodies[0];
    assert!((end.position[1] - 0.5).abs() < 0.015);
    assert!(end.velocity[1].abs() < 0.05);
}

#[test]
fn boxes_and_cylinders_use_full_dimensions_and_stable_contacts() {
    for shape in [Shape::Box, Shape::Cylinder] {
        let result = run_scene(single(
            Body {
                shape,
                size: [1.0, 2.0, 1.0],
                restitution: 0.0,
                ..Body::default()
            },
            4.0,
        ))
        .unwrap();
        let end = &result.frames.last().unwrap().bodies[0];
        assert!(
            (end.position[1] - 1.0).abs() < 0.03,
            "shape={shape:?}: {end:?}"
        );
    }
}

#[test]
fn fixed_bodies_ignore_velocity_and_remain_at_their_pose() {
    let result = run_scene(single(
        Body {
            shape: Shape::Box,
            fixed: true,
            position: [2.0, 4.0, -1.0],
            rotation_deg: [90.0, 90.0, 0.0],
            velocity: [10.0; 3],
            angular_velocity: [5.0; 3],
            ..Body::default()
        },
        2.0,
    ))
    .unwrap();
    for frame in result.frames {
        let body = &frame.bodies[0];
        assert_eq!(body.position, [2.0, 4.0, -1.0]);
        assert_eq!(body.velocity, [0.0; 3]);
        assert_eq!(body.angular_velocity, [0.0; 3]);
        for component in body.rotation {
            assert!(
                (component - 0.5).abs() < 1e-5,
                "THREE XYZ rotation must agree"
            );
        }
    }
}

#[test]
fn collision_preserves_horizontal_momentum_without_external_forces() {
    let scene = Scene {
        gravity: [0.0; 3],
        duration_s: 2.0,
        bodies: vec![
            Body {
                id: "left".into(),
                position: [-2.0, 10.0, 0.0],
                velocity: [3.0, 0.0, 0.0],
                mass_kg: 2.0,
                restitution: 1.0,
                friction: 0.0,
                ..Body::default()
            },
            Body {
                id: "right".into(),
                position: [2.0, 10.0, 0.0],
                velocity: [-1.0, 0.0, 0.0],
                mass_kg: 1.0,
                restitution: 1.0,
                friction: 0.0,
                ..Body::default()
            },
        ],
        ..Scene::default()
    };
    let result = run_scene(scene).unwrap();
    for frame in &result.frames {
        let momentum = 2.0 * frame.bodies[0].velocity[0] + frame.bodies[1].velocity[0];
        assert!((momentum - 5.0).abs() < 0.025, "momentum={momentum}");
    }
    let end = result.frames.last().unwrap();
    assert!(end.bodies[0].velocity[0] < 1.0);
    assert!(end.bodies[1].velocity[0] > 4.0);
}

#[test]
fn restitution_increases_rebound_height() {
    let bounce = |restitution| {
        let result = run_scene(single(
            Body {
                position: [0.0, 3.0, 0.0],
                restitution,
                ..Body::default()
            },
            2.0,
        ))
        .unwrap();
        result
            .frames
            .iter()
            .filter(|f| f.t_s > 0.8)
            .map(|f| f.bodies[0].position[1])
            .fold(0.0_f32, f32::max)
    };
    let dead = bounce(0.0);
    let elastic = bounce(0.9);
    assert!(dead < 0.55, "dead bounce={dead}");
    assert!(elastic > 2.0, "elastic bounce={elastic}");
}

#[test]
fn friction_slows_a_sliding_box() {
    let distance = |friction| {
        let mut scene = single(
            Body {
                shape: Shape::Box,
                position: [0.0, 0.5, 0.0],
                velocity: [3.0, 0.0, 0.0],
                friction,
                restitution: 0.0,
                ..Body::default()
            },
            2.0,
        );
        scene.floor_friction = friction;
        run_scene(scene).unwrap().frames.last().unwrap().bodies[0].position[0]
    };
    assert!(distance(0.0) > 5.8);
    assert!(distance(1.0) < 1.0);
}

#[test]
fn damped_spring_converges_to_static_equilibrium_and_stays_finite() {
    let scene = Scene {
        duration_s: 12.0,
        bodies: vec![
            Body {
                id: "anchor".into(),
                position: [0.0, 8.0, 0.0],
                fixed: true,
                size: [0.2; 3],
                ..Body::default()
            },
            Body {
                id: "weight".into(),
                position: [0.0, 4.0, 0.0],
                size: [0.5; 3],
                ..Body::default()
            },
        ],
        springs: vec![Spring {
            a: "anchor".into(),
            b: "weight".into(),
            rest_length_m: 2.0,
            stiffness_n_m: 25.0,
            damping_n_s_m: 5.0,
            ..Spring::default()
        }],
        ..Scene::default()
    };
    let result = run_scene(scene).unwrap();
    for frame in &result.frames {
        let b = &frame.bodies[1];
        assert!(
            b.position
                .iter()
                .chain(&b.velocity)
                .chain(&b.rotation)
                .all(|v| v.is_finite())
        );
        assert!(b.position[1] > 3.0);
    }
    let end = &result.frames.last().unwrap().bodies[1];
    let equilibrium_y = 8.0 - (2.0 + 9.81 / 25.0);
    assert!((end.position[1] - equilibrium_y).abs() < 0.06, "{end:?}");
    assert!(end.velocity[1].abs() < 0.03);
}

#[test]
fn same_scene_produces_identical_frames() {
    let scene: Scene = serde_json::from_value(presets()["presets"][3]["scene"].clone()).unwrap();
    let first = run_scene(scene.clone()).unwrap();
    let second = run_scene(scene).unwrap();
    assert_eq!(
        serde_json::to_value(first.frames).unwrap(),
        serde_json::to_value(second.frames).unwrap()
    );
}

#[test]
fn validation_rejects_unknown_fields_and_invalid_topology() {
    assert!(
        run_json(r#"{"unsupported":42}"#)
            .unwrap_err()
            .contains("unknown field")
    );
    assert!(
        run_json(r#"{"bodies":[{"unknown":1}]}"#)
            .unwrap_err()
            .contains("unknown field")
    );
    assert!(run_json(r#"{"bodies":[{"shape":"cone"}]}"#).is_err());
    let mut scene = single(Body::default(), 1.0);
    scene.bodies.push(Body::default());
    assert!(scene.validate().unwrap_err().contains("Tekrarlanan"));
    scene.bodies.pop();
    scene.springs.push(Spring {
        a: "body-1".into(),
        b: "missing".into(),
        ..Spring::default()
    });
    assert!(scene.validate().unwrap_err().contains("bulunamadı"));
    scene.springs[0].b = "body-1".into();
    assert!(scene.validate().unwrap_err().contains("farklı"));
}

#[test]
fn validation_enforces_numeric_resource_and_schema_bounds() {
    for invalid in [
        json!({"schema_version":2}),
        json!({"sample_hz":120}),
        json!({"duration_s":30.1}),
        json!({"gravity":[0,-31,0]}),
        json!({"floor_friction":2.01}),
        json!({"bodies":[{"mass_kg":0}]}),
        json!({"bodies":[{"size":[0.09,1,1]}]}),
        json!({"bodies":[{"position":[0,-0.01,0]}]}),
        json!({"bodies":[{"restitution":1.1}]}),
        json!({"bodies":[{"velocity":[31,0,0]}]}),
        json!({"bodies":[{"angular_velocity":[21,0,0]}]}),
    ] {
        let scene: Scene = serde_json::from_value(invalid).unwrap();
        assert!(scene.validate().is_err(), "{scene:?}");
    }
    let mut scene = Scene {
        bodies: (0..61)
            .map(|i| Body {
                id: format!("b{i}"),
                ..Body::default()
            })
            .collect(),
        ..Scene::default()
    };
    assert!(scene.validate().is_err());
    scene.bodies.truncate(1);
    scene.bodies[0].mass_kg = f32::NAN;
    assert!(scene.validate().is_err());
    scene.bodies[0].mass_kg = 1.0;
    scene.gravity[0] = f32::INFINITY;
    assert!(scene.validate().is_err());
    assert!(
        run_json(&" ".repeat(256 * 1024 + 1))
            .unwrap_err()
            .contains("256 KiB")
    );
}

#[test]
fn sample_budget_and_fractional_duration_are_explicit() {
    let result = run_scene(Scene {
        sample_hz: 60,
        duration_s: 30.0,
        ..Scene::default()
    })
    .unwrap();
    assert_eq!(result.frames.len(), 1801);
    assert_eq!(result.summary.duration_s, 30.0);
    let result = run_scene(Scene {
        duration_s: 0.105,
        ..Scene::default()
    })
    .unwrap();
    assert!(result.summary.duration_s >= 0.105);
    assert!(result.summary.duration_s - 0.105 < 1.0 / 120.0);
    assert_eq!(result.frames.last().unwrap().t_s, result.summary.duration_s);
    assert_eq!(result.frames.len(), result.summary.frame_count);
}

#[test]
fn all_curated_presets_validate_and_serialize() {
    for preset in presets()["presets"].as_array().unwrap() {
        let mut scene: Scene = serde_json::from_value(preset["scene"].clone()).unwrap();
        scene.validate().unwrap();
        scene.duration_s = 0.1;
        let result: serde_json::Value =
            serde_json::from_str(&run_json(&serde_json::to_string(&scene).unwrap()).unwrap())
                .unwrap();
        assert_eq!(result["engine"], "rapier3d-0.36.1");
        assert_eq!(
            result["frames"][0]["bodies"].as_array().unwrap().len(),
            scene.bodies.len()
        );
    }
}
