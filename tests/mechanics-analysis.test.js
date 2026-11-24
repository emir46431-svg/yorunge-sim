import test from 'node:test';
import assert from 'node:assert/strict';
import { bodySeries, bodyMetrics, resultsCsv, mechanicsProject, readMechanicsProject } from '../web/lab/analysis.js';

const frameBody = (id, position, velocity) => ({ id, position, velocity, angular_velocity: [0, 0, 0], rotation: [0, 0, 0, 1] });
const result = () => ({
  scene: { name: 'Sabit hız', bodies: [{ id: 'moving', label: 'Hareketli', mass_kg: 2, fixed: false }, { id: 'fixed', label: 'Sabit', mass_kg: 10, fixed: true }] },
  frames: [
    { t_s: 0, bodies: [frameBody('moving', [0, 2, 0], [3, 4, 0]), frameBody('fixed', [0, 0, 0], [0, 0, 0])] },
    { t_s: 1, bodies: [frameBody('fixed', [0, 0, 0], [0, 0, 0]), frameBody('moving', [3, 6, 0], [3, 4, 0])] },
    { t_s: 2, bodies: [frameBody('moving', [6, 10, 0], [3, 4, 0]), frameBody('fixed', [0, 0, 0], [0, 0, 0])] },
  ],
});

test('SI metrics identify bodies by id even when frame ordering changes', () => {
  const metrics = bodyMetrics(result(), 'moving');
  assert.deepEqual(metrics, { duration_s: 2, samples: 3, displacement_m: 10, sampled_distance_m: 10, max_sampled_speed_m_s: 5, final_speed_m_s: 5, final_translational_energy_j: 25 });
  assert.equal(bodyMetrics(result(), 'fixed').final_translational_energy_j, 0);
  assert.equal(bodyMetrics(result(), 'absent'), null);
});

test('sampled path length is distinct from net displacement', () => {
  const data = result();
  data.frames[2].bodies[0].position = [0, 2, 0];
  assert.equal(bodyMetrics(data, 'moving').displacement_m, 0);
  assert.equal(bodyMetrics(data, 'moving').sampled_distance_m, 10);
});

test('CSV exports every body and frame with SI columns and decimal points', () => {
  const data = result();
  data.frames[0].bodies[0].position[0] = -0.125;
  const rows = resultsCsv(data).trim().split('\r\n');
  assert.equal(rows.length, 7);
  const columns = rows[0].replace(/^\uFEFF/, '').split(',');
  assert.equal(columns[6], 'x_m');
  assert.equal(columns[13], 'wx_rad_s');
  const first = rows[1].split(',');
  assert.equal(first[6], '-0.125');
  assert.equal(first[4], '2');
  assert.equal(first[12], '5');
  assert.equal(first[20], '25');
});

test('CSV quotes Unicode, commas, newlines and formula-like text safely', () => {
  const data = result();
  data.scene.name = 'Ölçüm, "A"\nB';
  data.scene.bodies[0].label = '  =SUM(A1:A2)';
  const csv = resultsCsv(data);
  assert.ok(csv.includes('"Ölçüm, ""A""\nB"'));
  assert.ok(csv.includes('"\'  =SUM(A1:A2)"'));
});

test('bad or incomplete calculated data is rejected rather than exported as NaN', () => {
  for (const mutate of [
    data => { data.frames[1].t_s = 0; },
    data => { data.frames[0].bodies[0].velocity[1] = NaN; },
    data => { data.frames[0].bodies.pop(); },
    data => { data.frames[0].bodies[1].id = 'moving'; },
    data => { data.frames[0].bodies[0].rotation = [0, 1]; },
  ]) {
    const data = result(); mutate(data);
    assert.throws(() => resultsCsv(data));
    assert.throws(() => bodySeries(data, 'moving'));
  }
});

test('experiment envelope preserves notes and accepts previous raw scenes', () => {
  const scene = { schema_version: 1, name: 'Deney', bodies: [] };
  const project = mechanicsProject(scene, 'Hipotez: hız sabit.');
  scene.name = 'Değişti';
  assert.equal(project.scene.name, 'Deney');
  assert.deepEqual(readMechanicsProject(JSON.parse(JSON.stringify(project))), project);
  assert.deepEqual(readMechanicsProject(scene), { scene, notes: '' });
  assert.throws(() => readMechanicsProject({ ...project, version: 2 }));
  assert.throws(() => readMechanicsProject({ ...project, result: {} }));
  assert.throws(() => mechanicsProject(scene, 'x'.repeat(4001)));
});
