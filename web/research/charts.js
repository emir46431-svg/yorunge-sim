/** Browser-only SVG helpers. Values come from the supplied results; no model runs here. */
const SVG_NS = "http://www.w3.org/2000/svg";
const PALETTE = ["#087f83", "#7652a7", "#b77912", "#3e68ad"];
const DASHES = ["", "10 4", "3 4", "12 4 3 4"];
const INK = "#203c48";
const MUTED = "#516975";
const GRID = "#e3ecee";
const WIDTH = 720;
const HEIGHT = 280;
const PLOT = { left: 74, right: 692, top: 30, bottom: 228 };
const chartStates = new WeakMap();
let nextId = 0;

const finiteNonnegative = (value) => Number.isFinite(value) && value >= 0;

function svgNode(tag, attributes = {}, text = null) {
  const node = document.createElementNS(SVG_NS, tag);
  Object.entries(attributes).forEach(([key, value]) =>
    node.setAttribute(key, String(value)),
  );
  if (text !== null) node.textContent = String(text);
  return node;
}

function htmlNode(tag, className, text = null) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== null) node.textContent = String(text);
  return node;
}

function format(value) {
  if (!Number.isFinite(value)) return "—";
  if (value !== 0 && (Math.abs(value) < 0.001 || Math.abs(value) >= 1e6)) {
    return value.toExponential(2).replace(".", ",");
  }
  return new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 3 }).format(
    value,
  );
}

function traceColor(value, index) {
  // Do not accept SVG paint-server URLs or arbitrary user CSS as colors.
  return typeof value === "string" &&
    /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)
    ? value
    : PALETTE[index % PALETTE.length];
}

function niceMaximum(value) {
  if (!(value > 0)) return 1;
  const exponent = Math.floor(Math.log10(value));
  const magnitude = 10 ** exponent;
  const normalized = value / magnitude;
  const step =
    [1, 2, 2.5, 5, 10].find((candidate) => candidate >= normalized) ?? 10;
  const result = step * magnitude;
  return Number.isFinite(result) && result > 0 ? result : value;
}

function traceList(runs, field, xKey, yKey) {
  return (Array.isArray(runs) ? runs : []).slice(0, 4).map((run, index) => {
    const rows = Array.isArray(run?.result?.[field]) ? run.result[field] : [];
    const valid = rows.filter(
      (point) =>
        finiteNonnegative(point?.[xKey]) && finiteNonnegative(point?.[yKey]),
    );
    return {
      id: run?.id,
      label: String(run?.label ?? `Deney ${index + 1}`),
      color: traceColor(run?.color, index),
      dash: DASHES[index],
      rows,
      valid,
      result: run?.result,
      invalidCount: rows.length - valid.length,
    };
  });
}

function baseFigure(title, description) {
  const figure = htmlNode("figure", "research-chart");
  figure.style.margin = "0";
  figure.style.minWidth = "0";
  const id = `research-svg-${++nextId}`;
  const svg = svgNode("svg", {
    viewBox: `0 0 ${WIDTH} ${HEIGHT}`,
    role: "img",
    "aria-labelledby": `${id}-title ${id}-description`,
    preserveAspectRatio: "xMidYMid meet",
    "font-family": "Inter, Segoe UI, sans-serif",
    "font-size": 12,
  });
  svg.style.display = "block";
  svg.style.width = "100%";
  svg.style.height = "auto";
  svg.style.minWidth = "480px";
  svg.append(svgNode("title", { id: `${id}-title` }, title));
  svg.append(svgNode("desc", { id: `${id}-description` }, description));
  const viewport = htmlNode("div", "research-chart-viewport");
  viewport.style.overflowX = "auto";
  viewport.style.maxWidth = "100%";
  viewport.setAttribute("tabindex", "0");
  viewport.setAttribute("role", "region");
  viewport.setAttribute(
    "aria-label",
    `${title}; dar ekranda yatay kaydırılabilir`,
  );
  viewport.append(svg);
  figure.append(viewport);
  return { figure, svg };
}

