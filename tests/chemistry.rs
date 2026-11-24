use serde_json::json;
use std::collections::BTreeMap;
use yorunge_sim::chemistry::{
    Atom, Bond, Element, MoleculeScene, analyze_json, analyze_scene, presets,
};

fn preset(id: &str) -> MoleculeScene {
    let all = presets();
    let item = all["presets"]
        .as_array()
        .unwrap()
        .iter()
        .find(|p| p["id"] == id)
        .unwrap();
    serde_json::from_value(item["scene"].clone()).unwrap()
}

fn parse(value: serde_json::Value) -> MoleculeScene {
    serde_json::from_value(value).unwrap()
}

#[test]
fn water_analysis_reports_connectivity_valence_and_counts() {
    let result = analyze_scene(preset("water")).unwrap();
    assert_eq!(result.model, "hcno-covalent-graph-v1");
    assert_eq!(result.totals.atoms, 3);
    assert_eq!(result.totals.bonds, 2);
    assert_eq!(result.totals.element_counts["H"], 2);
    assert_eq!(result.totals.element_counts["O"], 1);
    assert_eq!(result.totals.element_counts["C"], 0);
    assert_eq!(result.totals.element_counts["N"], 0);
    assert_eq!(result.components.len(), 1);
    assert_eq!(result.components[0].name.as_deref(), Some("Su"));
    assert_eq!(result.components[0].formula, "H2O");
    assert!(result.components[0].complete_valence);
    assert_eq!(
        result
            .atoms
            .iter()
            .find(|a| a.id == "o1")
            .unwrap()
            .used_valence,
        2
    );
    assert!(result.atoms.iter().all(|a| a.used_valence == a.max_valence));
}

#[test]
fn breaking_and_recreating_bonds_preserves_every_atom() {
    let water = preset("water");
    let mut broken = water.clone();
    broken.bonds.pop();
    let result = analyze_scene(broken).unwrap();
    assert_eq!(result.scene.atoms, water.atoms);
    assert_eq!(result.components.len(), 2);
    assert!(result.components.iter().all(|part| part.name.is_none()));
    assert!(result.components.iter().any(|part| part.formula == "HO"));
    assert!(result.components.iter().any(|part| part.formula == "H"));
    let mut restored = result.scene;
    restored.bonds.push(water.bonds.last().unwrap().clone());
    let restored = analyze_scene(restored).unwrap();
    assert_eq!(restored.scene.atoms, water.atoms);
    assert_eq!(restored.components[0].name.as_deref(), Some("Su"));
    assert_eq!(restored.totals.atoms, 3);
}

#[test]
fn stoichiometry_examples_conserve_exact_atom_identities_and_elements() {
    let before = analyze_scene(preset("water-before")).unwrap();
    let after = analyze_scene(preset("water-after")).unwrap();
    let identities = |scene: &MoleculeScene| -> BTreeMap<String, Element> {
        scene
            .atoms
            .iter()
            .map(|a| (a.id.clone(), a.element))
            .collect()
    };
    assert_eq!(identities(&before.scene), identities(&after.scene));
    assert_eq!(before.totals.element_counts, after.totals.element_counts);
    assert_eq!(before.totals.atoms, 6);
    assert_eq!(before.totals.element_counts["H"], 4);
    assert_eq!(before.totals.element_counts["O"], 2);
    assert_eq!(
        before
            .components
            .iter()
            .filter(|p| p.formula == "H2")
            .count(),
        2
    );
    assert_eq!(
        before
            .components
            .iter()
            .filter(|p| p.formula == "O2")
            .count(),
        1
    );
    assert_eq!(after.components.len(), 2);
    assert!(
        after
            .components
            .iter()
            .all(|p| p.formula == "H2O" && p.name.as_deref() == Some("Su"))
    );
    assert!(
        before
            .components
            .iter()
            .chain(&after.components)
            .all(|p| p.complete_valence)
    );
}

#[test]
fn all_presets_validate_and_named_examples_match_exactly() {
    let expected = [
        ("water", "H2O", "Su"),
        ("carbon-dioxide", "CO2", "Karbondioksit"),
        ("methane", "CH4", "Metan"),
        ("ammonia", "NH3", "Amonyak"),
        ("hydrogen", "H2", "Hidrojen"),
        ("oxygen", "O2", "Oksijen"),
        ("nitrogen", "N2", "Azot"),
    ];
    for (id, formula, name) in expected {
        let result = analyze_scene(preset(id)).unwrap();
        assert_eq!(result.components.len(), 1);
        assert_eq!(result.components[0].formula, formula);
        assert_eq!(result.components[0].name.as_deref(), Some(name));
        assert!(result.components[0].complete_valence);
    }
    let all = presets();
    assert_eq!(all["presets"].as_array().unwrap().len(), 10);
    for item in all["presets"].as_array().unwrap() {
        let scene: MoleculeScene = serde_json::from_value(item["scene"].clone()).unwrap();
        scene.validate().unwrap();
        let json_result = analyze_json(&serde_json::to_string(&scene).unwrap()).unwrap();
        let result: serde_json::Value = serde_json::from_str(&json_result).unwrap();
        assert_eq!(result["totals"]["atoms"], scene.atoms.len());
    }
    let disconnected = analyze_scene(preset("water-parts")).unwrap();
    assert_eq!(disconnected.components.len(), 3);
    assert!(
        disconnected
            .components
            .iter()
            .all(|c| c.name.is_none() && !c.complete_valence)
    );
}

