use std::{
    env, fs,
    io::{self, Read},
    process::ExitCode,
};
use tiny_http::{Header, Response, Server, StatusCode};
use yorunge_sim::lab::{Scene, presets, run_json};
use yorunge_sim::{Parameters, simulate_json};

const MAX_INPUT_BYTES: u64 = 16_384;
const MAX_SCENE_BYTES: u64 = 262_144;

fn studio_html(source: &str, enabled: bool) -> String {
    if !enabled {
        return source.into();
    }
    source
        .replacen(
            "<html lang=\"tr\">",
            "<html lang=\"tr\" class=\"desktop-mode\">",
            1,
        )
        .replacen(
            "</head>",
            "<link rel=\"stylesheet\" href=\"/studio/theme.css\"></head>",
            1,
        )
}

fn serve(port: u16) -> Result<(), String> {
    let address = format!("127.0.0.1:{port}");
    let server = Server::http(&address).map_err(|e| format!("Sunucu açılamadı: {e}"))?;
    eprintln!("Yörünge hazır: http://{address}\nDurdurmak için Ctrl+C.");
    for mut request in server.incoming_requests() {
        let path = request.url().split('?').next().unwrap_or("").to_owned();
        let studio = request
            .url()
            .split_once('?')
            .is_some_and(|(_, query)| query.split('&').any(|part| part == "studio=1"));
        let method = request.method().as_str().to_owned();
        let origin_allowed = request
            .headers()
            .iter()
            .filter(|h| h.field.equiv("Origin"))
            .all(|h| {
                let origin = h.value.as_str();
                origin == format!("http://127.0.0.1:{port}")
                    || origin == format!("http://localhost:{port}")
            });
        let (status, content_type, body) = if !origin_allowed {
            (
                403,
                "application/json",
                error_json("Farklı bir siteden gelen isteğe izin verilmiyor."),
            )
        } else {
            match (method.as_str(), path.as_str()) {
                ("GET", "/") => (
                    200,
                    "text/html; charset=utf-8",
                    if studio { include_str!("../web/studio/index.html").into() }
                    else { include_str!("../web/science/index.html").into() },
                ),
                ("GET", "/studio") => (
                    200,
                    "text/html; charset=utf-8",
                    include_str!("../web/studio/index.html").into(),
                ),
                ("GET", "/studio/theme.css") => (
                    200,
                    "text/css; charset=utf-8",
                    include_str!("../web/studio/theme.css").into(),
                ),
                ("GET", "/enerji") => (200, "text/html; charset=utf-8", include_str!("../web/engineering/index.html").into()),
                ("GET", "/engineering/style.css") => (200, "text/css; charset=utf-8", include_str!("../web/engineering/style.css").into()),
                ("GET", "/engineering/app.js") => (200, "text/javascript; charset=utf-8", include_str!("../web/engineering/app.js").into()),
                ("GET", "/hucre") => (200, "text/html; charset=utf-8", include_str!("../web/cell-workbench/index.html").into()),
                ("GET", "/assets/cell-workbench.css") => (200, "text/css; charset=utf-8", include_str!("../web/cell-workbench/style.css").into()),
                ("GET", "/assets/cell-workbench.js") => (200, "text/javascript; charset=utf-8", include_str!("../web/cell-workbench/dist/cell-workbench.js").into()),
                ("GET", "/arge") => (
                    200,
                    "text/html; charset=utf-8",
                    studio_html(include_str!("../web/research/index.html"), studio),
                ),
                ("GET", "/research/style.css") => (
                    200,
                    "text/css; charset=utf-8",
                    include_str!("../web/research/style.css").into(),
                ),
                ("GET", "/research/dist/research.js") => (
                    200,
                    "text/javascript; charset=utf-8",
                    include_str!("../web/research/dist/research.js").into(),
                ),
                ("GET", "/api/enzymes/presets") => (
                    200,
                    "application/json",
                    yorunge_sim::enzymes::presets().to_string(),
                ),
                ("GET", "/science/style.css") => (
                    200,
                    "text/css; charset=utf-8",
                    include_str!("../web/science/style.css").into(),
                ),
                ("GET", "/science/dist/science.js") => (
                    200,
                    "text/javascript; charset=utf-8",
                    include_str!("../web/science/dist/science.js").into(),
                ),
                ("GET", "/api/elements") => (
                    200,
                    "application/json",
                    include_str!("../data/periodic-table.json").into(),
                ),
                ("GET", "/api/chemistry/presets") => (
                    200,
                    "application/json",
                    yorunge_sim::chemistry::presets().to_string(),
                ),
                ("GET", "/api/cells/presets") => (
                    200,
                    "application/json",
                    yorunge_sim::cells::presets().to_string(),
                ),
                (
                    "POST",
                    "/api/chemistry/analyze"
                    | "/api/cells/simulate"
                    | "/api/enzymes/simulate"
                    | "/api/engineering/thermal"
                    | "/api/engineering/circuit"
                    | "/api/enzymes/sweep",
                ) => {
                    let limit = if path == "/api/chemistry/analyze" {
                        MAX_SCENE_BYTES
                    } else {
                        MAX_INPUT_BYTES
                    };
                    let mut body = String::new();
                    let read = request
                        .as_reader()
                        .take(limit + 1)
                        .read_to_string(&mut body);
                    if read.is_err() || body.len() as u64 > limit {
                        (
                            413,
                            "application/json",
                            error_json("Girdi boyut sınırını aşıyor veya geçerli UTF-8 değil."),
                        )
                    } else {
                        let result = match path.as_str() {
                            "/api/chemistry/analyze" => yorunge_sim::chemistry::analyze_json(&body),
                            "/api/enzymes/simulate" => yorunge_sim::enzymes::simulate_json(&body),
                            "/api/enzymes/sweep" => yorunge_sim::enzymes::sweep_json(&body),
                            "/api/engineering/thermal" => yorunge_sim::engineering::thermal_json(&body),
                            "/api/engineering/circuit" => yorunge_sim::engineering::circuit_json(&body),
                            _ => yorunge_sim::cells::simulate_json(&body),
                        };
                        match result {
                            Ok(result) => (200, "application/json", result),
                            Err(error) => (400, "application/json", error_json(&error)),
                        }
                    }
                }
                ("GET", "/mekanik") => (
                    200,
                    "text/html; charset=utf-8",
                    studio_html(include_str!("../web/lab/index.html"), studio),
                ),
                ("GET", "/atis") => (
                    200,
                    "text/html; charset=utf-8",
                    studio_html(include_str!("../web/index.html"), studio),
                ),
                ("GET", "/lab/style.css") => (
                    200,
                    "text/css; charset=utf-8",
                    include_str!("../web/lab/style.css").into(),
                ),
                ("GET", "/lab/dist/lab.js") => (
                    200,
                    "text/javascript; charset=utf-8",
                    include_str!("../web/lab/dist/lab.js").into(),
                ),
                ("GET", "/api/lab/presets") => (200, "application/json", presets().to_string()),
                ("POST", "/api/lab/simulate" | "/api/lab/validate") => {
                    let mut body = String::new();
                    let read = request
                        .as_reader()
                        .take(MAX_SCENE_BYTES + 1)
                        .read_to_string(&mut body);
                    if read.is_err() || body.len() as u64 > MAX_SCENE_BYTES {
                        (
                            413,
                            "application/json",
                            error_json("Sahne UTF-8 JSON olmalı ve 256 KiB'ı aşmamalı."),
                        )
                    } else {
                        let result = if path == "/api/lab/validate" {
                            serde_json::from_str::<Scene>(&body)
                                .map_err(|e| e.to_string())
                                .and_then(|scene| {
                                    scene.validate()?;
                                    serde_json::to_string(&scene).map_err(|e| e.to_string())
                                })
                        } else {
                            run_json(&body)
                        };
                        match result {
                            Ok(result) => (200, "application/json", result),
                            Err(error) => (400, "application/json", error_json(&error)),
                        }
                    }
                }
                ("GET", "/style.css") => (
                    200,
                    "text/css; charset=utf-8",
                    include_str!("../web/style.css").into(),
                ),
                ("GET", "/app.js") => (
                    200,
                    "text/javascript; charset=utf-8",
                    include_str!("../web/app.js").into(),
                ),
                ("GET", "/api/defaults") => (
                    200,
                    "application/json",
                    serde_json::to_string_pretty(&Parameters::default()).unwrap(),
                ),
                ("GET", "/api/health") => (200, "application/json", serde_json::json!({
                    "status": "ok", "application": "yorunge", "version": env!("CARGO_PKG_VERSION")
                }).to_string()),
                ("POST", "/api/simulate") => {
                    let mut body = String::new();
                    let read = request
                        .as_reader()
                        .take(MAX_INPUT_BYTES + 1)
                        .read_to_string(&mut body);
                    if read.is_err() || body.len() as u64 > MAX_INPUT_BYTES {
                        (
                            413,
                            "application/json",
                            error_json("Girdi UTF-8 JSON olmalı ve 16 KiB'ı aşmamalı."),
                        )
                    } else {
                        match simulate_json(&body) {
                            Ok(result) => (200, "application/json", result),
                            Err(error) => (400, "application/json", error_json(&error)),
                        }
                    }
                }
                _ => (
                    404,
                    "application/json",
                    error_json("Bu yol veya yöntem bulunamadı."),
                ),
            }
        };
        let mut response = Response::from_string(body).with_status_code(StatusCode(status));
        for (name, value) in [
            ("Content-Type", content_type),
            ("X-Content-Type-Options", "nosniff"),
            ("Cache-Control", "no-store"),
            (
                "Content-Security-Policy",
                "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; frame-ancestors 'none'",
            ),
        ] {
            response.add_header(Header::from_bytes(name, value).unwrap());
        }
        if let Err(error) = request.respond(response) {
            eprintln!("Yanıt gönderilemedi: {error}");
        }
    }
    Ok(())
}