function addAxes(svg, xMaximum, yMaximum, xLabel, yLabel) {
  const x = (value) =>
    PLOT.left + (value / xMaximum) * (PLOT.right - PLOT.left);
  const y = (value) =>
    PLOT.bottom - (value / yMaximum) * (PLOT.bottom - PLOT.top);
  const grid = svgNode("g", { "aria-hidden": "true" });
  for (let i = 0; i <= 5; i += 1) {
    const xValue = (xMaximum / 5) * i;
    const yValue = (yMaximum / 5) * i;
    grid.append(
      svgNode("line", {
        x1: x(xValue),
        y1: PLOT.top,
        x2: x(xValue),
        y2: PLOT.bottom,
        stroke: GRID,
      }),
    );
    grid.append(
      svgNode("line", {
        x1: PLOT.left,
        y1: y(yValue),
        x2: PLOT.right,
        y2: y(yValue),
        stroke: GRID,
      }),
    );
    grid.append(
      svgNode(
        "text",
        {
          x: x(xValue),
          y: PLOT.bottom + 20,
          fill: MUTED,
          "text-anchor": "middle",
        },
        format(xValue),
      ),
    );
    grid.append(
      svgNode(
        "text",
        {
          x: PLOT.left - 11,
          y: y(yValue) + 4,
          fill: MUTED,
          "text-anchor": "end",
        },
        format(yValue),
      ),
    );
  }
  svg.append(grid);
  svg.append(
    svgNode("path", {
      d: `M${PLOT.left},${PLOT.top}V${PLOT.bottom}H${PLOT.right}`,
      fill: "none",
      stroke: "#8aa1aa",
      "stroke-width": 1.2,
    }),
  );
  svg.append(
    svgNode(
      "text",
      {
        x: (PLOT.left + PLOT.right) / 2,
        y: 274,
        fill: INK,
        "text-anchor": "middle",
        "font-size": 13,
      },
      xLabel,
    ),
  );
  svg.append(
    svgNode(
      "text",
      { x: PLOT.left, y: 17, fill: INK, "font-size": 13, "font-weight": 600 },
      yLabel,
    ),
  );
  return { x, y };
}

function addTrace(svg, trace, xKey, yKey, scale) {
  let path = "";
  let segmentOpen = false;
  for (const point of trace.rows) {
    if (
      !finiteNonnegative(point?.[xKey]) ||
      !finiteNonnegative(point?.[yKey])
    ) {
      segmentOpen = false; // A missing datum makes a gap, never an invented bridge.
      continue;
    }
    path += `${segmentOpen ? "L" : "M"}${scale.x(point[xKey]).toFixed(2)},${scale.y(point[yKey]).toFixed(2)} `;
    segmentOpen = true;
  }
  if (!path) return;
  const line = svgNode("path", {
    d: path.trim(),
    fill: "none",
    stroke: trace.color,
    "stroke-width": 2.6,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-dasharray": trace.dash,
    "data-chart-trace": "true",
  });
  line.append(svgNode("title", {}, trace.label));
  svg.append(line);
  const endpoint = trace.valid.at(-1);
  const dot = svgNode("circle", {
    cx: scale.x(endpoint[xKey]),
    cy: scale.y(endpoint[yKey]),
    r: 3.2,
    fill: trace.color,
    stroke: "#ffffff",
    "stroke-width": 1.2,
    "data-trace-endpoint": "true",
  });
  dot.append(
    svgNode(
      "title",
      {},
      `${trace.label}: ${format(endpoint[xKey])}; ${format(endpoint[yKey])}`,
    ),
  );
  svg.append(dot);
}

