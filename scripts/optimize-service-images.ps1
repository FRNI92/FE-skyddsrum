param(
  [string]$SourceDirectory = "",
  [string]$OutputDirectory = "$PSScriptRoot\..\public\images\services"
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

if (-not $SourceDirectory) {
  $assetsDirectory = Join-Path $PSScriptRoot "..\src\assets"
  $SourceDirectory = Get-ChildItem -LiteralPath $assetsDirectory -Directory |
    Where-Object { (Get-ChildItem -LiteralPath $_.FullName -Filter "*.jpg").Count -ge 12 } |
    Select-Object -First 1 -ExpandProperty FullName
}

$images = @(
  @{ Pattern = "skyddsrumskontroll.jpg"; Output = "skyddsrumskontroll" }
  @{ Pattern = "skyddsrumsstatus.jpg"; Output = "skyddsrumsstatus" }
  @{ Pattern = "skyddsrumstillsyn.jpg"; Output = "skyddsrumstillsyn" }
  @{ Pattern = "inventering.jpg"; Output = "inventering" }
  @{ Pattern = "*VERL*BESIKTNING.jpg"; Output = "overlatelsebesiktning" }
  @{ Pattern = "iordning*ritning.jpg"; Output = "iordningsstallande" }
  @{ Pattern = "serviceochunderh*.jpg"; Output = "service-och-underhall" }
  @{ Pattern = "Skyddsrumsfunktion.jpg"; Output = "skyddsrumsfunktion" }
  @{ Pattern = "Attkostnadseffektivierasittskyddsru.jpg"; Output = "kostnadseffektivisering" }
  @{ Pattern = "*rderiskyddsrum.jpg"; Output = "atgarder-i-skyddsrum" }
  @{ Pattern = "konsult_serviceochunderh*.jpg"; Output = "konsult-service-underhall" }
  @{ Pattern = "konsultation.jpg"; Output = "konsultation" }
)

$widths = @(480, 800, 1200)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality,
  [long]78
)

New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null

foreach ($entry in $images) {
  $sourcePath = Get-ChildItem -LiteralPath $SourceDirectory -Filter $entry.Pattern |
    Select-Object -First 1 -ExpandProperty FullName
  $source = [System.Drawing.Image]::FromFile($sourcePath)

  try {
    if ($source.PropertyIdList -contains 274) {
      $orientation = $source.GetPropertyItem(274).Value[0]
      $rotation = switch ($orientation) {
        2 { [System.Drawing.RotateFlipType]::RotateNoneFlipX }
        3 { [System.Drawing.RotateFlipType]::Rotate180FlipNone }
        4 { [System.Drawing.RotateFlipType]::RotateNoneFlipY }
        5 { [System.Drawing.RotateFlipType]::Rotate90FlipX }
        6 { [System.Drawing.RotateFlipType]::Rotate90FlipNone }
        7 { [System.Drawing.RotateFlipType]::Rotate270FlipX }
        8 { [System.Drawing.RotateFlipType]::Rotate270FlipNone }
        default { [System.Drawing.RotateFlipType]::RotateNoneFlipNone }
      }
      $source.RotateFlip($rotation)
    }

    foreach ($width in $widths) {
      $targetWidth = [Math]::Min($width, $source.Width)
      $targetHeight = [Math]::Round($source.Height * ($targetWidth / $source.Width))
      $bitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
      $bitmap.SetResolution(96, 96)
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

      try {
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.DrawImage($source, 0, 0, $targetWidth, $targetHeight)
        $outputPath = Join-Path $OutputDirectory "$($entry.Output)-$width.jpg"
        $bitmap.Save($outputPath, $jpegCodec, $encoderParameters)
      }
      finally {
        $graphics.Dispose()
        $bitmap.Dispose()
      }
    }
  }
  finally {
    $source.Dispose()
  }
}