#[test]
fn recognition_ignores_ids_order_and_drawing_coordinates() {
    let mut scene = preset("methane");
    let renames: BTreeMap<_, _> = scene
        .atoms
        .iter()
        .enumerate()
        .map(|(i, a)| (a.id.clone(), format!("renamed_{i}")))
        .collect();
    for atom in &mut scene.atoms {
        atom.id = renames[&atom.id].clone();
        atom.position = [25.0, -10.0, 0.0];
    }
    scene.atoms.reverse();
    for bond in &mut scene.bonds {
        let a = renames[&bond.a].clone();
        let b = renames[&bond.b].clone();
        bond.a = b;
        bond.b = a;
    }
    scene.bonds.reverse();
    let result = analyze_scene(scene.clone()).unwrap();
    assert_eq!(result.components[0].name.as_deref(), Some("Metan"));
    assert_eq!(result.scene.atoms, scene.atoms);
    assert!(result.scene.bonds.iter().all(|b| b.a < b.b));
}

#[test]
fn ethane_matches_element_labeled_graph() {
    let mut scene = MoleculeScene::default();
    for (id, element) in [
        ("c1", Element::C),
        ("c2", Element::C),
        ("h1", Element::H),
        ("h2", Element::H),
        ("h3", Element::H),
        ("h4", Element::H),
        ("h5", Element::H),
        ("h6", Element::H),
    ] {
        scene.atoms.push(Atom {
            id: id.into(),
            element,
            position: [0.0; 3],
        });
    }
    for (a, b) in [
        ("c1", "c2"),
        ("c1", "h1"),
        ("c1", "h2"),
        ("c1", "h3"),
        ("c2", "h4"),
        ("c2", "h5"),
        ("c2", "h6"),
    ] {
        scene.bonds.push(Bond {
            a: a.into(),
            b: b.into(),
            order: 1,
        });
    }
    let result = analyze_scene(scene).unwrap();
    assert_eq!(result.components[0].name.as_deref(), Some("Etan"));
    assert_eq!(result.components[0].formula, "C2H6");
    assert!(result.components[0].complete_valence);
}

#[test]
fn formulas_alone_and_wrong_bond_orders_do_not_receive_known_names() {
    let mut oxygen = preset("oxygen");
    oxygen.bonds[0].order = 1;
    let oxygen = analyze_scene(oxygen).unwrap();
    assert_eq!(oxygen.components[0].formula, "O2");
    assert!(oxygen.components[0].name.is_none());
    assert!(!oxygen.components[0].complete_valence);
    let mut carbon_dioxide = preset("carbon-dioxide");
    carbon_dioxide.bonds = vec![
        Bond {
            a: "c1".into(),
            b: "o1".into(),
            order: 1,
        },
        Bond {
            a: "o1".into(),
            b: "o2".into(),
            order: 1,
        },
    ];
    let carbon_dioxide = analyze_scene(carbon_dioxide).unwrap();
    assert_eq!(carbon_dioxide.components[0].formula, "CO2");
    assert!(carbon_dioxide.components[0].name.is_none());
    assert!(!carbon_dioxide.components[0].complete_valence);
}

#[test]
fn unknown_complete_graph_is_not_claimed_as_a_known_molecule() {
    // Hydrogen peroxide is deliberately outside the eight recognition templates.
    let result = analyze_scene(parse(json!({"atoms":[
        {"id":"h1","element":"H","position":[0,0,0]}, {"id":"h2","element":"H","position":[0,0,0]},
        {"id":"o1","element":"O","position":[0,0,0]}, {"id":"o2","element":"O","position":[0,0,0]}
    ],"bonds":[{"a":"h1","b":"o1","order":1},{"a":"o1","b":"o2","order":1},{"a":"o2","b":"h2","order":1}]}))).unwrap();
    assert_eq!(result.components[0].formula, "H2O2");
    assert!(result.components[0].name.is_none());
    assert!(result.components[0].complete_valence);
}

#[test]
fn valence_counts_bond_order_and_rejects_every_element_overflow() {
    for (id, element, max) in [
        ("hydrogen", Element::H, 1),
        ("methane", Element::C, 4),
        ("ammonia", Element::N, 3),
        ("water", Element::O, 2),
    ] {
        let mut scene = preset(id);
        let center = scene
            .atoms
            .iter()
            .find(|a| a.element == element)
            .unwrap()
            .id
            .clone();
        scene.atoms.push(Atom {
            id: "extra_h".into(),
            element: Element::H,
            position: [0.0; 3],
        });
        scene.bonds.push(Bond {
            a: center,
            b: "extra_h".into(),
            order: 1,
        });
        assert!(
            scene.validate().unwrap_err().contains("valans"),
            "element={element:?}, max={max}"
        );
    }
    let nitrogen = analyze_scene(preset("nitrogen")).unwrap();
    assert_eq!(nitrogen.atoms[0].used_valence, 3);
    assert_eq!(nitrogen.totals.bonds, 1);
    let mut hydrogen = preset("hydrogen");
    hydrogen.bonds[0].order = 2;
    assert!(hydrogen.validate().is_err());
}