function addLegend(figure, traces, textForTrace, measurementCount = 0) {
  const legend = htmlNode("ul", "research-chart-legend");
  legend.setAttribute("aria-label", "Grafik açıklamaları");
  Object.assign(legend.style, {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px 18px",
    padding: "0",
    margin: "7px 0",
    listStyle: "none",
    fontSize: "12px",
    color: INK,
  });
  for (const trace of traces) {
    const item = htmlNode("li", "research-chart-legend-item");
    Object.assign(item.style, {
      display: "flex",
      alignItems: "baseline",
      gap: "7px",
      maxWidth: "100%",
      overflowWrap: "anywhere",
    });
    const swatch = svgNode("svg", {
      width: 24,
      height: 10,
      viewBox: "0 0 24 10",
      "aria-hidden": "true",
    });
    swatch.style.flex = "0 0 24px";
    swatch.append(
      svgNode("line", {
        x1: 0,
        y1: 5,
        x2: 24,
        y2: 5,
        stroke: trace.color,
        "stroke-width": 3,
        "stroke-dasharray": trace.dash,
      }),
    );
    item.append(swatch, htmlNode("span", "", textForTrace(trace)));
    legend.append(item);
  }
  if (measurementCount > 0) {
    const item = htmlNode("li", "research-chart-legend-item");
    const swatch = svgNode("svg", {
      width: 24,
      height: 10,
      viewBox: "0 0 24 10",
      "aria-hidden": "true",
    });
    swatch.append(
      svgNode("circle", { cx: 12, cy: 5, r: 3.5, fill: "#172b35" }),
    );
    item.append(
      swatch,
      htmlNode("span", "", `Girilen ölçüm · ${measurementCount} nokta`),
    );
    legend.append(item);
  }
  figure.append(legend);
}

function addCaption(figure, text) {
  const caption = htmlNode("figcaption", "research-chart-caption", text);
  Object.assign(caption.style, {
    color: MUTED,
    fontSize: "12px",
    lineHeight: "1.6",
    marginTop: "6px",
  });
  figure.append(caption);
}

function showEmpty(host, message) {
  chartStates.delete(host);
  const empty = htmlNode("div", "research-chart-empty", message);
  empty.setAttribute("role", "status");
  Object.assign(empty.style, {
    minHeight: "160px",
    display: "grid",
    placeItems: "center",
    padding: "24px",
    color: MUTED,
    textAlign: "center",
    border: `1px dashed ${GRID}`,
    borderRadius: "12px",
  });
  host.replaceChildren(empty);
}

