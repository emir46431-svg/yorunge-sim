param(
    [Parameter(Mandatory=$true)][string]$CacheDirectory,
    [Parameter(Mandatory=$true)][string]$OutputDirectory
)
$ErrorActionPreference = 'Stop'
$sdkVersion = '1.0.4370.26'
$sdkHash = '1C0DACAC84B70109B3FD42F90C53A0BA942ABC3A87590D7A4E0CCD86E4A06CF4'
$cache = [IO.Path]::GetFullPath($CacheDirectory)
$output = [IO.Path]::GetFullPath($OutputDirectory)
$package = Join-Path $cache "microsoft.web.webview2.$sdkVersion.nupkg"
$sdk = Join-Path $cache "sdk-$sdkVersion"
New-Item -ItemType Directory -Path $cache,$output -Force | Out-Null
if (-not (Test-Path -LiteralPath $package)) {
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -UseBasicParsing -Uri "https://api.nuget.org/v3-flatcontainer/microsoft.web.webview2/$sdkVersion/microsoft.web.webview2.$sdkVersion.nupkg" -OutFile $package
}
if ((Get-FileHash -Algorithm SHA256 -LiteralPath $package).Hash -ne $sdkHash) { throw 'WebView2 SDK hash mismatch.' }
if (-not (Test-Path -LiteralPath $sdk)) {
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [IO.Compression.ZipFile]::ExtractToDirectory($package,$sdk)
}
$compiler = Join-Path $env:WINDIR 'Microsoft.NET\Framework64\v4.0.30319\csc.exe'
if (-not (Test-Path -LiteralPath $compiler)) { throw '.NET Framework 4.8 x64 compiler is required.' }
$core = Join-Path $sdk 'lib\net462\Microsoft.Web.WebView2.Core.dll'
$forms = Join-Path $sdk 'lib\net462\Microsoft.Web.WebView2.WinForms.dll'
$exe = Join-Path $output 'Yorunge.exe'
& $compiler /nologo /target:winexe /platform:x64 /optimize+ /warn:4 /warnaserror+ "/out:$exe" "/win32manifest:$PSScriptRoot\app.manifest" "/reference:$core" "/reference:$forms" /reference:System.dll /reference:System.Core.dll /reference:System.Drawing.dll /reference:System.Windows.Forms.dll /reference:System.Net.Http.dll /reference:System.Web.Extensions.dll "$PSScriptRoot\Program.cs"
if ($LASTEXITCODE -ne 0) { throw "Native host compilation failed ($LASTEXITCODE)." }
Copy-Item -LiteralPath $core,$forms -Destination $output -Force
Copy-Item -LiteralPath (Join-Path $sdk 'runtimes\win-x64\native\WebView2Loader.dll') -Destination $output -Force
Copy-Item -LiteralPath (Join-Path $PSScriptRoot 'Yorunge.exe.config') -Destination $output -Force
Copy-Item -LiteralPath (Join-Path $sdk 'LICENSE.txt') -Destination (Join-Path $output 'WebView2-LICENSE.txt') -Force
Get-FileHash -Algorithm SHA256 -LiteralPath $exe
Write-Output "Native host ready: $output"
Write-Output 'Add the matching v0.5+ yorunge-sim.exe to this directory before launching Yorunge.exe.'
