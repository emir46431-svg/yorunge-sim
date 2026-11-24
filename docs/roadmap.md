# Tek laboratuvar vizyonu

Amaç, insanlara ve AI araçlarına tekrar üretilebilir deneyler kurabilecekleri sade bir ortam sunmak. Kullanıcı formül ezberlemek zorunda kalmaz; seçilen modelin varsayımlarını görebilir. Farklı doğruluk ve hesap maliyetlerini tek bir görünmez “gerçek dünya” düğmesine saklamamak gerekir.

## Çalışan temel: v0.4

Enzim kinetiği için araştırma alanı: beş inhibisyon seçeneği, sınırlı parametre taraması, dört eğri karşılaştırma, hipotez/not defteri ve ölçüm CSV'siyle hata karşılaştırması. Proje JSON'u açıldığında girdilerden yeniden hesaplanır. Bu, ölçümle doğrulama iş akışının başlangıcıdır; otomatik parametre uydurma, hücre metabolizmasına bağlanma ve gerçek enzim kalibrasyonu henüz yoktur.

Mekaniğe ek olarak HCNO bağ grafı düzenleyicisi, PubChem kaynaklı 118 element kataloğu, beş statik kristal kesiti ve sonlu bölmeli hücre taşınımı bulunur. Molekül ve hücre sonuçları Rust API/CLI üzerinden alınır. Bu alanlar henüz birbirlerine fiziksel olarak bağlı değildir. Kristal görünümü kuvvet hesabı, geometrik hücre bölünmesi biyolojik mitoz ve önceden tanımlı su örneği tepkime tahmini değildir.

3B nesne düzenleyicisi, katı cisimler, yerçekimi, temas, sürtünme, esneklik, dönme ve merkezden yay bağlantıları. Sahneler JSON olarak açılır/kaydedilir. Aynı Rust fonksiyonu insan arayüzü ve otomasyon için kullanılır. Her sonuç kullanılan sahneyi taşır. Başlangıç durumundan deney tekrar hesaplanır; kullanıcı zaman çizgisini inceleyebilir.

## Aşamalar

Yeni alanların sonraki adımları: molekül geometrisi için açık kapsamlı kuvvet alanı; daha fazla bağlanma türü için doğrulanmış şablonlar; kristal ölçüm araçları; hücre modelinde basınç/zar gerilimi ve ölçümle kalibrasyon. Bunlar mevcut özellik olarak sunulmaz.

1. **Mekanik çalışma alanını geliştirmek:** menteşeler, ipler, makaralar, dış kuvvet araçları, temas ölçümleri ve ölçüm grafiklerini eklemek. Hazır deneylerin beklenen sonuçlarını belgelemek. İlk kez kullananlarla arayüzü denemek.
2. **Ölçüm ve belirsizlik:** gerçek deneyden zaman/konum CSV'si yükleme; ölçüm hatalarını gösterme; kalibrasyon ve ayrı doğrulama verisini ayırma. Girdi aralıklarına göre sonuç aralıkları çıkarma.
3. **Akışkanlar:** önce basit kaldırma kuvveti ve sürükleme; sonra çözünürlüğü ve maliyeti açık sıvı/gaz modelleri. “Su görünen animasyon” ile fizik çözümünü ayırma.
4. **Isı:** ısı kapasitesi, iletim ve ortamla ısı alışverişi. Malzeme özelliklerinin sıcaklığa bağlılığı ve model sınırları.
5. **Elektrik, manyetizma ve dalgalar:** önce basit devreler ve dalga deneyleri; alan çözümleri daha sonra. Mekanikle bağlandığında enerji aktarımını açık tanımlama.
6. **Birleşik deneyler:** örneğin motordan mekanik harekete, sürtünmeden ısıya aktarım. Birimler, zaman adımları, enerji hesabı ve modüller arası veri sözleşmesi doğrulanmalı.

Bu maddeler planlanan işlerdir; mevcut kodda çalışır modüller veya bir eklenti yükleme sistemi değildir. Özellikle akışkan/ısı/elektrik hesapları henüz uygulanmamıştır.

## Basitlik ilkeleri

- Temel akış: nesne ekle → özellik seç → ortam kur → çalıştır → ölç.
- Yaygın nesne ve malzemeler için açıklanmış başlangıç ayarları; ayrıntılar ihtiyaç halinde açılır.
- Görüntü ölçeği, birimler, başlangıç durumu ve oynatma zamanı anlaşılır olur.
- İnsan ve AI aynı sürümlü deney tanımını kullanır. AI fizik motorunu çağırır; fizik sonucunu dil modeli uydurmaz.
- Hatalı girdi reddedilir; henüz desteklenmeyen özellik “varmış gibi” çizilmez.
- Gerçeklik iddiası, test kapsamı ve ölçümle doğrulama durumuyla sınırlıdır.

## Yayınlama

Yerel kaynak deposu ve önizleme çalışır durumda tutulur. GitHub'a kaynak yayınlamak için hesap oturumu; herkese açık web hizmeti için ayrıca seçilmiş barındırma ve çok kullanıcılı iş kuyruğu, sınırlar ve izolasyon gerekir. Yerel HTTP sunucusunu doğrudan internete açmak planlanan dağıtım biçimi değildir.