/** Plot actual frame times on shared axes; only the first four runs are displayed. */
export function drawProgressChart(
  host,
  runs,
  { selectedId = null, time = 0, measurements = [] } = {},
) {
  const traces = traceList(runs, "frames", "t_s", "product_um");
  const points = (Array.isArray(measurements) ? measurements : []).filter(
    (p) => finiteNonnegative(p?.time_s) && finiteNonnegative(p?.product_um),
  );
  const allData = traces.flatMap((trace) => trace.valid);
  if (allData.length === 0 && points.length === 0) {
    showEmpty(
      host,
      "Ürün–zaman grafiği için bir deney çalıştırın veya ölçüm noktaları ekleyin.",
    );
    return;
  }
  let maxTime = 0;
  let maxProduct = 0;
  allData.forEach((p) => {
    maxTime = Math.max(maxTime, p.t_s);
    maxProduct = Math.max(maxProduct, p.product_um);
  });
  points.forEach((p) => {
    maxTime = Math.max(maxTime, p.time_s);
    maxProduct = Math.max(maxProduct, p.product_um);
  });
  const { figure, svg } = baseFigure(
    "Ürün derişimi ve zaman",
    "Deneyler ortak zaman ve ürün derişimi eksenlerinde gösterilir. Eğriler kendi son veri zamanında biter. Koyu noktalar yalnız girilen ölçümlerdir.",
  );
  const scale = addAxes(
    svg,
    niceMaximum(maxTime),
    niceMaximum(maxProduct),
    "Zaman (s)",
    "Ürün P (µM)",
  );
  traces.forEach((trace) => addTrace(svg, trace, "t_s", "product_um", scale));
  points.forEach((p, index) => {
    const dot = svgNode("circle", {
      cx: scale.x(p.time_s),
      cy: scale.y(p.product_um),
      r: 4.5,
      fill: "#172b35",
      stroke: "#ffffff",
      "stroke-width": 1.5,
      "data-measurement-point": "true",
    });
    dot.append(
      svgNode(
        "title",
        {},
        `Ölçüm ${index + 1}: ${format(p.time_s)} s; ${format(p.product_um)} µM`,
      ),
    );
    svg.append(dot);
  });
  const selected =
    selectedId === null
      ? null
      : traces.find(
          (trace) => trace.id === selectedId && trace.valid.length > 0,
        );
  const marker = svgNode("g", {
    "data-time-marker": "true",
    "aria-hidden": "true",
  });
  const markerLine = svgNode("line", {
    y1: PLOT.top,
    y2: PLOT.bottom,
    stroke: "#203c48",
    "stroke-width": 1.25,
    "stroke-dasharray": "4 4",
  });
  const markerLabel = svgNode("text", {
    y: PLOT.top + 14,
    fill: INK,
    "font-size": 11,
    "font-weight": 600,
    "paint-order": "stroke",
    stroke: "#ffffff",
    "stroke-width": 4,
    "stroke-linejoin": "round",
  });
  marker.append(markerLine, markerLabel);
  svg.append(marker);
  addLegend(
    figure,
    traces,
    (trace) => {
      const last = trace.valid.at(-1);
      return last
        ? `${trace.label} · ${format(last.t_s)} s sonunda ${format(last.product_um)} µM`
        : `${trace.label} · veri yok`;
    },
    points.length,
  );
  const skipped =
    traces.reduce((sum, trace) => sum + trace.invalidCount, 0) +
    (Array.isArray(measurements) ? measurements.length - points.length : 0);
  addCaption(
    figure,
    `Çizgiler model çıktısıdır; farklı süreli deneyler kendi bitiş zamanında durur.${points.length ? " Koyu daireler eklediğiniz ölçümlerdir; çizgiyle birleştirilmez." : " Ölçüm noktası eklenmedi."}${selected ? ` Kesikli dikey çizgi: ${selected.label} için oynatma zamanı.` : ""}${skipped ? ` ${skipped} geçersiz veri satırı çizilmedi.` : ""}${Array.isArray(runs) && runs.length > 4 ? " İlk dört deney gösteriliyor." : ""}`,
  );
  chartStates.set(host, {
    marker,
    markerLine,
    markerLabel,
    x: scale.x,
    maxTime: selected?.valid.at(-1).t_s ?? null,
  });
  updateTimeMarker(host, time);
  host.replaceChildren(figure);
}

/** Update only the playback indicator. Input frames and plotted traces are untouched. */
export function updateTimeMarker(host, time) {
  const state = chartStates.get(host);
  if (!state) return;
  if (state.maxTime === null) {
    state.marker.setAttribute("visibility", "hidden");
    return;
  }
  const clamped = Math.min(
    Math.max(Number.isFinite(time) ? time : 0, 0),
    state.maxTime,
  );
  const px = state.x(clamped);
  state.marker.setAttribute("visibility", "visible");
  state.marker.setAttribute("data-time-s", String(clamped));
  state.markerLine.setAttribute("x1", String(px));
  state.markerLine.setAttribute("x2", String(px));
  state.markerLabel.setAttribute(
    "x",
    String(px > PLOT.right - 90 ? px - 7 : px + 7),
  );
  state.markerLabel.setAttribute(
    "text-anchor",
    px > PLOT.right - 90 ? "end" : "start",
  );
  state.markerLabel.textContent = `${format(clamped)} s`;
}

