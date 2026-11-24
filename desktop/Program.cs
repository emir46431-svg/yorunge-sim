using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.Windows.Forms;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.WinForms;

[assembly: AssemblyTitle("Yörünge Studio")]
[assembly: AssemblyDescription("Yörünge yerel bilim çalışma alanı")]
[assembly: AssemblyVersion("0.5.0.0")]
[assembly: AssemblyFileVersion("0.5.0.0")]

namespace Yorunge.Desktop
{
    internal static class Program
    {
        internal static readonly uint ActivateMessage = Native.RegisterWindowMessage("Yorunge.Studio.Activate.v1");

        [STAThread]
        private static void Main()
        {
            bool created;
            using (Mutex mutex = new Mutex(true, "Local\\Yorunge.Studio.v1", out created))
            {
                if (!created)
                {
                    Native.PostMessage(new IntPtr(0xffff), ActivateMessage, IntPtr.Zero, IntPtr.Zero);
                    return;
                }
                try
                {
                    Application.EnableVisualStyles();
                    Application.SetCompatibleTextRenderingDefault(false);
                    Application.Run(new StudioForm());
                }
                catch (Exception error)
                {
                    MessageBox.Show("Yörünge açılamadı.\n\n" + error.Message,
                        "Yörünge Studio", MessageBoxButtons.OK, MessageBoxIcon.Error);
                }
                finally { mutex.ReleaseMutex(); }
            }
        }
    }

    internal sealed class StudioForm : Form
    {
        private const int Port = 17971;
        private const string Origin = "http://127.0.0.1:17971";
        private const string StartUrl = Origin + "/studio?alan=materials";
        private const string RuntimeUrl = "https://developer.microsoft.com/microsoft-edge/webview2/#download-section";
        private readonly Panel waiting;
        private readonly Label message;
        private readonly Label detail;
        private readonly ProgressBar progress;
        private readonly TableLayoutPanel content;
        private readonly string dataRoot;
        private readonly object logGate = new object();
        private StreamWriter hostLog;
        private StreamWriter serverOut;
        private StreamWriter serverError;
        private Process server;
        private IntPtr serverJob;
        private WebView2 view;
        private bool closing;
        private bool failed;

        internal StudioForm()
        {
            Text = "Yörünge Studio";
            StartPosition = FormStartPosition.CenterScreen;
            ClientSize = new Size(1360, 860);
            MinimumSize = new Size(1040, 680);
            BackColor = Color.FromArgb(24, 25, 29);
            ForeColor = Color.FromArgb(229, 232, 238);
            Font = new Font("Segoe UI", 10);
            AutoScaleMode = AutoScaleMode.Dpi;
            dataRoot = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Yorunge", "Studio");
            waiting = new Panel { Dock = DockStyle.Fill, BackColor = BackColor };
            content = new TableLayoutPanel { Dock = DockStyle.Fill, ColumnCount = 1, RowCount = 5, Padding = new Padding(64) };
            content.RowStyles.Add(new RowStyle(SizeType.Percent, 38));
            content.RowStyles.Add(new RowStyle(SizeType.Absolute, 66));
            content.RowStyles.Add(new RowStyle(SizeType.Absolute, 100));
            content.RowStyles.Add(new RowStyle(SizeType.Absolute, 8));
            content.RowStyles.Add(new RowStyle(SizeType.Percent, 62));
            message = new Label { Text = "Yörünge Studio hazırlanıyor", Dock = DockStyle.Fill, TextAlign = ContentAlignment.MiddleCenter,
                Font = new Font("Segoe UI", 22, FontStyle.Bold), ForeColor = ForeColor };
            detail = new Label { Text = "Yerel çalışma alanı açılıyor…", Dock = DockStyle.Fill, TextAlign = ContentAlignment.TopCenter,
                ForeColor = Color.FromArgb(160, 167, 180), AutoEllipsis = false };
            progress = new ProgressBar { Dock = DockStyle.Fill, Style = ProgressBarStyle.Marquee, MarqueeAnimationSpeed = 30 };
            content.Controls.Add(message, 0, 1);
            content.Controls.Add(detail, 0, 2);
            content.Controls.Add(progress, 0, 3);
            waiting.Controls.Add(content);
            Controls.Add(waiting);
            Shown += StartStudio;
        }

