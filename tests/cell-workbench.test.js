import test from "node:test";
import assert from "node:assert/strict";
import { PARAMS, DEFAULT_EXPERIMENT, blankProject, validateExperiment, parseSweepValues, sweepExperiments, validateProjectEnvelope, validateSimulation, aggregateFrame, resultsCsv } from "../web/cell-workbench/data.js";

const experiment = () => ({ ...DEFAULT_EXPERIMENT, duration_s: 2, sample_hz: 1, inside_concentration_mm: 300, outside_concentration_mm: 300, water_permeability_pl_s_mm: 0, solute_permeability_pl_s: 0 });
const run = () => ({ id: "run-fixture", label: "Kontrol", created_at: "2026-11-24T12:00:00.000Z", experiment: experiment(), origin: { kind: "single", parameter: null, value: null } });
function simulation(input = experiment()) {
  const totalVolume = input.cell_volume_pl + input.external_volume_pl;
  const totalSolute = input.cell_volume_pl * input.inside_concentration_mm + input.external_volume_pl * input.outside_concentration_mm;
  const frames = [0, 1, 2].map(t_s => {
    const ids = input.division_at_s !== null && t_s >= input.division_at_s ? ["cell-1a", "cell-1b"] : ["cell-1"];
    return { t_s, cells: ids.map(id => ({ id, volume_pl: input.cell_volume_pl / ids.length, solute_fmol: input.cell_volume_pl * input.inside_concentration_mm / ids.length, concentration_mm: input.inside_concentration_mm })), external_volume_pl: input.external_volume_pl, external_solute_fmol: input.external_volume_pl * input.outside_concentration_mm, external_concentration_mm: input.outside_concentration_mm };
  });
  return { experiment: { ...input }, frames, summary: { status: "completed", elapsed_s: 2, final_cell_count: frames.at(-1).cells.length, initial_total_volume_pl: totalVolume, final_total_volume_pl: totalVolume, volume_conservation_error_pl: 0, initial_total_solute_fmol: totalSolute, final_total_solute_fmol: totalSolute, solute_conservation_error_fmol: 0, max_volume_conservation_error_pl: 0, max_solute_conservation_error_fmol: 0 }, events: [], assumptions: [] };
}
const envelope = () => ({ ...blankProject(), runs: [run()], compare_ids: ["run-fixture"], selected_id: "run-fixture" });

test("input validation matches Rust numeric limits including integer sampling and optional division", () => {
  assert.deepEqual(validateExperiment(DEFAULT_EXPERIMENT), DEFAULT_EXPERIMENT);
  for (const p of PARAMS) {
    for (const value of [p.min, p.max]) assert.equal(validateExperiment({ ...DEFAULT_EXPERIMENT, [p.key]: value })[p.key], value);
    for (const value of [p.min - 1, p.max + 1, NaN, Infinity, -Infinity, String(p.min), null, true]) assert.throws(() => validateExperiment({ ...DEFAULT_EXPERIMENT, [p.key]: value }), Error, `${p.key}=${value}`);
  }
  assert.throws(() => validateExperiment({ ...DEFAULT_EXPERIMENT, sample_hz: 2.5 }));
  for (const division_at_s of [0, -1, 120, NaN, Infinity, "30", false]) assert.throws(() => validateExperiment({ ...DEFAULT_EXPERIMENT, division_at_s }));
  assert.equal(validateExperiment({ ...DEFAULT_EXPERIMENT, division_at_s: 0.001 }).division_at_s, 0.001);
  assert.equal(validateExperiment({ ...DEFAULT_EXPERIMENT, division_at_s: 119.999 }).division_at_s, 119.999);
  assert.throws(() => validateExperiment({ ...DEFAULT_EXPERIMENT, extra: 1 }));
  const missing = { ...DEFAULT_EXPERIMENT }; delete missing.sample_hz;
  assert.throws(() => validateExperiment(missing));
  assert.throws(() => validateExperiment([]));
});