/** Plot supplied rate_curve samples and the supplied apparent Vmax guide, in µM/s. */
export function drawRateChart(host, runs) {
  chartStates.delete(host);
  const traces = traceList(runs, "rate_curve", "substrate_um", "rate_um_s");
  const allData = traces.flatMap((trace) => trace.valid);
  if (allData.length === 0) {
    showEmpty(host, "Hız–substrat grafiği için bir deney çalıştırın.");
    return;
  }
  let maxSubstrate = 0;
  let maxRate = 0;
  allData.forEach((p) => {
    maxSubstrate = Math.max(maxSubstrate, p.substrate_um);
    maxRate = Math.max(maxRate, p.rate_um_s);
  });
  traces.forEach((trace) => {
    const vmax = trace.result?.summary?.apparent_vmax_um_s;
    if (finiteNonnegative(vmax)) maxRate = Math.max(maxRate, vmax);
  });
  const { figure, svg } = baseFigure(
    "Hız ve substrat derişimi",
    "Ortak substrat ve hız eksenleri. Eğriler verilen hız örneklerini, yatay kesikli kılavuzlar sonuçta verilen görünür Vmax değerini gösterir.",
  );
  const xMaximum = niceMaximum(maxSubstrate);
  const scale = addAxes(
    svg,
    xMaximum,
    niceMaximum(maxRate),
    "Substrat S (µM)",
    "Hız v (µM/s)",
  );
  traces.forEach((trace) => {
    const vmax = trace.result?.summary?.apparent_vmax_um_s;
    if (!finiteNonnegative(vmax) || trace.valid.length === 0) return;
    const guide = svgNode("line", {
      x1: PLOT.left,
      y1: scale.y(vmax),
      x2: PLOT.right,
      y2: scale.y(vmax),
      stroke: trace.color,
      "stroke-opacity": 0.5,
      "stroke-width": 1.1,
      "stroke-dasharray": "2 6",
      "data-vmax-guide": "true",
    });
    guide.append(
      svgNode("title", {}, `${trace.label}: görünür Vmax ${format(vmax)} µM/s`),
    );
    svg.append(guide);
  });
  traces.forEach((trace) =>
    addTrace(svg, trace, "substrate_um", "rate_um_s", scale),
  );
  addLegend(figure, traces, (trace) => {
    const vmax = trace.result?.summary?.apparent_vmax_um_s;
    const km = trace.result?.summary?.apparent_km_um;
    return `${trace.label}${finiteNonnegative(vmax) ? ` · görünür Vmax ${format(vmax)} µM/s` : ""}${finiteNonnegative(km) ? ` · görünür Km ${format(km)} µM` : ""}${trace.valid.length ? "" : " · veri yok"}`;
  });
  const skipped = traces.reduce((sum, trace) => sum + trace.invalidCount, 0);
  addCaption(
    figure,
    `Hız eğrisi modelin verilen substrat noktalarını gösterir. Yatay noktalı çizgi, sonuçtaki görünür Vmax kılavuzudur; eğri gösterilen aralıkta bu değere ulaşmak zorunda değildir. Bu grafik bir zaman serisi değildir.${skipped ? ` ${skipped} geçersiz veri satırı çizilmedi.` : ""}${Array.isArray(runs) && runs.length > 4 ? " İlk dört deney gösteriliyor." : ""}`,
  );
  host.replaceChildren(figure);
}

function enzyme(svg, x, y, label = "E") {
  svg.append(
    svgNode("rect", {
      x: x - 28,
      y: y - 24,
      width: 56,
      height: 48,
      rx: 17,
      fill: "#e1f3ef",
      stroke: "#087f83",
      "stroke-width": 2,
    }),
  );
  svg.append(
    svgNode(
      "text",
      {
        x,
        y: y + 6,
        "text-anchor": "middle",
        fill: "#08696d",
        "font-size": 20,
        "font-weight": 700,
      },
      label,
    ),
  );
}

