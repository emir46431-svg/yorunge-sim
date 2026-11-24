# Araştırma grafikleri: tarayıcı yardımcıları

`web/research/charts.js` yalnız standart DOM/SVG kullanır. Model çalıştırmaz, veri uydurmaz, ağ isteği yapmaz ve başka hostları değiştirmez. Her çizim fonksiyonu verilen host üzerinde bir kez `replaceChildren` çağırır. Zaman göstergesi ayrı güncellenir.

```js
import {
  drawProgressChart, updateTimeMarker, drawRateChart, renderMechanism,
} from './charts.js';

drawProgressChart(progressHost, runs, {
  selectedId: selectedRun.id,
  time: playbackSeconds,
  measurements: [{ time_s: 20, product_um: 3.4 }],
});
updateTimeMarker(progressHost, playbackSeconds);
drawRateChart(rateHost, runs);
renderMechanism(mechanismHost, {
  inhibition: 'competitive',
  frame: selectedFrame,
  experiment: selectedRun.result.experiment,
});
```

## Girdi sözleşmesi

```js
const runs = [{
  id: 'run-1', label: 'Referans', color: '#087f83',
  result: {
    frames: [{ t_s: 0, substrate_um: 10, product_um: 0, rate_um_s: 1 }],
    rate_curve: [{ substrate_um: 0, rate_um_s: 0 }],
    summary: { apparent_vmax_um_s: 2, apparent_km_um: 10 },
    experiment: {},
  },
}];
```

- En fazla ilk dört deney çizilir. Çizgi rengi yanında çizgi deseni de deneyleri ayırır. Güvenli `#rgb`/`#rrggbb` renkleri kabul edilir; diğer değerlerde sabit palet kullanılır.
- Grafikler 720×280 `viewBox`, ortak eksenler, okunabilir birimler, SVG başlık/açıklamaları, DOM açıklaması ve lejant kullanır. Dar ekranda host taşmaz; odaklanabilir iç bölge yatay kaydırılabilir.
- Ürün grafiği gerçek `t_s` değerlerini kullanır; kısa deneyin eğrisi kendi son örneğinde biter. Ortak zaman ekseni için eğriler esnetilmez, uzatılmaz veya normalize edilmez.
- `measurements` içindeki sonlu, negatif olmayan `time_s/product_um` çiftleri koyu daireler olarak çizilir; birbirine bağlanmaz. Boş liste, sıfır ölçüm noktası demektir. Ölçümler de ortak eksen aralığına dahil edilir.
- `selectedId:null` veya ilk dört çizgi içinde bulunmayan bir kimlik zaman göstergesini gizler. `updateTimeMarker` sadece çizgiyi ve zaman etiketini değiştirir. Gösterge `[0, seçilen deneyin son t_s değeri]` aralığına sıkıştırılır; girdi ve eğriler değiştirilmez.
- Hız grafiği `result.rate_curve` içindeki gerçek substrat noktalarını kullanır; zaman serisi değildir. `summary.apparent_vmax_um_s` mevcutsa yatay kılavuz eklenir. `summary.apparent_km_um` lejantta yalnız verilen değeriyle gösterilir. Hiçbiri deney parametrelerinden yeniden hesaplanmaz.
- Sonlu olmayan veya negatif veri satırları çizilmez; çizgi içindeki geçersiz örnek bir boşluk bırakır. Atlanan satır sayısı açıklamaya eklenir. Sıfır değerler geçerlidir.
- Girdi dizileri sıralanmaz/değiştirilmez. Eğriler verilen örnek sırasını korur; zaman/hız örneklerinin sıralı olması model çıktısının sorumluluğudur.

## Mekanizma şeması

`renderMechanism` E + S ⇌ ES → E + P gösterimini oluşturur. E enzim, S substrat, P ürün ve I inhibitör olarak etiketlenir. Desteklenen görünüm etiketleri: `none`, `competitive`, `noncompetitive`, `uncompetitive`, `mixed`. Başka bir değer genel bir inhibisyon etiketiyle gösterilir.

İnhibisyon için çizilen temas bölgesi yalnız görsel bir semboldür; kinetik model türünden gerçek bağlanma yeri çıkarılmaz. ES doluluğu, parçacık sayısı veya çarpışma olasılığı gösterilmez. S/P/hız rozetleri yalnız verilen `frame` içindeki `substrate_um`, `product_um`, `rate_um_s` değerlerini okur; kare yoksa çizgi işareti gösterir. `experiment` gelecekteki görsel bağlam için kabul edilir; mikroskobik durum türetmekte kullanılmaz.

Kullanıcı etiketi ve sayısal açıklamalar `textContent` ile yazılır. Yardımcıda `innerHTML` veya kullanıcı verisinden HTML/SVG metni oluşturma yoktur.

Başlıca stil sınıfları: `research-chart`, `research-chart-viewport`, `research-chart-legend`, `research-chart-caption`, `research-chart-empty`, `research-mechanism`, `research-mechanism-viewport`, `research-mechanism-values`, `research-mechanism-badge`. Temel okunabilirlik için yerel stiller vardır; sayfa CSS'i dış yerleşimi düzenleyebilir.
