"use strict";

(() => {
  const byId = (id) => document.getElementById(id);
  const form = byId("simulation-form");
  const fields = [...form.querySelectorAll("[data-param]")];
  const referenceToggle = byId("show-reference");
  const svg = byId("trajectory-plot");
  const plotContent = byId("plot-content");
  const numberFormat = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 2 });
  const preciseFormat = new Intl.NumberFormat("tr-TR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const smallFormat = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 4 });
  const state = {
    defaults: readParameters(),
    result: null,
    reference: null,
    submitted: null,
    submittedReference: false,
    stale: false,
    busy: false,
    touched: false,
    time: 0,
    playing: false,
    frame: null,
    lastFrame: null,
    plot: null,
  };

  function readParameters() {
    return Object.fromEntries(fields.map((field) => [field.name, field.valueAsNumber]));
  }

  function setMessage(message, kind = "info") {
    byId("status-message").textContent = message;
    byId("status-message").dataset.kind = kind;
  }

  function setResultState(text, kind = "current") {
    byId("result-state").textContent = text;
    byId("result-state").dataset.kind = kind;
  }

  function parametersMatch(left, right) {
    return left && right && fields.every((field) => left[field.name] === right[field.name]);
  }

  function refreshStaleState() {
    state.stale = Boolean(state.result && (
      !parametersMatch(readParameters(), state.submitted) ||
      referenceToggle.checked !== state.submittedReference
    ));
    byId("stale-notice").hidden = !state.stale;
    const exportDisabled = !state.result || state.stale || state.busy;
    byId("download-json").disabled = exportDisabled;
    byId("download-csv").disabled = exportDisabled;
    if (state.stale) setResultState("Ayarlar değişti", "stale");
    else if (state.result) setResultState(state.result.status === "landed" ? "Zemine ulaştı" : "Süre sınırında");
  }

  function validateParameters() {
    byId("max_time_s").setCustomValidity("");
    if (!form.reportValidity()) return null;
    const parameters = readParameters();
    if (parameters.max_time_s / parameters.time_step_s > 120000) {
      byId("max_time_s").setCustomValidity("Süre sınırı / zaman adımı en fazla 120.000 olabilir.");
      form.reportValidity();
      return null;
    }
    return parameters;
  }

  async function requestSimulation(parameters) {
    let response;
    try {
      response = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(parameters),
      });
    } catch {
      throw new Error("Yerel sunucuya ulaşılamadı. Sunucunun açık olduğunu kontrol edip yeniden deneyin.");
    }
    let result;
    try { result = await response.json(); }
    catch { throw new Error("Sunucu okunabilir bir sonuç döndürmedi. Yeniden deneyin."); }
    if (!response.ok) throw new Error(result.error || "Deney hesaplanamadı. Girdileri kontrol edin.");
    validateResult(result);
    return result;
  }

  function validateResult(result) {
    if (!result || !Array.isArray(result.trajectory) || !result.trajectory.length ||
        !result.summary || !result.derived || !["landed", "time_limit"].includes(result.status)) {
      throw new Error("Sunucunun sonuç biçimi beklenenden farklı.");
    }
    let previousTime = -Infinity;
    for (const point of result.trajectory) {
      if (!["t_s", "x_m", "y_m", "vx_m_s", "vy_m_s"].every((key) => Number.isFinite(point[key])) ||
          point.t_s < previousTime || point.t_s < 0) {
        throw new Error("Sonuçta geçersiz bir yörünge örneği var.");
      }
      previousTime = point.t_s;
    }
    if (![result.summary.elapsed_s, result.summary.horizontal_displacement_m,
      result.summary.maximum_height_m, result.derived.air_density_kg_m3].every(Number.isFinite)) {
      throw new Error("Sonucun özet değerleri okunamadı.");
    }
  }

  async function simulate() {
    if (state.busy) return;
    const parameters = validateParameters();
    if (!parameters) return;
    const wantReference = referenceToggle.checked;
    state.busy = true;
    pause();
    byId("simulate-button").disabled = true;
    byId("simulate-button").textContent = "Hesaplanıyor…";
    byId("plot-wrap").setAttribute("aria-busy", "true");
    setMessage(wantReference ? "Deney ve havasız referans hesaplanıyor…" : "Deney hesaplanıyor…");
    refreshStaleState();
    try {
      // Both curves come from the same Rust engine. JavaScript only draws samples.
      const requests = [requestSimulation(parameters)];
      if (wantReference) requests.push(requestSimulation({ ...parameters, pressure_hpa: 0 }));
      const responses = await Promise.allSettled(requests);
      if (responses[0].status === "rejected") throw responses[0].reason;
      state.result = responses[0].value;
      state.reference = wantReference && responses[1].status === "fulfilled" ? responses[1].value : null;
      state.submitted = parameters;
      state.submittedReference = wantReference;
      renderResult();
      const explanation = state.result.status === "landed"
        ? "Hesaplama tamamlandı. Zaman çubuğuyla atışın herhangi bir anını inceleyin."
        : "Süre sınırına ulaşıldı; taş henüz zemine inmedi. Gerekirse süre sınırını artırın.";
      if (wantReference && !state.reference) {
        setMessage(`Deney hesaplandı, ancak havasız referans hesaplanamadı: ${responses[1].reason.message}`, "error");
      } else setMessage(explanation);
    } catch (error) {
      setMessage(error.message || "Deney hesaplanamadı. Girdileri kontrol edip yeniden deneyin.", "error");
      if (!state.result) setResultState("Hesaplanamadı", "error");
    } finally {
      state.busy = false;
      byId("simulate-button").disabled = false;
      byId("simulate-button").replaceChildren(document.createTextNode("Simüle et "));
      const arrow = document.createElement("span");
      arrow.textContent = "↗";
      arrow.setAttribute("aria-hidden", "true");
      byId("simulate-button").append(arrow);
      byId("plot-wrap").removeAttribute("aria-busy");
      refreshStaleState();
    }
  }

  function duration() {
    return state.result ? state.result.trajectory[state.result.trajectory.length - 1].t_s : 0;
  }

  function renderResult() {
    const { summary, derived, status } = state.result;
    byId("duration-label").textContent = status === "landed" ? "Uçuş süresi" : "Gösterilen süre";
    byId("flight-time").textContent = numberFormat.format(summary.flight_time_s ?? summary.elapsed_s);
    byId("displacement").textContent = numberFormat.format(summary.horizontal_displacement_m);
    byId("maximum-height").textContent = numberFormat.format(summary.maximum_height_m);
    byId("density-note").textContent = `Hava yoğunluğu: ${smallFormat.format(derived.air_density_kg_m3)} kg/m³`;
    byId("reference-legend").hidden = !state.reference;
    byId("plot-description").textContent = `Yatay konum ve yükseklik metre cinsindendir; iki eksen aynı ölçektedir. ` +
      `Yatay yer değiştirme ${numberFormat.format(summary.horizontal_displacement_m)} metre, ` +
      `en yüksek konum ${numberFormat.format(summary.maximum_height_m)} metre. ` +
      (status === "landed" ? "Taş zemine ulaştı." : "Taş süre sınırında henüz zemine ulaşmadı.") +
      (state.reference ? " Kesikli çizgi aynı atışın havasız referansıdır." : "");
    drawPlot();
    const total = duration();
    byId("time-slider").max = total > 0 ? String(total) : "1";
    byId("time-slider").disabled = total <= 0;
    byId("play-button").disabled = total <= 0;
    byId("reset-button").disabled = false;
    setTime(0);
  }

  function svgElement(tag, attributes = {}, text = null) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, String(value)));
    if (text !== null) element.textContent = text;
    return element;
  }

  function niceStep(target) {
    const exponent = Math.pow(10, Math.floor(Math.log10(target)));
    const scaled = target / exponent;
    return (scaled <= 1 ? 1 : scaled <= 2 ? 2 : scaled <= 5 ? 5 : 10) * exponent;
  }

  function drawPlot() {
    const width = Math.max(280, Math.round(svg.getBoundingClientRect().width) || 1000);
    const height = Math.max(300, Math.min(620, Math.round(width * 0.62)));
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.style.aspectRatio = `${width} / ${height}`;
    const area = { x: 54, y: 36, width: width - 78, height: height - 90 };
    const series = [state.result.trajectory];
    if (state.reference) series.push(state.reference.trajectory);
    let minX = 0, maxX = 0, minY = 0, maxY = 0;
    for (const points of series) {
      for (const point of points) {
        minX = Math.min(minX, point.x_m);
        maxX = Math.max(maxX, point.x_m);
        minY = Math.min(minY, point.y_m);
        maxY = Math.max(maxY, point.y_m);
      }
    }
    // A common pixels-per-metre factor preserves angles, even for vertical or flat paths.
    const scale = Math.min(area.width / Math.max(2, (maxX - minX) * 1.16),
      area.height / Math.max(2, (maxY - minY) * 1.18));
    const worldWidth = area.width / scale;
    const worldHeight = area.height / scale;
    const left = (minX + maxX - worldWidth) / 2;
    const bottom = minY - worldHeight * 0.08;
    const right = left + worldWidth;
    const top = bottom + worldHeight;
    const toX = (x) => area.x + (x - left) * scale;
    const toY = (y) => area.y + (top - y) * scale;
    const groundY = toY(0);
    const step = niceStep(75 / scale);
    const fragment = document.createDocumentFragment();

    fragment.append(svgElement("rect", { x: area.x, y: groundY, width: area.width,
      height: Math.max(0, area.y + area.height - groundY), fill: "#eaf2f7" }));
    const grid = svgElement("g", { stroke: "#dce9f1", "stroke-width": 1 });
    const labels = svgElement("g", { fill: "#536e81", "font-size": 11 });
    const tickFormat = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: Math.max(0, Math.min(5, -Math.floor(Math.log10(step)))) });
    const firstXTick = Math.ceil(left / step);
    const lastXTick = Math.floor(right / step);
    for (let i = firstXTick; i <= lastXTick; i++) {
      const value = i * step;
      const x = toX(value);
      grid.append(svgElement("line", { x1: x, x2: x, y1: area.y, y2: groundY }));
      labels.append(svgElement("text", { x, y: groundY + 20, "text-anchor": "middle" }, tickFormat.format(value)));
    }
    for (let i = 0; i <= Math.floor(top / step); i++) {
      const value = i * step;
      const y = toY(value);
      grid.append(svgElement("line", { x1: area.x, x2: area.x + area.width, y1: y, y2: y }));
      labels.append(svgElement("text", { x: area.x - 10, y: y + 4, "text-anchor": "end" }, tickFormat.format(value)));
    }
    fragment.append(grid, labels);
    fragment.append(svgElement("line", { x1: area.x, x2: area.x + area.width, y1: groundY, y2: groundY,
      stroke: "#7494aa", "stroke-width": 1.5 }));
    if (left <= 0 && right >= 0) fragment.append(svgElement("line", { x1: toX(0), x2: toX(0), y1: area.y,
      y2: groundY, stroke: "#a3bdce", "stroke-width": 1.2 }));
    fragment.append(svgElement("text", { x: area.x, y: 18, fill: "#536e81", "font-size": 11 }, "Yükseklik (m)"));
    fragment.append(svgElement("text", { x: width - 24, y: height - 12, fill: "#536e81", "font-size": 11,
      "text-anchor": "end" }, "Yatay konum (m)"));

    function addPath(points, reference) {
      // Limit drawing work, while retaining the endpoint and highest sampled point.
      const stride = Math.max(1, Math.ceil(points.length / 2400));
      const indices = new Set([0, points.length - 1]);
      let highest = 0;
      for (let i = 0; i < points.length; i++) {
        if (i % stride === 0) indices.add(i);
        if (points[i].y_m > points[highest].y_m) highest = i;
      }
      indices.add(highest);
      const path = [...indices].sort((a, b) => a - b).map((index, order) => {
        const point = points[index];
        return `${order === 0 ? "M" : "L"}${toX(point.x_m).toFixed(3)},${toY(point.y_m).toFixed(3)}`;
      }).join(" ");
      fragment.append(svgElement("path", { d: path, fill: "none", stroke: reference ? "#a66a12" : "#1267c4",
        "stroke-width": reference ? 1.8 : 2.5, "stroke-dasharray": reference ? "7 6" : "none",
        "stroke-linecap": "round", "stroke-linejoin": "round" }));
    }
    if (state.reference) addPath(state.reference.trajectory, true);
    addPath(state.result.trajectory, false);

    const first = state.result.trajectory[0];
    const last = state.result.trajectory[state.result.trajectory.length - 1];
    fragment.append(svgElement("circle", { cx: toX(first.x_m), cy: toY(first.y_m), r: 4.5,
      fill: "white", stroke: "#1267c4", "stroke-width": 2 }));
    const startLabelOnLeft = toX(first.x_m) > area.x + area.width * 0.7;
    fragment.append(svgElement("text", { x: toX(first.x_m) + (startLabelOnLeft ? -10 : 10), y: toY(first.y_m) - 11,
      fill: "#47687f", "font-size": 10, "text-anchor": startLabelOnLeft ? "end" : "start" }, "Başlangıç"));
    if (Math.hypot(toX(last.x_m) - toX(first.x_m), toY(last.y_m) - toY(first.y_m)) > 36) {
      const labelOnLeft = toX(last.x_m) > area.x + area.width * 0.7;
      fragment.append(svgElement("circle", { cx: toX(last.x_m), cy: toY(last.y_m), r: 3.5, fill: "#1267c4" }));
      fragment.append(svgElement("text", { x: toX(last.x_m) + (labelOnLeft ? -12 : 12), y: toY(last.y_m) - 12,
        fill: "#47687f", "font-size": 10, "text-anchor": labelOnLeft ? "end" : "start" },
      state.result.status === "landed" ? "Zemine temas" : "Süre sınırı"));
    }
    const movingDot = svgElement("circle", { cx: toX(first.x_m), cy: toY(first.y_m), r: 7,
      fill: "#17354b", stroke: "white", "stroke-width": 3 });
    fragment.append(movingDot);
    plotContent.replaceChildren(fragment);
    state.plot = { toX, toY, movingDot, width };
    byId("scale-note").textContent = `Eş ölçek · Bir ızgara aralığı: ${tickFormat.format(step)} m`;
  }

  function sampleAt(time) {
    const points = state.result.trajectory;
    if (time <= points[0].t_s || points.length === 1) return points[0];
    if (time >= points[points.length - 1].t_s) return points[points.length - 1];
    let low = 0, high = points.length - 1;
    while (high - low > 1) {
      const mid = Math.floor((low + high) / 2);
      if (points[mid].t_s <= time) low = mid;
      else high = mid;
    }
    const start = points[low], end = points[high];
    const interval = end.t_s - start.t_s;
    const fraction = interval > 0 ? (time - start.t_s) / interval : 0;
    // Linear interpolation is for the marker only, never a second physics solver.
    return { x_m: start.x_m + (end.x_m - start.x_m) * fraction,
      y_m: start.y_m + (end.y_m - start.y_m) * fraction };
  }

  function setTime(time) {
    if (!state.result) return;
    const total = duration();
    state.time = Math.max(0, Math.min(total, time));
    const point = sampleAt(state.time);
    byId("time-slider").value = String(state.time);
    byId("time-slider").setAttribute("aria-valuetext", `${preciseFormat.format(state.time)} saniye; toplam ${preciseFormat.format(total)} saniye`);
    byId("time-value").textContent = `${preciseFormat.format(state.time)} / ${preciseFormat.format(total)} s`;
    byId("current-x").textContent = preciseFormat.format(point.x_m);
    byId("current-y").textContent = preciseFormat.format(point.y_m);
    if (state.plot) {
      state.plot.movingDot.setAttribute("cx", String(state.plot.toX(point.x_m)));
      state.plot.movingDot.setAttribute("cy", String(state.plot.toY(point.y_m)));
    }
  }

  function pause() {
    state.playing = false;
    state.lastFrame = null;
    if (state.frame !== null) cancelAnimationFrame(state.frame);
    state.frame = null;
    byId("play-symbol").textContent = "▶";
    byId("play-label").textContent = "Oynat";
  }

  function animate(timestamp) {
    if (!state.playing) return;
    if (state.lastFrame !== null) setTime(state.time + Math.min((timestamp - state.lastFrame) / 1000, 0.1));
    state.lastFrame = timestamp;
    if (state.time >= duration()) pause();
    else state.frame = requestAnimationFrame(animate);
  }

  function download(filename, content, type) {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  form.addEventListener("submit", (event) => { event.preventDefault(); simulate(); });
  form.addEventListener("input", () => {
    state.touched = true;
    byId("max_time_s").setCustomValidity("");
    refreshStaleState();
  });
  form.addEventListener("invalid", (event) => {
    const details = event.target.closest("details");
    if (details) details.open = true;
  }, true);
  byId("restore-defaults").addEventListener("click", () => {
    state.touched = true;
    fields.forEach((field) => { field.value = String(state.defaults[field.name]); });
    referenceToggle.checked = false;
    byId("max_time_s").setCustomValidity("");
    refreshStaleState();
    setMessage("Varsayılan ayarlar yüklendi. Deneyi hesaplamak için Simüle et düğmesine basın.");
  });
  byId("play-button").addEventListener("click", () => {
    if (state.playing) { pause(); return; }
    if (!state.result || duration() <= 0) return;
    if (state.time >= duration()) setTime(0);
    state.playing = true;
    state.lastFrame = null;
    byId("play-symbol").textContent = "Ⅱ";
    byId("play-label").textContent = "Duraklat";
    state.frame = requestAnimationFrame(animate);
  });
  byId("reset-button").addEventListener("click", () => { pause(); setTime(0); });
  byId("time-slider").addEventListener("input", (event) => { pause(); setTime(Number(event.target.value)); });
  document.addEventListener("visibilitychange", () => { if (document.hidden) pause(); });
  const plotObserver = new ResizeObserver(() => {
    if (!state.result || !state.plot) return;
    const width = Math.max(280, Math.round(svg.getBoundingClientRect().width));
    if (Math.abs(width - state.plot.width) > 1) {
      drawPlot();
      setTime(state.time);
    }
  });
  plotObserver.observe(byId("plot-wrap"));
  byId("download-input").addEventListener("click", () => {
    const parameters = validateParameters();
    if (parameters) download("yorunge-girdi.json", JSON.stringify(parameters, null, 2) + "\n", "application/json");
  });
  byId("download-json").addEventListener("click", () => {
    refreshStaleState();
    if (state.result && !state.stale && !state.busy) {
      download("yorunge-sonuc.json", JSON.stringify(state.result, null, 2) + "\n", "application/json");
    }
  });
  byId("download-csv").addEventListener("click", () => {
    refreshStaleState();
    if (!state.result || state.stale || state.busy) return;
    const keys = ["t_s", "x_m", "y_m", "vx_m_s", "vy_m_s"];
    const rows = [keys.join(","), ...state.result.trajectory.map((point) => keys.map((key) => point[key]).join(","))];
    download("yorunge-ornekleri.csv", rows.join("\r\n") + "\r\n", "text/csv;charset=utf-8");
  });

  async function initialize() {
    try {
      const response = await fetch("/api/defaults", { headers: { "Accept": "application/json" } });
      if (response.ok) {
        const data = await response.json();
        const defaults = data.parameters || data;
        if (fields.every((field) => Number.isFinite(defaults[field.name]))) {
          state.defaults = Object.fromEntries(fields.map((field) => [field.name, defaults[field.name]]));
          if (!state.touched) fields.forEach((field) => { field.value = String(state.defaults[field.name]); });
        }
      }
    } catch { /* The embedded defaults remain usable if this optional request fails. */ }
    if (!state.touched) await simulate();
    else {
      setResultState("Deney hazır");
      setMessage("Ayarlar hazır. Deneyi hesaplamak için Simüle et düğmesine basın.");
    }
  }
  initialize();
})();