        protected override void OnHandleCreated(EventArgs args)
        {
            base.OnHandleCreated(args);
            int dark = 1;
            try { Native.DwmSetWindowAttribute(Handle, 20, ref dark, sizeof(int)); } catch { }
        }

        protected override void WndProc(ref Message messageValue)
        {
            if ((uint)messageValue.Msg == Program.ActivateMessage)
            {
                if (WindowState == FormWindowState.Minimized) WindowState = FormWindowState.Normal;
                Show(); Activate(); Native.SetForegroundWindow(Handle);
            }
            base.WndProc(ref messageValue);
        }

        private async void StartStudio(object sender, EventArgs args)
        {
            try
            {
                string logs = Path.Combine(dataRoot, "logs");
                Directory.CreateDirectory(logs);
                string stamp = DateTime.Now.ToString("yyyyMMdd-HHmmss") + "-" + Process.GetCurrentProcess().Id;
                hostLog = OpenLog(Path.Combine(logs, stamp + "-desktop.log"));
                serverOut = OpenLog(Path.Combine(logs, stamp + "-server.stdout.log"));
                serverError = OpenLog(Path.Combine(logs, stamp + "-server.stderr.log"));
                var options = new CoreWebView2EnvironmentOptions { ReleaseChannels = CoreWebView2ReleaseChannels.Stable };
                string version;
                try { version = CoreWebView2Environment.GetAvailableBrowserVersionString(null, options); }
                catch (WebView2RuntimeNotFoundException)
                {
                    throw new InvalidOperationException("Microsoft Edge WebView2 Runtime gerekli. Otomatik kurulum yapılmadı.\n" +
                        "Microsoft'un resmi indirme adresi:\n" + RuntimeUrl);
                }
                Log("WebView2 Runtime: " + version);
                detail.Text = "Görüntüleme alanı hazırlanıyor. İlk açılış biraz daha uzun sürebilir…";
                view = new WebView2 { Dock = DockStyle.Fill, DefaultBackgroundColor = BackColor, Visible = false };
                Controls.Add(view);
                var environment = await CoreWebView2Environment.CreateAsync(null, dataRoot, options);
                if (closing || failed) return;
                await view.EnsureCoreWebView2Async(environment);
                if (closing || failed) return;
                ConfigureWebView();
                await view.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync(
                    "(()=>{if(location.origin!=='" + Origin + "')return;const apply=()=>{" +
                    "if(document.documentElement)document.documentElement.classList.add('desktop-mode');};" +
                    "const style=()=>{apply();if(!document.querySelector('link[href=\"/studio/theme.css\"]')){" +
                    "const link=document.createElement('link');link.rel='stylesheet';link.href='/studio/theme.css';" +
                    "link.dataset.yorungeDesktopTheme='true';(document.head||document.documentElement).appendChild(link);}};" +
                    "apply();if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',style,{once:true});else style();})();");
                if (closing || failed) return;
                detail.Text = "Hesap motoru başlatılıyor…";
                StartOwnedServer();
                await WaitForOwnedServer();
                if (closing || failed) return;
                Log("Navigating to " + StartUrl);
                view.CoreWebView2.Navigate(StartUrl);
            }
            catch (Exception error)
            {
                if (!closing) ShowFailure(error);
            }
        }

        private static StreamWriter OpenLog(string path)
        {
            return new StreamWriter(new FileStream(path, FileMode.CreateNew, FileAccess.Write, FileShare.ReadWrite)) { AutoFlush = true };
        }

        private void Log(string text)
        {
            lock (logGate) { if (hostLog != null) hostLog.WriteLine(DateTime.Now.ToString("O") + " " + text); }
        }

