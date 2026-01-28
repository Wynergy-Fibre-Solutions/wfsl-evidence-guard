Commercial use requires a WFSL licence. See commercial-wfsl-offerings/HOW-TO-BUY.md.

# WFSL Evidence Guard

## Purpose

WFSL Evidence Guard is the authoritative evidence generation and sealing component of the WFSL platform.

It produces structured, deterministic, cryptographically verifiable evidence records intended for governance, inspection, and audit workflows.

Evidence Guard is the only component authorised to emit WFSL evidence.

---

## Functional Guarantees

WFSL Evidence Guard guarantees:

- Deterministic evidence generation
- Explicit input and output boundaries
- Cryptographic sealing of evidence
- Replayable and independently verifiable outputs

All evidence emitted is append-only and non-destructive.

---

## What This Component Does Not Do

WFSL Evidence Guard explicitly does not:

- Perform policy decisions
- Enforce governance rules
- Interpret evidence meaning
- Modify external systems
- Make trust claims

It emits evidence only.

---

## Evidence Characteristics

Evidence produced by WFSL Evidence Guard is:

- Structured (machine-readable)
- Time-bound
- Content-addressed
- Cryptographically signed
- Suitable for long-term retention

Evidence is designed to remain verifiable even if WFSL systems are no longer available.

---

## Role in the WFSL Platform

WFSL Evidence Guard occupies the foundational tier of the WFSL platform.

It is consumed by:

- WFSL ProofGate CLI
- WFSL Repo Guard
- Verification tooling
- External auditors and inspectors

No WFSL trust claim may be made without corresponding Evidence Guard output.

---

## Classification and Licence

Classification: WFSL Open  
Licence: Apache License 2.0

This repository is open-source and auditable.

Commercial and production reliance requires a valid WFSL licence.

---

## Stability

This repository is considered stable once evidence format and cryptographic behaviour are frozen.

Any change to evidence structure requires explicit versioning and compatibility documentation.

---

## WFSL Platform Membership

**Platform:** WFSL Evidence Platform

**Role:**  
Provides deterministic evidence ingestion, validation, and integrity checks as part of the WFSL Evidence Platform.

**Guarantees:**  
- Evidence-only processing  
- Deterministic validation outputs  
- Cryptographic integrity checks  
- No behavioural inference  

**Boundary:**  
This repository validates and processes evidence only and does not enforce policy, execute actions, or introduce telemetry.

See: WFSL-PLATFORM-INDEX.md