function molecule(svg, x, y, letter, color, background) {
  svg.append(
    svgNode("circle", {
      cx: x,
      cy: y,
      r: 20,
      fill: background,
      stroke: color,
      "stroke-width": 2,
    }),
  );
  svg.append(
    svgNode(
      "text",
      {
        x,
        y: y + 6,
        "text-anchor": "middle",
        fill: color,
        "font-size": 18,
        "font-weight": 700,
      },
      letter,
    ),
  );
}

/** A labeled teaching diagram, never a computed ES population or collision animation. */
export function renderMechanism(
  host,
  { inhibition = "none", frame = null, experiment = null } = {},
) {
  chartStates.delete(host);
  const labels = {
    none: "İnhibisyon yok",
    competitive: "Rekabetçi (competitive)",
    noncompetitive: "Saf rekabetsiz (noncompetitive)",
    uncompetitive: "Yarışmasız (uncompetitive)",
    mixed: "Karma (mixed)",
  };
  const mode = typeof inhibition === "string" ? inhibition : "none";
  const inhibitionLabel = labels[mode] ?? "Belirtilen inhibisyon modeli";
  const figure = htmlNode("figure", "research-mechanism");
  figure.style.margin = "0";
  const id = `research-mechanism-${++nextId}`;
  const svg = svgNode("svg", {
    viewBox: "0 0 720 250",
    role: "img",
    "aria-labelledby": `${id}-title ${id}-description`,
    "font-family": "Inter, Segoe UI, sans-serif",
  });
  svg.style.width = "100%";
  svg.style.height = "auto";
  svg.style.display = "block";
  svg.style.minWidth = "480px";
  svg.append(
    svgNode(
      "title",
      { id: `${id}-title` },
      "Temsili enzim mekanizması: E + S, ES, E + P",
    ),
  );
  svg.append(
    svgNode(
      "desc",
      { id: `${id}-description` },
      "E enzim, S substrat ve P üründür. E artı S ile ES arasında çift yönlü, ES ile E artı P arasında tek yönlü ok bulunur. Çizim şematiktir; ES doluluğu, moleküler çarpışmalar veya gerçek inhibitör bağlanma yeri hesaplanmaz.",
    ),
  );
  svg.append(
    svgNode("rect", {
      x: 1,
      y: 1,
      width: 718,
      height: 248,
      rx: 18,
      fill: "#f8fbfb",
      stroke: GRID,
    }),
  );
  svg.append(
    svgNode(
      "text",
      { x: 26, y: 28, fill: MUTED, "font-size": 12, "letter-spacing": 1.2 },
      "MEKANİZMA · TEMSİLİ ŞEMA",
    ),
  );
  enzyme(svg, 77, 91);
  svg.append(
    svgNode("text", { x: 119, y: 98, fill: MUTED, "font-size": 22 }, "+"),
  );
  molecule(svg, 165, 91, "S", "#7652a7", "#f0eafa");
  svg.append(
    svgNode(
      "text",
      { x: 244, y: 101, fill: MUTED, "font-size": 35, "text-anchor": "middle" },
      "⇌",
    ),
  );
  enzyme(svg, 348, 91);
  molecule(svg, 390, 91, "S", "#7652a7", "#f0eafa");
  svg.append(
    svgNode(
      "text",
      { x: 472, y: 101, fill: MUTED, "font-size": 35, "text-anchor": "middle" },
      "→",
    ),
  );
  enzyme(svg, 558, 91);
  svg.append(
    svgNode("text", { x: 600, y: 98, fill: MUTED, "font-size": 22 }, "+"),
  );
  molecule(svg, 647, 91, "P", "#a96908", "#fff1cf");
  svg.append(
    svgNode(
      "text",
      { x: 121, y: 141, fill: INK, "font-size": 13, "text-anchor": "middle" },
      "E + S · başlangıç",
    ),
  );
  svg.append(
    svgNode(
      "text",
      { x: 369, y: 141, fill: INK, "font-size": 13, "text-anchor": "middle" },
      "ES · bağlı ara durum",
    ),
  );
  svg.append(
    svgNode(
      "text",
      { x: 603, y: 141, fill: INK, "font-size": 13, "text-anchor": "middle" },
      "E + P · ürün",
    ),
  );
  if (mode !== "none") {
    svg.append(
      svgNode("rect", {
        x: 24,
        y: 164,
        width: 672,
        height: 65,
        rx: 12,
        fill: "#f1edf8",
        stroke: "#ded4ec",
      }),
    );
    enzyme(svg, 64, 196);
    svg.append(
      svgNode("line", {
        x1: 94,
        y1: 196,
        x2: 113,
        y2: 196,
        stroke: "#7652a7",
        "stroke-dasharray": "3 3",
      }),
    );
    molecule(svg, 137, 196, "I", "#7652a7", "#f0eafa");
    svg.append(
      svgNode(
        "text",
        {
          x: 174,
          y: 190,
          fill: "#5a3d83",
          "font-size": 13,
          "font-weight": 600,
        },
        `Kinetik model: ${inhibitionLabel}`,
      ),
    );
    svg.append(
      svgNode(
        "text",
        { x: 174, y: 212, fill: MUTED, "font-size": 12 },
        "I · inhibitör; çizilen temas bölgesi temsilidir.",
      ),
    );
  } else {
    svg.append(
      svgNode(
        "text",
        { x: 27, y: 185, fill: MUTED, "font-size": 12 },
        "E · enzim       S · substrat (başlangıç maddesi)       P · ürün",
      ),
    );
    svg.append(
      svgNode(
        "text",
        { x: 27, y: 211, fill: "#087f83", "font-size": 12, "font-weight": 600 },
        inhibitionLabel,
      ),
    );
  }
  const viewport = htmlNode("div", "research-mechanism-viewport");
  viewport.style.overflowX = "auto";
  viewport.style.maxWidth = "100%";
  viewport.setAttribute("tabindex", "0");
  viewport.setAttribute("role", "region");
  viewport.setAttribute(
    "aria-label",
    "Enzim mekanizması şeması; dar ekranda yatay kaydırılabilir",
  );
  viewport.append(svg);
  figure.append(viewport);
  const badges = htmlNode("div", "research-mechanism-values");
  Object.assign(badges.style, {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "10px",
  });
  for (const [key, label, unit, color] of [
    ["substrate_um", "Substrat S", "µM", "#7652a7"],
    ["product_um", "Ürün P", "µM", "#a96908"],
    ["rate_um_s", "Hız v", "µM/s", "#087f83"],
  ]) {
    const value = frame?.[key];
    const badge = htmlNode(
      "span",
      "research-mechanism-badge",
      `${label}: ${finiteNonnegative(value) ? `${format(value)} ${unit}` : "—"}`,
    );
    Object.assign(badge.style, {
      padding: "7px 11px",
      border: `1px solid ${GRID}`,
      borderRadius: "8px",
      fontSize: "12px",
      color,
      fontVariantNumeric: "tabular-nums",
    });
    badges.append(badge);
  }
  figure.append(badges);
  // The experiment is intentionally not used to infer any unreported microscopic state.
  void experiment;
  addCaption(
    figure,
    "E: enzim; S: substrat (başlangıç maddesi); P: ürün; ES: enzim–substrat gösterimi. Bu çizim bir şemadır. ES doluluğu, moleküler çarpışmalar ve inhibitörün gerçek bağlanma yeri hesaplanmaz. Sayısal etiketler yalnız seçilen sonuç karesindeki S, P ve hız değerleridir.",
  );
  host.replaceChildren(figure);
}
