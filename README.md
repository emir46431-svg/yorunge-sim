# Yörünge — Sanal Ar-Ge laboratuvarı

İnsanların ve AI araçlarının deney kurup sonuç inceleyebildiği yerel bilim çalışma alanı.

**v0.4**, hücre, molekül, element, malzeme ve mekanik alanlarına **enzim kinetiği ve araştırma defteri** ekler. Koşulları tara, denemeleri karşılaştır, gerçek ölçüm CSV'sini yükleyip model farklarını incele. Her alanın hesap kapsamı ayrıdır; tüm doğayı tek doğrulukta simüle ettiği iddia edilmez.

## Başlat

Windows ZIP paketini çıkar, `yorunge-sim.exe` dosyasını aç ve pencereyi açık tut. Tarayıcıdan **http://127.0.0.1:7878** adresine git. Rust veya Node.js kurulumu gerekmez. Programı durdurmak için terminali kapat veya `Ctrl+C` kullan.

Yeni biyoloji Ar-Ge alanı: **http://127.0.0.1:7878/arge**. Başlangıç için [adım adım araştırma kılavuzunu](docs/research-guide.md) aç.

Kaynak koddan çalıştırmak için Rust kurulu bilgisayarda `cargo run` komutunu kullan. Port doluysa `cargo run -- serve 7879` veya hazır pakette `.\yorunge-sim.exe serve 7879` çalıştır. İlk kaynak derlemesi bağımlılıkları indirebilir; hazır paket ve sonraki deneyler yerel çalışır, API anahtarı gerektirmez.

## Çalışma alanları

| Alan | Yapabileceklerin | Hesap kapsamı |
|---|---|---|
| Biyoloji Ar-Ge (`/arge`) | Enzim/substrat, beş inhibisyon seçeneği, 2–6 koşullu tarama, dört eğri, 12 kayıtlık defter, ölçüm CSV'si ve RMSE/MAE | İndirgenmiş Michaelis–Menten tümleşik ilerleme modeli; belirli bir enzime kalibre edilmedi |
| Moleküller | H/C/N/O atomu ekle; tek/çift/üçlü bağ kur veya ayır; parçaları gör; geri al/yinele | Valans sınırları ve tam bağlantı grafı eşleştirmesi |
| Elementler | 118 elementi ad, simge veya numarayla ara; aileye göre süz; atom/elektron bilgilerini incele | PubChem kaynaklı referans kataloğu ve şematik elektron kabukları |
| Malzemeler | Grafen, AB grafit, elmas, silisyum ve NaCl örgülerini döndür; grafit katmanlarını değiştir | Sonlu kristal kesitleri ve yakın komşuluk |
| Hücre | Ozmoz, difüzyon, izotonik denge ve geometrik bölünme; zaman çizgisi ve hacim grafiği | Sonlu iki bölmede su/çözünen taşınımı, miktar korunumu |
| 3B mekanik (`/mekanik`) | Katı cisim, çarpışma, sürtünme, yerçekimi ve yay | Rust/Rapier dinamiği |
| Atış (`/atis`) | Kütle, boyut, hava ve rüzgârla 2B atış | Hava dirençli küre modeli |

**Molekül deneyi:** “Suyu atomlardan kur” düğmesini seç. Sahneden veya atom listesinden O ve bir H seçip bağ kur. İkinci H ile tekrarla. Oluşan parçalar bölümünde su görünür. “Ayır” bir bağı kaldırır; atom sayısı korunurken bağlı parçalar değişir.

“Tepkime örneği: su”, aynı 4 H ve 2 O atomunun `2 H₂ + O₂` ve `2 H₂O` bağ düzenlerini karşılaştırır. Bu önceden tanımlı bir stokiyometri örneğidir; gerçek koşullarda hangi tepkimenin olacağını hesaplamaz.

**Hücre deneyi:** “Hipotonik dış ortam” örneğini çalıştır, hacim grafiğini ve dış ortamı izle. “Geometrik bölünme” bir hücrenin miktarlarını iki eşit hücreye paylaşır; DNA ve gerçek mitoz hesaplanmaz.

**Kaydet / Deney aç**, mevcut alanın başlangıç düzenini sürümlü JSON dosyasında saklar. Sonuç ayrıca indirilebilir. Yerel saklama alanı açıksa son çalışma alanı hatırlanır; hücre sonucu açılışta başlangıç verisinden yeniden hesaplanır.

Doğrudan alan açma: `/?alan=molecules`, `/?alan=elements`, `/?alan=materials`, `/?alan=cells`.

## AI ve otomasyon

Arayüz, API ve CLI aynı Rust analiz/hesap fonksiyonlarını çağırır. Programda gömülü bir dil modeli yoktur; bir AI deney JSON'unu hazırlayıp motoru çağırabilir.

```powershell
cargo run --quiet -- chemistry-analyze scenarios/water.json
cargo run --quiet -- cells-simulate scenarios/cell-osmosis.json
cargo run --quiet -- lab-simulate scenarios/lab-drop.json
cargo run --quiet -- chemistry-presets
cargo run --quiet -- cells-presets
cargo run --quiet -- enzymes-simulate scenarios/enzyme-baseline.json
cargo run --quiet -- enzymes-sweep scenarios/enzyme-sweep.json
cargo run --quiet -- enzymes-presets
```

