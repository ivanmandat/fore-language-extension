Param(
    [string]$OutputRoot = ".\markdown"
)

function Convert-HtmlToMarkdown {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Html
    )

    # Normalize line endings
    $text = $Html -replace "`r`n", "`n"

    # Remove scripts and styles
    $text = $text -replace '(?is)<script[^>]*>.*?</script>', ''
    $text = $text -replace '(?is)<style[^>]*>.*?</style>', ''

    # Basic structural tags
    $text = $text -replace '(?is)<br\s*/?>', "`n"
    $text = $text -replace '(?is)</p>', "`n`n"
    $text = $text -replace '(?is)<p[^>]*>', ''

    # Headings
    $text = $text -replace '(?is)<h1[^>]*>(.*?)</h1>', "`n# `$1`n`n"
    $text = $text -replace '(?is)<h2[^>]*>(.*?)</h2>', "`n## `$1`n`n"
    $text = $text -replace '(?is)<h3[^>]*>(.*?)</h3>', "`n### `$1`n`n"
    $text = $text -replace '(?is)<h4[^>]*>(.*?)</h4>', "`n#### `$1`n`n"
    $text = $text -replace '(?is)<h5[^>]*>(.*?)</h5>', "`n##### `$1`n`n"
    $text = $text -replace '(?is)<h6[^>]*>(.*?)</h6>', "`n###### `$1`n`n"

    # Lists
    $text = $text -replace '(?is)</li>', "`n"
    $text = $text -replace '(?is)<li[^>]*>', '- '
    $text = $text -replace '(?is)</ul>', "`n`n"
    $text = $text -replace '(?is)</ol>', "`n`n"
    $text = $text -replace '(?is)<ul[^>]*>', "`n`n"
    $text = $text -replace '(?is)<ol[^>]*>', "`n`n"

    # Bold / italic
    $text = $text -replace '(?is)<b[^>]*>(.*?)</b>', '**$1**'
    $text = $text -replace '(?is)<strong[^>]*>(.*?)</strong>', '**$1**'
    $text = $text -replace '(?is)<i[^>]*>(.*?)</i>', '*$1*'
    $text = $text -replace '(?is)<em[^>]*>(.*?)</em>', '*$1*'

    # Links: <a href="url">text</a> -> [text](url)
    $text = $text -replace '(?is)<a[^>]*?href\s*=\s*\"(.*?)\"[^>]*>(.*?)</a>', '[$2]($1)'
    $text = $text -replace "(?is)<a[^>]*?href\s*=\s*'(.*?)'[^>]*>(.*?)</a>", '[$2]($1)'

    # Tables (very simplified: keep cell text, separate rows with newlines)
    $text = $text -replace '(?is)</tr>', "`n"
    $text = $text -replace '(?is)</td>', ' '
    $text = $text -replace '(?is)<tr[^>]*>', "`n"
    $text = $text -replace '(?is)<td[^>]*>', ' '

    # Remove remaining tags
    $text = $text -replace '(?s)<[^>]+>', ''

    # Decode HTML entities
    $text = [System.Net.WebUtility]::HtmlDecode($text)

    # Split into lines, trim right spaces
    $lines = $text -split "`n" | ForEach-Object { $_.TrimEnd() }

    # Collapse multiple empty lines
    $resultLines = @()
    $emptyCount = 0
    foreach ($line in $lines) {
        if ([string]::IsNullOrWhiteSpace($line)) {
            $emptyCount++
            if ($emptyCount -le 2) {
                $resultLines += ""
            }
        }
        else {
            $emptyCount = 0
            $resultLines += $line
        }
    }

    ($resultLines -join "`n").Trim()
}

$root = Get-Location

if (-not (Test-Path $OutputRoot)) {
    New-Item -ItemType Directory -Path $OutputRoot | Out-Null
}

$chmFiles = Get-ChildItem -Path $root -Filter *.chm

foreach ($chm in $chmFiles) {
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($chm.Name)
    $extractDir = Join-Path $root "_extracted\$baseName"
    $mdRootDir  = Join-Path $OutputRoot $baseName

    # Для стабильной распаковки: удаляем старую папку, hh.exe создаёт её сам
    if (Test-Path $extractDir) {
        Remove-Item $extractDir -Recurse -Force
    }
    if (Test-Path $mdRootDir) {
        Remove-Item $mdRootDir -Recurse -Force
    }
    New-Item -ItemType Directory -Path $mdRootDir -Force | Out-Null

    Write-Host "Decompiling $($chm.Name) to $extractDir ..."
    & hh.exe -decompile $extractDir $chm.FullName | Out-Null

    # Ждём, пока hh.exe создаст папку и хотя бы какие-то HTML/HTM файлы
    $htmlFiles = @()
    for ($i = 0; $i -lt 60; $i++) {
        if (Test-Path $extractDir) {
            $htmlFiles = Get-ChildItem -Path $extractDir -Recurse -Include *.htm, *.html -ErrorAction SilentlyContinue
            if ($htmlFiles -and $htmlFiles.Count -gt 0) {
                break
            }
        }
        Start-Sleep -Seconds 1
    }

    if (-not $htmlFiles -or $htmlFiles.Count -eq 0) {
        Write-Host "  WARNING: no HTML files found in $extractDir for $($chm.Name)"
        continue
    }

    foreach ($htmlFile in $htmlFiles) {
        $relativePath = $htmlFile.FullName.Substring($extractDir.Length).TrimStart('\')
        $relativeMd   = [System.IO.Path]::ChangeExtension($relativePath, ".md")
        $outputPath   = Join-Path $mdRootDir $relativeMd
        $outputDir    = Split-Path $outputPath

        if (-not (Test-Path $outputDir)) {
            New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
        }

        Write-Host "Converting $relativePath -> $relativeMd"

        $htmlContent = Get-Content -Path $htmlFile.FullName -Raw -Encoding Default
        $mdContent   = Convert-HtmlToMarkdown -Html $htmlContent

        Set-Content -Path $outputPath -Value $mdContent -Encoding UTF8
    }
}

Write-Host "Conversion completed. Markdown files are in: $OutputRoot"


