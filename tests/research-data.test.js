import test from "node:test";
import assert from "node:assert/strict";
import {
  parseMeasurements,
  compareMeasurements,
  resultsCsv,
  validateProjectEnvelope,
  parseSweepValues,
} from "../web/research/data.js";

const close = (actual, expected) =>
  assert.ok(Math.abs(actual - expected) < 1e-12, `${actual} != ${expected}`);
const frame = (t_s, product_um) => ({
  t_s,
  substrate_um: 20 - product_um,
  product_um,
  rate_um_s: 1,
});
const project = () => ({
  format: "yorunge-research",
  version: 1,
  title: "Enzim deneyleri",
  notes: "Gerçek ölçüm karşılaştırması",
  runs: [
    {
      id: "run-1",
      label: "Kontrol",
      created_at: "2026-11-24T12:34:56Z",
      notes: "",
      experiment: {
        substrate_um: 20,
        enzyme_um: 1,
        inhibition: "none",
        duration_s: 10,
        samples: 101,
      },
    },
  ],
  measurements: [
    { time_s: 0, product_um: 0 },
    { time_s: 10, product_um: 9.5 },
  ],
});

test("CSV accepts BOM, CRLF, blank lines, quoted/reordered headers and decimal comma", () => {
  const csv =
    '\uFEFF\r\n  \r\n"product_um"; "time_s"\r\n"2,5";"1,5"\r\n\r\n0;0\r\n';
  assert.deepEqual(parseMeasurements(csv), [
    { time_s: 0, product_um: 0 },
    { time_s: 1.5, product_um: 2.5 },
  ]);
  assert.deepEqual(parseMeasurements('time_s,product_um\n".5","2e-1"'), [
    { time_s: 0.5, product_um: 0.2 },
  ]);
});

test("CSV sorts times stably and preserves replicate and noisy decreasing observations", () => {
  const points = parseMeasurements("time_s,product_um\n2,1\n0,0\n1,3\n1,2.5\n");
  assert.deepEqual(points, [
    { time_s: 0, product_um: 0 },
    { time_s: 1, product_um: 3 },
    { time_s: 1, product_um: 2.5 },
    { time_s: 2, product_um: 1 },
  ]);
});

test("CSV rejects malformed quotes, wrong columns, absent measurements and invalid numbers", () => {
  const invalid = [
    "",
    " \n",
    "time_s,product_um\n",
    "time_s,product_um,extra\n0,1,2",
    "time_s,time_s\n0,1",
    "time,product_um\n0,1",
    "time_s,product_um\n0,1,2",
    "time_s,product_um\n0",
    "time_s,product_um\n0,",
    "time_s,product_um\n,",
    'time_s,product_um\n0,""',
    'time_s,product_um\n0,"1',
    'time_s,product_um\n0,"1"oops',
    'time_s,product_um\n0,1"',
    'time_s,product_um\n0,"1""2"',
    'time_s,product_um\n0,"1,2"',
    "time_s,product_um\n0,NaN",
    "time_s,product_um\nInfinity,1",
    "time_s,product_um\n0,-1",
    "time_s,product_um\n-1,0",
    "time_s,product_um\n0,1e999",
    "time_s,product_um\n0,0x10",
    "time_s;product_um\n0;1.2,3",
  ];
  for (const csv of invalid)
    assert.throws(() => parseMeasurements(csv), Error, csv);
});

test("CSV applies inclusive numeric bounds and rejects invalid bound options", () => {
  assert.deepEqual(
    parseMeasurements("time_s,product_um\n10,20", {
      maxTime: 10,
      maxProduct: 20,
    }),
    [{ time_s: 10, product_um: 20 }],
  );
  assert.throws(
    () => parseMeasurements("time_s,product_um\n11,20", { maxTime: 10 }),
    /zamanı/,
  );
  assert.throws(
    () => parseMeasurements("time_s,product_um\n10,21", { maxProduct: 20 }),
    /ürün/,
  );
  for (const maxTime of [-1, NaN, Infinity, "10"])
    assert.throws(() =>
      parseMeasurements("time_s,product_um\n0,0", { maxTime }),
    );
});