        private void ConfigureWebView()
        {
            var core = view.CoreWebView2;
            core.Settings.AreHostObjectsAllowed = false;
            core.Settings.IsWebMessageEnabled = false;
            core.Settings.AreDevToolsEnabled = false;
            core.Settings.AreDefaultContextMenusEnabled = false;
            core.Settings.IsStatusBarEnabled = false;
            core.Settings.AreBrowserAcceleratorKeysEnabled = false;
            core.NavigationStarting += OnNavigation;
            core.FrameNavigationStarting += delegate(object sender, CoreWebView2NavigationStartingEventArgs args)
            { if (!IsLocal(args.Uri) && args.Uri != "about:blank") args.Cancel = true; };
            core.NewWindowRequested += delegate(object sender, CoreWebView2NewWindowRequestedEventArgs args)
            {
                args.Handled = true;
                if (IsLocal(args.Uri)) core.Navigate(StudioUrl(args.Uri));
                else if (args.IsUserInitiated) ExplainExternalLink(args.Uri);
            };
            core.NavigationCompleted += delegate(object sender, CoreWebView2NavigationCompletedEventArgs args)
            {
                if (closing || failed) return;
                if (!args.IsSuccess)
                {
                    if (args.WebErrorStatus != CoreWebView2WebErrorStatus.OperationCanceled)
                        ShowFailure(new InvalidOperationException("Çalışma alanı yüklenemedi: " + args.WebErrorStatus));
                    return;
                }
                view.Visible = true; view.BringToFront(); waiting.Visible = false;
                Log("Workspace ready: " + core.Source);
            };
            core.ProcessFailed += delegate(object sender, CoreWebView2ProcessFailedEventArgs args)
            { if (!closing) ShowFailure(new InvalidOperationException("Görüntüleme işlemi durdu. Yörünge'yi yeniden açın.\n" + args.ProcessFailedKind)); };
            core.PermissionRequested += delegate(object sender, CoreWebView2PermissionRequestedEventArgs args)
            { args.State = CoreWebView2PermissionState.Deny; };
            core.DownloadStarting += OnDownloadStarting;
        }

        private static bool IsLocal(string address)
        {
            Uri uri;
            return Uri.TryCreate(address, UriKind.Absolute, out uri) && uri.Scheme == "http" &&
                uri.Host == "127.0.0.1" && uri.Port == Port && String.IsNullOrEmpty(uri.UserInfo);
        }

        private static bool IsLocalBlob(string address)
        {
            return address.StartsWith("blob:" + Origin + "/", StringComparison.Ordinal);
        }

        private static string StudioUrl(string address)
        {
            if (!IsLocal(address)) return address;
            var uri = new Uri(address);
            if (uri.AbsolutePath != "/" && uri.AbsolutePath != "/arge" && uri.AbsolutePath != "/mekanik" && uri.AbsolutePath != "/atis") return address;
            foreach (string part in uri.Query.TrimStart('?').Split('&')) if (part == "studio=1") return address;
            var builder = new UriBuilder(uri);
            builder.Query = uri.Query.TrimStart('?') + (uri.Query.Length > 1 ? "&" : "") + "studio=1";
            return builder.Uri.AbsoluteUri;
        }

        private void OnNavigation(object sender, CoreWebView2NavigationStartingEventArgs args)
        {
            if (closing || failed) { args.Cancel = true; return; }
            if (IsLocal(args.Uri))
            {
                string decorated = StudioUrl(args.Uri);
                if (decorated != args.Uri) { args.Cancel = true; view.CoreWebView2.Navigate(decorated); }
                return;
            }
            if (IsLocalBlob(args.Uri)) return;
            args.Cancel = true;
            if (args.IsUserInitiated) ExplainExternalLink(args.Uri);
        }

