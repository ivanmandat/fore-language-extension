Param(
    [string]$ExtractedRoot = ".\_extracted",
    [string]$MdRoot = ".\md_help"
)

# Папка, где лежит сам скрипт
$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptRoot

$ExtractedRoot = Resolve-Path $ExtractedRoot

if (-not (Test-Path $MdRoot)) {
    New-Item -ItemType Directory -Path $MdRoot -Force | Out-Null
}

$MdRoot = Resolve-Path $MdRoot

function Convert-HtmlToMarkdown {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Html
    )

    # Нормализуем переводы строк
    $text = $Html -replace "`r`n", "`n"

    # Удаляем скрипты и стили
    $text = $text -replace '(?is)<script[^>]*>.*?</script>', ''
    $text = $text -replace '(?is)<style[^>]*>.*?</style>', ''

    # Переводы строк и параграфы
    $text = $text -replace '(?is)<br\s*/?>', "`n"
    $text = $text -replace '(?is)</p>', "`n`n"
    $text = $text -replace '(?is)<p[^>]*>', ''

    # Заголовки
    $text = $text -replace '(?is)<h1[^>]*>(.*?)</h1>', "`n# `$1`n`n"
    $text = $text -replace '(?is)<h2[^>]*>(.*?)</h2>', "`n## `$1`n`n"
    $text = $text -replace '(?is)<h3[^>]*>(.*?)</h3>', "`n### `$1`n`n"
    $text = $text -replace '(?is)<h4[^>]*>(.*?)</h4>', "`n#### `$1`n`n"
    $text = $text -replace '(?is)<h5[^>]*>(.*?)</h5>', "`n##### `$1`n`n"
    $text = $text -replace '(?is)<h6[^>]*>(.*?)</h6>', "`n###### `$1`n`n"

    # Списки
    $text = $text -replace '(?is)</li>', "`n"
    $text = $text -replace '(?is)<li[^>]*>', '- '
    $text = $text -replace '(?is)</ul>', "`n`n"
    $text = $text -replace '(?is)</ol>', "`n`n"
    $text = $text -replace '(?is)<ul[^>]*>', "`n`n"
    $text = $text -replace '(?is)<ol[^>]*>', "`n`n"

    # Жирный / курсив
    $text = $text -replace '(?is)<b[^>]*>(.*?)</b>', '**$1**'
    $text = $text -replace '(?is)<strong[^>]*>(.*?)</strong>', '**$1**'
    $text = $text -replace '(?is)<i[^>]*>(.*?)</i>', '*$1*'
    $text = $text -replace '(?is)<em[^>]*>(.*?)</em>', '*$1*'

    # Ссылки
    $text = $text -replace '(?is)<a[^>]*?href\s*=\s*\"(.*?)\"[^>]*>(.*?)</a>', '[$2]($1)'
    $text = $text -replace "(?is)<a[^>]*?href\s*=\s*'(.*?)'[^>]*>(.*?)</a>", '[$2]($1)'

    # Изображения <img src="...">
    $text = $text -replace '(?is)<img[^>]*?src\s*=\s*\"(.*?)\"[^>]*>', '![]($1)'
    $text = $text -replace "(?is)<img[^>]*?src\s*=\s*'(.*?)'[^>]*>", '![]($1)'

    # Простые таблицы — сохраняем текст построчно
    $text = $text -replace '(?is)</tr>', "`n"
    $text = $text -replace '(?is)</td>', ' '
    $text = $text -replace '(?is)<tr[^>]*>', "`n"
    $text = $text -replace '(?is)<td[^>]*>', ' '

    # Удаляем оставшиеся теги
    $text = $text -replace '(?s)<[^>]+>', ''

    # Декодируем HTML-сущности
    $text = [System.Net.WebUtility]::HtmlDecode($text)

    # Разбиваем на строки и подчищаем
    $lines = $text -split "`n" | ForEach-Object { $_.TrimEnd() }

    # Убираем лишние пустые строки
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

Write-Host "HTML root: $ExtractedRoot"
Write-Host "Markdown root: $MdRoot"

# 1. Создаём зеркальную структуру модулей и копируем ресурсы (кроме HTML)
$moduleDirs = Get-ChildItem -Path $ExtractedRoot -Directory

