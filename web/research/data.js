const CSV_BYTES = 256 * 1024;
const PROJECT_BYTES = 1024 * 1024;
const MEASUREMENT_ROWS = 1000;
const encoder = new TextEncoder();
const EXPERIMENT_KEYS = new Set([
  "substrate_um",
  "product_um",
  "enzyme_um",
  "km_um",
  "kcat_per_s",
  "inhibitor_um",
  "inhibition",
  "ki_um",
  "ki_prime_um",
  "activity_fraction",
  "duration_s",
  "samples",
]);
const INHIBITIONS = new Set([
  "none",
  "competitive",
  "noncompetitive",
  "uncompetitive",
  "mixed",
]);

function fail(message) {
  throw new Error(message);
}
function plainObject(value, label) {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    ![Object.prototype, null].includes(Object.getPrototypeOf(value))
  )
    fail(`${label}: nesne bekleniyor.`);
  return value;
}
function knownKeys(value, allowed, label) {
  plainObject(value, label);
  for (const key of Object.keys(value)) {
    if (
      ["__proto__", "constructor", "prototype"].includes(key) ||
      !allowed.has(key)
    )
      fail(`${label}: desteklenmeyen alan: ${key}.`);
  }
}
function textField(value, max, label, fallback) {
  if (value === undefined && fallback !== undefined) return fallback;
  if (typeof value !== "string" || value.length > max)
    fail(`${label}: en fazla ${max} karakterlik metin bekleniyor.`);
  return value;
}
function nonnegative(value, label) {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0)
    fail(`${label}: sonlu, negatif olmayan sayı bekleniyor.`);
  return value === 0 ? 0 : value;
}
function bound(value, label) {
  return value === undefined ? Infinity : nonnegative(value, label);
}

/** RFC-style quoted fields, escaped double quotes, CRLF and whitespace-only blank lines. */
function* csvRecords(text, delimiter) {
  let row = [],
    field = "",
    state = "bare",
    meaningful = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (state === "quoted") {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else state = "after-quote";
      } else field += ch;
      continue;
    }
    if (state === "after-quote" && (ch === " " || ch === "\t")) continue;
    if (ch === delimiter) {
      row.push(field);
      field = "";
      state = "bare";
      meaningful = true;
    } else if (ch === "\r" || ch === "\n") {
      if (meaningful) yield [...row, field];
      row = [];
      field = "";
      state = "bare";
      meaningful = false;
      if (ch === "\r" && text[i + 1] === "\n") i++;
    } else if (state === "after-quote") {
      fail("CSV: kapanan tırnaktan sonra ayırıcı veya satır sonu bekleniyor.");
    } else if (ch === '"') {
      if (field.trim() !== "") fail("CSV: alanın ortasında geçersiz tırnak.");
      field = "";
      state = "quoted";
      meaningful = true;
    } else {
      field += ch;
      if (ch.trim() !== "") meaningful = true;
    }
  }
  if (state === "quoted") fail("CSV: kapatılmamış tırnak.");
  if (meaningful) yield [...row, field];
}

function csvNumber(raw, decimalComma, label) {
  const text = raw.trim();
  const grammar = decimalComma
    ? /^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:[eE][+-]?\d+)?$/
    : /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;
  if (!grammar.test(text)) fail(`${label}: geçersiz veya boş sayı.`);
  return nonnegative(
    Number(decimalComma ? text.replace(",", ".") : text),
    label,
  );
}

/** Parse actual measurements only. No points are inferred, averaged or generated. */
export function parseMeasurements(csv, { maxTime, maxProduct } = {}) {
  if (typeof csv !== "string") fail("CSV metni bekleniyor.");
  if (encoder.encode(csv).byteLength > CSV_BYTES)
    fail("CSV dosyası 256 KiB sınırını aşıyor.");
  const timeLimit = bound(maxTime, "Zaman üst sınırı");
  const productLimit = bound(maxProduct, "Ürün üst sınırı");
  const source = csv.replace(/^\uFEFF/, "");
  let iterator, headers, delimiter;
  for (const candidate of [",", ";"]) {
    const records = csvRecords(source, candidate);
    let first;
    try {
      first = records.next();
    } catch {
      continue;
    }
    if (first.done) continue;
    const names = first.value.map((value) => value.trim());
    if (
      names.length === 2 &&
      new Set(names).size === 2 &&
      names.includes("time_s") &&
      names.includes("product_um")
    ) {
      iterator = records;
      headers = names;
      delimiter = candidate;
      break;
    }
  }
  if (!iterator)
    fail(
      "CSV başlıkları yalnız time_s ve product_um olmalıdır; ayırıcı virgül veya noktalı virgül olabilir.",
    );
  const points = [];
  for (const fields of iterator) {
    if (points.length >= MEASUREMENT_ROWS)
      fail("CSV en fazla 1000 ölçüm satırı içerebilir.");
    if (fields.length !== 2)
      fail(`CSV ölçüm ${points.length + 1}: iki sütun bekleniyor.`);
    const time_s = csvNumber(
      fields[headers.indexOf("time_s")],
      delimiter === ";",
      "Ölçüm zamanı",
    );
    const product_um = csvNumber(
      fields[headers.indexOf("product_um")],
      delimiter === ";",
      "Ölçülen ürün",
    );
    if (time_s > timeLimit) fail("Ölçüm zamanı deney süresini aşıyor.");
    if (product_um > productLimit)
      fail("Ölçülen ürün izin verilen üst sınırı aşıyor.");
    points.push({ time_s, product_um });
  }
  if (!points.length) fail("CSV en az bir ölçüm içermelidir.");
  return points.sort((a, b) => a.time_s - b.time_s);
}

