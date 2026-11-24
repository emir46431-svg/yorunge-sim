import { Quaternion } from "three";
import { createViewport } from "./viewport.js";
import {
  bodySeries,
  bodyMetrics,
  resultsCsv,
  mechanicsProject,
  readMechanicsProject,
} from "./analysis.js";

const $ = (id) => document.getElementById(id);
const clone = (value) => structuredClone(value);
const fmt = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 });
const displayNumber = (value) => Number(value.toFixed(5));
document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.required = true;
  input.step = "any";
});
const MATERIALS = {
  stone: { friction: 0.7, restitution: 0.2 },
  wood: { friction: 0.5, restitution: 0.25 },
  rubber: { friction: 0.9, restitution: 0.8 },
  steel: { friction: 0.3, restitution: 0.45 },
};
const STORAGE = "yorunge-scene-v1";
const state = {
  scene: null,
  notes: "",
  selected: null,
  result: null,
  resultNotes: "",
  runs: [],
  time: 0,
  playing: false,
  editing: true,
  busy: false,
  currentFrame: null,
  presets: [],
};
const emptyScene = () => ({
  schema_version: 1,
  name: "Yeni mekanik deneyi",
  gravity: [0, -9.81, 0],
  duration_s: 10,
  sample_hz: 30,
  floor_friction: 0.7,
  floor_restitution: 0.2,
  bodies: [],
  springs: [],
});
let viewport;

function message(text, kind = "info") {
  $("message").textContent = text;
  $("message").dataset.kind = kind;
}
function selectedBody() {
  return state.scene?.bodies.find((body) => body.id === state.selected);
}
function uniqueId(prefix) {
  return `${prefix}-${crypto.randomUUID().slice(0, 8)}`;
}

async function post(path, payload) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(60000),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "İşlem tamamlanamadı.");
  return data;
}

function persist() {
  try {
    localStorage.setItem(
      STORAGE,
      JSON.stringify(mechanicsProject(state.scene, state.notes)),
    );
  } catch {
    /* File export remains available when local storage is disabled/full. */
  }
}

function updateControls() {
  const locked = state.busy || !state.editing;
  $("body-fields").disabled = locked;
  $("edit-hint").hidden = state.editing;
  document
    .querySelectorAll(
      "[data-add],#gravity,#floor-friction,#floor-restitution,#duration,#sample-hz,#experiment-name,#experiment-notes,#add-spring,#duplicate-button,#delete-button",
    )
    .forEach((el) => {
      el.disabled = locked;
    });
  document
    .querySelectorAll("#presets button,#clear-button,#import-button")
    .forEach((el) => {
      el.disabled = state.busy;
    });
  $("run-button").disabled = !state.scene || state.busy || !viewport;
  $("step-button").disabled = !state.scene || state.busy || !viewport;
  $("edit-button").disabled = state.busy || !state.scene;
  $("save-button").disabled = !state.scene || state.busy;
  $("export-result").disabled = !state.result || state.busy;
  $("export-csv").disabled = !state.result || state.busy;
  $("keep-run").disabled =
    !state.result ||
    !state.selected ||
    state.busy ||
    state.runs.length >= 3 ||
    state.runs.some(
      (run) => run.result === state.result && run.bodyId === state.selected,
    );
  $("timeline").disabled = !state.result || state.busy;
  $("translate-button").disabled = locked;
  $("rotate-button").disabled = locked;
  $("run-button").textContent = state.busy
    ? "Hesaplanıyor…"
    : state.playing
      ? "Duraklat"
      : state.result &&
          !state.editing &&
          state.time < state.result.summary.duration_s
        ? "Devam et"
        : "Çalıştır";
  $("mode-label").textContent = state.busy
    ? "Hesaplanıyor"
    : state.editing
      ? "Kurulum"
      : state.playing
        ? "Oynatılıyor"
        : state.time >= (state.result?.summary.duration_s ?? Infinity)
          ? "Tamamlandı"
          : "Duraklatıldı";
}

function loadScene(scene, text, notes = "") {
  state.scene = clone(scene);
  state.notes = notes;
  state.selected = scene.bodies[0]?.id ?? null;
  state.result = null;
  state.playing = false;
  state.editing = true;
  state.time = 0;
  state.currentFrame = null;
  renderSetup();
  persist();
  message(
    text ||
      "Deney hazır. Nesneleri düzenleyebilir veya Çalıştır düğmesine basabilirsin.",
  );
}

