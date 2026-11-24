import { Quaternion } from 'three';
import { createViewport } from './viewport.js';

const $ = id => document.getElementById(id);
const clone = value => structuredClone(value);
const fmt = new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 });
const displayNumber = value => Number(value.toFixed(5));
document.querySelectorAll('input[type="number"]').forEach(input => { input.required = true; input.step = 'any'; });
const MATERIALS = {
  stone: { friction: 0.7, restitution: 0.2 },
  wood: { friction: 0.5, restitution: 0.25 },
  rubber: { friction: 0.9, restitution: 0.8 },
  steel: { friction: 0.3, restitution: 0.45 },
};
const STORAGE = 'yorunge-scene-v1';
const state = { scene: null, selected: null, result: null, time: 0, playing: false, editing: true, busy: false, currentFrame: null, presets: [] };
let viewport;

function message(text, kind = 'info') { $('message').textContent = text; $('message').dataset.kind = kind; }
function selectedBody() { return state.scene?.bodies.find(body => body.id === state.selected); }
function uniqueId(prefix) { return `${prefix}-${crypto.randomUUID().slice(0, 8)}`; }

async function post(path, payload) {
  const response = await fetch(path, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(60000),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'İşlem tamamlanamadı.');
  return data;
}

function persist() {
  try { localStorage.setItem(STORAGE, JSON.stringify(state.scene)); }
  catch { /* File export remains available when local storage is disabled/full. */ }
}

function updateControls() {
  const locked = state.busy || !state.editing;
  $('body-fields').disabled = locked;
  $('edit-hint').hidden = state.editing;
  document.querySelectorAll('[data-add],#gravity,#floor-friction,#duration,#add-spring,#duplicate-button,#delete-button').forEach(el => { el.disabled = locked; });
  document.querySelectorAll('#presets button,#clear-button,#import-button').forEach(el => { el.disabled = state.busy; });
  $('run-button').disabled = !state.scene || state.busy || !viewport;
  $('step-button').disabled = !state.scene || state.busy || !viewport;
  $('edit-button').disabled = state.busy || !state.scene;
  $('save-button').disabled = !state.scene || state.busy;
  $('export-result').disabled = !state.result || state.busy;
  $('timeline').disabled = !state.result || state.busy;
  $('translate-button').disabled = locked;
  $('rotate-button').disabled = locked;
  $('run-button').textContent = state.busy ? 'Hesaplanıyor…' : state.playing ? 'Duraklat' : state.result && !state.editing && state.time < state.result.summary.duration_s ? 'Devam et' : 'Çalıştır';
  $('mode-label').textContent = state.busy ? 'Hesaplanıyor' : state.editing ? 'Kurulum' : state.playing ? 'Oynatılıyor' : state.time >= (state.result?.summary.duration_s ?? Infinity) ? 'Tamamlandı' : 'Duraklatıldı';
}

function loadScene(scene, text) {
  state.scene = clone(scene);
  state.selected = scene.bodies[0]?.id ?? null;
  state.result = null; state.playing = false; state.editing = true; state.time = 0; state.currentFrame = null;
  renderSetup(); persist(); message(text || 'Deney hazır. Nesneleri düzenleyebilir veya Çalıştır düğmesine basabilirsin.');
}

function invalidate(text) {
  state.result = null; state.playing = false; state.editing = true; state.time = 0; state.currentFrame = null;
  renderSetup(); persist(); message(text || 'Ayarlar değişti. Çalıştır ile yeni deneyi hesapla.');
}

function renderSetup() {
  viewport?.setScene(state.scene);
  viewport?.setEditable(state.editing && !state.busy);
  viewport?.select(state.selected);
  $('gravity').value = displayNumber(-state.scene.gravity[1]);
  $('floor-friction').value = displayNumber(state.scene.floor_friction);
  $('duration').value = displayNumber(state.scene.duration_s);
  $('timeline').value = 0; $('timeline').max = state.scene.duration_s;
  $('time-output').textContent = '0,00 s';
  renderBodies(); renderSprings(); renderInspector(); renderReadouts(); updateControls();
}

