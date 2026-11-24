const $ = (id) => document.getElementById(id);
const fmt = (v, d = 5) =>
  Number(v).toLocaleString("tr-TR", { maximumSignificantDigits: d });
const make = (tag, text, cls) => {
  const n = document.createElement(tag);
  if (text !== undefined) n.textContent = text;
  if (cls) n.className = cls;
  return n;
};
const fields = [
  ["mass_kg", "Kütle", "kg", 0.001, 1000, 1],
  ["specific_heat_j_kg_k", "Özgül ısı", "J/(kg·K)", 1, 100000, 900],
  ["area_m2", "Yüzey alanı", "m²", 0.000001, 1000, 0.1],
  ["convection_w_m2_k", "Taşınım katsayısı", "W/(m²·K)", 0, 10000, 10],
  ["initial_c", "Başlangıç sıcaklığı", "°C", -273.15, 3000, 20],
  ["ambient_c", "Ortam sıcaklığı", "°C", -273.15, 3000, 20],
  ["power_w", "Sabit ısıtma gücü", "W", 0, 1000000, 10],
  ["duration_s", "Süre", "s", 0.001, 86400, 600],
  ["samples", "Örnek sayısı", "", 2, 2001, 301],
];
let circuitResult = null,
  thermalResult = null,
  powerOrigin = null,
  busy = false;
