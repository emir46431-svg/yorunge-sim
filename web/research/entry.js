import {
  drawProgressChart,
  updateTimeMarker,
  drawRateChart,
  renderMechanism,
} from "./charts.js";
import {
  parseMeasurements,
  compareMeasurements,
  resultsCsv,
  parseSweepValues,
  validateProjectEnvelope,
} from "./data.js";

const $ = (id) => document.getElementById(id);
const fields = [...document.querySelectorAll("[data-field]")];
const STORE = "yorunge-research-v1";
const MAX_RUNS = 12;
const palette = [
  "#087f83",
  "#7652a7",
  "#b77912",
  "#3e68ad",
  "#a84768",
  "#427549",
];
const inhibitionNames = {
  none: "Yok",
  competitive: "Rekabetçi",
  noncompetitive: "Saf rekabetsiz",
  uncompetitive: "Yarışmasız",
  mixed: "Karma",
};
const sweepNames = {
  enzyme_um: "E₀",
  substrate_um: "S₀",
  inhibitor_um: "I",
  activity_fraction: "Aktivite",
};
const state = {
  runs: [],
  selectedId: null,
  compareIds: new Set(),
  measurements: [],
  time: 0,
  playing: false,
  busy: false,
  ready: false,
  chart: "progress",
  deleted: null,
  presets: [],
};
let saveTimer;
let lastClock;
let lastPaint = 0;
let storageBlocked = false;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function fmt(value, digits = 3) {
  if (!Number.isFinite(value)) return "—";
  if (value !== 0 && (Math.abs(value) < 0.001 || Math.abs(value) >= 1e6))
    return value.toExponential(2).replace(".", ",");
  return value.toLocaleString("tr-TR", { maximumFractionDigits: digits });
}
function status(message, error = false) {
  $("research-status").textContent = message;
  $("research-status").classList.toggle("error", error);
}
function selected() {
  return state.runs.find((run) => run.id === state.selectedId);
}
function dateLabel(value) {
  return new Date(value).toLocaleString("tr-TR", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
function stopPlayback() {
  state.playing = false;
  $("play").textContent = "Oynat";
}
function setBusy(busy) {
  state.busy = busy;
  if (busy) stopPlayback();
  $("research-workspace").setAttribute("aria-busy", String(busy));
  document.querySelector(".parameters-panel").inert = busy;
  document.querySelector(".notebook-panel").inert = busy;
  $("project-title").disabled = busy;
  $("project-notes").disabled = busy;
  for (const id of [
    "open-project",
    "save-project",
    "load-measurements",
    "clear-measurements",
  ])
    $(id).disabled = busy;
  $("run-experiment").disabled = busy || !state.ready;
  $("run-sweep").disabled = busy || !state.ready;
  $("play").disabled = busy || !selected();
  $("research-time").disabled = busy || !selected();
  $("export-csv").disabled = busy || !state.runs.length;
}
async function api(path, body) {
  const response = await fetch(
    path,
    body === undefined
      ? {}
      : {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        },
  );
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.error || `Hesap başarısız (${response.status}).`);
  return data;
}
function updateInhibitionNote() {
  const mode = fields.find(
    (field) => field.dataset.field === "inhibition",
  ).value;
  $("inhibition-note").textContent = {
    none: "İnhibitör, Kᵢ ve Kᵢ′ bu modelde kullanılmaz.",
    competitive: "Yalnız Kᵢ kullanılır. Görünen Kₘ artar; Vmax değişmez.",
    noncompetitive:
      "Her iki faktör için Kᵢ kullanılır. Kᵢ′ yok sayılır; görünen Kₘ değişmez.",
    uncompetitive: "Yalnız Kᵢ′ kullanılır; görünen Kₘ ve Vmax birlikte azalır.",
    mixed:
      "Serbest enzime ait faktör için Kᵢ, ES kompleksine ait faktör için Kᵢ′ kullanılır.",
  }[mode];
}
function fillForm(experiment, label) {
  for (const field of fields) field.value = experiment[field.dataset.field];
  if (label) $("trial-label").value = label.slice(0, 100);
  updateInhibitionNote();
  $("draft-status").textContent =
    "Girdiler hazır. Çalıştırdığında yeni bir deneme kaydedilir.";
}
function readForm() {
  if (!$("enzyme-form").reportValidity()) return null;
  return Object.fromEntries(
    fields.map((field) => [
      field.dataset.field,
      field.dataset.field === "inhibition" ? field.value : Number(field.value),
    ]),
  );
}
function makeRecord(result, label) {
  return {
    id: `run-${crypto.randomUUID()}`,
    label: label.slice(0, 100),
    created_at: new Date().toISOString(),
    notes: "",
    experiment: { ...result.experiment },
    result,
  };
}
function normalizeSelection() {
  state.compareIds = new Set(
    [...state.compareIds].filter((id) =>
      state.runs.some((run) => run.id === id),
    ),
  );
  if (!selected()) state.selectedId = state.runs.at(-1)?.id ?? null;
  if (state.selectedId) {
    state.compareIds.delete(state.selectedId);
    state.compareIds = new Set(
      [state.selectedId, ...state.compareIds].slice(0, 4),
    );
  }
}
function coloredRuns() {
  return state.runs.map((run, index) => ({
    ...run,
    color: palette[index % palette.length],
  }));
}
function compared() {
  return coloredRuns().filter((run) => state.compareIds.has(run.id));
}
function envelope() {
  return validateProjectEnvelope({
    format: "yorunge-research",
    version: 1,
    title: $("project-title").value,
    notes: $("project-notes").value,
    runs: state.runs.map(({ id, label, created_at, experiment, notes }) => ({
      id,
      label,
      created_at,
      experiment,
      notes,
    })),
    measurements: state.measurements,
  });
}
function persist() {
  clearTimeout(saveTimer);
  if (storageBlocked) {
    $("storage-status").textContent = "Açılamayan yerel kayıt korunuyor";
    return;
  }
  try {
    localStorage.setItem(STORE, JSON.stringify(envelope()));
    $("storage-status").textContent = "Bu tarayıcıda kaydedildi";
  } catch (error) {
    $("storage-status").textContent =
      "Yerel kayıt yapılamadı; JSON olarak kaydet";
    $("storage-status").title = error.message;
  }
}
function scheduleSave() {
  $("storage-status").textContent = "Kaydediliyor…";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(persist, 350);
}
function metric(title, value, detail) {
  const card = el("div", "stat");
  card.append(
    el("span", "", title),
    el("strong", "", value),
    el("small", "", detail),
  );
  return card;
}
function renderNotebook() {
  $("run-count").textContent = `${state.runs.length}/${MAX_RUNS}`;
  const cards = coloredRuns().map((run) => {
    const active = run.id === state.selectedId;
    const card = el("div", `run-card${active ? " selected" : ""}`);
    const button = el("button");
    button.type = "button";
    button.setAttribute("aria-pressed", String(active));
    button.setAttribute("aria-label", `${run.label} denemesini seç`);
    const dot = el("span", "run-dot");
    dot.style.backgroundColor = run.color;
    button.append(
      dot,
      document.createTextNode(run.label),
      el(
        "small",
        "",
        `${inhibitionNames[run.experiment.inhibition]} · ${fmt(run.experiment.duration_s)} s · ${dateLabel(run.created_at)}`,
      ),
    );
    button.addEventListener("click", () => selectRun(run.id));
    const label = el("label");
    const checkbox = el("input");
    checkbox.type = "checkbox";
    checkbox.checked = state.compareIds.has(run.id);
    checkbox.disabled = active;
    checkbox.setAttribute("aria-label", `${run.label} karşılaştırmaya ekle`);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked && state.compareIds.size >= 4) {
        checkbox.checked = false;
        status(
          "Aynı anda 4 eğri gösterilebilir. Önce bir denemeyi karşılaştırmadan çıkar.",
          true,
        );
        return;
      }
      checkbox.checked
        ? state.compareIds.add(run.id)
        : state.compareIds.delete(run.id);
      renderResults();
      status("Karşılaştırma güncellendi.");
    });
    label.append(
      checkbox,
      document.createTextNode(active ? "Seçili hesap" : "Karşılaştır"),
    );
    card.append(button, label);
    return card;
  });
  $("run-list").replaceChildren(
    ...(cards.length
      ? cards
      : [el("p", "hint", "Henüz kayıt yok. Soldan bir deneme çalıştır.")]),
  );
  $("undo-remove").hidden = !state.deleted;
  $("run-note-section").hidden = !selected();
  $("run-notes").value = selected()?.notes ?? "";
}
function selectRun(id) {
  stopPlayback();
  state.selectedId = id;
  state.time = 0;
  normalizeSelection();
  renderNotebook();
  renderResults();
  status(
    "Kayıtlı hesap seçildi. Soldaki form, yeni deneme girdilerini göstermeye devam eder.",
  );
}
function measurementSummary() {
  const host = $("measurement-summary");
  host.classList.remove("error");
  $("clear-measurements").hidden = !state.measurements.length;
  if (!state.measurements.length) {
    host.textContent =
      "Henüz ölçüm yüklenmedi. Grafikteki çizgiler model sonuçlarıdır.";
    return [];
  }
  if (!selected()) {
    host.textContent = `${state.measurements.length} ölçüm saklanıyor. Karşılaştırmak için bir hesap oluştur.`;
    return [];
  }
  try {
    const match = compareMeasurements(
      selected().result.frames,
      state.measurements,
    );
    const stats = el("div", "measurement-stats");
    for (const [label, value] of [
      ["Ölçüm", String(match.count)],
      ["RMSE (µM)", fmt(match.rmse_um)],
      ["MAE (µM)", fmt(match.mae_um)],
    ]) {
      const item = el("div");
      item.append(el("span", "", label), el("strong", "", value));
      stats.append(item);
    }
    host.replaceChildren(
      stats,
      el(
        "p",
        "hint",
        `Seçili model: ${selected().label}. Zaman noktalarında doğrusal ara değerleme kullanılır. Maksimum mutlak fark: ${fmt(match.max_abs_error_um)} µM. Tekrarlı ölçümler ayrı değerlendirilir.`,
      ),
    );
    return state.measurements;
  } catch (error) {
    host.classList.add("error");
    host.textContent = `Ölçümler saklanıyor; bu hesapla karşılaştırılamıyor: ${error.message}`;
    return [];
  }
}
function renderResults() {
  const run = selected();
  const traces = compared();
  $("selected-run-label").textContent = run?.label ?? "Henüz sonuç yok";
  $("selected-run-date").textContent = run ? dateLabel(run.created_at) : "";
  const metrics = $("result-metrics");
  if (run) {
    const s = run.result.summary;
    metrics.replaceChildren(
      metric("Başlangıç hızı", fmt(s.initial_rate_um_s), "µM / saniye"),
      metric(
        "Substrat dönüşümü",
        `%${fmt(100 * s.substrate_conversion_fraction, 1)}`,
        `${fmt(run.experiment.duration_s)} s sonunda`,
      ),
      metric(
        "Kuramsal yarılanma süresi",
        s.half_time_s === null ? "—" : `${fmt(s.half_time_s, 1)} s`,
        s.half_time_s === null
          ? "Sonlu yarılanma zamanı yok"
          : s.half_time_s > run.experiment.duration_s
            ? "Gözlem süresinin dışında"
            : "Başlangıç substratının %50’si",
      ),
    );
    $("research-time").max = run.experiment.duration_s;
    $("research-time").step = run.experiment.duration_s / 1000;
    $("model-checks").replaceChildren(
      el("p", "", `Hesap: ${run.result.model}`),
      el(
        "p",
        "",
        `S + P korunum hatası en çok ${fmt(s.max_conservation_error_um)} µM. Bu sayısal kontrol, biyolojik doğrulama değildir.`,
      ),
      ...run.result.warnings.map((warning) => el("p", "warning", warning)),
    );
    const assumptions = el("details");
    assumptions.append(
      el("summary", "", "Bu hesabın varsayımları"),
      ...run.result.assumptions.map((item) => el("p", "", item)),
    );
    $("model-checks").append(assumptions);
  } else {
    metrics.replaceChildren();
    $("model-checks").textContent =
      "Bir deneme çalıştırarak model denetimini gör.";
  }
  const points = measurementSummary();
  drawProgressChart($("progress-chart"), traces, {
    selectedId: state.selectedId,
    time: state.time,
    measurements: points,
  });
  drawRateChart($("rate-chart"), traces);
  $("progress-chart").hidden = state.chart !== "progress";
  $("rate-chart").hidden = state.chart !== "rate";
  $("timeline-controls").hidden = state.chart !== "progress";
  $("progress-tab").setAttribute(
    "aria-pressed",
    String(state.chart === "progress"),
  );
  $("rate-tab").setAttribute("aria-pressed", String(state.chart === "rate"));
  $("comparison-body").replaceChildren(
    ...traces.map((record) => {
      const row = el("tr");
      const s = record.result.summary;
      [
        record.label,
        inhibitionNames[record.experiment.inhibition],
        fmt(s.initial_rate_um_s),
        fmt(s.apparent_km_um),
        fmt(s.apparent_vmax_um_s),
        fmt(s.final_product_um),
        fmt(record.experiment.duration_s),
      ].forEach((value) => row.append(el("td", "", value)));
      return row;
    }),
  );
  updateTimeView();
  setBusy(state.busy);
}
function frameAtTime(run, time) {
  const frames = run.result.frames;
  const rightIndex = frames.findIndex((frame) => frame.t_s >= time);
  if (rightIndex <= 0)
    return { ...frames[rightIndex === 0 ? 0 : frames.length - 1] };
  const left = frames[rightIndex - 1],
    right = frames[rightIndex];
  const fraction = (time - left.t_s) / (right.t_s - left.t_s);
  return Object.fromEntries(
    Object.keys(left).map((key) => [
      key,
      left[key] + fraction * (right[key] - left[key]),
    ]),
  );
}
function updateTimeView() {
  const run = selected();
  state.time = Math.max(
    0,
    Math.min(state.time, run?.experiment.duration_s ?? 0),
  );
  $("research-time").value = state.time;
  $("time-readout").textContent = `${fmt(state.time, 1)} s`;
  updateTimeMarker($("progress-chart"), state.time);
  const frame = run ? frameAtTime(run, state.time) : null;
  renderMechanism($("enzyme-mechanism"), {
    inhibition: run?.experiment.inhibition ?? "none",
    experiment: run?.experiment ?? null,
    frame,
  });
  $("live-values").replaceChildren(
    ...(frame
      ? [
          el(
            "span",
            "",
            `t = ${fmt(state.time, 2)} s · Ara zamanlardaki sayılar, hesap kareleri arasında doğrusal ara değerlemedir.`,
          ),
        ]
      : []),
  );
}
function addRuns(records) {
  storageBlocked = false;
  state.runs.push(...records);
  state.selectedId = records.at(-1).id;
  state.compareIds = new Set(
    [...state.compareIds, ...records.map((r) => r.id)].slice(-4),
  );
  state.time = 0;
  normalizeSelection();
  renderNotebook();
  renderResults();
  persist();
}
async function runExperiment(event) {
  event.preventDefault();
  if (state.busy) return;
  const experiment = readForm();
  if (!experiment) return;
  if (state.runs.length >= MAX_RUNS) {
    status(
      "Defterde 12 kayıt var. JSON olarak kaydedip bir kaydı kaldırabilirsin.",
      true,
    );
    return;
  }
  const label = $("trial-label").value.trim() || "Yeni deneme";
  setBusy(true);
  status("Deneme hesaplanıyor…");
  try {
    const result = await api("/api/enzymes/simulate", experiment);
    addRuns([makeRecord(result, label)]);
    $("draft-status").textContent =
      "Bu girdiler kaydedildi. Değiştirip yeniden çalıştırabilirsin.";
    status(`${label} kaydedildi. Sonuçlar bir model hesabıdır.`);
  } catch (error) {
    status(error.message, true);
  } finally {
    setBusy(false);
  }
}
async function runSweep() {
  if (state.busy) return;
  const experiment = readForm();
  if (!experiment) return;
  try {
    const values = parseSweepValues($("sweep-values").value);
    if (state.runs.length + values.length > MAX_RUNS)
      throw new Error(
        `Bu tarama ${values.length} kayıt ekler; defterde ${MAX_RUNS - state.runs.length} boş yer var. Önce projeyi kaydedip yer aç.`,
      );
    const parameter = $("sweep-parameter").value;
    const label = ($("trial-label").value.trim() || "Tarama").slice(0, 65);
    setBusy(true);
    status(`${values.length} koşul hesaplanıyor…`);
    const data = await api("/api/enzymes/sweep", {
      experiment,
      parameter,
      values,
    });
    addRuns(
      data.runs.map(({ value, result }) =>
        makeRecord(
          result,
          `${label} · ${sweepNames[parameter]}=${fmt(value)}${parameter === "activity_fraction" ? "" : " µM"}`,
        ),
      ),
    );
    status(
      parameter === "inhibitor_um" && experiment.inhibition === "none"
        ? `${values.length} kayıt eklendi. İnhibisyon yok modeli seçildiği için inhibitör taraması sonucu değiştirmez.`
        : `${values.length} koşul kaydedildi. Grafikte en fazla 4 eğri gösterilir.`,
    );
  } catch (error) {
    status(error.message, true);
  } finally {
    setBusy(false);
  }
}
async function recomputeProject(project) {
  const records = [];
  for (const [index, record] of project.runs.entries()) {
    status(
      `Proje hesapları yeniden oluşturuluyor: ${index + 1}/${project.runs.length}…`,
    );
    const result = await api("/api/enzymes/simulate", record.experiment);
    records.push({ ...record, experiment: { ...result.experiment }, result });
  }
  return records;
}
function installProject(project, records) {
  storageBlocked = false;
  state.runs = records;
  state.selectedId = records.at(-1)?.id ?? null;
  state.compareIds = new Set(records.slice(-4).map((r) => r.id));
  state.measurements = project.measurements;
  state.deleted = null;
  state.time = 0;
  $("project-title").value = project.title;
  $("project-notes").value = project.notes;
  normalizeSelection();
  if (selected())
    fillForm(selected().experiment, `${selected().label} kopyası`);
  renderNotebook();
  renderResults();
}
function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = el("a");
  link.href = url;
  link.download = name;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
