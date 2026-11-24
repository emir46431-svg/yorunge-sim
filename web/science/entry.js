import { createScienceViewer } from "./viewer.js";
import { elements, categories, periodicTableSource } from "./catalog.js";
import { materialPresets, buildMaterial } from "./materials.js";
import {
  STRUCTURE_LIMITS,
  emptyStructure,
  validateStructure,
  nextAtomId,
  parseXYZ,
  writeXYZ,
  createLattice,
  scalePreset,
  structureSummary,
} from "./structures.js";

const $ = (id) => document.getElementById(id),
  clone = (value) => structuredClone(value);
const fmt = (n, d = 2) =>
  Number(n).toLocaleString("tr-TR", { maximumFractionDigits: d });
const subscript = (s) =>
  String(s).replace(/\d/g, (d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]);
const names = { H: "Hidrojen", C: "Karbon", N: "Azot", O: "Oksijen" };
const requestedMode = new URLSearchParams(location.search).get("alan");
const desktopMode = document.documentElement.classList.contains("desktop-mode");
const modeInfo = {
  molecules: [
    "Atomlardan yapıya.",
    "Bir bağ kur. Bir bağı ayır. Maddenin nasıl düzenlendiğini keşfet.",
    "Kovalent bağ modeli",
  ],
  elements: [
    "Maddenin alfabesi.",
    "118 elementi, elektron dizilimlerini ve periyodik tablodaki yerlerini incele.",
    "Element kataloğu",
  ],
  materials: [
    "Atomik yapı çalışma alanı",
    "118 elementle atom koordinatlarını düzenle, örgü kur ve yapı dosyalarıyla çalış.",
    "Atom koordinatları ve kristal yapılar",
  ],
  cells: [
    "Hücrenin sınırında.",
    "Zarın iki tarafını değiştir; suyun ve çözünen maddenin geçişini izle.",
    "İki bölmeli hücre modeli",
  ],
};
const state = {
  mode: desktopMode ? "materials" : "molecules",
  busy: false,
  epoch: 0,
  mol: null,
  analysis: null,
  selected: [],
  undo: [],
  redo: [],
  molPresets: [],
  cellPresets: [],
  cell: null,
  cellResult: null,
  cellTime: 0,
  playing: false,
  cellSpeed: 10,
  material: "graphene",
  layers: 3,
  spacing: 1,
  materialGraph: null,
  structure: emptyStructure(),
  structureActive: false,
  structureSelected: [],
  structureUndo: [],
  structureRedo: [],
  structurePage: 0,
  structureQuery: "",
  structureElement: "C",
  structurePosition: [0, 0, 0],
  latticeDraft: { kind: "sc", element: "C", a: 3, repeats: [3, 3, 3] },
  element: 6,
  spacefill: false,
};
let viewer;
function el(tag, props = {}, children = []) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k.startsWith("on")) n.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === "class") n.className = v;
    else if (k === "text") n.textContent = v;
    else if (k in n) n[k] = v;
    else n.setAttribute(k, v);
  }
  for (const c of Array.isArray(children) ? children : [children])
    if (c !== null && c !== undefined)
      n.append(c instanceof Node ? c : document.createTextNode(String(c)));
  return n;
}
const button = (label, handler, cls = "") =>
  el("button", { text: label, class: cls, onClick: safe(handler) });
const section = (title, children) =>
  el("section", {}, [el("h2", { text: title }), ...children]);
