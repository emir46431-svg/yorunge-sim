//! Three-dimensional rigid-body mechanics in SI units, backed by Rapier.
//!
//! The scene is deliberately small and bounded for interactive, local experiments.
//! Material names are labels; numerical friction, restitution and mass are authoritative.

use rapier3d::prelude::*;
use serde::{Deserialize, Serialize};
use serde_json::{Value, json};
use std::collections::{HashMap, HashSet};

pub const ENGINE: &str = "rapier3d-0.36.1";
pub const INTERNAL_HZ: u32 = 120;
pub const MAX_INPUT_BYTES: usize = 256 * 1024;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct Scene {
    pub schema_version: u32,
    pub name: String,
    pub gravity: [f32; 3],
    pub duration_s: f32,
    pub sample_hz: u32,
    pub floor_friction: f32,
    pub floor_restitution: f32,
    pub bodies: Vec<Body>,
    pub springs: Vec<Spring>,
}

impl Default for Scene {
    fn default() -> Self {
        Self {
            schema_version: 1,
            name: "Yeni mekanik deneyi".into(),
            gravity: [0.0, -9.81, 0.0],
            duration_s: 10.0,
            sample_hz: 30,
            floor_friction: 0.7,
            floor_restitution: 0.2,
            bodies: Vec::new(),
            springs: Vec::new(),
        }
    }
}

#[derive(Debug, Clone, Copy, Default, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub enum Shape {
    #[default]
    Sphere,
    Box,
    Cylinder,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct Body {
    pub id: String,
    pub label: String,
    pub shape: Shape,
    /// Full dimensions: sphere diameter x; cylinder diameter x and height y.
    pub size: [f32; 3],
    /// Center of mass, in meters. The floor surface is y = 0.
    pub position: [f32; 3],
    /// Intrinsic XYZ Euler angles, matching THREE.Euler's default order.
    pub rotation_deg: [f32; 3],
    pub velocity: [f32; 3],
    /// World-space angular velocity, in radians per second.
    pub angular_velocity: [f32; 3],
    pub mass_kg: f32,
    pub friction: f32,
    pub restitution: f32,
    pub fixed: bool,
    pub material: String,
}

