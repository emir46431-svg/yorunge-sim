# Enzim ilerleme deneyi

Bu modül, tek substratın tek ürüne geri dönüşsüz dönüşümü için **indirgenmiş Michaelis–Menten modelini** kullanır. Gerçek bir enzimin elementer bağlanma basamaklarını, moleküler yapısını veya kütle etkisi tepkime ağını çözmez. Parametreler belirli bir enzime veya ölçüm serisine kalibre edilmemiş örnek değerlerdir. Deney planlamayı düşünmek ve varsayımları karşılaştırmak için kullanılabilir; gerçek deney doğrulamasının yerini almaz.

Tüm derişimler **µM**, zaman **s**, hız **µM/s**, `kcat_per_s` ise **s⁻¹** birimindedir. Hacim sabittir. `enzyme_um` tek tip etkin merkezleri temsil eden nominal enzim derişimidir. `activity_fraction`, kullanıcının seçtiği boyutsuz etkinlik payıdır; pH veya sıcaklıktan otomatik hesaplanmaz.

## Hız yasası ve inhibisyon

```text
V = kcat × E × activity_fraction
b = alpha × Km
c = alphaPrime
v(S) = V × S / (b + c × S)

görünür Km   = b / c
görünür Vmax = V / c
```

`I`, deney boyunca sabit tutulan **serbest** inhibitör derişimidir. İnhibitörün enzimle bağlanarak tüketilmesi ve sıkı bağlanma etkileri bu modele dahil değildir.

| `inhibition` | `alpha` | `alphaPrime` |
|---|---|---|
| `none` | 1 | 1 |
| `competitive` | `1 + I/Ki` | 1 |
| `noncompetitive` | `1 + I/Ki` | `1 + I/Ki` |
| `uncompetitive` | 1 | `1 + I/Ki′` |
| `mixed` | `1 + I/Ki` | `1 + I/Ki′` |

Burada `noncompetitive`, **saf noncompetitive** durumudur. `ki_prime_um` bu modda kullanılmaz. İki farklı sabitli model için `mixed` seçilmelidir. İnhibitör sıfırsa bütün modlar inhibitörsüz yasaya indirgenir. `none` seçiliyken sıfırdan büyük inhibitör girilirse bu girdinin hızda kullanılmadığı açıkça bildirilir.