function invalidate(text) {
  state.result = null;
  state.playing = false;
  state.editing = true;
  state.time = 0;
  state.currentFrame = null;
  renderSetup();
  persist();
  message(text || "Ayarlar değişti. Çalıştır ile yeni deneyi hesapla.");
}

// Invalidate as soon as typing starts, including an intermediate invalid value.
// The change handler commits valid fields; it must not leave an old graph/export
// visible while a different value is displayed in an editor.
function discardPendingResult() {
  if (!state.editing || state.busy || !state.result) return;
  state.result = null;
  state.currentFrame = null;
  state.time = 0;
  state.playing = false;
  $("timeline").value = 0;
  $("time-output").textContent = "0,00 s";
  renderAnalysis();
  renderRuns();
  renderReadouts();
  updateControls();
}

function renderSetup() {
  viewport?.setScene(state.scene);
  viewport?.setEditable(state.editing && !state.busy);
  viewport?.select(state.selected);
  $("gravity").value = displayNumber(-state.scene.gravity[1]);
  $("floor-friction").value = displayNumber(state.scene.floor_friction);
  $("floor-restitution").value = displayNumber(state.scene.floor_restitution);
  $("duration").value = displayNumber(state.scene.duration_s);
  $("sample-hz").value = state.scene.sample_hz;
  $("experiment-name").value = state.scene.name;
  $("experiment-notes").value = state.notes;
  $("timeline").value = 0;
  $("timeline").max = state.scene.duration_s;
  $("time-output").textContent = "0,00 s";
  renderBodies();
  renderSprings();
  renderInspector();
  renderReadouts();
  renderAnalysis();
  renderRuns();
  updateControls();
}

function renderBodies() {
  $("body-count").textContent = `${state.scene.bodies.length}/60`;
  $("body-list").replaceChildren();
  for (const body of state.scene.bodies) {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.toggle("active", body.id === state.selected);
    button.setAttribute("aria-pressed", String(body.id === state.selected));
    const name = document.createElement("span");
    name.textContent = body.label;
    const kind = document.createElement("small");
    kind.textContent = body.fixed ? "Sabit" : "Serbest";
    button.append(name, kind);
    button.addEventListener("click", () => selectBody(body.id));
    $("body-list").append(button);
  }
}

function selectBody(id) {
  if (!state.scene) return;
  state.selected = id;
  viewport?.select(id);
  renderBodies();
  renderInspector();
  renderReadouts();
  renderAnalysis();
  renderRuns();
  updateControls();
}

function renderInspector() {
  const body = selectedBody();
  $("body-form").hidden = !body;
  $("no-selection").hidden = Boolean(body);
  if (!body) return;
  $("body-label").value = body.label;
  $("material").value = Object.hasOwn(MATERIALS, body.material)
    ? body.material
    : "stone";
  $("mass").value = +(body.mass_kg * 1000).toFixed(3);
  $("fixed").checked = body.fixed;
  $("friction").value = displayNumber(body.friction);
  $("restitution").value = displayNumber(body.restitution);
  ["x", "y", "z"].forEach((axis, i) => {
    $(`size-${axis}`).value = +(body.size[i] * 100).toFixed(3);
    $(`pos-${axis}`).value = +body.position[i].toFixed(4);
    $(`rot-${axis}`).value = +(
      ((((body.rotation_deg[i] + 180) % 360) + 360) % 360) -
      180
    ).toFixed(3);
    $(`vel-${axis}`).value = +body.velocity[i].toFixed(3);
    $(`spin-${axis}`).value = +body.angular_velocity[i].toFixed(3);
  });
  $("size-y").disabled = body.shape === "sphere";
  $("size-z").disabled = body.shape !== "box";
  updateControls();
}