function exportProject() {
  try {
    download(
      "yorunge-ar-ge.json",
      JSON.stringify(envelope(), null, 2),
      "application/json",
    );
    status(
      "Proje JSON olarak hazırlandı. Açıldığında hesaplar girdilerden yeniden oluşturulur.",
    );
  } catch (error) {
    status(error.message, true);
  }
}
async function importProject(file) {
  if (!file || state.busy) return;
  setBusy(true);
  try {
    if (file.size > 1024 * 1024)
      throw new Error("Proje dosyası en fazla 1 MiB olabilir.");
    const project = validateProjectEnvelope(await file.text());
    const records = await recomputeProject(project);
    installProject(project, records);
    persist();
    status(`${records.length} deneme yeniden hesaplandı; proje açıldı.`);
  } catch (error) {
    status(`Proje açılamadı; mevcut çalışma korundu. ${error.message}`, true);
  } finally {
    setBusy(false);
    $("project-file").value = "";
  }
}
async function importMeasurements(file) {
  if (!file || state.busy) return;
  if (!selected()) {
    status("Önce bir hesap oluştur veya seç.", true);
    $("measurements-file").value = "";
    return;
  }
  const maximumTime = selected().experiment.duration_s;
  setBusy(true);
  try {
    if (file.size > 256 * 1024)
      throw new Error("CSV dosyası en fazla 256 KiB olabilir.");
    const points = parseMeasurements(await file.text(), {
      maxTime: maximumTime,
    });
    compareMeasurements(selected().result.frames, points);
    state.measurements = points;
    renderResults();
    persist();
    status(
      `${points.length} ölçüm yüklendi. Noktalar ölçümü, çizgiler modeli gösterir.`,
    );
  } catch (error) {
    status(
      `Ölçüm yüklenemedi; önceki ölçümler korundu. ${error.message}`,
      true,
    );
  } finally {
    setBusy(false);
    $("measurements-file").value = "";
  }
}