        private void ExplainExternalLink(string address)
        {
            // An explicit copy action is available; no URL is handed to the OS shell.
            BeginInvoke((Action)delegate
            {
                if (closing) return;
                using (var dialog = new Form { Text = "Harici bağlantı", StartPosition = FormStartPosition.CenterParent,
                    ClientSize = new Size(620, 170), MinimizeBox = false, MaximizeBox = false, FormBorderStyle = FormBorderStyle.FixedDialog,
                    BackColor = BackColor, ForeColor = ForeColor, Font = Font })
                {
                    var label = new Label { Text = "Bu bağlantı Yörünge dışındadır. İstersen adresi kopyalayabilirsin.",
                        Location = new Point(20, 18), Size = new Size(580, 34) };
                    var url = new TextBox { Text = address, ReadOnly = true, Location = new Point(20, 58), Width = 580 };
                    var copy = new Button { Text = "Adresi kopyala", Location = new Point(354, 110), Width = 130 };
                    copy.Click += delegate { try { Clipboard.SetText(address); } catch (ExternalException) { } };
                    var close = new Button { Text = "Kapat", Location = new Point(494, 110), Width = 106, DialogResult = DialogResult.Cancel };
                    dialog.Controls.AddRange(new Control[] { label, url, copy, close }); dialog.CancelButton = close;
                    dialog.ShowDialog(this);
                }
            });
        }

        private void OnDownloadStarting(object sender, CoreWebView2DownloadStartingEventArgs args)
        {
            var deferral = args.GetDeferral();
            args.Handled = true;
            BeginInvoke((Action)delegate
            {
                try
                {
                    if (closing) { args.Cancel = true; return; }
                    string fileName = Path.GetFileName(args.ResultFilePath);
                    if (String.IsNullOrWhiteSpace(fileName)) fileName = "yorunge-deney.json";
                    using (var save = new SaveFileDialog { Title = "Yörünge — dosyayı kaydet", FileName = fileName,
                        Filter = "Tüm dosyalar (*.*)|*.*", OverwritePrompt = true, RestoreDirectory = true })
                    {
                        if (save.ShowDialog(this) != DialogResult.OK) { args.Cancel = true; return; }
                        args.ResultFilePath = save.FileName;
                        Log("User selected download: " + save.FileName);
                    }
                }
                catch (Exception error) { args.Cancel = true; Log("Download: " + error); }
                finally { deferral.Complete(); }
            });
        }

        private void StartOwnedServer()
        {
            string executable = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "yorunge-sim.exe");
            if (!File.Exists(executable)) throw new FileNotFoundException("yorunge-sim.exe bulunamadı. Uygulama paketindeki dosyaları aynı klasörde tutun.", executable);
            foreach (var endpoint in IPGlobalProperties.GetIPGlobalProperties().GetActiveTcpListeners())
                if (endpoint.Port == Port) throw PortBusy();
            // Check the exact bind as well. No HTTP connection is made to an existing listener.
            var probe = new TcpListener(IPAddress.Loopback, Port) { ExclusiveAddressUse = true };
            try { probe.Start(); } catch (SocketException) { throw PortBusy(); } finally { probe.Stop(); }
            serverJob = Native.CreateKillOnCloseJob();
            server = new Process();
            server.StartInfo = new ProcessStartInfo(executable, "serve " + Port) {
                WorkingDirectory = AppDomain.CurrentDomain.BaseDirectory, UseShellExecute = false,
                CreateNoWindow = true, WindowStyle = ProcessWindowStyle.Hidden,
                RedirectStandardOutput = true, RedirectStandardError = true
            };
            server.OutputDataReceived += delegate(object sender, DataReceivedEventArgs args) { WriteServerLog(serverOut, args.Data); };
            server.ErrorDataReceived += delegate(object sender, DataReceivedEventArgs args) { WriteServerLog(serverError, args.Data); };
            if (!server.Start()) throw new InvalidOperationException("Hesap motoru başlatılamadı.");
            if (!Native.AssignProcessToJobObject(serverJob, server.Handle))
                throw new System.ComponentModel.Win32Exception(Marshal.GetLastWin32Error(), "Hesap motorunun uygulamayla birlikte kapanması ayarlanamadı.");
            server.BeginOutputReadLine(); server.BeginErrorReadLine();
            Log("Owned server PID " + server.Id + ", port " + Port);
            server.EnableRaisingEvents = true;
            server.Exited += delegate
            {
                if (closing || failed || !IsHandleCreated) return;
                try { BeginInvoke((Action)delegate { if (!closing && !failed) ShowFailure(new InvalidOperationException("Hesap motoru durdu. Günlüğü kontrol edip Yörünge'yi yeniden açın.")); }); }
                catch (InvalidOperationException) { }
            };
        }

