# HCNO kovalent molekül grafı

Bu modül H, C, N ve O atomlarıyla çizilmiş bir **bağ grafını** doğrular ve analiz eder. Bir düğüm bir atomu, bir kenar iki atom arasındaki tek, çift veya üçlü kovalent bağı temsil eder. Bağ eklemek veya silmek atomları başka elementlere dönüştürmez; bağlı bileşenleri değiştirir.

Kovalent bağların ortaklaşa kullanılan elektron çiftleriyle gösterilmesi, eğitim modelinin temelidir. Elektron çiftlerini ve bağları çizgiyle gösteren Lewis yapıları, burada kullanılan graf gösteriminin bilimsel bağlamını sağlar. Kaynaklar: [OpenStax Chemistry 2e, 7.2 Covalent Bonding](https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding) ve [7.3 Lewis Symbols and Structures](https://openstax.org/books/chemistry-2e/pages/7-3-lewis-symbols-and-structures).

## Kapsam ve sınırlar

- Kullanılan tipik nötr valans hedefleri H:1, C:4, N:3, O:2'dir. Bağ derecelerinin toplamı bu değeri aşamaz. Eksik valanslı çizimler geçerlidir; tamamlanmamış olarak işaretlenir. Bu kısıt, basit nötr Lewis yapıları için seçilmiş bir eğitim kuralıdır; bütün kimyasal türleri kapsamaz.
- `complete_valence`, yalnızca her atomun seçilen hedefine ulaştığını bildirir. Kararlılık, gerçek bir maddenin varlığı veya sentezlenebilirlik anlamına gelmez.
- İyonlar, formal yük, radikaller, yalnız elektron çiftleri, rezonans, aromatiklik, orbitaller, spin, bağ enerjileri, sıcaklık ve tepkime kinetiği hesaplanmaz. O₂ çift bağı da bu kapsamda basitleştirilmiş bir Lewis gösterimidir; elektronik durum hesaplanmaz.
- Koordinatlar yalnız çizim içindir; fiziksel birimleri yoktur. Bağ uzunluğu/açısı doğruluğu, enerji minimizasyonu veya atomlar arası kuvvetler hesaplanmaz. Aynı konumda çizilmiş atomlar bile ayrı kimliklerdir.
- Bu modül otomatik tepkime, kuantum kimyası veya moleküler dinamik motoru değildir. 118 elementlik ayrı katalog ve malzeme/kristal örgüsü görselleri, HCNO grafının desteklediği elementleri genişletmez.

## Girdi

`MoleculeScene` JSON örneği:

```json
{
  "schema_version": 1,
  "atoms": [
    {"id":"o1","element":"O","position":[0,0,0]},
    {"id":"h1","element":"H","position":[-0.8,0.6,0]},
    {"id":"h2","element":"H","position":[0.8,0.6,0]}
  ],
  "bonds": [
    {"a":"o1","b":"h1","order":1},
    {"a":"o1","b":"h2","order":1}
  ]
}
```

| Alan | Kural |
|---|---|
| `schema_version` | Yalnız `1`; yazılmazsa `1` |
| `atoms` | En fazla 60 atom; yazılmazsa boş liste |
| `bonds` | En fazla 90 bağ; yazılmazsa boş liste |
| Atom `id` | Benzersiz, 1–64 ASCII harf/rakam/`_`/`-` |
| Atom `element` | Büyük harfle `H`, `C`, `N` veya `O` |
| Atom `position` | Tam 3 sonlu sayı; her biri `[-50,50]` |
| Bağ `a`, `b` | Sahnede var olan iki farklı atom kimliği |
| Bağ `order` | Tam sayı `1`, `2` veya `3` |

Atomların üç alanı ve bağların üç alanı zorunludur. Sahne, atom veya bağ seviyesindeki bilinmeyen alanlar reddedilir. `a–b` ve `b–a` aynı bağdır; tekrarlı kenar reddedilir. Çoklu bağlar aynı çifti tekrar ederek değil `order` ile gösterilir. JSON girdi sınırı 256 KiB'dır. Boş sahne geçerlidir.

## Çıktı ve Rust arayüzü

```rust
pub fn analyze_scene(scene: MoleculeScene) -> Result<Analysis, String>;
pub fn analyze_json(input: &str) -> Result<String, String>;
pub fn presets() -> serde_json::Value;
// Ayrıca: MoleculeScene::validate(&self) -> Result<(), String>
```

`Analysis` alanları:

| Alan | İçerik |
|---|---|
| `model` | `hcno-covalent-graph-v1` |
| `scene` | Doğrulanmış sahne; atom kimlikleri, elementleri, konumları ve sırası korunur |
| `atoms` | Her atom için `id`, `element`, `used_valence`, `max_valence`, `complete_valence` |
| `components` | Her bağlı bileşen için `formula`, `name`, `complete_valence`, `atom_ids` |
| `totals` | `atoms`, `bonds`, `element_counts` (`H`, `C`, `N`, `O`; sıfırlar dahil) |
| `assumptions` | Modelin kullanıcıya gösterilecek kapsam açıklamaları |

Normalleştirme yalnız bağların uçlarını kimliklerine göre sıralar ve bağ listesini kanonik sıraya getirir. Atom eklenmez/silinmez, koordinat değiştirilmez, eksik bağ otomatik tamamlanmaz. `used_valence` atom üzerindeki bağ derecelerinin toplamıdır. `totals.bonds` kenar sayısıdır: bir üçlü bağ bu sayımda bir bağ çifti sayılır.

Bir bağlı bileşendeki atomlar giriş sırasıyla, bileşenler ise ilk atomlarının giriş sırasıyla verilir. Tanınan yapılar alışılmış molekül formülünü kullanır; örneğin `NH3`. Tanınmayan yapılarda element sayıları Hill sırasıyla (`C`, `H`, diğerleri alfabetik; karbonsuz HCNO grafında `H`, `N`, `O`) birleştirilir. Sayılar sadeleştirilmez; `C2H6` formülü `CH3` yapılmaz.

## Molekül tanıma

Tanıma, atom kimliklerinden ve çizim koordinatlarından bağımsızdır. Şablonla **element türü, tüm komşuluklar, bağ bulunmayan çiftler ve bağ dereceleri** tam eşleşmelidir. Yalnız formüle göre isim verilmez. Bilinen şablonlar en fazla sekiz atom içerir; büyük graflarda sınırsız izomorfizm araması yapılmaz.

| Formül | Ad | Gerekli graf |
|---|---|---|
| H₂ | Hidrojen | H–H |
| O₂ | Oksijen | O=O |
| N₂ | Azot | N≡N |
| H₂O | Su | O merkezli iki O–H bağı |
| CO₂ | Karbondioksit | O=C=O |
| CH₄ | Metan | C merkezli dört C–H bağı |
| NH₃ | Amonyak | N merkezli üç N–H bağı |
| C₂H₆ | Etan | C–C; her C üzerinde üç C–H bağı |

Örneğin C–O–O grafının formülü `CO2` olsa da adı `null` döner. O–O tek bağı da O₂ şablonunun çift bağına eşleşmez. `name:null`, grafın bu küçük katalogda tanınmadığını belirtir; kimyasal olarak imkânsız olduğunu söylemez. Her atomun hedef valansı tamam olsa bile yapı tanınmayabilir.

## Hazır sahneler ve atom korunumu

`presets()` çıktısı `{ "presets": [{ "id", "label", "description", "scene" }] }` biçimindedir. Kimlikler: `water`, `carbon-dioxide`, `methane`, `ammonia`, `hydrogen`, `oxygen`, `nitrogen`, `water-parts`, `water-before`, `water-after`.

`water-parts`, `water` ile aynı `o1`, `h1`, `h2` atomlarını taşır; bağ listesi boştur. İki bağı eklemek çizimde su grafını oluşturur; analiz atomların kimliklerini veya elementlerini değiştirmez.

`water-before` sahnesinde iki H₂ ve bir O₂ bileşeni; `water-after` sahnesinde iki H₂O bileşeni vardır. Her iki örnekte de **aynı `h1…h4`, `o1`, `o2` kimlikleri** ve aynı dört H + iki O atomu bulunur. `2H₂ + O₂ → 2H₂O` gösterimi atom sayımı/stokiyometri için önceden hazırlanmış iki grafı karşılaştırır. Bağlar ve çizim konumları örnekler arasında elle belirlenmiştir; bir tepkime yolu veya deney koşulları hesaplanmaz.

## Doğrulama

Entegrasyon testleri bilinen molekülleri, graf izomorfizmini, bağ derecesinin adlandırmaya etkisini, bağ kopmasıyla bileşen ayrılmasını, atom kimliği/element korunmasını, tüm HCNO valans sınırlarını, bilinmeyen alanları, geçersiz kenarları ve kaynak limitlerini kapsar. Bu testler graf yazılımını doğrular; fiziksel kimya doğruluğunu veya gerçek bir tepkimeyi kanıtlamaz.
