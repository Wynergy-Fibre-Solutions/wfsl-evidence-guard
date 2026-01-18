<# 
WFSL Evidence Guard – Verification Entry Point

Preflight:
- Enforces WFSL Shell Guard execution safety
- Blocks prompt contamination and unsafe invocation

Evidence Guard:
- Deterministic evidence emission
- Audit-grade verification

No telemetry. No network access.
#>

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Fail {
    param([string]$Message)
    Write-Error "[WFSL-EVIDENCE-GUARD] $Message"
    exit 1
}

# ---------------------------------------------------------------------------
# Preflight: WFSL Shell Guard
# ---------------------------------------------------------------------------

$ShellGuardPath = Join-Path $PSScriptRoot "..\wfsl-shell-guard\src\guard.ps1"

if (-not (Test-Path $ShellGuardPath)) {
    Fail "WFSL Shell Guard not found at expected path: $ShellGuardPath"
}

Write-Host "[WFSL-EVIDENCE-GUARD] Running Shell Guard preflight..."

pwsh -NoProfile -ExecutionPolicy Bypass -File $ShellGuardPath

if ($LASTEXITCODE -ne 0) {
    Fail "Shell Guard preflight failed. Evidence Guard execution blocked."
}

# ---------------------------------------------------------------------------
# Evidence Guard execution
# ---------------------------------------------------------------------------

Write-Host "[WFSL-EVIDENCE-GUARD] Shell Guard passed."
Write-Host "[WFSL-EVIDENCE-GUARD] Proceeding with evidence verification."

# Existing Evidence Guard logic continues below