const KEY = "yorunge-energy-v1";
function status(text, error = false) {
  $("status").textContent = text;
  $("status").classList.toggle("error", error);
}
function textButton(text, fn) {
  const b = make("button", text);
  b.type = "button";
  b.addEventListener("click", fn);
  return b;
}
function setBusy(v) {
  busy = v;
  document
    .querySelectorAll("form, .project, #circuit-results")
    .forEach((n) => (n.inert = v));
  $("open").disabled = v;
  $("save").disabled = v;
}
function clearCircuit() {
  circuitResult = null;
  $("circuit-summary").replaceChildren();
  $("circuit-results").replaceChildren();
  $("circuit-csv").disabled = true;
}
function clearThermal() {
  thermalResult = null;
  $("thermal-summary").replaceChildren();
  $("thermal-chart").replaceChildren();
  $("thermal-energy").replaceChildren();
  $("thermal-csv").disabled = true;
}
function drawOrigin() {
  $("power-source").textContent = powerOrigin
    ? `Güç kaynağı: ${powerOrigin.label} · ${fmt(powerOrigin.watts)} W. Bu önceki çözümün sabit güç kaydıdır.`
    : "Isıtma gücü elle girilir.";
}
for (const [key, label, unit, min, max, value] of fields) {
  const wrap = make("label", label),
    u = make("span", unit),
    i = document.createElement("input");
  Object.assign(i, {
    id: key,
    type: "number",
    min,
    max,
    value,
    step: key === "samples" ? "1" : "any",
    required: true,
  });
  wrap.append(u, i);
  $("thermal-fields").append(wrap);
}
function addResistor(r) {
  if ($("resistors").children.length >= 48) {
    status("En fazla 48 direnç eklenebilir.", true);
    return;
  }
  const tr = document.createElement("tr");
  for (const [key, type, min, max] of [
    ["id", "text"],
    ["a", "number", 0, 23],
    ["b", "number", 0, 23],
    ["ohm", "number", 0.01, 1000000],
  ]) {
    const td = document.createElement("td"),
      i = document.createElement("input");
    i.dataset.key = key;
    i.type = type;
    i.value = r[key];
    i.setAttribute("aria-label", `${r.id} ${key}`);
    i.required = true;
    if (type === "number") {
      i.min = min;
      i.max = max;
      i.step = key === "ohm" ? "any" : "1";
    } else {
      i.maxLength = 40;
      i.pattern = "[A-Za-z0-9_-]+";
    }
    td.append(i);
    tr.append(td);
  }
  const td = document.createElement("td");
  td.append(
    textButton("Sil", () => {
      tr.remove();
      clearCircuit();
      persist();
    }),
  );
  tr.append(td);
  $("resistors").append(tr);
}
function readCircuit() {
  return {
    voltage_v: Number($("voltage").value),
    resistors: [...$("resistors").children].map((row) =>
      Object.fromEntries(
        [...row.querySelectorAll("input")].map((i) => [
          i.dataset.key,
          i.dataset.key === "id" ? i.value : Number(i.value),
        ]),
      ),
    ),
  };
}
function readThermal() {
  return Object.fromEntries(fields.map(([key]) => [key, Number($(key).value)]));
}
function project() {
  return {
    format: "yorunge-energy",
    version: 1,
    name: $("project-name").value,
    note: $("project-note").value,
    circuit: readCircuit(),
    thermal: readThermal(),
    power_origin: powerOrigin,
  };
}
function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(project()));
  } catch {
    status(
      "Yerel kayıt kullanılamıyor; Kaydet ile dosya saklayabilirsin.",
      true,
    );
  }
}
function validateProject(p) {
  if (
    !p ||
    typeof p !== "object" ||
    Array.isArray(p) ||
    Object.keys(p).some(
      (k) =>
        ![
          "format",
          "version",
          "name",
          "note",
          "circuit",
          "thermal",
          "power_origin",
        ].includes(k),
    ) ||
    p.format !== "yorunge-energy" ||
    p.version !== 1
  )
    throw Error("Desteklenmeyen enerji projesi.");
  if (
    typeof p.name !== "string" ||
    p.name.length > 120 ||
    typeof p.note !== "string" ||
    p.note.length > 2000
  )
    throw Error("Proje adı veya notu geçersiz.");
  if (
    !p.circuit ||
    Object.keys(p.circuit).sort().join() !== "resistors,voltage_v" ||
    !Number.isFinite(p.circuit.voltage_v) ||
    !Array.isArray(p.circuit.resistors) ||
    p.circuit.resistors.length > 48
  )
    throw Error("Devre girdisi geçersiz.");
  if (
    p.circuit.resistors.some(
      (r) =>
        !r ||
        Object.keys(r).sort().join() !== "a,b,id,ohm" ||
        typeof r.id !== "string" ||
        !/^[A-Za-z0-9_-]{1,40}$/.test(r.id) ||
        !Number.isInteger(r.a) ||
        !Number.isInteger(r.b) ||
        !Number.isFinite(r.ohm),
    )
  )
    throw Error("Direnç girdisi geçersiz.");
  if (
    !p.thermal ||
    Object.keys(p.thermal).length !== fields.length ||
    fields.some(
      ([key, , , min, max]) =>
        !Number.isFinite(p.thermal[key]) ||
        p.thermal[key] < min ||
        p.thermal[key] > max,
    ) ||
    !Number.isInteger(p.thermal.samples)
  )
    throw Error("Isı girdisi geçersiz.");
  if (
    p.power_origin !== null &&
    (!p.power_origin ||
      typeof p.power_origin.label !== "string" ||
      p.power_origin.label.length > 160 ||
      !Number.isFinite(p.power_origin.watts) ||
      p.power_origin.watts !== p.thermal.power_w)
  )
    throw Error("Güç kaydı geçersiz.");
  return p;
}
function install(p) {
  validateProject(p);
  $("project-name").value = p.name;
  $("project-note").value = p.note;
  $("voltage").value = p.circuit.voltage_v;
  $("resistors").replaceChildren();
  p.circuit.resistors.forEach(addResistor);
  fields.forEach(([key]) => ($(key).value = p.thermal[key]));
  powerOrigin = p.power_origin;
  drawOrigin();
  clearCircuit();
  clearThermal();
  persist();
}
async function api(path, input) {
  const r = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  const data = await r.json();
  if (!r.ok) throw Error(data.error || "Hesap tamamlanamadı.");
  return data;
}
function metrics(target, values) {
  $(target).replaceChildren(
    ...values.map(([label, value]) => {
      const d = make("div", undefined, "metric");
      d.append(make("span", label), make("strong", value));
      return d;
    }),
  );
}
function transfer(label, watts) {
  if (busy) return;
  if (watts > 1000000) {
    status("Bu güç ısı modelinin 1 MW sınırını aşıyor.", true);
    return;
  }
  $("power_w").value = watts;
  powerOrigin = { label, watts };
  drawOrigin();
  clearThermal();
  persist();
  status(
    `${label}: ${fmt(watts)} W ısı deneyine aktarıldı. Isıyı hesapla ile çalıştır.`,
  );
}
function renderCircuit(out) {
  metrics("circuit-summary", [
    ["Kaynak akımı", `${fmt(out.source_current_a)} A`],
    ["Toplam güç", `${fmt(out.total_power_w)} W`],
    [
      "Eşdeğer direnç",
      out.equivalent_resistance_ohm === null
        ? "—"
        : `${fmt(out.equivalent_resistance_ohm)} Ω`,
    ],
  ]);
  const host = $("circuit-results");
  host.replaceChildren();
  host.append(
    textButton("Toplam gücü ısıya aktar", () =>
      transfer("DC devresi toplamı", out.total_power_w),
    ),
  );
  const table = document.createElement("table"),
    head = document.createElement("thead"),
    tr = document.createElement("tr");
  ["Direnç · A→B", "Gerilim · V", "Akım · A", "Güç · W", ""].forEach((t) =>
    tr.append(make("th", t)),
  );
  head.append(tr);
  table.append(head);
  const body = document.createElement("tbody");
  out.branches.forEach((b) => {
    const row = document.createElement("tr");
    [
      `${b.id} · ${b.a}→${b.b}`,
      fmt(b.voltage_v),
      fmt(b.current_a),
      fmt(b.power_w),
    ].forEach((t) => row.append(make("td", t)));
    const td = document.createElement("td");
    td.append(
      textButton("Isıya aktar", () =>
        transfer(`${b.id} (${b.resistance_ohm} Ω)`, b.power_w),
      ),
    );
    row.append(td);
    body.append(row);
  });
  table.append(body);
  host.append(table);
  host.append(
    make(
      "p",
      `Düğüm gerilimleri: ${out.nodes.map((n) => `${n.id}: ${fmt(n.voltage_v)} V`).join(" · ")}`,
      "hint",
    ),
    make(
      "p",
      `En büyük düğüm artığı: ${out.max_kcl_residual_a.toExponential(2)} A · Güç dengesi hatası: ${out.power_balance_error_w.toExponential(2)} W`,
      "hint",
    ),
  );
  $("circuit-csv").disabled = false;
}
function svgNode(tag, attrs, text) {
  const n = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  if (text !== undefined) n.textContent = text;
  return n;
}
function renderThermal(out) {
  const frames = out.frames,
    last = frames.at(-1);
  metrics("thermal-summary", [
    ["Son sıcaklık", `${fmt(last.temperature_c)} °C`],
    [
      "Zaman sabiti",
      out.time_constant_s === null
        ? "Yalıtılmış"
        : `${fmt(out.time_constant_s)} s`,
    ],
    ["Depolanan enerji", `${fmt(last.stored_energy_j)} J`],
  ]);
  const ys = frames.map((f) => f.temperature_c),
    min = Math.min(...ys),
    max = Math.max(...ys),
    pad = Math.max(0.1, (max - min) * 0.1),
    low = min - pad,
    high = max + pad,
    x = (t) => 60 + (t / last.time_s) * 490,
    y = (t) => 235 - ((t - low) / (high - low)) * 200;
  const svg = svgNode("svg", {
    viewBox: "0 0 580 290",
    role: "img",
    "aria-label":
      "Sıcaklık zaman grafiği; yatay eksen saniye, düşey eksen Celsius",
  });
  svg.append(svgNode("path", { d: "M60 30V235H550", class: "axis" }));
  for (let i = 0; i <= 4; i++) {
    const t = (last.time_s * i) / 4,
      temp = low + ((high - low) * i) / 4;
    svg.append(
      svgNode("text", { x: x(t), y: 255, "text-anchor": "middle" }, fmt(t, 3)),
      svgNode(
        "text",
        { x: 51, y: y(temp) + 4, "text-anchor": "end" },
        fmt(temp, 4),
      ),
    );
  }
  svg.append(
    svgNode("text", { x: 300, y: 280, "text-anchor": "middle" }, "Zaman · s"),
    svgNode("text", { x: 12, y: 18 }, "Sıcaklık · °C"),
    svgNode("path", {
      class: "curve",
      d: frames
        .map(
          (f, i) =>
            `${i ? "L" : "M"}${x(f.time_s).toFixed(3)},${y(f.temperature_c).toFixed(3)}`,
        )
        .join(" "),
    }),
  );
  $("thermal-chart").replaceChildren(svg);
  $("thermal-energy").replaceChildren(
    make(
      "p",
      `Girdi: ${fmt(last.input_energy_j)} J · Cisimde depolanan: ${fmt(last.stored_energy_j)} J · Ortama net aktarılan: ${fmt(last.net_to_ambient_j)} J. Negatif net aktarım ortamdan ısı alındığını gösterir.`,
      "energy",
    ),
  );
  $("thermal-csv").disabled = false;
}
function download(name, text, type = "application/json") {
  const u = URL.createObjectURL(new Blob([text], { type })),
    a = document.createElement("a");
  a.href = u;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 1000);
}
$("circuit-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (busy) return;
  setBusy(true);
  clearCircuit();
  try {
    circuitResult = await api("/api/engineering/circuit", readCircuit());
    renderCircuit(circuitResult);
    persist();
    status("DC devresi çözüldü; akım ve güç dengeleri denetlendi.");
  } catch (err) {
    status(err.message, true);
  } finally {
    setBusy(false);
  }
});
$("thermal-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (busy) return;
  setBusy(true);
  clearThermal();
  try {
    thermalResult = await api("/api/engineering/thermal", readThermal());
    renderThermal(thermalResult);
    persist();
    status("Isıl deney hesaplandı. CSV ile tüm zaman örneklerini alabilirsin.");
  } catch (err) {
    status(err.message, true);
  } finally {
    setBusy(false);
  }
});
$("circuit-form").addEventListener("input", () => {
  clearCircuit();
  persist();
});
$("thermal-form").addEventListener("input", (e) => {
  clearThermal();
  if (e.target.id === "power_w") {
    powerOrigin = null;
    drawOrigin();
  }
  persist();
});
document.querySelector(".project").addEventListener("input", persist);
$("add-resistor").addEventListener("click", () => {
  const ids = new Set(readCircuit().resistors.map((r) => r.id));
  let n = 1;
  while (ids.has(`R${n}`)) n++;
  addResistor({ id: `R${n}`, a: 1, b: 0, ohm: 100 });
  clearCircuit();
  persist();
});
$("save").addEventListener("click", () =>
  download("yorunge-enerji.json", JSON.stringify(project(), null, 2)),
);
$("open").addEventListener("click", () => $("file").click());
$("file").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  e.target.value = "";
  if (!file) return;
  try {
    if (file.size > 65536) throw Error("Proje en fazla 64 KiB olabilir.");
    const p = validateProject(JSON.parse(await file.text()));
    install(p);
    status(
      "Proje açıldı. Sonuçlar dosyadan alınmaz; her alanı yeniden hesapla.",
    );
  } catch (err) {
    status(err.message, true);
  }
});
$("circuit-csv").addEventListener("click", () => {
  if (!circuitResult) return;
  const keys = [
    "id",
    "a",
    "b",
    "resistance_ohm",
    "voltage_v",
    "current_a",
    "power_w",
  ];
  download(
    "yorunge-devre.csv",
    [
      keys.join(","),
      ...circuitResult.branches.map((b) => keys.map((k) => b[k]).join(",")),
    ].join("\n"),
    "text/csv",
  );
});
$("thermal-csv").addEventListener("click", () => {
  if (!thermalResult) return;
  const keys = [
    "time_s",
    "temperature_c",
    "stored_energy_j",
    "input_energy_j",
    "net_to_ambient_j",
    "heat_flow_to_ambient_w",
  ];
  download(
    "yorunge-isi.csv",
    [
      keys.join(","),
      ...thermalResult.frames.map((f) => keys.map((k) => f[k]).join(",")),
    ].join("\n"),
    "text/csv",
  );
});
addResistor({ id: "R1", a: 1, b: 0, ohm: 100 });
try {
  const old = localStorage.getItem(KEY);
  if (old) install(JSON.parse(old));
} catch {
  status("Önceki enerji kaydı açılamadı; yeni proje hazır.", true);
}