function renderBodies() {
  $('body-count').textContent = `${state.scene.bodies.length}/60`;
  $('body-list').replaceChildren();
  for (const body of state.scene.bodies) {
    const button = document.createElement('button');
    button.type = 'button'; button.classList.toggle('active', body.id === state.selected);
    button.setAttribute('aria-pressed', String(body.id === state.selected));
    const name = document.createElement('span'); name.textContent = body.label;
    const kind = document.createElement('small'); kind.textContent = body.fixed ? 'Sabit' : 'Serbest';
    button.append(name, kind); button.addEventListener('click', () => selectBody(body.id));
    $('body-list').append(button);
  }
}

function selectBody(id) {
  if (!state.scene) return;
  state.selected = id;
  viewport?.select(id); renderBodies(); renderInspector(); renderReadouts();
}

function renderInspector() {
  const body = selectedBody();
  $('body-form').hidden = !body; $('no-selection').hidden = Boolean(body);
  if (!body) return;
  $('body-label').value = body.label;
  $('material').value = Object.hasOwn(MATERIALS, body.material) ? body.material : 'stone';
  $('mass').value = +(body.mass_kg * 1000).toFixed(3);
  $('fixed').checked = body.fixed;
  $('friction').value = displayNumber(body.friction); $('restitution').value = displayNumber(body.restitution);
  ['x', 'y', 'z'].forEach((axis, i) => {
    $(`size-${axis}`).value = +(body.size[i] * 100).toFixed(3);
    $(`pos-${axis}`).value = +body.position[i].toFixed(4);
    $(`rot-${axis}`).value = +((((body.rotation_deg[i] + 180) % 360 + 360) % 360) - 180).toFixed(3);
    $(`vel-${axis}`).value = +body.velocity[i].toFixed(3);
    $(`spin-${axis}`).value = +body.angular_velocity[i].toFixed(3);
  });
  $('size-y').disabled = body.shape === 'sphere';
  $('size-z').disabled = body.shape !== 'box';
  updateControls();
}

function renderSprings() {
  for (const [id, preferredIndex] of [['spring-a', 0], ['spring-b', 1]]) {
    const select = $(id); const before = select.value;
    select.replaceChildren();
    state.scene.bodies.forEach(body => { const option = document.createElement('option'); option.value = body.id; option.textContent = body.label; select.append(option); });
    if (state.scene.bodies.some(body => body.id === before)) select.value = before;
    else select.value = state.scene.bodies[preferredIndex]?.id ?? state.scene.bodies[0]?.id ?? '';
  }
  $('spring-list').replaceChildren();
  state.scene.springs.forEach(spring => {
    const row = document.createElement('div'); row.className = 'spring-item';
    const text = document.createElement('span');
    text.textContent = `${state.scene.bodies.find(b => b.id === spring.a)?.label} ↔ ${state.scene.bodies.find(b => b.id === spring.b)?.label}`;
    const remove = document.createElement('button'); remove.textContent = 'Kaldır'; remove.disabled = !state.editing;
    remove.addEventListener('click', () => { if (state.busy || !state.editing) return; state.scene.springs = state.scene.springs.filter(s => s.id !== spring.id); invalidate(); });
    row.append(text, remove); $('spring-list').append(row);
  });
}

function renderReadouts() {
  const body = selectedBody();
  const current = state.currentFrame?.bodies.find(b => b.id === state.selected) || body;
  $('selected-label').textContent = body?.label || 'Seçilmedi';
  $('readout-height').textContent = current ? `${fmt.format(current.position[1])} m` : '—';
  $('readout-speed').textContent = current ? `${fmt.format(Math.hypot(...current.velocity))} m/s` : '—';
  $('readout-position').textContent = current ? current.position.map(v => fmt.format(v)).join(' / ') + ' m' : '—';
}

