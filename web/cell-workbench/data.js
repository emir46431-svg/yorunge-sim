export const FORMAT = "yorunge-cell-workbench";
export const STORAGE_KEY = `${FORMAT}-v1`;
export const MAX_RUNS = 12;
export const MAX_COMPARE = 4;
export const PARAMS = Object.freeze([
  {
    key: "cell_volume_pl",
    label: "Başlangıç iç hacim",
    unit: "pL",
    min: 0.1,
    max: 10,
    step: "any",
  },
  {
    key: "external_volume_pl",
    label: "Başlangıç dış hacim",
    unit: "pL",
    min: 1,
    max: 100,
    step: "any",
  },
  {
    key: "inside_concentration_mm",
    label: "İç derişim",
    unit: "mM",
    min: 0,
    max: 1000,
    step: "any",
  },
  {
    key: "outside_concentration_mm",
    label: "Dış derişim",
    unit: "mM",
    min: 0,
    max: 1000,
    step: "any",
  },
  {
    key: "water_permeability_pl_s_mm",
    label: "Su geçirgenliği",
    unit: "pL/(s·mM)",
    min: 0,
    max: 0.001,
    step: "any",
  },
  {
    key: "solute_permeability_pl_s",
    label: "Çözünen geçirgenliği",
    unit: "pL/s",
    min: 0,
    max: 0.05,
    step: "any",
  },
  {
    key: "duration_s",
    label: "Deney süresi",
    unit: "s",
    min: 1,
    max: 300,
    step: "any",
  },
  {
    key: "sample_hz",
    label: "Örnekleme",
    unit: "Hz",
    min: 1,
    max: 10,
    step: 1,
  },
]);
export const DIVISION = {
  key: "division_at_s",
  label: "Geometrik bölme zamanı",
  unit: "s",
};
export const ALL_PARAMS = [...PARAMS, DIVISION];
export const DEFAULT_EXPERIMENT = Object.freeze({
  duration_s: 120,
  sample_hz: 5,
  cell_volume_pl: 1,
  external_volume_pl: 10,
  inside_concentration_mm: 300,
  outside_concentration_mm: 150,
  water_permeability_pl_s_mm: 0.00004,
  solute_permeability_pl_s: 0,
  division_at_s: null,
});
const fail = (message) => {
  throw new Error(message);
};
const finite = (value) => typeof value === "number" && Number.isFinite(value);
const object = (value) =>
  value !== null &&
  typeof value === "object" &&
  !Array.isArray(value) &&
  [Object.prototype, null].includes(Object.getPrototypeOf(value));
