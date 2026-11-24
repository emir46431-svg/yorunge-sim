# Biyoloji Ar-Ge çalışma alanı

Yörünge v0.4 içinde **http://127.0.0.1:7878/arge** adresini aç. İlk “Kontrol · örnek model” kaydı, verilen örnek parametrelerle gerçekten hesaplanır; ölçüm verisi değildir.

## İlk araştırma

1. Proje adını ve hipotezini yaz. Örneğin: “Rekabetçi inhibitör derişimi arttıkça başlangıç hızı azalır.”
2. Soldan kompetitif inhibisyon örneğini seç. Substrat ve enzim derişimini, Km, kcat ve inhibitör sabitini kendi deney koşuluna göre gir. Birimler alanların yanındadır: derişim µM, süre saniye, kcat s⁻¹.
3. Denemeyi adlandırıp **Denemeyi çalıştır** düğmesine bas. Parametre ve sonuç bir kopya olarak deftere eklenir. Formu sonradan değiştirmek bu kaydı değiştirmez.
4. **Parametre taraması** bölümünde inhibitör derişimini seçip `0; 25; 100` yaz. Üç koşul ayrı kaydedilir. Noktalı virgül değerleri ayırır; ondalık sayı için nokta veya virgül kullanılabilir. Her tarama 2–6 farklı değer alır.
5. Defterde kayıtları işaretleyerek aynı eksende en fazla dört eğri göster. Seçili kayıt her zaman karşılaştırmadadır. Defter en fazla 12 deneme saklar.
6. **Ürün / zaman** ürün oluşumunu; **Hız / substrat** sabit koşullarda hız yasasını gösterir. Hız grafiği zaman serisi değildir. Farklı sürelerdeki denemeler kendi bitiş zamanında durur.
7. Zaman çubuğunu kaydır veya oynat. E, S, ES ve P çizimi mekanizmanın temsili şemasıdır. Kompleks doluluğu ve moleküler hareket hesaplanmaz. Ara zamanlardaki sayılar çıktı kareleri arasında doğrusal ara değerlemedir.

Seçili denemeye gözlem notu yazabilirsin. **Girdilerini forma al** eski girdilerden yeni bir çalışma başlatır. **Kaydı kaldır** işlemi, son kaldırılan kayıt için geri alınabilir.

## Kendi ölçümünü yükle

**CSV yükle** ile gerçek ölçüm dosyanı seç. Başlık `time_s,product_um` olmalı; sonraki satırlara saniye cinsinden zaman ve µM cinsinden ürün ölçümünü koy. `scenarios/measurement-template.csv` yalnız boş başlığı içerir; uydurma ölçüm sunulmaz.

- Virgül ayırıcılı dosyada ondalık nokta; noktalı virgül ayırıcılı dosyada ondalık nokta veya virgül kullanılabilir.
- Sütunların sırası değişebilir. BOM, CRLF, boş satırlar ve tırnaklı alanlar desteklenir.
- En fazla 1000 ölçüm, 256 KiB. Sonlu, negatif olmayan sayılar gerekir. Yüklerken ölçüm zamanı seçili deneyin süresini aşamaz.
- Aynı zamanın tekrar ölçümleri ve gürültü nedeniyle azalan ürün değerleri korunur. Noktalar, çizilmiş modelden otomatik üretilmez.

Siyah noktalar ölçüm, renkli çizgiler modeldir. Seçili modelin zaman serisinden doğrusal ara değerleme ile tahmin alınır. **RMSE**, ortalama karesel hatanın karekökü; **MAE**, ortalama mutlak hatadır. İkisinin de birimi µM'dır. Tekrarlı ölçümler ayrı gözlem olarak ağırlık taşır. Bu işlem parametre uydurma yapmaz; düşük hata tek başına biyolojik doğrulama anlamına gelmez.

Ölçümler projenin ortak veri kümesidir. Daha kısa süreli bir kaydı seçersen ölçümler korunur, aralık dışı karşılaştırma açıklanarak durdurulur; ekstrapolasyon yapılmaz. Ölçüm koşullarını, birimleri ve başlangıç ürününü modelle eşleştirmek kullanıcıya aittir.

## Saklama ve tekrar üretme

**Projeyi kaydet**, proje adı, hipotez, kayıtların girdileri, notları, tarihleri ve ölçümlerini `yorunge-research` sürüm 1 JSON dosyasına aktarır. Sonuçlar dosyaya güvenilir veri olarak alınmaz: **Proje aç** bütün kayıtları Rust motoruyla yeniden hesaplar. Bir kayıt hatalıysa mevcut açık proje değişmez. Dosya en fazla 1 MiB olabilir.

Tarayıcı yerel depolaması kullanılabiliyorsa proje otomatik saklanır. Tarayıcı verisi silinebilir; taşınabilir yedek için JSON kaydet. Sayfa yenilendiğinde hesaplar tekrar üretilir. **Sonuç CSV**, bütün defterin model zaman serilerini `run_id,time_s,substrate_um,product_um,rate_um_s` sütunlarıyla indirir. Deneme adları ve notları proje JSON'unda bulunur.

## Modelin kapsamı

Girdi tablosu, hız denklemi ve tümleşik çözüm [enzim modeli belgesindedir](enzymes.md). Tek substrat, tek ürün, sabit hacim ve sabit serbest inhibitör varsayılır. Beş seçenek: inhibisyon yok, rekabetçi, saf rekabetsiz, yarışmasız ve karma. Saf rekabetsiz modda iki faktör de Ki kullanır; Ki′ kullanılmaz.

Bağıl aktivite kullanıcı tarafından verilen 0–1 katsayısıdır. pH ve sıcaklık etkileri otomatik hesaplanmaz. Örnek parametreler belirli bir enzime veya canlıya kalibre edilmemiştir. Hücre alanı ozmoz ve çözünen taşınımı içindir; enzim hesabına fiziksel olarak bağlı değildir. Gerçek mitoz, DNA, metabolizma ağı, geri tepkime, ürün inhibisyonu, enzim denatürasyonu ve tight-binding çözülmez.

Bu sürüm, sanal Ar-Ge iş akışının ölçülebilir bir başlangıcıdır. Gerçek uygulama için uygun model seçimi, güvenilir parametreler ve bağımsız deney verileriyle doğrulama gerekir.