function measurementPoints(points, allowEmpty = false) {
  if (
    !Array.isArray(points) ||
    points.length > MEASUREMENT_ROWS ||
    (!allowEmpty && !points.length)
  )
    fail("Ölçümler en fazla 1000 satırlık bir liste olmalıdır.");
  return Array.from(points, (point, index) => {
    knownKeys(point, new Set(["time_s", "product_um"]), `Ölçüm ${index + 1}`);
    return {
      time_s: nonnegative(point.time_s, "Ölçüm zamanı"),
      product_um: nonnegative(point.product_um, "Ölçülen ürün"),
    };
  }).sort((a, b) => a.time_s - b.time_s);
}

/** Linear interpolation against a fixed run; this is comparison, not parameter fitting. */
export function compareMeasurements(frames, points) {
  if (!Array.isArray(frames) || !frames.length)
    fail("Karşılaştırma için model kareleri gerekiyor.");
  const samples = frames
    .map((frame) => {
      plainObject(frame, "Model karesi");
      return {
        time_s: nonnegative(frame.t_s, "Model zamanı"),
        product_um: nonnegative(frame.product_um, "Model ürünü"),
      };
    })
    .sort((a, b) => a.time_s - b.time_s);
  for (let i = 1; i < samples.length; i++)
    if (samples[i].time_s === samples[i - 1].time_s)
      fail("Model karelerinde yinelenen zaman var.");
  const measured = measurementPoints(points);
  const first = samples[0],
    last = samples.at(-1);
  let cursor = 0;
  const predictions = measured.map((point) => {
    if (point.time_s < first.time_s || point.time_s > last.time_s)
      fail("Ölçüm zamanı modelin hesaplanan zaman aralığı dışında.");
    while (
      cursor + 1 < samples.length &&
      samples[cursor + 1].time_s <= point.time_s
    )
      cursor++;
    const left = samples[cursor],
      right = samples[cursor + 1];
    const predicted_um =
      point.time_s === left.time_s
        ? left.product_um
        : left.product_um +
          (right.product_um - left.product_um) *
            ((point.time_s - left.time_s) / (right.time_s - left.time_s));
    if (!Number.isFinite(predicted_um))
      fail("Model karşılaştırması sayısal aralığı aştı.");
    return {
      time_s: point.time_s,
      observed_um: point.product_um,
      predicted_um,
      residual_um: predicted_um - point.product_um,
    };
  });
  const count = predictions.length;
  const max_abs_error_um = predictions.reduce(
    (max, point) => Math.max(max, Math.abs(point.residual_um)),
    0,
  );
  // Normalize before summing so finite large measurements do not overflow squared errors.
  const errors = max_abs_error_um
    ? predictions.map((point) => Math.abs(point.residual_um) / max_abs_error_um)
    : predictions.map(() => 0);
  const mae_um =
    max_abs_error_um * (errors.reduce((sum, error) => sum + error, 0) / count);
  const rmse_um =
    max_abs_error_um *
    Math.sqrt(errors.reduce((sum, error) => sum + error * error, 0) / count);
  return { count, rmse_um, mae_um, max_abs_error_um, predictions };
}

function csvId(id) {
  textField(id, 64, "Deney kimliği");
  if (!id) fail("Deney kimliği boş olamaz.");
  const safe = /^[\u0000-\u0020\uFEFF]*[=+@-]/u.test(id) ? `'${id}` : id;
  return `"${safe.replaceAll('"', '""')}"`;
}

/** Export generated run IDs and numeric outputs only; user labels/notes are never cells. */
export function resultsCsv(runs) {
  if (!Array.isArray(runs)) fail("Deney listesi bekleniyor.");
  const rows = ["run_id,time_s,substrate_um,product_um,rate_um_s"];
  const keys = ["t_s", "substrate_um", "product_um", "rate_um_s"];
  for (const run of runs) {
    plainObject(run, "Deney");
    const id = csvId(run.id);
    if (!Array.isArray(run.result?.frames) || !run.result.frames.length)
      fail("Dışa aktarılacak hesaplanmış kareler bulunamadı.");
    for (const frame of run.result.frames) {
      plainObject(frame, "Sonuç karesi");
      rows.push(
        [id, ...keys.map((key) => nonnegative(frame[key], key))].join(","),
      );
    }
  }
  return `${rows.join("\r\n")}\r\n`;
}

