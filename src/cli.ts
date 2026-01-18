import { createHash } from "crypto";
import { getDeterministicContext } from "./index";

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }

  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `"${k}":${stableStringify(v)}`);
    return `{${entries.join(",")}}`;
  }

  return JSON.stringify(value);
}

function sha256(input: string): string {
  return createHash("sha256").update(input).digest("hex");
}

export function emitEvidence(payload: Record<string, unknown>) {
  const context = getDeterministicContext();

  const evidence = {
    wfsl: {
      component: "wfsl-evidence-guard",
      execution_level: "deterministic-v1",
      doctrine: "WFSL-SILENT-PROOF-v1"
    },
    deterministic_time: context.deterministicTime,
    payload
  };

  const canonical = stableStringify(evidence);
  const hash = sha256(canonical);

  const output = {
    evidence,
    hash
  };

  process.stdout.write(stableStringify(output));
}

if (require.main === module) {
  emitEvidence({
    example: "deterministic-proof"
  });
}
