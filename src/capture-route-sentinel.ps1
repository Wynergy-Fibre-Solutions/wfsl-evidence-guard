$sentinelOutput = pwsh "$HOME\github\wfsl-route-sentinel\src\route-quality.ps1" | ConvertFrom-Json

$evidence = @{
    wfslEvidence = @{
        type = "network-diagnostic"
        capturedUtc = (Get-Date).ToUniversalTime().ToString("o")
        source = "wfsl-route-sentinel"
        payload = $sentinelOutput
    }
}

$evidenceJson = $evidence | ConvertTo-Json -Depth 6

$evidencePath = "$HOME\github\wfsl-evidence-guard\evidence\network-" + (Get-Date -Format "yyyyMMdd-HHmmss") + ".json"

New-Item -ItemType Directory -Path (Split-Path $evidencePath) -Force | Out-Null
$evidenceJson | Out-File $evidencePath -Encoding utf8

Write-Output "Evidence emitted:"
Write-Output $evidencePath