function isoDate(value) {
  textField(value, 64, "Oluşturma zamanı");
  const match =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?(Z|[+-]\d{2}:\d{2})$/.exec(
      value,
    );
  if (!match) fail("Oluşturma zamanı saat dilimli ISO tarih olmalıdır.");
  const [, year, month, day, hour, minute, second, , zone] = match;
  const leap =
    Number(year) % 4 === 0 &&
    (Number(year) % 100 !== 0 || Number(year) % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (
    +month < 1 ||
    +month > 12 ||
    +day < 1 ||
    +day > days[+month - 1] ||
    +hour > 23 ||
    +minute > 59 ||
    +second > 59 ||
    (zone !== "Z" && (+zone.slice(1, 3) > 23 || +zone.slice(4, 6) > 59))
  )
    fail("Geçersiz oluşturma tarihi.");
  const milliseconds = Date.parse(value);
  if (!Number.isFinite(milliseconds)) fail("Geçersiz oluşturma tarihi.");
  return new Date(milliseconds).toISOString();
}

/** Saved results are deliberately not accepted. Every imported run must be recomputed. */
export function validateProjectEnvelope(raw) {
  let project = raw;
  if (typeof raw === "string") {
    if (encoder.encode(raw).byteLength > PROJECT_BYTES)
      fail("Proje dosyası 1 MiB sınırını aşıyor.");
    try {
      project = JSON.parse(raw.replace(/^\uFEFF/, ""));
    } catch {
      fail("Proje dosyası geçerli JSON değil.");
    }
  } else {
    let serialized;
    try {
      serialized = JSON.stringify(raw);
    } catch {
      fail("Proje JSON olarak okunamıyor.");
    }
    if (typeof serialized !== "string") fail("Proje nesnesi bekleniyor.");
    if (encoder.encode(serialized).byteLength > PROJECT_BYTES)
      fail("Proje dosyası 1 MiB sınırını aşıyor.");
  }
  knownKeys(
    project,
    new Set(["format", "version", "title", "notes", "runs", "measurements"]),
    "Proje",
  );
  if (project.format !== "yorunge-research" || project.version !== 1)
    fail("Desteklenmeyen araştırma projesi biçimi veya sürümü.");
  if (!Array.isArray(project.runs) || project.runs.length > 12)
    fail("Bir proje en fazla 12 deney içerebilir.");
  const ids = new Set();
  const runs = Array.from(project.runs, (run, index) => {
    knownKeys(
      run,
      new Set(["id", "label", "created_at", "experiment", "notes"]),
      `Deney ${index + 1}`,
    );
    if (
      typeof run.id !== "string" ||
      !/^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/.test(run.id)
    )
      fail(
        "Deney kimliği 1–64 karakter; harf/rakamla başlayıp yalnız harf, rakam, _ ve - içermelidir.",
      );
    if (ids.has(run.id)) fail("Projedeki deney kimlikleri tekil olmalıdır.");
    ids.add(run.id);
    knownKeys(run.experiment, EXPERIMENT_KEYS, "Deney parametreleri");
    const experiment = {};
    for (const [key, value] of Object.entries(run.experiment)) {
      if (key === "inhibition") {
        if (!INHIBITIONS.has(value)) fail("Desteklenmeyen inhibisyon modeli.");
      } else if (typeof value !== "number" || !Number.isFinite(value))
        fail(`${key}: sonlu sayısal parametre bekleniyor.`);
      experiment[key] = value;
    }
    return {
      id: run.id,
      label: textField(run.label, 100, "Deney etiketi"),
      created_at: isoDate(run.created_at),
      experiment,
      notes: textField(run.notes, 2000, "Deney notları", ""),
    };
  });
  return {
    format: "yorunge-research",
    version: 1,
    title: textField(project.title, 120, "Proje başlığı"),
    notes: textField(project.notes, 10000, "Proje notları", ""),
    runs,
    measurements: measurementPoints(
      project.measurements === undefined ? [] : project.measurements,
      true,
    ),
  };
}

/** Semicolons separate sweep values, leaving a decimal comma available for Turkish input. */
export function parseSweepValues(text) {
  if (typeof text !== "string" || text.length > 512)
    fail("Tarama değerleri en fazla 512 karakterlik metin olmalıdır.");
  const tokens = text.split(";");
  if (tokens.length < 2 || tokens.length > 6)
    fail("Tarama için noktalı virgülle ayrılmış 2–6 değer gerekiyor.");
  const values = tokens.map((token) => {
    const value = token.trim();
    if (!/^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:[eE][+-]?\d+)?$/.test(value))
      fail("Tarama değeri boş veya geçersiz.");
    const number = Number(value.replace(",", "."));
    if (!Number.isFinite(number)) fail("Tarama değerleri sonlu olmalıdır.");
    return number === 0 ? 0 : number;
  });
  if (new Set(values).size !== values.length)
    fail("Tarama değerleri birbirinden farklı olmalıdır.");
  return values;
}