function renderSprings() {
  for (const [id, preferredIndex] of [
    ["spring-a", 0],
    ["spring-b", 1],
  ]) {
    const select = $(id);
    const before = select.value;
    select.replaceChildren();
    state.scene.bodies.forEach((body) => {
      const option = document.createElement("option");
      option.value = body.id;
      option.textContent = body.label;
      select.append(option);
    });
    if (state.scene.bodies.some((body) => body.id === before))
      select.value = before;
    else
      select.value =
        state.scene.bodies[preferredIndex]?.id ??
        state.scene.bodies[0]?.id ??
        "";
  }
  $("spring-list").replaceChildren();
  state.scene.springs.forEach((spring) => {
    const row = document.createElement("div");
    row.className = "spring-item";
    const text = document.createElement("span");
    text.textContent = `${state.scene.bodies.find((b) => b.id === spring.a)?.label} ↔ ${state.scene.bodies.find((b) => b.id === spring.b)?.label}`;
    const remove = document.createElement("button");
    remove.textContent = "Kaldır";
    remove.disabled = !state.editing;
    remove.addEventListener("click", () => {
      if (state.busy || !state.editing) return;
      state.scene.springs = state.scene.springs.filter(
        (s) => s.id !== spring.id,
      );
      invalidate();
    });
    row.append(text, remove);
    $("spring-list").append(row);
  });
}

function renderReadouts() {
  const body = selectedBody();
  const current =
    state.currentFrame?.bodies.find((b) => b.id === state.selected) || body;
  $("selected-label").textContent = body?.label || "Seçilmedi";
  $("readout-height").textContent = current
    ? `${fmt.format(current.position[1])} m`
    : "—";
  $("readout-speed").textContent = current
    ? `${fmt.format(Math.hypot(...current.velocity))} m/s`
    : "—";
  $("readout-position").textContent = current
    ? current.position.map((v) => fmt.format(v)).join(" / ") + " m"
    : "—";
}

const SVG_NS = "http://www.w3.org/2000/svg";
const TRACE_COLORS = ["#1686b8", "#d17d20", "#8765c5"];
function svgNode(tag, attrs, text) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs))
    node.setAttribute(key, String(value));
  if (text !== undefined) node.textContent = text;
  return node;
}

function drawChart(target, traces, valueOf, unit, label) {
  const svg = $(target);
  svg.replaceChildren();
  svg.append(svgNode("title", {}, label));
  if (!traces.length) return;
  const width = 720,
    height = 215,
    left = 66,
    right = 16,
    top = 20,
    bottom = 36;
  let min = Infinity,
    max = -Infinity,
    end = 0;
  for (const trace of traces)
    for (const point of trace.points) {
      const value = valueOf(point);
      min = Math.min(min, value);
      max = Math.max(max, value);
      end = Math.max(end, point.t_s);
    }
  const padding =
    max > min ? (max - min) * 0.08 : Math.max(1, Math.abs(max) * 0.1);
  min -= padding;
  max += padding;
  const x = (time) => left + (time / (end || 1)) * (width - left - right);
  const y = (value) =>
    height - bottom - ((value - min) / (max - min)) * (height - top - bottom);
  for (let i = 0; i < 4; i++) {
    const value = min + ((max - min) * i) / 3;
    svg.append(
      svgNode("line", {
        x1: left,
        y1: y(value),
        x2: width - right,
        y2: y(value),
        class: "chart-grid",
      }),
    );
    svg.append(
      svgNode(
        "text",
        { x: left - 9, y: y(value) + 4, "text-anchor": "end" },
        fmt.format(value),
      ),
    );
  }
  for (let i = 0; i < 5; i++)
    svg.append(
      svgNode(
        "text",
        { x: x((end * i) / 4), y: height - 14, "text-anchor": "middle" },
        fmt.format((end * i) / 4),
      ),
    );
  svg.append(svgNode("text", { x: 9, y: 13 }, unit));
  svg.append(
    svgNode(
      "text",
      { x: width - 18, y: height - 1, "text-anchor": "end" },
      "Zaman (s)",
    ),
  );
  traces.forEach((trace, index) => {
    const path = trace.points
      .map(
        (point, i) =>
          `${i ? "L" : "M"}${x(point.t_s).toFixed(2)},${y(valueOf(point)).toFixed(2)}`,
      )
      .join(" ");
    svg.append(
      svgNode("path", {
        d: path,
        fill: "none",
        stroke: TRACE_COLORS[index],
        "stroke-width": 2,
        "stroke-dasharray": index ? `${7 - index} ${3 + index}` : "none",
        "vector-effect": "non-scaling-stroke",
      }),
    );
  });
}

