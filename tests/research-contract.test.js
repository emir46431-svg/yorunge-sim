import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import {
  compareMeasurements,
  parseMeasurements,
  resultsCsv,
  validateProjectEnvelope,
} from "../web/research/data.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const binary =
  process.env.YORUNGE_TEST_BIN ||
  resolve(
    root,
    "target/debug",
    process.platform === "win32" ? "yorunge-sim.exe" : "yorunge-sim",
  );
function call(command, input) {
  const process = spawnSync(binary, [command, "-"], {
    input: JSON.stringify(input),
    encoding: "utf8",
    maxBuffer: 4 * 1024 * 1024,
  });
  assert.ifError(process.error);
  assert.equal(process.status, 0, process.stderr);
  return JSON.parse(process.stdout);
}

test("Rust output feeds measurement comparison and CSV without renaming or dropped fields", () => {
  const result = call("enzymes-simulate", { samples: 3, duration_s: 10 });
  const observations = parseMeasurements(
    `time_s,product_um\n${result.frames.map((f) => `${f.t_s},${f.product_um + 1}`).join("\n")}`,
  );
  const errors = compareMeasurements(result.frames, observations);
  assert.ok(Math.abs(errors.rmse_um - 1) < 1e-12);
  assert.ok(Math.abs(errors.mae_um - 1) < 1e-12);
  const csv = resultsCsv([{ id: "run-contract", result }]);
  const rows = csv.trim().split("\r\n");
  assert.equal(rows.length, 4);
  assert.equal(Number(rows.at(-1).split(",")[1]), 10);
  assert.equal(
    Number(rows.at(-1).split(",")[3]),
    result.frames.at(-1).product_um,
  );
});

test("saved experiment is validated and deterministically recomputed across the JSON boundary", () => {
  const result = call("enzymes-simulate", {
    inhibition: "mixed",
    inhibitor_um: 10,
    ki_prime_um: 50,
  });
  const project = validateProjectEnvelope(
    JSON.stringify({
      format: "yorunge-research",
      version: 1,
      title: "Contract fixture",
      runs: [
        {
          id: "run-1",
          label: "Mixed",
          notes: "",
          created_at: "2026-11-24T12:00:00Z",
          experiment: result.experiment,
        },
      ],
    }),
  );
  const repeated = call("enzymes-simulate", project.runs[0].experiment);
  assert.deepEqual(repeated, result);
  assert.equal("result" in project.runs[0], false);
});

test("Rust sweep results support the exact UI run shape and all series export", () => {
  const sweep = call("enzymes-sweep", {
    experiment: { samples: 3, inhibition: "competitive" },
    parameter: "inhibitor_um",
    values: [0, 25, 100],
  });
  assert.equal(sweep.parameter, "inhibitor_um");
  assert.deepEqual(
    sweep.runs.map((run) => run.result.experiment.inhibitor_um),
    [0, 25, 100],
  );
  const csv = resultsCsv(
    sweep.runs.map((run, index) => ({
      id: `sweep-${index}`,
      result: run.result,
    })),
  );
  assert.equal(csv.trim().split("\r\n").length, 10);
});
