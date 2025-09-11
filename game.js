document.addEventListener('DOMContentLoaded', () => {
    const MEVCUT_UYGULAMA_SURUMU = "1.14";
    const basarimlar = {
        ilk_zafer: {
            tr: { ad: "İlk Zafer", aciklama: "İlk oyununu kazan." },
            en: { ad: "First Victory", aciklama: "Win your first game." },
            kazanildi: false
        },
        kusursuz: {
            tr: { ad: "Kusursuz!", aciklama: "Hiç hata yapmadan bir kelime bil." },
            en: { ad: "Flawless!", aciklama: "Guess a word without making any mistakes." },
            kazanildi: false
        },
        hizli: {
            tr: { ad: "Zamana Karşı", aciklama: "Bir kelimeyi 30 saniyeden fazla süre varken bil." },
            en: { ad: "Against the Clock", aciklama: "Guess a word with more than 30 seconds remaining." },
            kazanildi: false
        },
        seri_5: {
            tr: { ad: "Sıcak Gidiyor...", aciklama: "5 oyun üst üste kazan." },
            en: { ad: "On a Roll...", aciklama: "Win 5 games in a row." },
            kazanildi: false
        },
        gurme: {
            tr: { ad: "Gurme", aciklama: "'Yemekler' kategorisinde 5 kelime bil." },
            en: { ad: "Gourmet", aciklama: "Guess 5 words in the 'Foods' category." },
            kazanildi: false
        },
        kil_payi: {
            tr: { ad: "Kıl Payı Kurtuluş", aciklama: "Sadece 1 hakkın kalmışken oyunu kazan." },
            en: { ad: "Close Call", aciklama: "Win a game with only 1 life left." },
            kazanildi: false
        },
        dil_bilgini: {
            tr: { ad: "Dil Bilgini", aciklama: "Hem Türkçe hem de İngilizce modunda en az birer oyun kazan." },
            en: { ad: "Linguist", aciklama: "Win at least one game in both Turkish and English mode." },
            kazanildi: false
        },
        maceraperest: {
            tr: { ad: "Maceraperest", aciklama: "Tüm zorluk seviyelerinde (Kolay, Orta, Zor) en az birer oyun kazan." },
            en: { ad: "Adventurer", aciklama: "Win at least one game on all difficulty levels (Easy, Medium, Hard)." },
            kazanildi: false
        },
        risk_ustasi: {
            tr: { ad: "Risk Ustası", aciklama: "Hiç ipucu kullanmadan art arda 3 oyunu kazan." },
            en: { ad: "Risk Taker", aciklama: "Win 3 consecutive games without using any hints." },
            kazanildi: false
        }
    };

    const kategoriIkonlari = {
        sehirler: "🏛️",
        meyveler: "🍎",
        hayvanlar: "🦁",
        ulkeler: "🌎",
        yemek: "🍔",
        meslek: "🛠️",
        esya: "🛋️",
        spor: "🏀",
        tasitlar: "🚗",
        bitkiler: "🌸",
        uzay: "🪐"
    };

    const dil = {
        tr: {
            anaMenuButon: "🏠 Ana Menü",
            oyunBaslik: "Adam Asmaca",
            oyunKurallariBaslik: "Oyun Kuralları",
            maceraHaritasiBaslik: "🗺️ Macera Haritası 🗺️",
            anaMenuButon: "🏠 Ana Menü",
            level1_ad: "Meyve Bahçesi",
            level2_ad: "Şehir Turu",
            level3_ad: "Vahşi Doğa",
            level4_ad: "Lezzet Ustası",
            level5_ad: "Dünya Turu",
            level6_ad: "Patron: Uzun Şehirler",
            level7_ad: "Meslek Sırları",
            level8_ad: "Eşya Dünyası",
            level9_ad: "Egzotik Meyveler",
            level10_ad: "Nadir Hayvanlar",
            level11_ad: "Dünya Mutfağı",
            level12_ad: "Başkentler",
            level13_ad: "Ofis Hayatı",
            level14_ad: "Uzmanlık Alanları",
            level15_ad: "Final: Mega Kelimeler",
            level4_yeni_ad: "Motor Show",
            level8_yeni_ad: "Botanik Bahçesi",
            level12_yeni_ad: "Olimpiyat Arenası",
            level16_yeni_ad: "Galaktik Sınav",
            harfEle: "💥 Harf Ele",
            dondur: "❄️ Dondur",
            ekstraHak: "❤️ Ek Hak",
            dogruKelime: "Doğru kelime:",
            basarimKazanildi: "🏆 Başarım Kazanıldı:",
            maceraSeviye: "SV",
            kart_kendin_sec: "KENDİN SEÇ",
            kart_klasik: "KLASİK",
            kart_zamana_karsi: "ZAMANA KARŞI",
            kart_macera: "MACERA",
            kart_basarim: "BAŞARIM",
            kart_istatistik: "İSTATİSTİKLER",
            gunun_gorevi_baslik: "GÜNÜN GÖREVİ",
            stats_genel_basari: "Genel Başarı",
            stats_kategori: "Kategori",
            stats_kazanma: "Kazanma",
            stats_oynama: "Oynama",
            stats_basari_yuzde: "Başarı %",
            gunluk_limit_uyari: "Bugünlük macera limitine ulaştın! Yeni seviyeler için yarın tekrar gel.",
            komboMetni: (sayac, puan) => `KOMBO x${sayac}! +${puan} Puan`,
            ustBaslik: "Ozcelik Inc.",
            sonraki: "➡️ Sonraki",
            ipucu: (cost) => `İpucu (${cost}⭐)`,
            basla: "Oyuna Başla",
            anasayfa: "🏠 Ana Sayfa",
            yenile: "Yenile",
            kazandi: "Tebrikler!",
            kaybetti: "Kaybettiniz!",
            hata: "Bir hata oluştu: ",
            sure: "Süre: ",
            sehirler: "İl-İlçe",
            meyveler: "Meyve-Sebze",
            hayvanlar: "Hayvanlar",
            ulkeler: "Ülkeler",
            yemek: "Yeme-İçme",
            meslek: "Meslekler",
            esya: "Eşyalar",
            spor: "Spor Dalları",
            tasitlar: "Taşıtlar",
            bitkiler: "Bitki",
            uzay: "Uzay",
            kurallar: "Gizli kelimeyi bulmak için harfleri tahmin et. Yanlış tahminler ve süre puanını etkiler. İpuçları için puanını kullan!",
            gunluk_gorev_aciklama: (hedef, kategori) => `"${dil.tr[kategori] || kategori}" kategorisinden ${hedef} kelime bul.`,
            gunluk_gorev_odul: (puan) => `Görev tamamlandı! +${puan} Puan kazandın!`,
            yetersiz_puan: "Yetersiz Puan!",
            ipucu_kullanilamaz: "İpucu Kullanılamaz",
            sayfaBaslik: "Ozcelik Inc. Adam Asmaca Macerası",
            maceraModu: "Macera",
            klasikModu: "Klasik",
            zamanaKarsi: "Zamana Karşı",
            gunlukGorevBaslik: "⭐ Günün Görevi ⭐",
            basarimlar: "Başarımlar",
            istatistikler: "İstatistikler",
            dil: "Dil:",
            basarimPopupBaslik: "🏆 Başarımlar",
            istatistikPopupBaslik: "📊 İstatistikler",
            onayPopupBaslik: "Emin misin?",
            onayPopupAciklama: "Oyundan çıkarsan mevcut ilerlemen kaybolacak!",
            onayEvet: "Evet, Çık",
            onayHayir: "Devam Et",
            seviyeSecimBaslik: "🕹️ Klasik Oyun",
            seviyeSecimAciklama: "Bir zorluk seviyesi seçerek başla!",
            seviyeKolayBaslik: "Kolay",
            seviyeKolayAciklama: "Kısa kelimeler, <strong>7 hak</strong> ve <strong>70 saniye</strong> süre.",
            seviyeOrtaBaslik: "Orta",
            seviyeOrtaAciklama: "Orta uzunlukta kelimeler, <strong>7 hak</strong> ve <strong>80 saniye</strong> süre.",
            seviyeZorBaslik: "Zor",
            seviyeZorAciklama: "Uzun kelimeler, <strong>6 hak</strong> ve <strong>90 saniye</strong> süre.",
            timeAttackSonuBaslik: "😔 Kaybettin! 😔",
            timeAttackSonuAciklama: "Harika bir mücadeleydi!",
            timeAttackSonucYazi: "Toplam Bilinen Kelime:",
            timeAttackPuanYazi: "Kazanılan Puan:",
            footer: "© 2025 Ozcelik Inc. Tüm hakları saklıdır."
        },
        en: {
            oyunBaslik: "Hangman",
            oyunKurallariBaslik: "Game Rules",
            anaMenuButon: "🏠 Main Menu",
            maceraHaritasiBaslik: "🗺️ Adventure Map 🗺️",
            anaMenuButon: "🏠 Main Menu",
            level1_ad: "Fruit Garden",
            level2_ad: "City Tour",
            level3_ad: "Wild Nature",
            level4_ad: "Taste Master",
            level5_ad: "World Tour",
            level6_ad: "Boss: Long Cities",
            level7_ad: "Job Secrets",
            level8_ad: "World of Items",
            level9_ad: "Exotic Fruits",
            level10_ad: "Rare Animals",
            level11_ad: "World Cuisine",
            level12_ad: "Capitals",
            level13_ad: "Office Life",
            level14_ad: "Specialties",
            level15_ad: "Final: Mega Words",
            harfEle: "💥 Eliminate",
            dondur: "❄️ Freeze",
            ekstraHak: "❤️ Extra Life",
            dogruKelime: "The correct word was:",
            basarimKazanildi: "🏆 Achievement Unlocked:",
            maceraSeviye: "LVL",
            kart_klasik: "CLASSIC",
            kart_zamana_karsi: "TIME ATTACK",
            kart_macera: "ADVENTURE",
            kart_basarim: "ACHIEVEMENTS",
            kart_istatistik: "STATISTICS",
            kart_kendin_sec: "CHOOSE YOUR OWN",
            gunun_gorevi_baslik: "DAILY QUEST",
            stats_genel_basari: "Overall Success",
            stats_kategori: "Category",
            stats_kazanma: "Wins",
            stats_oynama: "Plays",
            stats_basari_yuzde: "Success %",
            gunluk_limit_uyari: "You've reached your adventure limit for today! Come back tomorrow for new levels.",
            komboMetni: (counter, points) => `COMBO x${counter}! +${points} Points`,
            ustBaslik: "Ozcelik Inc.",
            sonraki: "➡️ Next",
            ipucu: (cost) => `🪄 Hint (${cost} ⭐)`,
            basla: "Start Game",
            anasayfa: "🏠 Home",
            yenile: "🔄️ New",
            kazandi: "🎉 Congratulations, you won! 🎉",
            kaybetti: "You lost!",
            hata: "An error occurred: ",
            sure: "Time: ",
            sehirler: "Cities",
            meyveler: "Fruits",
            hayvanlar: "Animals",
            ulkeler: "Countries",
            yemek: "Foods",
            meslek: "Professions",
            esya: "Items",
            sports: "Sports",
            vehicles: "Vehicles",
            plants: "Plants",
            space: "Space",
            level4_yeni_ad: "Motor Show",
            level8_yeni_ad: "Botanical Garden",
            level12_yeni_ad: "Olympic Arena",
            level16_yeni_ad: "Galactic Test",
            kurallar: "Guess the letters to find the secret word. Wrong guesses and time affect your score. Use your points for hints!",
            gunluk_gorev_aciklama: (hedef, kategori) => `Find ${hedef} words from the "${dil.en[kategori] || kategori}" category.`,
            gunluk_gorev_odul: (puan) => `Quest complete! You earned +${puan} Points!`,
            yetersiz_puan: "Not enough points!",
            ipucu_kullanilamaz: "Hint Not Available",
            sayfaBaslik: "Ozcelik Inc. Hangman Adventure",
            maceraModu: "Adventure",
            klasikModu: "Classic",
            zamanaKarsi: "Time Attack",
            gunlukGorevBaslik: "⭐ Daily Quest ⭐",
            basarimlar: "Triumph",
            istatistikler: "Statistics",
            dil: "Lang:",
            basarimPopupBaslik: "🏆 Achievements",
            istatistikPopupBaslik: "📊 Statistics",
            onayPopupBaslik: "Are you sure?",
            onayPopupAciklama: "If you exit the game, your current progress will be lost!",
            onayEvet: "Yes, Exit",
            onayHayir: "Continue",
            seviyeSecimBaslik: "🕹️ Classic Game",
            seviyeSecimAciklama: "Start by choosing a difficulty level!",
            seviyeKolayBaslik: "Easy",
            seviyeKolayAciklama: "Short words, <strong>7 lives</strong>, and <strong>70 seconds</strong>.",
            seviyeOrtaBaslik: "Medium",
            seviyeOrtaAciklama: "Medium-length words, <strong>7 lives</strong>, and <strong>80 seconds</strong>.",
            seviyeZorBaslik: "Hard",
            seviyeZorAciklama: "Long words, <strong>6 lives</strong>, and <strong>90 seconds</strong>.",
            timeAttackSonuBaslik: "😔 You Lost! 😔",
            timeAttackSonuAciklama: "It was a great challenge!",
            timeAttackSonucYazi: "Total Words Found:",
            timeAttackPuanYazi: "Points Earned:",
            footer: "© 2025 Ozcelik Inc. All rights reserved."
        }
    };

    const body = document.body;
    const kelimeTuruAlani = document.getElementById("kelime-turu");
    const kalanHakGostergesi = document.getElementById("kalan-hak-gostergesi");
    const kelimeAlani = document.getElementById("kelime-alani");
    const harfAlani = document.getElementById("harf-alani");
    const oyunSonuAlani = document.getElementById("oyun-sonu");
    const oyunSonuMesaj = document.getElementById("oyun-sonu-mesaj");
    const oyunSonuPuan = document.getElementById("oyun-sonu-puan");
    const oyunSonuToplamPuan = document.getElementById("oyun-sonu-toplam-puan");
    const kaybetmePopup = document.getElementById("kaybetme-popup");
    const kaybetmeMesaj = document.getElementById("kaybetme-mesaj");
    const popupYenidenOynaButon = document.getElementById("popup-yeniden-oyna");
    const popupBackdrop = document.getElementById("popup-backdrop");
    const sureText = document.getElementById("sure-text");
    const sureDolgu = document.getElementById("sure-dolgu");
    const soruyuYenileButonu = document.getElementById("soruyu-yenile");
    const ipucuButonu = document.getElementById("ipucu-buton");
    const timeAttackBaslaButonu = document.getElementById("time-attack-basla");
    const timeAttackSkorGostergesi = document.getElementById("time-attack-skor");
    const timeAttackSonuPopup = document.getElementById("time-attack-sonu-popup");
    const timeAttackSonuc = document.getElementById("time-attack-sonuc");
    const timeAttackPuan = document.getElementById("time-attack-puan");
    const timeAttackAnasayfaButonu = document.getElementById("time-attack-anasayfa");
    const timeAttackTekrarOynaButonu = document.getElementById("time-attack-tekrar-oyna");
    const gucHarfEleButonu = document.getElementById("guc-harf-ele");
    const gucSureDondurButonu = document.getElementById("guc-sure-dondur");
    const gucEkstraHakButonu = document.getElementById("guc-ekstra-hak");
    const oyunIciPuanGostergesi = document.getElementById("oyun-ici-puan");


    let aktifOyunModu = 'klasik';
    let timeAttackSkoru = 0;
    let timeAttackDogruSayisi = 0;
    let timeAttackYanlisSayisi = 0;
    let timeAttackSeansPuani = 0;
    let sonOyunAyarlari = { mod: 'klasik', kategori: null };

    let sureDonukMu = false;
    const adamParcalari = [
        document.querySelector("#adam .kafa"),
        document.querySelector("#adam .govde"),
        document.querySelector("#adam .sol-kol"),
        document.querySelector("#adam .sag-kol"),
        document.querySelector("#adam .sol-bacak"),
        document.querySelector("#adam .sag-bacak")
    ];

    const popupAnasayfaButon1 = document.getElementById("popup-anasayfaya-don");
    const popupAnasayfaButon2 = document.getElementById("popup-anasayfaya-don-kaybetme");
    const komboBildirimi = document.getElementById("kombo-bildirimi");
    const puanGostergesi = document.getElementById("puan-gostergesi");
    const basarimButonu = document.getElementById("basarim-butonu");
    const basarimPopup = document.getElementById("basarim-popup");
    const basarimListesi = document.getElementById("basarim-listesi");
    const basarimBildirimi = document.getElementById("basarim-bildirimi");
    const istatistikButonu = document.getElementById("istatistik-butonu");
    const istatistikPopup = document.getElementById("istatistik-popup");
    const istatistikIcerik = document.getElementById("istatistik-icerik");
    const gunlukGorevKutusu = document.getElementById("gunluk-gorev-kutusu");

    gunlukGorevKutusu.addEventListener('click', () => {
        if (!gunlukGorev.odulAlindi) {
            gunlukGoreviBaslat();
        }
    });
    const gunlukGorevAciklama = document.getElementById("gunluk-gorev-aciklama");
    const gunlukGorevIlerlemeDolgu = document.getElementById("gunluk-gorev-ilerleme-dolgu");
    const gunlukGorevDurum = document.getElementById("gunluk-gorev-durum");
    const popupKapatButonlari = document.querySelectorAll(".popup-kapat-buton");
    const anasayfayaDonButonu = document.getElementById("anasayfaya-don");
    const klasikOyunBaslaButonu = document.getElementById("klasik-oyun-basla");
    const maceraModuBaslaButonu = document.getElementById("macera-modu-basla");
    const maceraEkrani = document.getElementById("macera-ekrani");
    const seviyeHaritasi = document.getElementById("seviye-haritasi");
    const haritadanAnasayfayaDonButonu = document.getElementById("haritadan-anasayfaya-don");
    const maceraBilgisiAlani = document.getElementById("macera-bilgisi");
    const sonrakiButon = document.getElementById("sonraki-buton");
    const anasayfaOnayPopup = document.getElementById("anasayfa-onay-popup");
    const onayEvetButonu = document.getElementById("onay-evet-anasayfa");
    const onayHayirButonu = document.getElementById("onay-hayir-anasayfa");
    const seviyeSecimPopup = document.getElementById("seviye-secim-popup");
    const seviyeKartlari = document.querySelectorAll(".seviye-kart");
    const kapatXButonlari = document.querySelectorAll(".popup .kapat-x-buton");
    const maceraKapatXButonu = document.getElementById("macera-kapat-x");

    let aktifDil = "tr", secilenTur, secilenKelime, gorunenKelime;
    let kalanHak, baslangicHak, tahminEdilenHarfler = [], harfButonlari = [];
    let puan = 0, zorluk = "kolay";
    let sure, sureInterval;
    let shuffledDecks = {};

    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    let maceraIlerlemesi = {};
    let aktifMaceraSeviyesi = null;
    let maceraKelimeSayaci = 0;
    let komboSayaci = 0;
    let gunlukGorevKelimeSayaci = 0;
    let ipucuKullanildi = false;
    let yenileKullanildi = false;
    let ipucsuzKazanmaSerisi = 0, ustUsteKazanma = 0;
    let gunlukGorev = {};
    const GUNLUK_SEVIYE_LIMITI = 3;
    let gunlukLimitVerisi = { tarih: '', tamamlanan: 0 };
    const ipucuBedeli = 25;
    const harfEleBedeli = 50;
    const sureDondurBedeli = 75;
    const ekstraHakBedeli = 100;
    const gunlukGorevOdulu = 50;
    const kaybetmeCezasi = 50;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function istatistikleriGetir() {
        const varsayilan = { toplamOyun: 0, kazananOyun: 0, kategoriDetaylari: {}, kazanilanDiller: {}, kazanilanZorluklar: {} };
        const kayitli = JSON.parse(localStorage.getItem("oyunIstatistikleri"));
        return { ...varsayilan, ...kayitli };
    }
    function istatistikleriKaydet(yeniIstatistikler) {
        localStorage.setItem("oyunIstatistikleri", JSON.stringify(yeniIstatistikler));
    }

    function maceraVerisiYukle() {
        const kayitli = JSON.parse(localStorage.getItem("maceraIlerlemesi"));
        if (kayitli) {
            maceraIlerlemesi = kayitli;
        } else {
            maceraIlerlemesi = { mevcutLevel: 1, tamamlananSeviyeler: {} };
        }
    }

    function maceraVerisiKaydet() {
        localStorage.setItem("maceraIlerlemesi", JSON.stringify(maceraIlerlemesi));
    }

    function maceraHaritasiniGoster() {
        body.classList.remove("game-active");
        maceraEkrani.style.opacity = 1;
        maceraEkrani.style.visibility = "visible";

        document.getElementById("baslangic-ekrani").style.opacity = 0;
        document.getElementById("baslangic-ekrani").style.visibility = "hidden";

        seviyeHaritasi.innerHTML = '';
        maceraSeviyeleri.forEach(seviye => {
            const kutu = document.createElement('div');
            kutu.className = 'seviye-kutusu';

            const isTamamlandi = maceraIlerlemesi.tamamlananSeviyeler[seviye.level];
            const isKilitli = seviye.level > maceraIlerlemesi.mevcutLevel;

            const limiteUlasildi = gunlukLimitVerisi.tamamlanan >= GUNLUK_SEVIYE_LIMITI;

            if (isKilitli) {


                if (seviye.level === maceraIlerlemesi.mevcutLevel && limiteUlasildi) {
                    kutu.classList.add('limitli');
                    kutu.onclick = () => alert(dil[aktifDil].gunluk_limit_uyari);
                } else {
                    kutu.classList.add('kilitli');
                }
            } else if (isTamamlandi) {
                kutu.classList.add('tamamlandi');
                const seviyeAdi = dil[aktifDil][seviye.ad_key] || seviye.ad_key;
                kutu.innerHTML = `<span class="seviye-emoji">${seviye.emoji}</span><span class="seviye-adi">${seviyeAdi}</span>`; kutu.onclick = () => seviyeyiBaslat(seviye.level);
            } else {
                kutu.classList.add('acik');
                const seviyeAdi = dil[aktifDil][seviye.ad_key] || seviye.ad_key;
                kutu.innerHTML = `<span class="seviye-emoji">${seviye.emoji}</span><span class="seviye-adi">${seviyeAdi}</span>`;
                kutu.onclick = () => seviyeyiBaslat(seviye.level);
            }
            seviyeHaritasi.appendChild(kutu);
        });
    }

    function seviyeyiBaslat(levelNum) {
        aktifMaceraSeviyesi = maceraSeviyeleri.find(s => s.level === levelNum);
        maceraKelimeSayaci = 0;
        oyunaBasla('macera');
    }

    function gunlukGoreviBaslat() {
        aktifOyunModu = 'gunluk-gorev';
        gunlukGorevKelimeSayaci = 0;
        gunlukGorev.hedef = 3;
        oyunaBasla('gunluk-gorev');
    }


    function playSound(type) {
        if (audioCtx.state === 'suspended') { audioCtx.resume(); }
        try {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.connect(g); g.connect(audioCtx.destination);
            let freq, duration, waveType;
            switch (type) {
                case "dogru": freq = 800; duration = 0.1; waveType = "sine"; break;
                case "yanlis": freq = 200; duration = 0.1; waveType = "square"; break;
                case "kazanma": freq = 1200; duration = 0.4; waveType = "triangle"; break;
                case "kaybetme": freq = 150; duration = 0.6; waveType = "sawtooth"; break;
                case "tiklama": freq = 1000; duration = 0.05; waveType = "triangle"; g.gain.setValueAtTime(0.2, audioCtx.currentTime); break;
                case "uyari": freq = 440; duration = 0.1; waveType = "sawtooth"; break;
                default: return;
            }
            o.type = waveType;
            o.frequency.setValueAtTime(freq, audioCtx.currentTime);
            o.start(); o.stop(audioCtx.currentTime + duration);
        } catch (e) { console.error("Ses çalınamadı:", e); }
    }

    function puanGuncelle(yeniPuan) {
        puan = yeniPuan;
        const puanMetni = `⭐ ${puan}`;
        if (puanGostergesi) {
            puanGostergesi.textContent = puanMetni;
        }
        if (oyunIciPuanGostergesi) {
            oyunIciPuanGostergesi.textContent = puanMetni;
        }
        localStorage.setItem('toplamPuan', puan.toString());
    }

    function dilGuncelle() {
        const mevcutDil = dil[aktifDil];
        document.title = mevcutDil.sayfaBaslik;
        const oyunBaslikElementi = document.getElementById('oyun-baslik');
        if (oyunBaslikElementi) {
            oyunBaslikElementi.innerHTML = '';
            const kelimeler = mevcutDil.oyunBaslik.split(' ');
            kelimeler.forEach((kelime, index) => {
                kelime.split('').forEach(harf => {
                    const span = document.createElement('span');
                    span.textContent = harf;
                    oyunBaslikElementi.appendChild(span);
                });
                if (index < kelimeler.length - 1) {
                    const boslukSpan = document.createElement('span');
                    boslukSpan.innerHTML = '&nbsp;';
                    oyunBaslikElementi.appendChild(boslukSpan);
                }
            });
        }


        const gunlukGorevBaslik = document.getElementById('gunluk-gorev-baslik');
        if (gunlukGorevBaslik) gunlukGorevBaslik.textContent = mevcutDil.gunlukGorevBaslik;

        const maceraText = document.getElementById('macera-modu-basla-text');
        if (maceraText) maceraText.textContent = mevcutDil.kart_macera;

        const klasikText = document.getElementById('klasik-oyun-basla-text');
        if (klasikText) klasikText.textContent = mevcutDil.kart_klasik;

        const timeAttackText = document.getElementById('time-attack-basla-text');
        if (timeAttackText) timeAttackText.textContent = mevcutDil.kart_zamana_karsi;

        const basarimlarText = document.getElementById('basarimlar-text');
        if (basarimlarText) basarimlarText.textContent = mevcutDil.kart_basarim;

        const istatistiklerText = document.getElementById('istatistikler-text');
        if (istatistiklerText) istatistiklerText.textContent = mevcutDil.kart_istatistik;

        const dilSecimiYazi = document.getElementById('dil-secimi-yazi');
        if (dilSecimiYazi) dilSecimiYazi.textContent = mevcutDil.dil;

        const kurallarBaslik = document.getElementById('oyun-kurallari-baslik');
        if (kurallarBaslik) kurallarBaslik.textContent = mevcutDil.oyunKurallariBaslik;

        const kurallar = document.querySelector("#oyun-kurallari p");
        if (kurallar) kurallar.textContent = mevcutDil.kurallar;

        const basarimPopupBaslik = document.getElementById('basarim-popup-baslik');
        if (basarimPopupBaslik) basarimPopupBaslik.textContent = mevcutDil.basarimPopupBaslik;

        const istatistikPopupBaslik = document.getElementById('istatistik-popup-baslik');
        if (istatistikPopupBaslik) istatistikPopupBaslik.textContent = mevcutDil.istatistikPopupBaslik;

        const onayPopupBaslik = document.getElementById('onay-popup-baslik');
        if (onayPopupBaslik) onayPopupBaslik.textContent = mevcutDil.onayPopupBaslik;

        const onayPopupAciklama = document.getElementById('onay-popup-aciklama');
        if (onayPopupAciklama) onayPopupAciklama.textContent = mevcutDil.onayPopupAciklama;

        const onayEvetMetin = document.getElementById('onay-evet-metin');
        if (onayEvetMetin) onayEvetMetin.textContent = mevcutDil.onayEvet;

        const onayHayirMetin = document.getElementById('onay-hayir-metin');
        if (onayHayirMetin) onayHayirMetin.textContent = mevcutDil.onayHayir;

        const seviyeSecimBaslik = document.getElementById('seviye-secim-baslik');
        if (seviyeSecimBaslik) seviyeSecimBaslik.textContent = mevcutDil.seviyeSecimBaslik;

        const seviyeSecimAciklama = document.getElementById('seviye-secim-aciklama');
        if (seviyeSecimAciklama) seviyeSecimAciklama.textContent = mevcutDil.seviyeSecimAciklama;

        const kategoriSecText = document.getElementById('kategori-sec-text');
        if (kategoriSecText) kategoriSecText.textContent = mevcutDil.kart_kendin_sec;

        const kategoriSecimBaslik = document.getElementById('kategori-secim-baslik');
        if (kategoriSecimBaslik) kategoriSecimBaslik.textContent = "Kategori Seç";

        const kategoriSecimAciklama = document.getElementById('kategori-secim-aciklama');
        if (kategoriSecimAciklama) kategoriSecimAciklama.textContent = "Oynamak istediğin bir kategori seç!";

        document.getElementById('seviye-kolay-baslik').textContent = mevcutDil.seviyeKolayBaslik;
        document.getElementById('seviye-kolay-aciklama').innerHTML = mevcutDil.seviyeKolayAciklama;
        document.getElementById('seviye-orta-baslik').textContent = mevcutDil.seviyeOrtaBaslik;
        document.getElementById('seviye-orta-aciklama').innerHTML = mevcutDil.seviyeOrtaAciklama;
        document.getElementById('seviye-zor-baslik').textContent = mevcutDil.seviyeZorBaslik;
        document.getElementById('seviye-zor-aciklama').innerHTML = mevcutDil.seviyeZorAciklama;

        const taSonuBaslik = document.getElementById('time-attack-sonu-baslik');
        if (taSonuBaslik) taSonuBaslik.textContent = mevcutDil.timeAttackSonuBaslik;

        const taSonuAciklama = document.getElementById('time-attack-sonu-aciklama');
        if (taSonuAciklama) taSonuAciklama.textContent = mevcutDil.timeAttackSonuAciklama;

        const taSonucYazi = document.getElementById('time-attack-sonuc-yazi');
        if (taSonucYazi) taSonucYazi.textContent = mevcutDil.timeAttackSonucYazi;

        const taPuanYazi = document.getElementById('time-attack-puan-yazi');
        if (taPuanYazi) taPuanYazi.textContent = mevcutDil.timeAttackPuanYazi;

        const footerText = document.getElementById('footer-text');
        if (footerText) footerText.textContent = mevcutDil.footer;

        const kurallarIci = document.querySelector("#oyun-kurallari p");
        if (kurallarIci) kurallarIci.textContent = mevcutDil.kurallar;
        if (secilenTur && kelimeTuruAlani) { kelimeTuruAlani.textContent = mevcutDil.hasOwnProperty(secilenTur) ? mevcutDil[`${secilenTur}`] : secilenTur.toUpperCase(); }
        if (sonrakiButon) sonrakiButon.textContent = mevcutDil.sonraki;
        if (popupYenidenOynaButon) popupYenidenOynaButon.textContent = mevcutDil.yenile;

        const anasayfaButonMetin = document.querySelector('#anasayfaya-don .buton-metin');
        if (anasayfaButonMetin) anasayfaButonMetin.textContent = mevcutDil.anasayfa;

        const yenileButonMetin = document.querySelector('#soruyu-yenile .buton-metin');
        if (yenileButonMetin) yenileButonMetin.textContent = mevcutDil.yenile;

        const ipucuButonMetin = document.querySelector('#ipucu-buton .buton-metin');
        if (ipucuButonMetin) { ipucuButonMetin.textContent = mevcutDil.ipucu(ipucuBedeli); }

        const haritaAnaMenuBtn = document.getElementById('haritadan-anasayfaya-don');
        if (haritaAnaMenuBtn) haritaAnaMenuBtn.textContent = mevcutDil.anaMenuButon;

        const popupAnasayfaButon1 = document.getElementById('popup-anasayfa-buton-1');
        if (popupAnasayfaButon1) popupAnasayfaButon1.textContent = mevcutDil.anasayfa;

        const popupAnasayfaButon2 = document.getElementById('popup-anasayfa-buton-2');
        if (popupAnasayfaButon2) popupAnasayfaButon2.textContent = mevcutDil.anasayfa;

        const maceraBaslik = document.getElementById('macera-haritasi-baslik');
        if (maceraBaslik) maceraBaslik.textContent = mevcutDil.maceraHaritasiBaslik;

        const gucHarfEle = document.getElementById('guc-harf-ele');
        if (gucHarfEle) gucHarfEle.textContent = mevcutDil.harfEle;

        const gucSureDondur = document.getElementById('guc-sure-dondur');
        if (gucSureDondur) gucSureDondur.textContent = mevcutDil.dondur;

        const gucEkstraHak = document.getElementById('guc-ekstra-hak');
        if (gucEkstraHak) gucEkstraHak.textContent = mevcutDil.ekstraHak;

        const popupAnasayfaKaybetme = document.getElementById('popup-anasayfaya-don-kaybetme');
        if (popupAnasayfaKaybetme) popupAnasayfaKaybetme.textContent = mevcutDil.anasayfa;

        gunlukGorevUIGuncelle();
    }

    function adamParcalariSifirla() {
        adamParcalari.forEach(p => p.classList.remove("goster"));
    }

    function kelimeSec(kategori = null, filtre = null) {
        if (kategori) {
            secilenTur = kategori;
        } else {
            let tumTurler = Object.keys(kelimeListesi[aktifDil]);
            secilenTur = tumTurler[Math.floor(Math.random() * tumTurler.length)];
        }

        if (!shuffledDecks[secilenTur] || shuffledDecks[secilenTur].length === 0) {
            const tumKelimeler = [...kelimeListesi[aktifDil][secilenTur]];
            shuffledDecks[secilenTur] = shuffleArray(tumKelimeler);
        }

        let bulunanKelime = null;
        let denemeIndex = -1;

        for (let i = 0; i < shuffledDecks[secilenTur].length; i++) {
            const adayKelime = shuffledDecks[secilenTur][i];
            let kelimeUygun = true;
            const kelimeUzunlugu = adayKelime.replace(/\s/g, '').length;


            if (filtre && !filtre(adayKelime)) {
                kelimeUygun = false;
            }


            if (kelimeUygun && aktifOyunModu === 'macera' && aktifMaceraSeviyesi) {
                const toplamKelime = aktifMaceraSeviyesi.hedefKelime;
                const mevcutKelimeSira = maceraKelimeSayaci;
                let minUzunluk = 0, maksUzunluk = Infinity;


                switch (toplamKelime) {
                    case 2:
                        if (mevcutKelimeSira === 0) { minUzunluk = 3; maksUzunluk = 6; }
                        else { minUzunluk = 7; }
                        break;
                    case 3:
                        if (mevcutKelimeSira === 0) { minUzunluk = 3; maksUzunluk = 4; }
                        else if (mevcutKelimeSira === 1) { minUzunluk = 5; maksUzunluk = 9; }
                        else { minUzunluk = 10; }
                        break;
                    case 4:
                        if (mevcutKelimeSira === 0) { minUzunluk = 3; maksUzunluk = 4; }
                        else if (mevcutKelimeSira === 1) { minUzunluk = 5; maksUzunluk = 6; }
                        else if (mevcutKelimeSira === 2) { minUzunluk = 7; maksUzunluk = 9; }
                        else { minUzunluk = 10; }
                        break;
                    case 5:
                        if (mevcutKelimeSira === 0) { minUzunluk = 3; maksUzunluk = 4; }
                        else if (mevcutKelimeSira === 1) { minUzunluk = 5; maksUzunluk = 6; }
                        else if (mevcutKelimeSira === 2) { minUzunluk = 7; maksUzunluk = 8; }
                        else if (mevcutKelimeSira === 3) { minUzunluk = 9; maksUzunluk = 10; }
                        else { minUzunluk = 11; }
                        break;
                    default:
                        minUzunluk = 3 + mevcutKelimeSira * 2;
                        maksUzunluk = minUzunluk + 3;
                        break;
                }

                if (kelimeUzunlugu < minUzunluk || kelimeUzunlugu > maksUzunluk) {
                    kelimeUygun = false;
                }

            }

            else if (kelimeUygun && (aktifOyunModu === 'klasik' || aktifOyunModu === 'gunluk-gorev')) {
                if (zorluk === "kolay" && kelimeUzunlugu > 5) kelimeUygun = false;
                if (zorluk === "orta" && (kelimeUzunlugu <= 5 || kelimeUzunlugu > 9)) kelimeUygun = false;
                if (zorluk === "zor" && kelimeUzunlugu < 10) kelimeUygun = false;
            }


            if (kelimeUygun) {
                bulunanKelime = adayKelime;
                denemeIndex = i;
                break;
            }
        }

        if (!bulunanKelime) {
            console.warn(`'${secilenTur}' kategorisinde mevcut kurallara uygun kelime kalmadı. Deste sıfırlanıp tekrar deneniyor.`);
            delete shuffledDecks[secilenTur];
            return kelimeSec(kategori, filtre);
        }

        secilenKelime = bulunanKelime;
        shuffledDecks[secilenTur].splice(denemeIndex, 1);

        if (aktifOyunModu === 'klasik' || aktifOyunModu === 'macera') {
            if (zorluk === "zor") { baslangicHak = kalanHak = 6; }
            else { baslangicHak = kalanHak = 7; }
        } else if (aktifOyunModu === 'time-attack') {
            baslangicHak = kalanHak = 7;
        }
    }

    function kelimeyiGoster() {
        const kelimeHTML = gorunenKelime.map(harf => {
            if (harf === ' ') {
                return '<span class="kelime-bosluk"></span>';
            } else {
                return `<span class="harf-kutusu">${harf === '_' ? '' : harf}</span>`;
            }
        }).join('');

        kelimeAlani.innerHTML = kelimeHTML;
        kelimeAlani.classList.remove("uzun-kelime", "cok-uzun-kelime");

        if (secilenKelime.length > 9) {
            kelimeAlani.classList.add("uzun-kelime");
        } else {
            kelimeAlani.classList.remove("uzun-kelime");
        }
    }

    function harfButonlariOlustur() {
        const alfabe = aktifDil === "tr" ? "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        harfAlani.innerHTML = "";
        harfButonlari = alfabe.split('').map(harf => {
            const buton = document.createElement("button");
            buton.textContent = harf;
            buton.onclick = () => harfTahminEt(harf, buton);
            harfAlani.appendChild(buton);
            return buton;
        });
    }

    function harfTahminEt(harf, buton, isHint = false) {
        if (tahminEdilenHarfler.includes(harf) || kalanHak <= 0 || sure <= 0) return;
        buton.disabled = true;
        tahminEdilenHarfler.push(harf);
        let dogruTahmin = secilenKelime.includes(harf);
        if (dogruTahmin) {
            if (!isHint) {
                komboSayaci++;
                if (komboSayaci > 1) {
                    let bonusPuan = komboSayaci * 5;
                    puanGuncelle(puan + bonusPuan);

                    komboBildirimi.textContent = dil[aktifDil].komboMetni(komboSayaci, bonusPuan);
                    komboBildirimi.classList.add('goster');
                    setTimeout(() => {
                        komboBildirimi.classList.remove('goster');
                    }, 2000);
                }
            } else {
                komboSayaci = 0;
            }
            let oncekiGorunum = [...gorunenKelime];
            secilenKelime.split('').forEach((h, i) => { if (h === harf) gorunenKelime[i] = h; });
            kelimeyiGoster();
            secilenKelime.split('').forEach((h, i) => {
                if (h === harf && oncekiGorunum[i] === '_') {
                    if (kelimeAlani.children[i]) kelimeAlani.children[i].classList.add('yeni-harf');
                }
            });
            buton.classList.add("dogru-harf");
            playSound("dogru");
            if (!gorunenKelime.includes('_')) oyunBitti(true);
        } else {
            komboSayaci = 0;
            kalanHak--;
            if (kalanHak > 0) {
                kalanHakGostergesi.innerHTML = `<span class="kalp-ikon">💖</span> ${kalanHak}`;
            } else {
                kalanHakGostergesi.innerHTML = `<span class="kalp-ikon">💔</span> 0`;
            }

            kalanHakGostergesi.classList.add('kalp-sok');
            setTimeout(() => {
                kalanHakGostergesi.classList.remove('kalp-sok');
            }, 1500);
            buton.classList.add("yanlis-harf");
            playSound("yanlis");
            adamParcasiGoster();
            body.classList.add('ekran-titremesi');
            setTimeout(() => body.classList.remove('ekran-titremesi'), 300);

            if (kalanHak <= 0) {
                oyunBitti(false);
            }
        }
    }

    function adamParcasiGoster() {
        const adamContainer = document.getElementById('adam');
        const gosterilecekParcaSayisi = baslangicHak - kalanHak;

        let aktifIfade = 'normal';
        if (kalanHak <= 0) {
            aktifIfade = 'patlama';
        } else if (kalanHak === 1) {
            aktifIfade = 'son-uyari';
        } else if (gosterilecekParcaSayisi >= 3) {
            aktifIfade = 'sinirli';
        } else if (gosterilecekParcaSayisi >= 1) {
            aktifIfade = 'endiseli';
        }
        adamContainer.dataset.ifade = aktifIfade;

        for (let i = 0; i < gosterilecekParcaSayisi; i++) {
            if (adamParcalari[i]) {
                adamParcalari[i].classList.add("goster");
            }
        }
    }

    function guncelleSure() {
        if (sureDonukMu) return;

        const baslangicSuresi = aktifOyunModu === 'time-attack' ? 180 : (zorluk === 'kolay' ? 70 : zorluk === 'orta' ? 80 : 90);

        if (sure > 0) sure--;

        sureText.textContent = `⏰ ${sure}`;
        const sureYuzdesi = (sure / baslangicSuresi) * 100;
        sureDolgu.style.width = `${sureYuzdesi}%`;

        if (sure <= 0) {
            oyunBitti(false);
        }
    }


    function arayuzuAc() {
        document.getElementById('harf-alani').classList.remove('arayuz-kilitli');
        document.getElementById('buton-konteyner').classList.remove('arayuz-kilitli');
        document.getElementById('guc-lendirme-konteyner').classList.remove('arayuz-kilitli');
    }

    function oyunaBasla(mod, customCategory = null) {

        sonOyunAyarlari = { mod: mod, kategori: customCategory };
        aktifOyunModu = mod;
        arayuzuAc();
        const zaferKutusu = document.getElementById('zafer-kelimesi-kutusu');
        if (zaferKutusu) zaferKutusu.remove();
        const konfetiAlani = document.getElementById('konfeti-alani');
        if (konfetiAlani) konfetiAlani.style.display = 'none';

        ipucuKullanildi = false;
        if (!yenileKullanildi) {
            yenileKullanildi = false;
            soruyuYenileButonu.disabled = false;
        }
        komboSayaci = 0;

        document.querySelectorAll('.popup').forEach(p => p.classList.remove('popup-goster'));
        popupBackdrop.style.display = 'none';

        body.classList.add("game-active");
        body.classList.add("oyun-aktif");
        if (mod === 'time-attack') {
            body.classList.add('mod-time-attack');
        } else {
            body.classList.remove('mod-time-attack');
        }
        maceraEkrani.style.opacity = 0;
        maceraEkrani.style.visibility = "hidden";
        document.getElementById("baslangic-ekrani").style.opacity = 0;
        document.getElementById("baslangic-ekrani").style.visibility = "hidden";

        [gucHarfEleButonu, gucSureDondurButonu, gucEkstraHakButonu, ipucuButonu].forEach(btn => btn.disabled = false);

        if (mod === 'macera' && aktifMaceraSeviyesi) {
            kelimeSec(aktifMaceraSeviyesi.kategori, aktifMaceraSeviyesi.kelimeFiltresi);
            maceraBilgisiAlani.textContent = `${dil[aktifDil].maceraSeviye} ${aktifMaceraSeviyesi.level}: ${maceraKelimeSayaci + 1} / ${aktifMaceraSeviyesi.hedefKelime}`;
            maceraBilgisiAlani.style.display = 'block';
            timeAttackSkorGostergesi.style.display = 'none';
            sure = zorluk === 'kolay' ? 70 : zorluk === 'orta' ? 80 : 90;
        } else if (mod === 'time-attack') {
            if (sure <= 0) {
                timeAttackSkoru = 0;
                sure = 180;
                timeAttackDogruSayisi = 0;
                timeAttackYanlisSayisi = 0;
                timeAttackSeansPuani = 0;
            }
            timeAttackSkorGostergesi.textContent = `💥 ${timeAttackSkoru}`;
            maceraBilgisiAlani.style.display = 'none';
            timeAttackSkorGostergesi.style.display = 'block';
            if (customCategory) {
                kelimeSec(customCategory);
            } else if (mod === 'macera' && aktifMaceraSeviyesi) {
                kelimeSec(aktifMaceraSeviyesi.kategori, aktifMaceraSeviyesi.kelimeFiltresi);
            } else if (mod === 'gunluk-gorev') {
                kelimeSec(gunlukGorev.kategori);
            } else {
                kelimeSec();
            }
        } else if (mod === 'gunluk-gorev') {
            kelimeSec(gunlukGorev.kategori);
            maceraBilgisiAlani.textContent = `${dil[aktifDil].gunun_gorevi_baslik}: ${gunlukGorevKelimeSayaci + 1} / ${gunlukGorev.hedef}`;
            maceraBilgisiAlani.style.display = 'block';
            timeAttackSkorGostergesi.style.display = 'none';
            baslangicHak = kalanHak = 7;
            sure = zorluk === 'kolay' ? 70 : zorluk === 'orta' ? 80 : 90;
        } else {
            aktifMaceraSeviyesi = null;
            maceraBilgisiAlani.style.display = 'none';
            timeAttackSkorGostergesi.style.display = 'none';
            if (customCategory) {
                kelimeSec(customCategory);
            } else if (mod === 'macera' && aktifMaceraSeviyesi) {
                kelimeSec(aktifMaceraSeviyesi.kategori, aktifMaceraSeviyesi.kelimeFiltresi);
            } else if (mod === 'gunluk-gorev') {
                kelimeSec(gunlukGorev.kategori);
            } else {
                kelimeSec();
            }
            sure = zorluk === 'kolay' ? 70 : zorluk === 'orta' ? 80 : 90;
        }

        gorunenKelime = secilenKelime.split('').map(c => c === ' ' ? ' ' : '_');
        tahminEdilenHarfler = [];
        kalanHakGostergesi.innerHTML = `<span class="kalp-ikon">💖</span> ${kalanHak}`;
        kalanHakGostergesi.style.display = 'block';
        kalanHakGostergesi.classList.remove('kalp-pulse');

        dilGuncelle();
        const tumKategoriler = ["sehirler", "meyveler", "hayvanlar", "ulkeler", "yemek", "meslek", "esya"];
        kelimeTuruAlani.classList.remove(...tumKategoriler.map(k => `kategori-${k}`));
        if (secilenTur) {
            kelimeTuruAlani.classList.add(`kategori-${secilenTur}`);
        }
        kelimeTuruAlani.textContent = dil[aktifDil][secilenTur] || secilenTur.toUpperCase();

        const sureGostergesi = document.getElementById('sure');

        if (!customCategory) {
            sureGostergesi.style.display = 'block';
            clearInterval(sureInterval);
            sureDonukMu = false;
            sureInterval = setInterval(guncelleSure, 1000);

            sureDolgu.style.transition = 'none';
            sureDolgu.style.width = '100%';
            guncelleSure();
        } else {
            sureGostergesi.style.display = 'none';
            clearInterval(sureInterval);
            sure = 999;
        }

        kelimeyiGoster();
        harfButonlariOlustur();
        adamParcalariSifirla();
        document.querySelectorAll('#adam-asmaca-alani .kus').forEach(kus => kus.classList.remove('kaciyor-son'));
        document.querySelectorAll('#adam-asmaca-alani .yildiz').forEach(yildiz => yildiz.classList.remove('sonuyor'));
    }

    function oyunBitti(kazandi) {
        clearInterval(sureInterval);
        document.getElementById('harf-alani').classList.add('arayuz-kilitli');
        document.getElementById('buton-konteyner').classList.add('arayuz-kilitli');
        document.getElementById('guc-lendirme-konteyner').classList.add('arayuz-kilitli');

        if (aktifOyunModu === 'gunluk-gorev' && kazandi) {
            gunlukGorevKelimeSayaci++;
            document.getElementById('kazanan-kelime-detay').textContent = secilenKelime;
            const sonrakiButonu = document.getElementById('sonraki-buton');

            if (gunlukGorevKelimeSayaci >= gunlukGorev.hedef) {
                gunlukGorev.odulAlindi = true;
                puanGuncelle(puan + gunlukGorevOdulu);
                localStorage.setItem('gunlukGorev', JSON.stringify(gunlukGorev));
                document.getElementById('oyun-sonu-baslik').textContent = "⭐ GÖREV TAMAMLANDI! ⭐";
                document.getElementById('kazanilan-puan-detay').textContent = `+${gunlukGorevOdulu}`;
                document.getElementById('toplam-puan-detay').textContent = puan;
                sonrakiButonu.textContent = "🏠 Ana Sayfa";
                sonrakiButonu.onclick = () => { playSound('tiklama'); anasayfayaDon(); };
            } else {
                document.getElementById('oyun-sonu-baslik').textContent = "DOĞRU!";
                document.getElementById('kazanilan-puan-detay').textContent = `(${gunlukGorevKelimeSayaci}/${gunlukGorev.hedef})`;
                document.getElementById('toplam-puan-detay').textContent = puan;
                sonrakiButonu.textContent = "➡️ Sonraki Kelime";
                sonrakiButonu.onclick = () => { playSound('tiklama'); oyunaBasla('gunluk-gorev'); };
            }
            document.getElementById('popup-anasayfaya-don').onclick = anasayfayaDon;
            popupBackdrop.style.display = "block";
            oyunSonuAlani.classList.add("popup-goster");
            return;
        }


        if (aktifOyunModu === 'time-attack') {
            clearInterval(sureInterval);
            if (kazandi) {
                timeAttackSkoru++;
                timeAttackDogruSayisi++;
                const kazanilanPuan = 25;
                timeAttackSeansPuani += kazanilanPuan;
                puanGuncelle(puan + kazanilanPuan);

                timeAttackSkorGostergesi.textContent = `💥 ${timeAttackSkoru}`;
                playSound("dogru");
                showToast(`👍 "${secilenKelime.toUpperCase()}" | +${kazanilanPuan} Puan`, 'success', 1500);

                setTimeout(() => oyunaBasla('time-attack', sonOyunAyarlari.kategori), 500);

            } else {

                if (sure <= 0) {
                    playSound("kaybetme");

                    document.getElementById('ta-dogru-detay').textContent = `Doğru: ${timeAttackDogruSayisi} (+${timeAttackDogruSayisi * 25} Puan)`;
                    document.getElementById('ta-yanlis-detay').textContent = `Yanlış: ${timeAttackYanlisSayisi} (-${timeAttackYanlisSayisi * 15} Puan)`;
                    document.getElementById('ta-toplam-puan').textContent = `Toplam Puan: ${timeAttackSeansPuani}`;

                    popupBackdrop.style.display = "block";
                    timeAttackSonuPopup.classList.add("popup-goster");

                } else {
                    timeAttackYanlisSayisi++;
                    const kaybedilenPuan = 15;
                    timeAttackSeansPuani -= kaybedilenPuan;
                    puanGuncelle(Math.max(0, puan - kaybedilenPuan));
                    playSound("yanlis");
                    showToast(`👎 Doğrusu: "${secilenKelime.toUpperCase()}" | -${kaybedilenPuan} Puan`, 'error', 2000);

                    setTimeout(() => oyunaBasla('time-attack', sonOyunAyarlari.kategori), 800);
                }
            }
            return;
        }

        if (kazandi) {
            let istatistikler = istatistikleriGetir();
            istatistikler.toplamOyun++;
            istatistikler.kazananOyun++;

            if (secilenTur) {
                if (!istatistikler.kategoriDetaylari[secilenTur]) {
                    istatistikler.kategoriDetaylari[secilenTur] = { kazanma: 0, oynama: 0 };
                }
                istatistikler.kategoriDetaylari[secilenTur].kazanma++;
                istatistikler.kategoriDetaylari[secilenTur].oynama++;
            }

            if (!ipucuKullanildi) {
                ipucsuzKazanmaSerisi++;
                ustUsteKazanma++;
            } else {
                ipucsuzKazanmaSerisi = 0;
                ustUsteKazanma = 0;
            }
            istatistikler.kazanilanDiller[aktifDil] = true;
            istatistikler.kazanilanZorluklar[zorluk] = true;
            istatistikleriKaydet(istatistikler);
            basarimKontrolEt();
            document.getElementById('adam').dataset.ifade = 'kazandi';
            const konfeti = new Konfeti();
            konfeti.start();
            playSound("kazanma");

            let kazanilanPuan = (kalanHak * 3) + Math.floor(sure / 2);
            puanGuncelle(puan + kazanilanPuan);

            setTimeout(() => {
                konfeti.stop();
                const sonrakiButonu = document.getElementById('sonraki-buton');
                const anasayfaButonu = document.getElementById('popup-anasayfaya-don');

                document.getElementById('kazanan-kelime-detay').innerHTML = secilenKelime;
                document.getElementById('toplam-puan-detay').innerHTML = puan;
                anasayfaButonu.onclick = anasayfayaDon;

                if (aktifMaceraSeviyesi) {
                    maceraKelimeSayaci++;
                    if (maceraKelimeSayaci >= aktifMaceraSeviyesi.hedefKelime) {
                        let odul = aktifMaceraSeviyesi.odul;
                        puanGuncelle(puan + odul);
                        document.getElementById('oyun-sonu-baslik').innerHTML = `SEVİYE TAMAMLANDI!`;
                        document.getElementById('kazanilan-puan-detay').innerHTML = `+${odul}`;
                        document.getElementById('toplam-puan-detay').innerHTML = puan;
                        maceraIlerlemesi.tamamlananSeviyeler[aktifMaceraSeviyesi.level] = true;
                        if (maceraIlerlemesi.mevcutLevel === aktifMaceraSeviyesi.level) {
                            maceraIlerlemesi.mevcutLevel++;
                        }
                        maceraVerisiKaydet();
                        sonrakiButon.innerHTML = "🗺️ Haritaya Dön";
                        sonrakiButon.onclick = () => {
                            oyunSonuAlani.classList.remove('popup-goster');
                            popupBackdrop.style.display = 'none';
                            maceraHaritasiniGoster();
                        };
                    } else {
                        document.getElementById('oyun-sonu-baslik').innerHTML = `DOĞRU!`;
                        document.getElementById('kazanilan-puan-detay').innerHTML = `+${kazanilanPuan}`;
                        sonrakiButonu.innerHTML = "➡️ Sonraki Kelime";
                        sonrakiButonu.onclick = () => {
                            if (typeof android !== 'undefined' && android.showInterstitialAd) {
                                android.showInterstitialAd();
                            }
                            playSound('tiklama');
                            yenileKullanildi = false;
                            oyunaBasla('macera');
                        };
                    }
                } else {
                    document.getElementById('oyun-sonu-baslik').innerHTML = `TEBRİKLER!`;
                    document.getElementById('kazanilan-puan-detay').innerHTML = `+${kazanilanPuan}`;
                    sonrakiButonu.innerHTML = "➡️ Sonraki";
                    sonrakiButonu.onclick = () => {
                        if (typeof android !== 'undefined' && android.showInterstitialAd) {
                            android.showInterstitialAd();
                        }
                        playSound('tiklama');
                        yenileKullanildi = false;
                        oyunaBasla(sonOyunAyarlari.mod, sonOyunAyarlari.kategori);
                    };
                }
                popupBackdrop.style.display = "block";
                oyunSonuAlani.classList.add("popup-goster");
            }, 1500);

        } else {

            let istatistikler = istatistikleriGetir();
            istatistikler.toplamOyun++;
            if (secilenTur) {
                if (!istatistikler.kategoriDetaylari[secilenTur]) {
                    istatistikler.kategoriDetaylari[secilenTur] = { kazanma: 0, oynama: 0 };
                }
                istatistikler.kategoriDetaylari[secilenTur].oynama++;
            }
            ustUsteKazanma = 0;
            ipucsuzKazanmaSerisi = 0;
            istatistikleriKaydet(istatistikler);
            document.getElementById('adam').dataset.ifade = 'patlama';
            playSound("kaybetme");
            document.querySelectorAll('#adam-asmaca-alani .kus').forEach(kus => kus.classList.add('kaciyor-son'));
            document.querySelectorAll('#adam-asmaca-alani .yildiz').forEach(yildiz => yildiz.classList.add('sonuyor'));
            const yeniPuan = Math.max(0, puan - kaybetmeCezasi);

            setTimeout(() => {
                puanGuncelle(yeniPuan);

                popupBackdrop.style.display = "block";
                kaybetmePopup.classList.add("popup-goster");

                const kelimeElementi = document.getElementById('kaybedilen-kelime-detay');
                const cezaElementi = document.getElementById('kaybedilen-puan-detay');
                const puanElementi = document.getElementById('kalan-puan-detay');

                if (kelimeElementi && cezaElementi && puanElementi) {
                    kelimeElementi.innerHTML = secilenKelime || "N/A";
                    cezaElementi.innerHTML = `-${kaybetmeCezasi}`;
                    puanElementi.innerHTML = puan;
                }

                const yenidenOynaButonu = document.getElementById('popup-yeniden-oyna');
                const anasayfaButonu = document.getElementById('popup-anasayfaya-don-kaybetme');
                anasayfaButonu.onclick = anasayfayaDon;

                if (aktifMaceraSeviyesi) {
                    yenidenOynaButonu.textContent = "🔄️ Seviyeyi Tekrar Oyna";
                    yenidenOynaButonu.onclick = () => { playSound('tiklama'); seviyeyiBaslat(aktifMaceraSeviyesi.level); };
                } else if (aktifOyunModu === 'time-attack') {
                    yenidenOynaButonu.textContent = "🔄️ Tekrar Oyna";
                    yenidenOynaButonu.onclick = () => { playSound('tiklama'); yenileKullanildi = false; sure = 0; oyunaBasla('time-attack'); };
                } else {
                    yenidenOynaButonu.textContent = "🔄️ Tekrar Oyna";
                    yenidenOynaButonu.onclick = () => {
                        playSound('tiklama');
                        oyunaBasla(sonOyunAyarlari.mod, sonOyunAyarlari.kategori);
                    };
                }
            }, 2500);
        }
    }

    function anasayfayaDon() {
        arayuzuAc();
        const zaferKutusu = document.getElementById('zafer-kelimesi-kutusu');
        if (zaferKutusu) zaferKutusu.remove();
        const konfetiAlani = document.getElementById('konfeti-alani');
        if (konfetiAlani) konfetiAlani.style.display = 'none';

        aktifMaceraSeviyesi = null;
        maceraEkrani.style.opacity = 0;
        maceraEkrani.style.visibility = "hidden";
        document.getElementById("baslangic-ekrani").style.opacity = 1;
        document.getElementById("baslangic-ekrani").style.visibility = "visible";

        if (kalanHakGostergesi) kalanHakGostergesi.style.display = 'none';
        body.classList.remove("game-active");
        body.classList.remove("oyun-aktif");
        body.classList.remove('mod-time-attack');
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('popup-goster'));
        popupBackdrop.style.display = 'none';
        clearInterval(sureInterval);
        yenileKullanildi = false;

        kullanilmisKelimeler = {};
        gunlukGorevUIGuncelle();
        dilGuncelle();
    }

    function handleKeydown(e) {
        if (popupBackdrop.style.display === "block" || e.repeat) return;
        const buton = harfButonlari.find(b => b.textContent === e.key.toLocaleUpperCase(aktifDil) && !b.disabled);
        if (buton) harfTahminEt(buton.textContent, buton);
    }

    function ipucuAl() {
        playSound('tiklama');

        if (puan < ipucuBedeli) {
            playSound("uyari");
            ipucuButonu.classList.add('ekran-titremesi');

            const ikonSpan = ipucuButonu.querySelector('.buton-ikon');
            const metinSpan = ipucuButonu.querySelector('.buton-metin');

            if (ikonSpan && metinSpan) {

                const orijinalMetin = metinSpan.textContent;
                ikonSpan.style.display = 'none';


                metinSpan.textContent = dil[aktifDil].yetersiz_puan;
                metinSpan.style.fontSize = '0.9rem';
                metinSpan.style.fontWeight = '700';


                setTimeout(() => {
                    ipucuButonu.classList.remove('ekran-titremesi');
                    ikonSpan.style.display = '';
                    metinSpan.textContent = orijinalMetin;
                    metinSpan.style.fontSize = '';
                    metinSpan.style.fontWeight = '';
                }, 1500);
            }
            return;
        }

        if (kalanHak <= 1 || !gorunenKelime.includes('_')) {
            playSound("uyari");
            ipucuButonu.classList.add('ekran-titremesi');
            const ikonSpan = ipucuButonu.querySelector('.buton-ikon');
            const metinSpan = ipucuButonu.querySelector('.buton-metin');

            if (ikonSpan && metinSpan) {
                const orijinalMetin = metinSpan.textContent;
                ikonSpan.style.display = 'none';

                metinSpan.textContent = dil[aktifDil].yetersiz_puan;
                metinSpan.style.fontSize = '0.9rem';
                metinSpan.style.fontWeight = '700';

                setTimeout(() => {
                    ipucuButonu.classList.remove('ekran-titremesi');
                    ikonSpan.style.display = '';
                    metinSpan.textContent = orijinalMetin;
                    metinSpan.style.fontSize = '';
                    metinSpan.style.fontWeight = '';
                }, 1500);
            }
            return;
        }

        const verilebilecekHarfler = secilenKelime
            .split('')
            .filter((harf, index, self) => harf !== ' ' && !tahminEdilenHarfler.includes(harf) && self.indexOf(harf) === index);

        const aktifButonlar = harfButonlari.filter(b => !b.disabled);
        const gosterilebilecekNihaiHarfler = verilebilecekHarfler.filter(harf =>
            aktifButonlar.some(buton => buton.textContent === harf)
        );

        if (gosterilebilecekNihaiHarfler.length > 0) {
            puanGuncelle(puan - ipucuBedeli);
            ipucuKullanildi = true;
            ipucuButonu.disabled = true;

            const ipucuHarf = gosterilebilecekNihaiHarfler[Math.floor(Math.random() * gosterilebilecekNihaiHarfler.length)];
            const buton = harfButonlari.find(b => b.textContent === ipucuHarf);

            if (buton) {
                harfTahminEt(ipucuHarf, buton, true);
            }
        }
    }

    function verileriYukle() {
        puan = parseInt(localStorage.getItem('toplamPuan')) || 0;
        puanGuncelle(puan);
        basarimlariYukle();
        gunlukGorevYukle();
        maceraVerisiYukle();
        gunlukLimitVerisiYukle();
    }

    function basarimlariYukle() {
        const kayitliBasarimlar = JSON.parse(localStorage.getItem('basarimlar'));
        if (kayitliBasarimlar) {
            Object.keys(basarimlar).forEach(key => {
                if (basarimlar[key] && kayitliBasarimlar[key] && kayitliBasarimlar[key].kazanildi) {
                    basarimlar[key].kazanildi = true;
                }
            });
        }
        ustUsteKazanma = parseInt(localStorage.getItem('ustUsteKazanma')) || 0;
        ipucsuzKazanmaSerisi = parseInt(localStorage.getItem('ipucsuzKazanmaSerisi')) || 0;
    }

    function basarimKazan(key) {
        if (basarimlar[key] && !basarimlar[key].kazanildi) {
            basarimlar[key].kazanildi = true;
            basarimBildirimi.textContent = `${dil[aktifDil].basarimKazanildi} ${basarimlar[key][aktifDil].ad}`;
            basarimBildirimi.classList.add('goster');

            const guncelBasarimlar = JSON.parse(localStorage.getItem('basarimlar')) || {};
            guncelBasarimlar[key] = { kazanildi: true };
            localStorage.setItem('basarimlar', JSON.stringify(guncelBasarimlar));

            setTimeout(() => basarimBildirimi.classList.remove('goster'), 3000);
        }
    }

    function basarimKontrolEt() {
        const istatistikler = istatistikleriGetir();
        basarimKazan('ilk_zafer');
        if (kalanHak === baslangicHak) basarimKazan('kusursuz');
        if (sure > 30) basarimKazan('hizli');
        if (secilenTur === 'yemek') {
            const kategoriVerisi = istatistikler.kategoriDetaylari.yemek || { kazanma: 0 };
            if (kategoriVerisi.kazanma >= 5) basarimKazan('gurme');
        }
        if (ustUsteKazanma >= 5) basarimKazan('seri_5');
        if (kalanHak === 1) basarimKazan('kil_payi');
        if (istatistikler.kazanilanDiller && istatistikler.kazanilanDiller.tr && istatistikler.kazanilanDiller.en) basarimKazan('dil_bilgini');
        if (istatistikler.kazanilanZorluklar && istatistikler.kazanilanZorluklar.kolay && istatistikler.kazanilanZorluklar.orta && istatistikler.kazanilanZorluklar.zor) basarimKazan('maceraperest');
        if (ipucsuzKazanmaSerisi >= 3) basarimKazan('risk_ustasi');
    }

    function basarimPopupGoster() {
        basarimListesi.innerHTML = '';
        Object.keys(basarimlar).forEach(key => {
            const b = basarimlar[key];
            const div = document.createElement('div');
            div.className = `basarim-ogesi ${b.kazanildi ? 'kazanildi' : ''}`;
            const basarimData = b[aktifDil];
            div.innerHTML = `<h3>${basarimData.ad} ${b.kazanildi ? '✔️' : ''}</h3><p>${basarimData.aciklama}</p>`;
            basarimListesi.appendChild(div);
        });
        popupBackdrop.style.display = 'block';
        basarimPopup.classList.add('popup-goster');
    }

    function istatistikPopupGoster() {
        const istatistikler = istatistikleriGetir();
        const genelOran = istatistikler.toplamOyun > 0 ? ((istatistikler.kazananOyun / istatistikler.toplamOyun) * 100).toFixed(1) : 0;
        const mevcutDil = dil[aktifDil];

        let icerikHTML = `
                    <p style="font-weight:bold; font-size:1.1rem;">${mevcutDil.stats_genel_basari}: ${istatistikler.kazananOyun} / ${istatistikler.toplamOyun} (%${genelOran})</p>
                    <table>
                        <thead><tr>
                            <th>${mevcutDil.stats_kategori}</th>
                            <th>${mevcutDil.stats_kazanma}</th>
                            <th>${mevcutDil.stats_oynama}</th>
                            <th>${mevcutDil.stats_basari_yuzde}</th>
                        </tr></thead><tbody>`;

        const kategoriDetaylari = istatistikler.kategoriDetaylari || {};
        for (const kategori in kelimeListesi[aktifDil]) {
            const detay = kategoriDetaylari[kategori] || { kazanma: 0, oynama: 0 };
            const oran = detay.oynama > 0 ? ((detay.kazanma / detay.oynama) * 100).toFixed(1) : 0;
            icerikHTML += `
                        <tr>
                            <td>${mevcutDil[kategori] || kategori}</td>
                            <td>${detay.kazanma}</td>
                            <td>${detay.oynama}</td>
                            <td>%${oran}</td>
                        </tr>`;
        }

        icerikHTML += '</tbody></table>';
        istatistikIcerik.innerHTML = icerikHTML;
        popupBackdrop.style.display = 'block';
        istatistikPopup.classList.add('popup-goster');
    }

    function kategoriPopupGoster() {
        const kategoriPopup = document.getElementById('kategori-secim-popup');
        const kategoriListesi = document.getElementById('kategori-listesi');

        kategoriListesi.innerHTML = '';

        const tumKategoriler = Object.keys(kelimeListesi[aktifDil]);

        tumKategoriler.forEach(kategoriKey => {
            const kutu = document.createElement('div');
            kutu.className = 'seviye-kutusu acik';
            const kategoriAdi = dil[aktifDil][kategoriKey] || kategoriKey.toUpperCase();
            const emoji = kategoriIkonlari[kategoriKey] || '❓';
            kutu.innerHTML = `<span class="seviye-emoji">${emoji}</span><span class="seviye-adi">${kategoriAdi}</span>`;
            kutu.onclick = () => {
                zorluk = "orta";
                kategoriPopup.classList.remove('popup-goster');
                popupBackdrop.style.display = 'none';
                oyunaBasla('klasik', kategoriKey);
            };
            kategoriListesi.appendChild(kutu);
        });

        popupBackdrop.style.display = 'block';
        kategoriPopup.classList.add('popup-goster');
    }

    function Konfeti() {
        const canvas = document.getElementById('konfeti-alani');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particles = [];
        const colors = ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#577590', '#ffffff', '#ff66aa'];

        function Particle() {
            this.x = Math.random() * canvas.width;
            this.y = -20;
            this.size = Math.random() * 8 + 4;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 5 + 2;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.spin = Math.random() - 0.5;
            this.shape = Math.random() > 0.5 ? 'square' : 'circle';
        }

        Particle.prototype.update = function () {
            this.y += this.speedY;
            this.x += this.speedX;
            this.spin += 0.05;
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }

        Particle.prototype.draw = function () {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.spin);
            ctx.fillStyle = this.color;
            if (this.shape === 'square') {
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }

        function createParticles() {
            for (let i = 0; i < 250; i++) {
                particles.push(new Particle());
            }
        }

        let animationFrameId;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            animationFrameId = requestAnimationFrame(animate);
        }

        this.start = function () {
            canvas.style.display = 'block';
            particles = [];
            createParticles();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animate();
        }

        this.stop = function () {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.display = 'none';
        }
    }

    function gunlukGorevYukle() {
        const bugunTarih = new Date().toDateString();
        let kayitliGorev = JSON.parse(localStorage.getItem('gunlukGorev'));

        if (!kayitliGorev || kayitliGorev.tarih !== bugunTarih) {
            const tumTurler = Object.keys(kelimeListesi[aktifDil]);
            const gorevKategori = tumTurler[Math.floor(Math.random() * tumTurler.length)];
            gunlukGorev = {
                tarih: bugunTarih,
                kategori: gorevKategori,
                hedef: 3,
                ilerleme: 0,
                odulAlindi: false
            };
            localStorage.setItem('gunlukGorev', JSON.stringify(gunlukGorev));
        } else {
            gunlukGorev = kayitliGorev;
        }
        gunlukGorevUIGuncelle();
    }

    function gunlukGorevUIGuncelle() {
        if (!gunlukGorev.kategori) return;
        const gorevKutusu = document.getElementById('gunluk-gorev-kutusu');

        if (gunlukGorev.odulAlindi) {
            gunlukGorevAciklama.textContent = "Günün görevi tamamlandı! Yarın tekrar gel.";
            gunlukGorevIlerlemeDolgu.style.width = '100%';
            gunlukGorevDurum.textContent = `✔️`;
            gorevKutusu.classList.add('gorev-tamamlandi');
            gorevKutusu.classList.remove('gorev-aktif');
        } else {
            gunlukGorevAciklama.textContent = dil[aktifDil].gunluk_gorev_aciklama(3, gunlukGorev.kategori);
            const ilerlemeYuzdesi = (gunlukGorev.ilerleme / 3) * 100;
            gunlukGorevIlerlemeDolgu.style.width = `${ilerlemeYuzdesi || 0}%`;
            gunlukGorevDurum.textContent = `${gunlukGorev.ilerleme || 0} / 3`;
            gorevKutusu.classList.add('gorev-aktif');
            gorevKutusu.classList.remove('gorev-tamamlandi');
        }
    }
    function gunlukLimitVerisiYukle() {
        const bugunTarih = new Date().toDateString();
        const kayitliLimit = JSON.parse(localStorage.getItem('gunlukMaceraLimiti'));

        if (!kayitliLimit || kayitliLimit.tarih !== bugunTarih) {
            gunlukLimitVerisi = { tarih: bugunTarih, tamamlanan: 0 };
        } else {
            gunlukLimitVerisi = kayitliLimit;
        }
        localStorage.setItem('gunlukMaceraLimiti', JSON.stringify(gunlukLimitVerisi));
    }


    function harfEle() {
        if (puan < harfEleBedeli) { playSound("uyari"); return; }
        puanGuncelle(puan - harfEleBedeli);

        const yanlisHarfler = harfButonlari.filter(btn => {
            return !btn.disabled && !secilenKelime.includes(btn.textContent);
        });

        for (let i = 0; i < 3; i++) {
            if (yanlisHarfler.length > 0) {
                const rastgeleIndex = Math.floor(Math.random() * yanlisHarfler.length);
                const secilenButon = yanlisHarfler.splice(rastgeleIndex, 1)[0];
                secilenButon.disabled = true;
                secilenButon.classList.add('yanlis-harf');
            }
        }
        gucHarfEleButonu.disabled = true;
    }

    function sureyiDondur() {
        if (puan < sureDondurBedeli || sureDonukMu) { playSound("uyari"); return; }
        puanGuncelle(puan - sureDondurBedeli);
        sureDonukMu = true;
        sureDolgu.style.background = '#3498db';

        setTimeout(() => {
            sureDonukMu = false;
            sureDolgu.style.background = 'linear-gradient(90deg, var(--turuncu), var(--kirmizi))';
        }, 10000);
        gucSureDondurButonu.disabled = true;
    }

    function showUpdatePopup(message, url, isForced) {
        const popup = document.getElementById('guncelleme-uyari-popup');
        const aciklama = document.getElementById('guncelleme-popup-aciklama');
        const sonraButonu = document.getElementById('guncelleme-sonra-buton');
        const simdiButonu = document.getElementById('guncelleme-simdi-buton');
        const kapatButonu = document.getElementById('guncelleme-kapat-buton');
        const backdrop = document.getElementById('popup-backdrop');

        aciklama.textContent = message;
        simdiButonu.onclick = () => {
            if (typeof android !== 'undefined' && android.openStoreLink) {
                android.openStoreLink(url);
            } else {
                window.open(url, '_blank');
            }
        };

        const closePopup = () => {
            popup.classList.remove('popup-goster');
            backdrop.style.display = 'none';
        };
        sonraButonu.onclick = closePopup;
        kapatButonu.onclick = closePopup;

        if (isForced) {
            sonraButonu.style.display = 'none';
            kapatButonu.style.display = 'none';
        } else {
            sonraButonu.style.display = 'block';
            kapatButonu.style.display = 'block';
        }

        backdrop.style.display = 'block';
        popup.classList.add('popup-goster');
    }

    function remoteConfigGuncellemeKontrolu() {
        const remoteConfigDegerleri = {
            latest_version: "1.0.1",
            update_message: "Oyuna harika yenilikler ekledik! Lütfen en son sürüme güncelleyerek bu yenilikleri kaçırma.",
            update_url: "https://play.google.com/store/apps/details?id=com.ozcelik.hangman", // Örnek URL
            is_update_forced: false
        };
        // -------------------------------------------------------------------

        const sonSurum = remoteConfigDegerleri.latest_version;
        if (sonSurum && sonSurum > MEVCUT_UYGULAMA_SURUMU) {
            showUpdatePopup(
                remoteConfigDegerleri.update_message,
                remoteConfigDegerleri.update_url,
                remoteConfigDegerleri.is_update_forced
            );
        }
    }
    function ekstraHakKullan() {
        if (puan < ekstraHakBedeli || kalanHak >= baslangicHak) { playSound("uyari"); return; }
        puanGuncelle(puan - ekstraHakBedeli);
        kalanHak++;
        kalanHakGostergesi.innerHTML = `<span class="kalp-ikon">❤️</span> ${kalanHak}`;

        const gorunenParcalar = document.querySelectorAll("#adam .parca.goster");
        if (gorunenParcalar.length > 0) {
            gorunenParcalar[gorunenParcalar.length - 1].classList.remove("goster");
        }
        gucEkstraHakButonu.disabled = true;
    }

    timeAttackAnasayfaButonu.onclick = () => { playSound('tiklama'); anasayfayaDon(); };
    timeAttackTekrarOynaButonu.onclick = () => {
        if (typeof android !== 'undefined' && android.showInterstitialAd) {
            android.showInterstitialAd();
        }
        playSound('tiklama');
        yenileKullanildi = false;
        sure = 0;
        oyunaBasla('time-attack');
    };
    gucHarfEleButonu.onclick = harfEle;
    gucSureDondurButonu.onclick = sureyiDondur;
    gucEkstraHakButonu.onclick = ekstraHakKullan;
    haritadanAnasayfayaDonButonu.onclick = () => { playSound('tiklama'); anasayfayaDon(); };

    soruyuYenileButonu.onclick = () => {
        if (yenileKullanildi) return;

        playSound('tiklama');
        yenileKullanildi = true;
        soruyuYenileButonu.disabled = true;

        oyunaBasla('klasik');
    };
    anasayfayaDonButonu.onclick = () => {
        playSound('tiklama');
        popupBackdrop.style.display = 'block';
        anasayfaOnayPopup.classList.add('popup-goster');
    };
    ipucuButonu.onclick = () => { ipucuAl(); };

    if (popupYenidenOynaButon) {
        popupYenidenOynaButon.onclick = () => {
            if (typeof android !== 'undefined' && android.showInterstitialAd) {
                android.showInterstitialAd();
            }
            playSound('tiklama');
            oyunaBasla('klasik');
        };
    }
    if (popupAnasayfaButon1) {
        popupAnasayfaButon1.onclick = () => { anasayfayaDon(); };
    }
    if (popupAnasayfaButon2) {
        popupAnasayfaButon2.onclick = () => { anasayfayaDon(); };
    }
    onayEvetButonu.onclick = () => {
        anasayfaOnayPopup.classList.remove('popup-goster');
        popupBackdrop.style.display = 'none';
        anasayfayaDon();
    };

    onayHayirButonu.onclick = () => {
        anasayfaOnayPopup.classList.remove('popup-goster');
        popupBackdrop.style.display = 'none';
    };

    document.querySelectorAll(".dil-buton").forEach(btn => {
        btn.onclick = () => {
            document.querySelector(".dil-buton.active").classList.remove("active");
            btn.classList.add("active");
            aktifDil = btn.id;
            dilGuncelle();
        };
    });

    seviyeKartlari.forEach(kart => {
        kart.onclick = () => {
            zorluk = kart.id.split('-')[1];
            oyunaBasla('klasik');
        };
    });

    if (maceraKapatXButonu) {
        maceraKapatXButonu.onclick = () => {
            anasayfayaDon();
        };
    }

    kapatXButonlari.forEach(btn => {
        btn.onclick = () => {
            const parentPopup = btn.closest('.popup');

            if (parentPopup.id === 'oyun-sonu' || parentPopup.id === 'kaybetme-popup') {
                anasayfayaDon();
            } else {
                parentPopup.classList.remove('popup-goster');
                const halaAcikPopupVar = document.querySelector('.popup.popup-goster');
                if (!halaAcikPopupVar) {
                    popupBackdrop.style.display = 'none';
                }
            }
        };
    });
    anasayfayaDon();
    verileriYukle();
    const menuScroller = document.querySelector(".menu-scroller");
    if (menuScroller) {
        menuScroller.onclick = function (event) {
            const card = event.target.closest('.menu-card');
            if (!card) {
                return;
            }

            playSound('tiklama');
            switch (card.id) {
                case 'klasik-oyun-basla':
                    popupBackdrop.style.display = 'block';
                    seviyeSecimPopup.classList.add('popup-goster');
                    break;
                case 'macera-modu-basla':
                    maceraHaritasiniGoster();
                    break;
                case 'time-attack-basla':
                    sure = 0;
                    oyunaBasla('time-attack');
                    break;
                case 'basarim-butonu':
                    basarimPopupGoster();
                    break;
                case 'istatistik-butonu':
                    istatistikPopupGoster();
                    break;
                case 'kategori-sec-basla':
                    kategoriPopupGoster();
                    break;
            }
        };
    }

    const scrollerTrack = document.querySelector(".scroller-track");
    if (scrollerTrack) {
        const originalCards = Array.from(scrollerTrack.children);

        for (let i = 0; i < 3; i++) {
            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                scrollerTrack.appendChild(clone);
            });
        }
    }
    if (menuScroller) {
        let isDown = false;
        let startX;
        let scrollLeft;

        const startDragging = (e) => {
            isDown = true;
            menuScroller.classList.add('active');
            startX = e.pageX || e.touches[0].pageX - menuScroller.offsetLeft;
            scrollLeft = menuScroller.scrollLeft;
        };

        const stopDragging = () => {
            isDown = false;
            menuScroller.classList.remove('active');
        };

        const drag = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX - menuScroller.offsetLeft;
            const walk = (x - startX) * 2;
            menuScroller.scrollLeft = scrollLeft - walk;
        };

        menuScroller.addEventListener('mousedown', startDragging);
        menuScroller.addEventListener('mouseleave', stopDragging);
        menuScroller.addEventListener('mouseup', stopDragging);
        menuScroller.addEventListener('mousemove', drag);

        menuScroller.addEventListener('touchstart', startDragging);
        menuScroller.addEventListener('touchend', stopDragging);
        menuScroller.addEventListener('touchmove', drag);
    }

    if (menuScroller && scrollerTrack) {
        let resumeScrollTimer;

        const startInteraction = () => {
            clearTimeout(resumeScrollTimer);
            scrollerTrack.classList.add('is-interacting');
        };

        const endInteraction = () => {
            resumeScrollTimer = setTimeout(() => {
                scrollerTrack.classList.remove('is-interacting');
            }, 100);
        };

        menuScroller.addEventListener('mouseenter', startInteraction);
        menuScroller.addEventListener('mouseleave', endInteraction);

        menuScroller.addEventListener('touchstart', startInteraction, { passive: true });
        menuScroller.addEventListener('touchend', endInteraction);
    }
    remoteConfigGuncellemeKontrolu();

});