const hint = (text) => el("p", { class: "hint", text });
const row = (children) => el("div", { class: "row" }, children);
const safe = (fn) => async (event) => {
  try {
    await fn(event);
  } catch (error) {
    notify(error.message, true);
  }
};
function notify(message, error = false) {
  $("notice").textContent = message;
  $("notice").classList.toggle("error", error);
}
function setDetails(paragraphs, links = [], api = "") {
  $("model-details").replaceChildren(
    ...paragraphs.map((text) => el("p", { text })),
    ...links.map(([title, url]) =>
      el("p", {}, [
        el("a", {
          href: url,
          target: "_blank",
          rel: "noopener noreferrer",
          text: title,
        }),
      ]),
    ),
    ...(api ? [el("code", { text: api })] : []),
  );
}
function setMetrics(items) {
  $("metrics").replaceChildren(
    ...items.map(([label, value, unit = ""]) =>
      el("div", { class: "metric" }, [
        el("span", { text: label }),
        el("strong", {}, [value, el("small", { text: unit })]),
      ]),
    ),
  );
}
function download(name, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = el("a", { href: url, download: name });
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function post(url, data) {
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await r.json();
  if (!r.ok) throw new Error(body.error || "İstek tamamlanamadı.");
  return body;
}
function setBusy(value) {
  state.busy = value;
  $("workspace").setAttribute("aria-busy", String(value));
  $("import").disabled = value;
  for (const id of ["library", "inspector", "stage-controls"])
    $(id).inert = value;
}
function persist() {
  try {
    localStorage.setItem("yorunge-science-v1", JSON.stringify(envelope()));
  } catch {
    /* Storage is optional. */
  }
}
function envelope() {
  return {
    format: "yorunge-science",
    version: 2,
    mode: state.mode,
    structure_workspace: {
      document: state.structure,
      active: state.structureActive,
    },
    ...(state.mode === "molecules"
      ? { scene: state.mol }
      : state.mode === "cells"
        ? { experiment: state.cell }
        : state.mode === "materials"
          ? {
              material: state.material,
              layers: state.layers,
              spacing: state.spacing,
            }
          : { atomic_number: state.element }),
  };
}
function renderMode({ reset = true } = {}) {
  state.playing = false;
  const [title, description, tag] = modeInfo[state.mode];
  $("page-title").textContent = title;
  $("page-description").textContent = description;
  $("model-tag").textContent = tag;
  document.querySelectorAll("[data-mode]").forEach((b) => {
    if (b.dataset.mode === state.mode) b.setAttribute("aria-current", "page");
    else b.removeAttribute("aria-current");
  });
  $("workspace").classList.toggle("periodic-mode", state.mode === "elements");
  $("workspace").classList.toggle(
    "structure-workspace",
    state.mode === "materials",
  );
  $("scene-panel").hidden = state.mode === "elements";
  $("periodic-panel").hidden = state.mode !== "elements";
  $("below-stage").replaceChildren();
  $("stage-controls").replaceChildren();
  $("scene-legend").replaceChildren();
  $("export-result").disabled = true;
  $("representation").hidden = state.mode === "cells";
  if (state.mode === "molecules") renderMolecules(reset);
  else if (state.mode === "elements") renderElements();
  else if (state.mode === "materials") renderMaterials(reset);
  else renderCells(reset);
  const url = new URL(location.href);
  if (desktopMode) {
    url.pathname = "/studio";
    url.searchParams.delete("studio");
  }
  url.searchParams.set("alan", state.mode);
  history.replaceState(null, "", url);
  persist();
}
async function switchMode(mode) {
  if (state.busy) return;
  state.epoch++;
  state.mode = mode;
  renderMode();
  notify(`${modeInfo[mode][2]} hazır.`);
}

async function applyMolecule(
  scene,
  { record = true, message = "Molekül düzeni güncellendi." } = {},
) {
  if (state.busy) return false;
  const epoch = state.epoch;
  setBusy(true);
  try {
    const result = await post("/api/chemistry/analyze", scene);
    if (epoch !== state.epoch) return false;
    if (record && state.mol) {
      state.undo.push(clone(state.mol));
      state.undo = state.undo.slice(-25);
      state.redo = [];
    }
    state.mol = result.scene;
    state.analysis = result;
    state.selected = state.selected.filter((id) =>
      state.mol.atoms.some((a) => a.id === id),
    );
    if (state.mode === "molecules") renderMolecules(false);
    persist();
    notify(message);
    return true;
  } finally {
    setBusy(false);
  }
}
async function moleculePreset(id) {
  const p = state.molPresets.find((p) => p.id === id);
  if (!p) return;
  state.selected = [];
  if (await applyMolecule(clone(p.scene), { message: p.description })) {
    viewer?.resetCamera();
  }
}
async function addAtom(element) {
  const scene = clone(state.mol);
  let serial = scene.atoms.length + 1;
  while (scene.atoms.some((a) => a.id === `${element.toLowerCase()}${serial}`))
    serial++;
  const angle = serial * 2.39996;
  scene.atoms.push({
    id: `${element.toLowerCase()}${serial}`,
    element,
    position: [Math.cos(angle) * 3, Math.sin(angle) * 2.2, 0],
  });
  await applyMolecule(scene, { message: `${names[element]} atomu eklendi.` });
}
function selectAtom(id) {
  if (state.mode === "materials" && state.structureActive) {
    selectStructureAtom(id);
    return;
  }
  if (state.mode !== "molecules" || state.busy) return;
  state.selected = state.selected.includes(id)
    ? state.selected.filter((x) => x !== id)
    : [...state.selected.slice(-1), id];
  viewer?.select(state.selected);
  renderMoleculeInspector();
  renderAtomList();
}
async function connectAtoms() {
  if (state.selected.length !== 2)
    throw new Error("Bağ kurmak için iki farklı atom seç.");
  const [a, b] = state.selected;
  const scene = clone(state.mol);
  const order = Number($("bond-order").value);
  const existing = scene.bonds.find(
    (x) => (x.a === a && x.b === b) || (x.a === b && x.b === a),
  );
  if (existing) existing.order = order;
  else scene.bonds.push({ a, b, order });
  await applyMolecule(scene, {
    message:
      "Bağ düzeni değişti. Atom sayısı korundu; parçalar yeniden hesaplandı.",
  });
}
async function breakBond(a, b) {
  const scene = clone(state.mol);
  scene.bonds = scene.bonds.filter(
    (x) => !((x.a === a && x.b === b) || (x.a === b && x.b === a)),
  );
  await applyMolecule(scene, {
    message: "Bağ ayrıldı. Atomlar korunarak oluşan parçalar listelendi.",
  });
}
async function deleteAtoms() {
  if (!state.selected.length) return;
  const chosen = new Set(state.selected);
  const scene = clone(state.mol);
  scene.atoms = scene.atoms.filter((a) => !chosen.has(a.id));
  scene.bonds = scene.bonds.filter((b) => !chosen.has(b.a) && !chosen.has(b.b));
  await applyMolecule(scene, {
    message:
      "Seçilen atomlar deneyden kaldırıldı. Geri al ile döndürebilirsin.",
  });
}
async function historyMove(from, to) {
  if (state.busy || !state[from].length) return;
  const target = clone(state[from].at(-1)),
    current = clone(state.mol);
  if (
    await applyMolecule(target, {
      record: false,
      message: "Önceki düzen geri yüklendi.",
    })
  ) {
    state[from].pop();
    state[to].push(current);
    renderMolecules(false);
  }
}
function renderAtomList() {
  const list = $("atom-list");
  if (!list) return;
  list.replaceChildren(
    ...state.mol.atoms.map((a) => {
      const b = button(
        `${a.element} · ${a.id}`,
        () => selectAtom(a.id),
        state.selected.includes(a.id) ? "selected" : "",
      );
      b.setAttribute("aria-pressed", String(state.selected.includes(a.id)));
      return b;
    }),
  );
}
function renderMolecules(reset) {
  if (!state.mol || !state.analysis) return;
  $("scene-title").textContent = "Molekül çalışma alanı";
  $("scene-caption").textContent =
    "Atom seç: tıkla · Döndür: sürükle · Görünüm ölçeksizdir";
  $("scene-legend").replaceChildren(
    ...Object.keys(names).map((s) =>
      el("span", { class: "legend-item" }, [
        el("i", { class: `dot legend-${s.toLowerCase()}` }),
        s,
      ]),
    ),
  );
  const presets = state.molPresets.filter(
    (p) => !["water-before", "water-after", "water-parts"].includes(p.id),
  );
  $("library").replaceChildren(
    section("Atom ekle", [
      el(
        "div",
        { class: "atom-tools" },
        Object.entries(names).map(([symbol, name]) => {
          const b = button(
            "",
            () => addAtom(symbol),
            `element-${symbol.toLowerCase()}`,
          );
          b.append(symbol, el("small", { text: name }));
          return b;
        }),
      ),
      hint(
        "Bu bağ modeli H, C, N ve O atomlarını kullanır. Diğer 114 element Elementler alanındadır.",
      ),
    ]),
    section("Hazır moleküller", [
      el(
        "div",
        { class: "preset-list" },
        presets.map((p) => {
          const b = button("", () => moleculePreset(p.id), "preset-button");
          b.append(el("strong", { text: p.label }));
          return b;
        }),
      ),
    ]),
    section("Birlikte deneyelim", [
      button(
        "Suyu atomlardan kur",
        () => moleculePreset("water-parts"),
        "full",
      ),
      button(
        "Tepkime örneği: su",
        () => moleculePreset("water-before"),
        "full",
      ),
      hint(
        "Örnekte aynı 4 H ve 2 O atomunun önceki ve sonraki bağ düzenini karşılaştır.",
      ),
    ]),
    section("Sahnedeki atomlar", [
      el("div", { id: "atom-list", class: "atom-list" }),
      hint("İki atom seçerek aralarına bağ kurabilirsin."),
    ]),
  );
  viewer?.setGraph(state.mol, { reset });
  viewer?.select(state.selected);
  renderAtomList();
  renderMoleculeInspector();
  const undo = button("Geri al", () => historyMove("undo", "redo"));
  undo.disabled = !state.undo.length;
  const redo = button("Yinele", () => historyMove("redo", "undo"));
  redo.disabled = !state.redo.length;
  $("stage-controls").replaceChildren(
    undo,
    redo,
    el("span", { class: "spacer" }),
    button("Boş sahne", () =>
      applyMolecule(
        { schema_version: 1, atoms: [], bonds: [] },
        { message: "Boş sahne hazır. Soldan atom ekleyebilirsin." },
      ),
    ),
  );
  const counts = state.analysis.totals.element_counts;
  const isWaterInventory =
    state.mol.atoms.length === 6 &&
    (counts.H || 0) === 4 &&
    (counts.O || 0) === 2;
  if (isWaterInventory)
    $("stage-controls").append(
      button(
        "Ürün düzenini göster",
        () => moleculePreset("water-after"),
        "primary",
      ),
    );
  setMetrics([
    ["Atom", state.analysis.totals.atoms],
    ["Bağ", state.analysis.totals.bonds],
    ["Bağlı parça", state.analysis.components.length],
  ]);
  $("below-stage").replaceChildren(
    el("div", { class: "explanation" }, [
      el("strong", { text: "Bağ düzeni, maddeyi tanımlar. " }),
      "Bir bağı ayırınca atomlar yok olmaz; bağlı parçalar değişir. “Bağ sayısı tamam” etiketi bu modelin valans kuralını anlatır; gerçek kararlılık veya kendiliğinden tepkime garantisi değildir.",
    ]),
  );
  setDetails(
    [
      "H: 1, C: 4, N: 3, O: 2 tipik nötr kovalent valanslarıyla çalışan bir bağlantı grafıdır. Tek, çift ve üçlü bağ desteklenir. Molekül adı yalnız desteklenen tam bağlantı yapısı eşleşince gösterilir.",
      "Atom konumları görsel düzen içindir; gerçek bağ uzunluğu, bağ açısı veya enerji minimizasyonu hesaplanmaz. İyonlar, radikaller, rezonans ve kuantum kimyası modellenmez.",
      "Su tepkimesi örneği önceden tanımlı iki bağ düzenini karşılaştırır. Aktivasyon enerjisi, süre, sıcaklık, verim veya gerçek koşullardaki ürünler tahmin edilmez.",
    ],
    [
      [
        "Kovalent bağlar — OpenStax",
        "https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding",
      ],
    ],
    "POST /api/chemistry/analyze",
  );
  $("export-result").disabled = false;
}
function renderMoleculeInspector() {
  const selected = state.selected
    .map((id) => state.mol.atoms.find((a) => a.id === id))
    .filter(Boolean);
  const selectSummary = selected.length
    ? selected
        .map((a) => {
          const data = state.analysis.atoms.find((x) => x.id === a.id);
          return `${a.element} (${a.id}) · ${data.used_valence}/${data.max_valence} bağ derecesi`;
        })
        .join(" / ")
    : "Sahneden veya atom listesinden iki atom seç.";
  const order = el(
    "select",
    { id: "bond-order", "aria-label": "Bağ derecesi" },
    [
      el("option", { value: 1, text: "Tek bağ" }),
      el("option", { value: 2, text: "Çift bağ" }),
      el("option", { value: 3, text: "Üçlü bağ" }),
    ],
  );
  const connect = button("Bağ kur / güncelle", connectAtoms, "primary full");
  connect.disabled = selected.length !== 2;
  const remove = button("Seçilen atomları kaldır", deleteAtoms, "danger full");
  remove.disabled = !selected.length;
  const components = state.analysis.components.map((c) =>
    el("div", { class: "component" }, [
      el("div", { class: "formula", text: subscript(c.formula) }),
      el("div", {
        class: "component-name",
        text:
          c.name ||
          (c.atom_ids.length === 1 ? "Tek atom" : "Adlandırılmamış yapı"),
      }),
      el("span", {
        class: `pill ${c.complete_valence ? "" : "incomplete"}`,
        text: c.complete_valence ? "Bağ sayısı tamam" : "Açık bağ kapasitesi",
      }),
    ]),
  );
  $("inspector").replaceChildren(
    section("Bağ düzenle", [
      el("div", { class: "selection-summary", text: selectSummary }),
      el("label", { class: "field" }, ["Bağ derecesi", order]),
      connect,
      hint("Var olan bağı değiştirmek için aynı iki atomu seç."),
      remove,
    ]),
    section(
      "Oluşan parçalar",
      components.length
        ? components
        : [hint("Henüz atom yok. Soldan bir atom ekle.")],
    ),
    section("Bağlar", [
      el(
        "div",
        { class: "scroll-list" },
        state.mol.bonds.map((b) =>
          el("div", { class: "bond-row" }, [
            `${b.a} ${["", "—", "=", "≡"][b.order]} ${b.b}`,
            button("Ayır", () => breakBond(b.a, b.b)),
          ]),
        ),
      ),
    ]),
  );
}

const categoryClass = (e) => `c-${e.category || "unknown"}`;
function renderElements() {
  const search = el("input", {
    type: "search",
    placeholder: "Ad, simge veya atom numarası ara…",
    "aria-label": "Element ara",
    id: "element-search",
  });
  const filter = el(
    "select",
    { "aria-label": "Element ailesi", id: "element-family" },
    [
      el("option", { value: "", text: "Tüm aileler" }),
      ...Object.entries(categories).map(([id, name]) =>
        el("option", { value: id, text: name }),
      ),
    ],
  );
  const grid = el("div", {
    class: "periodic-grid",
    "aria-label": "118 elementin periyodik tablosu",
  });
  elements.forEach((e) => {
    const b = button(
      "",
      () => {
        state.element = e.atomic_number;
        renderElementInspector();
        grid.querySelectorAll("button").forEach((n) => {
          const isSelected = Number(n.dataset.number) === state.element;
          n.classList.toggle("selected", isSelected);
          n.setAttribute("aria-pressed", String(isSelected));
        });
        persist();
      },
      `element-tile ${categoryClass(e)} ${e.atomic_number === state.element ? "selected" : ""}`,
    );
    b.dataset.number = e.atomic_number;
    b.setAttribute("aria-label", `${e.atomic_number}, ${e.name}, ${e.symbol}`);
    b.setAttribute("aria-pressed", String(e.atomic_number === state.element));
    b.style.gridColumn = String(e.table_col);
    b.style.gridRow = String(e.table_row);
    b.append(
      el("span", { class: "number", text: e.atomic_number }),
      el("strong", { text: e.symbol }),
      el("span", { class: "el-name", text: e.name }),
    );
    grid.append(b);
  });
  for (const [numbers, rowNo] of [
    ["57–71", 6],
    ["89–103", 7],
  ]) {
    const p = el("span", { class: "table-placeholder", text: numbers });
    p.style.gridColumn = "3";
    p.style.gridRow = String(rowNo);
    grid.append(p);
  }
  const count = el("p", {
    class: "hint",
    id: "element-match",
    text: "118 element gösteriliyor. Tabloyu yatay kaydırabilirsin.",
  });
  const applyFilter = () => {
    const q = search.value.trim().toLocaleLowerCase("tr-TR");
    let matches = 0;
    grid.querySelectorAll("button").forEach((b) => {
      const e = elements.find(
        (x) => x.atomic_number === Number(b.dataset.number),
      );
      const match =
        (!filter.value || e.category === filter.value) &&
        (!q ||
          [e.name, e.name_en, e.symbol, String(e.atomic_number)].some((v) =>
            v.toLocaleLowerCase("tr-TR").includes(q),
          ));
      b.classList.toggle("filtered", !match);
      if (match) matches++;
    });
    count.textContent = `${matches} eşleşme. Soluk elementler filtre dışında; yine de seçilebilir.`;
  };
  search.addEventListener("input", applyFilter);
  filter.addEventListener("change", applyFilter);
  $("periodic-panel").replaceChildren(
    el("div", { class: "periodic-tools" }, [search, filter]),
    grid,
    el(
      "div",
      { class: "family-key" },
      Object.entries(categories).map(([id, name]) =>
        el("span", {}, [el("i", { class: `swatch c-${id}` }), name]),
      ),
    ),
    count,
  );
  renderElementInspector();
  setDetails(
    [
      "118 elementin atom numarası, simgesi, PubChem tarafından bildirilen atom ağırlığı ve elektron dizilimi yerel veri anlık görüntüsünden gösterilir. Tahmin edilen özellikler kaynakta belirtilen şekilde işaretlenir.",
      "Atom ağırlığı nötron sayısı değildir. Nötron sayısı izotopa bağlı olduğundan burada atom ağırlığı yuvarlanarak türetilmez. Kabuk çizimi bir kuantum orbital çözümü veya ölçekli yörünge değildir.",
      "Bütün elementler katalogda bulunur. Molekül düzenleyicisindeki bağ hesabı bu sürümde yalnız H, C, N ve O için vardır; diğer elementlerde otomatik tepkime hesabı yapılmaz.",
    ],
    [
      [
        "Element verileri — PubChem",
        "https://pubchem.ncbi.nlm.nih.gov/periodic-table/",
      ],
      [
        "Kaynak veri JSON",
        "https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON",
      ],
    ],
  );
}
function shellsFor(e, seen = new Set()) {
  if (seen.has(e.symbol)) return [];
  seen.add(e.symbol);
  const config = e.electron_configuration || "";
  let counts = Array(7).fill(0);
  const core = config.match(/\[([A-Za-z]+)\]/);
  if (core) {
    const ref = elements.find((x) => x.symbol === core[1]);
    if (ref) {
      const prior = shellsFor(ref, seen);
      prior.forEach((v, i) => (counts[i] = v));
    }
  }
  for (const match of config.matchAll(/([1-7])[spdf]\s*(\d+)/g))
    counts[Number(match[1]) - 1] += Number(match[2]);
  return counts;
}
function svgNode(tag, props = {}) {
  const n = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(props)) n.setAttribute(k, String(v));
  return n;
}
function shellDiagram(e) {
  const svg = svgNode("svg", {
    viewBox: "0 0 240 240",
    class: "shell-svg",
    role: "img",
    "aria-label": `${e.name} için şematik elektron kabukları`,
  });
  const counts = shellsFor(e);
  const last = counts.reduce((m, n, i) => (n ? i + 1 : m), 0);
  if (counts.reduce((a, b) => a + b, 0) !== e.atomic_number || !last) {
    const t = svgNode("text", {
      x: 120,
      y: 120,
      "text-anchor": "middle",
      fill: "#5d7081",
      "font-size": 11,
    });
    t.textContent = "Kabuk şeması mevcut değil";
    svg.append(t);
    return svg;
  }
  const nucleus = svgNode("circle", {
    cx: 120,
    cy: 120,
    r: 17,
    fill: "#d8eceb",
  });
  svg.append(nucleus);
  const text = svgNode("text", {
    x: 120,
    y: 124,
    "text-anchor": "middle",
    fill: "#225966",
    "font-size": 11,
  });
  text.textContent = e.symbol;
  svg.append(text);
  counts.forEach((count, index) => {
    if (!count) return;
    const radius = 29 + (index / Math.max(1, last - 1)) * 78;
    svg.append(
      svgNode("circle", {
        cx: 120,
        cy: 120,
        r: radius,
        fill: "none",
        stroke: "#c6d9e2",
        "stroke-width": 1,
      }),
    );
    for (let k = 0; k < count; k++) {
      const a = (k * 2 * Math.PI) / count + index * 0.3;
      svg.append(
        svgNode("circle", {
          cx: 120 + Math.cos(a) * radius,
          cy: 120 + Math.sin(a) * radius,
          r: 2.7,
          fill: index === last - 1 ? "#0b8589" : "#668ba2",
        }),
      );
    }
  });
  return svg;
}
function renderElementInspector() {
  const e =
    elements.find((x) => x.atomic_number === state.element) || elements[5];
  const props = [
    ["Proton", e.atomic_number],
    ["Elektron (nötr)", e.atomic_number],
    ["Atom ağırlığı", e.atomic_weight],
    ["Standart hâl", e.phase],
    ["Aile", categories[e.category] || e.category],
    ["Periyot", e.period],
  ];
  const dl = el("dl", { class: "properties" });
  props.forEach(([key, val]) =>
    dl.append(
      el("div", {}, [el("dt", { text: key }), el("dd", { text: val })]),
    ),
  );
  const related = [];
  if (names[e.symbol])
    related.push(
      button(
        "Moleküle atom ekle",
        async () => {
          await switchMode("molecules");
          await addAtom(e.symbol);
        },
        "primary full",
      ),
    );
  if (e.symbol === "C")
    related.push(
      button(
        "Karbon yapılarını incele",
        () => {
          state.material = "graphene";
          return switchMode("materials");
        },
        "full",
      ),
    );
  $("inspector").replaceChildren(
    section("Seçili element", [
      el("div", { class: "element-hero" }, [
        el("div", { class: "element-number", text: e.atomic_number }),
        el("div", { class: "large-symbol", text: e.symbol }),
        el("h2", { text: e.name }),
        el("p", { text: e.name_en }),
      ]),
      shellDiagram(e),
      hint("Kabuk şeması · ölçeksiz"),
    ]),
    section("Element bilgisi", [
      dl,
      el("h3", { text: "Elektron dizilimi" }),
      el("p", {
        class: "material-info",
        text: e.electron_configuration || "Kaynakta verilmemiş",
      }),
      ...related,
    ]),
    section("Veri kaynağı", [
      hint(
        "PubChem / ABD Ulusal Tıp Kütüphanesi. Atom ağırlığı kaynakta bildirildiği gibi gösterilir; bazı ağır elementlerin özellikleri öngörüdür.",
      ),
      el("a", {
        href: `https://pubchem.ncbi.nlm.nih.gov/element/${e.atomic_number}`,
        target: "_blank",
        rel: "noopener noreferrer",
        text: "Elementin kaynak sayfası",
      }),
    ]),
  );
}