test("scan parses 2–6 distinct semicolon values and validates every modified experiment", () => {
  assert.deepEqual(parseSweepValues(" 0,5 ; 1 ; 2.5; 3e-1; +4; 5 "), [0.5, 1, 2.5, 0.3, 4, 5]);
  for (const raw of ["1", "1;2;3;4;5;6;7", "1;", ";2", "1;;2", "1;1.0", "0;-0", "1;NaN", "1;Infinity", "1;1e999", "1;0x10", "1,2,3", "1;2,3.4", "1;alert(1)", "x".repeat(513)]) assert.throws(() => parseSweepValues(raw), Error, raw);
  const base = experiment();
  const scan = sweepExperiments(base, "outside_concentration_mm", [0, 1000]);
  assert.deepEqual(scan.map(item => item.outside_concentration_mm), [0, 1000]);
  assert.equal(base.outside_concentration_mm, 300, "base inputs are not mutated");
  assert.deepEqual(scan.map(item => item.duration_s), [2, 2]);
  assert.throws(() => sweepExperiments(base, "outside_concentration_mm", [0, 1001]));
  assert.throws(() => sweepExperiments(base, "sample_hz", [1, 1.5]));
  assert.throws(() => sweepExperiments(base, "division_at_s", [1, 2]));
  assert.throws(() => sweepExperiments({ ...base, division_at_s: 1 }, "duration_s", [1, 2]));
  assert.throws(() => sweepExperiments(base, "invented", [1, 2]));
  assert.throws(() => sweepExperiments(base, "sample_hz", [1, 1]));
  assert.throws(() => sweepExperiments(base, "sample_hz", Array(2)));
});

test("project envelope preserves inputs, IDs, UTC provenance and comparison without computed output", () => {
  const raw = envelope();
  raw.name = "NaCl koşulları"; raw.hypothesis = "Dış derişim değişkeni"; raw.notes = "İlk gözlem\nİkinci gözlem";
  raw.runs[0].origin = { kind: "scan", parameter: "outside_concentration_mm", value: 300 };
  assert.deepEqual(validateProjectEnvelope(JSON.stringify(raw)), raw);
  const result = validateProjectEnvelope(raw); result.runs[0].experiment.cell_volume_pl = 3;
  assert.equal(raw.runs[0].experiment.cell_volume_pl, 1, "validated inputs do not alias caller inputs");
  assert.deepEqual(validateProjectEnvelope(blankProject()), blankProject());
});

test("strict envelope rejects result injection, unresolved/duplicate references, bad provenance and resource overflow", () => {
  const mutations = [
    p => { p.result = {}; }, p => { p.version = 2; }, p => { p.format = "other"; },
    p => { p.runs[0].result = simulation(); }, p => { p.runs[0].id = "=SUM(1)"; },
    p => { p.runs.push(structuredClone(p.runs[0])); }, p => { p.runs[0].experiment.sample_hz = 11; },
    p => { p.runs[0].origin.parameter = "duration_s"; }, p => { p.runs[0].origin.kind = "imported-result"; },
    p => { p.runs[0].origin = { kind: "scan", parameter: "outside_concentration_mm", value: 150 }; },
    p => { p.runs[0].created_at = "2026-02-30T12:00:00.000Z"; },
    p => { p.runs[0].created_at = "2026-11-24T24:00:00.000Z"; },
    p => { p.compare_ids = ["missing"]; }, p => { p.compare_ids = ["run-fixture", "run-fixture"]; },
    p => { p.selected_id = "missing"; }, p => { p.name = " "; }, p => { p.name = "x".repeat(121); },
    p => { p.notes = "x".repeat(10001); }, p => { p.hypothesis = "x".repeat(2001); },
    p => { p.scan.parameter = "toString"; }, p => { p.scan.values = 12; },
    p => { p.runs = Array(1); }, p => { p.runs = Array.from({ length: 13 }, (_, i) => ({ ...run(), id: `run-${i}` })); },
    p => { p.runs = Array.from({ length: 5 }, (_, i) => ({ ...run(), id: `run-${i}` })); p.compare_ids = p.runs.map(r => r.id); p.selected_id = null; },
  ];
  for (const mutate of mutations) { const raw = envelope(); mutate(raw); assert.throws(() => validateProjectEnvelope(raw)); }
  assert.throws(() => validateProjectEnvelope(JSON.stringify(envelope()).replace('"draft":{', '"draft":{"__proto__":{},')));
  assert.throws(() => validateProjectEnvelope("ü".repeat(131073)), /256 KiB/);
  assert.throws(() => validateProjectEnvelope("{broken"));
  assert.throws(() => validateProjectEnvelope(Object.create({ name: "inherited" })));
});