test("CSV enforces row count and UTF-8 byte size before parsing", () => {
  const valid = `time_s,product_um\n${"0,0\n".repeat(1000)}`;
  assert.equal(parseMeasurements(valid).length, 1000);
  assert.throws(() => parseMeasurements(`${valid}0,0\n`), /1000/);
  assert.throws(() => parseMeasurements("ü".repeat(131073)), /256 KiB/);
});

test("comparison interpolates endpoints and midpoint and reports independently checked metrics", () => {
  const frames = [frame(10, 10), frame(0, 0)];
  const points = [
    { time_s: 10, product_um: 12 },
    { time_s: 0, product_um: 1 },
    { time_s: 5, product_um: 3 },
  ];
  const result = compareMeasurements(frames, points);
  assert.equal(result.count, 3);
  close(result.rmse_um, Math.sqrt(3));
  close(result.mae_um, 5 / 3);
  assert.equal(result.max_abs_error_um, 2);
  assert.deepEqual(
    result.predictions.map((point) => point.predicted_um),
    [0, 5, 10],
  );
  assert.deepEqual(
    result.predictions.map((point) => point.residual_um),
    [-1, 2, -2],
  );
  assert.equal(frames[0].t_s, 10, "caller frame order is not mutated");
  assert.equal(points[0].time_s, 10, "caller observations are not mutated");
});

test("comparison retains replicate weighting and does not impose product monotonicity", () => {
  const result = compareMeasurements(
    [frame(0, 10), frame(2, 4)],
    [
      { time_s: 1, product_um: 6 },
      { time_s: 1, product_um: 8 },
      { time_s: 2, product_um: 4 },
    ],
  );
  assert.equal(result.count, 3);
  assert.deepEqual(
    result.predictions.map((point) => point.predicted_um),
    [7, 7, 4],
  );
  close(result.rmse_um, Math.sqrt(2 / 3));
  close(result.mae_um, 2 / 3);
  const exact = compareMeasurements(
    [frame(0, 0)],
    [{ time_s: 0, product_um: 0 }],
  );
  assert.equal(exact.rmse_um, 0);
});

test("comparison rejects duplicate frame times, extrapolation, empty and nonfinite input", () => {
  const measured = [{ time_s: 0, product_um: 0 }];
  assert.throws(
    () => compareMeasurements([frame(0, 0), frame(0, 1)], measured),
    /yinelenen/,
  );
  assert.throws(
    () => compareMeasurements([frame(1, 1), frame(2, 2)], measured),
    /aralığı dışında/,
  );
  assert.throws(
    () =>
      compareMeasurements(
        [frame(0, 0), frame(2, 2)],
        [{ time_s: 2.00001, product_um: 1 }],
      ),
    /aralığı dışında/,
  );
  assert.throws(() => compareMeasurements([], measured));
  assert.throws(() => compareMeasurements([frame(0, 0)], []));
  assert.throws(() => compareMeasurements([frame(0, NaN)], measured));
  assert.throws(() =>
    compareMeasurements([frame(0, 0)], [{ time_s: 0, product_um: -1 }]),
  );
  assert.throws(() =>
    compareMeasurements(
      [frame(0, 0)],
      [{ time_s: 0, product_um: 0, invented: true }],
    ),
  );
});

test("comparison avoids overflow in RMS accumulation for finite large observations", () => {
  const result = compareMeasurements(
    [
      { t_s: 0, product_um: 0 },
      { t_s: 1, product_um: 0 },
    ],
    [
      { time_s: 0, product_um: 1e300 },
      { time_s: 1, product_um: 1e300 },
    ],
  );
  assert.equal(result.rmse_um, 1e300);
  assert.equal(result.mae_um, 1e300);
});

