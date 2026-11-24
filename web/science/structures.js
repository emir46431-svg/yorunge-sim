import { elements } from "./catalog.js";

export const STRUCTURE_LIMITS = Object.freeze({
  atoms: 1000,
  coordinate: 10000,
  fileBytes: 262144,
  history: 20,
  pageSize: 40,
});
const symbols = new Set(elements.map((element) => element.symbol));
const decimal = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;
const idPattern = /^[A-Za-z0-9_-]{1,48}$/;
const finite = (value) => typeof value === "number" && Number.isFinite(value);
const fail = (message) => {
  throw new Error(message);
};

export function emptyStructure(name = "Özel yapı") {
  return {
    format: "yorunge-structure",
    version: 1,
    units: "angstrom",
    name,
    atoms: [],
  };
}

/** Returns an isolated, canonical document; never clamps coordinates or invents atoms. */
export function validateStructure(input) {
  if (
    !input ||
    typeof input !== "object" ||
    Array.isArray(input) ||
    input.format !== "yorunge-structure" ||
    input.version !== 1 ||
    input.units !== "angstrom"
  ) {
    fail("Yapı belgesi yorunge-structure v1 ve angstrom biriminde olmalı.");
  }
  if (
    typeof input.name !== "string" ||
    input.name.length > 120 ||
    /[\r\n\x00-\x1f]/.test(input.name)
  ) {
    fail("Yapı adı en fazla 120 karakterlik tek satır olmalı.");
  }
  if (
    !Array.isArray(input.atoms) ||
    input.atoms.length > STRUCTURE_LIMITS.atoms
  ) {
    fail(`Bir yapıda en fazla ${STRUCTURE_LIMITS.atoms} atom bulunabilir.`);
  }
  const ids = new Set();
  const atoms = input.atoms.map((atom, index) => {
    if (
      !atom ||
      typeof atom !== "object" ||
      !idPattern.test(atom.id) ||
      typeof atom.id !== "string" ||
      ids.has(atom.id)
    ) {
      fail(`${index + 1}. atomun kimliği geçersiz veya yinelenmiş.`);
    }
    ids.add(atom.id);
    if (!symbols.has(atom.element))
      fail(`${index + 1}. atomun element simgesi geçersiz.`);
    if (
      !Array.isArray(atom.position) ||
      atom.position.length !== 3 ||
      atom.position.some(
        (value) =>
          !finite(value) || Math.abs(value) > STRUCTURE_LIMITS.coordinate,
      )
    ) {
      fail(
        `${index + 1}. atom için x, y, z sonlu sayı ve ±${STRUCTURE_LIMITS.coordinate} Å aralığında olmalı.`,
      );
    }
    return {
      id: atom.id,
      element: atom.element,
      position: atom.position.map((value) =>
        Object.is(value, -0) ? 0 : value,
      ),
    };
  });
  const result = { ...emptyStructure(input.name), atoms };
  if (input.source !== undefined) {
    const source = input.source;
    if (
      !source ||
      source.kind !== "scaled-preset" ||
      typeof source.name !== "string" ||
      source.name.length > 120 ||
      /[\r\n\x00-\x1f]/.test(source.name) ||
      !finite(source.angstrom_per_unit) ||
      source.angstrom_per_unit < 0.001 ||
      source.angstrom_per_unit > 1000
    ) {
      fail("Hazır yapı ölçek kaydı geçersiz.");
    }
    result.source = {
      kind: source.kind,
      name: source.name,
      angstrom_per_unit: source.angstrom_per_unit,
    };
  }
  return result;
}

export function nextAtomId(atoms) {
  const used = new Set(atoms.map((atom) => atom.id));
  let serial = 1;
  while (used.has(`a${serial}`)) serial++;
  return `a${serial}`;
}

export function parseXYZ(text, fallbackName = "XYZ yapısı") {
  if (
    typeof text !== "string" ||
    new TextEncoder().encode(text).length > STRUCTURE_LIMITS.fileBytes
  ) {
    fail("XYZ dosyası 256 KiB sınırını aşıyor.");
  }
  const lines = text
    .replace(/^\uFEFF/, "")
    .replace(/\r\n?/g, "\n")
    .split("\n");
  if (!/^\d+$/.test(lines[0]?.trim() || ""))
    fail("XYZ ilk satırı atom sayısı olmalı.");
  const count = Number(lines[0].trim());
  if (!Number.isSafeInteger(count) || count > STRUCTURE_LIMITS.atoms)
    fail(`XYZ en fazla ${STRUCTURE_LIMITS.atoms} atom içerebilir.`);
  if (lines.length < 2)
    fail("XYZ ikinci satırında yorum satırı bulunmalı; boş olabilir.");
  const comment = lines[1];
  if (comment.length > 240 || /[\x00-\x08\x0b-\x1f]/.test(comment))
    fail("XYZ yorum satırı geçersiz veya 240 karakterden uzun.");
  if (
    lines.length < count + 2 ||
    lines.slice(count + 2).some((line) => line.trim() !== "")
  ) {
    fail("XYZ atom sayısı satırlarla eşleşmiyor; yalnız tek kare desteklenir.");
  }
  const atoms = [];
  for (let i = 0; i < count; i++) {
    const fields = lines[i + 2].trim().split(/\s+/);
    if (
      fields.length !== 4 ||
      !symbols.has(fields[0]) ||
      fields.slice(1).some((value) => !decimal.test(value))
    ) {
      fail(
        `XYZ ${i + 3}. satırı: Element x y z biçiminde dört alan gerekli; ondalık ayırıcı nokta olmalı.`,
      );
    }
    atoms.push({
      id: `a${i + 1}`,
      element: fields[0],
      position: fields.slice(1).map(Number),
    });
  }
  const name = (comment.trim() || fallbackName)
    .replace(/[\x00-\x1f]/g, " ")
    .slice(0, 120);
  return validateStructure({ ...emptyStructure(name), atoms });
}

