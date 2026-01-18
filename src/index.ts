export interface DeterministicContext {
  deterministicTime: string;
}

export function getDeterministicContext(): DeterministicContext {
  const deterministicTime =
    process.env.WFSL_DETERMINISTIC_TIME ??
    "2026-01-18T00:00:00.000Z";

  return {
    deterministicTime
  };
}