test("result CSV exports only IDs and fixed numeric columns with spreadsheet-safe escaping", () => {
  const csv = resultsCsv([
    {
      id: "run-1",
      label: "=malicious()",
      notes: "@other()",
      result: { frames: [frame(0, 0), frame(1, 1)] },
    },
  ]);
  assert.equal(
    csv,
    'run_id,time_s,substrate_um,product_um,rate_um_s\r\n"run-1",0,20,0,1\r\n"run-1",1,19,1,1\r\n',
  );
  for (const id of ["=SUM(1,2)", "+cmd", "-1+2", "@SUM(1)", "\t=SUM(1)"]) {
    const output = resultsCsv([{ id, result: { frames: [frame(0, 0)] } }]);
    assert.ok(output.split("\r\n")[1].startsWith("\"'"), id);
  }
  assert.match(
    resultsCsv([{ id: 'a"b,c', result: { frames: [frame(0, 0)] } }]),
    /"a""b,c"/,
  );
  assert.throws(() =>
    resultsCsv([{ id: "run-1", result: { frames: [frame(0, NaN)] } }]),
  );
  assert.throws(() => resultsCsv([{ id: "run-1", result: { frames: [] } }]));
});

test("project validation returns detached bounded data and canonical ISO dates", () => {
  const raw = project();
  raw.runs[0].created_at = "2026-11-24T15:34:56+03:00";
  raw.measurements.reverse();
  const parsed = validateProjectEnvelope(JSON.stringify(raw));
  assert.equal(parsed.runs[0].created_at, "2026-11-24T12:34:56.000Z");
  assert.deepEqual(
    parsed.measurements.map((point) => point.time_s),
    [0, 10],
  );
  const detached = validateProjectEnvelope(raw);
  detached.runs[0].experiment.substrate_um = 99;
  assert.equal(raw.runs[0].experiment.substrate_um, 20);
  assert.equal("result" in detached.runs[0], false);
  const defaults = {
    format: "yorunge-research",
    version: 1,
    title: "",
    runs: [],
  };
  assert.deepEqual(validateProjectEnvelope(defaults), {
    ...defaults,
    notes: "",
    measurements: [],
  });
});

test("project accepts partial enzyme parameters and leaves scientific ranges to backend", () => {
  const raw = project();
  raw.runs[0].experiment = {};
  assert.deepEqual(validateProjectEnvelope(raw).runs[0].experiment, {});
  for (const inhibition of [
    "none",
    "competitive",
    "noncompetitive",
    "uncompetitive",
    "mixed",
  ]) {
    raw.runs[0].experiment = {
      inhibition,
      ki_um: 1,
      ki_prime_um: 2,
      activity_fraction: 0.5,
      kcat_per_s: 3,
      product_um: 0,
      inhibitor_um: 4,
      km_um: 5,
    };
    assert.equal(
      validateProjectEnvelope(raw).runs[0].experiment.inhibition,
      inhibition,
    );
  }
  raw.runs[0].experiment = { substrate_um: -1 };
  assert.equal(
    validateProjectEnvelope(raw).runs[0].experiment.substrate_um,
    -1,
  );
});

