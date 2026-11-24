# Hücre deney çalışma alanı

`/hucre`, mevcut Rust `POST /api/cells/simulate` çözücüsünü deney girdileri, koşul taraması ve izlenebilir kayıtlarla kullanır. Yeni projede otomatik hesap veya önceden doldurulmuş sonuç yoktur. Parametre şablonları ikincil bir bölümde yalnızca düzenleyiciyi doldurur.

## İş akışı

1. Deney adı ve hipotezi yazın; iç/dış hacim, iç/dış derişim, su ve çözünen geçirgenliği, süre, örnekleme ve isteğe bağlı geometrik bölme zamanını düzenleyin. Her alanın birimi ve aralığı görünür.
2. **Çalıştır ve kaydet** tek çalışma oluşturur. **Koşul taraması**, seçilen tek parametrenin noktalı virgülle ayrılmış 2–6 farklı değerini çalıştırır. Ondalık nokta, ondalık virgül ve bilimsel gösterim kabul edilir. Her koşul aynı taban girdilerinden üretilir; tüm değerler Rust sınırlarıyla doğrulanır.
3. Defter en fazla 12 kayıt tutar. Sınırda otomatik silme yapılmaz; yeterli alan yoksa hesap başlamaz. Bir taramanın tüm hesapları başarılı olmadan kayıtlar eklenmez.
4. En fazla dört kayıt eğrilerde karşılaştırılır. Yeni taramada ilk dört koşul seçilir; altı koşulun tamamı defterde kalır. Hiç karşılaştırma seçilmemişse seçili kaydın eğrileri gösterilir. Kayıt adına tıklamak metrikleri, zaman örneklerini ve sağ paneli değiştirir.
5. Hacim grafiği tüm iç bölmelerin hacim toplamını gösterir. Derişim grafiğinde iç bölmelerin hacim ağırlıklı derişimi düz, dış ortam kesik çizgidir. Gerçek hesap örnekleri doğrudan çizilir; durdurulmuş hesaplar istenen süreye uzatılmaz. Örnek kaydırıcısı yalnızca dönen örnek indekslerini gösterir.

## Proje ve veri

JSON zarfı `format: "yorunge-cell-workbench"`, `version: 1` kullanır. İzinli kök alanlar `format`, `version`, `name`, `hypothesis`, `notes`, `draft`, `scan`, `runs`, `compare_ids`, `selected_id` ile sınırlıdır. Projede sonuç eğrileri saklanmaz. Her çalışma kimlik, etiket, UTC oluşturma zamanı, bütün parametreler ve tek çalışma/tarama kaynağını taşır. Tarama kaynağının parametre/değeri kayıtlı deneyle eşleşmelidir.

JSON açma ve yerel geri yükleme sırasında tüm girdiler doğrulanır ve kayıtlar mevcut Rust çözücüyle yeniden hesaplanır; tümü başarılı olmadan mevcut proje değiştirilmez. Dosya en fazla 256 KiB, defter 12 kayıt, karşılaştırma dört kayıttır. Bilinmeyen alanlar, kaydedilmiş sonuç ekleri, yinelenen/geçersiz kimlikler, geçersiz tarih ve sayılar reddedilir. Çözücü API'si sürüm bildirmediği için tarihsel ikili dosyayla birebir yeniden üretim iddiası yoktur; bu durum kaynak panelinde görünür.

Yerel saklama anahtarı `yorunge-cell-workbench-v1` olur; yalnız girdiler ve kayıt metadatası `localStorage` içinde saklanır. Geçersiz bir taslak son geçerli girdinin üzerine yazılmaz. Saklama kullanılamıyorsa alt durum çubuğu JSON kaydetmeyi önerir. **Yeni proje** açık çalışma alanını boş bir projeyle değiştirir; saklamak istenen proje önce JSON kaydedilmelidir.

CSV, defterdeki bütün çalışmaların bütün hesap örneklerini ve bölme kimliklerini içerir. Şema:

```text
run_id,run_label,created_at_utc,status,pool_id,time_s,volume_pl,solute_fmol,concentration_mm
```

`pool_id`, `cell-1`, bölme sonrası `cell-1a` / `cell-1b` veya `external` olur. Sayısal değerler yuvarlanmadan ondalık noktayla dışa aktarılır. Etiketler tırnaklanır, formül benzeri metinler elektronik tablo çalıştırmasına karşı kaçışlanır. Dışa aktarmadan önce sonuçların sonluluğu, zaman sırası, bölme kimlikleri, parametre eşleşmesi, miktar korunumu ve özet tutarlılığı denetlenir.

## Kapsam

Model sonlu, iyi karışmış iç/dış havuzlar arasında pasif su ve tek ideal yüksüz çözünen taşınımıdır. Kullanıcı katsayıları belirli bir hücreye kalibre edilmemiştir. Metabolizma, aktif pompalar, DNA, mitoz ve canlılık üretilmez. Geometrik bölme miktarları eşit paylaşır. Hacim/sayısal bütçe sınırında durma biyolojik bir sonuç değildir. Çalışma alanı mevcut fiziksel modeli değiştirmez.

## Doğrulama

`node --test tests/cell-workbench.test.js` girdilerin Rust aralıkları, tarama ayrıştırması, katı zarf, kimlik/kaynak doğrulama, yanıt doğrulama, CSV birimleri ve bölme kimlikleri ile grafik agregasyonunu kontrol eder. Tarayıcı iş akışı için tek çalışma, tarama, dört eğri sınırı, JSON yeniden hesaplama, yenileme sonrası yerel geri yükleme ve CSV indirme ayrıca kontrol edilmelidir.
