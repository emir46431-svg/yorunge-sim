# Atomik yapı düzenleyicisi

Malzemeler alanındaki **Özel yapı düzenle** ile boş veya daha önce düzenlenen
yapı açılır. Hazır yapıları inceleme ve özel yapı düzenleme ayrı durumlardır;
hazır yapıya veya başka çalışma alanına geçmek özel atom düzenini silmez.

- 118 katalog elementinden seçip X, Y, Z koordinatlarıyla atom ekleyin.
- Sahneden veya filtrelenebilir atom listesinden bir atom seçin. Elementini ve
  koordinatlarını değiştirip **Değişikliği uygula** düğmesine basın.
- İkinci bir atom seçildiğinde merkezler arası Öklid mesafesi gösterilir.
  Seçili atoma yeniden tıklamak seçimini kaldırır. En fazla iki atom seçilir.
- **Çoğalt · X +1 Å**, seçilen atomları X yönünde bir Å kaydırarak kopyalar.
  Silme, boş yapı, örgü üretme ve XYZ açma dahil son 20 düzenleme geri alınabilir.
- Atom listesi her sayfada 40 kayıt gösterir; element simgesi, Türkçe/İngilizce
  element adı veya atom kimliğiyle filtrelenebilir.

## Koordinatlar ve sınırlar

Belge koordinatları Å birimindedir: 1 Å = 10⁻¹⁰ m. Ekranın merkezlenmesi veya
görsel ölçeği belgeyi değiştirmez. Küreler seçim işaretçisidir, fiziksel yarıçap
göstermez. Modelde bağ çizgisi, bağ mertebesi, enerji, kuvvet, kararlılık,
gevşeme, periyodik sınır veya tahmin edilen malzeme özelliği yoktur.

En fazla **1000 atom**, her koordinatta **±10000 Å**, dosyada **256 KiB** kabul
edilir. Koordinatlar sonlu sayılar olmalıdır; sınır aşımı kırpılarak gizlenmez,
işlem reddedilir. Aynı konumdaki atomlara izin verilir ve çakışan konum sayısı
gösterilir. Böyle atomlar listeden ayrı ayrı seçilebilir.

Bileşim atom sayılarını, min/maks ve X×Y×Z aralıkları atom merkezlerinin
kapladığı sınırları verir. Bu aralıklar bir periyodik hücre veya fiziksel
malzeme hacmi değildir.

## Kübik örgüler

SC, BCC, FCC üretiminde kullanıcı element, `a` örgü sabiti (0,1–1000 Å) ve üç
yönde 1–30 tam sayı tekrar girer. Atom sınırı ayrıca uygulanır.

| Tür | Bir geleneksel hücredeki kesirli konumlar | Atom/hücre |
| --- | --- | --- |
| SC | (0,0,0) | 1 |
| BCC | (0,0,0), (½,½,½) | 2 |
| FCC | (0,0,0), (0,½,½), (½,0,½), (½,½,0) | 4 |

Konumlar `(hücre indisi + kesirli konum) × a` formülüyle, başlangıcı (0,0,0)
olan `[0,nₓa) × [0,nᵧa) × [0,n𝓏a)` yarı açık kesitte üretilir. Uzak sınır
yüzlerine tekrar atom eklenmez. Bu bir geometrik üreticidir; seçilen elementin
bu örgüyü fiziksel olarak tercih ettiği iddia edilmez.

Mevcut hazır yapılar birimsizdir. **Ölçekle ve düzenle** kullanıcıdan açık bir
Å/gösterim-birimi değeri ister; bütün koordinatları bu değerle çarpar ve çizgileri
aktarmaz. Başlangıç ölçeği belge `source` alanında saklanır. Değer otomatik
olarak bir referans örgü sabiti veya ölçüm gibi sunulmaz.

## Dosyalar ve kalıcılık

XYZ yalnız tek kare, ilk satırda tam atom sayısı, ikinci satırda yorum (boş
olabilir), ardından `Element x y z` biçiminde tam dört sütun kabul eder. Yorum
240 karakteri aşamaz; yapı adı ilk 120 karakterden alınır. Simgeler büyük/küçük
harfe duyarlıdır (`Fe`). Ondalık ayırıcı nokta, bilimsel gösterim desteklenir.
Fazla sütun, ek kare, geçersiz sayı ve sayı/satır uyuşmazlığı reddedilir.
XYZ'de koordinat birimi bu uygulama için **Å** kabul edilir; birim dönüşümü
yapılmaz. Atom kimliği, kaynak ölçek kaydı ve geri alma geçmişi XYZ'ye yazılmaz.

**Kaydet** düğmesi `yorunge-science` **v2** zarfını üretir. Her çalışma alanı
kaydında `structure_workspace: { document, active }` korunur; başka sekmede
kaydetmek veya yeniden açmak özel yapıyı kaybettirmez. V1 deney dosyaları
okunmaya devam eder. Yerel kayıt aynı `yorunge-science-v1` localStorage anahtarını
kullanır; anahtarın adı eski olsa da zarf sürümü 2'dir. Seçim ve geri alma
geçmişi oturum içindir, dosyaya/localStorage'a yazılmaz.

**Sonucu dışa aktar** özel yapıda aşağıdaki bağımsız belgeyi üretir. Üstteki
**Deney aç** hem bu bağımsız belgeyi hem deney zarfını kabul eder. JSON atom
kimliklerini, tam koordinatları ve birimi korur:

```json
{
  "format": "yorunge-structure",
  "version": 1,
  "units": "angstrom",
  "name": "İki atom",
  "atoms": [
    { "id": "a1", "element": "C", "position": [0, 0, 0] },
    { "id": "a2", "element": "O", "position": [1.2, 0, 0] }
  ]
}
```

## Doğrulama

`node --test tests/structures.test.js` şema/koordinat sınırlarını, 118 simgeyi,
XYZ hatalarını ve tam geometri dönüşünü, örgü sayılarını ve baz konumlarını,
açık ölçek dönüşümünü, bileşim/sınır/mesafe hesabını kontrol eder.

Yerel UI kontrolü: özel yapı aç → farklı iki element ekle → seçimi ve Å
mesafesini kontrol et → koordinat düzenle → çoğalt/sil/geri al → FCC üret →
XYZ indir/aç → JSON kaydet/aç → Hücre alanına geç ve yeniden Malzemeler'e
dön → sayfayı yeniden yükle. Atom düzeni ve aktif özel yapı korunmalıdır.
