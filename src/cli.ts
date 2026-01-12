// wfsl-evidence-guard/src/cli.ts

import { requirePro, issueReceipt, WfslError } from "wfsl-licence-core";
import { createHash } from "crypto";
import * as fs from "fs";

function emitEvidence(data: string): string {
  const outPath = "evidence.json";
  fs.writeFileSync(outPath, data, "utf8");
  return outPath;
}

function hashFile(filePath: string): string {
  const buf = fs.readFileSync(filePath);
  const h = createHash("sha256").update(buf).digest("hex");
  return `sha256:${h}`;
}

async function main() {
  const mode = process.argv[2] ?? "community";

  if (mode === "pro") {
    const authority = requirePro("evidence.pro");

    const outputPath = emitEvidence(
      JSON.stringify({ evidence: "authoritative", ts: new Date().toISOString() }, null, 2)
    );

    const outputHash = hashFile(outputPath);

    const { receipt, signature } = issueReceipt(authority, {
      tool: "wfsl-evidence-guard",
      toolVersion: "0.1.0",
      outputHash
    });

    fs.writeFileSync(
      "evidence.receipt.json",
      JSON.stringify({ receipt, signature }, null, 2),
      "utf8"
    );

    console.log("Pro evidence emitted with receipt.");
    return;
  }

  emitEvidence(
    JSON.stringify({ evidence: "community", ts: new Date().toISOString() }, null, 2)
  );
  console.log("Community evidence emitted.");
}

main().catch((err) => {
  if (err instanceof WfslError) {
    console.error(err.message);
    process.exit(err.exitCode);
  }

  console.error(err?.message ?? err);
  process.exit(99);
});