function rangeField(label, id, value, min, max, step, onChange) {
  const output = el("output", { text: fmt(value) });
  const input = el("input", {
    type: "range",
    id,
    min,
    max,
    step,
    value,
    "aria-label": label,
  });
  input.addEventListener(
    "input",
    safe(() => {
      output.textContent = fmt(Number(input.value));
      return onChange(Number(input.value));
    }),
  );
  return el("label", { class: "field" }, [
    label,
    el("span", { class: "unit" }, [output]),
    input,
  ]);
}
function updateMaterialGeometry(reset = false) {
  const material = materialPresets.find((m) => m.id === state.material);
  state.materialGraph = buildMaterial(material.id, {
    layers: state.layers,
    spacing: state.spacing,
  });
  viewer?.setGraph(state.materialGraph, { reset, dense: true });
  viewer?.select([]);
  setMetrics([
    ["Görünen atom", state.materialGraph.atoms.length],
    ["Görünen bağlantı", state.materialGraph.bonds.length],
    ["Yapı", material.formula],
  ]);
}
function structureElementSelect(id, value, onChange) {
  const select = el(
    "select",
    {
      id,
      "aria-label": "Element",
      onChange: (event) => onChange?.(event.target.value),
    },
    elements.map((element) =>
      el("option", {
        value: element.symbol,
        text: `${element.atomic_number} · ${element.symbol} — ${element.name}`,
      }),
    ),
  );
  select.value = value;
  return select;
}
function structureNumber(label, id, value, min, max, onChange, step = "any") {
  const input = el("input", {
    id,
    type: "number",
    min,
    max,
    step,
    required: true,
    value,
  });
  if (onChange)
    input.addEventListener("input", () =>
      onChange(input.value === "" ? NaN : Number(input.value)),
    );
  return el("label", { class: "field" }, [label, input]);
}
function structureCoordinates(prefix, position, onChange) {
  return el(
    "div",
    { class: "structure-coordinates" },
    ["X", "Y", "Z"].map((axis, index) =>
      structureNumber(
        `${axis} (Å)`,
        `${prefix}-${axis.toLowerCase()}`,
        position[index],
        -STRUCTURE_LIMITS.coordinate,
        STRUCTURE_LIMITS.coordinate,
        (value) => onChange(index, value),
      ),
    ),
  );
}
function commitStructure(
  document,
  {
    reset = false,
    selected = state.structureSelected,
    message = "Atomik yapı güncellendi.",
  } = {},
) {
  const validated = validateStructure(document);
  if (JSON.stringify(validated) !== JSON.stringify(state.structure)) {
    state.structureUndo.push({
      document: clone(state.structure),
      selected: [...state.structureSelected],
    });
    state.structureUndo = state.structureUndo.slice(-STRUCTURE_LIMITS.history);
    state.structureRedo = [];
  }
  state.structure = validated;
  state.structureActive = true;
  state.structureSelected = selected
    .filter((id) => validated.atoms.some((atom) => atom.id === id))
    .slice(-2);
  renderMaterials(reset);
  persist();
  notify(message);
}
function structureHistory(from, to) {
  if (!state[from].length) return;
  state[to].push({
    document: clone(state.structure),
    selected: [...state.structureSelected],
  });
  const previous = state[from].pop();
  state.structure = previous.document;
  state.structureSelected = previous.selected;
  state.structureActive = true;
  renderMaterials(true);
  persist();
  notify("Yapı düzenlemesi geri yüklendi.");
}
function selectStructureAtom(id) {
  if (state.busy || !state.structure.atoms.some((atom) => atom.id === id))
    return;
  state.structureSelected = state.structureSelected.includes(id)
    ? state.structureSelected.filter((selected) => selected !== id)
    : [...state.structureSelected.slice(-1), id];
  viewer?.select(state.structureSelected);
  renderStructureInspector();
  renderStructureSummary();
}
function downloadXYZ() {
  const content = writeXYZ(state.structure);
  const url = URL.createObjectURL(
    new Blob([content], { type: "chemical/x-xyz;charset=utf-8" }),
  );
  el("a", { href: url, download: "yorunge-yapi.xyz" }).click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  notify("XYZ dosyası Å koordinatlarıyla indirildi.");
}
function renderMaterials(reset) {
  $("workspace").classList.add("structure-workspace");
  if (state.structureActive) {
    renderStructureEditor(reset);
    return;
  }
  $("representation").hidden = false;
  renderPresetMaterial(reset);
  $("library").prepend(
    section("Yapı düzenleme", [
      button(
        state.structure.atoms.length
          ? `Özel yapıya dön (${state.structure.atoms.length} atom)`
          : "Özel yapı düzenle",
        () => {
          state.structureActive = true;
          renderMaterials(true);
          persist();
        },
        "full primary",
      ),
      button(
        "Boş yapı oluştur",
        () =>
          commitStructure(emptyStructure(), {
            reset: true,
            selected: [],
            message: "Boş yapı açıldı. Element seçip atom ekleyebilirsin.",
          }),
        "full",
      ),
      hint("118 element · Serbest Å koordinatları · XYZ dosyaları"),
    ]),
  );
  const scale = structureNumber(
    "Ölçek (Å / gösterim birimi)",
    "structure-preset-scale",
    "",
    0.001,
    1000,
  );
  const form = el("form", { class: "structure-preset-copy" }, [
    scale,
    el("button", { type: "submit", class: "full", text: "Ölçekle ve düzenle" }),
    hint(
      "Bu hazır yapı birimsizdir. Girdiğin ölçek bütün koordinatlara uygulanır; bağlantı çizgileri aktarılmaz.",
    ),
  ]);
  form.addEventListener(
    "submit",
    safe((event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const name = materialPresets.find(
        (material) => material.id === state.material,
      ).name;
      commitStructure(
        scalePreset(
          state.materialGraph,
          Number($("structure-preset-scale").value),
          name,
        ),
        {
          reset: true,
          selected: [],
          message: "Hazır yapı belirttiğin Å/birim ölçeğiyle kopyalandı.",
        },
      );
    }),
  );
  $("library").append(section("Hazır yapıyı kopyala", [form]));
}
function renderStructureEditor(reset) {
  $("scene-title").textContent = state.structure.name || "Özel yapı";
  $("scene-caption").textContent =
    "Koordinatlar: Å · Küreler atom işaretçisidir · Döndür: sürükle";
  $("scene-legend").replaceChildren();
  $("representation").hidden = true;
  state.materialGraph = { atoms: state.structure.atoms, bonds: [] };
  viewer?.setGraph(state.materialGraph, {
    reset,
    dense: true,
    structure: true,
  });
  viewer?.select(state.structureSelected);
  const name = el("input", {
    id: "structure-name",
    maxLength: 120,
    value: state.structure.name,
    "aria-label": "Yapı adı",
    onChange: safe((event) => {
      commitStructure({ ...state.structure, name: event.target.value });
    }),
  });
  const atomForm = el("form", { id: "structure-add-form" }, [
    el("label", { class: "field" }, [
      "Element · 118",
      structureElementSelect(
        "structure-add-element",
        state.structureElement,
        (value) => {
          state.structureElement = value;
        },
      ),
    ]),
    structureCoordinates(
      "structure-add",
      state.structurePosition,
      (axis, value) => {
        state.structurePosition[axis] = value;
      },
    ),
    el("button", {
      type: "submit",
      class: "full primary",
      text: "Atom ekle",
      disabled: state.structure.atoms.length >= STRUCTURE_LIMITS.atoms,
    }),
  ]);
  atomForm.addEventListener(
    "submit",
    safe((event) => {
      event.preventDefault();
      if (!atomForm.reportValidity()) return;
      const id = nextAtomId(state.structure.atoms);
      commitStructure(
        {
          ...state.structure,
          atoms: [
            ...state.structure.atoms,
            {
              id,
              element: state.structureElement,
              position: [...state.structurePosition],
            },
          ],
        },
        {
          selected: [id],
          message: `${state.structureElement} atomu eklendi. Konumlar Å biriminde.`,
        },
      );
    }),
  );
  const lattice = state.latticeDraft;
  const latticeKind = el(
    "select",
    {
      id: "structure-lattice-kind",
      onChange: (event) => {
        lattice.kind = event.target.value;
      },
    },
    [
      el("option", { value: "sc", text: "SC · Basit kübik" }),
      el("option", { value: "bcc", text: "BCC · Hacim merkezli kübik" }),
      el("option", { value: "fcc", text: "FCC · Yüzey merkezli kübik" }),
    ],
  );
  latticeKind.value = lattice.kind;
  const latticeForm = el("form", { id: "structure-lattice-form" }, [
    el("label", { class: "field" }, ["Örgü türü", latticeKind]),
    el("label", { class: "field" }, [
      "Element",
      structureElementSelect(
        "structure-lattice-element",
        lattice.element,
        (value) => {
          lattice.element = value;
        },
      ),
    ]),
    structureNumber(
      "Örgü sabiti a (Å)",
      "structure-lattice-a",
      lattice.a,
      0.1,
      1000,
      (value) => {
        lattice.a = value;
      },
    ),
    el(
      "div",
      { class: "structure-coordinates" },
      ["X", "Y", "Z"].map((axis, index) =>
        structureNumber(
          `${axis} tekrar`,
          `structure-repeat-${index}`,
          lattice.repeats[index],
          1,
          30,
          (value) => {
            lattice.repeats[index] = value;
          },
          1,
        ),
      ),
    ),
    el("button", {
      type: "submit",
      class: "full",
      text: "Yapıyı örgüyle değiştir",
    }),
    hint(
      "Sonlu kesit; periyodik sınır yok. Hücre başına SC: 1, BCC: 2, FCC: 4 atom. Önceki yapıyı Geri al ile getirebilirsin.",
    ),
  ]);
  latticeForm.addEventListener(
    "submit",
    safe((event) => {
      event.preventDefault();
      if (!latticeForm.reportValidity()) return;
      commitStructure(createLattice(lattice), {
        reset: true,
        selected: [],
        message: "Kübik örgü üretildi. Atom koordinatları düzenlenebilir.",
      });
    }),
  );
  const xyzFile = el("input", {
    id: "structure-xyz-file",
    type: "file",
    accept: ".xyz,text/plain,chemical/x-xyz",
    hidden: true,
  });
  xyzFile.addEventListener(
    "change",
    safe(async () => {
      const file = xyzFile.files[0];
      xyzFile.value = "";
      if (!file || state.busy) return;
      if (file.size > STRUCTURE_LIMITS.fileBytes)
        throw new Error("XYZ dosyası 256 KiB sınırını aşıyor.");
      setBusy(true);
      try {
        const document = parseXYZ(
          await file.text(),
          file.name.replace(/\.xyz$/i, ""),
        );
        commitStructure(document, {
          reset: true,
          selected: [],
          message:
            "XYZ yapısı Å birimiyle açıldı. Önceki yapı Geri al ile geri getirilebilir.",
        });
      } finally {
        setBusy(false);
      }
    }),
  );
  $("library").replaceChildren(
    section("Özel yapı", [
      el("label", { class: "field" }, ["Yapı adı", name]),
      button(
        "Hazır yapıları aç",
        () => {
          state.structureActive = false;
          renderMaterials(true);
          persist();
        },
        "full",
      ),
      button(
        "Boş yapı oluştur",
        () =>
          commitStructure(emptyStructure(), {
            reset: true,
            selected: [],
            message:
              "Boş yapı açıldı. Önceki düzen Geri al ile geri getirilebilir.",
          }),
        "full",
      ),
    ]),
    section("Atom ekle", [
      atomForm,
      hint(
        `Sınır: ${STRUCTURE_LIMITS.atoms} atom; her eksende ±${STRUCTURE_LIMITS.coordinate} Å.`,
      ),
    ]),
    section("Kübik örgü üret", [
      el("details", { class: "structure-lattice" }, [
        el("summary", { text: "SC / BCC / FCC ayarları" }),
        latticeForm,
      ]),
    ]),
    section("Yapı dosyaları", [
      row([
        button("XYZ aç", () => xyzFile.click()),
        button("XYZ indir", downloadXYZ),
      ]),
      xyzFile,
      hint(
        "XYZ: tek kare, Element x y z, Å. Atom kimlikleri XYZ'de saklanmaz. Üstteki Kaydet, yapı kimliklerini ve birimini JSON olarak korur.",
      ),
    ]),
  );
  const undo = button("Geri al", () =>
    structureHistory("structureUndo", "structureRedo"),
  );
  const redo = button("Yinele", () =>
    structureHistory("structureRedo", "structureUndo"),
  );
  undo.disabled = !state.structureUndo.length;
  redo.disabled = !state.structureRedo.length;
  const clear = button("Seçimi temizle", () => {
    state.structureSelected = [];
    viewer?.select([]);
    renderStructureInspector();
    renderStructureSummary();
  });
  $("stage-controls").replaceChildren(
    undo,
    redo,
    clear,
    el("span", { class: "spacer" }),
    el("span", { class: "hint", text: "İki atom seç: merkezler arası mesafe" }),
  );
  renderStructureInspector();
  renderStructureSummary();
  setDetails([
    "Bu düzenleyici sonlu atom koordinatlarıyla çalışır. 1 Å = 10⁻¹⁰ m. Koordinatlar dosyaya olduğu gibi yazılır; ekrandaki merkezleme veya ölçekleme belge koordinatlarını değiştirmez.",
    "118 elementin simgesi seçilebilir. Küreler seçim işaretçisidir; fiziksel atom yarıçapı, bağ, enerji, kuvvet, kararlılık, gevşeme veya malzeme özelliği hesaplanmaz. SC, BCC ve FCC üreticileri seçilen geometrik bazı tekrarlar; seçilen elementin bu örgüde kararlı olduğunu söylemez.",
    "Kübik örgüler [0,nₓa) × [0,nᵧa) × [0,n𝓏a) aralığında üretilen sonlu kesitlerdir; periyodik sınır, hücre vektörü veya görüntü atomu eklenmez. Görünen min–maks ölçüler atom merkezlerinin sınırlarıdır.",
    `Kaynak sınırları: ${STRUCTURE_LIMITS.atoms} atom, ±${STRUCTURE_LIMITS.coordinate} Å, 256 KiB içe aktarım ve son ${STRUCTURE_LIMITS.history} düzenleme için geri alma. XYZ yalnız tek kare ve dört sütun kabul eder; genişletilmiş XYZ alanları kabul edilmez.`,
    ...(state.structure.source
      ? [
          `İlk kopyalama kaydı: ${state.structure.source.name}; ${state.structure.source.angstrom_per_unit} Å / birimsiz gösterim birimi. Sonraki atom düzenlemeleri bu başlangıç kaydını değiştirmez.`,
        ]
      : []),
  ]);
  $("export-result").disabled = false;
}
function renderStructureSummary() {
  const summary = structureSummary(state.structure, state.structureSelected);
  setMetrics([
    ["Atom", summary.count],
    ["Element türü", Object.keys(summary.composition).length],
    [
      "Seçili çift mesafesi",
      summary.pairDistance === null ? "—" : fmt(summary.pairDistance, 5),
      summary.pairDistance === null ? "" : "Å",
    ],
  ]);
  const composition =
    Object.entries(summary.composition)
      .map(([symbol, count]) => `${symbol}: ${count}`)
      .join(" · ") || "Atom eklenmedi";
  $("below-stage").replaceChildren(
    el("div", { class: "explanation structure-summary" }, [
      el("strong", { text: "Bileşim: " }),
      composition,
      el("div", {
        text: `Merkezlerin kapladığı aralık (X × Y × Z): ${summary.extent.map((value) => fmt(value, 4)).join(" × ")} Å`,
      }),
      ...(summary.minimum
        ? [
            el("div", {
              text: `Min: ${summary.minimum.map((value) => fmt(value, 4)).join(", ")} Å · Maks: ${summary.maximum.map((value) => fmt(value, 4)).join(", ")} Å`,
            }),
          ]
        : []),
      ...(summary.coincident
        ? [
            el("div", {
              class: "structure-warning",
              text: `${summary.coincident} atom başka bir atomla tam aynı konumda. Liste üzerinden ayrı ayrı seçebilirsin.`,
            }),
          ]
        : []),
    ]),
  );
}
function renderStructureInspector() {
  const selected = state.structureSelected
    .map((id) => state.structure.atoms.find((atom) => atom.id === id))
    .filter(Boolean);
  const content = [
    hint(
      "Bir atomu düzenlemek veya iki atomun mesafesini ölçmek için sahneden ya da listeden seç. Seçili atoma yeniden tıklamak seçimini kaldırır.",
    ),
  ];
  if (selected.length === 1) {
    const atom = selected[0];
    let element = atom.element;
    const position = [...atom.position];
    const form = el("form", { id: "structure-edit-form" }, [
      el("p", { class: "structure-atom-id", text: `Atom: ${atom.id}` }),
      el("label", { class: "field" }, [
        "Element",
        structureElementSelect("structure-edit-element", element, (value) => {
          element = value;
        }),
      ]),
      structureCoordinates("structure-edit", position, (axis, value) => {
        position[axis] = value;
      }),
      el("button", {
        type: "submit",
        class: "primary full",
        text: "Değişikliği uygula",
      }),
    ]);
    form.addEventListener(
      "submit",
      safe((event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;
        commitStructure(
          {
            ...state.structure,
            atoms: state.structure.atoms.map((candidate) =>
              candidate.id === atom.id
                ? { ...candidate, element, position }
                : candidate,
            ),
          },
          { message: `${atom.id} elementi ve Å koordinatları güncellendi.` },
        );
      }),
    );
    content.push(form);
  } else
    content.push(
      el("p", {
        class: "selection-summary",
        text:
          selected.length === 2
            ? `${selected[0].id} (${selected[0].element}) + ${selected[1].id} (${selected[1].element}) · ${fmt(structureSummary(state.structure, state.structureSelected).pairDistance, 6)} Å`
            : "Seçili atom yok.",
      }),
    );
  if (selected.length) {
    const duplicate = button("Çoğalt · X +1 Å", () => {
      const atoms = clone(state.structure.atoms),
        ids = [];
      for (const atom of selected) {
        const id = nextAtomId(atoms);
        atoms.push({
          ...clone(atom),
          id,
          position: [atom.position[0] + 1, atom.position[1], atom.position[2]],
        });
        ids.push(id);
      }
      commitStructure(
        { ...state.structure, atoms },
        {
          selected: ids,
          message: "Seçili atomlar X yönünde +1 Å kaydırılarak çoğaltıldı.",
        },
      );
    });
    duplicate.disabled =
      state.structure.atoms.length + selected.length > STRUCTURE_LIMITS.atoms;
    content.push(
      el("div", { class: "structure-selection-actions" }, [
        duplicate,
        button(
          "Seçileni sil",
          () => {
            commitStructure(
              {
                ...state.structure,
                atoms: state.structure.atoms.filter(
                  (atom) => !state.structureSelected.includes(atom.id),
                ),
              },
              { selected: [], message: "Seçili atomlar silindi." },
            );
          },
          "danger",
        ),
      ]),
    );
  }
  const search = el("input", {
    id: "structure-atom-search",
    type: "search",
    value: state.structureQuery,
    placeholder: "Element, ad veya atom kimliği",
    "aria-label": "Atom listesini filtrele",
  });
  search.addEventListener("input", () => {
    state.structureQuery = search.value;
    state.structurePage = 0;
    renderStructureAtomList();
  });
  $("inspector").replaceChildren(
    section("Atom özellikleri", content),
    section("Atom listesi", [
      search,
      el("div", { id: "structure-atom-list", class: "structure-atom-list" }),
      el("div", { id: "structure-pagination", class: "structure-pagination" }),
    ]),
  );
  renderStructureAtomList();
}
function renderStructureAtomList() {
  const query = state.structureQuery.toLocaleLowerCase("tr-TR").trim();
  const filtered = state.structure.atoms.filter((atom) => {
    const element = elements.find(
      (candidate) => candidate.symbol === atom.element,
    );
    return `${atom.id} ${atom.element} ${element?.name} ${element?.name_en}`
      .toLocaleLowerCase("tr-TR")
      .includes(query);
  });
  const pageCount = Math.max(
    1,
    Math.ceil(filtered.length / STRUCTURE_LIMITS.pageSize),
  );
  state.structurePage = Math.min(state.structurePage, pageCount - 1);
  const offset = state.structurePage * STRUCTURE_LIMITS.pageSize;
  $("structure-atom-list").replaceChildren(
    ...filtered
      .slice(offset, offset + STRUCTURE_LIMITS.pageSize)
      .map((atom) => {
        const item = button(
          "",
          () => selectStructureAtom(atom.id),
          `structure-atom ${state.structureSelected.includes(atom.id) ? "selected" : ""}`,
        );
        item.setAttribute(
          "aria-pressed",
          String(state.structureSelected.includes(atom.id)),
        );
        item.append(
          el("strong", { text: `${atom.element} · ${atom.id}` }),
          el("small", {
            text: `${atom.position.map((value) => fmt(value, 4)).join(" / ")} Å`,
          }),
        );
        return item;
      }),
    ...(filtered.length ? [] : [hint("Eşleşen atom yok.")]),
  );
  const previous = button("Önceki", () => {
    state.structurePage--;
    renderStructureAtomList();
  });
  const next = button("Sonraki", () => {
    state.structurePage++;
    renderStructureAtomList();
  });
  previous.disabled = state.structurePage === 0;
  next.disabled = state.structurePage + 1 >= pageCount;
  $("structure-pagination").replaceChildren(
    previous,
    el("span", {
      text: `${state.structurePage + 1}/${pageCount} · ${filtered.length} atom`,
    }),
    next,
  );
}
function renderPresetMaterial(reset) {
  const material =
    materialPresets.find((m) => m.id === state.material) || materialPresets[0];
  state.material = material.id;
  $("scene-title").textContent = material.name;
  $("scene-caption").textContent =
    "Döndür: sürükle · Atom konumları şematiktir";
  $("library").replaceChildren(
    section("Yapı kütüphanesi", [
      el(
        "div",
        { class: "preset-list" },
        materialPresets.map((p) => {
          const b = button(
            "",
            () => {
              state.material = p.id;
              renderMaterials(true);
              persist();
              notify(`${p.name} yapısı açıldı.`);
            },
            `preset-button ${p.id === state.material ? "active" : ""}`,
          );
          b.append(
            el("strong", { text: p.name }),
            el("small", { text: p.formula }),
          );
          return b;
        }),
      ),
    ]),
    section(
      "Görünümü değiştir",
      material.id === "graphite"
        ? [
            rangeField(
              "Katman sayısı",
              "layers",
              state.layers,
              1,
              5,
              1,
              (n) => {
                state.layers = n;
                updateMaterialGeometry();
                persist();
              },
            ),
            rangeField(
              "Katman aralığı",
              "spacing",
              state.spacing,
              0.5,
              3,
              0.1,
              (n) => {
                state.spacing = n;
                updateMaterialGeometry();
                persist();
              },
            ),
            hint(
              "Katman aralığı bir görsel kontrolüdür; ayırma kuvveti veya enerji hesabı değildir.",
            ),
          ]
        : [
            hint(
              "Atomları farklı açılardan incelemek için sahneyi sürükle. Küre–çubuk düğmesiyle atomların kapladığı alanı karşılaştır.",
            ),
          ],
    ),
    section("Karbonu karşılaştır", [
      button(
        "Grafen",
        () => {
          state.material = "graphene";
          renderMaterials(true);
          persist();
        },
        "full",
      ),
      button(
        "Grafit",
        () => {
          state.material = "graphite";
          renderMaterials(true);
          persist();
        },
        "full",
      ),
      button(
        "Elmas",
        () => {
          state.material = "diamond";
          renderMaterials(true);
          persist();
        },
        "full",
      ),
    ]),
  );
  updateMaterialGeometry(reset);
  $("stage-controls").replaceChildren(
    el("span", {
      class: "hint",
      text: "Sonlu kristal kesiti · kenar atomlarının komşuları eksik olabilir",
    }),
  );
  $("inspector").replaceChildren(
    section(material.name, [
      el("div", { class: "component" }, [
        el("div", { class: "formula", text: subscript(material.formula) }),
        el("p", { class: "material-info", text: material.description }),
      ]),
    ]),
    section("Atomların düzeni", [
      el("p", { class: "material-info", text: material.structure }),
    ]),
    section("Bu görünüm neyi hesaplar?", [
      el("p", {
        class: "material-info",
        text: Array.isArray(material.limitations)
          ? material.limitations.join(" ")
          : material.limitations,
      }),
      hint(
        "Isı iletimi, elektrik iletkenliği, kırılma ve üretim koşulları bu modelden hesaplanmaz.",
      ),
    ]),
  );
  $("below-stage").replaceChildren(
    el("div", { class: "explanation" }, [
      el("strong", { text: "Düzen değişince yapı değişir. " }),
      "Grafen tek karbon katmanını, grafit üst üste katmanları, elmas üç boyutlu bir ağı gösterir. Bunlar ayrı hazır yapılardır; aralarında kendiliğinden dönüşüm hesaplanmaz.",
    ]),
  );
  setDetails(
    [
      "Bu alan grafen, grafit, elmas, kaya tuzu ve silisyum için sonlu, şematik kafes kesitleri üretir. Atom ve bağlantı sayıları ekranda görünen kesite aittir; sonsuz malzemenin miktarı değildir.",
      "Bağ çubukları komşuluğu gösterir. Grafenin delokalize elektronları ve kaya tuzunun iyonik etkileşimleri aynı kovalent bağ modeliyle hesaplanmaz. Katman kaydırıcısı yalnız görüntü düzenidir.",
    ],
    [
      [
        "Grafen yapısı — Graphene Flagship",
        "https://graphene-flagship.eu/materials/graphene/",
      ],
    ],
  );
  $("export-result").disabled = false;
}

