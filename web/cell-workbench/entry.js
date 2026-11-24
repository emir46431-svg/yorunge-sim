import {
  PARAMS,
  ALL_PARAMS,
  STORAGE_KEY,
  MAX_RUNS,
  MAX_COMPARE,
  blankProject,
  validateExperiment,
  validateProjectEnvelope,
  validateSimulation,
  parseSweepValues,
  sweepExperiments,
  aggregateFrame,
  resultsCsv,
} from "./data.js";

const $ = (id) => document.getElementById(id);
const COLORS = ["#a8cafa", "#efbd80", "#a6d5bc", "#d0b1e7"];
let project = blankProject(),
  results = new Map(),
  busy = false,
  saved = true;
const fmt = (value) =>
  value === 0
    ? "0"
    : Math.abs(value) < 0.001
      ? value.toExponential(2)
      : Number(value.toPrecision(5)).toLocaleString("tr-TR", {
          maximumFractionDigits: 5,
        });
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "text") node.textContent = value;
    else if (key === "class") node.className = value;
    else if (key === "checked" || key === "disabled") node[key] = value;
    else node.setAttribute(key, value);
  }
  node.append(...children);
  return node;
}
function button(label, action, className = "") {
  const node = el("button", { type: "button", class: className, text: label });
  node.addEventListener("click", guarded(action));
  return node;
}
function status(message, error = false) {
  $("status").textContent = message;
  document.querySelector(".statusbar").classList.toggle("error", error);
}
function guarded(action) {
  return async (event) => {
    try {
      await action(event);
    } catch (error) {
      status(error.message || "İşlem tamamlanamadı.", true);
    }
  };
}
function save() {
  try {
    const envelope = validateProjectEnvelope(project);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
    saved = true;
    $("save-status").textContent = "YEREL · KAYDEDİLDİ";
  } catch {
    saved = false;
    $("save-status").textContent = "YEREL KAYIT YOK · JSON KAYDEDİN";
  }
}
function setBusy(value) {
  busy = value;
  document.querySelectorAll("button,input,select,textarea").forEach((node) => {
    node.disabled = value;
  });
  if (!value) {
    $("division-time").disabled = !$("division-enabled").checked;
    $("export-csv").disabled = !project.runs.length;
    $("sample-index").disabled = !results.has(project.selected_id);
  }
  $("run-single").textContent = value
    ? "Hesaplanıyor…"
    : "▶ Çalıştır ve kaydet";
}
function parameterField(p) {
  return el("label", { class: "field" }, [
    document.createTextNode(p.label),
    el("span", { class: "unit", text: p.unit }),
    el("input", {
      type: "number",
      id: `param-${p.key}`,
      min: p.min,
      max: p.max,
      step: p.step,
      value: project.draft[p.key],
      required: "",
    }),
    el("span", { class: "bounds", text: `${p.min} – ${p.max} ${p.unit}` }),
  ]);
}
function buildFields() {
  $("initial-fields").replaceChildren(
    ...PARAMS.slice(0, 4).map(parameterField),
  );
  $("transport-fields").replaceChildren(...PARAMS.slice(4).map(parameterField));
  $("scan-parameter").replaceChildren(
    ...ALL_PARAMS.map((p) =>
      el("option", { value: p.key, text: `${p.label} · ${p.unit}` }),
    ),
  );
}
function fillForm() {
  $("project-name").value = project.name;
  $("project-hypothesis").value = project.hypothesis;
  $("project-notes").value = project.notes;
  for (const p of PARAMS) $(`param-${p.key}`).value = project.draft[p.key];
  $("division-enabled").checked = project.draft.division_at_s !== null;
  $("division-time").value =
    project.draft.division_at_s ?? Math.min(30, project.draft.duration_s / 2);
  $("division-time").disabled = project.draft.division_at_s === null;
  $("scan-parameter").value = project.scan.parameter;
  $("scan-values").value = project.scan.values;
  $("draft-status").textContent = "Girdiler çalıştırılmaya hazır.";
}
function readExperiment() {
  const values = {};
  for (const p of PARAMS) {
    const input = $(`param-${p.key}`);
    if (input.value.trim() === "")
      throw new Error(`${p.label} boş bırakılamaz.`);
    values[p.key] = input.valueAsNumber;
  }
  values.division_at_s = $("division-enabled").checked
    ? $("division-time").valueAsNumber
    : null;
  return validateExperiment(values);
}
function syncProject() {
  project = validateProjectEnvelope({
    ...project,
    name: $("project-name").value,
    hypothesis: $("project-hypothesis").value,
    notes: $("project-notes").value,
    draft: readExperiment(),
    scan: {
      parameter: $("scan-parameter").value,
      values: $("scan-values").value,
    },
  });
}
function draftChanged() {
  if (busy) return;
  $("division-time").disabled = !$("division-enabled").checked;
  try {
    syncProject();
    save();
    $("draft-status").textContent =
      "Girdiler güncellendi. Yeni çalışma için çalıştırın.";
  } catch (error) {
    $("draft-status").textContent = error.message;
    $("save-status").textContent = "GİRDİ DÜZELTİLMELİ";
  }
}
async function simulate(experiment) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetch("/api/cells/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(experiment),
      signal: controller.signal,
    });
    const result = await response.json();
    if (!response.ok)
      throw new Error(
        typeof result.error === "string"
          ? result.error
          : "Hücre hesabı tamamlanamadı.",
      );
    return validateSimulation(result, experiment);
  } catch (error) {
    if (error.name === "AbortError")
      throw new Error(
        "Hesap 30 saniye içinde yanıt vermedi. Girdiler korunuyor; yeniden deneyin.",
      );
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
async function runExperiments(isScan) {
  if (busy) return;
  syncProject();
  const parameter = project.scan.parameter;
  const experiments = isScan
    ? sweepExperiments(
        project.draft,
        parameter,
        parseSweepValues(project.scan.values),
      )
    : [project.draft];
  if (project.runs.length + experiments.length > MAX_RUNS)
    throw new Error(
      `Defter ${MAX_RUNS} kayıtla sınırlı. ${experiments.length} yeni çalışma için önce yeterli kaydı silin veya JSON kaydedip yeni proje açın.`,
    );
  const additions = [],
    computed = new Map();
  setBusy(true);
  try {
    for (let i = 0; i < experiments.length; i++) {
      status(
        `${isScan ? "Koşul taraması" : "Hesap"} · ${i + 1}/${experiments.length} · Rust çözücü çalışıyor…`,
      );
      const experiment = experiments[i];
      const result = await simulate(experiment);
      const runId = `run-${crypto.randomUUID()}`;
      const p = ALL_PARAMS.find((item) => item.key === parameter);
      const label = isScan
        ? `${p.label} = ${fmt(experiment[parameter])} ${p.unit}`
        : `${project.name} · ${project.runs.length + 1}`;
      const run = {
        id: runId,
        label,
        created_at: new Date().toISOString(),
        experiment: { ...experiment },
        origin: isScan
          ? { kind: "scan", parameter, value: experiment[parameter] }
          : { kind: "single", parameter: null, value: null },
      };
      additions.push(run);
      computed.set(runId, result);
    }
    project.runs.push(...additions);
    for (const [runId, result] of computed) results.set(runId, result);
    project.selected_id = additions.at(-1).id;
    // A new sweep becomes the comparison; all conditions remain in the notebook.
    project.compare_ids = isScan
      ? additions.slice(0, MAX_COMPARE).map((run) => run.id)
      : [...project.compare_ids, additions[0].id].slice(-MAX_COMPARE);
    save();
    render();
    const limits = [...computed.values()].filter(
      (result) => result.summary.status === "model_limit",
    ).length;
    status(
      `${additions.length} çalışma kaydedildi.${limits ? ` ${limits} çalışma model sınırında durdu.` : " Hesap tamamlandı."}${saved ? "" : " Yerel kayıt kullanılamıyor; JSON kaydedin."}`,
    );
  } finally {
    setBusy(false);
  }
}
function svgNode(tag, attrs = {}, text) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [key, value] of Object.entries(attrs))
    node.setAttribute(key, String(value));
  if (text !== undefined) node.textContent = text;
  return node;
}
function chart(runs, mode) {
  const width = 640,
    height = 172,
    left = 55,
    right = 12,
    top = 12,
    bottom = 30;
  const series = runs.map((run) => ({
    run,
    points: results.get(run.id).frames.map(aggregateFrame),
  }));
  let min = Infinity,
    max = -Infinity,
    end = 0;
  for (const { points } of series)
    for (const point of points) {
      const values =
        mode === "volume"
          ? [point.volume_pl]
          : [point.concentration_mm, point.external_concentration_mm];
      for (const value of values) {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
      end = Math.max(end, point.t_s);
    }
  const padding = Math.max((max - min) * 0.08, max * 0.015, 0.001);
  min = Math.max(0, min - padding);
  max += padding;
  end = Math.max(end, 0.001);
  const x = (value) => left + (value / end) * (width - left - right);
  const y = (value) =>
    top + ((max - value) / (max - min)) * (height - top - bottom);
  const svg = svgNode("svg", {
    viewBox: `0 0 ${width} ${height}`,
    class: "chart",
    role: "img",
    "aria-label":
      mode === "volume"
        ? "Hesaplanan toplam iç hacim zaman grafiği, pL ve saniye"
        : "Hesaplanan iç ve dış derişim zaman grafiği, mM ve saniye",
  });
  for (let i = 0; i <= 3; i++) {
    const value = min + ((max - min) * i) / 3,
      pos = y(value);
    svg.append(
      svgNode("line", {
        x1: left,
        x2: width - right,
        y1: pos,
        y2: pos,
        stroke: "#37414d",
        "stroke-width": 0.8,
      }),
      svgNode(
        "text",
        { x: left - 8, y: pos + 3, "text-anchor": "end" },
        fmt(value),
      ),
    );
  }
  for (let i = 0; i <= 4; i++)
    svg.append(
      svgNode(
        "text",
        {
          x: x((end * i) / 4),
          y: height - 10,
          "text-anchor": i === 4 ? "end" : "middle",
        },
        `${fmt((end * i) / 4)} s`,
      ),
    );
  series.forEach(({ run, points }, index) => {
    const keys =
      mode === "volume"
        ? ["volume_pl"]
        : ["concentration_mm", "external_concentration_mm"];
    keys.forEach((key, line) => {
      const path = svgNode("polyline", {
        points: points
          .map(
            (point) => `${x(point.t_s).toFixed(3)},${y(point[key]).toFixed(3)}`,
          )
          .join(" "),
        fill: "none",
        stroke: COLORS[index],
        "stroke-width": line ? 1.4 : 2,
        "stroke-dasharray": line ? "5 4" : "none",
        "vector-effect": "non-scaling-stroke",
      });
      path.append(svgNode("title", {}, `${run.label} · ${key}`));
      svg.append(path);
      const last = points.at(-1);
      svg.append(
        svgNode("circle", {
          cx: x(last.t_s),
          cy: y(last[key]),
          r: line ? 2 : 3,
          fill: COLORS[index],
        }),
      );
    });
  });
  return svg;
}
function propertyRows(rows) {
  return el(
    "dl",
    { class: "properties" },
    rows.map(([label, value]) =>
      el("div", {}, [el("dt", { text: label }), el("dd", { text: value })]),
    ),
  );
}
function renderInspector(run, result) {
  if (!run || !result) {
    $("run-inspector").replaceChildren(
      el("p", {
        class: "hint",
        text: "Kayıt ayrıntıları çalışma sonrası görünür.",
      }),
    );
    return;
  }
  const children = [
    el("p", { class: "inspector-title", text: run.label }),
    propertyRows([
      [
        "Durum",
        result.summary.status === "model_limit"
          ? "Model sınırında durdu"
          : "Tamamlandı",
      ],
      ["Hesaplanan süre", `${fmt(result.summary.elapsed_s)} s`],
      ["Örnek", result.frames.length],
      [
        "En büyük hacim hatası",
        `${result.summary.max_volume_conservation_error_pl.toExponential(2)} pL`,
      ],
      [
        "En büyük miktar hatası",
        `${result.summary.max_solute_conservation_error_fmol.toExponential(2)} fmol`,
      ],
    ]),
    el("p", {
      class: "provenance",
      text: `${run.id}\nKayıt: ${run.created_at}\nKaynak: ${run.origin.kind === "scan" ? "Tek parametre taraması" : "Özel girdiler"}\nHesap: Rust · /api/cells/simulate\nÇözücü sürümü: API tarafından bildirilmedi`,
    }),
  ];
  const details = el("details", { class: "input-details" }, [
    el("summary", { text: "Kaydedilmiş tüm parametreler" }),
    propertyRows(
      ALL_PARAMS.map((p) => [
        p.label,
        run.experiment[p.key] === null
          ? "Kapalı"
          : `${fmt(run.experiment[p.key])} ${p.unit}`,
      ]),
    ),
  ]);
  details.style.marginTop = "12px";
  children.push(
    details,
    el("div", { class: "inspector-actions" }, [
      button("Bu girdileri düzenleyiciye al", () => {
        project.draft = { ...run.experiment };
        fillForm();
        save();
        status(
          "Seçili kaydın girdileri düzenleyiciye alındı. Yeni sonuç için çalıştırın.",
        );
      }),
    ]),
  );
  if (result.events.length)
    children.push(
      el(
        "ul",
        { class: "events" },
        result.events.map((event) =>
          el("li", { text: `${fmt(event.t_s)} s · ${event.message}` }),
        ),
      ),
    );
  $("run-inspector").replaceChildren(...children);
}
function renderSample() {
  const result = results.get(project.selected_id);
  if (!result) return;
  const index = Math.max(
    0,
    Math.min(Number($("sample-index").value), result.frames.length - 1),
  );
  const frame = result.frames[index];
  $("sample-time").textContent =
    `${fmt(frame.t_s)} s · ${index + 1}/${result.frames.length}`;
  const pools = [
    ...frame.cells,
    {
      id: "external",
      volume_pl: frame.external_volume_pl,
      solute_fmol: frame.external_solute_fmol,
      concentration_mm: frame.external_concentration_mm,
    },
  ];
  $("sample-rows").replaceChildren(
    ...pools.map((pool) =>
      el(
        "tr",
        {},
        [
          pool.id,
          fmt(pool.volume_pl),
          fmt(pool.solute_fmol),
          fmt(pool.concentration_mm),
        ].map((value) => el("td", { text: value })),
      ),
    ),
  );
}
function render() {
  const selected = project.runs.find((run) => run.id === project.selected_id),
    selectedResult = selected && results.get(selected.id);
  $("result-title").textContent = selected?.label || "Çalışma seçilmedi";
  $("compare-count").textContent =
    `${project.compare_ids.length} / ${MAX_COMPARE} karşılaştırma`;
  $("notebook-count").textContent = `${project.runs.length} / ${MAX_RUNS}`;
  $("empty-state").hidden = !!selectedResult;
  $("computed-results").hidden = !selectedResult;
  $("notebook-empty").hidden = !!project.runs.length;
  $("export-csv").disabled = busy || !project.runs.length;
  $("run-rows").replaceChildren(
    ...project.runs.map((run) => {
      const result = results.get(run.id),
        chosen = run.id === project.selected_id;
      const checkbox = el("input", {
        type: "checkbox",
        checked: project.compare_ids.includes(run.id),
        "aria-label": `${run.label} çalışmasını karşılaştır`,
        disabled: busy,
      });
      checkbox.addEventListener(
        "change",
        guarded(() => {
          if (checkbox.checked && project.compare_ids.length >= MAX_COMPARE) {
            checkbox.checked = false;
            throw new Error(
              "Aynı anda en fazla 4 çalışma karşılaştırılabilir. Bir seçimi kaldırın.",
            );
          }
          project.compare_ids = checkbox.checked
            ? [...project.compare_ids, run.id]
            : project.compare_ids.filter((value) => value !== run.id);
          save();
          render();
        }),
      );
      const name = button(
        run.label,
        () => {
          project.selected_id = run.id;
          save();
          render();
        },
        "run-name",
      );
      name.title = run.label;
      const cell = el("td", {}, [
        name,
        el("span", {
          class: "run-sub",
          text: `${run.origin.kind === "scan" ? "TARAMA" : "ÖZEL"} · ${run.id.slice(-8)}`,
        }),
      ]);
      const remove = button(
        "×",
        () => {
          project.runs = project.runs.filter((item) => item.id !== run.id);
          results.delete(run.id);
          project.compare_ids = project.compare_ids.filter(
            (value) => value !== run.id,
          );
          if (project.selected_id === run.id)
            project.selected_id = project.runs.at(-1)?.id ?? null;
          save();
          render();
          status("Çalışma defterden kaldırıldı.");
        },
        "delete-run",
      );
      remove.setAttribute("aria-label", `${run.label} kaydını sil`);
      const row = el("tr", { class: chosen ? "selected" : "" }, [
        el("td", {}, [checkbox]),
        cell,
        el("td", {
          class:
            result?.summary.status === "model_limit"
              ? "status-limit"
              : "status-ok",
          text:
            result?.summary.status === "model_limit"
              ? "Model sınırı"
              : "Tamamlandı",
        }),
        el("td", { text: result ? fmt(result.summary.elapsed_s) : "—" }),
        el("td", {}, [remove]),
      ]);
      return row;
    }),
  );
  renderInspector(selected, selectedResult);
  if (!selectedResult) return;
  const end = aggregateFrame(selectedResult.frames.at(-1));
  $("metrics").replaceChildren(
    ...[
      ["SON İÇ HACİM", fmt(end.volume_pl), "pL"],
      ["SON İÇ DERİŞİM", fmt(end.concentration_mm), "mM"],
      ["HESAPLANAN SÜRE", fmt(end.t_s), "s"],
    ].map(([label, value, unit]) =>
      el("div", { class: "metric" }, [
        el("span", { text: label }),
        el("strong", {}, [
          document.createTextNode(`${value} `),
          el("small", { text: unit }),
        ]),
      ]),
    ),
  );
  const graphRuns = project.compare_ids.length
    ? project.compare_ids.map((runId) =>
        project.runs.find((run) => run.id === runId),
      )
    : [selected];
  $("volume-chart").replaceChildren(chart(graphRuns, "volume"));
  $("concentration-chart").replaceChildren(chart(graphRuns, "concentration"));
  $("legend").replaceChildren(
    ...graphRuns.map((run, index) => {
      const mark = el("i");
      mark.style.background = COLORS[index];
      return el("div", { class: "legend-item", title: run.label }, [
        mark,
        el("span", { text: run.label }),
      ]);
    }),
  );
  $("sample-index").max = selectedResult.frames.length - 1;
  $("sample-index").value = selectedResult.frames.length - 1;
  renderSample();
}
function download(filename, data, mime) {
  const url = URL.createObjectURL(new Blob([data], { type: mime }));
  const link = el("a", { href: url, download: filename });
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function loadProject(input, source) {
  if (busy) return;
  const candidate = validateProjectEnvelope(input),
    computed = new Map();
  setBusy(true);
  try {
    for (let i = 0; i < candidate.runs.length; i++) {
      const run = candidate.runs[i];
      status(
        `${source} · kayıt ${i + 1}/${candidate.runs.length} mevcut Rust çözücüyle yeniden hesaplanıyor…`,
      );
      computed.set(run.id, await simulate(run.experiment));
    }
    project = candidate;
    results = computed;
    if (!project.selected_id && project.runs.length)
      project.selected_id = project.runs.at(-1).id;
    fillForm();
    render();
    save();
    status(
      `${source}: ${project.runs.length} kayıt ${project.runs.length ? "yeniden hesaplandı" : "yüklendi"}.`,
    );
  } finally {
    setBusy(false);
  }
}
async function loadPresets() {
  try {
    const response = await fetch("/api/cells/presets");
    if (!response.ok) throw new Error("Şablonlar alınamadı.");
    const payload = await response.json();
    if (!Array.isArray(payload.presets) || payload.presets.length > 12)
      throw new Error("Şablon listesi geçersiz.");
    const presets = payload.presets.map((preset) => ({
      label: String(preset.label).slice(0, 120),
      experiment: validateExperiment(preset.experiment),
    }));
    $("presets").replaceChildren(
      ...presets.map((preset) => {
        const control = button(preset.label, () => {
          if (busy) return;
          project.draft = { ...preset.experiment };
          fillForm();
          save();
          status(
            `${preset.label}: parametreler yüklendi. Çalışma oluşturmak için çalıştırın.`,
          );
        });
        control.disabled = busy;
        return control;
      }),
    );
  } catch {
    $("presets").replaceChildren(
      el("p", {
        class: "hint",
        text: "Şablonlar kullanılamıyor. Özel girdilerle devam edebilirsiniz.",
      }),
    );
  }
}
buildFields();
fillForm();
render();
$("experiment-form").addEventListener(
  "submit",
  guarded(async (event) => {
    event.preventDefault();
    await runExperiments(false);
  }),
);
$("run-scan").addEventListener(
  "click",
  guarded(() => runExperiments(true)),
);
$("sample-index").addEventListener("input", renderSample);
for (const container of [
  $("experiment-form"),
  $("scan-parameter"),
  $("scan-values"),
  $("project-notes"),
])
  container.addEventListener("input", draftChanged);
$("export-project").addEventListener(
  "click",
  guarded(() => {
    if (busy) return;
    syncProject();
    save();
    download(
      "yorunge-hucre-projesi.json",
      JSON.stringify(validateProjectEnvelope(project), null, 2),
      "application/json",
    );
    status(
      "Proje JSON kaydedildi. Açıldığında kayıtlı girdiler yeniden hesaplanır.",
    );
  }),
);
$("export-csv").addEventListener(
  "click",
  guarded(() => {
    if (busy) return;
    download(
      "yorunge-hucre-sonuclari.csv",
      `\uFEFF${resultsCsv(project.runs, results)}`,
      "text/csv;charset=utf-8",
    );
    status(
      `${project.runs.length} çalışmanın hesaplanan tüm zaman örnekleri CSV kaydedildi.`,
    );
  }),
);
$("import-project").addEventListener("click", () => {
  if (!busy) $("project-file").click();
});
$("project-file").addEventListener(
  "change",
  guarded(async () => {
    const file = $("project-file").files[0];
    $("project-file").value = "";
    if (!file || busy) return;
    if (file.size > 262144) throw new Error("Proje en fazla 256 KiB olabilir.");
    await loadProject(await file.text(), "Proje açıldı");
  }),
);
$("new-project").addEventListener("click", () => {
  if (busy) return;
  project = blankProject();
  results = new Map();
  fillForm();
  render();
  save();
  status("Yeni boş proje hazır. Önceki sonuçlar yeni projeye taşınmadı.");
});
async function init() {
  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch {
    $("save-status").textContent = "YEREL KAYIT KULLANILAMIYOR";
  }
  if (stored) {
    try {
      await loadProject(stored, "Yerel proje");
    } catch (error) {
      status(
        `Yerel proje açılamadı: ${error.message} Önceki kayıt değiştirilmedi.`,
        true,
      );
    }
  } else status("Deney girdilerini düzenleyin veya koşul taraması başlatın.");
  await loadPresets();
}
init();
