# Yörünge

Rust ile yazılmış, insanların ve AI araçlarının atış koşullarını değiştirerek deney yapabildiği **yaklaşık 2B fizik simülatörü**.

Bir taşın kütlesini, eşdeğer çapını, başlangıç hızını, açısını ve yüksekliğini gir. Yerçekimi, yatay rüzgâr, sıcaklık ve basıncı değiştir; uçuş yolunu izle ve havasız ortamla karşılaştır.

## Çalıştırma

[Rust](https://www.rust-lang.org/tools/install) kurulu olmalı. VS Code ile bu klasörü aç, **Terminal → New Terminal** seç ve çalıştır:

```powershell
cargo run
```

Tarayıcıda **http://127.0.0.1:7878** adresini aç. Formdaki değerleri değiştirip **Simüle et** düğmesine bas. Durdurmak için terminalde `Ctrl+C` kullan. İlk derleme, bağımlılıkları indirirken internet gerektirir; sonraki çalıştırmalar yereldir. API anahtarı veya AI üyeliği gerekmez.

Port kullanımdaysa:

```powershell
cargo run -- serve 7879
```

## Neler yapar?

- Küresel eşdeğer kesit alanı ve karesel hava direnci ile hareketi hesaplar.
- X ve Y eksenlerinde aynı metre ölçeğini kullanan grafik ve zaman animasyonu sunar.
- Aynı koşulların havasız sonucunu karşılaştırma için çizer.
- Girdileri ve sonuçları JSON, yörünge noktalarını CSV olarak indirir.
- Aynı Rust motorunu kütüphane, komut satırı ve yerel HTTP API üzerinden kullanır.
- Geçersiz girdileri açık hata ile reddeder. Aynı girdiler aynı sürümde aynı sonucu verir.

## AI / otomasyon kullanımı

Bir AI aracı parametreleri JSON olarak üretip motoru çağırabilir. Bu programın kendisi bir dil modeli değildir.

```powershell
cargo run --quiet -- simulate scenarios/tas.json
cargo run --quiet -- simulate scenarios/havasiz.json
'{"mass_g":150,"wind_m_s":-3}' | cargo run --quiet -- simulate -
cargo run --quiet -- defaults
```

Başarılı CLI çıktısı yalnızca JSON'dur. Hatalar JSON olarak stderr'e yazılır; çıkış kodu sıfırdan farklı olur. Eksik alanlar varsayılanlarla doldurulur; bilinmeyen alanlar reddedilir. Yanıttaki `parameters`, gerçekten kullanılan tüm değerleri içerir.

Sunucu çalışırken PowerShell:

```powershell
$body = Get-Content -Raw scenarios/tas.json
$result = Invoke-RestMethod http://127.0.0.1:7878/api/simulate -Method Post -ContentType 'application/json' -Body $body
$result.summary
```

`GET /api/defaults` varsayılan girdileri, `GET /api/health` sunucu durumunu verir. `POST /api/simulate` aynı JSON şemasını kullanır. Sunucu yalnızca `127.0.0.1` üzerinde dinler; farklı web sitelerinin Origin başlıklı isteklerini kabul etmez. Kimlik doğrulamalı, herkese açık bir barındırma hizmeti olarak tasarlanmamıştır.

## Parametreler ve birimler

| Alan | Varsayılan | Kabul edilen aralık | Açıklama |
|---|---:|---:|---|
| `mass_g` | 100 | 1–10000 | Kütle, gram |
| `diameter_cm` | 4 | 0.1–50 | Eşdeğer küre çapı, cm |
| `speed_m_s` | 12 | 0–60 | Başlangıç hızı, m/s |
| `angle_deg` | 40 | -90–90 | Yataydan açı; pozitif yukarı |
| `height_m` | 1.5 | 0–100 | Başlangıç model yüksekliği, m |
| `gravity_m_s2` | 9.80665 | 0.1–30 | Aşağı yönlü ivme, m/s² |
| `wind_m_s` | 0 | -30–30 | Yatay rüzgâr; pozitif +x yönü |
| `temperature_c` | 15 | -60–60 | Hava sıcaklığı, °C |
| `pressure_hpa` | 1013.25 | 0–1100 | Yerel mutlak hava basıncı, hPa; 0 havasız ortam |
| `drag_coefficient` | 0.47 | 0–2 | Boyutsuz, sabit varsayılan sürükleme katsayısı |
| `time_step_s` | 0.01 | 0.001–0.05 | Çıktı örnekleme ve en büyük integrasyon adımı, s |
| `max_time_s` | 60 | 0.01–120 | Hesap süresi sınırı, s |

Bu aralıklar yazılımın girdi sınırlarıdır; modelin her kombinasyonda gerçek dünyayı doğruladığı anlamına gelmez. Kütle/çap kombinasyonunun gerçek nesnenle tutarlı olması gerekir. Hava durumu servisinin deniz seviyesine indirgenmiş basıncı yerine yerel mutlak basınç kullanılır.

## Çıktıyı yorumlama

- `status: "landed"`: Nesne model zemini `y=0` seviyesine ulaştı.
- `status: "time_limit"`: Süre bitti; yere henüz ulaşmadı. `landing_x_m` ve `flight_time_s` bu durumda `null` olur.
- `horizontal_displacement_m`: Son x konumu; rüzgârla negatif olabilir. Toplam yol uzunluğu değildir.
- `maximum_height_m`: Hesaplanan süre içindeki en yüksek y konumu.
- `trajectory`: Zaman, x/y konumu ve x/y hız bileşenleri. Uzunluklar metre, süre saniye, hızlar m/s.
- `derived`: Hava yoğunluğu ve sürükleme için kullanılan kesit alanı.

## Fizik modeli ve sınırları

Detaylar ve denklemler [model.md](model.md) dosyasında.

Taş küresel eşdeğer çapla temsil edilir. Sabit `Cd=0.47`, ölçülmüş bir taş katsayısı veya tüm hızlarda doğru bir küre katsayısı değildir. Şekil, yönelim ve akış rejimi gerçek sürüklemeyi değiştirir. Model kuru hava, sabit rüzgâr/yerçekimi ve düz zemin varsayar. Nem, yağmur, türbülans, dönme, Magnus etkisi, sekme ve deformasyon dahil değildir. Çap, sürükleme alanında kullanılır; zemin teması noktasal kütlenin `y=0` olmasına göre hesaplanır.

**Gerçek deneyle doğrulanmış değildir.** Analitik çözümlerle yazılımı kontrol etmek, gerçek taşın ölçüm hatalarını veya fiziksel belirsizliğini ortadan kaldırmaz. Gerçek bir deney için önce ölçülmüş uçuş verisiyle kalibrasyon ve bağımsız doğrulama gerekir.

## Geliştirme ve öğrenme

```powershell
cargo fmt -- --check
cargo clippy --all-targets -- -D warnings
cargo test
```

| Dosya | Görevi |
|---|---|
| `src/lib.rs` | Birim dönüşümü, fizik modeli, RK4, sonuçlar |
| `src/main.rs` | Komut satırı ve yerel HTTP sunucusu |
| `web/` | Form, grafik, animasyon; fizik hesabı Rust'tadır |
| `scenarios/` | Tekrar çalıştırılabilir JSON deneyleri |
| `tests/physics.rs` | Analitik fizik ve sınır durumu kontrolleri |

Rust öğrenirken önce `Parameters`, `validate` ve `simulate` içindeki `if` bloklarını incele. Sonra `src/main.rs` dosyasındaki `match` ile komut seçimine bak. Daha sonraki geliştirmeler: ölçüm dosyası karşılaştırması, farklı şekiller için katsayı modelleri ve belirsizlik aralıkları.