Hazır pakette `cargo run --quiet --` yerine `.\yorunge-sim.exe` kullan. Başarı stdout JSON, hata stderr JSON ve sıfırdan farklı çıkış koduyla bildirilir. Dosya yerine `-` verilirse stdin okunur.

| Yol | Girdi/çıktı |
|---|---|
| `GET /api/enzymes/presets` | Beş örnek enzim deneyi |
| `POST /api/enzymes/simulate` | Enzim girdileri → kareler, görünür Km/Vmax, hız eğrisi, korunum özeti |
| `POST /api/enzymes/sweep` | Deney, parametre ve en fazla altı farklı değer → bağımsız hesaplar |
| `GET /api/elements` | Kaynak bilgisi ve 118 element |
| `GET /api/chemistry/presets` | On molekül/bağ düzeni örneği |
| `POST /api/chemistry/analyze` | Molekül sahnesi → atomlar, bağlı parçalar, varsayımlar |
| `GET /api/cells/presets` | Beş hücre deneyi |
| `POST /api/cells/simulate` | Hücre deneyi → kareler, korunum özeti, olaylar |
| `GET /api/lab/presets` | 3B mekanik deneyleri |
| `POST /api/lab/validate`, `POST /api/lab/simulate` | 3B sahne doğrulama / hesap |
| `GET /api/health` | Sunucu durumu |

Molekül ve 3B girdileri en fazla 256 KiB; enzim, hücre ve 2B girdileri 16 KiB'dır. Sunucu yalnız `127.0.0.1` üzerinde dinler; farklı sitelerin Origin başlıklı isteklerini reddeder. Çok kullanıcılı internet sunucusu değildir.

Arayüzün kaydettiği dosya `{format:"yorunge-science",version:1,mode:"molecules",scene:{...}}` biçiminde bir zarf içerir. API/CLI'ye zarfın **scene** alanını, hücre için **experiment** alanını gönder. `scenarios/` örnekleri API/CLI için ham biçimdedir. Malzeme çıktısı statik geometri verisidir; HCNO kimya sahnesi değildir.

## Doğruluk ve belgeler

Katı cisim, bağ grafı, kristal geometri, hücre taşınımı ve enzim kinetiği fiziksel olarak birbirlerine bağlanmış değildir. 118 elementin katalogda bulunması hepsi için otomatik tepkime hesabı olduğu anlamına gelmez. Kuantum kimyası, genel tepkime tahmini, malzeme dayanımı, DNA ve metabolizma modellenmez. Enzim modeli tek substrat/tek ürün, sabit hacim ve sabit serbest inhibitör varsayar. pH ve sıcaklık etkileri otomatik hesaplanmaz. Gerçek malzeme, hücre veya enzim deneyleriyle kalibrasyon yapılmadı.

Ar-Ge projesi `yorunge-research` sürüm 1 JSON'dur: hipotez, girdiler, notlar ve ölçümler saklanır; sonuçlar açılışta yeniden hesaplanır. API/CLI ham `experiment` alır; proje zarfını doğrudan gönderme. Ölçüm karşılaştırması doğrusal ara değerleme kullanır; otomatik parametre uydurma değildir.

- [Molekül şeması ve sınırlar](docs/chemistry.md)
- [Biyoloji Ar-Ge kullanım kılavuzu](docs/research-guide.md), [enzim denklemleri ve API](docs/enzymes.md)
- [Hücre denklemleri, birimler ve sınırlar](docs/cells.md)
- [Element kaynağı ve kristal geometrileri](docs/elements-materials.md)
- [3B mekanik rehberi](docs/mechanics-guide.md), [3B model](docs/mechanics.md), [2B rehberi](docs/2d-guide.md)
- [Çalıştırılan kontroller](docs/verification.md), [geliştirme planı](docs/roadmap.md)

## Geliştirme

```powershell
npm ci --ignore-scripts
npm run build
npm test
cargo fmt -- --check
cargo clippy --all-targets -- -D warnings
cargo test
cargo build
npm run test:contract
cargo build --release
```

Arayüz paketleri repoda bulunur; yalnız Rust ile başlatmak için Node.js gerekmez. JS kaynaklarını değiştirince `npm run build` ve ardından Rust derlemesi gerekir. Web dosyaları yürütülebilir dosyaya gömülür; çalışan sunucuyu yeniden başlat ve sayfayı yenile.

| Dosya | Sorumluluk |
|---|---|
| `src/chemistry.rs` | HCNO grafı, valans, molekül eşleştirme |
| `src/cells.rs` | Sonlu bölmeler, taşınım ve bölünme |
| `src/enzymes.rs` | Enzim ilerleme eğrisi, inhibisyon ve parametre taraması |
| `src/lab.rs`, `src/lib.rs` | 3B/2B mekanik |
| `src/main.rs` | Yerel HTTP sunucusu ve CLI |
| `web/science/entry.js`, `viewer.js` | Arayüz ve 3B gösterim |
| `web/science/catalog.js`, `data/periodic-table.json` | Element verisi |
| `web/science/materials.js` | Kristal geometrileri |
| `web/research/` | Araştırma defteri, grafikler, CSV ölçüm karşılaştırması ve proje dosyaları |
| `tests/` | Rust hesap, Node veri/geometri ve CLI–arayüz sözleşme testleri |

Üçüncü taraf bildirimleri: [Three.js](docs/third-party-licenses.txt), [Rust bağımlılıkları](docs/rust-third-party-licenses.txt). Element kaynağı ve alınma tarihi veri dosyasında korunur.
