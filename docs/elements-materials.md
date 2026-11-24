# Element kataloğu ve malzeme geometrileri

Bu iki modül referans verisi ve eğitim amaçlı statik geometri sağlar. 118 elementin katalogda bulunması, molekül düzenleyicisinin 118 element için kimya hesaplayabildiği anlamına gelmez. Molekül düzenleyicisinin H/C/N/O kapsamı ayrı tanımlanır.

## Element verisi

`data/periodic-table.json`, `{ source, elements }` biçimindedir. 118 satır, **24 Kasım 2026** tarihinde [NCBI PubChem PUG REST periyodik tablo hizmetinden](https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON) alınmıştır. Kaynak dosyanın SHA-256 özeti `source.raw_sha256` içinde tutulur. Türkçe adlar açık bir uygulama çevirisidir; element adlarının Türkçe yazımlarında farklı kaynaklar arasında küçük farklar bulunabilir.

| Alan | Anlamı |
| --- | --- |
| `atomic_number`, `symbol` | Atom numarası ve kimyasal sembol |
| `name`, `name_en` | Türkçe uygulama adı, PubChem İngilizce adı |
| `atomic_weight` | PubChem `AtomicWeight` değerinin **değiştirilmemiş metni** |
| `electron_configuration` | Kaynak dizilimi; varsa `predicted` / `calculated` açıklaması korunur |
| `phase`, `phase_en` | `StandardState` çevirisi ve kaynak metni; öngörü ibareleri korunur |
| `category`, `group_block` | Kategori anahtarı ve PubChem `GroupBlock` metni |
| `group`, `period` | 1–18 grup ve 1–7 periyot; ayrılmış serilerde grup `null` |
| `table_col`, `table_row` | Görünüm yerleşimi; kimyasal grup ile eş anlamlı değildir |

Atom ağırlığı izotopun kütle numarası veya nötron sayısı değildir. Ondalık değerler yuvarlanarak nötron sayısı türetilmez. Özellikle kararsız/ağır element kayıtları için bu alan, standart atom ağırlığı veya doğrulanmış deneysel ölçüm iddiasıyla sunulmamalıdır. Kaynak bu sürümde ağır elementler için de ondalıklı metinler döndürür; uygulama köşeli parantez eklemez. Kaynakta köşeli parantez bulunsaydı metin olarak korunurdu.

Faz bilgisi kaynaktan alınmış bir referanstır. `Expected to be ...` ifadesi Türkçede `... (öngörülen)` olur; diğer faz değerlerine ek bir ölçüm güvencesi verilmez. Elektron dizilimleri kaynağı sadakatle yansıtır; ağır elementler için tartışmasız veya güncel en iyi kuramsal sonuç iddiası değildir.

Lantan–lütesyum 9. satırda, aktinyum–lavrensiyum 10. satırda, her ikisi de 3–17. sütunlardadır. 6. ve 7. ana satırların 3. sütunları `57–71` / `89–103` yönlendirme hücreleri için boştur. Bu düzen her elementi tam bir kez gösterir; grup 3 üyeliği tartışmasını görünüm koordinatıyla çözmeye çalışmaz.

`web/science/catalog.js` dışa aktarımları:

```js
import { elements, categories, findElement, periodicTableSource } from './catalog.js';
// elements: salt okunur 118 kayıt
// categories: kategori anahtarı -> Türkçe etiket
// findElement(6 | 'C' | 'Karbon' | 'Carbon'): tam eşleşen kayıt veya undefined
// periodicTableSource: URL, indirme tarihi, kaynak özeti ve açıklamalar
```

Arama Türkçe harf, büyük/küçük harf ve ASCII eşdeğerlerini tolere eder; kısmi eşleşme yapmaz. JSON içe aktarımı standart `with { type: 'json' }` niteliğini kullanır ve projenin esbuild paketlemesiyle çalışır.

## Malzeme modelleri

`web/science/materials.js`, Three.js bağımlılığı olmadan iki dışa aktarım sağlar:

```js
materialPresets; // [{ id, name, formula, description, structure, limitations }]
buildMaterial('graphite', { layers: 3, spacing: 1 });
// {
//   atoms: [{ id: 'graphite-a0', element: 'C', position: [x,y,z], layer: 0 }],
//   bonds: [{ a: 'graphite-a0', b: 'graphite-a1', order: 1 }],
//   metadata: { ... }
// }
```