function provenance(result, bodyId) {
  const body = result.scene.bodies.find((item) => item.id === bodyId);
  if (!body) return "";
  const values = (array) => array.map((v) => fmt.format(v)).join(" / ");
  return `${body.label || body.id} · ${fmt.format(body.mass_kg)} kg · r₀ [${values(body.position)}] m · v₀ [${values(body.velocity)}] m/s · g [${values(result.scene.gravity)}] m/s² · ${result.scene.sample_hz} Hz · ${fmt.format(result.summary.duration_s)} s`;
}

function renderAnalysis() {
  const hasData = Boolean(
    state.result &&
      state.selected &&
      state.result.scene.bodies.some((body) => body.id === state.selected),
  );
  $("analysis-empty").hidden = hasData;
  $("analysis-data").hidden = !hasData;
  $("run-metrics").replaceChildren();
  $("chart-legend").replaceChildren();
  if (!hasData) {
    $("position-chart").replaceChildren();
    $("speed-chart").replaceChildren();
    $("run-provenance").textContent = "";
    return;
  }
  const metrics = bodyMetrics(state.result, state.selected);
  for (const [label, value, unit] of [
    ["Net yer değiştirme", metrics.displacement_m, "m"],
    ["Örneklenmiş yol", metrics.sampled_distance_m, "m"],
    ["En yüksek örnek hızı", metrics.max_sampled_speed_m_s, "m/s"],
    ["Son öteleme enerjisi", metrics.final_translational_energy_j, "J"],
  ]) {
    const card = document.createElement("div"),
      term = document.createElement("dt"),
      detail = document.createElement("dd");
    term.textContent = label;
    detail.textContent = `${fmt.format(value)} ${unit}`;
    card.append(term, detail);
    $("run-metrics").append(card);
  }
  $("run-provenance").textContent =
    `Güncel hesap: ${state.result.scene.name} · ${provenance(state.result, state.selected)} · ${metrics.samples} örnek`;
  const traces = [
    {
      label: `Güncel · ${state.result.scene.name}`,
      points: bodySeries(state.result, state.selected),
    },
  ];
  for (const run of state.runs
    .filter((run) => run.compare && run.bodyId === state.selected)
    .slice(0, 2)) {
    traces.push({
      label: run.label,
      points: bodySeries(run.result, run.bodyId),
    });
  }
  traces.forEach((trace, index) => {
    const label = document.createElement("span"),
      marker = document.createElement("i");
    marker.style.backgroundColor = TRACE_COLORS[index];
    label.append(marker, document.createTextNode(trace.label));
    $("chart-legend").append(label);
  });
  const axis = Number($("chart-axis").value);
  drawChart(
    "position-chart",
    traces,
    (point) => point.position[axis],
    "m",
    `${["X", "Y", "Z"][axis]} konumu / zaman`,
  );
  drawChart(
    "speed-chart",
    traces,
    (point) => point.speed_m_s,
    "m/s",
    "Hız büyüklüğü / zaman",
  );
}

function renderRuns() {
  $("run-list").replaceChildren();
  $("saved-run-count").textContent = `${state.runs.length}/3`;
  for (const run of state.runs) {
    const card = document.createElement("article");
    card.className = "saved-run";
    const title = document.createElement("strong");
    title.textContent = run.label;
    const detail = document.createElement("p");
    detail.textContent = provenance(run.result, run.bodyId);
    const notes = document.createElement("p");
    notes.textContent = run.notes ? `Not: ${run.notes}` : "Not eklenmedi.";
    const actions = document.createElement("div");
    actions.className = "saved-run-actions";
    const compare = document.createElement("label");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = run.compare;
    check.disabled = run.bodyId !== state.selected || !state.result;
    check.addEventListener("change", () => {
      if (
        check.checked &&
        state.runs.filter(
          (item) => item.compare && item.bodyId === state.selected,
        ).length >= 2
      ) {
        check.checked = false;
        message(
          "Güncel hesapla en fazla iki kayıt karşılaştırılabilir.",
          "error",
        );
        return;
      }
      run.compare = check.checked;
      renderAnalysis();
    });
    compare.append(
      check,
      document.createTextNode(
        run.bodyId === state.selected
          ? "Grafikte karşılaştır"
          : "Bu kayıt farklı cisme ait",
      ),
    );
    const inputs = document.createElement("button");
    inputs.textContent = "Girdileri indir";
    inputs.addEventListener("click", () =>
      download(
        "yorunge-mekanik-deneme.json",
        mechanicsProject(run.result.scene, run.notes),
      ),
    );
    const remove = document.createElement("button");
    remove.textContent = "Kaldır";
    remove.addEventListener("click", () => {
      state.runs = state.runs.filter((item) => item !== run);
      renderRuns();
      renderAnalysis();
      updateControls();
    });
    actions.append(compare, inputs, remove);
    card.append(title, detail, notes, actions);
    $("run-list").append(card);
  }
}

