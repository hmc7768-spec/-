$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$map = @(
  @{ Stable = "backups\index.stable.html"; Target = "index.html" },
  @{ Stable = "backups\addon.stable.js"; Target = "addon.js" },
  @{ Stable = "backups\addon.stable.css"; Target = "addon.css" }
)

foreach ($item in $map) {
  $stable = Join-Path $root $item.Stable
  $target = Join-Path $root $item.Target
  if (-not (Test-Path $stable)) {
    throw "안정본 파일이 없습니다: $stable"
  }
  Copy-Item -LiteralPath $stable -Destination $target -Force
}

Write-Host "index.html, addon.js, addon.css를 안정본으로 복원했습니다."
