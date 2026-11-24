import test from "node:test";
import assert from "node:assert/strict";
import { elements } from "../web/science/catalog.js";
import {
  STRUCTURE_LIMITS, emptyStructure, validateStructure, nextAtomId,
  parseXYZ, writeXYZ, createLattice, scalePreset, structureSummary,
} from "../web/science/structures.js";

const atom = (id = "a1", element = "C", position = [0, 0, 0]) => ({ id, element, position });
const document = (atoms = [atom()]) => ({ ...emptyStructure("Deneme"), atoms });

test("all 118 catalog symbols are accepted without invoking the chemistry API", () => {
  assert.equal(elements.length, 118);
  const source = document(elements.map((entry, index) => atom(`a${index}`, entry.symbol, [index, 0, 0])));
  assert.equal(validateStructure(source).atoms.length, 118);
  assert.deepEqual(parseXYZ(writeXYZ(source)).atoms.map((entry) => entry.element), elements.map((entry) => entry.symbol));
});

test("JSON document survives roundtrip with precise signed coordinates and source scale", () => {
  const source = { ...document([atom("Fe_original", "Fe", [-1.2345678901234567, 0, 1e-9])]), source: { kind: "scaled-preset", name: "Örnek", angstrom_per_unit: 1.42 } };
  const restored = validateStructure(JSON.parse(JSON.stringify(source)));
  assert.deepEqual(restored, source);
  restored.atoms[0].position[0] = 9;
  assert.notEqual(source.atoms[0].position[0], 9, "validation must not return shared positions");
});

test("document requires known schema, angstrom units, legal unique IDs and symbols", () => {
  for (const change of [{ version: 2 }, { units: "nm" }, { format: "other" }, { name: "line\nbreak" }, { name: "x".repeat(121) }]) {
    assert.throws(() => validateStructure({ ...document(), ...change }));
  }
  for (const atoms of [[atom("a1"), atom("a1")], [atom("bad id")], [atom("a1", "carbon")], [atom(12)], [null]]) {
    assert.throws(() => validateStructure(document(atoms)));
  }
});

test("coordinates must be finite numbers in the explicit bounds, never clamped", () => {
  for (const position of [["1", 0, 0], [NaN, 0, 0], [Infinity, 0, 0], [0, 0], [0, 0, 0, 0], [10000.001, 0, 0]]) {
    assert.throws(() => validateStructure(document([atom("a1", "C", position)])));
  }
  assert.deepEqual(validateStructure(document([atom("a1", "C", [-10000, -0, 10000])])).atoms[0].position, [-10000, 0, 10000]);
});

test("1000 atom resource boundary is accepted, 1001 rejected", () => {
  assert.ok(STRUCTURE_LIMITS.atoms >= 500);
  assert.equal(validateStructure(document(Array.from({ length: 1000 }, (_, index) => atom(`a${index}`)))).atoms.length, 1000);
  assert.throws(() => validateStructure(document(Array.from({ length: 1001 }, (_, index) => atom(`a${index}`)))));
});

test("XYZ accepts CRLF, empty comment and scientific decimal notation", () => {
  const parsed = parseXYZ("\uFEFF2\r\n\r\nFe -1.5 2e-3 +.5\r\nOg 1. 0 -0\r\n");
  assert.deepEqual(parsed.atoms.map((entry) => entry.position), [[-1.5, 0.002, 0.5], [1, 0, 0]]);
  assert.equal(parsed.units, "angstrom");
});

test("XYZ rejects inconsistent counts, additional frames, columns and invalid numeric syntax", () => {
  const bad = [
    "2\ncomment\nC 0 0 0\n", "1\ncomment\nC 0 0 0\nH 0 0 1\n",
    "1\ncomment\nC 0 0 0\n1\nframe2\nC 1 1 1\n", "1\ncomment\nC 0 0 0 charge=1\n",
    "1\ncomment\nC 0,1 0 0\n", "1\ncomment\nC NaN 0 0\n", "1\ncomment\nC 0x12 0 0\n",
    "1\ncomment\nC 1e999 0 0\n", "1\ncomment\nXx 0 0 0\n", "1\ncomment\nC 10001 0 0\n",
    "1.0\ncomment\nC 0 0 0\n", "-1\ncomment\n", "1001\ncomment\n", "1\nC 0 0 0",
  ];
  for (const text of bad) assert.throws(() => parseXYZ(text), text);
});

