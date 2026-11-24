//! Bounded HCNO covalent graphs for teaching connectivity and atom conservation.
//! This module does not compute reactions, forces, energies, orbitals or stability.

use serde::{Deserialize, Serialize};
use serde_json::{Value, json};
use std::collections::{BTreeMap, HashMap, HashSet};

pub const MODEL: &str = "hcno-covalent-graph-v1";
pub const MAX_INPUT_BYTES: usize = 256 * 1024;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)]
pub enum Element {
    H,
    C,
    N,
    O,
}

impl Element {
    pub fn max_valence(self) -> u8 {
        match self {
            Self::H => 1,
            Self::C => 4,
            Self::N => 3,
            Self::O => 2,
        }
    }

    pub fn symbol(self) -> &'static str {
        match self {
            Self::H => "H",
            Self::C => "C",
            Self::N => "N",
            Self::O => "O",
        }
    }
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(deny_unknown_fields)]
pub struct Atom {
    pub id: String,
    pub element: Element,
    /// Drawing coordinates only, not measured bond lengths or physical units.
    pub position: [f64; 3],
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(deny_unknown_fields)]
pub struct Bond {
    pub a: String,
    pub b: String,
    pub order: u8,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[serde(default, deny_unknown_fields)]
pub struct MoleculeScene {
    pub schema_version: u32,
    pub atoms: Vec<Atom>,
    pub bonds: Vec<Bond>,
}

impl Default for MoleculeScene {
    fn default() -> Self {
        Self {
            schema_version: 1,
            atoms: Vec::new(),
            bonds: Vec::new(),
        }
    }
}

fn validate_id(id: &str) -> Result<(), String> {
    if id.is_empty()
        || id.len() > 64
        || !id
            .bytes()
            .all(|b| b.is_ascii_alphanumeric() || b == b'_' || b == b'-')
    {
        Err("Atom id: 1–64 ASCII harf, rakam, alt çizgi veya kısa çizgi içermeli.".into())
    } else {
        Ok(())
    }
}

impl MoleculeScene {
    pub fn validate(&self) -> Result<(), String> {
        if self.schema_version != 1 {
            return Err("Desteklenmeyen schema_version; sürüm 1 gerekli.".into());
        }
        if self.atoms.len() > 60 || self.bonds.len() > 90 {
            return Err("Bir molekül sahnesinde en fazla 60 atom ve 90 bağ olabilir.".into());
        }
        let mut by_id = HashMap::new();
        for (index, atom) in self.atoms.iter().enumerate() {
            validate_id(&atom.id)?;
            if by_id.insert(atom.id.as_str(), index).is_some() {
                return Err(format!("Tekrarlanan atom id: {}", atom.id));
            }
            if atom
                .position
                .iter()
                .any(|value| !value.is_finite() || !(-50.0..=50.0).contains(value))
            {
                return Err(format!(
                    "{}: konum bileşenleri -50 ile 50 arasında sonlu sayı olmalı.",
                    atom.id
                ));
            }
        }
        let mut seen_pairs = HashSet::new();
        let mut used = vec![0_u16; self.atoms.len()];
        for bond in &self.bonds {
            validate_id(&bond.a)?;
            validate_id(&bond.b)?;
            if bond.a == bond.b {
                return Err(format!("{}: atom kendisine bağlanamaz.", bond.a));
            }
            if !(1..=3).contains(&bond.order) {
                return Err("Bağ derecesi (order) yalnızca 1, 2 veya 3 olabilir.".into());
            }
            let a = *by_id
                .get(bond.a.as_str())
                .ok_or_else(|| format!("Bağ ucu bulunamadı: {}", bond.a))?;
            let b = *by_id
                .get(bond.b.as_str())
                .ok_or_else(|| format!("Bağ ucu bulunamadı: {}", bond.b))?;
            if !seen_pairs.insert((a.min(b), a.max(b))) {
                return Err(format!(
                    "Tekrarlanan bağ: {}–{}; çoklu bağ için order kullanın.",
                    bond.a, bond.b
                ));
            }
            used[a] += u16::from(bond.order);
            used[b] += u16::from(bond.order);
        }
        for (atom, used_valence) in self.atoms.iter().zip(used) {
            if used_valence > u16::from(atom.element.max_valence()) {
                return Err(format!(
                    "{} ({}): kullanılan valans {} bu modelin nötr valans üst sınırı {} değerini aşıyor.",
                    atom.id,
                    atom.element.symbol(),
                    used_valence,
                    atom.element.max_valence()
                ));
            }
        }
        Ok(())
    }
}

#[derive(Debug, Clone, Serialize)]
pub struct AtomAnalysis {
    pub id: String,
    pub element: Element,
    pub used_valence: u8,
    pub max_valence: u8,
    pub complete_valence: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct Component {
    pub formula: String,
    pub name: Option<String>,
    pub complete_valence: bool,
    pub atom_ids: Vec<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct Totals {
    pub atoms: usize,
    /// Number of connected atom pairs; a double/triple bond is one pair.
    pub bonds: usize,
    pub element_counts: BTreeMap<String, usize>,
}

#[derive(Debug, Clone, Serialize)]
pub struct Analysis {
    pub model: &'static str,
    pub scene: MoleculeScene,
    pub atoms: Vec<AtomAnalysis>,
    pub components: Vec<Component>,
    pub totals: Totals,
    pub assumptions: Vec<String>,
}

struct KnownMolecule {
    formula: &'static str,
    name: &'static str,
    elements: &'static [Element],
    bonds: &'static [(usize, usize, u8)],
}

use Element::{C, H, N, O};

const KNOWN_MOLECULES: &[KnownMolecule] = &[
    KnownMolecule {
        formula: "H2",
        name: "Hidrojen",
        elements: &[H, H],
        bonds: &[(0, 1, 1)],
    },
    KnownMolecule {
        formula: "O2",
        name: "Oksijen",
        elements: &[O, O],
        bonds: &[(0, 1, 2)],
    },
    KnownMolecule {
        formula: "N2",
        name: "Azot",
        elements: &[N, N],
        bonds: &[(0, 1, 3)],
    },
    KnownMolecule {
        formula: "H2O",
        name: "Su",
        elements: &[O, H, H],
        bonds: &[(0, 1, 1), (0, 2, 1)],
    },
    KnownMolecule {
        formula: "CO2",
        name: "Karbondioksit",
        elements: &[C, O, O],
        bonds: &[(0, 1, 2), (0, 2, 2)],
    },
    KnownMolecule {
        formula: "CH4",
        name: "Metan",
        elements: &[C, H, H, H, H],
        bonds: &[(0, 1, 1), (0, 2, 1), (0, 3, 1), (0, 4, 1)],
    },
    KnownMolecule {
        formula: "NH3",
        name: "Amonyak",
        elements: &[N, H, H, H],
        bonds: &[(0, 1, 1), (0, 2, 1), (0, 3, 1)],
    },
    KnownMolecule {
        formula: "C2H6",
        name: "Etan",
        elements: &[C, C, H, H, H, H, H, H],
        bonds: &[
            (0, 1, 1),
            (0, 2, 1),
            (0, 3, 1),
            (0, 4, 1),
            (1, 5, 1),
            (1, 6, 1),
            (1, 7, 1),
        ],
    },
];

/// Full element-labeled graph isomorphism, including every bond order and non-edge.
/// Known templates contain at most eight atoms; no arbitrary large-graph search runs.
fn matches_known(
    indices: &[usize],
    scene: &MoleculeScene,
    adjacency: &[Vec<u8>],
    known: &KnownMolecule,
) -> bool {
    if indices.len() != known.elements.len() {
        return false;
    }
    let n = indices.len();
    let mut template = vec![vec![0_u8; n]; n];
    for &(a, b, order) in known.bonds {
        template[a][b] = order;
        template[b][a] = order;
    }
    let candidates: Vec<Vec<usize>> = known
        .elements
        .iter()
        .enumerate()
        .map(|(t, element)| {
            let mut template_orders: Vec<_> =
                template[t].iter().copied().filter(|&v| v != 0).collect();
            template_orders.sort_unstable();
            indices
                .iter()
                .copied()
                .filter(|&index| {
                    let mut actual_orders: Vec<_> = adjacency[index]
                        .iter()
                        .copied()
                        .filter(|&v| v != 0)
                        .collect();
                    actual_orders.sort_unstable();
                    scene.atoms[index].element == *element && actual_orders == template_orders
                })
                .collect()
        })
        .collect();
    if candidates.iter().any(Vec::is_empty) {
        return false;
    }
    fn assign(
        template: &[Vec<u8>],
        adjacency: &[Vec<u8>],
        candidates: &[Vec<usize>],
        mapping: &mut Vec<usize>,
    ) -> bool {
        let t = mapping.len();
        if t == candidates.len() {
            return true;
        }
        for &candidate in &candidates[t] {
            if mapping.contains(&candidate)
                || mapping
                    .iter()
                    .enumerate()
                    .any(|(other_t, &other)| template[t][other_t] != adjacency[candidate][other])
            {
                continue;
            }
            mapping.push(candidate);
            if assign(template, adjacency, candidates, mapping) {
                return true;
            }
            mapping.pop();
        }
        false
    }
    assign(
        &template,
        adjacency,
        &candidates,
        &mut Vec::with_capacity(n),
    )
}

fn counts<'a>(atoms: impl Iterator<Item = &'a Atom>) -> BTreeMap<String, usize> {
    let mut result: BTreeMap<_, _> = [H, C, N, O]
        .map(|element| (element.symbol().to_string(), 0))
        .into();
    for atom in atoms {
        *result
            .get_mut(atom.element.symbol())
            .expect("HCNO count initialized") += 1;
    }
    result
}

fn generic_formula(element_counts: &BTreeMap<String, usize>) -> String {
    // Hill order for unrecognized structures; recognized templates use conventional
    // formulas (notably NH3 rather than H3N). Counts are not reduced to ratios.
    let mut formula = String::new();
    for symbol in ["C", "H", "N", "O"] {
        let count = element_counts[symbol];
        if count > 0 {
            formula.push_str(symbol);
            if count > 1 {
                formula.push_str(&count.to_string());
            }
        }
    }
    formula
}

pub fn analyze_scene(mut scene: MoleculeScene) -> Result<Analysis, String> {
    scene.validate()?;
    for bond in &mut scene.bonds {
        if bond.a > bond.b {
            std::mem::swap(&mut bond.a, &mut bond.b);
        }
    }
    scene
        .bonds
        .sort_by(|left, right| (&left.a, &left.b).cmp(&(&right.a, &right.b)));
    let indices: HashMap<_, _> = scene
        .atoms
        .iter()
        .enumerate()
        .map(|(i, a)| (a.id.as_str(), i))
        .collect();
    let mut adjacency = vec![vec![0_u8; scene.atoms.len()]; scene.atoms.len()];
    for bond in &scene.bonds {
        let (a, b) = (indices[bond.a.as_str()], indices[bond.b.as_str()]);
        adjacency[a][b] = bond.order;
        adjacency[b][a] = bond.order;
    }
    let atoms: Vec<_> = scene
        .atoms
        .iter()
        .zip(&adjacency)
        .map(|(atom, edges)| {
            let used_valence: u8 = edges.iter().sum(); // Validated upper limit is at most four.
            let max_valence = atom.element.max_valence();
            AtomAnalysis {
                id: atom.id.clone(),
                element: atom.element,
                used_valence,
                max_valence,
                complete_valence: used_valence == max_valence,
            }
        })
        .collect();
    let mut components = Vec::new();
    let mut seen = vec![false; atoms.len()];
    for start in 0..atoms.len() {
        if seen[start] {
            continue;
        }
        let mut pending = vec![start];
        let mut component = Vec::new();
        seen[start] = true;
        while let Some(index) = pending.pop() {
            component.push(index);
            for (neighbor, &order) in adjacency[index].iter().enumerate() {
                if order != 0 && !seen[neighbor] {
                    seen[neighbor] = true;
                    pending.push(neighbor);
                }
            }
        }
        component.sort_unstable();
        let known = KNOWN_MOLECULES
            .iter()
            .find(|known| matches_known(&component, &scene, &adjacency, known));
        components.push(Component {
            formula: known.map_or_else(
                || generic_formula(&counts(component.iter().map(|&i| &scene.atoms[i]))),
                |known| known.formula.to_string(),
            ),
            name: known.map(|known| known.name.to_string()),
            complete_valence: component.iter().all(|&i| atoms[i].complete_valence),
            atom_ids: component
                .iter()
                .map(|&i| scene.atoms[i].id.clone())
                .collect(),
        });
    }
    let totals = Totals {
        atoms: scene.atoms.len(),
        bonds: scene.bonds.len(),
        element_counts: counts(scene.atoms.iter()),
    };
    Ok(Analysis {
        model: MODEL,
        scene,
        atoms,
        components,
        totals,
        assumptions: vec![
            "Bu modül yalnız H, C, N ve O atomları arasındaki kovalent bağ grafını inceler. 118 element kataloğu bu modelin destek kapsamını genişletmez.".into(),
            "Bağ derecesi 1/2/3, tek/çift/üçlü bağı gösterir. Tipik nötr valans üst sınırları H:1, C:4, N:3, O:2 olarak seçilmiştir; kimyadaki tüm bağlanma durumları bu kurala uymaz.".into(),
            "complete_valence yalnızca bu grafın seçilmiş valans hedeflerini doldurduğunu belirtir; kararlılık, sentezlenebilirlik veya gerçek maddesel durum kanıtı değildir.".into(),
            "Molekül adı yalnız bilinen şablonla element, komşuluk ve bağ derecesi tam eşleştiğinde verilir. Aynı formül aynı yapı anlamına gelmez; name:null tanınmayan graf demektir.".into(),
            "Konumlar yalnız çizim koordinatlarıdır; uzaklık ve açıdan bağ oluşumu, bağ kopması veya kimyasal özellik hesaplanmaz. Atom konumları ve kimlikleri analiz sırasında korunur.".into(),
            "Elektronlar, yalnız çiftler, formal yük, iyonlar, radikaller, rezonans, aromatiklik, orbitaller, bağ enerjisi, sıcaklık, kinetik ve kuantum mekaniği hesaplanmaz.".into(),
            "Bağ ekleme/silme bir graf düzenlemesidir. Önce/sonra su örneği aynı atom kimlikleriyle stokiyometriyi gösterir; otomatik tepkime tahmini veya fiziksel tepkime simülasyonu değildir.".into(),
        ],
    })
}

pub fn analyze_json(input: &str) -> Result<String, String> {
    if input.len() > MAX_INPUT_BYTES {
        return Err("Molekül sahnesi JSON en fazla 256 KiB olabilir.".into());
    }
    let scene =
        serde_json::from_str(input).map_err(|error| format!("Molekül JSON okunamadı: {error}"))?;
    serde_json::to_string(&analyze_scene(scene)?).map_err(|error| error.to_string())
}

fn atom(id: &str, element: Element, position: [f64; 3]) -> Atom {
    Atom {
        id: id.into(),
        element,
        position,
    }
}

fn bond(a: &str, b: &str, order: u8) -> Bond {
    Bond {
        a: a.into(),
        b: b.into(),
        order,
    }
}

fn scene(atoms: Vec<Atom>, bonds: Vec<Bond>) -> MoleculeScene {
    MoleculeScene {
        schema_version: 1,
        atoms,
        bonds,
    }
}

pub fn presets() -> Value {
    let water = scene(
        vec![
            atom("o1", O, [0.0, 0.0, 0.0]),
            atom("h1", H, [-0.8, 0.6, 0.0]),
            atom("h2", H, [0.8, 0.6, 0.0]),
        ],
        vec![bond("o1", "h1", 1), bond("o1", "h2", 1)],
    );
    let carbon_dioxide = scene(
        vec![
            atom("c1", C, [0.0; 3]),
            atom("o1", O, [-1.2, 0.0, 0.0]),
            atom("o2", O, [1.2, 0.0, 0.0]),
        ],
        vec![bond("c1", "o1", 2), bond("c1", "o2", 2)],
    );
    let methane = scene(
        vec![
            atom("c1", C, [0.0; 3]),
            atom("h1", H, [0.7, 0.7, 0.7]),
            atom("h2", H, [0.7, -0.7, -0.7]),
            atom("h3", H, [-0.7, 0.7, -0.7]),
            atom("h4", H, [-0.7, -0.7, 0.7]),
        ],
        vec![
            bond("c1", "h1", 1),
            bond("c1", "h2", 1),
            bond("c1", "h3", 1),
            bond("c1", "h4", 1),
        ],
    );
    let ammonia = scene(
        vec![
            atom("n1", N, [0.0, 0.4, 0.0]),
            atom("h1", H, [0.9, -0.3, 0.0]),
            atom("h2", H, [-0.45, -0.3, 0.78]),
            atom("h3", H, [-0.45, -0.3, -0.78]),
        ],
        vec![
            bond("n1", "h1", 1),
            bond("n1", "h2", 1),
            bond("n1", "h3", 1),
        ],
    );
    let diatomic = |element: Element, prefix: &str, order| {
        scene(
            vec![
                atom(&format!("{prefix}1"), element, [-0.6, 0.0, 0.0]),
                atom(&format!("{prefix}2"), element, [0.6, 0.0, 0.0]),
            ],
            vec![bond(&format!("{prefix}1"), &format!("{prefix}2"), order)],
        )
    };
    let water_parts = scene(water.atoms.clone(), Vec::new());
    let before = scene(
        vec![
            atom("h1", H, [-2.8, 0.0, 0.0]),
            atom("h2", H, [-1.6, 0.0, 0.0]),
            atom("h3", H, [1.6, 0.0, 0.0]),
            atom("h4", H, [2.8, 0.0, 0.0]),
            atom("o1", O, [-0.6, 2.0, 0.0]),
            atom("o2", O, [0.6, 2.0, 0.0]),
        ],
        vec![
            bond("h1", "h2", 1),
            bond("h3", "h4", 1),
            bond("o1", "o2", 2),
        ],
    );
    let after = scene(
        vec![
            atom("h1", H, [-2.8, 0.6, 0.0]),
            atom("h2", H, [-1.2, 0.6, 0.0]),
            atom("h3", H, [1.2, 0.6, 0.0]),
            atom("h4", H, [2.8, 0.6, 0.0]),
            atom("o1", O, [-2.0, 0.0, 0.0]),
            atom("o2", O, [2.0, 0.0, 0.0]),
        ],
        vec![
            bond("o1", "h1", 1),
            bond("o1", "h2", 1),
            bond("o2", "h3", 1),
            bond("o2", "h4", 1),
        ],
    );
    json!({"presets":[
        {"id":"water","label":"Su · H₂O","description":"Oksijene bağlı iki hidrojen; iki tek bağ.","scene":water},
        {"id":"carbon-dioxide","label":"Karbondioksit · CO₂","description":"Bir karbona bağlı iki oksijen; iki çift bağ.","scene":carbon_dioxide},
        {"id":"methane","label":"Metan · CH₄","description":"Bir karbon çevresinde dört tek bağlı hidrojen.","scene":methane},
        {"id":"ammonia","label":"Amonyak · NH₃","description":"Bir azota bağlı üç hidrojen; yalnız elektron çifti hesaplanmaz.","scene":ammonia},
        {"id":"hydrogen","label":"Hidrojen · H₂","description":"İki hidrojen arasında tek bağ.","scene":diatomic(H,"h",1)},
        {"id":"oxygen","label":"Oksijen · O₂","description":"İki oksijen arasında çift bağ; basitleştirilmiş Lewis grafı.","scene":diatomic(O,"o",2)},
        {"id":"nitrogen","label":"Azot · N₂","description":"İki azot arasında üçlü bağ.","scene":diatomic(N,"n",3)},
        {"id":"water-parts","label":"Bağsız H, H ve O","description":"Su örneğinin aynı atom kimlikleri; bağ eklemek yalnız grafı düzenler.","scene":water_parts},
        {"id":"water-before","label":"Atom sayımı: önce · 2H₂ + O₂","description":"Stokiyometri örneği; tepkime hesaplanmaz. Sonra örneğiyle aynı 6 atom kimliği.","scene":before},
        {"id":"water-after","label":"Atom sayımı: sonra · 2H₂O","description":"Aynı 4 H ve 2 O atomunun yeniden bağlanmış grafı; fiziksel tepkime simülasyonu değildir.","scene":after}
    ]})
}