Atom kimlikleri metindir. `layer` yalnızca katmanlı karbon modellerinde bulunur. NaCl atomlarında `charge` +1 veya −1 olur. Bilinmeyen malzeme kimliği `RangeError` verir. Aynı seçenekler her çağrıda aynı geometriyi üretir; dönen nesneler her çağrı için yenidir.

| `id` | Geometri ve varsayılan boyut |
| --- | --- |
| `graphene` | Bir düzlemde 19 altıgen halka; 54 C atomu, 72 komşuluk çizgisi |
| `graphite` | Aynı yamanın ABAB kaydırılmış 1–5 katmanı; varsayılan 3 katman |
| `diamond` | FCC noktaları + `(0,0,0)` / `(¼,¼,¼)` bazı; 3×3×3 geleneksel hücre, 216 C |
| `sodium-chloride` | Kaya tuzu: dönüşümlü 6×6×6 iyon noktası, 108 Na⁺ ve 108 Cl⁻ |
| `silicon` | Elmas tipi aynı kübik geometri; 216 Si |

Grafen tabakaları XZ düzlemindedir; katman normali Y yönüdür. Grafitte komşu B tabakası, X yönünde bir en yakın komşu uzaklığı kadar kaydırılır; birinci ve üçüncü tabakalar aynı A konumuna gelir. Katmanlar arasında bağ çizgisi eklenmez. `layers` en yakın tam sayıya yuvarlanıp 1–5 aralığına, `spacing` 0.4–4 aralığına sınırlanır. Sonlu olmayan değerlerde varsayılanlar kullanılır. `spacing`, birimsiz görsel katman aralığıdır; deneysel grafit aralığı değildir. Tek katmanda `metadata.spacing=null` olur. Diğer malzemeler bu seçenekleri kullanmaz.

Tüm modellerde en yakın çizilmiş komşu uzaklığı bir görsel birimdir; tüm yapı sınır kutusuna göre merkezlenir. Sonlu yamaların kenar atomlarında eksik komşuluklar beklenir. İçteki koordinasyon sayıları grafen/grafitte 3, elmas/silisyumda 4, NaCl’de 6’dır. NaCl’nin dönüşümlü noktaları iki iç içe FCC iyon alt örgüsünü gösterir; tek bir iyon türünün Bravais örgüsü basit kübik olarak etiketlenmez.

`bonds` adı çizicinin sözleşmesidir. `order: 1`, bir çizginin çizilmesini sağlar; grafende yerelleşmiş tek/çift bağ veya NaCl’de kovalent tek bağ iddiası taşımaz. `metadata.edge_semantics='nearest-neighbor-connectivity'`, `coordinate_units='unitless'`, `simulation=false` değerleri bu ayrımı açıkça korur. Dinamik, kuvvet alanı, soyulma, dayanım, bant yapısı veya kimyasal tepkime öngörülmez.

Kaynaklar (kontrol: 24 Kasım 2026): [Graphene Flagship — grafen](https://graphene-flagship.eu/materials/graphene/), [RSC Chemical Science — grafitte AB katman düzeni](https://pubs.rsc.org/en/content/articlehtml/2024/sc/d3sc06107h), [Columbia University — elmas kristal yapısı](https://www1.columbia.edu/sec/itc/ee/test2/hyperlinks/diamond%20xtal/diamond.htm), [Cambridge University — NaCl/kaya tuzu yapısı](https://www.gan.msm.cam.ac.uk/resources/crystalmodels/cscl-and-nacl). Model koordinatları bu yapısal tariflerden üretilir; malzemelerin gerçek örgü sabitleri kullanılmaz.

## Doğrulama

Node.js 24 ile:

```text
node --test tests/materials.test.js
```

Kontroller: 118 kayıt ve tekil yerleşim; kaynak metni hassasiyeti; Türkçe arama; sonlu ve tekrarlanabilir geometri; kenar uçları ve uzaklıkları; grafende 120° açılar ve düzlemsel çevrim sayısı; AB/A hizalanması ve katman içi çizgiler; elmas/silisyumda tetrahedral açılar; NaCl’de yük dengesi ve altılı iç koordinasyon.
