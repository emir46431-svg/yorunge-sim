import test from "node:test";
import assert from "node:assert/strict";
import {
  elements,
  categories,
  findElement,
  periodicTableSource,
} from "../web/science/catalog.js";
import { buildMaterial, materialPresets } from "../web/science/materials.js";

const close = (actual, expected, tolerance = 1e-7) =>
  assert.ok(Math.abs(actual - expected) < tolerance, `${actual} ≠ ${expected}`);
const delta = (a, b) => a.map((value, axis) => value - b[axis]);
const dot = (a, b) => a.reduce((sum, value, axis) => sum + value * b[axis], 0);
const positionKey = (position) =>
  position.map((value) => Math.round(value * 1e7)).join(",");

function neighbors(model) {
  const result = new Map(model.atoms.map((atom) => [atom.id, []]));
  const atoms = new Map(model.atoms.map((atom) => [atom.id, atom]));
  const edges = new Set();
  for (const bond of model.bonds) {
    assert.notEqual(bond.a, bond.b);
    assert.ok(
      atoms.has(bond.a) && atoms.has(bond.b),
      "edge endpoints must exist",
    );
    const key = [bond.a, bond.b].sort().join(":");
    assert.ok(!edges.has(key), "edges must be unique");
    edges.add(key);
    const a = atoms.get(bond.a);
    const b = atoms.get(bond.b);
    const displacement = delta(a.position, b.position);
    close(dot(displacement, displacement), 1);
    result.get(a.id).push(b);
    result.get(b.id).push(a);
  }
  return result;
}

test("catalog has exactly 118 unique, positioned and sourced reference records", () => {
  assert.equal(elements.length, 118);
  assert.deepEqual(
    elements.map((element) => element.atomic_number),
    Array.from({ length: 118 }, (_, i) => i + 1),
  );
  assert.equal(new Set(elements.map((element) => element.symbol)).size, 118);
  assert.equal(
    new Set(
      elements.map((element) => `${element.table_row}:${element.table_col}`),
    ).size,
    118,
  );
  for (const element of elements) {
    assert.ok(
      element.name &&
        element.name_en &&
        element.electron_configuration &&
        element.phase,
    );
    assert.equal(typeof element.atomic_weight, "string");
    assert.ok(categories[element.category]);
    assert.ok(element.period >= 1 && element.period <= 7);
    assert.ok(element.table_col >= 1 && element.table_col <= 18);
  }
  assert.equal(findElement("La").table_row, 9);
  assert.equal(findElement("La").table_col, 3);
  assert.equal(findElement("Lu").table_col, 17);
  assert.equal(findElement("Ac").table_row, 10);
  assert.equal(findElement("Lr").table_col, 17);
  assert.equal(findElement("Hf").group, 4);
  assert.equal(findElement("Rf").group, 4);
  assert.equal(findElement("He").group, 18);
  assert.equal(
    findElement("H").atomic_weight,
    "1.0080",
    "source precision must survive normalization",
  );
  assert.match(findElement("Og").electron_configuration, /predicted/);
  assert.match(findElement("Og").phase, /öngörülen/);
  assert.equal(periodicTableSource.retrieved_at, "2026-11-24");
  assert.equal(
    periodicTableSource.url,
    "https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON",
  );
});

test("lookup supports exact symbol, atomic number, English and Turkish names", () => {
  for (const query of [6, "6", "c", "C", "Karbon", "carbon"])
    assert.equal(findElement(query).atomic_number, 6);
  for (const query of ["altın", "ALTIN", "altin", "Gold"])
    assert.equal(findElement(query).symbol, "Au");
  for (const query of ["İyot", "iyot", "I", "Iodine"])
    assert.equal(findElement(query).atomic_number, 53);
  for (const query of ["", null, undefined, "Kar", 0, 119])
    assert.equal(findElement(query), undefined);
});

test("all presets have finite geometry, stable IDs and explicit schematic metadata", () => {
  for (const preset of materialPresets) {
    const model = buildMaterial(preset.id);
    assert.ok(model.atoms.length > 0 && model.bonds.length > 0);
    assert.equal(
      new Set(model.atoms.map((atom) => atom.id)).size,
      model.atoms.length,
    );
    assert.equal(
      new Set(model.atoms.map((atom) => positionKey(atom.position))).size,
      model.atoms.length,
    );
    for (const atom of model.atoms) {
      assert.ok(findElement(atom.element));
      assert.equal(atom.position.length, 3);
      assert.ok(atom.position.every(Number.isFinite));
    }
    neighbors(model);
    assert.equal(model.metadata.coordinate_units, "unitless");
    assert.equal(model.metadata.simulation, false);
    assert.equal(
      model.metadata.edge_semantics,
      "nearest-neighbor-connectivity",
    );
    assert.ok(model.metadata.source_url.startsWith("https://"));
    assert.deepEqual(
      buildMaterial(preset.id),
      model,
      "rebuilding must be deterministic",
    );
  }
  assert.throws(() => buildMaterial("unknown"), RangeError);
});