impl Default for Body {
    fn default() -> Self {
        Self {
            id: "body-1".into(),
            label: "Cisim".into(),
            shape: Shape::Sphere,
            size: [1.0; 3],
            position: [0.0, 3.0, 0.0],
            rotation_deg: [0.0; 3],
            velocity: [0.0; 3],
            angular_velocity: [0.0; 3],
            mass_kg: 1.0,
            friction: 0.5,
            restitution: 0.3,
            fixed: false,
            material: "custom".into(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct Spring {
    pub id: String,
    pub a: String,
    pub b: String,
    pub rest_length_m: f32,
    pub stiffness_n_m: f32,
    pub damping_n_s_m: f32,
}

impl Default for Spring {
    fn default() -> Self {
        Self {
            id: "spring-1".into(),
            a: String::new(),
            b: String::new(),
            rest_length_m: 2.0,
            stiffness_n_m: 25.0,
            damping_n_s_m: 1.0,
        }
    }
}

fn bounded(name: &str, value: f32, min: f32, max: f32) -> Result<(), String> {
    if value.is_finite() && value >= min && value <= max {
        Ok(())
    } else {
        Err(format!(
            "{name}: {min} ile {max} arasında sonlu bir sayı olmalı."
        ))
    }
}

fn vector_bound(name: &str, value: [f32; 3], min: f32, max: f32) -> Result<(), String> {
    for (axis, component) in value.into_iter().enumerate() {
        bounded(&format!("{name}[{axis}]"), component, min, max)?;
    }
    Ok(())
}

fn text_bound(name: &str, value: &str, min: usize, max: usize) -> Result<(), String> {
    let len = value.chars().count();
    if len < min || len > max || (min > 0 && value.trim().is_empty()) {
        Err(format!("{name}: {min}–{max} karakter olmalı."))
    } else {
        Ok(())
    }
}

impl Scene {
    pub fn validate(&self) -> Result<(), String> {
        if self.schema_version != 1 {
            return Err("Desteklenmeyen schema_version; sürüm 1 gerekli.".into());
        }
        text_bound("name", &self.name, 1, 120)?;
        bounded("duration_s", self.duration_s, 0.1, 30.0)?;
        if ![30, 60].contains(&self.sample_hz) {
            return Err("sample_hz yalnızca 30 veya 60 olabilir.".into());
        }
        vector_bound("gravity", self.gravity, -30.0, 30.0)?;
        bounded("floor_friction", self.floor_friction, 0.0, 2.0)?;
        bounded("floor_restitution", self.floor_restitution, 0.0, 1.0)?;
        if self.bodies.len() > 60 || self.springs.len() > 16 {
            return Err("Bir sahnede en fazla 60 cisim ve 16 yay olabilir.".into());
        }
        let mut ids = HashSet::new();
        for body in &self.bodies {
            text_bound("body.id", &body.id, 1, 64)?;
            if !ids.insert(body.id.as_str()) {
                return Err(format!("Tekrarlanan id: {}", body.id));
            }
            text_bound("body.label", &body.label, 0, 80)?;
            text_bound("body.material", &body.material, 0, 80)?;
            vector_bound("body.size", body.size, 0.1, 10.0)?;
            vector_bound("body.position", body.position, -40.0, 40.0)?;
            bounded("body.position[1]", body.position[1], 0.0, 40.0)?;
            vector_bound("body.rotation_deg", body.rotation_deg, -3600.0, 3600.0)?;
            vector_bound("body.velocity", body.velocity, -30.0, 30.0)?;
            vector_bound("body.angular_velocity", body.angular_velocity, -20.0, 20.0)?;
            bounded("body.mass_kg", body.mass_kg, 0.01, 1000.0)?;
            bounded("body.friction", body.friction, 0.0, 2.0)?;
            bounded("body.restitution", body.restitution, 0.0, 1.0)?;
        }
        let body_ids = ids.clone();
        for spring in &self.springs {
            text_bound("spring.id", &spring.id, 1, 64)?;
            if !ids.insert(spring.id.as_str()) {
                return Err(format!("Tekrarlanan id: {}", spring.id));
            }
            if spring.a == spring.b {
                return Err(format!("{}: yay iki farklı cisme bağlanmalı.", spring.id));
            }
            if !body_ids.contains(spring.a.as_str()) || !body_ids.contains(spring.b.as_str()) {
                return Err(format!(
                    "{}: yay uçlarından biri sahnede bulunamadı.",
                    spring.id
                ));
            }
            bounded("spring.rest_length_m", spring.rest_length_m, 0.1, 20.0)?;
            bounded("spring.stiffness_n_m", spring.stiffness_n_m, 0.1, 500.0)?;
            bounded("spring.damping_n_s_m", spring.damping_n_s_m, 0.0, 50.0)?;
        }
        Ok(())
    }
}

#[derive(Debug, Clone, Serialize)]
pub struct BodyFrame {
    pub id: String,
    pub position: [f32; 3],
    /// Quaternion in x, y, z, w order, as expected by THREE.Quaternion.
    pub rotation: [f32; 4],
    pub velocity: [f32; 3],
    pub angular_velocity: [f32; 3],
    pub sleeping: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct Frame {
    pub t_s: f32,
    pub bodies: Vec<BodyFrame>,
}

#[derive(Debug, Serialize)]
pub struct LabSummary {
    pub duration_s: f32,
    pub body_count: usize,
    pub frame_count: usize,
}

#[derive(Debug, Serialize)]
pub struct LabResult {
    pub engine: &'static str,
    pub scene: Scene,
    pub frames: Vec<Frame>,
    pub summary: LabSummary,
    pub assumptions: Vec<String>,
}

fn xyz_rotation(degrees: [f32; 3]) -> Rotation {
    let [x, y, z] = degrees.map(|v| v.to_radians() * 0.5);
    let (s1, c1) = x.sin_cos();
    let (s2, c2) = y.sin_cos();
    let (s3, c3) = z.sin_cos();
    // THREE.Quaternion.setFromEuler, order XYZ (qx * qy * qz).
    Rotation::from_xyzw(
        s1 * c2 * c3 + c1 * s2 * s3,
        c1 * s2 * c3 - s1 * c2 * s3,
        c1 * c2 * s3 + s1 * s2 * c3,
        c1 * c2 * c3 - s1 * s2 * s3,
    )
    .normalize()
}

fn finite_body(body: &RigidBody) -> bool {
    body.translation().is_finite()
        && body.rotation().is_finite()
        && body.linvel().is_finite()
        && body.angvel().is_finite()
}

fn sample(world: &PhysicsWorld, handles: &[RigidBodyHandle], scene: &Scene, t_s: f32) -> Frame {
    Frame {
        t_s,
        bodies: scene
            .bodies
            .iter()
            .zip(handles)
            .map(|(body, handle)| {
                let rb = &world.bodies[*handle];
                BodyFrame {
                    id: body.id.clone(),
                    position: rb.translation().to_array(),
                    rotation: rb.rotation().to_array(),
                    velocity: rb.linvel().to_array(),
                    angular_velocity: rb.angvel().to_array(),
                    sleeping: rb.is_sleeping(),
                }
            })
            .collect(),
    }
}

pub fn run_scene(scene: Scene) -> Result<LabResult, String> {
    scene.validate()?;
    let mut world = PhysicsWorld {
        gravity: Vector::from_array(scene.gravity),
        integration_parameters: IntegrationParameters {
            dt: 1.0 / INTERNAL_HZ as f32,
            num_solver_iterations: 8,
            max_ccd_substeps: 4,
            friction_model: FrictionModel::Coulomb,
            ..IntegrationParameters::default()
        },
        ..PhysicsWorld::default()
    };
    // Using a halfspace keeps the visual and physical ground aligned at y = 0
    // even if bodies travel far beyond the initial editing volume.
    world.colliders.insert(
        ColliderBuilder::halfspace(nalgebra::Unit::new_unchecked(Vector::Y))
            .friction(scene.floor_friction)
            .restitution(scene.floor_restitution)
            .friction_combine_rule(CoefficientCombineRule::Average)
            .restitution_combine_rule(CoefficientCombineRule::Max)
            .build(),
    );
    let mut handles = Vec::with_capacity(scene.bodies.len());
    let mut by_id = HashMap::new();
    for body in &scene.bodies {
        let rb = if body.fixed {
            RigidBodyBuilder::fixed()
        } else {
            RigidBodyBuilder::dynamic()
        }
        .pose(Pose::from_parts(
            Vector::from_array(body.position),
            xyz_rotation(body.rotation_deg),
        ))
        .linvel(if body.fixed {
            Vector::ZERO
        } else {
            Vector::from_array(body.velocity)
        })
        .angvel(if body.fixed {
            Vector::ZERO
        } else {
            Vector::from_array(body.angular_velocity)
        })
        .ccd_enabled(true);
        let collider = match body.shape {
            Shape::Sphere => ColliderBuilder::ball(body.size[0] * 0.5),
            Shape::Box => {
                ColliderBuilder::cuboid(body.size[0] * 0.5, body.size[1] * 0.5, body.size[2] * 0.5)
            }
            Shape::Cylinder => ColliderBuilder::cylinder(body.size[1] * 0.5, body.size[0] * 0.5),
        }
        .mass(body.mass_kg)
        .friction(body.friction)
        .restitution(body.restitution)
        .friction_combine_rule(CoefficientCombineRule::Average)
        .restitution_combine_rule(CoefficientCombineRule::Max);
        let (handle, _) = world.insert(rb, collider);
        by_id.insert(body.id.as_str(), handle);
        handles.push(handle);
    }
    for spring in &scene.springs {
        world.impulse_joints.insert(
            by_id[spring.a.as_str()],
            by_id[spring.b.as_str()],
            SpringJointBuilder::new(
                spring.rest_length_m,
                spring.stiffness_n_m,
                spring.damping_n_s_m,
            )
            .local_anchor1(Vector::ZERO)
            .local_anchor2(Vector::ZERO)
            .contacts_enabled(true),
            true,
        );
    }
    // Subtract a tiny arithmetic tolerance so exact tick values such as 0.1 s
    // aren't extended solely because their f32 representation is slightly high.
    let steps =
        ((f64::from(scene.duration_s) * f64::from(INTERNAL_HZ) - 1e-5).ceil() as u32).max(1);
    let sample_every = INTERNAL_HZ / scene.sample_hz;
    let mut frames = Vec::with_capacity((steps / sample_every + 2) as usize);
    frames.push(sample(&world, &handles, &scene, 0.0));
    for tick in 1..=steps {
        world.step();
        if !world.quarantine().is_empty() || handles.iter().any(|h| !finite_body(&world.bodies[*h]))
        {
            return Err(
                "Sayısal çözüm sonlu değil; kütleleri, hızları ve yay sertliğini azaltın.".into(),
            );
        }
        if tick % sample_every == 0 || tick == steps {
            frames.push(sample(
                &world,
                &handles,
                &scene,
                tick as f32 / INTERNAL_HZ as f32,
            ));
        }
    }
    let duration_s = steps as f32 / INTERNAL_HZ as f32;
    let summary = LabSummary {
        duration_s,
        body_count: scene.bodies.len(),
        frame_count: frames.len(),
    };
    Ok(LabResult {
        engine: ENGINE,
        scene,
        frames,
        summary,
        assumptions: vec![
            "SI birimleri: metre, saniye, kilogram, N/m ve N·s/m. Açısal hız rad/s; başlangıç dönüşü XYZ Euler derecedir.".into(),
            "3B katı cisim modeli: küre, kutu ve y eksenli silindir; boyutlar tam genişliktir. Konum kütle merkezidir, zemin y=0 düzlemidir.".into(),
            "Sürtünme katsayıları temas çiftinde aritmetik ortalamayla, sekme katsayıları büyük olanla birleştirilir. Malzeme adı yalnızca görsel etikettir.".into(),
            "Sabit yerçekimi, Coulomb sürtünmesi ve dönme ataleti kullanılır. Hava direnci, deformasyon, akışkanlar, ısı ve elektrik bu modülde yoktur.".into(),
            "Yaylar cisim merkezlerine bağlanır. Rapier örtük yay çözümü, sıfır sönümde bile bir miktar sayısal enerji kaybı ekleyebilir.".into(),
            "Fizik adımı 1/120 saniyedir; 30 veya 60 Hz çıktı alınır. Süre bir sonraki fizik adımına yuvarlanır; gerçek süre summary.duration_s alanındadır.".into(),
            "Başlangıçta kesişen cisimler veya zemine gömülü şekiller çözüm sırasında ayrılır; fiziksel bir deneyi temsil etmeyebilir. Sabit cisimlerin hız girişleri yok sayılır.".into(),
            "CCD ve 8 çözücü yinelemesi kullanılır; küçük temas nüfuzları ve enerji sapmaları mümkündür. Eğitim amaçlıdır; gerçek deney verileriyle doğrulanmış değildir.".into(),
        ],
    })
}

pub fn run_json(input: &str) -> Result<String, String> {
    if input.len() > MAX_INPUT_BYTES {
        return Err("Sahne JSON dosyası en fazla 256 KiB olabilir.".into());
    }
    let scene: Scene =
        serde_json::from_str(input).map_err(|e| format!("Sahne JSON okunamadı: {e}"))?;
    serde_json::to_string(&run_scene(scene)?).map_err(|e| e.to_string())
}

pub fn presets() -> Value {
    let drop_scene = Scene {
        name: "Düşme ve sekme".into(),
        floor_restitution: 0.0,
        duration_s: 8.0,
        bodies: [
            (-2.0, "rubber", "Lastik", 0.85, 0.9),
            (0.0, "wood", "Ahşap", 0.35, 0.6),
            (2.0, "metal", "Metal", 0.1, 0.3),
        ]
        .into_iter()
        .map(|(x, material, label, restitution, friction)| Body {
            id: material.into(),
            label: label.into(),
            material: material.into(),
            position: [x, 5.0, 0.0],
            restitution,
            friction,
            ..Body::default()
        })
        .collect(),
        ..Scene::default()
    };
    let ramp = Body {
        id: "ramp".into(),
        label: "Eğik düzlem".into(),
        shape: Shape::Box,
        size: [8.0, 0.3, 3.0],
        position: [0.0, 1.55, 0.0],
        rotation_deg: [0.0, 0.0, -20.0],
        friction: 0.2,
        restitution: 0.0,
        fixed: true,
        material: "metal".into(),
        ..Body::default()
    };
    let ramp_scene = Scene {
        name: "Eğik düzlem ve sürtünme".into(),
        duration_s: 10.0,
        floor_restitution: 0.0,
        bodies: vec![
            ramp,
            Body {
                id: "slider".into(),
                label: "Kayan kutu".into(),
                shape: Shape::Box,
                size: [0.8; 3],
                position: [-2.4, 3.05, 0.0],
                rotation_deg: [0.0, 0.0, -20.0],
                friction: 0.2,
                restitution: 0.0,
                material: "wood".into(),
                ..Body::default()
            },
        ],
        ..Scene::default()
    };
    let mut dominoes: Vec<_> = (0..8)
        .map(|i| Body {
            id: format!("domino-{i}"),
            label: format!("Domino {}", i + 1),
            shape: Shape::Box,
            size: [0.25, 1.8, 0.8],
            position: [i as f32 * 0.8 - 2.5, 0.91, 0.0],
            mass_kg: 0.5,
            friction: 0.6,
            restitution: 0.05,
            material: "wood".into(),
            ..Body::default()
        })
        .collect();
    dominoes.push(Body {
        id: "striker".into(),
        label: "Başlatıcı küre".into(),
        position: [-4.5, 0.6, 0.0],
        velocity: [4.0, 0.0, 0.0],
        mass_kg: 2.0,
        restitution: 0.2,
        material: "metal".into(),
        ..Body::default()
    });
    let domino_scene = Scene {
        name: "Domino zinciri".into(),
        duration_s: 8.0,
        bodies: dominoes,
        ..Scene::default()
    };
    let spring_scene = Scene {
        name: "Yay ve sönüm".into(),
        duration_s: 12.0,
        bodies: vec![
            Body {
                id: "anchor".into(),
                label: "Sabit bağlantı".into(),
                shape: Shape::Box,
                size: [0.4; 3],
                position: [0.0, 6.0, 0.0],
                fixed: true,
                material: "metal".into(),
                ..Body::default()
            },
            Body {
                id: "weight".into(),
                label: "Yay kütlesi".into(),
                position: [1.4, 2.8, 0.0],
                restitution: 0.15,
                material: "rubber".into(),
                ..Body::default()
            },
        ],
        springs: vec![Spring {
            id: "spring-1".into(),
            a: "anchor".into(),
            b: "weight".into(),
            rest_length_m: 2.0,
            stiffness_n_m: 25.0,
            damping_n_s_m: 1.2,
        }],
        ..Scene::default()
    };
    json!({
        "presets": [
            {"id":"drop-bounce","label":"Düşme ve sekme","description":"Aynı yükseklikte üç küre; lastik, ahşap ve metal için örnek sekme katsayıları.","scene":drop_scene},
            {"id":"ramp-friction","label":"Eğik düzlem","description":"Eğik bir sabit kutu üzerinde sürtünmeli kayma.","scene":ramp_scene},
            {"id":"domino-collision","label":"Domino zinciri","description":"Bir kürenin başlattığı temas ve dönme zinciri.","scene":domino_scene},
            {"id":"anchored-spring","label":"Yay ve sönüm","description":"Sabit bağlantı noktasına bağlı kütlenin salınımı.","scene":spring_scene}
        ],
        "modules": [
            {"id":"mechanics","name":"Katı cisim mekaniği","status":"available"},
            {"id":"fluids","name":"Akışkanlar","status":"planned"},
            {"id":"thermal","name":"Isı ve termodinamik","status":"planned"},
            {"id":"electromagnetism","name":"Elektrik ve manyetizma","status":"planned"}
        ]
    })
}