function exact(value, keys, label) {
  if (
    !object(value) ||
    Object.keys(value).length !== keys.length ||
    keys.some((key) => !Object.hasOwn(value, key)) ||
    Object.keys(value).some((key) => !keys.includes(key))
  )
    fail(`${label}: eksik veya desteklenmeyen alan.`);
}
function text(value, max, label, required = false) {
  if (
    typeof value !== "string" ||
    value.length > max ||
    (required && !value.trim()) ||
    /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)
  )
    fail(`${label}: geçersiz metin (en fazla ${max} karakter).`);
  return value;
}
function array(value, max, label) {
  if (
    !Array.isArray(value) ||
    value.length > max ||
    Object.keys(value).length !== value.length
  )
    fail(`${label}: en fazla ${max} kayıt olabilir.`);
}
function id(value) {
  if (
    typeof value !== "string" ||
    !/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$/.test(value)
  )
    fail("Geçersiz çalışma kimliği.");
  return value;
}
function isoDate(value) {
  if (
    typeof value !== "string" ||
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value) ||
    !Number.isFinite(Date.parse(value)) ||
    new Date(value).toISOString() !== value
  )
    fail("Geçersiz UTC kayıt zamanı.");
  return value;
}
export function validateExperiment(raw) {
  exact(
    raw,
    ALL_PARAMS.map((p) => p.key),
    "Deney parametreleri",
  );
  const result = {};
  for (const p of PARAMS) {
    const value = raw[p.key];
    if (
      !finite(value) ||
      value < p.min ||
      value > p.max ||
      (p.key === "sample_hz" && !Number.isInteger(value))
    )
      fail(
        `${p.label}: ${p.min}–${p.max} ${p.unit} aralığında ${p.key === "sample_hz" ? "tamsayı" : "sonlu sayı"} gerekli.`,
      );
    result[p.key] = value;
  }
  if (
    raw.division_at_s !== null &&
    (!finite(raw.division_at_s) ||
      raw.division_at_s <= 0 ||
      raw.division_at_s >= result.duration_s)
  )
    fail("Bölme zamanı sıfırdan büyük ve deney süresinden küçük olmalı.");
  result.division_at_s = raw.division_at_s;
  return result;
}
export function parseSweepValues(input) {
  if (typeof input !== "string" || input.length > 512)
    fail("Tarama değerleri en fazla 512 karakter olabilir.");
  const parts = input.split(";").map((v) => v.trim());
  if (parts.length < 2 || parts.length > 6)
    fail("Noktalı virgülle ayrılmış 2–6 farklı değer girin.");
  const values = parts.map((part) => {
    if (!/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[+-]?\d+)?$/i.test(part))
      fail(
        "Tarama değerleri sayı olmalı; ayırıcı olarak noktalı virgül kullanın.",
      );
    const value = Number(part.replace(",", "."));
    if (!finite(value)) fail("Tarama değerleri sonlu olmalı.");
    return value;
  });
  if (new Set(values).size !== values.length)
    fail("Tarama değerleri birbirinden farklı olmalı.");
  return values;
}
export function sweepExperiments(base, parameter, values) {
  validateExperiment(base);
  if (!ALL_PARAMS.some((p) => p.key === parameter))
    fail("Tarama parametresi desteklenmiyor.");
  array(values, 6, "Tarama");
  if (
    values.length < 2 ||
    new Set(values).size !== values.length ||
    values.some((v) => !finite(v))
  )
    fail("Tarama için 2–6 farklı sonlu değer gerekli.");
  return values.map((value) =>
    validateExperiment({ ...base, [parameter]: value }),
  );
}
export function blankProject() {
  return {
    format: FORMAT,
    version: 1,
    name: "Yeni hücre deneyi",
    hypothesis: "",
    notes: "",
    draft: { ...DEFAULT_EXPERIMENT },
    scan: { parameter: "outside_concentration_mm", values: "100; 150; 300" },
    runs: [],
    compare_ids: [],
    selected_id: null,
  };
}
export function validateProjectEnvelope(input) {
  let raw = input;
  if (typeof input === "string") {
    if (new TextEncoder().encode(input).byteLength > 262144)
      fail("Proje en fazla 256 KiB olabilir.");
    try {
      raw = JSON.parse(input);
    } catch {
      fail("Proje JSON biçiminde okunamadı.");
    }
  }
  exact(
    raw,
    [
      "format",
      "version",
      "name",
      "hypothesis",
      "notes",
      "draft",
      "scan",
      "runs",
      "compare_ids",
      "selected_id",
    ],
    "Proje",
  );
  if (raw.format !== FORMAT || raw.version !== 1)
    fail("Desteklenmeyen hücre çalışma alanı biçimi veya sürümü.");
  const result = {
    format: FORMAT,
    version: 1,
    name: text(raw.name, 120, "Deney adı", true),
    hypothesis: text(raw.hypothesis, 2000, "Hipotez"),
    notes: text(raw.notes, 10000, "Notlar"),
    draft: validateExperiment(raw.draft),
  };
  exact(raw.scan, ["parameter", "values"], "Tarama");
  if (!ALL_PARAMS.some((p) => p.key === raw.scan.parameter))
    fail("Geçersiz tarama parametresi.");
  // A draft scan may be incomplete while being edited; execution validates it.
  result.scan = {
    parameter: raw.scan.parameter,
    values: text(raw.scan.values, 512, "Tarama değerleri"),
  };
  array(raw.runs, MAX_RUNS, "Deney defteri");
  const ids = new Set();
  result.runs = raw.runs.map((run) => {
    exact(
      run,
      ["id", "label", "created_at", "experiment", "origin"],
      "Çalışma",
    );
    id(run.id);
    if (ids.has(run.id)) fail("Çalışma kimlikleri benzersiz olmalı.");
    ids.add(run.id);
    exact(run.origin, ["kind", "parameter", "value"], "Çalışma kaynağı");
    if (run.origin.kind === "single") {
      if (run.origin.parameter !== null || run.origin.value !== null)
        fail("Tek çalışma kaynağı geçersiz.");
    } else if (run.origin.kind === "scan") {
      if (
        !ALL_PARAMS.some((p) => p.key === run.origin.parameter) ||
        !finite(run.origin.value) ||
        run.experiment?.[run.origin.parameter] !== run.origin.value
      )
        fail("Tarama kaynağı deneyle eşleşmiyor.");
    } else fail("Çalışma kaynağı desteklenmiyor.");
    return {
      id: run.id,
      label: text(run.label, 160, "Çalışma etiketi", true),
      created_at: isoDate(run.created_at),
      experiment: validateExperiment(run.experiment),
      origin: { ...run.origin },
    };
  });
  array(raw.compare_ids, MAX_COMPARE, "Karşılaştırma");
  if (
    new Set(raw.compare_ids).size !== raw.compare_ids.length ||
    raw.compare_ids.some((v) => !ids.has(v))
  )
    fail("Karşılaştırma kimlikleri geçersiz.");
  if (raw.selected_id !== null && !ids.has(raw.selected_id))
    fail("Seçili çalışma bulunamadı.");
  result.compare_ids = [...raw.compare_ids];
  result.selected_id = raw.selected_id;
  return result;
}
const close = (a, b) =>
  Math.abs(a - b) <= 1e-8 * Math.max(1, Math.abs(a), Math.abs(b));