function sampleAt(time) {
  const frames = state.result.frames;
  let low = 0,
    high = frames.length - 1;
  while (high - low > 1) {
    const mid = (low + high) >> 1;
    if (frames[mid].t_s <= time) low = mid;
    else high = mid;
  }
  const a = frames[low],
    b = frames[high];
  const alpha =
    b.t_s > a.t_s
      ? Math.max(0, Math.min(1, (time - a.t_s) / (b.t_s - a.t_s)))
      : 0;
  return {
    t_s: time,
    bodies: a.bodies.map((body, i) => {
      const next = b.bodies[i];
      const lerp = (key) =>
        body[key].map(
          (value, axis) => value + (next[key][axis] - value) * alpha,
        );
      const quaternion = new Quaternion()
        .fromArray(body.rotation)
        .slerp(new Quaternion().fromArray(next.rotation), alpha)
        .toArray();
      return {
        ...body,
        position: lerp("position"),
        rotation: quaternion,
        velocity: lerp("velocity"),
        angular_velocity: lerp("angular_velocity"),
      };
    }),
  };
}

function showTime(time) {
  if (!state.result) return;
  state.time = Math.max(0, Math.min(time, state.result.summary.duration_s));
  state.currentFrame = sampleAt(state.time);
  viewport?.setFrame(state.currentFrame);
  $("timeline").value = state.time;
  $("time-output").textContent = `${fmt.format(state.time)} s`;
  renderReadouts();
}

async function prepareResult() {
  if (!commitEditorValues()) return false;
  if (state.result) return true;
  state.busy = true;
  viewport?.setEditable(false);
  updateControls();
  message("Fizik motoru deneyi hesaplıyor…");
  try {
    const result = await post("/api/lab/simulate", state.scene);
    if (
      !result.frames?.length ||
      !result.summary ||
      !Number.isFinite(result.summary.duration_s)
    )
      throw new Error("Sonuç biçimi okunamadı.");
    state.result = result;
    state.resultNotes = state.notes;
    $("timeline").max = result.summary.duration_s;
    renderAnalysis();
    renderRuns();
    message(
      `${result.summary.body_count} nesnenin ${fmt.format(result.summary.duration_s)} saniyelik deneyi hazır.`,
    );
    return true;
  } catch (error) {
    message(
      `Hesaplanamadı: ${error.message}. Sunucunun açık olduğunu ve değerleri kontrol et.`,
      "error",
    );
    return false;
  } finally {
    state.busy = false;
    viewport?.setEditable(state.editing);
    updateControls();
  }
}

async function play() {
  if (state.busy) return;
  if (state.playing) {
    state.playing = false;
    updateControls();
    return;
  }
  if (!(await prepareResult())) return;
  if (state.editing || state.time >= state.result.summary.duration_s)
    showTime(0);
  state.editing = false;
  state.playing = true;
  viewport.setEditable(false);
  renderSprings();
  updateControls();
}

function tick(dt) {
  if (!state.playing || !state.result) return;
  showTime(state.time + dt * Number($("playback-speed").value));
  if (state.time >= state.result.summary.duration_s) {
    state.playing = false;
    updateControls();
  }
}

