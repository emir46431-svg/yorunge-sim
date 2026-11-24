# Yörünge — Mekanik araştırma alanı

İnsanların ve AI araçlarının aynı deney tanımını kullanabildiği katı cisim çalışma alanı. Kendi sahneni kur, koşulları değiştir, hesaplanan hareketi ölç ve denemeleri karşılaştır.

Katı cisim, çarpışma ve yay modelleri kullanılır. Tüm fizik alanlarını kapsamaz; akışkan, ısı ve elektrik bu hesapta yoktur. Gerçek deneylerle doğrulanmış mühendislik aracı değildir.

## Başlat

Windows paketini indirdiysen ZIP'i bir klasöre çıkar ve `yorunge-sim.exe` dosyasını aç. Açılan pencereyi açık tut; tarayıcıdan **http://127.0.0.1:7878/mekanik** adresine git. Bu paket Rust veya Node.js kurulumu istemez. Pencereyi kapatmak sunucuyu durdurur.

Rust kurulu bilgisayarda proje klasöründe:

```powershell
cargo run
```

Tarayıcıda **http://127.0.0.1:7878/mekanik** adresini aç. Port doluysa `cargo run -- serve 7879` kullan. Durdurmak için sunucunun terminalinde `Ctrl+C` tuşlarına bas.

Paketlenmiş 3B arayüz repoda bulunduğu için çalıştırmak için Node.js gerekmez. İlk Rust derlemesi bağımlılıkları indirebilir; kurulumdan sonraki deneyler tamamen yereldir. API anahtarı veya AI üyeliği gerekmez.

## Bir deney kur

1. İlk açılışta boş sahne gelir; daha önce kaydedilen yerel çalışma varsa geri yüklenir. Deneyine ad ve hipotez/not ekle. Düşme, eğik düzlem, domino ve yay sahneleri kapalı **Örnek başlangıç düzenleri** bölümündedir.
2. Küre, kutu veya silindir ekle. Sahnede ya da listede nesneyi seç.
3. Renkli eksenlerden sürükleyerek taşı veya döndür. Sağ panelde kütle, boyut, başlangıç hızı ve malzeme hazır ayarlarını değiştir.
4. Ortam sürtünmesi, zemin esnekliği, süre ve 30/60 Hz çıktı örneklemesini belirle. Fizik adımı sabit 1/120 saniyedir. **Çalıştır** ile deneyin tamamını hesapla ve oynat. Duraklatabilir, ağır çekimde izleyebilir, tek kare ilerleyebilir veya zaman çubuğuyla geri gidebilirsin.
5. **Kuruluma dön** başlangıç düzenini gösterir. Bir ayar değişince eski sonuç geçersizleşir; yeni deney hesaplanır.
6. **Kaydet**, başlangıç sahnesini ve notunu JSON proje dosyasında saklar. **Deney aç**, bu dosyayı veya önceki ham sahne JSON'unu yükler. Sonuç JSON'u ve tüm cisimlerin SI birimindeki CSV'si ayrıca indirilebilir.

Sol sürükleme kamerayı döndürür, sağ sürükleme kaydırır, tekerlek yakınlaştırır. Küçük ekranlarda özellik panelleri sahnenin altına geçer. Klavye ile formdan konum girerek nesne yerleştirmek de mümkündür.

## Ölçümler ve karşılaştırma

Hesaptan sonra bir cisim seç. **Ölçümler ve zaman grafikleri** bölümünde X/Y/Z eksenlerinden birindeki konum ve hız büyüklüğü zamana karşı gösterilir. Sayısal kartlar seçili cismin net yer değiştirmesini, ardışık çıktı noktaları arasındaki toplam yolu, örneklenmiş en yüksek hızı ve son öteleme kinetik enerjisini verir.

Konum metre, zaman saniye, hız m/s, kütle kg ve enerji joule birimindedir. Yol, örnek konumları birleştiren doğru parçalarının toplamıdır; örnekler arasındaki eğri hareket ve çarpışmalar kaçabilir. En yüksek hız yalnız kaydedilen örnekler içindir. Son öteleme enerjisi `½mv²` ile hesaplanır; sabit cisim için sıfırdır. Dönme, yerçekimi ve yay enerjisini içermez; toplam mekanik enerji veya korunum testi değildir.

**Denemeyi deftere ekle**, seçili cisimle birlikte hesabı, başlangıç sahnesini ve notu bu oturum için saklar. En fazla üç kayıt vardır; dolduğunda yer açmak için bir kayıt kaldır. Yeni koşullarla aynı cismi tekrar hesapladıktan sonra eski kayıtlardaki **Grafikte karşılaştır** kutularını seç. Güncel hesaba en fazla iki kayıt eklenir. Eşleştirme cisim kimliğine dayanır; farklı kimlikli cisimler otomatik eşdeğer kabul edilmez. Eğriler renk ve çizgi deseniyle ayrılır; her kayıt kütle, başlangıç konumu/hızı, yerçekimi, süre ve örnekleme bilgisini gösterir. **Girdileri indir** kaydın tam başlangıç koşullarını ve notunu verir.

Defter sayfa kapanınca veya yenilenince silinir. Kalıcı kayıt için proje girdilerini ve sonuç dosyalarını indir. Kurulum değişince güncel hesap, ölçümler ve grafikler temizlenir; defterdeki eski hesaplar kendi girdileriyle korunur. Yerel saklama alanı yalnız en son başlangıç sahnesini ve deney notunu tutar.

## Dosya biçimleri

Proje dosyası `{format:"yorunge-mechanics",version:1,notes:"...",scene:{...}}` biçimindedir; deney adı `scene.name` alanındadır. API/CLI'ye yalnız **scene** nesnesini gönder. Ham sahne dosyaları hâlâ açılır. İçe aktarılmış sonuçlar çalıştırılmaz veya doğru kabul edilmez; sonuçlar tekrar hesaplanır. Proje dosyası en fazla 300 KiB, içerdiği sahne HTTP isteği en fazla 256 KiB ve not en fazla 4000 karakter olabilir.

**CSV indir · SI**, her çıktı zamanı ve her cisim için bir satır verir: deney adı, cisim kimliği/adı, sabitlik, kütle, zaman, x/y/z konumu, doğrusal hız bileşenleri ve büyüklüğü, açısal hız (rad/s), dönüş kuaterniyonu `(x,y,z,w)` ve öteleme enerjisi. Ham hesap örnekleri dışa aktarılır; oynatma için ara değerlenen kareler kullanılmaz. Ondalık ayırıcı nokta, sütun ayırıcı virgüldür; UTF-8 BOM ve CRLF satır sonları kullanılır. Tırnaklar ve satır sonları CSV kurallarına göre korunur. Elektronik tablo formülü gibi başlayan metin alanlarına güvenlik için tek tırnak eklenir; negatif sayısal değerler değiştirilmez.

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
| `web/lab/entry.js` | Deney düzenleme, dosyalar, grafikler, oturum defteri ve oynatma |
| `web/lab/analysis.js` | SI ölçümleri, güvenli CSV ve proje zarfı |
| `web/lab/viewport.js` | 3B kamera, nesne seçme ve taşıma |
| `web/lab/dist/lab.js` | Yerel paketlenmiş arayüz |
| `tests/` | 3B ve 2B fizik/doğrulama testleri |

Üçüncü taraf paketler kendi lisanslarına tabidir: [Three.js bildirimi](third-party-licenses.txt), [Rust bağımlılıklarının bildirimleri](rust-third-party-licenses.txt).