$("enzyme-form").addEventListener("submit", runExperiment);
$("run-sweep").addEventListener("click", runSweep);
fields.forEach((field) =>
  field.addEventListener("input", () => {
    $("draft-status").textContent =
      "Girdiler değişti; yeni sonucu görmek için denemeyi çalıştır.";
    updateInhibitionNote();
  }),
);
for (const id of ["project-title", "project-notes"])
  $(id).addEventListener("input", scheduleSave);
$("run-notes").addEventListener("input", () => {
  if (selected()) {
    selected().notes = $("run-notes").value;
    scheduleSave();
  }
});
$("load-parameters").addEventListener("click", () => {
  if (selected()) {
    fillForm(selected().experiment, `${selected().label} kopyası`);
    $("trial-label").focus();
    status("Kayıtlı girdiler yeni deneme formuna alındı.");
  }
});
$("remove-run").addEventListener("click", () => {
  if (!selected()) return;
  stopPlayback();
  state.deleted = {
    record: selected(),
    index: state.runs.findIndex((run) => run.id === state.selectedId),
  };
  state.runs = state.runs.filter((run) => run.id !== state.selectedId);
  state.time = 0;
  normalizeSelection();
  renderNotebook();
  renderResults();
  persist();
  status(
    "Kayıt kaldırıldı. “Son kaldırılanı geri getir” ile geri alabilirsin.",
  );
});
$("undo-remove").addEventListener("click", () => {
  if (!state.deleted) return;
  if (state.runs.length >= MAX_RUNS) {
    status("Geri getirmek için defterde bir yer aç.", true);
    return;
  }
  const { record, index } = state.deleted;
  state.runs.splice(index, 0, record);
  state.deleted = null;
  selectRun(record.id);
  persist();
  status("Kayıt geri getirildi.");
});
for (const kind of ["progress", "rate"])
  $(`${kind}-tab`).addEventListener("click", () => {
    state.chart = kind;
    if (kind === "rate") stopPlayback();
    renderResults();
  });
