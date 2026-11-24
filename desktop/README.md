# Yörünge Studio — Windows host

`Yorunge.exe` opens one native Windows window containing WebView2. It does not launch Chrome, Edge, Google, or another external browser. The rendering engine is the installed Microsoft WebView2 Runtime.

## Build

Windows x64, .NET Framework 4.8 or newer, and Windows PowerShell/PowerShell are required. The Windows .NET Framework C# compiler is used; a .NET SDK and Visual Studio are not required.

From the repository root:

```powershell
./desktop/build.ps1 -CacheDirectory C:/path/to/work/native-desktop -OutputDirectory C:/path/to/package
Copy-Item ./target/release/yorunge-sim.exe C:/path/to/package/yorunge-sim.exe
```

The script downloads the pinned Microsoft.Web.WebView2 **1.0.4370.26** SDK from the official NuGet flat-container endpoint, validates its SHA-256, and builds the host. It does not install a runtime or modify Windows execution policy. The SHA-256 is `1C0DACAC84B70109B3FD42F90C53A0BA942ABC3A87590D7A4E0CCD86E4A06CF4`.

Ship these files together:

- `Yorunge.exe` and `Yorunge.exe.config`
- `yorunge-sim.exe` built from the matching v0.5+ source
- `Microsoft.Web.WebView2.Core.dll`
- `Microsoft.Web.WebView2.WinForms.dll`
- `WebView2Loader.dll` (x64)
- `WebView2-LICENSE.txt`

The package can also contain the scientific documentation, examples, data and source ZIP. Double-click `Yorunge.exe`.

## Runtime and behavior

The installed WebView2 Runtime is detected before starting the local server. If unavailable, the window explains the requirement and displays Microsoft's official download address. No automatic installation or external-browser fallback occurs.

The host starts its own hidden `yorunge-sim.exe serve 17971`, confirms that this child's PID owns the listening port before contacting it, checks the Yörünge health identity, and opens `http://127.0.0.1:17971/studio?alan=materials`. An occupied port is an error; it never attaches to or stops an existing service. A Windows job with `KILL_ON_JOB_CLOSE` plus normal-close cleanup ends only this owned child. A per-session mutex keeps one Studio instance; another launch activates the existing window.

WebView2 data and localStorage persist under `%LOCALAPPDATA%/Yorunge/Studio`; logs are in its `logs` subfolder. The fixed origin/port keeps saved local work stable across launches. Closing the window stops its server, while saved browser data remains.

Same-origin pages receive the `desktop-mode` class and `/studio/theme.css`; science/research/mechanics navigation additionally receives `studio=1` so the server can insert the theme before page scripts initialize. External navigation is blocked, with an address-copy dialog for user-initiated links. Downloads, including blob JSON and CSV exports, use a native Save File dialog. No script-to-process bridge, host objects, web-message bridge, shell execution, or command API is exposed to HTML.

## Official references

- [Microsoft WebView2 WinForms guide](https://learn.microsoft.com/en-us/microsoft-edge/webview2/get-started/winforms)
- [Runtime distribution and detection](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/distribution)
- [User data folders](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/user-data-folder)
- [DownloadStarting API](https://learn.microsoft.com/en-us/dotnet/api/microsoft.web.webview2.core.corewebview2.downloadstarting)
- [Microsoft.Web.WebView2 on NuGet](https://www.nuget.org/packages/Microsoft.Web.WebView2/1.0.4370.26)
- [Official runtime download](https://developer.microsoft.com/microsoft-edge/webview2/#download-section)
