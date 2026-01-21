\# WFSL Evidence Guard



\## Purpose



WFSL Evidence Guard is the canonical deterministic evidence emitter for the WFSL platform.



It produces structured, machine-verifiable evidence artefacts used for governance, verification, inspection, and trust propagation across WFSL systems.



This repository is the root truth source upon which higher-order WFSL engines depend.



---



\## Deterministic Guarantees



Evidence emitted by this component is:



\- Deterministic by design

\- Reproducible across environments

\- Offline-capable

\- Cryptographically hash-verifiable

\- Structurally stable for machine consumption



Given identical inputs and execution context, the output evidence must be identical.



---



\## What This Component Does Not Do



WFSL Evidence Guard explicitly does \*\*not\*\*:



\- Perform inference

\- Apply policy

\- Make decisions

\- Enforce outcomes

\- Trigger remediation

\- Transmit telemetry



It emits truth only.  

Interpretation and enforcement are delegated to downstream components.



---



\## Classification and Licence



\*\*Classification:\*\* WFSL Open  

\*\*Licence:\*\* Apache License 2.0



This repository is open-source and auditable.  

It forms part of the WFSL trust anchor layer and may be used freely in accordance with the Apache 2.0 licence.



Behavioural expectations and platform doctrine are defined by WFSL but do not impose additional licence restrictions.



---



\## Execution and Verification



Evidence is generated locally by executing the tool and capturing its output.



Verification consists of:

\- Inspecting evidence structure

\- Validating deterministic fields

\- Recomputing and matching cryptographic hashes

\- Re-running execution to confirm reproducibility



All verification is designed to be performed without reliance on external services.



---



\## Role in the WFSL Platform



WFSL Evidence Guard is designated \*\*Platform Tier-0\*\*.



It is the foundational truth emitter consumed by:

\- wfsl-shell-guard

\- wfsl-admission-guard

\- wfsl-proofgate-cli

\- shared verifiers

\- testing frameworks

\- governance and control-plane engines



No WFSL component may assert trust without verifiable evidence originating from this layer or an equivalent authorised source.



---



\## Stability



This repository is considered \*\*stable\*\* once deterministic guarantees are met and verified.



Versioning reflects behavioural compatibility, not feature expansion.



