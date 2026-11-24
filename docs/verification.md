# Doğrulama kaydı

## v0.5 Studio

24 Kasım 2026, Windows x64. **69 Rust + 50 Node + 3 Rust/JavaScript sözleşme testi = 122 otomatik test** geçti. Rust biçim kontrolü, tüm hedefler için Clippy (`-D warnings`), dört arayüz paketi ve release derlemesi tamamlandı.

- Yeni testler: 118 elementli serbest yapı doğrulaması, 1000 atom sınırı, XYZ sayı/satır/boyut kontrolleri ve gidiş dönüş, SC/BCC/FCC sayıları, Å mesafe/ölçek; hücre zarfı/tarama/CSV/korunum sözleşmeleri; mekanik SI ölçümleri ve CSV güvenliği.
- DC devresinde seri, paralel, dengeli köprü, ters gerilim, sıfır gerilim, açık dal, yüzen ağ ve geçersiz girdiler test edildi. Isı hesabı yalıtılmış enerji artışı, analitik soğuma, denge, sıfıra yakın taşınım ve enerji dengesiyle karşılaştırıldı.
- Isı ve devre release CLI sonuçları HTTP JSON ile birebir aynı. Geçersiz girdi 400, yabancı Origin 403 verdi; dokuz Studio/API/varlık yolu 200 döndürdü.
- Arayüzde Au ve Si atomları eklendi, 2,5 Å mesafe okundu; geri al/yinele ve sekme geçişleri denendi. 108 atomlu Cu/FCC geometrisi oluşturulup sayfa yenilenince korundu.
- Hücre çalışma alanında bir özel koşul ve üç koşullu tarama çalıştırıldı, dört eğri seçildi. Süre 60 s yapıldığında ilk çalıştırmada 301 örnek/60 s kullanıldı. Beş kayıt yeniden açılışta girdilerden hesaplandı. API sınır durumları bölünme, sıfır çözünen, erken durma ve 3002 kare ile ayrıca denetlendi.
- Mekanikte ilk tıklamada alanların hesap girdisine geçmesi düzeltildi: 2 kg ve 2 s birlikte girildiğinde sonuçta 2 kg, 2 s, 61 örnek görüldü. Yerçekimi 9,81 ve 3 m/s² koşulları defterde karşılaştırıldı; güncel ve kayıtlı eğriler birlikte gösterildi.
- 12 V / 100 Ω devresi 0,12 A ve 1,44 W verdi. Güç ısıya aktarıldı; 600 s için 20,701 °C, 60 s için 20,093 °C görüldü. Girdi düzenlenince eski sonuç/CSV temizlendi. Hesap sürerken güç aktarımı kilitlendi. Grafik ekseninin dolgu hatası giderildi.
- Native Windows host uyarısız derlendi. Microsoft WebView2 SDK imzaları doğrulandı. PID sahipliği ve Job Object kapanışı test edildi. Ayrı Yörünge Studio penceresi, yerel JSON kaydetme diyaloğu ve pencere kapanınca kendi 17971 portunun boşalması görüldü. Harici tarayıcı başlatan kısayolun yerini `Yorunge.exe` alır.

Bu kayıt gerçek malzeme/enzim/hücre kalibrasyonu veya tüm Windows sürümleri için uyumluluk iddiası değildir. Atom editörü geometriktir; DC ve ısı arasında yalnız açık, sabit güç aktarımı vardır. Opus incelemesi tamamlanmış değildir; önceki OAuth hatası aşağıda kayıtlıdır.

## v0.4

24 Kasım 2026, Windows x64. **63 Rust testi + 23 Node testi + 3 Rust/JavaScript sözleşme testi = 89 otomatik test** geçti. `cargo fmt -- --check`, `cargo clippy --offline --all-targets -- -D warnings`, arayüz paketlemesi ve release derlemesi tamamlandı. Sözleşme testleri debug ve release CLI ile çalıştırıldı.

- Enzim testleri tümleşik denklem artığını, beş inhibisyon seçeneğini, görünür Km/Vmax'ı, düşük/yüksek substrat limitlerini, yarılanma süresini, sıfır/aşırı hızları, S+P korunumunu ve tarama sınırlarını kapsar.
- CSV testleri ayırıcı/tırnak/ondalık virgül, boyut/satır sınırı, bozuk dosyalar, tekrarlı ölçümler, ekstrapolasyon reddi, doğrusal ara değerleme ve hata ölçülerini kapsar. Proje testleri bilinmeyen alanları, sonuç enjeksiyonunu, prototip alanlarını, tarihler ve boyut sınırlarını denetler.
- Gerçek Rust çıktısı JavaScript ölçüm karşılaştırmasına ve CSV dışa aktarmaya verildi. Entegrasyonda bulunan `t_s`/`time_s` farkı düzeltildi; sözleşme testleri bu sınırı doğrudan denetler.
- Beş enzim hazır deneyi HTTP üzerinden çalıştırıldı. Enzim hesabı ve tarama için release CLI ile HTTP JSON sonuçları birebir aynıydı. Hatalı girdi 400, 16 KiB üzeri girdi 413, farklı Origin 403 verdi. Yanlış CLI girdisi JSON hata ve başarısız çıkış kodu döndürdü. Yedi yeni/eski sayfa ve kaynak yolu 200 verdi.
- Tarayıcıda hazır deney, üç koşullu inhibitör taraması, dört eğri, ürün/zaman ve hız/substrat grafikleri, zaman çizgisinin sonuna gitme, kayıt kaldırma/geri alma ve sayfa yenilendiğinde yeniden hesaplama denendi. Hipotez ve deneme notu korundu.
- Süre alanı 120'den 60 saniyeye değiştirilip ilk çalıştırma tıklamasında yeni sürenin kullanıldığı görüldü. Daha uzun ölçüm serisi bu kayda karşı ekstrapole edilmedi; veri korunup açıklama gösterildi.
- Yalnız QA için açıkça sentetik üç noktalı CSV yüklendi; 3 nokta, RMSE 1,011 µM ve MAE 0,597 µM gösterildi. Bu veri dağıtım paketinde veya kullanıcının 7878 portundaki çalışma alanında ölçüm olarak sunulmadı.
- Grafik açıklamaları dört eğride taşmayacak şekilde düzeltildi. Release Ar-Ge ekranı görsel olarak incelendi. İncelenen tarayıcı oturumunun hata/uyarı günlüğü boştu.