test("project rejects unknown/saved/prototype fields, duplicate IDs and wrong data types", () => {
  const mutations = [
    (value) => {
      value.unexpected = true;
    },
    (value) => {
      value.version = 2;
    },
    (value) => {
      value.runs[0].result = { frames: [frame(0, 0)] };
    },
    (value) => {
      value.runs.push(structuredClone(value.runs[0]));
    },
    (value) => {
      value.runs[0].id = "=SUM(1)";
    },
    (value) => {
      value.runs[0].id = "run 1";
    },
    (value) => {
      value.runs[0].experiment.unknown = 1;
    },
    (value) => {
      value.runs[0].experiment.substrate_um = "20";
    },
    (value) => {
      value.runs[0].experiment.substrate_um = NaN;
    },
    (value) => {
      value.runs[0].experiment.inhibition = "invented";
    },
    (value) => {
      value.runs[0].experiment = [];
    },
    (value) => {
      value.measurements[0].extra = 0;
    },
    (value) => {
      value.measurements[0].product_um = -1;
    },
    (value) => {
      value.measurements[0].time_s = Infinity;
    },
    (value) => {
      value.measurements = null;
    },
    (value) => {
      value.measurements = Array(1);
    },
    (value) => {
      value.runs = Array(1);
    },
  ];
  for (const mutate of mutations) {
    const value = project();
    mutate(value);
    assert.throws(() => validateProjectEnvelope(value));
  }
  const safe = JSON.stringify(project());
  assert.throws(
    () =>
      validateProjectEnvelope(
        safe.replace('"experiment":{', '"experiment":{"__proto__":{},'),
      ),
    /desteklenmeyen/,
  );
  assert.throws(
    () =>
      validateProjectEnvelope(
        safe.replace('"experiment":{', '"experiment":{"constructor":0,'),
      ),
    /desteklenmeyen/,
  );
  assert.throws(() => validateProjectEnvelope(null));
  assert.throws(() => validateProjectEnvelope("{broken"));
});

test("project rejects invalid dates and all documented count/text/byte limits", () => {
  for (const date of [
    "2026-02-30T00:00:00Z",
    "2026-02-29T00:00:00Z",
    "2026-13-01T00:00:00Z",
    "2026-01-01T24:00:00Z",
    "2026-01-01",
    "yesterday",
    "2026-01-01T01:00:00+25:00",
  ]) {
    const value = project();
    value.runs[0].created_at = date;
    assert.throws(() => validateProjectEnvelope(value), Error, date);
  }
  const leap = project();
  leap.runs[0].created_at = "2024-02-29T00:00:00Z";
  assert.ok(validateProjectEnvelope(leap));
  const mutations = [
    (value) => {
      value.title = "x".repeat(121);
    },
    (value) => {
      value.notes = "x".repeat(10001);
    },
    (value) => {
      value.runs[0].label = "x".repeat(101);
    },
    (value) => {
      value.runs[0].id = "x".repeat(65);
    },
    (value) => {
      value.runs[0].notes = "x".repeat(2001);
    },
    (value) => {
      value.runs = Array.from({ length: 13 }, (_, i) => ({
        ...value.runs[0],
        id: `run-${i}`,
      }));
    },
    (value) => {
      value.measurements = Array.from({ length: 1001 }, () => ({
        time_s: 0,
        product_um: 0,
      }));
    },
  ];
  for (const mutate of mutations) {
    const value = project();
    mutate(value);
    assert.throws(() => validateProjectEnvelope(value));
  }
  assert.throws(() => validateProjectEnvelope("ü".repeat(524289)), /1 MiB/);
  const huge = project();
  huge.notes = "ü".repeat(524289);
  assert.throws(() => validateProjectEnvelope(huge), /1 MiB/);
});

test("sweep values support decimal comma, signed/exponent numbers and preserve order", () => {
  assert.deepEqual(parseSweepValues(" 0,5 ; 1 ; 2,5 "), [0.5, 1, 2.5]);
  assert.deepEqual(
    parseSweepValues("3; -2; 1e-3; .5; +6; 7"),
    [3, -2, 0.001, 0.5, 6, 7],
  );
  for (const value of [
    "1",
    "1;2;3;4;5;6;7",
    "1;",
    ";2",
    "1;;2",
    "1;1.0",
    "0;-0",
    "1;NaN",
    "1;Infinity",
    "1;1e999",
    "1;alert(1)",
    "1;0x10",
    "1,2,3",
    "1;2,3.4",
  ])
    assert.throws(() => parseSweepValues(value), Error, value);
});
