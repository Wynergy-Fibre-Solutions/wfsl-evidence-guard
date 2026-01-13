# WFSL Evidence Guard

**Deterministic evidence emission for verification-first systems.**

WFSL Evidence Guard emits structured, machine-verifiable evidence describing execution context, environment, and observed behaviour.

It is designed for systems where logs are insufficient and truth must be expressed as data.

---

## What this does

WFSL Evidence Guard:

- Captures execution context deterministically
- Records environment state without mutation
- Emits machine-readable JSON artefacts
- Treats failures as first-class evidence
- Avoids reliance on platform introspection APIs

Evidence is produced deliberately and defensively.

---

## Why this exists

Logs are narrative.  
Narratives are ambiguous.  
Ambiguity destroys auditability.

WFSL Evidence Guard enforces a simple rule:

> **Truth must be emitted as data, not inferred from output.**

This enables:

- Independent verification
- Repeatable inspection
- Audit and compliance workflows
- Evidence-driven remediation planning

---

## Evidence artefacts

A typical verification run emits:

- `environment.json`
- `execution-context.json`
- `run-*.json`

These artefacts are:

- Deterministic
- Append-only
- Machine-verifiable
- Suitable for archival and audit

No artefact implies permission to rely.

---

## Deterministic verification

Verification runs:

- Do not require administrative privileges
- Do not modify system state
- Do not start or stop services
- Do not rely on broken introspection

The platform is treated as untrusted input.

---

## Intended use

WFSL Evidence Guard is suitable for:

- Verification frameworks
- CI pipelines
- Audit tooling
- Governance systems
- Regulated environments

It is not designed for convenience logging.

---

## Licensing and reliance

This repository is available under the **WFSL Community Edition**.

Source code access, execution, and experimentation are permitted.

**Production reliance, audit claims, or regulatory use are not permitted** without a Commercial Reliance Licence.

Verification artefacts demonstrate observed behaviour only and do not grant permission to rely.

See the canonical framework:

- `WFSL-LICENSING-AND-RELIANCE.md`

For commercial licensing enquiries:

licensing@wfsl.uk

---

## Status

- Verification: complete
- Deterministic evidence: emitted
- Platform trust: none
- Mutation during inspection: none

This repository reflects a verified, non-reliant community release.