export function validateSimulation(raw, requested) {
  if (!object(raw)) fail("Hesap yanıtı geçersiz.");
  const experiment = validateExperiment(raw.experiment);
  if (ALL_PARAMS.some((p) => experiment[p.key] !== requested[p.key]))
    fail("Hesap yanıtının parametreleri istekle eşleşmiyor.");
  array(raw.frames, 3002, "Hesap örnekleri");
  if (!raw.frames.length) fail("Hesap örneği bulunamadı.");
  let previous = -1;
  const totalVolume = experiment.cell_volume_pl + experiment.external_volume_pl;
  const totalSolute =
    experiment.cell_volume_pl * experiment.inside_concentration_mm +
    experiment.external_volume_pl * experiment.outside_concentration_mm;
  for (const frame of raw.frames) {
    if (
      !object(frame) ||
      !finite(frame.t_s) ||
      frame.t_s <= previous ||
      frame.t_s > experiment.duration_s ||
      frame.t_s < 0
    )
      fail("Hesap örnek zamanları geçersiz.");
    previous = frame.t_s;
    array(frame.cells, 2, "İç bölmeler");
    const expectedIds =
      experiment.division_at_s !== null && frame.t_s >= experiment.division_at_s
        ? ["cell-1a", "cell-1b"]
        : ["cell-1"];
    if (
      frame.cells.length !== expectedIds.length ||
      frame.cells.some((cell, i) => !object(cell) || cell.id !== expectedIds[i])
    )
      fail("İç bölme kimlikleri geçersiz.");
    const pools = [
      ...frame.cells,
      {
        volume_pl: frame.external_volume_pl,
        solute_fmol: frame.external_solute_fmol,
        concentration_mm: frame.external_concentration_mm,
      },
    ];
    for (const pool of pools) {
      if (
        !finite(pool.volume_pl) ||
        pool.volume_pl <= 0 ||
        !finite(pool.solute_fmol) ||
        pool.solute_fmol < 0 ||
        !finite(pool.concentration_mm) ||
        pool.concentration_mm < 0 ||
        !close(pool.concentration_mm, pool.solute_fmol / pool.volume_pl)
      )
        fail("Hesap örnekleri sonlu ve tutarlı miktarlar içermeli.");
    }
    if (
      !close(
        pools.reduce((s, p) => s + p.volume_pl, 0),
        totalVolume,
      ) ||
      !close(
        pools.reduce((s, p) => s + p.solute_fmol, 0),
        totalSolute,
      )
    )
      fail("Hesap örneklerinde miktar korunumu tutarsız.");
  }
  const first = raw.frames[0],
    last = raw.frames.at(-1),
    summary = raw.summary;
  if (
    first.t_s !== 0 ||
    !close(first.cells[0].volume_pl, experiment.cell_volume_pl) ||
    !close(first.cells[0].concentration_mm, experiment.inside_concentration_mm)
  )
    fail("Hesap başlangıcı parametrelerle eşleşmiyor.");
  if (
    !object(summary) ||
    !["completed", "model_limit"].includes(summary.status) ||
    summary.elapsed_s !== last.t_s ||
    summary.final_cell_count !== last.cells.length ||
    (summary.status === "completed" && last.t_s !== experiment.duration_s)
  )
    fail("Hesap özeti örneklerle eşleşmiyor.");
  for (const key of [
    "initial_total_volume_pl",
    "final_total_volume_pl",
    "volume_conservation_error_pl",
    "initial_total_solute_fmol",
    "final_total_solute_fmol",
    "solute_conservation_error_fmol",
    "max_volume_conservation_error_pl",
    "max_solute_conservation_error_fmol",
  ])
    if (!finite(summary[key])) fail("Hesap özeti sonlu değerler içermeli.");
  if (
    !close(summary.initial_total_volume_pl, totalVolume) ||
    !close(summary.final_total_volume_pl, totalVolume) ||
    !close(summary.initial_total_solute_fmol, totalSolute) ||
    !close(summary.final_total_solute_fmol, totalSolute) ||
    summary.max_volume_conservation_error_pl < 0 ||
    summary.max_solute_conservation_error_fmol < 0
  )
    fail("Hesap özeti miktarlarla eşleşmiyor.");
  array(raw.events, 10, "Hesap olayları");
  for (const event of raw.events)
    if (
      !object(event) ||
      !finite(event.t_s) ||
      event.t_s < 0 ||
      event.t_s > last.t_s ||
      !["division", "model_limit"].includes(event.kind) ||
      typeof event.message !== "string" ||
      event.message.length > 3000
    )
      fail("Hesap olayı geçersiz.");
  array(raw.assumptions, 32, "Model varsayımları");
  if (
    raw.assumptions.some(
      (value) => typeof value !== "string" || value.length > 3000,
    )
  )
    fail("Model varsayımı geçersiz.");
  return raw;
}
export function aggregateFrame(frame) {
  const volume_pl = frame.cells.reduce((sum, cell) => sum + cell.volume_pl, 0);
  const solute_fmol = frame.cells.reduce(
    (sum, cell) => sum + cell.solute_fmol,
    0,
  );
  return {
    t_s: frame.t_s,
    volume_pl,
    concentration_mm: solute_fmol / volume_pl,
    external_concentration_mm: frame.external_concentration_mm,
  };
}
function csvText(value) {
  let safe = String(value);
  if (/^[=+\-@\t\r]/.test(safe)) safe = `'${safe}`;
  return `"${safe.replaceAll('"', '""')}"`;
}
export function resultsCsv(runs, results) {
  const lines = [
    "run_id,run_label,created_at_utc,status,pool_id,time_s,volume_pl,solute_fmol,concentration_mm",
  ];
  for (const run of runs) {
    id(run.id);
    const result = validateSimulation(results.get(run.id), run.experiment);
    for (const frame of result.frames) {
      for (const pool of [
        ...frame.cells,
        {
          id: "external",
          volume_pl: frame.external_volume_pl,
          solute_fmol: frame.external_solute_fmol,
          concentration_mm: frame.external_concentration_mm,
        },
      ]) {
        lines.push(
          [run.id, run.label, run.created_at, result.summary.status, pool.id]
            .map(csvText)
            .concat([
              frame.t_s,
              pool.volume_pl,
              pool.solute_fmol,
              pool.concentration_mm,
            ])
            .join(","),
        );
      }
    }
  }
  return `${lines.join("\r\n")}\r\n`;
}