        private static Exception PortBusy()
        {
            return new InvalidOperationException("Yörünge'nin 17971 portu başka bir işlem tarafından kullanılıyor.\n" +
                "Bu servise bağlanılmadı ve hiçbir işlem kapatılmadı. Açık bir Yörünge penceresi varsa onu kullanın; yoksa portu kullanan uygulamayı kontrol edin.");
        }

        private async Task WaitForOwnedServer()
        {
            using (var client = new HttpClient(new HttpClientHandler { UseProxy = false }) { Timeout = TimeSpan.FromSeconds(2) })
            {
                for (int attempt = 0; attempt < 100; attempt++)
                {
                    if (closing || failed) return;
                    if (server.HasExited) throw new InvalidOperationException("Hesap motoru başlatılırken durdu. server.stderr.log günlüğünü kontrol edin.");
                    int owner = Native.ListenerProcess(Port);
                    if (owner != 0 && owner != server.Id) throw PortBusy();
                    if (owner == server.Id)
                    {
                        string text = await client.GetStringAsync(Origin + "/api/health");
                        var health = new JavaScriptSerializer().Deserialize<Dictionary<string, object>>(text);
                        if (health.ContainsKey("application") && Convert.ToString(health["application"]) == "yorunge" &&
                            health.ContainsKey("status") && Convert.ToString(health["status"]) == "ok") return;
                        throw new InvalidOperationException("Paketin hesap motoru bu Studio sürümüyle uyumlu değil. v0.5 veya sonraki Yörünge paketini kullanın.");
                    }
                    await Task.Delay(200);
                }
                throw new TimeoutException("Hesap motoru zamanında hazır olmadı. Günlükleri kontrol edip yeniden deneyin.");
            }
        }

        private void WriteServerLog(StreamWriter writer, string line)
        {
            if (line == null) return;
            lock (logGate) { if (!closing && writer != null) { try { writer.WriteLine(line); } catch (ObjectDisposedException) { } } }
        }

        private void ShowFailure(Exception error)
        {
            if (failed || closing) return;
            failed = true; Log(error.ToString()); StopOwnedServer();
            if (view != null) { view.Dispose(); view = null; }
            waiting.Visible = true; waiting.BringToFront(); progress.Visible = false;
            content.RowStyles[2].Height = 220;
            message.Text = "Yörünge açılamadı";
            detail.Text = error.Message + "\n\nGünlükler: " + Path.Combine(dataRoot, "logs");
        }

        private void StopOwnedServer()
        {
            if (server != null)
            {
                try { if (!server.HasExited) { server.Kill(); server.WaitForExit(2000); } } catch (InvalidOperationException) { }
                catch (System.ComponentModel.Win32Exception error) { Log("Server shutdown: " + error.Message); }
                server.Dispose(); server = null;
            }
            if (serverJob != IntPtr.Zero) { Native.CloseHandle(serverJob); serverJob = IntPtr.Zero; }
        }