function sampleAt(time) {
  const frames = state.result.frames;
  let low = 0, high = frames.length - 1;
  while (high - low > 1) { const mid = (low + high) >> 1; if (frames[mid].t_s <= time) low = mid; else high = mid; }
  const a = frames[low], b = frames[high];
  const alpha = b.t_s > a.t_s ? Math.max(0, Math.min(1, (time - a.t_s) / (b.t_s - a.t_s))) : 0;
  return { t_s: time, bodies: a.bodies.map((body, i) => {
    const next = b.bodies[i];
    const lerp = key => body[key].map((value, axis) => value + (next[key][axis] - value) * alpha);
    const quaternion = new Quaternion().fromArray(body.rotation).slerp(new Quaternion().fromArray(next.rotation), alpha).toArray();
    return { ...body, position: lerp('position'), rotation: quaternion, velocity: lerp('velocity'), angular_velocity: lerp('angular_velocity') };
  }) };
}

function showTime(time) {
  if (!state.result) return;
  state.time = Math.max(0, Math.min(time, state.result.summary.duration_s));
  state.currentFrame = sampleAt(state.time);
  viewport?.setFrame(state.currentFrame);
  $('timeline').value = state.time;
  $('time-output').textContent = `${fmt.format(state.time)} s`;
  renderReadouts();
}

async function prepareResult() {
  if (state.result) return true;
  state.busy = true; viewport?.setEditable(false); updateControls();
  message('Fizik motoru deneyi hesaplıyor…');
  try {
    const result = await post('/api/lab/simulate', state.scene);
    if (!result.frames?.length || !result.summary || !Number.isFinite(result.summary.duration_s)) throw new Error('Sonuç biçimi okunamadı.');
    state.result = result;
    $('timeline').max = result.summary.duration_s;
    message(`${result.summary.body_count} nesnenin ${fmt.format(result.summary.duration_s)} saniyelik deneyi hazır.`);
    return true;
  } catch (error) {
    message(`Hesaplanamadı: ${error.message}. Sunucunun açık olduğunu ve değerleri kontrol et.`, 'error');
    return false;
  } finally {
    state.busy = false; viewport?.setEditable(state.editing); updateControls();
  }
}

async function play() {
  if (state.busy) return;
  if (state.playing) { state.playing = false; updateControls(); return; }
  if (!await prepareResult()) return;
  if (state.editing || state.time >= state.result.summary.duration_s) showTime(0);
  state.editing = false; state.playing = true;
  viewport.setEditable(false); renderSprings(); updateControls();
}

function tick(dt) {
  if (!state.playing || !state.result) return;
  showTime(state.time + dt * Number($('playback-speed').value));
  if (state.time >= state.result.summary.duration_s) { state.playing = false; updateControls(); }
}

function addBody(shape) {
  if (!state.editing || state.busy) return;
  if (state.scene.bodies.length >= 60) { message('Bu sürümde en fazla 60 nesne eklenebilir.', 'error'); return; }
  const label = { sphere: 'Küre', box: 'Kutu', cylinder: 'Silindir' }[shape];
  const body = {
    id: uniqueId(shape), label: `${label} ${state.scene.bodies.length + 1}`, shape,
    size: [0.6, 0.6, 0.6], position: [(state.scene.bodies.length % 5) * 1.1 - 2, 3, 0],
    rotation_deg: [0, 0, 0], velocity: [0, 0, 0], angular_velocity: [0, 0, 0],
    mass_kg: 1, ...MATERIALS.wood, fixed: false, material: 'wood',
  };
  state.scene.bodies.push(body); state.selected = body.id; invalidate(`${label} eklendi. Renkli eksenlerle taşı veya sağdaki özelliklerini değiştir.`);
}

function editBody() {
  if (state.busy || !state.editing) return;
  const body = selectedBody(); if (!body) return;
  if (!$('body-form').reportValidity()) return;
  const updated = clone(body);
  updated.label = $('body-label').value.trim() || 'Nesne';
  updated.mass_kg = $('mass').valueAsNumber / 1000;
  updated.fixed = $('fixed').checked; updated.material = $('material').value;
  updated.friction = $('friction').valueAsNumber; updated.restitution = $('restitution').valueAsNumber;
  ['x', 'y', 'z'].forEach((axis, i) => {
    updated.size[i] = $(`size-${axis}`).valueAsNumber / 100;
    updated.position[i] = $(`pos-${axis}`).valueAsNumber;
    updated.rotation_deg[i] = $(`rot-${axis}`).valueAsNumber;
    updated.velocity[i] = $(`vel-${axis}`).valueAsNumber;
    updated.angular_velocity[i] = $(`spin-${axis}`).valueAsNumber;
  });
  if (updated.shape === 'sphere') updated.size = [updated.size[0], updated.size[0], updated.size[0]];
  if (updated.shape === 'cylinder') updated.size[2] = updated.size[0];
  Object.assign(body, updated); invalidate();
}

