# Isı ve elektrik çalışma alanı

Studio'da **Isı ve elektrik** sekmesi veya `/enerji`. Devreyi düğüm numaralarıyla oluştur, direnç ekle/sil, gerilim ve dirençleri değiştir. Isı deneyinde kütle, özgül ısı, yüzey alanı, taşınım katsayısı, başlangıç/ortam sıcaklığı, güç ve süreyi gir. Sonuçları CSV, proje girdilerini JSON olarak kaydet. Girdiler değiştiğinde önceki sonuç temizlenir. Yerel kayıt aynı uygulama profilinde korunur.

Devre 48 direnç ve 24 düğüme kadar tek ideal DC kaynak kullanır. Düğüm 0 referans, 1 kaynak gerilimidir. Ara düğümler için Kirchhoff akım denklemleri iletkenlik matrisi olarak kurulur ve kısmi pivotlu eliminasyonla çözülür. Akım yönü A → B, güç `I²R`; kaynak gücü ve iç düğüm akım artığı denetlenir. Yüzen ağlar reddedilir; açık dalda sıfır akım mümkündür. Sıfır gerilim/açık devrede V/I tanımsız olduğundan eşdeğer direnç boş döner.

Isı hesabı `C=m·c`, `G=h·A`, `C·dT/dt=P−G·(T−Tₒ)` denkleminin analitik çözümüdür. Küçük G için sayısal iptal önlenir. `G=0` durumunda `T=T₀+Pt/C`; diğer durumda zaman sabiti `C/G`, denge sıcaklığı `Tₒ+P/G`. Enerji değerleri başlangıca göredir; `ortama net enerji = Pt − C(T−T₀)` negatifse ortamdan enerji alınmıştır. 2–2001 örnek ve en fazla 24 saat; sıcaklık −273,15–3000 °C sınırı dışına çıkan sonuç hata verir. Bu sayısal sınır, bir malzemenin bu aralıkta sabit özellikli olduğunu iddia etmez. Denge sıcaklığı, sonlu deney süresinin dışındaki teorik değer olabilir.

Bir direncin veya tüm devrenin gücü ısı alanına açık bir düğmeyle aktarılır. Bu tek yönlü, sabit güç aktarımıdır; sıcaklık devre direncini güncellemez. Projede aktarılan değer ve etiketi korunur. Kaydedilmiş sonuçlar yüklenmez; kullanıcı girdileri tekrar hesaplar.

Bu modellerde uzaysal ısı iletimi, ışınım, faz değişimi, AC, kondansatör, bobin, yarı iletken, elektromanyetik alan veya malzeme karakterizasyonu yoktur. Isıl yığılma varsayımının uygunluğu (ör. küçük Biot sayısı) ayrıca değerlendirilmelidir; iletkenlik/geometri doğrulaması otomatik yapılmaz. Gerçek deneyle kalibrasyon uygulanmadı.

API: `POST /api/engineering/thermal`, `POST /api/engineering/circuit`.
CLI: `yorunge-sim thermal-simulate scenarios/thermal.json`, `yorunge-sim circuit-solve scenarios/circuit.json`. Her iki yol aynı Rust fonksiyonunu çağırır; girdi sınırı 16 KiB'dır.

Kaynaklar: [OpenStax Kirchhoff kuralları](https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules), [elektrik gücü](https://openstax.org/books/university-physics-volume-2/pages/9-5-electrical-energy-and-power), [A Heat Transfer Textbook, 6. baskı](https://bpb-us-e1.wpmucdn.com/sites.mit.edu/dist/6/1810/files/2024/04/AHTTv600.pdf). Kaynaklar denklem/varsayımlara ilişkindir; yazılımın deneysel doğrulaması değildir.