function invalidateCell() {
  state.cellResult = null;
  state.playing = false;
  state.cellTime = 0;
}
function numberField(label, key, min, max, step, unit = "") {
  const input = el("input", {
    id: `cell-${key}`,
    type: "number",
    value: state.cell[key],
    min,
    max,
    step: "any",
    required: true,
  });
  input.addEventListener(
    "change",
    safe(() => {
      if (!input.reportValidity()) return;
      state.cell[key] = Number(input.value);
      invalidateCell();
      updateCellFrame();
      renderCellChart();
      $("cell-timeline").disabled = true;
      $("cell-timeline").max = state.cell.duration_s;
      $("export-result").disabled = true;
      if ($("cell-division_at_s"))
        $("cell-division_at_s").max = state.cell.duration_s - 0.1;
      persist();
      notify("Hücre ayarı değişti. Yeni sonuç için deneyi çalıştır.");
    }),
  );
  return el("label", { class: "field" }, [
    label,
    el("span", { class: "unit", text: unit }),
    input,
  ]);
}
function initialCellFrame() {
  const e = state.cell;
  return {
    t_s: 0,
    cells: [
      {
        id: "cell-1",
        volume_pl: e.cell_volume_pl,
        solute_fmol: e.cell_volume_pl * e.inside_concentration_mm,
        concentration_mm: e.inside_concentration_mm,
      },
    ],
    external_volume_pl: e.external_volume_pl,
    external_solute_fmol: e.external_volume_pl * e.outside_concentration_mm,
    external_concentration_mm: e.outside_concentration_mm,
  };
}
function currentCellFrame() {
  if (!state.cellResult) return initialCellFrame();
  const frames = state.cellResult.frames;
  let lo = 0,
    hi = frames.length - 1;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (frames[mid].t_s <= state.cellTime + 1e-8) lo = mid;
    else hi = mid - 1;
  }
  return frames[lo];
}
function renderCells(reset) {
  if (!state.cell) return;
  $("scene-title").textContent = "Hücre ve dış ortam";
  $("scene-caption").textContent =
    "Hacim ölçeği göreli · organeller şematik · oynatma 10×";
  const division = el("input", {
    type: "checkbox",
    checked: state.cell.division_at_s !== null,
    id: "division-enabled",
  });
  division.addEventListener("change", () => {
    state.cell.division_at_s = division.checked
      ? state.cell.duration_s / 2
      : null;
    invalidateCell();
    renderCells(false);
    persist();
  });
  const divisionChildren = [
    el("label", { class: "field check" }, [division, "Şematik ikiye bölünme"]),
  ];
  if (state.cell.division_at_s !== null)
    divisionChildren.push(
      numberField(
        "Bölünme zamanı",
        "division_at_s",
        0.1,
        state.cell.duration_s - 0.1,
        0.1,
        "s",
      ),
    );
  divisionChildren.push(
    hint(
      "Bölünmede hacim ve çözünen miktarı eşit paylaşılır. DNA kopyalanması ve hücre döngüsü hesaplanmaz.",
    ),
  );
  $("library").replaceChildren(
    section("Hazır deneyler", [
      el(
        "div",
        { class: "preset-list" },
        state.cellPresets.map((p) => {
          const b = button(
            "",
            () => {
              state.cell = clone(p.experiment);
              invalidateCell();
              renderCells(true);
              persist();
              notify(p.description);
            },
            "preset-button",
          );
          b.append(el("strong", { text: p.label }));
          return b;
        }),
      ),
    ]),
    section("Zarın iki tarafı", [
      numberField("İç yoğunluk", "inside_concentration_mm", 0, 1000, 1, "mM"),
      numberField("Dış yoğunluk", "outside_concentration_mm", 0, 1000, 1, "mM"),
      numberField("Hücre hacmi", "cell_volume_pl", 0.1, 10, 0.1, "pL"),
      numberField("Dış ortam hacmi", "external_volume_pl", 1, 100, 1, "pL"),
    ]),
    section("Zar geçirgenliği", [
      numberField(
        "Su katsayısı",
        "water_permeability_pl_s_mm",
        0,
        0.001,
        0.00001,
        "pL/(s·mM)",
      ),
      numberField(
        "Çözünen katsayısı",
        "solute_permeability_pl_s",
        0,
        0.05,
        0.001,
        "pL/s",
      ),
      numberField("Deney süresi", "duration_s", 1, 300, 1, "s"),
    ]),
    section("Bölünme", divisionChildren),
  );
  const run = button(
    state.playing ? "Duraklat" : state.cellResult ? "Oynat" : "Deneyi çalıştır",
    runCells,
    "primary",
  );
  run.id = "cell-run";
  const scrub = el("input", {
    id: "cell-timeline",
    type: "range",
    min: 0,
    max: state.cellResult?.summary.elapsed_s || state.cell.duration_s,
    step: 0.01,
    value: state.cellTime,
    disabled: !state.cellResult,
    "aria-label": "Hücre deney zamanı",
  });
  scrub.addEventListener("input", () => {
    state.playing = false;
    state.cellTime = Number(scrub.value);
    updateCellFrame();
  });
  $("stage-controls").replaceChildren(
    run,
    button("Başa dön", () => {
      state.cellTime = 0;
      state.playing = false;
      updateCellFrame();
    }),
    scrub,
    el("output", { id: "cell-time", text: `${fmt(state.cellTime, 1)} s` }),
  );
  $("below-stage").replaceChildren(
    el("div", { class: "chart-box" }, [
      el("h2", {}, [
        "Toplam hücre hacmi",
        el("small", { text: "pL / saniye" }),
      ]),
      el("div", { id: "cell-chart" }),
      el("p", {
        class: "science-note",
        text: "Bölünme hacmi çoğaltmaz; aynı hacim iki hücreye paylaşılır. Grafik iki hücrenin toplamını izler.",
      }),
    ]),
  );
  updateCellFrame(reset);
  renderCellChart();
  setDetails(
    [
      "İç ve dış ortam sonlu, iyi karışmış iki bölme olarak modellenir. Çözünen miktarı fmol, hacim pL, yoğunluk mM kullanır; 1 fmol/pL = 1 mM. Su yoğun çözünen tarafa, geçirgen çözünen ise kendi yoğunluk farkının azaldığı yöne taşınır.",
      "Toplam su hacmi ve çözünen miktarı korunur. Katsayılar kullanıcı tarafından seçilen eğitim parametreleridir; belirli bir gerçek hücreye kalibre edilmemiştir.",
      "Hücre zarı, çekirdek ve organellerin görünümü şematiktir. Bölünme yalnız miktarları iki özdeş hücreye paylaşır. Metabolizma, DNA, canlılık, zar basıncı ve gerçek mitoz modellenmez.",
      "Sayısal modelin hacim sınırına gelinirse hesap durur ve olay kaydı gösterilir. Bu sınırlar hücrenin ölüm veya patlama eşikleri değildir.",
    ],
    [
      [
        "Pasif taşıma ve ozmoz — OpenStax",
        "https://openstax.org/books/concepts-biology/pages/3-5-passive-transport",
      ],
    ],
    "POST /api/cells/simulate",
  );
  $("export-result").disabled = !state.cellResult;
}
async function runCells() {
  if (state.busy) return;
  for (const input of $("library").querySelectorAll("input[type=number]"))
    if (!input.reportValidity()) return;
  if (state.cellResult) {
    state.playing = !state.playing;
    if (state.cellTime >= state.cellResult.summary.elapsed_s)
      state.cellTime = 0;
    updateCellFrame();
    return;
  }
  setBusy(true);
  notify("Hücre deneyi hesaplanıyor…");
  try {
    state.cellResult = await post("/api/cells/simulate", state.cell);
    state.cellTime = 0;
    renderCells(false);
    state.playing = true;
    updateCellFrame();
    const limited = state.cellResult.summary.status === "model_limit";
    notify(
      limited
        ? "Deney model sınırına ulaştı. Sonuçlar ve olay kaydı hazır."
        : "Deney hesaplandı. Zaman çizgisinden her anı inceleyebilirsin.",
      limited,
    );
  } finally {
    setBusy(false);
  }
}
function updateCellFrame(reset = false) {
  if (state.mode !== "cells" || !state.cell) return;
  const frame = currentCellFrame();
  viewer?.setCells(frame, state.cell.cell_volume_pl, { reset });
  const volume = frame.cells.reduce((sum, c) => sum + c.volume_pl, 0);
  setMetrics([
    ["Hücre", frame.cells.length],
    ["Toplam hacim", fmt(volume, 3), "pL"],
    ["İç yoğunluk", fmt(frame.cells[0].concentration_mm, 1), "mM"],
  ]);
  if ($("cell-time")) $("cell-time").textContent = `${fmt(frame.t_s, 1)} s`;
  if ($("cell-timeline")) $("cell-timeline").value = state.cellTime;
  if ($("cell-run"))
    $("cell-run").textContent = state.playing
      ? "Duraklat"
      : state.cellResult
        ? "Oynat"
        : "Deneyi çalıştır";
  const diff =
    frame.cells[0].concentration_mm - frame.external_concentration_mm;
  const direction =
    Math.abs(diff) < 0.01
      ? "Yoğunluklar dengede"
      : diff > 0
        ? "Su için eğilim: hücrenin içine"
        : "Su için eğilim: dış ortama";
  const result = state.cellResult;
  $("inspector").replaceChildren(
    section("Şu anda", [
      el("div", { class: "status-badge", text: direction }),
      el(
        "dl",
        { class: "properties" },
        [
          ["Dış yoğunluk", `${fmt(frame.external_concentration_mm, 1)} mM`],
          ["Dış hacim", `${fmt(frame.external_volume_pl, 3)} pL`],
          ...frame.cells.map((c, i) => [
            `Hücre ${i + 1}`,
            `${fmt(c.volume_pl, 3)} pL`,
          ]),
        ].map(([k, v]) =>
          el("div", {}, [el("dt", { text: k }), el("dd", { text: v })]),
        ),
      ),
      hint(
        state.cell.water_permeability_pl_s_mm === 0
          ? "Su katsayısı sıfır: bu deneyde su geçişi kapalı."
          : "Su geçişi yoğunluk farkı ve seçilen katsayıyla hesaplanır.",
      ),
    ]),
    section(
      "Korunum kontrolü",
      result
        ? [
            el("p", {
              class: "material-info",
              text: `En büyük hacim hatası: ${Number(result.summary.max_volume_conservation_error_pl).toExponential(1)} pL`,
            }),
            el("p", {
              class: "material-info",
              text: `En büyük çözünen hatası: ${Number(result.summary.max_solute_conservation_error_fmol).toExponential(1)} fmol`,
            }),
            hint(
              "Bu değerler hesap boyunca toplam miktarların ne kadar korunduğunu gösterir.",
            ),
          ]
        : [
            hint(
              "Hacim ve çözünenin korunumu deney çalışınca burada gösterilir.",
            ),
          ],
    ),
    section(
      "Olay kaydı",
      result
        ? [
            el(
              "ul",
              { class: "events" },
              result.events.map((event) =>
                el("li", {
                  class: "event",
                  text: `${fmt(event.t_s, 1)} s — ${event.message}`,
                }),
              ),
            ),
            ...(result.events.length
              ? []
              : [hint("Bölünme veya model sınırı olayı yok.")]),
          ]
        : [hint("Henüz deney çalıştırılmadı.")],
    ),
  );
  const marker = $("chart-marker");
  if (marker && result)
    marker.setAttribute(
      "x1",
      String(35 + Math.min(state.cellTime / result.summary.elapsed_s, 1) * 525),
    );
  if (marker) marker.setAttribute("x2", marker.getAttribute("x1"));
}
function renderCellChart() {
  const host = $("cell-chart");
  if (!host) return;
  if (!state.cellResult) {
    host.replaceChildren(
      hint("Deneyi çalıştırınca hacmin zamanla değişimi burada çizilir."),
    );
    return;
  }
  const frames = state.cellResult.frames;
  const values = frames.map((f) =>
    f.cells.reduce((s, c) => s + c.volume_pl, 0),
  );
  let low = Math.min(...values),
    high = Math.max(...values);
  const pad = Math.max((high - low) * 0.15, high * 0.03, 0.01);
  low -= pad;
  high += pad;
  const duration = state.cellResult.summary.elapsed_s || 1;
  const svg = svgNode("svg", {
    viewBox: "0 0 580 155",
    class: "chart",
    role: "img",
    "aria-label": "Zamana karşı toplam hücre hacmi grafiği",
  });
  for (let i = 0; i < 3; i++) {
    const y = 12 + i * 57;
    svg.append(
      svgNode("line", { x1: 35, x2: 560, y1: y, y2: y, stroke: "#e4edf1" }),
    );
    const t = svgNode("text", {
      x: 0,
      y: y + 4,
      fill: "#6a8190",
      "font-size": 9,
    });
    t.textContent = fmt(high - (i * (high - low)) / 2, 2);
    svg.append(t);
  }
  const points = frames
    .map(
      (f, i) =>
        `${35 + (f.t_s / duration) * 525},${12 + ((high - values[i]) / (high - low)) * 114}`,
    )
    .join(" ");
  svg.append(
    svgNode("polyline", {
      points,
      fill: "none",
      stroke: "#07898d",
      "stroke-width": 2.5,
    }),
  );
  const markerX = 35 + Math.min(state.cellTime / duration, 1) * 525;
  svg.append(
    svgNode("line", {
      id: "chart-marker",
      x1: markerX,
      x2: markerX,
      y1: 10,
      y2: 128,
      stroke: "#566f88",
      "stroke-dasharray": "3 3",
    }),
  );
  for (const [x, label] of [
    [35, "0 s"],
    [525, `${fmt(duration, 1)} s`],
  ]) {
    const t = svgNode("text", { x, y: 148, fill: "#6a8190", "font-size": 10 });
    t.textContent = label;
    svg.append(t);
  }
  host.replaceChildren(svg);
}

