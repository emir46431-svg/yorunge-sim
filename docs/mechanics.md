# 3B mekanik modeli ve JSON sözleşmesi

Motor: Rust `rapier3d` 0.36.1. Görünüm: Three.js 0.187.0. HTTP ve CLI aynı `lab::run_scene` fonksiyonuna ulaşır. Temel motorun belgeleri: [Rapier Rust kullanıcı kılavuzu](https://rapier.rs/docs/user_guides/rust/getting_started/).

## Birimler

API'de SI: metre, kilogram, saniye, m/s, rad/s. Arayüz kütleyi gram ve boyutu cm gösterir; API'ye geçerken dönüştürür. Y yukarıdır. `rotation_deg` yalnızca başlangıçta derece cinsinden XYZ Euler açısıdır; sonuç karelerinin `rotation` alanı `[x,y,z,w]` quaternion'dur.

Sahne `schema_version:1`, `name`, `gravity:[x,y,z]`, `duration_s`, `sample_hz`, `floor_friction`, `floor_restitution`, `bodies` ve `springs` içerir. [Örnek sahne](../scenarios/lab-drop.json) doğrudan çalıştırılabilir. `GET /api/lab/presets` diğer örneklerin eksiksiz tanımlarını döndürür.

## Nesneler

Her nesne `id`, `label`, `shape`, `size`, `position`, `rotation_deg`, `velocity`, `angular_velocity`, `mass_kg`, `friction`, `restitution`, `fixed` ve `material` alanlarına sahiptir.

- `shape` = `sphere`: çap `size[0]`.
- `shape` = `box`: `size[x,y,z]` tam kenar boylarıdır; yarım genişlik değildir.
- `shape` = `cylinder`: çap `size[0]`, Y eksenindeki tam yükseklik `size[1]`.
- `position`, kütle merkezidir. Küre yerde durduğunda merkez yüksekliği yarıçaptır.
- `fixed:true` olan cisim yerinde durur; başlangıç hızından etkilenmez.
- `material` görsel etikettir. Sayısal fizik özellikleri üstündür; otomatik yoğunluk hesabı yapılmaz.

Sürtünme katsayıları ortalama, esneklik katsayıları maksimum kuralıyla birleştirilir. Zemin sonsuz `y=0` yarı uzayıdır; görsel ızgara sonsuz zeminin tamamını çizmez. CCD, hızlı hareketlerde ince nesnelerin içinden geçme riskini azaltır; her koşulda tam fizik doğruluğu garantisi değildir.

## Yaylar

`id`, `a` ve `b` (nesne kimlikleri), `rest_length_m`, `stiffness_n_m`, `damping_n_s_m`. Uçlar nesne merkezlerine bağlanır. Aynı nesneye iki uç bağlanamaz; eksik kimlikler reddedilir. Sabit nesne bir ankraj gibi kullanılabilir. Yaylar idealize edilmiştir; gerçek tel geometrisi hesaplanmaz.

## Çözüm ve çıktı

120 Hz sabit fizik adımı, 8 solver iterasyonu, 30 veya 60 Hz çıktı. İstenen süre en yakın üst fizik adımına yuvarlanır; fazlalık 1/120 saniyeden küçüktür. `summary.duration_s` gerçek hesap süresidir. Görüntü iki örnek arasında konumu doğrusal, dönüşü quaternion interpolasyonu ile gösterir; ek fizik hesabı yapmaz.

Sonuç `engine`, `scene`, `frames`, `summary` ve `assumptions` alanları içerir. Her kare `t_s` ve kimlik sırası sabit `bodies` dizisine sahiptir. Nesne karesi konum, dönüş, doğrusal/açısal hız ve uyku durumunu taşır. Aynı girdi aynı motor derlemesinde tekrar üretilebilir; farklı motor/platform sürümleri arasında bit düzeyinde aynı sonuç vaat edilmez.

## Sınırlar ve doğrulama

En fazla 60 cisim, 16 yay, 30 saniye; gövde boyutları 0.1–10 m; kütle 0.01–1000 kg. Konum bileşenleri -40–40 m, başlangıç Y konumu 0–40 m; doğrusal hız bileşenleri -30–30 m/s, açısal hız -20–20 rad/s. Bunlar kaynak kullanım sınırlarıdır, fiziksel doğrulama aralıkları değildir. Başlangıçta iç içe cisimler kabul edilir ve çarpışma çözücüsü ayırmaya çalışır; gerçekçi başlangıç koşulları kullanıcı sorumluluğundadır.

Testler serbest düşüşün analitik çözümünü, zemin temas yüksekliğini, sabit cisimleri, dönme gösterimini, yatay momentum korunumunu, esneklik/sürtünme etkisini, sönümlü yay dengesini, tekrarlanabilirliği, kimlik bağlantılarını ve sayısal sınırları denetler. Gerçek malzeme veya deney verisiyle kalibrasyon yapılmamıştır.
