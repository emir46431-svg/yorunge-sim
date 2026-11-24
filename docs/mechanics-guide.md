# Yörünge — 3B fizik laboratuvarı

İnsanların ve AI araçlarının aynı deney tanımını kullanabildiği, sade bir fizik çalışma alanı. Hedef: nesneleri yerleştir, özelliklerini seç, deneyi çalıştır, ölç ve yeniden dene.

**v0.2, katı cisim mekaniği için çalışan bir önizlemedir.** Tüm fizik alanlarını kapsamaz; akışkan, ısı ve elektrik modülleri yol haritasındadır.

## Başlat

Windows paketini indirdiysen ZIP'i bir klasöre çıkar ve `yorunge-sim.exe` dosyasını aç. Açılan pencereyi açık tut; tarayıcıdan **http://127.0.0.1:7878/mekanik** adresine git. Bu paket Rust veya Node.js kurulumu istemez. Pencereyi kapatmak sunucuyu durdurur.

Rust kurulu bilgisayarda proje klasöründe:

```powershell
cargo run
```

Tarayıcıda **http://127.0.0.1:7878/mekanik** adresini aç. Port doluysa `cargo run -- serve 7879` kullan. Durdurmak için sunucunun terminalinde `Ctrl+C` tuşlarına bas.

Paketlenmiş 3B arayüz repoda bulunduğu için çalıştırmak için Node.js gerekmez. İlk Rust derlemesi bağımlılıkları indirebilir; kurulumdan sonraki deneyler tamamen yereldir. API anahtarı veya AI üyeliği gerekmez.

## Bir deney kur

1. Düşme, eğik düzlem, domino veya yay deneylerinden birini aç; istersen boş deneyle başla.
2. Küre, kutu veya silindir ekle. Sahnede ya da listede nesneyi seç.
3. Renkli eksenlerden sürükleyerek taşı veya döndür. Sağ panelde kütle, boyut, başlangıç hızı ve malzeme hazır ayarlarını değiştir.
4. **Çalıştır** ile deneyin tamamını hesapla ve oynat. Duraklatabilir, ağır çekimde izleyebilir, tek kare ilerleyebilir veya zaman çubuğuyla geri gidebilirsin.
5. **Kuruluma dön** başlangıç düzenini gösterir. Bir ayar değişince eski sonuç geçersizleşir; yeni deney hesaplanır.
6. **Kaydet**, başlangıç sahnesini JSON olarak indirir. **Deney aç**, bu dosyayı yeniden yükler. Sonuç JSON'u ayrıca indirilebilir.

Sol sürükleme kamerayı döndürür, sağ sürükleme kaydırır, tekerlek yakınlaştırır. Küçük ekranlarda özellik panelleri sahnenin altına geçer. Klavye ile formdan konum girerek nesne yerleştirmek de mümkündür.

## Bu sürümde çalışanlar

- 3B küre, kutu ve silindir katı cisimleri; sabit cisimler ve düz zemin.
- Yerçekimi, çarpışma, sürtünme, esneklik, dönme, başlangıç hızları.
- Nesne merkezleri arasında sönümlü yay bağlantıları.
- 60 nesneye, 16 yaya ve 30 saniyeye kadar sınırlandırılmış deneyler.
- İnsan arayüzü ve AI API'si için aynı **Rust / Rapier 0.36.1** hesabı.
- Three.js ile 3B görüntüleme; tarayıcı yalnızca hesaplanan pozları oynatır.
- Önceki hava dirençli 2B atış deneyi: **http://127.0.0.1:7878/atis**. [2B rehberi](2d-guide.md).

## AI ve otomasyon

Bir AI, sahne JSON'unu oluşturup veya değiştirip aynı motoru çağırabilir. Programın içinde bir dil modeli ya da doğal dil sohbeti yoktur.

```powershell
cargo run --quiet -- lab-simulate scenarios/lab-drop.json
cargo run --quiet -- lab-presets
Get-Content -Raw scenarios/lab-drop.json | cargo run --quiet -- lab-simulate -
```

