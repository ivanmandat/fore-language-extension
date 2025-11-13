# Build script for FORe Language Extension
Write-Host "Building FORe Language Extension..." -ForegroundColor Cyan

# Step 1: Install dependencies
Write-Host "`n[1/3] Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: npm install failed" -ForegroundColor Red
    exit 1
}

# Step 2: Compile TypeScript
Write-Host "`n[2/3] Compiling TypeScript..." -ForegroundColor Yellow
npm run compile
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: TypeScript compilation failed" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "out\extension.js")) {
    Write-Host "ERROR: extension.js not found after compilation" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Compilation successful" -ForegroundColor Green

# Step 3: Package extension
Write-Host "`n[3/3] Packaging extension..." -ForegroundColor Yellow
if (Get-Command vsce -ErrorAction SilentlyContinue) {
    vsce package
} else {
    npx @vscode/vsce package
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Packaging failed" -ForegroundColor Red
    exit 1
}

# Check result
$vsix = Get-ChildItem *.vsix | Sort-Object LastWriteTime -Descending | Select-Object -First 1
if ($vsix) {
    Write-Host "`n✓ Build completed successfully!" -ForegroundColor Green
    Write-Host "  VSIX file: $($vsix.Name)" -ForegroundColor Cyan
    Write-Host "  Size: $([math]::Round($vsix.Length / 1KB, 2)) KB" -ForegroundColor Cyan
} else {
    Write-Host "ERROR: VSIX file not found" -ForegroundColor Red
    exit 1
}