test("XYZ strict input limits include the comment and UTF-8 bytes", () => {
  assert.throws(() => parseXYZ(`0\n${"a".repeat(241)}\n`));
  assert.throws(() => parseXYZ("0\n\u0000\n"));
  assert.throws(() => parseXYZ(`0\n\n${" ".repeat(STRUCTURE_LIMITS.fileBytes)}`));
});

test("XYZ exact geometry roundtrip preserves floats, order and empty documents", () => {
  const source = document([atom("custom", "Si", [0.12345678901234566, -250.75, 1e-10]), atom("other", "O", [2.3, 4.5, 6.7])]);
  const restored = parseXYZ(writeXYZ(source));
  assert.equal(restored.name, source.name);
  assert.deepEqual(restored.atoms.map(({ element, position }) => ({ element, position })), source.atoms.map(({ element, position }) => ({ element, position })));
  assert.equal(parseXYZ(writeXYZ(emptyStructure())).atoms.length, 0);
});

test("SC, BCC, FCC conventional cells have exact counts and unique positions", () => {
  for (const [kind, perCell] of [["sc", 1], ["bcc", 2], ["fcc", 4]]) {
    const structure = createLattice({ kind, element: "Cu", a: 4, repeats: [2, 3, 4] });
    assert.equal(structure.atoms.length, perCell * 24);
    assert.equal(new Set(structure.atoms.map((entry) => entry.position.join(","))).size, structure.atoms.length);
    assert.ok(structure.atoms.every((entry) => entry.position[0] >= 0 && entry.position[0] < 8 && entry.position[1] < 12 && entry.position[2] < 16));
  }
  assert.deepEqual(createLattice({ kind: "bcc", element: "Fe", a: 3, repeats: [1, 1, 1] }).atoms.map((entry) => entry.position), [[0, 0, 0], [1.5, 1.5, 1.5]]);
  assert.deepEqual(createLattice({ kind: "fcc", element: "Cu", a: 2, repeats: [1, 1, 1] }).atoms.map((entry) => entry.position), [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 0]]);
});

test("lattice resource checks reject over-budget creation and malformed parameters", () => {
  const valid = { kind: "sc", element: "C", a: 1, repeats: [10, 10, 10] };
  assert.equal(createLattice(valid).atoms.length, 1000);
  for (const change of [{ kind: "fcc" }, { kind: "__proto__" }, { a: 0 }, { a: NaN }, { a: "3" }, { repeats: [1, 0, 1] }, { repeats: [1, 1.5, 1] }, { repeats: [31, 1, 1] }, { element: "Fake" }]) {
    assert.throws(() => createLattice({ ...valid, ...change }));
  }
  assert.throws(() => createLattice({ ...valid, a: 1000, repeats: [12, 1, 1] }), "coordinate limits apply after lattice generation");
});

test("preset conversion requires explicit scale, applies all axes and drops render bonds", () => {
  const graph = { atoms: [atom("old", "C", [-1, 2, 3])], bonds: [{ a: "old", b: "fake", order: 1 }] };
  const result = scalePreset(graph, 1.42, "Grafen");
  assert.deepEqual(result.atoms[0].position, [-1.42, 2.84, 4.26]);
  assert.equal(result.source.angstrom_per_unit, 1.42);
  assert.equal(result.bonds, undefined);
  assert.deepEqual(graph.atoms[0].position, [-1, 2, 3]);
  for (const scale of [undefined, NaN, 0, -1, "1.42", 1001]) assert.throws(() => scalePreset(graph, scale, "Grafen"));
});

test("summary reports composition, coordinate extents and Euclidean selected-pair distance", () => {
  const source = document([atom("a1", "C", [-1, 0, 0]), atom("a2", "O", [2, 4, 0]), atom("a3", "C", [-1, 0, 0])]);
  const result = structureSummary(source, ["a1", "a2"]);
  assert.deepEqual(result.composition, { C: 2, O: 1 });
  assert.deepEqual(result.minimum, [-1, 0, 0]);
  assert.deepEqual(result.maximum, [2, 4, 0]);
  assert.deepEqual(result.extent, [3, 4, 0]);
  assert.equal(result.pairDistance, 5);
  assert.equal(result.coincident, 1);
  assert.equal(structureSummary(source, ["a1", "missing"]).pairDistance, null);
  assert.equal(structureSummary(source, ["a1", "a1"]).pairDistance, null);
  assert.deepEqual(structureSummary(emptyStructure()).extent, [0, 0, 0]);
});

test("atom IDs remain unique after deletion and duplication", () => {
  assert.equal(nextAtomId([atom("a1"), atom("a3"), atom("custom")]), "a2");
});
