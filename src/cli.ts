import { emitEvidence } from "./index.js";

const root = process.cwd();

const status = process.argv.includes("--admit")
  ? "ADMITTED"
  : "REFUSED";

const reason =
  status === "ADMITTED"
    ? "Policy satisfied"
    : "Policy violation detected";

const path = emitEvidence(root, {
  timestamp: new Date().toISOString(),
  status,
  reason
});

console.log(`Outcome: ${status}`);
console.log(`Evidence: ${path}`);