foreach ($module in $moduleDirs) {
    $moduleName = $module.Name
    $srcModuleDir = $module.FullName
    $dstModuleDir = Join-Path $MdRoot $moduleName

    Write-Host "Preparing module: $moduleName"

    if (-not (Test-Path $dstModuleDir)) {
        New-Item -ItemType Directory -Path $dstModuleDir -Force | Out-Null
    }

    # Копируем все файлы, кроме HTML, чтобы сохранить картинки, css, js и т.п.
    Copy-Item -Path (Join-Path $srcModuleDir '*') -Destination $dstModuleDir -Recurse -Force -ErrorAction SilentlyContinue -Exclude *.htm, *.html
}

# 2. Конвертация всех HTML-файлов в Markdown
foreach ($module in $moduleDirs) {
    $moduleName = $module.Name
    $srcModuleDir = $module.FullName
    $dstModuleDir = Join-Path $MdRoot $moduleName

    Write-Host "Converting HTML to Markdown for module: $moduleName"

    $htmlFiles = Get-ChildItem -Path $srcModuleDir -Recurse -Include *.htm, *.html -ErrorAction SilentlyContinue

    foreach ($htmlFile in $htmlFiles) {
        $relativePath = $htmlFile.FullName.Substring($srcModuleDir.Length).TrimStart('\')
        $relativeMd   = [System.IO.Path]::ChangeExtension($relativePath, ".md")
        $outputPath   = Join-Path $dstModuleDir $relativeMd
        $outputDir    = Split-Path $outputPath

        if (-not (Test-Path $outputDir)) {
            New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
        }

        # Если Markdown уже существует, пропускаем — это позволяет безопасно
        # перезапускать скрипт и дозаполнять только недостающие файлы.
        if (Test-Path $outputPath) {
            continue
        }

        Write-Host ("  {0}: {1} -> {2}" -f $moduleName, $relativePath, $relativeMd)

        $htmlContent = Get-Content -Path $htmlFile.FullName -Raw -Encoding Default
        $mdContent   = Convert-HtmlToMarkdown -Html $htmlContent

        # Пытаемся вытащить заголовок страницы для H1
        $title = $null
        if ($htmlContent -match '(?is)<title[^>]*>(.*?)</title>') {
            $title = $matches[1].Trim()
        }
        elseif ($htmlContent -match '(?is)<h1[^>]*>(.*?)</h1>') {
            $title = $matches[1].Trim()
        }

        if ($title) {
            $mdContent = "# $title`n`n$mdContent"
        }

        Set-Content -Path $outputPath -Value $mdContent -Encoding UTF8
    }
}

# 3. README.md для каждого модуля
foreach ($module in $moduleDirs) {
    $moduleName = $module.Name
    $dstModuleDir = Join-Path $MdRoot $moduleName
    $readmePath   = Join-Path $dstModuleDir "README.md"

    Write-Host "Generating README.md for module: $moduleName"

    $mdFiles = Get-ChildItem -Path $dstModuleDir -Recurse -Filter *.md |
        Where-Object { $_.Name -ne 'README.md' }

    $lines = @()
    $lines += "# $moduleName"
    $lines += ""
    $lines += "## Страницы"
    $lines += ""

    foreach ($file in ($mdFiles | Sort-Object FullName)) {
        $relPath = $file.FullName.Substring($dstModuleDir.Length).TrimStart('\')
        $relPathForLink = $relPath -replace '\\', '/'

        # Читаем первый заголовок
        $titleLine = (Get-Content -Path $file.FullName -Encoding UTF8 | Where-Object { $_.Trim().StartsWith('# ') } | Select-Object -First 1)
        if ($titleLine) {
            $title = $titleLine.Trim().TrimStart('#').Trim()
        }
        else {
            $title = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
        }

        $lines += "- [$title]($relPathForLink)"
    }

    Set-Content -Path $readmePath -Value ($lines -join "`n") -Encoding UTF8
}

# 4. Глобальный INDEX.md
$indexPath = Join-Path $MdRoot "INDEX.md"
$indexLines = @()
$indexLines += "# FSight Help"
$indexLines += ""
$indexLines += "## Модули"
$indexLines += ""

foreach ($module in ($moduleDirs | Sort-Object Name)) {
    $moduleName = $module.Name
    $readmeRel  = "$moduleName/README.md"
    $indexLines += "- [$moduleName]($readmeRel)"
}

Set-Content -Path $indexPath -Value ($indexLines -join "`n") -Encoding UTF8

Write-Host "Markdown generation completed. Root: $MdRoot"