#[test]
fn invalid_topology_and_atom_ids_are_rejected() {
    let mut scene = preset("water");
    scene.atoms.push(scene.atoms[0].clone());
    assert!(scene.validate().unwrap_err().contains("Tekrarlanan atom"));
    for invalid_id in ["", " ", "with space", "bad<id", "ş", &"a".repeat(65)] {
        let scene = MoleculeScene {
            atoms: vec![Atom {
                id: invalid_id.into(),
                element: Element::H,
                position: [0.0; 3],
            }],
            ..MoleculeScene::default()
        };
        assert!(scene.validate().is_err(), "id={invalid_id:?}");
    }
    let mut scene = preset("water");
    let mut duplicate = scene.bonds[0].clone();
    std::mem::swap(&mut duplicate.a, &mut duplicate.b);
    scene.bonds.push(duplicate);
    assert!(scene.validate().unwrap_err().contains("Tekrarlanan bağ"));
    scene.bonds.pop();
    scene.bonds[0].b = "missing".into();
    assert!(scene.validate().unwrap_err().contains("bulunamadı"));
    scene.bonds[0].b = scene.bonds[0].a.clone();
    assert!(scene.validate().unwrap_err().contains("kendisine"));
    for order in [0, 4, 255] {
        let mut scene = preset("hydrogen");
        scene.bonds[0].order = order;
        assert!(scene.validate().unwrap_err().contains("derecesi"));
    }
}

#[test]
fn unknown_fields_unsupported_elements_and_missing_atom_fields_are_rejected() {
    for input in [
        r#"{"surprise":1}"#,
        r#"{"atoms":[{"id":"a","element":"H","position":[0,0,0],"mass":1}]}"#,
        r#"{"bonds":[{"a":"a","b":"b","order":1,"surprise":1}]}"#,
        r#"{"atoms":[{"id":"a","element":"Fe","position":[0,0,0]}]}"#,
        r#"{"atoms":[{"id":"a","element":"h","position":[0,0,0]}]}"#,
        r#"{"atoms":[{"id":"a","position":[0,0,0]}]}"#,
        r#"{"atoms":[{"id":"a","element":"H"}]}"#,
        r#"{"schema_version":2}"#,
    ] {
        assert!(analyze_json(input).is_err(), "input={input}");
    }
}

#[test]
fn coordinate_and_resource_limits_are_enforced_without_rejecting_empty_scene() {
    for invalid in [f64::NAN, f64::INFINITY, f64::NEG_INFINITY, -50.001, 50.001] {
        let mut scene = preset("hydrogen");
        scene.atoms[0].position[1] = invalid;
        assert!(scene.validate().is_err());
    }
    let mut scene = preset("hydrogen");
    scene.atoms[0].position = [-50.0, 50.0, 0.0];
    scene.validate().unwrap();
    let scene = MoleculeScene {
        atoms: (0..61)
            .map(|i| Atom {
                id: format!("a{i}"),
                element: Element::H,
                position: [0.0; 3],
            })
            .collect(),
        ..MoleculeScene::default()
    };
    assert!(scene.validate().unwrap_err().contains("60 atom"));
    let mut scene = preset("hydrogen");
    scene.bonds = vec![scene.bonds[0].clone(); 91];
    assert!(scene.validate().unwrap_err().contains("90 bağ"));
    assert!(
        analyze_json(&" ".repeat(256 * 1024 + 1))
            .unwrap_err()
            .contains("256 KiB")
    );
    let empty = analyze_scene(MoleculeScene::default()).unwrap();
    assert!(empty.components.is_empty());
    assert_eq!(empty.totals.atoms, 0);
    assert_eq!(empty.totals.bonds, 0);
}

#[test]
fn maximum_graph_size_is_analyzed_without_template_search_explosion() {
    let mut scene = MoleculeScene {
        atoms: (0..60)
            .map(|i| Atom {
                id: format!("n{i}"),
                element: Element::N,
                position: [0.0; 3],
            })
            .collect(),
        ..MoleculeScene::default()
    };
    for i in 0..60 {
        scene.bonds.push(Bond {
            a: format!("n{i}"),
            b: format!("n{}", (i + 1) % 60),
            order: 1,
        });
    }
    for i in 0..30 {
        scene.bonds.push(Bond {
            a: format!("n{i}"),
            b: format!("n{}", i + 30),
            order: 1,
        });
    }
    let result = analyze_scene(scene).unwrap();
    assert_eq!(result.totals.atoms, 60);
    assert_eq!(result.totals.bonds, 90);
    assert_eq!(result.components[0].formula, "N60");
    assert!(result.components[0].name.is_none());
    assert!(result.components[0].complete_valence);
}