test("graphene is a planar connected honeycomb of 19 hexagonal cells", () => {
  const model = buildMaterial("graphene");
  const adjacency = neighbors(model);
  assert.equal(model.atoms.length, 54);
  assert.equal(model.bonds.length, 72);
  assert.ok(
    model.atoms.every((atom) => atom.position[1] === 0 && atom.element === "C"),
  );
  const reached = new Set();
  const todo = [model.atoms[0]];
  while (todo.length) {
    const atom = todo.pop();
    if (reached.has(atom.id)) continue;
    reached.add(atom.id);
    todo.push(...adjacency.get(atom.id));
  }
  assert.equal(reached.size, model.atoms.length);
  const interior = model.atoms.filter(
    (atom) => adjacency.get(atom.id).length === 3,
  );
  assert.ok(interior.length > 0);
  for (const atom of model.atoms)
    assert.ok([2, 3].includes(adjacency.get(atom.id).length));
  for (const atom of interior) {
    const vectors = adjacency
      .get(atom.id)
      .map((other) => delta(other.position, atom.position));
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++)
        close(dot(vectors[i], vectors[j]), -0.5);
    }
  }
  assert.equal(
    model.bonds.length - model.atoms.length + 1,
    19,
    "Euler count of bounded planar faces",
  );
});

test("graphite uses AB registry and only intralayer render edges", () => {
  const model = buildMaterial("graphite", { layers: 3, spacing: 2 });
  assert.equal(model.atoms.length, 54 * 3);
  assert.equal(model.bonds.length, 72 * 3);
  const byId = new Map(model.atoms.map((atom) => [atom.id, atom]));
  const layers = [0, 1, 2].map((layer) =>
    model.atoms.filter((atom) => atom.layer === layer),
  );
  for (let i = 0; i < 54; i++) {
    close(layers[1][i].position[0] - layers[0][i].position[0], 1);
    close(layers[1][i].position[1] - layers[0][i].position[1], 2);
    close(layers[2][i].position[0], layers[0][i].position[0]);
    close(layers[2][i].position[2], layers[0][i].position[2]);
  }
  const project = (atom) =>
    positionKey([atom.position[0], 0, atom.position[2]]);
  const firstProjection = new Set(layers[0].map(project));
  const aligned = layers[1].filter((atom) =>
    firstProjection.has(project(atom)),
  ).length;
  assert.ok(
    aligned > 0 && aligned < 54,
    "AB has both aligned and hollow-site atoms",
  );
  for (const bond of model.bonds)
    assert.equal(byId.get(bond.a).layer, byId.get(bond.b).layer);
  assert.equal(model.metadata.stacking, "ABA");
  assert.equal(buildMaterial("graphite", { layers: 0 }).metadata.layers, 1);
  assert.equal(buildMaterial("graphite", { layers: 99 }).metadata.layers, 5);
  assert.equal(
    buildMaterial("graphite", { spacing: -1 }).metadata.spacing,
    0.4,
  );
  assert.equal(
    buildMaterial("graphite", { spacing: Infinity }).metadata.spacing,
    1,
  );
});

for (const id of ["diamond", "silicon"]) {
  test(`${id} has the tetrahedral angles and coordination of diamond cubic`, () => {
    const model = buildMaterial(id);
    const adjacency = neighbors(model);
    assert.equal(model.atoms.length, 216);
    assert.ok(
      model.atoms.every(
        (atom) => atom.element === (id === "diamond" ? "C" : "Si"),
      ),
    );
    const interior = model.atoms.filter(
      (atom) => adjacency.get(atom.id).length === 4,
    );
    assert.ok(interior.length > 0);
    for (const atom of model.atoms)
      assert.ok(
        adjacency.get(atom.id).length >= 1 &&
          adjacency.get(atom.id).length <= 4,
      );
    for (const atom of interior) {
      const vectors = adjacency
        .get(atom.id)
        .map((other) => delta(other.position, atom.position));
      for (let i = 0; i < vectors.length; i++) {
        for (let j = i + 1; j < vectors.length; j++)
          close(dot(vectors[i], vectors[j]), -1 / 3);
      }
    }
  });
}

test("rock salt has balanced ions and six opposite-charge neighbors in the interior", () => {
  const model = buildMaterial("sodium-chloride");
  const adjacency = neighbors(model);
  assert.equal(model.atoms.length, 216);
  assert.equal(model.bonds.length, 540);
  assert.equal(model.atoms.filter((atom) => atom.element === "Na").length, 108);
  assert.equal(
    model.atoms.reduce((sum, atom) => sum + atom.charge, 0),
    0,
  );
  assert.equal(model.metadata.ionic, true);
  const interior = model.atoms.filter((atom) =>
    atom.position.every((coordinate) => Math.abs(coordinate) < 2.5),
  );
  assert.equal(interior.length, 64);
  for (const atom of interior) assert.equal(adjacency.get(atom.id).length, 6);
  for (const atom of model.atoms) {
    for (const other of adjacency.get(atom.id))
      assert.equal(atom.charge, -other.charge);
  }
});
