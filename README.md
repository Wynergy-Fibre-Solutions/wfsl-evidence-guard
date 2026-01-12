# wfsl-evidence-guard

Deterministic evidence emission with cryptographic authority enforcement.

This tool produces **evidence outputs** that are either:

- **Community**: usable but non-authoritative
- **Pro**: cryptographically signed, verifiable, and tamper-evident

The difference is enforced in code, not policy.

---

## Core principle

**Evidence without authority is non-authoritative.**

This repository demonstrates that principle end-to-end.

---

## What this does

- Emits evidence to disk
- Enforces licence authority for Pro operations
- Issues a signed receipt binding:
  - licence subject
  - plan
  - tool identity
  - output hash
- Allows offline verification without WFSL infrastructure

---

## Requirements

- Node.js 22+
- Built `wfsl-licence-core` dependency

**Pro mode only:**

- WFSL public verification key
- WFSL private signing key
- Valid WFSL licence token

Keys are never committed.

---

## Build

```bash
npm install
npm run build