function download(name, data) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a'); link.href = url; link.download = name; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

$('run-button').addEventListener('click', play);
$('step-button').addEventListener('click', async () => {
  if (state.busy || !await prepareResult()) return;
  state.playing = false; state.editing = false; viewport.setEditable(false);
  showTime(state.time + 1 / state.scene.sample_hz); renderSprings(); updateControls();
});
$('edit-button').addEventListener('click', () => {
  state.playing = false; state.editing = true; state.time = 0; state.currentFrame = null;
  renderSetup(); message('Başlangıç düzeni gösteriliyor. Nesneleri düzenleyebilirsin.');
});
$('timeline').addEventListener('input', () => {
  state.playing = false; state.editing = false; viewport.setEditable(false);
  showTime($('timeline').valueAsNumber); updateControls();
});
document.querySelectorAll('[data-add]').forEach(button => button.addEventListener('click', () => addBody(button.dataset.add)));
$('body-form').addEventListener('submit', event => event.preventDefault());
$('body-fields').addEventListener('change', event => {
  if (event.target.id === 'material') {
    const properties = MATERIALS[$('material').value];
    $('friction').value = properties.friction; $('restitution').value = properties.restitution;
  }
  editBody();
});
for (const [id, callback] of [
  ['gravity', value => { state.scene.gravity[1] = -value; }],
  ['floor-friction', value => { state.scene.floor_friction = value; }],
  ['duration', value => { state.scene.duration_s = value; }],
]) $(id).addEventListener('change', () => { if (!state.editing || state.busy || !$(id).reportValidity()) return; callback($(id).valueAsNumber); invalidate(); });
$('duplicate-button').addEventListener('click', () => {
  const body = selectedBody(); if (!body || !state.editing || state.busy) return;
  if (state.scene.bodies.length >= 60) { message('En fazla 60 nesne eklenebilir.', 'error'); return; }
  const duplicate = clone(body); duplicate.id = uniqueId(body.shape); duplicate.label = `${body.label.slice(0, 72)} kopya`;
  duplicate.position[0] = Math.min(39, duplicate.position[0] + 1); state.scene.bodies.push(duplicate); state.selected = duplicate.id; invalidate();
});
$('delete-button').addEventListener('click', () => {
  if (!state.editing || state.busy || !state.selected) return;
  state.scene.bodies = state.scene.bodies.filter(b => b.id !== state.selected);
  state.scene.springs = state.scene.springs.filter(s => s.a !== state.selected && s.b !== state.selected);
  state.selected = state.scene.bodies[0]?.id ?? null; invalidate('Nesne ve ona bağlı yaylar kaldırıldı.');
});
$('add-spring').addEventListener('click', () => {
  if (!state.editing || state.busy) return;
  const a = $('spring-a').value, b = $('spring-b').value;
  if (!a || !b || a === b) { message('Yay için iki farklı nesne seç.', 'error'); return; }
  if (state.scene.springs.length >= 16) { message('En fazla 16 yay eklenebilir.', 'error'); return; }
  if (!['spring-length', 'spring-stiffness', 'spring-damping'].every(id => $(id).reportValidity())) return;
  state.scene.springs.push({ id: uniqueId('spring'), a, b, rest_length_m: $('spring-length').valueAsNumber, stiffness_n_m: $('spring-stiffness').valueAsNumber, damping_n_s_m: $('spring-damping').valueAsNumber });
  invalidate('Yay bağlandı. Doğal uzunluk ve başlangıç mesafesi farklıysa yay kuvvet uygular.');
});
for (const [id, mode] of [['translate-button', 'translate'], ['rotate-button', 'rotate']]) $(id).addEventListener('click', () => {
  viewport.setMode(mode);
  ['translate-button', 'rotate-button'].forEach(other => { $(other).classList.toggle('selected', other === id); $(other).setAttribute('aria-pressed', String(other === id)); });
});
$('camera-button').addEventListener('click', () => viewport?.resetCamera());
$('clear-button').addEventListener('click', () => {
  loadScene({ schema_version: 1, name: 'Yeni deney', gravity: [0, -9.81, 0], duration_s: 10, sample_hz: 30, floor_friction: 0.7, floor_restitution: 0.2, bodies: [], springs: [] }, 'Boş deney hazır. Soldan bir nesne ekle.');
});
$('save-button').addEventListener('click', () => { if (state.scene) download('yorunge-deney.json', state.scene); });
$('export-result').addEventListener('click', () => { if (state.result) download('yorunge-3b-sonuc.json', state.result); });
$('import-button').addEventListener('click', () => $('scene-file').click());
$('scene-file').addEventListener('change', async () => {
  const file = $('scene-file').files[0]; $('scene-file').value = ''; if (!file) return;
  if (file.size > 256 * 1024) { message('Deney dosyası en fazla 256 KiB olabilir.', 'error'); return; }
  state.busy = true; updateControls();
  try { const scene = await post('/api/lab/validate', JSON.parse(await file.text())); loadScene(scene, 'Deney dosyası yüklendi.'); }
  catch (error) { message(`Dosya yüklenemedi: ${error.message}`, 'error'); }
  finally { state.busy = false; updateControls(); viewport?.setEditable(state.editing); }
});
$('modules-button').addEventListener('click', () => { $('modules-panel').open = true; $('modules-panel').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); });