        protected override void OnFormClosing(FormClosingEventArgs args)
        {
            closing = true;
            if (view != null) { view.Dispose(); view = null; }
            StopOwnedServer();
            lock (logGate)
            {
                if (serverOut != null) serverOut.Dispose();
                if (serverError != null) serverError.Dispose();
                if (hostLog != null) { hostLog.Dispose(); hostLog = null; }
            }
            base.OnFormClosing(args);
        }
    }

    internal static class Native
    {
        [DllImport("user32.dll", CharSet = CharSet.Unicode)] internal static extern uint RegisterWindowMessage(string message);
        [DllImport("user32.dll")] internal static extern bool PostMessage(IntPtr hwnd, uint message, IntPtr wparam, IntPtr lparam);
        [DllImport("user32.dll")] internal static extern bool SetForegroundWindow(IntPtr hwnd);
        [DllImport("dwmapi.dll")] internal static extern int DwmSetWindowAttribute(IntPtr hwnd, int attribute, ref int value, int size);
        [DllImport("iphlpapi.dll", SetLastError = true)] private static extern uint GetExtendedTcpTable(IntPtr table, ref int size, bool order, int family, int tableClass, uint reserved);
        [DllImport("kernel32.dll", CharSet = CharSet.Unicode)] private static extern IntPtr CreateJobObject(IntPtr attributes, string name);
        [DllImport("kernel32.dll", SetLastError = true)] private static extern bool SetInformationJobObject(IntPtr job, int infoClass, IntPtr info, uint size);
        [DllImport("kernel32.dll", SetLastError = true)] internal static extern bool AssignProcessToJobObject(IntPtr job, IntPtr process);
        [DllImport("kernel32.dll")] internal static extern bool CloseHandle(IntPtr handle);

        [StructLayout(LayoutKind.Sequential)] private struct BasicLimits
        {
            public long ProcessTime, JobTime;
            public uint Flags;
            public UIntPtr MinimumWorkingSet, MaximumWorkingSet;
            public uint ActiveProcessLimit;
            public UIntPtr Affinity;
            public uint PriorityClass, SchedulingClass;
        }
        [StructLayout(LayoutKind.Sequential)] private struct IoCounters
        {
            public ulong ReadOperations, WriteOperations, OtherOperations, ReadBytes, WriteBytes, OtherBytes;
        }
        [StructLayout(LayoutKind.Sequential)] private struct ExtendedLimits
        {
            public BasicLimits Basic;
            public IoCounters Io;
            public UIntPtr ProcessMemory, JobMemory, PeakProcessMemory, PeakJobMemory;
        }

        internal static IntPtr CreateKillOnCloseJob()
        {
            IntPtr job = CreateJobObject(IntPtr.Zero, null);
            if (job == IntPtr.Zero) throw new System.ComponentModel.Win32Exception(Marshal.GetLastWin32Error());
            var limits = new ExtendedLimits(); limits.Basic.Flags = 0x2000;
            int size = Marshal.SizeOf(typeof(ExtendedLimits));
            IntPtr pointer = Marshal.AllocHGlobal(size);
            try
            {
                Marshal.StructureToPtr(limits, pointer, false);
                if (!SetInformationJobObject(job, 9, pointer, (uint)size))
                { int error = Marshal.GetLastWin32Error(); CloseHandle(job); throw new System.ComponentModel.Win32Exception(error); }
                return job;
            }
            finally { Marshal.FreeHGlobal(pointer); }
        }

        internal static int ListenerProcess(int port)
        {
            int size = 0;
            for (int retry = 0; retry < 4; retry++)
            {
                GetExtendedTcpTable(IntPtr.Zero, ref size, false, 2, 3, 0);
                IntPtr table = Marshal.AllocHGlobal(size);
                try
                {
                    uint result = GetExtendedTcpTable(table, ref size, false, 2, 3, 0);
                    if (result == 122) continue; // The system TCP table can grow between the two calls.
                    if (result != 0) throw new System.ComponentModel.Win32Exception((int)result);
                    int count = Marshal.ReadInt32(table);
                    for (int index = 0; index < count; index++)
                    {
                        IntPtr row = IntPtr.Add(table, 4 + index * 24);
                        int rawPort = Marshal.ReadInt32(row, 8);
                        int rowPort = ((rawPort & 255) << 8) | ((rawPort >> 8) & 255);
                        if (rowPort == port) return Marshal.ReadInt32(row, 20);
                    }
                    return 0;
                }
                finally { Marshal.FreeHGlobal(table); }
            }
            throw new InvalidOperationException("Yerel port sahibi doğrulanamadı. Yeniden deneyin.");
        }
    }
}
