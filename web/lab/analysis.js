// Analysis of sampled Rapier output. All values remain in SI units.
const finite = (value, field) => {
  if (!Number.isFinite(value)) throw new Error(`${field}: sonlu sayı gerekli.`);
  return value;
};
const vector = (value, length, field) => {
  if (!Array.isArray(value) || value.length !== length)
    throw new Error(`${field}: geçersiz vektör.`);
  return value.map((v) => finite(v, field));
};

function checkedResult(result) {
  if (
    !result?.scene ||
    !Array.isArray(result.scene.bodies) ||
    !Array.isArray(result.frames) ||
    !result.frames.length
  )
    throw new Error("Hesaplanmış mekanik sonucu gerekli.");
  const definitions = new Map();
  for (const body of result.scene.bodies) {
    if (typeof body.id !== "string" || definitions.has(body.id))
      throw new Error("Cisim kimliği geçersiz veya tekrarlı.");
    finite(body.mass_kg, "Kütle");
    if (body.mass_kg <= 0) throw new Error("Kütle pozitif olmalı.");
    definitions.set(body.id, body);
  }
  let previous = -Infinity;
  for (const frame of result.frames) {
    finite(frame.t_s, "Zaman");
    if (frame.t_s < 0 || frame.t_s <= previous)
      throw new Error("Örnek zamanları artan ve tekrarsız olmalı.");
    previous = frame.t_s;
    if (
      !Array.isArray(frame.bodies) ||
      frame.bodies.length !== definitions.size
    )
      throw new Error("Karede eksik cisim var.");
    const seen = new Set();
    for (const body of frame.bodies) {
      if (!definitions.has(body.id) || seen.has(body.id))
        throw new Error("Karede cisim kimliği eşleşmiyor.");
      seen.add(body.id);
      vector(body.position, 3, "Konum");
      vector(body.velocity, 3, "Hız");
      vector(body.angular_velocity, 3, "Açısal hız");
      vector(body.rotation, 4, "Dönüş");
    }
  }
  return definitions;
}

export function bodySeries(result, id) {
  const definitions = checkedResult(result);
  if (!definitions.has(id)) return [];
  return result.frames.map((frame) => {
    const body = frame.bodies.find((item) => item.id === id);
    return {
      t_s: frame.t_s,
      position: [...body.position],
      velocity: [...body.velocity],
      speed_m_s: Math.hypot(...body.velocity),
    };
  });
}

export function bodyMetrics(result, id) {
  const points = bodySeries(result, id);
  if (!points.length) return null;
  const definition = result.scene.bodies.find((body) => body.id === id);
  const first = points[0],
    last = points.at(-1);
  let sampledDistance = 0;
  let maxSpeed = 0;
  for (let i = 0; i < points.length; i++) {
    maxSpeed = Math.max(maxSpeed, points[i].speed_m_s);
    if (i)
      sampledDistance += Math.hypot(
        ...points[i].position.map(
          (v, axis) => v - points[i - 1].position[axis],
        ),
      );
  }
  return {
    duration_s: last.t_s - first.t_s,
    samples: points.length,
    displacement_m: Math.hypot(
      ...last.position.map((v, axis) => v - first.position[axis]),
    ),
    sampled_distance_m: sampledDistance,
    max_sampled_speed_m_s: maxSpeed,
    final_speed_m_s: last.speed_m_s,
    final_translational_energy_j: definition.fixed
      ? 0
      : 0.5 * definition.mass_kg * last.speed_m_s ** 2,
  };
}

// Protect text columns against spreadsheet formula execution; numeric SI columns
// remain numbers (including negative coordinates and velocities).
function csvText(value) {
  let text = String(value ?? "");
  if (/^\s*[=+\-@]/u.test(text) || /^[\t\r\n]/u.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
}

export function resultsCsv(result) {
  const definitions = checkedResult(result);
  const header = [
    "experiment_name",
    "body_id",
    "body_label",
    "fixed",
    "mass_kg",
    "time_s",
    "x_m",
    "y_m",
    "z_m",
    "vx_m_s",
    "vy_m_s",
    "vz_m_s",
    "speed_m_s",
    "wx_rad_s",
    "wy_rad_s",
    "wz_rad_s",
    "qx",
    "qy",
    "qz",
    "qw",
    "translational_energy_j",
  ];
  const rows = [header.join(",")];
  for (const frame of result.frames) {
    for (const body of frame.bodies) {
      const definition = definitions.get(body.id);
      const speed = Math.hypot(...body.velocity);
      rows.push(
        [
          csvText(result.scene.name),
          csvText(body.id),
          csvText(definition.label),
          definition.fixed ? 1 : 0,
          definition.mass_kg,
          frame.t_s,
          ...body.position,
          ...body.velocity,
          speed,
          ...body.angular_velocity,
          ...body.rotation,
          definition.fixed ? 0 : 0.5 * definition.mass_kg * speed ** 2,
        ].join(","),
      );
    }
  }
  return "\uFEFF" + rows.join("\r\n") + "\r\n";
}

export function mechanicsProject(scene, notes = "") {
  if (typeof notes !== "string" || notes.length > 4000)
    throw new Error("Deney notu en fazla 4000 karakter olabilir.");
  return {
    format: "yorunge-mechanics",
    version: 1,
    notes,
    scene: structuredClone(scene),
  };
}

export function readMechanicsProject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error("Deney dosyası nesne olmalı.");
  if (!Object.hasOwn(value, "format")) return { scene: value, notes: "" };
  if (value.format !== "yorunge-mechanics" || value.version !== 1)
    throw new Error("Desteklenmeyen mekanik proje biçimi.");
  if (
    Object.keys(value).some(
      (key) => !["format", "version", "notes", "scene"].includes(key),
    )
  )
    throw new Error("Deney dosyasında bilinmeyen alan var.");
  if (
    !value.scene ||
    typeof value.scene !== "object" ||
    Array.isArray(value.scene)
  )
    throw new Error("Sahne eksik.");
  return mechanicsProject(value.scene, value.notes ?? "");
}