async function initialize() {
  try {
    viewport = createViewport($('viewport'), {
      onSelect: selectBody,
      onTransform: ({ id, position, rotation_deg }) => {
        if (!state.scene || !state.editing || state.busy) return;
        const body = state.scene.bodies.find(b => b.id === id); if (!body) return;
        body.position = position.map((v, i) => Math.max(i === 1 ? 0 : -40, Math.min(40, v)));
        body.rotation_deg = rotation_deg;
        invalidate();
      },
      onTick: tick,
    });
    const response = await fetch('/api/lab/presets');
    if (!response.ok) throw new Error('Hazır deneyler sunucudan alınamadı.');
    const data = await response.json(); state.presets = data.presets;
    for (const preset of data.presets) {
      const button = document.createElement('button'); button.type = 'button';
      const name = document.createElement('span'); name.textContent = preset.label;
      const description = document.createElement('small'); description.textContent = preset.description;
      button.append(name, description); button.addEventListener('click', () => { loadScene(preset.scene); viewport.resetCamera(); });
      $('presets').append(button);
    }
    for (const module of data.modules) {
      const card = document.createElement('div'); card.className = `module-card ${module.status}`;
      const name = document.createElement('b'); name.textContent = module.name;
      const status = document.createElement('span'); status.textContent = module.status === 'available' ? 'Bu sürümde çalışıyor' : 'Planlanıyor';
      card.append(name, status); $('module-list').append(card);
    }
    let restored = null;
    try { const stored = localStorage.getItem(STORAGE); if (stored && stored.length <= 256 * 1024) restored = await post('/api/lab/validate', JSON.parse(stored)); } catch { /* Ignore invalid old saved scenes. */ }
    loadScene(restored || data.presets[0].scene, restored ? 'Son düzenlediğin deney geri yüklendi.' : 'Bir nesne seçip taşı; ardından Çalıştır ile deneyi izle.');
    viewport.resetCamera();
  } catch (error) {
    $('canvas-error').hidden = false; $('canvas-error').textContent = `Laboratuvar açılamadı: ${error.message}. Sunucunun açık ve tarayıcının WebGL desteğinin etkin olduğunu kontrol et.`;
    message('3B laboratuvar başlatılamadı.', 'error');
  }
}
initialize();
