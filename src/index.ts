import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

export type EvidenceRecord = {
  timestamp: string;
  status: "ADMITTED" | "REFUSED";
  reason: string;
};

export function emitEvidence(
  root: string,
  record: EvidenceRecord
): string {
  const dir = join(root, "evidence");
  mkdirSync(dir, { recursive: true });

  const file = join(
    dir,
    `evidence-${new Date().toISOString().replace(/[:.]/g, "-")}.json`
  );

  writeFileSync(file, JSON.stringify(record, null, 2), "utf-8");
  return file;
}
