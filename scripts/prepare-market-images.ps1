$ErrorActionPreference = "Stop"

$sourceRoot = "C:\Users\uhlov\Downloads\87eb6b09-e883-4455-8b3c-4b771e268949_ExportBlock-4752eaae-de40-4a0a-8ec6-930d6868710d"
$targetRoot = Join-Path $PSScriptRoot "..\public\images\market"

New-Item -ItemType Directory -Force -Path $targetRoot | Out-Null

$assets = @{
  "image.png"   = "ultrablox-product-source.png"
  "image 1.png" = "kolmar-goodai-source.png"
  "image 2.png" = "cosmax-results-article-source.png"
  "image 3.png" = "cosmax-keminova-booth.png"
  "image 4.png" = "oliveyoung-article-source.png"
}

foreach ($asset in $assets.GetEnumerator()) {
  $source = Join-Path $sourceRoot $asset.Key
  $target = Join-Path $targetRoot $asset.Value

  if (-not (Test-Path -LiteralPath $source)) {
    throw "Source image not found: $source"
  }

  Copy-Item -LiteralPath $source -Destination $target -Force
}

Write-Host "Prepared $($assets.Count) market-analysis images in $targetRoot"