$("research-time").addEventListener("input", () => {
  stopPlayback();
  state.time = Number($("research-time").value);
  updateTimeView();
});
$("play").addEventListener("click", () => {
  if (!selected()) return;
  state.playing = !state.playing;
  if (state.playing && state.time >= selected().experiment.duration_s)
    state.time = 0;
  lastClock = undefined;
  $("play").textContent = state.playing ? "Duraklat" : "Oynat";
});
$("save-project").addEventListener("click", exportProject);
$("open-project").addEventListener("click", () => $("project-file").click());
$("project-file").addEventListener("change", () =>
  importProject($("project-file").files[0]),
);
$("load-measurements").addEventListener("click", () =>
  $("measurements-file").click(),
);
$("measurements-file").addEventListener("change", () =>
  importMeasurements($("measurements-file").files[0]),
);
$("clear-measurements").addEventListener("click", () => {
  state.measurements = [];
  renderResults();
  persist();
  status("Ölçümler projeden kaldırıldı.");
});
$("measurement-template").addEventListener("click", () =>
  download(
    "olcum-sablonu.csv",
    "time_s,product_um\n",
    "text/csv;charset=utf-8",
  ),
);
$("export-csv").addEventListener("click", () => {
  try {
    download(
      "yorunge-model-sonuclari.csv",
      resultsCsv(state.runs),
      "text/csv;charset=utf-8",
    );
    status("Bütün kayıtların model zaman serileri CSV olarak hazırlandı.");
  } catch (error) {
    status(error.message, true);
  }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopPlayback();
    if (state.ready) persist();
  }
});
window.addEventListener("pagehide", () => {
  if (state.ready) persist();
});
function animate(clock) {
  if (state.playing && selected() && !state.busy) {
    const dt =
      lastClock === undefined ? 0 : Math.min((clock - lastClock) / 1000, 0.15);
    state.time = Math.min(
      selected().experiment.duration_s,
      state.time + dt * Number($("playback-speed").value),
    );
    if (
      clock - lastPaint >= 80 ||
      state.time >= selected().experiment.duration_s
    ) {
      updateTimeView();
      lastPaint = clock;
    }
    if (state.time >= selected().experiment.duration_s) stopPlayback();
  }
  lastClock = clock;
  requestAnimationFrame(animate);
}
async function start() {
  setBusy(true);
  try {
    const data = await api("/api/enzymes/presets");
    state.presets = data.presets;
    $("enzyme-presets").replaceChildren(
      ...state.presets.map((preset) => {
        const button = el("button", "", preset.label);
        button.type = "button";
        button.title = preset.description;
        button.addEventListener("click", () => {
          fillForm(preset.experiment, preset.label);
          status(
            `${preset.label} girdileri forma alındı; çalıştırarak kaydedebilirsin.`,
          );
        });
        return button;
      }),
    );
    fillForm(state.presets[0].experiment, "Kontrol");
    let saved;
    try {
      saved = localStorage.getItem(STORE);
    } catch {
      $("storage-status").textContent = "Yerel depolama kullanılamıyor";
    }
    if (saved) {
      try {
        const project = validateProjectEnvelope(saved);
        installProject(project, await recomputeProject(project));
        status(
          "Yerel proje yüklendi; hesaplar kayıtlı girdilerden yeniden üretildi.",
        );
      } catch (error) {
        storageBlocked = true;
        renderNotebook();
        renderResults();
        status(
          `Yerel proje açılamadı. JSON yedeğini açabilir veya yeni deneme başlatabilirsin. ${error.message}`,
          true,
        );
      }
    } else {
      const result = await api(
        "/api/enzymes/simulate",
        state.presets[0].experiment,
      );
      addRuns([makeRecord(result, "Kontrol · örnek model")]);
      status(
        "Örnek model hesaplandı. Kendi girdilerinle yeni denemeler oluşturabilirsin.",
      );
    }
    state.ready = true;
  } catch (error) {
    status(
      `Çalışma alanı açılamadı: ${error.message}. Sunucunun çalıştığını kontrol edip sayfayı yenile.`,
      true,
    );
  } finally {
    setBusy(false);
  }
}
requestAnimationFrame(animate);
start();