Başarıda stdout'a JSON, hatada stderr'e JSON ve sıfırdan farklı çıkış kodu döner. Eksik alanların varsayılanları vardır; bilinmeyen alanlar, geçersiz kimlikler ve izin verilen aralığın dışındaki değerler reddedilir. JSON sayılarında API'nin belgelediği birimleri kullan.

Sunucu açıkken:

```powershell
$scene = Get-Content -Raw scenarios/lab-drop.json
$result = Invoke-RestMethod http://127.0.0.1:7878/api/lab/simulate -Method Post -ContentType 'application/json; charset=utf-8' -Body ([Text.Encoding]::UTF8.GetBytes($scene))
$result.summary
```

| Yol | İşlev |
|---|---|
| `GET /api/lab/presets` | Hazır sahneler ve modül durumları |
| `POST /api/lab/validate` | Sahneyi doğrular, varsayılanları doldurur |
| `POST /api/lab/simulate` | Sahneyi hesaplar; zaman, konum, dönüş ve hız karelerini verir |
| `GET /api/health` | Sunucu durumu |
| `POST /api/simulate` | Önceki 2B atış modeli |

İstek sınırı 3B sahnede 256 KiB, 2B parametrelerde 16 KiB'dır. Sunucu yalnızca `127.0.0.1` üzerinde dinler ve başka sitelerin Origin başlıklı isteklerini reddeder. Bu sunucu, kimlik doğrulamalı bir internet hizmeti değildir.

## Modelin sınırları

Katı cisimler şekil değiştirmez. Malzeme adları ölçülmüş malzeme verisi değildir: gerçek hesabı sayısal kütle, sürtünme ve esneklik belirler. Hazır ayarlar örnektir; kütle otomatik yoğunluktan hesaplanmaz. Yay uçları cisimlerin merkezlerine bağlanır. Zemin y=0 düzlemidir; başlangıçta birbirinin içine yerleştirilen nesneler yapay hareket üretebilir.

3B modelde hava direnci, nem, akışkanlar, kırılma, ısı ve elektrik yoktur. Hava direnci yalnızca ayrı 2B atış modelindedir. **Gerçek deney verisiyle doğrulanmış bir mühendislik aracı değildir.** Matematiksel testlerin geçmesi gerçek malzeme veya koşulların doğruluğunu garanti etmez.

Fizik sabit 120 Hz'de ilerler; sonuçlar 30/60 Hz örneklenir. İstenen süre bir fizik adımına yukarı yuvarlanır; gerçek süre `summary.duration_s` içinde verilir. Ayrıntılar: [3B model ve API](mechanics.md), [genişleme planı](roadmap.md).

Bu sürümün çalıştırılan kontrolleri: [doğrulama kaydı](verification.md).

## Geliştirme

```powershell
npm ci --ignore-scripts
npm run build
cargo fmt -- --check
cargo clippy --all-targets -- -D warnings
cargo test
cargo build --release
```

Arayüz kaynaklarını değiştirdikten sonra `npm run build`, ardından `cargo build` çalıştır. Web dosyaları yürütülebilir dosyaya gömülür; çalışan sunucuyu yeniden başlat ve sayfayı yenile.

| Dosya | Görev |
|---|---|
| `src/lab.rs` | 3B sahne şeması, doğrulama, Rapier motoru ve hazır deneyler |
| `src/lib.rs` | Önceki 2B hava dirençli atış modeli |
| `src/main.rs` | Yerel HTTP sunucusu ve CLI |
| `web/lab/entry.js` | Deney düzenleme, dosyalar ve oynatma |
| `web/lab/viewport.js` | 3B kamera, nesne seçme ve taşıma |
| `web/lab/dist/lab.js` | Yerel paketlenmiş arayüz |
| `tests/` | 3B ve 2B fizik/doğrulama testleri |

Üçüncü taraf paketler kendi lisanslarına tabidir: [Three.js bildirimi](third-party-licenses.txt), [Rust bağımlılıklarının bildirimleri](rust-third-party-licenses.txt).