test("solver response validation accepts equilibrium and division data, rejects inconsistent or nonfinite output", () => {
  const input = experiment(), good = simulation(input);
  assert.equal(validateSimulation(good, input), good);
  const divided = { ...input, division_at_s: 1 };
  assert.equal(validateSimulation(simulation(divided), divided).frames[1].cells.length, 2);
  const mutations = [
    r => { r.experiment.sample_hz = 2; }, r => { r.frames = []; },
    r => { r.frames[1].t_s = 0; }, r => { r.frames[1].t_s = NaN; }, r => { r.frames[2].t_s = 3; },
    r => { r.frames[1].cells[0].volume_pl = Infinity; }, r => { r.frames[1].cells[0].volume_pl = 0; },
    r => { r.frames[1].cells[0].solute_fmol = -1; }, r => { r.frames[1].cells[0].concentration_mm = 20; },
    r => { r.frames[1].cells[0].id = "fake-cell"; }, r => { r.frames[1].external_volume_pl = 20; },
    r => { r.summary.elapsed_s = 1; }, r => { r.summary.max_volume_conservation_error_pl = Infinity; },
    r => { r.summary.initial_total_solute_fmol = 0; }, r => { r.summary.status = "alive"; },
    r => { r.events = [{ t_s: 10, kind: "division", message: "future event" }]; },
  ];
  for (const mutate of mutations) { const raw = simulation(input); mutate(raw); assert.throws(() => validateSimulation(raw, input)); }
  const stopped = simulation(input); stopped.frames.pop(); stopped.summary.status = "model_limit"; stopped.summary.elapsed_s = 1;
  assert.equal(validateSimulation(stopped, input).summary.elapsed_s, 1, "limited output ends at the actual computed time");
});

test("CSV uses unit-bearing schema and emits actual per-pool values with run and daughter IDs", () => {
  const record = run(); record.experiment.division_at_s = 1; record.label = '=HYPERLINK("x")';
  const result = simulation(record.experiment);
  const csv = resultsCsv([record], new Map([[record.id, result]]));
  const lines = csv.trim().split("\r\n");
  assert.equal(lines[0], "run_id,run_label,created_at_utc,status,pool_id,time_s,volume_pl,solute_fmol,concentration_mm");
  assert.equal(lines.length, 9, "one cell+external at t=0, two daughters+external at t=1 and t=2");
  assert.ok(csv.includes('"cell-1",0,1,300,300'));
  assert.ok(csv.includes('"cell-1a",1,0.5,150,300'));
  assert.ok(csv.includes('"cell-1b",2,0.5,150,300'));
  assert.ok(csv.includes('"external",2,10,3000,300'));
  assert.ok(csv.includes('"\'=HYPERLINK(""x"")"'), "CSV formula-like labels are escaped");
  assert.ok(!/NaN|Infinity|undefined/.test(csv));
  for (const line of lines.slice(1)) {
    assert.ok(line.startsWith('"run-fixture",'));
    const numerical = line.split(",").slice(-4).map(Number);
    assert.ok(numerical.every(Number.isFinite));
  }
  result.frames[1].external_concentration_mm = NaN;
  assert.throws(() => resultsCsv([record], new Map([[record.id, result]])));
  assert.throws(() => resultsCsv([record], new Map()));
});

test("plot aggregation preserves total inner volume and weights concentration by actual cell volume", () => {
  const frame = { t_s: 3, cells: [{ volume_pl: 1, solute_fmol: 100 }, { volume_pl: 3, solute_fmol: 900 }], external_concentration_mm: 50 };
  assert.deepEqual(aggregateFrame(frame), { t_s: 3, volume_pl: 4, concentration_mm: 250, external_concentration_mm: 50 });
});
