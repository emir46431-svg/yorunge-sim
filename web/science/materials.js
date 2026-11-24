const SOURCE_DATE = "2026-11-24";
const SOURCES = Object.freeze({
  graphene: "https://graphene-flagship.eu/materials/graphene/",
  graphite: "https://pubs.rsc.org/en/content/articlehtml/2024/sc/d3sc06107h",
  diamond:
    "https://www1.columbia.edu/sec/itc/ee/test2/hyperlinks/diamond%20xtal/diamond.htm",
  salt: "https://www.gan.msm.cam.ac.uk/resources/crystalmodels/cscl-and-nacl",
});
const COMMON_LIMIT =
  "Sonlu ve birimsiz eğitim modeli. Kenarlarda eksik komşular bulunur; enerji, kuvvet, mekanik dayanım, iletkenlik veya tepkime hesaplanmaz.";

export const materialPresets = Object.freeze(
  [
    {
      id: "graphene",
      name: "Grafen",
      formula: "C",
      description:
        "Bir atom kalınlığında, altıgen halkalardan oluşan karbon tabakası. İçteki her karbonun üç yakın komşusu vardır.",
      structure: "Düzlemsel bal peteği örgüsü",
      limitations: `${COMMON_LIMIT} Çizgiler yakın komşuluğu gösterir; tek/çift bağ sırası veya yerelleşmiş π bağları atamaz.`,
    },
    {
      id: "graphite",
      name: "Grafit · AB katmanları",
      formula: "C",
      description:
        "Ardışık grafen tabakaları AB (Bernal) düzeninde kaydırılır. A konumundaki birinci ve üçüncü tabakalar hizalıdır.",
      structure: "ABAB katmanlı bal peteği örgüsü",
      limitations: `${COMMON_LIMIT} Katman sayısı ve aralığı görsel kontrollerdir; soyulma, kararlılık veya katmanlar arası kuvvet tahmini değildir. Tek tabaka seçilirse grafen geometrisi gösterilir.`,
    },
    {
      id: "diamond",
      name: "Elmas",
      formula: "C",
      description:
        "Kübik elmas yapısında içteki her karbon dört komşuya tetrahedral geometriyle bağlanır.",
      structure: "Yüzey merkezli kübik örgü + (0,0,0), (¼,¼,¼) bazı",
      limitations: COMMON_LIMIT,
    },
    {
      id: "sodium-chloride",
      name: "Sodyum klorür",
      formula: "NaCl",
      description:
        "Kaya tuzu yapısında Na⁺ ve Cl⁻ iyonları dönüşümlüdür. İçteki her iyon karşıt yüklü altı en yakın komşuyla çevrilidir.",
      structure: "Kaya tuzu · iç içe iki yüzey merkezli kübik alt örgü",
      limitations: `${COMMON_LIMIT} Çizgiler iyonik yakın komşuluğu gösterir; ayrı NaCl molekülleri veya tekli kovalent bağlar değildir.`,
    },
    {
      id: "silicon",
      name: "Silisyum",
      formula: "Si",
      description:
        "Elmas tipi kübik silisyum örgüsü. İç atomların dört komşusu tetrahedral olarak düzenlenir.",
      structure: "Elmas tipi kübik örgü · Si",
      limitations: `${COMMON_LIMIT} Bant yapısı, katkılama veya yarı iletken aygıt davranışı hesaplanmaz.`,
    },
  ].map((preset) => Object.freeze(preset)),
);

function boundedNumber(value, fallback, min, max, integer = false) {
  const number =
    Number.isFinite(Number(value)) && value !== null && value !== ""
      ? Number(value)
      : fallback;
  return Math.max(min, Math.min(max, integer ? Math.round(number) : number));
}

function centerAtoms(atoms) {
  if (atoms.length === 0) return;
  const minima = [Infinity, Infinity, Infinity];
  const maxima = [-Infinity, -Infinity, -Infinity];
  for (const atom of atoms) {
    atom.position.forEach((value, axis) => {
      minima[axis] = Math.min(minima[axis], value);
      maxima[axis] = Math.max(maxima[axis], value);
    });
  }
  const center = minima.map((min, axis) => (min + maxima[axis]) / 2);
  for (const atom of atoms)
    atom.position = atom.position.map((value, axis) => value - center[axis]);
}

function distanceSquared(a, b) {
  return a.position.reduce(
    (sum, value, axis) => sum + (value - b.position[axis]) ** 2,
    0,
  );
}

/** These are render edges, not force-field interactions or chemical bond orders. */
function nearestNeighborEdges(atoms, distance, predicate = () => true) {
  const bonds = [];
  const squared = distance * distance;
  for (let i = 0; i < atoms.length; i++) {
    for (let j = i + 1; j < atoms.length; j++) {
      if (
        predicate(atoms[i], atoms[j]) &&
        Math.abs(distanceSquared(atoms[i], atoms[j]) - squared) < 1e-7
      ) {
        bonds.push({ a: atoms[i].id, b: atoms[j].id, order: 1 });
      }
    }
  }
  return bonds;
}

