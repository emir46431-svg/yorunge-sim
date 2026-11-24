# Sonlu bölmelerde hücre deneyi

Bu modül, pasif su ve çözünen taşınımını görmek için küçük bir eğitim modelidir. Gerçek hücre canlılığını, bir tedaviyi veya tıbbi bir durumu tahmin etmez. Parametreleri deneysel verilerle kalibre edilmiş değildir. Bölünme gösterimi DNA, mitoz veya metabolizma simülasyonu değildir.

## Birimler ve durum

Hacim **pL**, çözünen miktarı **fmol**, zaman **s** ile ifade edilir. `1 fmol / 1 pL = 1 mmol/L = 1 mM` olduğundan derişim doğrudan miktar/hacim oranıdır.

Başlangıçta tam bir hücre ve sonlu bir dış havuz vardır. Her bölme iyi karışmış kabul edilir. Tek bir ideal, yüksüz çözünen türü kullanılır. Dış ortam sonsuz bir rezervuar değildir: su veya çözünen aktarımı onun hacmini ve derişimini de değiştirir.

İç havuzun toplam hacmi `V`, çözüneni `S`; sabit sistem toplamları `V_total` ve `S_total` olsun. Dış durum her zaman `V_external = V_total − V`, `S_external = S_total − S` olarak hesaplanır. Böylece ayrı rezervuar güncellemelerinden kaynaklanabilecek miktar kaybı önlenir. Sonuçtaki küçük korunum hataları kayan nokta yuvarlamasını gösterir.

## Taşınım denklemleri

Bir hücre için pozitif akış yönü içeri doğrudur:

```text
water_flux  = P × relative_area × (C_inside − C_outside)     [pL/s]
solute_flux = k × relative_area × (C_outside − C_inside)     [fmol/s]
relative_area = (cell_volume / initial_single_cell_volume)^(2/3)
```

`P`, pL/(s·mM); `k`, pL/s birimindedir. Bağıl alan boyutsuzdur. Geçirgenlik değerleri, başlangıçtaki tek hücrenin etkili alanını içerir; gerçek bir membran sabiti olarak yorumlanmamalıdır.