export function writeXYZ(input) {
  const structure = validateStructure(input);
  return [
    String(structure.atoms.length),
    structure.name,
    ...structure.atoms.map(
      (atom) => `${atom.element} ${atom.position.map(String).join(" ")}`,
    ),
    "",
  ].join("\n");
}

/** Conventional cubic cells use a half-open basis: shared boundary sites are not duplicated. */
export function createLattice({ kind, element, a, repeats }) {
  const bases = {
    sc: [[0, 0, 0]],
    bcc: [
      [0, 0, 0],
      [0.5, 0.5, 0.5],
    ],
    fcc: [
      [0, 0, 0],
      [0, 0.5, 0.5],
      [0.5, 0, 0.5],
      [0.5, 0.5, 0],
    ],
  };
  if (!Object.hasOwn(bases, kind) || !symbols.has(element))
    fail("Örgü türü veya element geçersiz.");
  if (!finite(a) || a < 0.1 || a > 1000)
    fail("Örgü sabiti a, 0,1–1000 Å aralığında olmalı.");
  if (
    !Array.isArray(repeats) ||
    repeats.length !== 3 ||
    repeats.some((n) => !Number.isInteger(n) || n < 1 || n > 30)
  ) {
    fail("Her yöndeki tekrar sayısı 1–30 arasında tam sayı olmalı.");
  }
  const count = repeats.reduce((product, n) => product * n, bases[kind].length);
  if (count > STRUCTURE_LIMITS.atoms)
    fail(
      `Bu örgü ${count} atom üretir; sınır ${STRUCTURE_LIMITS.atoms}. Tekrarları azalt.`,
    );
  const atoms = [];
  for (let x = 0; x < repeats[0]; x++)
    for (let y = 0; y < repeats[1]; y++)
      for (let z = 0; z < repeats[2]; z++) {
        for (const basis of bases[kind])
          atoms.push({
            id: `a${atoms.length + 1}`,
            element,
            position: basis.map(
              (offset, axis) => ([x, y, z][axis] + offset) * a,
            ),
          });
      }
  return validateStructure({
    ...emptyStructure(
      `${element} · ${kind.toUpperCase()} · ${repeats.join("×")}`,
    ),
    atoms,
  });
}

/** The caller must supply the explicit conversion from dimensionless preset units to Å. */
export function scalePreset(graph, angstromPerUnit, name) {
  if (
    !finite(angstromPerUnit) ||
    angstromPerUnit < 0.001 ||
    angstromPerUnit > 1000
  )
    fail("Ölçek 0,001–1000 Å/birim aralığında olmalı.");
  if (!graph || !Array.isArray(graph.atoms))
    fail("Kopyalanacak hazır yapı bulunamadı.");
  return validateStructure({
    ...emptyStructure(`${name} · düzenlenebilir`.slice(0, 120)),
    atoms: graph.atoms.map((atom, index) => ({
      id: `a${index + 1}`,
      element: atom.element,
      position: atom.position.map((value) => value * angstromPerUnit),
    })),
    source: { kind: "scaled-preset", name, angstrom_per_unit: angstromPerUnit },
  });
}

export function structureSummary(input, selected = []) {
  const structure = validateStructure(input);
  const composition = {};
  const minimum = [Infinity, Infinity, Infinity],
    maximum = [-Infinity, -Infinity, -Infinity];
  const positions = new Set();
  let coincident = 0;
  for (const atom of structure.atoms) {
    composition[atom.element] = (composition[atom.element] || 0) + 1;
    atom.position.forEach((value, axis) => {
      minimum[axis] = Math.min(minimum[axis], value);
      maximum[axis] = Math.max(maximum[axis], value);
    });
    const key = atom.position.join(",");
    if (positions.has(key)) coincident++;
    positions.add(key);
  }
  const pair = [...new Set(selected)]
    .map((id) => structure.atoms.find((atom) => atom.id === id))
    .filter(Boolean);
  return {
    count: structure.atoms.length,
    composition,
    minimum: structure.atoms.length ? minimum : null,
    maximum: structure.atoms.length ? maximum : null,
    extent: structure.atoms.length
      ? maximum.map((value, axis) => value - minimum[axis])
      : [0, 0, 0],
    pairDistance:
      pair.length === 2
        ? Math.hypot(
            ...pair[0].position.map(
              (value, axis) => value - pair[1].position[axis],
            ),
          )
        : null,
    coincident,
  };
}