function addBody(shape) {
  if (!state.editing || state.busy) return;
  if (state.scene.bodies.length >= 60) {
    message("Bu sürümde en fazla 60 nesne eklenebilir.", "error");
    return;
  }
  const label = { sphere: "Küre", box: "Kutu", cylinder: "Silindir" }[shape];
  const body = {
    id: uniqueId(shape),
    label: `${label} ${state.scene.bodies.length + 1}`,
    shape,
    size: [0.6, 0.6, 0.6],
    position: [(state.scene.bodies.length % 5) * 1.1 - 2, 3, 0],
    rotation_deg: [0, 0, 0],
    velocity: [0, 0, 0],
    angular_velocity: [0, 0, 0],
    mass_kg: 1,
    ...MATERIALS.wood,
    fixed: false,
    material: "wood",
  };
  state.scene.bodies.push(body);
  state.selected = body.id;
  invalidate(
    `${label} eklendi. Renkli eksenlerle taşı veya sağdaki özelliklerini değiştir.`,
  );
}

function readBodyFields(body) {
  const updated = clone(body);
  updated.label = $("body-label").value.trim() || "Nesne";
  updated.mass_kg = $("mass").valueAsNumber / 1000;
  updated.fixed = $("fixed").checked;
  updated.material = $("material").value;
  updated.friction = $("friction").valueAsNumber;
  updated.restitution = $("restitution").valueAsNumber;
  ["x", "y", "z"].forEach((axis, i) => {
    updated.size[i] = $(`size-${axis}`).valueAsNumber / 100;
    updated.position[i] = $(`pos-${axis}`).valueAsNumber;
    updated.rotation_deg[i] = $(`rot-${axis}`).valueAsNumber;
    updated.velocity[i] = $(`vel-${axis}`).valueAsNumber;
    updated.angular_velocity[i] = $(`spin-${axis}`).valueAsNumber;
  });
  if (updated.shape === "sphere")
    updated.size = [updated.size[0], updated.size[0], updated.size[0]];
  if (updated.shape === "cylinder") updated.size[2] = updated.size[0];
  return updated;
}

// Read every visible editor into one snapshot before rendering anything. A
// delayed/missing change event must not make Run/Save use an earlier value, or
// let one field's change repaint another field that has not been committed yet.
function commitEditorValues() {
  if (!state.scene || state.busy) return false;
  if (!state.editing) return true;
  const controls = [
    "gravity", "floor-friction", "floor-restitution", "duration",
    "sample-hz", "experiment-name", "experiment-notes",
  ];
  if (
    !controls.every((id) => $(id).reportValidity()) ||
    (selectedBody() && !$("body-form").reportValidity())
  ) {
    message("İşlemden önce işaretlenen giriş değerini düzelt.", "error");
    return false;
  }
  const next = clone(state.scene);
  next.gravity[1] = -$("gravity").valueAsNumber;
  next.floor_friction = $("floor-friction").valueAsNumber;
  next.floor_restitution = $("floor-restitution").valueAsNumber;
  next.duration_s = $("duration").valueAsNumber;
  next.sample_hz = Number($("sample-hz").value);
  next.name = $("experiment-name").value.trim() || "Yeni mekanik deneyi";
  const bodyIndex = next.bodies.findIndex((body) => body.id === state.selected);
  if (bodyIndex !== -1) next.bodies[bodyIndex] = readBodyFields(next.bodies[bodyIndex]);
  const notes = $("experiment-notes").value;
  const changed = JSON.stringify(next) !== JSON.stringify(state.scene) || notes !== state.notes;
  state.scene = next;
  state.notes = notes;
  if (changed) invalidate();
  else persist();
  return true;
}

