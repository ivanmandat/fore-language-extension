Param(
    # Куда распаковывать CHM (как при успешном примере с UiReport_manual)
    [string]$OutputRoot = ".\_extracted"
)

# Папка, где лежит сам скрипт (и все CHM)
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptRoot

if (-not (Test-Path $OutputRoot)) {
    New-Item -ItemType Directory -Path $OutputRoot -Force | Out-Null
}

$chmFiles = Get-ChildItem -Path $scriptRoot -Filter *.chm

Write-Host "Found $($chmFiles.Count) CHM files to process"

foreach ($chm in $chmFiles) {
    $baseName    = [System.IO.Path]::GetFileNameWithoutExtension($chm.Name)
    $extractRel  = ".\\_extracted\\$baseName"   # как в успешном примере

    Write-Host "Processing $($chm.Name) -> $extractRel"

    # Удаляем старую папку, если была
    if (Test-Path $extractRel) {
        Remove-Item -Path $extractRel -Recurse -Force -ErrorAction SilentlyContinue
    }

    # Ровно то же поведение, что и в успешной команде:
    # hh.exe сам создаёт папку и HTML-файлы
    & hh.exe -decompile "$extractRel" "$($chm.Name)"
}

Write-Host "HTML extraction completed. Files are in: $OutputRoot"