Michaelis–Menten yasasının düşük ve yüksek substrat sınırları ile inhibisyon terimlerinin ayrımı için temel kaynak [IUBMB, Symbolism and Terminology in Enzyme Kinetics, bölümler 4–6](https://iubmb.qmul.ac.uk/kinetics/ek4t6.html) metnidir. IUBMB, saf noncompetitive durumu iki inhibisyon sabitinin eşit olduğu mixed durumundan ayırır; buradaki adlandırma bunu açık tutar. Enzim deneyi bağlamında ek okuma: [NCBI Bookshelf, NBK92001](https://www.ncbi.nlm.nih.gov/books/NBK92001/). Bu bağlantılar, örnek parametrelerin deneysel doğrulaması anlamına gelmez.

## İlerleme denkleminin çözümü

Her örnek zamanı doğrudan tümleştirilmiş denklemden çözülür; önceki örneğin hatası sonrakine taşınmaz:

```text
b × ln(S0 / S(t)) + c × (S0 − S(t)) = V × t
P(t) = P0 + (S0 − S(t))
```

`x = ln(S0/S)` dönüşümüyle kök denklemi şöyle olur:

```text
F(x) = b × x + c × S0 × (1 − exp(−x)) = V × t,   x ≥ 0
```

`b>0` olduğundan `F` kesin artandır. Çözücü, matematiksel alt/üst sınırlarla çevrelenmiş ikili arama kullanır ve en fazla **80 yineleme** yapar. `1 − exp(−x)`, küçük `x` değerlerinde çıkarma hassasiyetini kaybetmemek için `−expm1(−x)` olarak değerlendirilir. Sonra `S=S0×exp(−x)` ve `P=P0+(S0−S)` hesaplanır.

Bu yöntem negatif substrat üretmez. `S+P=S0+P0` korunumu indirgenmiş model bilançosudur; enzim komplekslerinde tutulan substrat ayrı izlenmez. `product_um` başlangıç bilançosunu kaydırır; geri tepkime veya ürün inhibisyonu oluşturmaz.

Sıfır enzim, sıfır `kcat` veya sıfır etkinlik payında bütün örnekler durağandır ve `half_time_s=null` olur. Kuramsal yarılanma zamanı:

```text
t_half = [b × ln(2) + c × S0 / 2] / V
```

Bu değer **başlangıç substratının yarısının tüketilme zamanıdır**; son ürünün yarısına ulaşma zamanı değildir. Gözlem süresinden büyük olabilir. Çok küçük etkin hız nedeniyle değer sonlu `f64` aralığını aşarsa `null` ve açıklayıcı uyarı döner. Benzer biçimde, üstel azalma sonucunda substrat sayı aralığının altına düşerse 0 gösterilir ve uyarılır; model sonlu zamanda gerçek bir tam tükenme olayı iddia etmez.

## Varsayımlar ve geçerlilik işaretleri

- Tek substrat, tek ürün, 1:1 stokiyometri ve sabit hacim kullanılır.
- Enzim–substrat veya enzim–inhibitör kompleksleri bağımsız durum değişkenleri değildir.
- Serbest inhibitör ve kinetik katsayılar zaman boyunca sabittir.
- Geri tepkime, ürün inhibisyonu, kooperativite, substrat inhibisyonu, enzim bozunması ve taşıma sınırlamaları yoktur.
- Sıcaklık ve pH etkileri otomatik türetilmez. `activity_fraction` kullanıcının açık varsayımıdır; aynı katsayının bütün koşullarda geçerli olduğu iddia edilmez.

Nominal enzim için `E0/(S0+Km) ≥ 0,1` olduğunda yarı kararlı durum yaklaşımının zayıf olabileceği uyarılır. **0,1 evrensel veya deneyle doğrulanmış bir geçerlilik sınırı değildir**; yalnız dikkat çekmek için kullanılan eğitim amaçlı bir göstergedir. Uyarı bulunmaması da modelin gerçek bir deney için geçerli olduğunu kanıtlamaz. Çok yüksek enzim veya hızlı substrat tüketimi gibi koşullarda bir elementer mekanizma ve deneysel veriler gerekebilir.

## Girdi ve kaynak bütçesi

Eksik `Experiment` alanları varsayılan değeri alır. Bilinmeyen alanlar, sonlu olmayan sayılar ve aralık dışındaki değerler reddedilir. `samples` tamsayıdır; başlangıç ve bitiş dahil toplam örnek sayısını belirler.

| Alan | Varsayılan | İzin verilen aralık |
|---|---:|---:|
| `substrate_um` | 100 | 0,1–10000 |
| `product_um` | 0 | 0–10000 |
| `enzyme_um` | 0,1 | 0–10 |
| `km_um` | 30 | 0,01–10000 |
| `kcat_per_s` | 10 | 0–1000 |
| `inhibitor_um` | 0 | 0–10000 |
| `inhibition` | `none` | Yukarıdaki beş mod |
| `ki_um` | 25 | 0,01–10000 |
| `ki_prime_um` | 25 | 0,01–10000 |
| `activity_fraction` | 1 | 0–1 |
| `duration_s` | 120 | 0,1–3600 |
| `samples` | 121 | 2–601, tamsayı |

JSON girdisi en fazla **16 KiB** olabilir. Tek deney en fazla **601 zaman örneği** ve **61 hız eğrisi noktası** üretir. Hız eğrisinin istenen üst sınırı `max(2×S0, 5×görünür Km)` olur. Çizimin ilgisiz ölçüde büyümesini önlemek için en çok **100000 µM** kullanılır; kesilirse `warnings` bunu açıklar. Kullanılan gerçek üst sınır `rate_curve` dizisinin son noktasındaki `substrate_um` değeridir. Bu sınır yalnız ek hız eğrisi içindir; ilerleme denklemini değiştirmez.

## API sözleşmesi

`simulate(Experiment)` tipli sonucu, `simulate_json(&str)` JSON sonucunu döndürür. İkisi de doğrulama hatalarını `Result` ile bildirir.

```text
{
  model: "michaelis-menten-progress-v1",
  experiment: { ...12 girdi alanı },
  frames: [{ t_s, substrate_um, product_um, rate_um_s }],
  summary: {
    initial_rate_um_s, final_product_um, substrate_conversion_fraction,
    apparent_km_um, apparent_vmax_um_s, half_time_s,
    max_conservation_error_um
  },
  rate_curve: [{ substrate_um, rate_um_s }],
  assumptions: [ ... ],
  warnings: [ ... ]
}
```

`max_conservation_error_um`, zaman örneklerindeki en büyük `abs(S+P−S0−P0)` değeridir. `substrate_conversion_fraction`, yalnız başlangıç substratının dönüştürülen payıdır ve 0–1 aralığındadır.

`presets()` şu kimliklerle `presets: [{id,label,description,experiment}]` döndürür: `baseline`, `competitive`, `noncompetitive`, `uncompetitive`, `slow-activity`. Bunlar genel örneklerdir; bilinen bir enzimin gerçek ölçüm değerleri olarak sunulmaz.

## Tek parametre taraması

`sweep_json(&str)` örneği:

```json
{
  "experiment": {"inhibition":"competitive","samples":121},
  "parameter":"inhibitor_um",
  "values":[0,25,50]
}
```

`parameter` yalnız `enzyme_um`, `substrate_um`, `inhibitor_um` veya `activity_fraction` olabilir. `experiment` zorunludur; içindeki eksik alanlar varsayılanlarını alır. `values`, **1–6 sonlu, farklı sayı** içermelidir. `0` ve `-0` aynı değer sayılır. Her değer normal deney alanının aralığını sağlamalıdır. Ana deney ve bütün değerler, herhangi bir çalıştırma yapılmadan doğrulanır.

Yanıt `{parameter,runs:[{value,result}]}` biçimindedir. Her `result` bağımsız bir tam deney sonucudur; girdinin diğer alanları değiştirilmez. En büyük tarama **3606 zaman örneği** ve **366 hız eğrisi noktası** üretir. Aynı 16 KiB girdi sınırı tarama için de geçerlidir.

Testler tümleştirilmiş denklem artığını, başlangıç ve substrat sınır hızlarını, inhibisyonun görünür parametrelerini, saf noncompetitive özel durumunu, korunum/sonluluğu, sıfır ve aşırı hızları, yarılanma zamanını, taramaları ve kaynak sınırlarını kapsar.