Su, bu yaklaşık modelde yüksek çözünen derişimine doğru; çözünen ise kendi derişim farkını azaltacak yönde taşınır. Eşit derişim net akışı sıfırlar. Pasif taşınım, difüzyon ve ozmoz kavramlarının genel açıklaması için [OpenStax, Concepts of Biology, 3.5 Passive Transport](https://openstax.org/books/concepts-biology/pages/3-5-passive-transport) kaynak alınmıştır. Buradaki katsayılar, sayısal yöntem ve hacim sınırları kaynaktan alınmış gerçek hücre parametreleri değildir.

İyon yükü, elektrokimyasal potansiyel, aktif pompalar, seçici kanallar, hidrostatik basınç, hücre duvarı ve membran gerilimi hesaplanmaz. Hücrenin gerçek şekli, patlaması, büzüşme morfolojisi veya hayatta kalması öngörülmez. Özellikle çözünen geçebildiğinde tek bir derişim farkı gerçek bir hücrenin tonisitesini tam olarak temsil etmez.

## Bölünme ve zaman çizgisi

`division_at_s`, `0 < zaman < duration_s` koşulunu sağlayan bir sayı veya `null` olabilir. Başlangıç kimliği `cell-1` olur. Belirlenen zamanda bu nesne `cell-1a` ve `cell-1b` adlı iki özdeş parçayla değiştirilir. Her biri o andaki hacmin ve çözünenin tam yarısını alır; derişim değişmez, dış havuz değişmez.

Kız hücrelerin parametreleri ve başlangıçları aynı olduğundan model onları simetrik tutar. Hesaplama tek bir toplam iç havuz üzerinden yürür ve sonuç iki eşit pay olarak gösterilir. Bölünme tek seferlik, anlık ve geometriktir. Bölünmeden sonra toplam bağıl alan `2 × (V / (2 × V_initial))^(2/3)` olur; aynı toplam hacimde bu, bölünme öncesinin `2^(1/3)` katıdır. Dolayısıyla geçirgenlik açıksa sonraki taşınım hızı değişebilir.

Çıktı `t=0` ile başlar. Düzenli örnekler `i / sample_hz` zamanlarında alınır; tam deney sonu ayrıca dahil edilir. Bölünme ızgara dışında olsa da kendi tam zamanında bir kare ve `division` olayı üretir. Bu kare **bölünme sonrası** iki hücreyi içerir. Bölünme örnek anına denk gelirse o anda tek kare vardır. Model erken durursa son hesaplanan durum ve `model_limit` olayı dahil edilir. Zamanlar artandır; en fazla **3002 kare** üretilir.

## Sayısal yöntem ve sınırlar

Çözünen aktarımı, hacim sabitken bilinen üstel denge çözümüyle güncellenir. Su alt adımında hızın orta noktadaki tahminiyle üstel bir gevşeme kullanılır. Sıra `yarım çözünen → tam su → yarım çözünen` biçimindedir. Her alt güncelleme mevcut değer ile denge değeri arasında kalır; bağımsız rezervuarları sıfıra kırparak korunum sağlanmaya çalışılmaz.

İç zaman adımı en fazla **0,02 s** olur; toplam gevşeme hızına göre daha da küçülür. Bölünme ve örnek anlarında adım tam olarak kesilir. En fazla **100.000 iç adım** çalıştırılır. Bu bütçe veya sayısal ilerleme sınırı aşılırsa sessizce devam edilmez; `summary.status = "model_limit"` ve açıklayıcı olay üretilir. `sample_hz` görselleştirme örneklemesidir; doğrudan bir fizik doğruluğu garantisi değildir.

Aşırı hacimleri gerçek hücre davranışı gibi göstermemek için çözüm şu sınırlara ulaşınca durur:

- Toplam iç hacim, başlangıçtaki iç hacmin **%20–%200** aralığında kalır.
- Dış hacim, kendi başlangıç hacminin **en az %5'i** olur.

Bölünme bu toplam hacim sınırlarını değiştirmez; her özdeş kız hücreye düşen referans pay yarıya iner. Sınır olayı son alt adımda ikili aramayla bulunur ve son güvenli durum kaydedilir. **Bu oranlar biyolojik canlılık, lizis veya plazmoliz eşikleri değildir.** Modelin kapsamını sınırlayan açık, eğitim amaçlı tercihlerdir.

Sabit hacim, tek hücre ve bölünmesiz durumda çözünen testi şu sonlu havuz analitik çözümüyle karşılaştırılır:

```text
C_equilibrium = S_total / (V_inside + V_outside)
lambda = k × (1/V_inside + 1/V_outside)
C_inside(t) = C_equilibrium
            + (C_inside(0) − C_equilibrium) × exp(−lambda × t)
```

## JSON sözleşmesi

Eksik deney alanları aşağıdaki varsayılanları alır. Bilinmeyen alanlar, sonlu olmayan sayılar ve aralık dışı değerler reddedilir. `sample_hz` tamsayıdır. JSON girdisi en fazla 16 KiB olabilir.

| Alan | Varsayılan | İzin verilen aralık |
|---|---:|---:|
| `duration_s` | 120 | 1–300 |
| `sample_hz` | 5 | 1–10, tamsayı |
| `cell_volume_pl` | 1 | 0,1–10 |
| `external_volume_pl` | 10 | 1–100 |
| `inside_concentration_mm` | 300 | 0–1000 |
| `outside_concentration_mm` | 150 | 0–1000 |
| `water_permeability_pl_s_mm` | 0,00004 | 0–0,001 |
| `solute_permeability_pl_s` | 0 | 0–0,05 |
| `division_at_s` | `null` | 0'dan büyük, süreden küçük |

`simulate_json(&str) -> Result<String, String>` tam sonucu serileştirir. `presets() -> serde_json::Value`, `presets` dizisinde `id`, `label`, `description`, `experiment` alanları sunar. Hazır deney kimlikleri `isotonic`, `hypotonic`, `hypertonic`, `diffusion`, `division` olur.

```text
{
  experiment: { ...tüm girdi alanları },
  frames: [{
    t_s,
    cells: [{ id, volume_pl, solute_fmol, concentration_mm }],
    external_volume_pl, external_solute_fmol, external_concentration_mm
  }],
  summary: {
    status: "completed" | "model_limit",
    elapsed_s, final_cell_count,
    initial_total_volume_pl, final_total_volume_pl,
    volume_conservation_error_pl, max_volume_conservation_error_pl,
    initial_total_solute_fmol, final_total_solute_fmol,
    solute_conservation_error_fmol, max_solute_conservation_error_fmol
  },
  events: [{ t_s, kind: "division" | "model_limit", message }],
  assumptions: [ ...model varsayımları ]
}
```

Son korunum hataları `son toplam − ilk toplam` olarak işaretli verilir. `max_*` alanları kaydedilen karelerdeki en büyük mutlak hatalardır. Durdurma durumunda `elapsed_s` istenen süreden kısadır; son kareyi tüm deney süresi tamamlanmış gibi yorumlamayın.

Testler tüm karelerde korunum ve sonluluk, izotonik durağanlık, suyun yönü, sabit hacimde analitik difüzyon, bölünme anı ve miktar paylaşımı, açık hacim sınırları, JSON doğrulaması ve çıktı bütçesini kapsar.