Claude Opus için odaklı inceleme yeniden denendi; Claude Code **OAuth session expired** hatası nedeniyle yanıt üretmedi. Bu sürüm Opus tarafından incelenmiş olarak sunulmaz. Kod ve kontroller Codex tarafından tamamlandı.

Bu kayıt sayısal model ve yazılım davranışını doğrular. Belirli bir gerçek enzime/hücreye kalibrasyon, gerçek deneysel doğrulama, otomatik parametre uydurma ve tüm cihaz/tarayıcı uyumluluğu sağlandığı anlamına gelmez. Enzim ve hücre alanları fiziksel olarak bağlı değildir.

## v0.3

24 Kasım 2026, Windows x64. 52 Rust testi (14 atış, 13 mekanik, 13 kimya, 12 hücre) ve 8 Node katalog/geometri testi geçti. `cargo clippy --offline --all-targets -- -D warnings` temiz; arayüz paketlemesi tamamlandı.

- On molekül hazır sahnesi ve beş hücre deneyi HTTP üzerinden çalıştırıldı. Hücrelerin hacim/çözünen korunumu kontrol edildi; element API'sinde 118 kayıt var.
- Molekül ve hücre release CLI örnekleri, HTTP API ile birebir aynı JSON verdi. Yeni uçlarda yanlış girdi 400, boyut aşımı 413, farklı Origin 403 ile reddedildi; yeni ve önceki sayfalar 200 döndürdü.
- Tarayıcıda su bağının ayrılması ve yeniden kurulması, bağlı parçaların güncellenmesi, element arama ve Oganesson seçimi denendi.
- Grafen ve hücre görünümleri incelendi. Bölünme deneyinin sonunda iki hücrenin her biri 0,5 pL, toplamı 1 pL olarak görüldü; korunum hataları sıfırdı.
- Bir hücre alanı klavyeyle değiştirilip çalıştır düğmesine bir kez basılarak yeni girdinin kullanıldığı doğrulandı.
- Grafit katman/aralık kaydırıcıları art arda kullanıldı; dört katmanda 216 atom ve 288 katman içi bağlantı gösterildi.
- Salt okunur arayüz incelemesinde bulunan alan düzenleme/ilk tıklama, modelden bağımsız oynatma saati ve grafik işaretçisi sorunları düzeltildi. Malzeme kaydırıcısının DOM yenilenmesiyle sürüklemeyi kesmesi de düzeltildi.

Bu kontroller modellerin kod davranışını doğrular. Gerçek malzeme/hücre deneyleriyle kalibrasyon, tüm tarayıcılar, mobil cihazlar ve Windows sürümleri test edilmedi.

## v0.2

24 Kasım 2026, Windows x64 geliştirme ortamı.

- `cargo test --offline`: 27 test geçti (13 adet 3B, 14 adet 2B).
- `cargo clippy --offline --all-targets -- -D warnings`: geçti.
- `cargo fmt -- --check`: geçti.
- `cargo build --release --offline`: tamamlandı.
- Dört hazır 3B deney HTTP API ile hesaplandı ve son karelerine ulaştı.
- `scenarios/lab-drop.json` için release CLI ve HTTP API çıktıları birebir aynı JSON verdi.
- HTTP API bilinmeyen alanı 400, 256 KiB üzeri girdiyi 413, farklı sitenin Origin başlığını 403 ile reddetti.
- Eski `/atis` sayfası erişilebilir durumda.
- Tarayıcıda 3B görüntüleme, nesne ekleme, klavye ile konum düzenleme, deney seçimi, tek kare ilerleme ve zaman çizgisinin sonuna gitme kontrol edildi. Domino ve yay deneyleri görüntülendi; konsolda hata/uyarı görülmedi.

Testler düşme, temas, sürtünme, momentum, esneklik, yay, sabit cisimler, tekrar üretilebilirlik ve girdi sınırlarını kapsar. Bunlar gerçek malzeme ölçümleriyle kalibrasyon veya gerçek dünya doğrulaması değildir. Tüm tarayıcılar, mobil cihazlar ve Windows sürümleri denenmedi.
