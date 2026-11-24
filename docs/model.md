# Model ve doğrulama

## Koordinatlar ve birim dönüşümleri

X sağa, Y yukarı pozitiftir. Kütle `mass_g / 1000` ile kg'a; çap `diameter_cm / 100` ile metreye çevrilir. Başlangıç hızı `vx=v*cos(a)`, `vy=v*sin(a)` olur; derece radyana çevrilir. `height_m`, noktasal kütlenin düz model zemininden yüksekliğidir.

## Hava ve sürükleme

Kuru havanın yaklaşık özgül gaz sabiti `R=287.05 J/(kg K)` alınır:

```text
rho = (pressure_hpa * 100) / (R * (temperature_c + 273.15))
A   = pi * (diameter_cm / 200)^2
u   = (vx - wind_m_s, vy)
k   = rho * Cd * A / (2 * mass_kg)
ax  = -k * |u| * ux
ay  = -g - k * |u| * uy
```

Sürükleme zemine göre hıza değil, **havaya göre hıza** ters yöndedir. Bu nedenle güçlü bir arka rüzgâr nesneyi +x yönünde hızlandırabilir. Basınç veya Cd sıfırsa sürükleme sıfırdır.

Temel kaynaklar: [NASA sürükleme denklemi](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-equation/), [NASA gaz durum denklemi](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/equation-of-state/), [NASA küre üzerindeki sürükleme](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-of-a-sphere/). Bu kaynaklar modelin genel dayanağıdır; bu yazılımın veya seçilmiş bir taşın doğrulanması anlamına gelmez.

Sabit Cd, düzensiz taşların yönelimini, Reynolds sayısıyla değişen küre sürüklemesini ve türbülansı çözmez. İdeal gaz yaklaşımı nemi dışarıda bırakır. Ölçülmüş parametrelerin belirsizliği modellenmez; sonuçlar olasılık veya güven aralığı değildir.

## Sayısal yöntem

Konum ve hız birlikte klasik dördüncü mertebe Runge–Kutta ile ilerletilir. `time_step_s`, çıktı aralığı ve üst adım sınırıdır. Kuvvetli sürüklemede iç alt adım, yaklaşık `0.1 / (k*|u| + sqrt(k*g))` sınırıyla küçültülür. Bu bir kararlılık önlemidir; otomatik hata toleranslı adaptif çözücü değildir. En fazla 120000 çıktı aralığı ve 1000000 iç adım kullanılır.

Yükseklik sıfırı geçtiğinde, son iç adım içinde ikili arama ile temas zamanı bulunur ve y tam sıfır yapılır. Dikey hız pozitiften negatife döndüğünde aynı yöntemle tepe noktası bulunur. Zeminde, yatay/aşağı başlangıç hızında uçuş süresi sıfırdır; yukarı başlangıçta uçuş başlar. Süre sınırına ulaşıldığında hesap açıkça `time_limit` olarak işaretlenir.

## Doğrulama yaklaşımı

Havasız ortamda analitik sonuç:

```text
t_ground = (vy0 + sqrt(vy0^2 + 2*g*h0)) / g
x_ground = vx0 * t_ground
y_peak   = h0 + max(vy0, 0)^2 / (2*g)
```

Sıfır başlangıç hızlı dikey düşüşte, karesel sürüklemeyle:

```text
v_terminal = sqrt(g/k)
vy(t) = -v_terminal * tanh(g*t/v_terminal)
y(t)  = h0 - ln(cosh(g*t/v_terminal))/k
```

Testler bu bağımsız kapalı çözümleri, küçük/büyük adım yakınsamasını, birim dönüşümlerini, rüzgâr işaretini, sürüklemesiz kütle bağımsızlığını, sıfır uçuşu, süre kesilmesini, geçersiz girdileri ve durağan havada mekanik enerji azalmasını kontrol eder.

Gerçek dünya doğrulaması sonraki ayrı çalışmadır: ölçülmüş başlangıç koşulları ve zaman-konum verileri gerekir; bir veri kümesinde katsayı ayarlayıp başka bir veri kümesinde hatayı raporlamak gerekir. Burada böyle bir deney yapılmamıştır.
