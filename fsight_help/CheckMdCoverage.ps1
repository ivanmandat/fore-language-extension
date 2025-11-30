Param(
    [string]$ExtractedRoot = ".\_extracted",
    [string]$MdRoot = ".\md_help"
)

# Папка, где лежит скрипт
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptRoot

if (-not (Test-Path $ExtractedRoot)) {
    Write-Error "Extracted root not found: $ExtractedRoot"
    exit 1
}
if (-not (Test-Path $MdRoot)) {
    Write-Error "Markdown root not found: $MdRoot"
    exit 1
}

$ExtractedRoot = Resolve-Path $ExtractedRoot
$MdRoot        = Resolve-Path $MdRoot

$moduleDirs = Get-ChildItem -Path $ExtractedRoot -Directory

$totalHtml = 0
$totalMd   = 0

$results = @()

foreach ($module in ($moduleDirs | Sort-Object Name)) {
    $name         = $module.Name
    $srcModuleDir = $module.FullName
    $dstModuleDir = Join-Path $MdRoot $name

    $htmlCount = (Get-ChildItem -Path $srcModuleDir -Recurse -Include *.htm, *.html -ErrorAction SilentlyContinue | Measure-Object).Count

    $mdCount = 0
    if (Test-Path $dstModuleDir) {
        # считаем только страницы, README не учитываем
        $mdCount = (Get-ChildItem -Path $dstModuleDir -Recurse -Filter *.md -ErrorAction SilentlyContinue |
                    Where-Object { $_.Name -ne 'README.md' } |
                    Measure-Object).Count
    }

    $totalHtml += $htmlCount
    $totalMd   += $mdCount

    $status =
        if ($htmlCount -eq 0) { "no_html" }
        elseif ($mdCount -ge $htmlCount) { "ok" }
        elseif ($mdCount -gt 0) { "partial" }
        else { "missing" }

    $results += [PSCustomObject]@{
        Module    = $name
        HtmlCount = $htmlCount
        MdCount   = $mdCount
        Status    = $status
    }
}

Write-Host ""
Write-Host "=== Per-module coverage ==="
$results | Format-Table -AutoSize

Write-Host ""
Write-Host "=== Totals ==="
Write-Host ("Total HTML pages:    {0}" -f $totalHtml)
Write-Host ("Total Markdown pages:{0}" -f $totalMd)

Write-Host ""
Write-Host "=== Modules with problems (html > md) ==="
$results | Where-Object { $_.HtmlCount -gt $_.MdCount } | Format-Table -AutoSize