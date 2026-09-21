param(
  [string]$SourceDirectory = "C:\Users\uhlov\Downloads\6be042fa-cee5-47b2-914d-3bbb0b7438e6_ExportBlock-52af9afe-84cd-43aa-a4cc-1d7eede4b6c9"
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$outputDirectory = Join-Path $projectRoot "public\images\project"
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null

function Save-WebJpeg {
  param(
    [Parameter(Mandatory = $true)][string]$SourceName,
    [Parameter(Mandatory = $true)][string]$OutputName,
    [Parameter(Mandatory = $true)][int]$MaxWidth,
    [System.Drawing.Rectangle]$Crop,
    [System.Drawing.Rectangle[]]$Redactions = @()
  )

  $sourcePath = Join-Path $SourceDirectory $SourceName
  $outputPath = Join-Path $outputDirectory $OutputName
  $source = [System.Drawing.Image]::FromFile($sourcePath)

  try {
    if ($null -eq $Crop -or $Crop.Width -eq 0) {
      $Crop = [System.Drawing.Rectangle]::new(0, 0, $source.Width, $source.Height)
    }

    $scale = [Math]::Min(1.0, $MaxWidth / [double]$Crop.Width)
    $width = [Math]::Max(1, [int][Math]::Round($Crop.Width * $scale))
    $height = [Math]::Max(1, [int][Math]::Round($Crop.Height * $scale))
    $bitmap = [System.Drawing.Bitmap]::new($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

    try {
      $graphics.Clear([System.Drawing.Color]::White)
      $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
      $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
      $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
      $destination = [System.Drawing.Rectangle]::new(0, 0, $width, $height)
      $graphics.DrawImage($source, $destination, $Crop, [System.Drawing.GraphicsUnit]::Pixel)

      if ($Redactions.Count -gt 0) {
        $brush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(20, 24, 28))
        try {
          foreach ($redaction in $Redactions) {
            $x = [int][Math]::Round(($redaction.X - $Crop.X) * $scale)
            $y = [int][Math]::Round(($redaction.Y - $Crop.Y) * $scale)
            $redactionWidth = [int][Math]::Round($redaction.Width * $scale)
            $redactionHeight = [int][Math]::Round($redaction.Height * $scale)
            $graphics.FillRectangle($brush, $x, $y, $redactionWidth, $redactionHeight)
          }
        }
        finally {
          $brush.Dispose()
        }
      }

      $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
        Where-Object { $_.MimeType -eq "image/jpeg" }
      $qualityEncoder = [System.Drawing.Imaging.Encoder]::Quality
      $encoderParameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
      $encoderParameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new($qualityEncoder, 88L)
      try {
        $bitmap.Save($outputPath, $codec, $encoderParameters)
      }
      finally {
        $encoderParameters.Dispose()
      }
    }
    finally {
      $graphics.Dispose()
      $bitmap.Dispose()
    }
  }
  finally {
    $source.Dispose()
  }
}

Save-WebJpeg -SourceName "image01.png" -OutputName "project-team.jpg" -MaxWidth 1800
Save-WebJpeg -SourceName "6.png" -OutputName "technology-concept.jpg" -MaxWidth 1400
Save-WebJpeg -SourceName "image.png" -OutputName "experiment-seeding.jpg" -MaxWidth 1400
Save-WebJpeg -SourceName "image 1.png" -OutputName "experiment-lab.jpg" -MaxWidth 1800
Save-WebJpeg -SourceName "image 2.png" -OutputName "experiment-samples.jpg" -MaxWidth 1600

# The participant sidebar is excluded and the remaining numeric tile labels are
# covered in the published copy. The original source files remain untouched.
Save-WebJpeg `
  -SourceName "image02.png" `
  -OutputName "kickoff-online-redacted.jpg" `
  -MaxWidth 1000 `
  -Crop ([System.Drawing.Rectangle]::new(0, 0, 535, 538)) `
  -Redactions @(
    [System.Drawing.Rectangle]::new(7, 455, 115, 34),
    [System.Drawing.Rectangle]::new(258, 455, 128, 34)
  )

# The low-resolution education slide is kept at its native size and the
# participant list is removed from the published crop.
Save-WebJpeg `
  -SourceName "image03.png" `
  -OutputName "skin-model-training-redacted.jpg" `
  -MaxWidth 700 `
  -Crop ([System.Drawing.Rectangle]::new(0, 0, 348, 246))

Save-WebJpeg -SourceName "image04.png" -OutputName "company-meeting.jpg" -MaxWidth 1800

# The only student-number label in this undated collaboration capture is
# covered in the public copy.
Save-WebJpeg `
  -SourceName "9.png" `
  -OutputName "online-collaboration-redacted.jpg" `
  -MaxWidth 1800 `
  -Redactions @([System.Drawing.Rectangle]::new(408, 505, 390, 78))

Save-WebJpeg -SourceName "image 3.png" -OutputName "content-planning.jpg" -MaxWidth 1600

Get-ChildItem -LiteralPath $outputDirectory -File |
  Select-Object Name, Length |
  Format-Table -AutoSize