async function importEnvelope(data) {
  if (data?.format === "yorunge-structure") {
    const document = validateStructure(data);
    state.structure = document;
    state.structureActive = true;
    state.structureSelected = [];
    state.structureUndo = [];
    state.structureRedo = [];
    state.structurePage = 0;
    state.structureQuery = "";
    state.mode = "materials";
    state.epoch++;
    renderMode();
    return;
  }
  if (
    !data ||
    typeof data !== "object" ||
    data.format !== "yorunge-science" ||
    ![1, 2].includes(data.version) ||
    !modeInfo[data.mode]
  )
    throw new Error(
      "Bu dosya desteklenen bir Yörünge deney belgesi değil (v1 veya v2 gerekli).",
    );
  let structureWorkspace;
  if (data.version === 2) {
    if (
      !data.structure_workspace ||
      typeof data.structure_workspace.active !== "boolean"
    )
      throw new Error("Yapı çalışma alanı kaydı geçersiz.");
    structureWorkspace = {
      document: validateStructure(data.structure_workspace.document),
      active: data.structure_workspace.active,
    };
  }
  if (data.mode === "molecules") {
    const result = await post("/api/chemistry/analyze", data.scene);
    state.mol = result.scene;
    state.analysis = result;
    state.undo = [];
    state.redo = [];
    state.selected = [];
  } else if (data.mode === "cells") {
    const result = await post("/api/cells/simulate", data.experiment);
    state.cell = result.experiment;
    state.cellResult = result;
    state.cellTime = 0;
  } else if (data.mode === "elements") {
    if (!elements.some((e) => e.atomic_number === data.atomic_number))
      throw new Error("Geçersiz atom numarası.");
    state.element = data.atomic_number;
  } else {
    if (
      !materialPresets.some((m) => m.id === data.material) ||
      !Number.isInteger(data.layers) ||
      data.layers < 1 ||
      data.layers > 5 ||
      !Number.isFinite(data.spacing) ||
      data.spacing < 0.5 ||
      data.spacing > 3
    )
      throw new Error("Geçersiz malzeme ayarı.");
    state.material = data.material;
    state.layers = data.layers;
    state.spacing = data.spacing;
    if (!structureWorkspace) state.structureActive = false;
  }
  if (structureWorkspace) {
    state.structure = structureWorkspace.document;
    state.structureActive = structureWorkspace.active;
    state.structureSelected = [];
    state.structureUndo = [];
    state.structureRedo = [];
    state.structurePage = 0;
    state.structureQuery = "";
  }
  state.mode = data.mode;
  state.epoch++;
  renderMode();
}
document.querySelectorAll("[data-mode]").forEach((b) =>
  b.addEventListener(
    "click",
    safe(() => switchMode(b.dataset.mode)),
  ),
);
$("reset-camera").addEventListener("click", () => viewer?.resetCamera());
$("representation").addEventListener("click", () => {
  state.spacefill = !state.spacefill;
  $("representation").textContent = state.spacefill
    ? "Hacim görünümü"
    : "Küre–çubuk";
  $("representation").setAttribute("aria-pressed", String(state.spacefill));
  viewer?.setRepresentation(state.spacefill);
});
$("save").addEventListener(
  "click",
  safe(() => {
    if (state.busy) throw new Error("Hesap bitince kaydedebilirsin.");
    download(`yorunge-${state.mode}.json`, envelope());
    notify("Deney dosyası indirildi.");
  }),
);
$("import").addEventListener("click", () => $("file").click());
$("file").addEventListener(
  "change",
  safe(async () => {
    const file = $("file").files[0];
    if (!file) return;
    $("file").value = "";
    if (file.size > 262144)
      throw new Error("Deney dosyası 256 KiB sınırını aşıyor.");
    if (state.busy) return;
    setBusy(true);
    try {
      await importEnvelope(JSON.parse(await file.text()));
      notify("Deney dosyası doğrulandı ve açıldı.");
    } finally {
      setBusy(false);
    }
  }),
);
$("export-result").addEventListener("click", () =>
  download(
    `yorunge-${state.mode}-sonuc.json`,
    state.mode === "molecules"
      ? state.analysis
      : state.mode === "cells"
        ? state.cellResult
        : state.structureActive
          ? state.structure
          : state.materialGraph,
  ),
);
async function start() {
  try {
    viewer = createScienceViewer($("science-viewport"), {
      onSelect: selectAtom,
    });
  } catch (error) {
    $("viewport-error").hidden = false;
    $("viewport-error").textContent =
      "3B görünüm açılamadı. WebGL 2 destekli bir tarayıcı kullan. Element tablosu ve sayısal sonuçlar kullanılabilir.";
  }
  let previous = performance.now(),
    paintElapsed = 0;
  function tick(now) {
    const dt = Math.min(0.05, (now - previous) / 1000);
    previous = now;
    if (
      !document.hidden &&
      state.playing &&
      state.mode === "cells" &&
      state.cellResult
    ) {
      state.cellTime = Math.min(
        state.cellTime + dt * state.cellSpeed,
        state.cellResult.summary.elapsed_s,
      );
      if (state.cellTime >= state.cellResult.summary.elapsed_s)
        state.playing = false;
      paintElapsed += dt;
      if (paintElapsed >= 0.1 || !state.playing) {
        updateCellFrame();
        paintElapsed = 0;
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  try {
    const [chem, cell] = await Promise.all([
      fetch("/api/chemistry/presets").then((r) => r.json()),
      fetch("/api/cells/presets").then((r) => r.json()),
    ]);
    state.molPresets = chem.presets;
    state.cellPresets = cell.presets;
    state.cell = clone(cell.presets[0].experiment);
    state.mol = clone(chem.presets.find((p) => p.id === "water").scene);
    state.analysis = await post("/api/chemistry/analyze", state.mol);
    let saved;
    try {
      saved = JSON.parse(localStorage.getItem("yorunge-science-v1") || "null");
    } catch {}
    if (saved) {
      try {
        await importEnvelope(saved);
      } catch {
        renderMode();
      }
    } else renderMode();
    if (modeInfo[requestedMode]) {
      state.mode = requestedMode;
      renderMode();
    }
    notify("Laboratuvar hazır. Bir deney seç veya görünümü incele.");
  } catch (error) {
    notify(`Laboratuvar yüklenemedi: ${error.message}`, true);
  }
}
start();