fn error_json(message: &str) -> String {
    serde_json::json!({"error": message}).to_string()
}

fn run() -> Result<(), String> {
    let args: Vec<String> = env::args().skip(1).collect();
    match args.first().map(String::as_str).unwrap_or("serve") {
        "serve" if args.len() <= 2 => {
            let port = args
                .get(1)
                .map(|p| p.parse::<u16>())
                .transpose()
                .map_err(|_| "Port 1–65535 arasında olmalı.")?
                .unwrap_or(7878);
            if port == 0 {
                return Err("Port 1–65535 arasında olmalı.".into());
            }
            serve(port)
        }
        "simulate" | "lab-simulate" | "chemistry-analyze" | "cells-simulate"
        | "enzymes-simulate" | "enzymes-sweep" | "thermal-simulate" | "circuit-solve"
            if args.len() <= 2 =>
        {
            let limit = if args[0] == "lab-simulate" || args[0] == "chemistry-analyze" {
                MAX_SCENE_BYTES
            } else {
                MAX_INPUT_BYTES
            };
            let mut input = String::new();
            match args.get(1).map(String::as_str).unwrap_or("-") {
                "-" => {
                    io::stdin()
                        .take(limit + 1)
                        .read_to_string(&mut input)
                        .map_err(|e| e.to_string())?;
                }
                path => {
                    fs::File::open(path)
                        .map_err(|e| e.to_string())?
                        .take(limit + 1)
                        .read_to_string(&mut input)
                        .map_err(|e| e.to_string())?;
                }
            }
            if input.len() as u64 > limit {
                return Err(format!("Girdi {} KiB'ı aşıyor.", limit / 1024));
            }
            println!(
                "{}",
                match args[0].as_str() {
                    "lab-simulate" => run_json(&input)?,
                    "chemistry-analyze" => yorunge_sim::chemistry::analyze_json(&input)?,
                    "cells-simulate" => yorunge_sim::cells::simulate_json(&input)?,
                    "enzymes-simulate" => yorunge_sim::enzymes::simulate_json(&input)?,
                    "enzymes-sweep" => yorunge_sim::enzymes::sweep_json(&input)?,
                    "thermal-simulate" => yorunge_sim::engineering::thermal_json(&input)?,
                    "circuit-solve" => yorunge_sim::engineering::circuit_json(&input)?,
                    _ => simulate_json(&input)?,
                }
            );
            Ok(())
        }
        "defaults" if args.len() == 1 => {
            println!(
                "{}",
                serde_json::to_string_pretty(&Parameters::default()).unwrap()
            );
            Ok(())
        }
        "lab-presets" if args.len() == 1 => {
            println!("{}", presets());
            Ok(())
        }
        "chemistry-presets" if args.len() == 1 => {
            println!("{}", yorunge_sim::chemistry::presets());
            Ok(())
        }
        "cells-presets" if args.len() == 1 => {
            println!("{}", yorunge_sim::cells::presets());
            Ok(())
        }
        "enzymes-presets" if args.len() == 1 => {
            println!("{}", yorunge_sim::enzymes::presets());
            Ok(())
        }
        "--help" | "-h" | "help" => {
            println!(
                "Studio: /studio · Hücre Ar-Ge: /hucre · Isı ve elektrik: /enerji\nyorunge-sim thermal-simulate scenarios/thermal.json\nyorunge-sim circuit-solve scenarios/circuit.json"
            );
            println!(
                "Biyoloji Ar-Ge: /arge\nyorunge-sim enzymes-simulate scenarios/enzyme-baseline.json\nyorunge-sim enzymes-sweep scenarios/enzyme-sweep.json\nyorunge-sim enzymes-presets\n"
            );
            println!(
                "Yörünge — Madde ve yaşam laboratuvarı\n\nyorunge-sim serve [port]\nyorunge-sim lab-simulate scenarios/lab-drop.json\nyorunge-sim chemistry-analyze scenarios/water.json\nyorunge-sim cells-simulate scenarios/cell-osmosis.json\nyorunge-sim lab-presets\nyorunge-sim chemistry-presets\nyorunge-sim cells-presets\nyorunge-sim simulate scenarios/tas.json\nyorunge-sim simulate -   (stdin'den JSON)\nyorunge-sim defaults\n\nKomut verilmezse 7878 portunda laboratuvar açılır. /mekanik 3B mekaniği, /atis 2B deneyi açar."
            );
            Ok(())
        }
        _ => Err("Bilinmeyen komut/argüman. Kullanım için --help.".into()),
    }
}

fn main() -> ExitCode {
    match run() {
        Ok(()) => ExitCode::SUCCESS,
        Err(error) => {
            eprintln!("{}", error_json(&error));
            ExitCode::FAILURE
        }
    }
}