/** A hexagonal patch assembled from 19 regular hexagons, nearest distance 1. */
function honeycombPatch() {
  const points = new Map();
  const radius = 2;
  for (let q = -radius; q <= radius; q++) {
    for (let r = -radius; r <= radius; r++) {
      if (Math.max(Math.abs(q), Math.abs(r), Math.abs(q + r)) > radius)
        continue;
      const x = 1.5 * q;
      const z = Math.sqrt(3) * (r + q / 2);
      for (let corner = 0; corner < 6; corner++) {
        const angle = (corner * Math.PI) / 3;
        const position = [x + Math.cos(angle), 0, z + Math.sin(angle)];
        const key = position.map((value) => Math.round(value * 1e8)).join(",");
        if (!points.has(key)) points.set(key, position);
      }
    }
  }
  return [...points.values()];
}

function buildLayers(id, layers, spacing) {
  const points = honeycombPatch();
  const atoms = [];
  for (let layer = 0; layer < layers; layer++) {
    // One in-plane nearest-neighbor displacement gives the Bernal B registry.
    const shift = layer % 2 === 1 ? 1 : 0;
    points.forEach((position) =>
      atoms.push({
        id: `${id}-a${atoms.length}`,
        element: "C",
        layer,
        position: [
          position[0] + shift,
          (layer - (layers - 1) / 2) * spacing,
          position[2],
        ],
      }),
    );
  }
  const bonds = nearestNeighborEdges(atoms, 1, (a, b) => a.layer === b.layer);
  return {
    atoms,
    bonds,
    details: {
      layers,
      spacing: layers > 1 ? spacing : null,
      stacking:
        layers > 1
          ? Array.from({ length: layers }, (_, layer) =>
              layer % 2 ? "B" : "A",
            ).join("")
          : "A",
      interior_coordination: 3,
      bonding:
        "Tabaka içi yakın komşuluk; π elektronları ve katmanlar arası etkileşim hesaplanmaz.",
    },
  };
}

function buildDiamond(id, element) {
  const atoms = [];
  const fcc = [
    [0, 0, 0],
    [0, 0.5, 0.5],
    [0.5, 0, 0.5],
    [0.5, 0.5, 0],
  ];
  const basis = [0, 0.25];
  const scale = 4 / Math.sqrt(3); // Display unit: nearest-neighbor distance = 1.
  const cells = 3;
  for (let x = 0; x < cells; x++) {
    for (let y = 0; y < cells; y++) {
      for (let z = 0; z < cells; z++) {
        for (const site of fcc) {
          for (const offset of basis)
            atoms.push({
              id: `${id}-a${atoms.length}`,
              element,
              position: [x, y, z].map(
                (value, axis) => (value + site[axis] + offset) * scale,
              ),
            });
        }
      }
    }
  }
  return {
    atoms,
    bonds: nearestNeighborEdges(atoms, 1),
    details: {
      conventional_cells_per_axis: cells,
      interior_coordination: 4,
      bonding:
        "Tetrahedral en yakın komşu bağlantıları; mekanik veya kuantum hesabı değildir.",
    },
  };
}

function buildSalt(id) {
  const atoms = [];
  // The alternating integer grid is two interpenetrating FCC ion sublattices.
  // An even number of sites per axis keeps this finite crop electrically neutral.
  const sitesPerAxis = 6;
  for (let x = 0; x < sitesPerAxis; x++) {
    for (let y = 0; y < sitesPerAxis; y++) {
      for (let z = 0; z < sitesPerAxis; z++) {
        const sodium = (x + y + z) % 2 === 0;
        atoms.push({
          id: `${id}-a${atoms.length}`,
          element: sodium ? "Na" : "Cl",
          charge: sodium ? 1 : -1,
          position: [x, y, z],
        });
      }
    }
  }
  return {
    atoms,
    bonds: nearestNeighborEdges(atoms, 1, (a, b) => a.element !== b.element),
    details: {
      ionic: true,
      net_charge: 0,
      sites_per_axis: sitesPerAxis,
      interior_coordination: 6,
      bonding:
        "İyonik komşuluk çizgileri; tekli kovalent bağ veya ayrı molekül anlamına gelmez.",
    },
  };
}

/**
 * Return deterministic, finite display geometry. Options apply to graphite only:
 * layers is clamped to 1..5; spacing to 0.4..4 display units. No Three.js dependency.
 * Each edge's order=1 is a renderer convention, not a chemical bond-order claim.
 */
export function buildMaterial(id, options = {}) {
  const preset = materialPresets.find((item) => item.id === id);
  if (!preset) throw new RangeError(`Bilinmeyen malzeme: ${id}`);
  const settings = options ?? {};
  const layers =
    id === "graphite" ? boundedNumber(settings.layers, 3, 1, 5, true) : 1;
  const spacing = boundedNumber(settings.spacing, 1, 0.4, 4);
  let result;
  if (id === "graphene" || id === "graphite")
    result = buildLayers(id, layers, spacing);
  else if (id === "sodium-chloride") result = buildSalt(id);
  else result = buildDiamond(id, id === "silicon" ? "Si" : "C");
  centerAtoms(result.atoms);
  const source =
    id === "sodium-chloride"
      ? SOURCES.salt
      : id === "silicon"
        ? SOURCES.diamond
        : SOURCES[id];
  return {
    atoms: result.atoms,
    bonds: result.bonds,
    metadata: {
      id,
      name: preset.name,
      formula: preset.formula,
      structure: preset.structure,
      units: "Birimsiz görsel koordinatlar",
      coordinate_units: "unitless",
      nearest_neighbor_distance: 1,
      edge_semantics: "nearest-neighbor-connectivity",
      simulation: false,
      finite_patch: true,
      limitations: preset.limitations,
      source_url: source,
      source_checked_at: SOURCE_DATE,
      ...result.details,
    },
  };
}
