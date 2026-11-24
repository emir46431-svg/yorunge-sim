# Araştırma verisi yardımcıları

`web/research/data.js`, bağımlılık ve DOM kullanmayan standart ESM modülüdür. Hatalı girişte Türkçe açıklamalı `Error` üretir; verilen nesne ve dizileri değiştirmez.

| Dışa aktarım | Sözleşme |
| --- | --- |
| `parseMeasurements(csv, { maxTime, maxProduct } = {})` | UTF-8 olarak en fazla 256 KiB, en fazla 1000 ölçüm; çıktı `[{time_s, product_um}]` |
| `compareMeasurements(frames, points)` | Sabit model çıktısına doğrusal enterpolasyon; `{count, rmse_um, mae_um, max_abs_error_um, predictions}` |
| `resultsCsv(runs)` | `run_id,time_s,substrate_um,product_um,rate_um_s` başlıklı CRLF CSV metni |
| `validateProjectEnvelope(raw)` | JSON metni veya sade nesneden doğrulanmış, bağımsız proje kopyası |
| `parseSweepValues(text)` | Noktalı virgülle ayrılmış 2–6 tekil, sonlu sayı |

Ölçüm CSV’sinde tam olarak `time_s` ve `product_um` başlıkları gerekir; sütun sırası değişebilir. Virgül veya noktalı virgül ayırıcı; BOM, CRLF, boş satır ve çift tırnaklı alan desteklenir. Ondalık virgül yalnız noktalı virgülle ayrılmış dosyalarda kullanılabilir. Boş alanlar, bozuk tırnaklar, negatif/sonlu olmayan değerler ve verilen üst sınırları aşan noktalar reddedilir. Birim dönüşümü yapılmaz. Zaman sıralanır; aynı zamandaki tekrarlar ayrı tutulur ve ölçüm gürültüsüne bağlı azalmalar kabul edilir. Nokta üretilmez veya ortalama alınmaz.

Karşılaştırmada model kareleri `t_s` ve `product_um` taşır; yinelenen kare zamanları reddedilir. Kareler kopya üzerinde sıralanır. Ölçüm zamanının hesaplanmış kare aralığı dışında kalması hatadır; ekstrapolasyon veya sınıra sıkıştırma yapılmaz. Uç noktalar dahildir. Tek kare varsa yalnız o zamandaki ölçümler karşılaştırılabilir. Her tekrar ayrı, eşit ağırlıklı gözlem sayılır. Tahmin kaydı `{time_s, observed_um, predicted_um, residual_um}` biçimindedir; **artık = tahmin − gözlem**. RMSE ve MAE µM birimindedir. Bu işlem parametre uydurmaz, model parametrelerini değiştirmez.

Sonuç CSV’si yalnız üretilmiş deney kimliği ile sayısal sonuç alanlarını yazar; kullanıcı etiketi ve notu hücrelere aktarılmaz. Kimlikler CSV kurallarına göre tırnaklanır; `=`, `+`, `-`, `@` ile başlayan kimliklere elektronik tablo formülü yorumunu önlemek için başta apostrof eklenir. Sonuç sayıları sonlu ve negatif olmayan sayı olmalıdır. Boş deney listesi yalnız başlık üretir; bir deneyin hesaplanmış kare listesi boş olamaz.

Proje dosyasının biçimi:

```js
{
  format: 'yorunge-research', version: 1,
  title: 'Proje', notes: '',
  runs: [{
    id: 'run-1', label: 'Kontrol', created_at: '2026-11-24T12:00:00.000Z',
    experiment: { substrate_um: 20, inhibition: 'none' }, notes: ''
  }],
  measurements: [{ time_s: 0, product_um: 0 }]
}
```

JSON metni ayrıştırılmadan önce 1 MiB sınırı denetlenir; nesne girişinin JSON boyutu da aynı sınıra tabidir. En fazla 12 deney ve 1000 ölçüm kabul edilir. Başlık 120, proje notu 10000, deney etiketi 100, deney notu 2000 karakteri aşamaz. Tekil deney kimliği 1–64 ASCII karakter içerir; harf/rakamla başlayıp yalnız harf, rakam, `_`, `-` kullanır. Tarihler geçerli, saat dilimi içeren ISO zamanlarıdır ve UTC olarak standartlaştırılır. Notlar verilmezse boş metne; ölçümler verilmezse boş listeye dönüşür. Bilinmeyen alanlar ve prototip anahtarları reddedilir. **Kaydedilmiş `result`/`results` alanları kabul edilmez; içe aktarılan deneyler backend tarafından yeniden hesaplanmalıdır.**

Kısmi `experiment` nesnesinde izin verilen alanlar: `substrate_um`, `product_um`, `enzyme_um`, `km_um`, `kcat_per_s`, `inhibitor_um`, `inhibition`, `ki_um`, `ki_prime_um`, `activity_fraction`, `duration_s`, `samples`. `inhibition`: `none`, `competitive`, `noncompetitive`, `uncompetitive`, `mixed`; diğer alanlar sonlu sayıdır. Bilimsel aralıklar, tamsayı gereksinimleri ve varsayılanlar ayrıca backend tarafından doğrulanır. Proje genelindeki ölçümlerin seçilen deneye zaman uyumu karşılaştırma sırasında denetlenir.

Tarama değerlerinde ondalık virgül/nokta ve bilimsel gösterim desteklenir. Boş parçalar, sayısal olarak yinelenen değerler ve ifade/kod girişleri reddedilir. Negatif sonlu tarama değerleri genel ayrıştırıcıda kabul edilir; ilgili parametrenin bilimsel sınırı backend tarafından uygulanır.

Doğrulama: `node --test tests/research-data.test.js`.