function download(name, data) {
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

$("run-button").addEventListener("click", play);
$("step-button").addEventListener("click", async () => {
  if (state.busy || !(await prepareResult())) return;
  state.playing = false;
  state.editing = false;
  viewport.setEditable(false);
  showTime(state.time + 1 / state.scene.sample_hz);
  renderSprings();
  updateControls();
});
$("edit-button").addEventListener("click", () => {
  state.playing = false;
  state.editing = true;
  state.time = 0;
  state.currentFrame = null;
  renderSetup();
  message("Başlangıç düzeni gösteriliyor. Nesneleri düzenleyebilirsin.");
});
$("timeline").addEventListener("input", () => {
  state.playing = false;
  state.editing = false;
  viewport.setEditable(false);
  showTime($("timeline").valueAsNumber);
  updateControls();
});
document
  .querySelectorAll("[data-add]")
  .forEach((button) =>
    button.addEventListener("click", () => addBody(button.dataset.add)),
  );
$("body-form").addEventListener("submit", (event) => event.preventDefault());
$("body-fields").addEventListener("input", discardPendingResult);
for (const id of [
  "gravity",
  "floor-friction",
  "floor-restitution",
  "duration",
  "sample-hz",
  "experiment-name",
  "experiment-notes",
])
  $(id).addEventListener("input", discardPendingResult);
$("body-fields").addEventListener("change", (event) => {
  if (event.target.id === "material") {
    const properties = MATERIALS[$("material").value];
    $("friction").value = properties.friction;
    $("restitution").value = properties.restitution;
  }
  commitEditorValues();
});
for (const id of [
  "gravity", "floor-friction", "floor-restitution", "duration",
  "sample-hz", "experiment-name", "experiment-notes",
]) $(id).addEventListener("change", commitEditorValues);
$("chart-axis").addEventListener("change", renderAnalysis);
$("keep-run").addEventListener("click", () => {
  if (
    !state.result ||
    !state.selected ||
    state.runs.length >= 3 ||
    state.runs.some(
      (run) => run.result === state.result && run.bodyId === state.selected,
    )
  )
    return;
  const label = `${state.result.scene.name} · ${new Date().toLocaleTimeString("tr-TR")}`;
  state.runs.push({
    id: uniqueId("run"),
    label,
    result: state.result,
    notes: state.resultNotes,
    bodyId: state.selected,
    compare: false,
  });
  renderRuns();
  updateControls();
  message(
    "Hesap ve başlangıç girdileri bu oturumun defterine eklendi. Kalıcı saklamak için JSON/CSV indir.",
  );
});
$("duplicate-button").addEventListener("click", () => {
  const body = selectedBody();
  if (!body || !state.editing || state.busy) return;
  if (state.scene.bodies.length >= 60) {
    message("En fazla 60 nesne eklenebilir.", "error");
    return;
  }
  const duplicate = clone(body);
  duplicate.id = uniqueId(body.shape);
  duplicate.label = `${body.label.slice(0, 72)} kopya`;
  duplicate.position[0] = Math.min(39, duplicate.position[0] + 1);
  state.scene.bodies.push(duplicate);
  state.selected = duplicate.id;
  invalidate();
});
$("delete-button").addEventListener("click", () => {
  if (!state.editing || state.busy || !state.selected) return;
  state.scene.bodies = state.scene.bodies.filter(
    (b) => b.id !== state.selected,
  );
  state.scene.springs = state.scene.springs.filter(
    (s) => s.a !== state.selected && s.b !== state.selected,
  );
  state.selected = state.scene.bodies[0]?.id ?? null;
  invalidate("Nesne ve ona bağlı yaylar kaldırıldı.");
});
$("add-spring").addEventListener("click", () => {
  if (!state.editing || state.busy) return;
  const a = $("spring-a").value,
    b = $("spring-b").value;
  if (!a || !b || a === b) {
    message("Yay için iki farklı nesne seç.", "error");
    return;
  }
  if (state.scene.springs.length >= 16) {
    message("En fazla 16 yay eklenebilir.", "error");
    return;
  }
  if (
    !["spring-length", "spring-stiffness", "spring-damping"].every((id) =>
      $(id).reportValidity(),
    )
  )
    return;
  state.scene.springs.push({
    id: uniqueId("spring"),
    a,
    b,
    rest_length_m: $("spring-length").valueAsNumber,
    stiffness_n_m: $("spring-stiffness").valueAsNumber,
    damping_n_s_m: $("spring-damping").valueAsNumber,
  });
  invalidate(
    "Yay bağlandı. Doğal uzunluk ve başlangıç mesafesi farklıysa yay kuvvet uygular.",
  );
});
for (const [id, mode] of [
  ["translate-button", "translate"],
  ["rotate-button", "rotate"],
])
  $(id).addEventListener("click", () => {
    viewport.setMode(mode);
    ["translate-button", "rotate-button"].forEach((other) => {
      $(other).classList.toggle("selected", other === id);
      $(other).setAttribute("aria-pressed", String(other === id));
    });
  });
$("camera-button").addEventListener("click", () => viewport?.resetCamera());
$("clear-button").addEventListener("click", () => {
  loadScene(
    emptyScene(),
    "Boş deney hazır. Deneyine ad ver ve soldan bir nesne ekle.",
  );
});
$("save-button").addEventListener("click", () => {
  if (commitEditorValues())
    download("yorunge-deney.json", mechanicsProject(state.scene, state.notes));
});
$("export-result").addEventListener("click", () => {
  if (state.result) download("yorunge-3b-sonuc.json", state.result);
});
$("export-csv").addEventListener("click", () => {
  if (!state.result) return;
  try {
    const url = URL.createObjectURL(
      new Blob([resultsCsv(state.result)], { type: "text/csv;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "yorunge-mekanik-SI.csv";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    message(`CSV indirilemedi: ${error.message}`, "error");
  }
});
$("import-button").addEventListener("click", () => $("scene-file").click());
$("scene-file").addEventListener("change", async () => {
  const file = $("scene-file").files[0];
  $("scene-file").value = "";
  if (!file) return;
  if (file.size > 300 * 1024) {
    message(
      "Proje dosyası en fazla 300 KiB olabilir; ham sahne sınırı 256 KiB.",
      "error",
    );
    return;
  }
  state.busy = true;
  updateControls();
  try {
    const project = readMechanicsProject(JSON.parse(await file.text()));
    const scene = await post("/api/lab/validate", project.scene);
    loadScene(
      scene,
      "Deney dosyası yüklendi; sonuçlar yeniden hesaplanacak.",
      project.notes,
    );
  } catch (error) {
    message(`Dosya yüklenemedi: ${error.message}`, "error");
  } finally {
    state.busy = false;
    updateControls();
    viewport?.setEditable(state.editing);
  }
});
$("modules-button").addEventListener("click", () => {
  $("modules-panel").open = true;
  $("modules-panel").scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
});

async function initialize() {
  try {
    viewport = createViewport($("viewport"), {
      onSelect: selectBody,
      onTransform: ({ id, position, rotation_deg }) => {
        if (!state.scene || !state.editing || state.busy) return;
        const body = state.scene.bodies.find((b) => b.id === id);
        if (!body) return;
        body.position = position.map((v, i) =>
          Math.max(i === 1 ? 0 : -40, Math.min(40, v)),
        );
        body.rotation_deg = rotation_deg;
        invalidate();
      },
      onTick: tick,
    });
    const response = await fetch("/api/lab/presets");
    if (!response.ok) throw new Error("Hazır deneyler sunucudan alınamadı.");
    const data = await response.json();
    state.presets = data.presets;
    for (const preset of data.presets) {
      const button = document.createElement("button");
      button.type = "button";
      const name = document.createElement("span");
      name.textContent = preset.label;
      const description = document.createElement("small");
      description.textContent = preset.description;
      button.append(name, description);
      button.addEventListener("click", () => {
        loadScene(preset.scene);
        viewport.resetCamera();
      });
      $("presets").append(button);
    }
    for (const module of data.modules) {
      const card = document.createElement("div");
      card.className = `module-card ${module.status}`;
      const name = document.createElement("b");
      name.textContent = module.name;
      const status = document.createElement("span");
      status.textContent =
        module.status === "available" ? "Bu sürümde çalışıyor" : "Planlanıyor";
      card.append(name, status);
      $("module-list").append(card);
    }
    let restored = null;
    try {
      const stored = localStorage.getItem(STORAGE);
      if (stored && stored.length <= 300 * 1024) {
        const project = readMechanicsProject(JSON.parse(stored));
        restored = {
          scene: await post("/api/lab/validate", project.scene),
          notes: project.notes,
        };
      }
    } catch {
      /* Ignore invalid old saved scenes. */
    }
    loadScene(
      restored?.scene || emptyScene(),
      restored
        ? "Son düzenlediğin deney ve notları geri yüklendi."
        : "Boş çalışma alanı hazır. Deneyine ad ver, nesne ekle ve koşullarını belirle.",
      restored?.notes || "",
    );
    viewport.resetCamera();
  } catch (error) {
    $("canvas-error").hidden = false;
    $("canvas-error").textContent =
      `Laboratuvar açılamadı: ${error.message}. Sunucunun açık ve tarayıcının WebGL desteğinin etkin olduğunu kontrol et.`;
    message("3B laboratuvar başlatılamadı.", "error");
  }
}
initialize();
