// Dil ve Kelime Listeleri (Değiştirilmedi)
const dil = {
    tr: {
        ustBaslik: "Ozcelik Inc.",
        sonraki: "Sonraki Kelime",
        ipucu: "İpucu Al",
        basla: "Oyuna Başla",
        anasayfa: "Anasayfaya Dön",
        yenile: "Soruyu Yenile",
        kazandi: "🎉 Tebrikler, kazandınız! 🎉",
        kaybetti: "😔 Kaybettiniz! Doğru kelime: ",
        hata: "Bir hata oluştu: ",
        sure: "Süre: ",
        sehirler: "ŞEHİRLER 🏙️",
        meyveler: "MEYVELER 🍎",
        hayvanlar: "HAYVANLAR 🐘",
        ulkeler: "ÜLKELER 🌍",
        yemek: "YEMEKLER 🍲",
        meslek: "MESLEKLER 💼",
        esya: "EŞYALAR 🛋️",
        kurallar: "Adam Asmaca oyununa hoş geldiniz! Amacınız, verilen kelimeyi harf harf tahmin ederek tamamlamaktır. Her yanlış tahminde adamın bir parçası çizilir. 6 yanlış tahmin hakkınız var. Süre dolmadan kelimeyi bulmaya çalışın! Bol şans!"
    },
    en: {
        ustBaslik: "Ozcelik Inc.",
        sonraki: "Next Word",
        ipucu: "Get Hint",
        basla: "Start Game",
        anasayfa: "Back to Home",
        yenile: "New Question",
        kazandi: "🎉 Congratulations, you won! 🎉",
        kaybetti: "😔 You lost! Correct word: ",
        hata: "An error occurred: ",
        sure: "Time: ",
        sehirler: "CITIES 🏙️",
        meyveler: "FRUITS 🍎",
        hayvanlar: "ANIMALS 🐘",
        ulkeler: "COUNTRIES 🌍",
        yemek: "FOODS 🍲",
        meslek: "PROFESSIONS 💼",
        esya: "ITEMS 🛋️",
        kurallar: "Welcome to Hangman! Your goal is to guess the word letter by letter. Each wrong guess draws a part of the hangman. You have 6 wrong guesses. Try to find the word before time runs out! Good luck!"
    }
};
const kelimeListesi = {
    tr: {
        sehirler: ["ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AMASYA", "ANKARA", "ANTALYA", "ARTVİN", "AYDIN", "BALIKESİR", "BİLECİK", "BİNGÖL", "BİTLİS", "BOLU", "BURDUR", "BURSA", "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "EDİRNE", "ELAZIĞ", "ERZİNCAN", "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN", "GÜMÜŞHANE", "HAKKARİ", "HATAY", "ISPARTA", "MERSİN", "İSTANBUL", "İZMİR", "KARS", "KASTAMONU", "KAYSERİ", "KIRKLARELİ", "KIRŞEHİR", "KOCAELİ", "KONYA", "KÜTAHYA", "MALATYA", "MANİSA", "KAHRAMANMARAŞ", "MARDİN", "MUĞLA", "MUŞ", "NEVŞEHİR", "NİĞDE", "ORDU", "RİZE", "SAKARYA", "SAMSUN", "SİİRT", "SİNOP", "SİVAS", "TEKİRDAĞ", "TOKAT", "TRABZON", "TUNCELİ", "ŞANLIURFA", "UŞAK", "VAN", "YOZGAT", "ZONGULDAK", "AKSARAY", "BAYBURT", "KARAMAN", "KIRIKKALE", "BATMAN", "ŞIRNAK", "BARTIN", "ARDAHAN", "IĞDIR", "YALOVA", "KARABÜK", "KİLİS", "OSMANİYE", "DÜZCE"],
        meyveler: ["ELMA", "ARMUT", "MUZ", "ÇİLEK", "KARPUZ", "KAVUN", "ÜZÜM", "KİRAZ", "VİŞNE", "ŞEFTALİ", "KAYISI", "PORTAKAL", "MANDALİNA", "LİMON", "GREYFURT", "NAR", "İNCİR", "HURMA", "ANANAS", "KİVİ", "AVOKADO", "MANGO", "NEKTARİN", "YENİ DÜNYA", "AHUDUDU", "FRAMBUAZ", "YABAN MERSİNİ", "KARADUT", "BEYAZ DUT", "KIZILCIK", "AYVA", "BÖĞÜRTLEN", "ALTIN ÇİLEK", "ZENCEFİL", "HİNDİSTAN CEVİZİ", "KAKAO"],
        hayvanlar: ["ASLAN", "KAPLAN", "FİL", "KÖPEK", "KEDİ", "AT", "İNEK", "KOYUN", "KEÇİ", "TAVUK", "HOROZ", "ÖRDEK", "KAZ", "TAVŞAN", "MAYMUN", "AYI", "KURT", "TİLKİ", "ZÜRAFA", "KANGURU", "LEOPAR", "ÇİTA", "YILAN", "KERTENKELE", "KAPLUMBAĞA", "KURBAĞA", "BALIK", "YUNUS", "BALİNA", "PAPAĞAN", "SERÇE", "KARGA", "KARTAL", "ŞAHİN", "BAYKUŞ", "DEVE", "SİNEK", "ARI", "KARINCA", "KELEBEK", "AKREP", "KÖSTEBEK", "DENİZATI", "DENİZANASI", "PENGUEN"],
        ulkeler: ["TÜRKİYE", "ALMANYA", "AMERİKA", "FRANSA", "İNGİLTERE", "İSPANYA", "İTALYA", "RUSYA", "ÇİN", "JAPONYA", "GÜNEY KORE", "KANADA", "BREZİLYA", "ARJANTİN", "HİNDİSTAN", "AVUSTRALYA", "HOLLANDA", "İSVİÇRE", "İSVEÇ", "NORVEÇ", "DANİMARKA", "FİNLANDİYA", "POLONYA", "UKRAYNA", "YUNANİSTAN", "MISIR", "İRAN", "İSRAİL", "SUUDİ ARABİSTAN", "BİRLEŞİK ARAP EMİRLİKLERİ", "MEKSİKA", "KOLOMBİYA", "GÜNEY AFRİKA", "TAYLAND", "VİETNAM", "ENDONEZYA", "MALEZYA", "SİNGAPUR", "FİLİPİNLER", "PAKİSTAN", "BANGLADEŞ", "KÜBA", "PERU", "ŞİLİ", "VENEZUELA", "SIRBİSTAN", "HIRVATİSTAN", "MACARİSTAN"],
        yemek: ["KURU FASULYE", "PİLAV", "DÖNER", "İSKENDER", "LAHMACUN", "PİDE", "MANTI", "KÖFTE", "İÇLİ KÖFTE", "YAPRAK SARMA", "KARNIYARIK", "MÜCVER", "BULGUR PİLAVI", "MENEMEN", "TARHANA ÇORBASI", "MERCİMEK ÇORBASI", "EZOGELİN ÇORBASI", "YAYLA ÇORBASI", "DOMATES ÇORBASI", "ZEYTİNYAĞLI DOLMA", "HÜNKAR BEĞENDİ", "TANTUNİ", "KUMPİR", "KAVURMA", "SAC KAVURMA", "FIRINDA TAVUK", "ELBASAN TAVA", "GÜVEÇ", "KAZAN KEBABI", "TESTİ KEBABI", "ADANA KEBABI", "URFA KEBABI", "ÇİĞ KÖFTE", "SUCUKLU YUMURTA", "KABAK MÜCVER", "KISIR", "ÇİĞDEM", "BAMYA YEMEĞİ", "NOHUT YEMEĞİ", "TAVUK SOTE", "İMAM BAYILDI", "CACIK", "ŞAKŞUKA"],
        meslek: ["ÖĞRETMEN", "DOKTOR", "AVUKAT", "MÜHENDİS", "HEMŞİRE", "POLİS", "ASKER", "İTFAİYECİ", "MİMAR", "ŞOFÖR", "MUHASEBECİ", "ÇİFTÇİ", "ESNAF", "KUAFÖR", "BERBER", "GARSON", "AŞÇI", "PASTACI", "VETERİNER", "DİŞ HEKİMİ", "PSİKOLOG", "ECZACI", "BANKACI", "TEKNİSYEN", "ELEKTRİKÇİ", "İNŞAAT USTASI", "BOYACI", "TESİSATÇI", "KAYNAKÇI", "BÜRO MEMURU", "KASİYER", "SEKRETER", "SATIŞ TEMSİLCİSİ", "MÜDÜR", "YAZILIMCI", "BİLGİSAYAR PROGRAMCISI", "GAZETECİ", "SPİKER", "SANATÇI", "OYUNCU", "ŞARKICI", "YÖNETMEN", "ÇEVİRMEN", "GÜVENLİK GÖREVLİSİ", "DEKORATÖR", "MODACI", "FOTOĞRAFÇI", "REHBER ÖĞRETMEN"],
        esya: ["MASA", "SANDALYE", "TELEFON", "TELEVİZYON", "BİLGİSAYAR", "LAMBA", "BUZDOLABI", "ÇAMAŞIR MAKİNESİ", "BULAŞIK MAKİNESİ", "FIRIN", "OCAK", "TABAK", "BARDAK", "ÇATAL", "BIÇAK", "KAŞIK", "TENCERE", "TAVA", "KANEPE", "KOLTUK", "YATAK", "YASTIK", "BATTANİYE", "DOLAP", "ÇEKMECE", "AYNA", "PERDE", "HALI", "KİTAP", "DEFTER", "KALEM", "SİLGİ", "MAKAS", "ÇANTA", "ÇALAR SAAT", "RADYO", "KÜVET", "DUŞ", "HAVLU", "FÖN MAKİNESİ", "ELEKTRİKLİ SÜPÜRGE", "ÜTÜ", "TERAZİ", "TEPSİ", "TERMOS", "SÜRAHİ", "SEHPA", "ASKI", "PRİZ"]
    },
    en: {
        sehirler: ["NEW YORK", "LONDON", "PARIS", "TOKYO", "BERLIN", "SYDNEY", "MOSCOW", "DUBAI", "MUMBAI", "TORONTO", "LOS ANGELES", "SAN FRANCISCO", "CHICAGO", "MIAMI", "SEATTLE", "BOSTON", "VANCOUVER", "HONG KONG", "SINGAPORE", "CAPE TOWN", "RIO DE JANEIRO", "BUENOS AIRES", "ISTANBUL", "BANGKOK", "SEOUL"],
        meyveler: ["GREEN APPLE", "SWEET BANANA", "ORANGE", "STRAWBERRY", "CHERRY", "WATERMELON", "PINEAPPLE", "MANGO", "KIWI", "PEACH", "APRICOT", "PLUM", "FIG", "GRAPE", "POMEGRANATE", "AVOCADO", "LEMON", "LIME", "COCONUT", "BLUEBERRY", "RASPBERRY", "BLACKBERRY", "CRANBERRY", "DRAGON FRUIT", "PASSION FRUIT"],
        hayvanlar: ["BLACK CAT", "LOYAL DOG", "LION", "TIGER", "ELEPHANT", "GIRAFFE", "MONKEY", "SNAKE", "HORSE", "COW", "SHEEP", "GOAT", "RABBIT", "BEAR", "FOX", "SQUIRREL", "MOUSE", "HEDGEHOG", "KANGAROO", "PANDA", "DOLPHIN", "FISH", "BIRD", "CRAB", "LOBSTER"],
        ulkeler: ["UNITED STATES", "UNITED KINGDOM", "FRANCE", "GERMANY", "JAPAN", "CHINA", "BRAZIL", "CANADA", "AUSTRALIA", "INDIA", "ITALY", "SPAIN", "RUSSIA", "SOUTH AFRICA", "MEXICO", "SWEDEN", "NORWAY", "DENMARK", "FINLAND", "NETHERLANDS", "TURKEY", "ARGENTINA", "EGYPT", "INDONESIA", "PAKİSTAN"],
        yemek: ["FRENCH TOAST", "CHICKEN CURRY", "BEEF STROGANOFF", "CAESAR SALAD", "PANCAKE", "PIZZA", "HAMBURGER", "SUSHI", "PASTA", "TACO", "BURRITO", "FISH AND CHIPS", "PAD THAI", "TOM YUM", "LASAGNA", "CROISSANT", "BAGEL", "DONUT", "FRIED RICE", "SPRING ROLL"],
        meslek: ["SOFTWARE ENGINEER", "DENTIST", "GRAPHIC DESIGNER", "LAWYER", "TEACHER", "DOCTOR", "NURSE", "ARCHITECT", "PSYCHOLOGIST", "JOURNALIST", "POLICE OFFICER", "FIREFIGHTER", "CHEF", "ELECTRICIAN", "CARPENTER", "BARBER", "PHARMACIST", "VETERINARIAN", "PILOT", "JUDGE"],
        esya: ["TABLE LAMP", "BOOKSHELF", "COMPUTER DESK", "PEN", "NOTEBOOK", "CHAIR", "SOFA", "TELEVISION", "REFRIGERATOR", "OVEN", "WASHING MACHINE", "DISHWASHER", "CURTAIN", "CARPET", "PILLOW", "BLANKET", "MIRROR", "CLOCK", "PLATE", "FORK"]
    }
};

// DOM Elementleri
const body = document.body;
const kelimeTuruAlani = document.getElementById("kelime-turu");
const kelimeAlani = document.getElementById("kelime-alani");
const harfAlani = document.getElementById("harf-alani");
const oyunBaslaButonu = document.getElementById("oyun-basla");
const sonrakiKelimeButonu = document.getElementById("sonraki-kelime");
const oyunSonuAlani = document.getElementById("oyun-sonu");
const oyunSonuMesaj = document.getElementById("oyun-sonu-mesaj");
const oyunSonuSkor = document.getElementById("oyun-sonu-skor");
const oyunSonuToplam = document.getElementById("oyun-sonu-toplam");
const oyunSonuKazanan = document.getElementById("oyun-sonu-kazanan");
const oyunSonuOran = document.getElementById("oyun-sonu-oran");
const kaybetmePopup = document.getElementById("kaybetme-popup");
const kaybetmeMesaj = document.getElementById("kaybetme-mesaj");
const kaybetmeSkor = document.getElementById("kaybetme-skor");
const kaybetmeToplam = document.getElementById("kaybetme-toplam");
const kaybetmeKazanan = document.getElementById("kaybetme-kazanan");
const kaybetmeOran = document.getElementById("kaybetme-oran");
const popupBackdrop = document.getElementById("popup-backdrop");
const sureAlani = document.getElementById("sure");
const sureText = document.getElementById("sure-text");
const sureDolgu = document.getElementById("sure-dolgu");
const anasayfayaDonButonu = document.getElementById("anasayfaya-don");
const soruyuYenileButonu = document.getElementById("soruyu-yenile");
const ipucuButonu = document.getElementById("ipucu-buton");
const adamParcalari = document.querySelectorAll("#adam-asmaca .kafa, #adam-asmaca .govde, #adam-asmaca .kol, #adam-asmaca .bacak");

// Oyun Değişkenleri
let aktifDil = "tr";
let secilenTur, secilenKelime, gorunenKelime;
let kalanHak, baslangicHak, tahminEdilenHarfler;
let skor = 0;
let zorluk = "kolay";
let harfButonlari = [];
let sure, sureInterval;
let ipucuHakki = 5;
let lastKeyTime = 0;

// İstatistikler
let istatistikler = JSON.parse(localStorage.getItem("oyunIstatistikleri")) || {
    toplamOyun: 0,
    kazananOyun: 0
};

// Ses Efektleri
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
    try {
        const oscillator = audioCtx.createOscillator();
        oscillator.type = type === "dogru" ? "sine" : "square";
        oscillator.frequency.setValueAtTime(type === "dogru" ? 800 : 200, audioCtx.currentTime);
        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.2);
    } catch (e) {
        console.error("Ses çalma hatası:", e);
    }
}

function dilGuncelle() {
    document.querySelector("#oyun-kurallari p").textContent = dil[aktifDil].kurallar;
    ipucuButonu.textContent = `${dil[aktifDil].ipucu} (${ipucuHakki})`;
    sonrakiKelimeButonu.textContent = dil[aktifDil].sonraki;
    oyunBaslaButonu.textContent = dil[aktifDil].basla;
    anasayfayaDonButonu.textContent = dil[aktifDil].anasayfa;
    document.querySelectorAll("#popup-anasayfaya-don, #popup-anasayfaya-don-kaybetme").forEach(btn => btn.textContent = dil[aktifDil].anasayfa);
    soruyuYenileButonu.textContent = dil[aktifDil].yenile;
    if (secilenTur) {
        kelimeTuruAlani.textContent = dil[aktifDil][secilenTur] || secilenTur;
    }
}

function adamParcalariSifirla() {
    adamParcalari.forEach(parca => parca.style.display = "none");
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function kelimeSec() {
    let turler = Object.keys(kelimeListesi[aktifDil]);
    if (!secilenTur) {
        secilenTur = turler[Math.floor(Math.random() * turler.length)];
    }

    let kelimeler = kelimeListesi[aktifDil][secilenTur];
    let uygunKelimeler;

    if (zorluk === "kolay") {
        uygunKelimeler = kelimeler.filter(k => k.replace(/\s/g, '').length <= 5);
        baslangicHak = kalanHak = 7;
    } else if (zorluk === "orta") {
        uygunKelimeler = kelimeler.filter(k => k.replace(/\s/g, '').length > 5 && k.replace(/\s/g, '').length <= 9);
        baslangicHak = kalanHak = 7;
    } else { // Zor
        uygunKelimeler = kelimeler.filter(k => k.replace(/\s/g, '').length >= 10);
        baslangicHak = kalanHak = 6;
    }

    if (!uygunKelimeler || uygunKelimeler.length === 0) {
        uygunKelimeler = kelimeler; // Seviyeye uygun kelime yoksa tümünü kullan
    }
    
    secilenKelime = shuffleArray([...uygunKelimeler])[0];
}


function kelimeyiGoster() {
    kelimeAlani.innerHTML = gorunenKelime.map(harf =>
        `<span class="harf-kutusu">${harf === '_' ? '&nbsp;' : harf}</span>`
    ).join('');
    if (secilenKelime.includes(" ")) {
        kelimeAlani.classList.add("uzun-kelime");
    } else {
        kelimeAlani.classList.remove("uzun-kelime");
    }
}


function harfButonlariOlustur() {
    const alfabe = aktifDil === "tr" ? "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    harfAlani.innerHTML = "";
    harfButonlari = [];
    for (const harf of alfabe) {
        const buton = document.createElement("button");
        buton.textContent = harf;
        buton.addEventListener("click", () => harfTahminEt(harf, buton));
        harfAlani.appendChild(buton);
        harfButonlari.push(buton);
    }
}

function harfTahminEt(harf, buton) {
    if (tahminEdilenHarfler.includes(harf) || kalanHak <= 0) return;
    if (buton) buton.disabled = true;
    tahminEdilenHarfler.push(harf);

    const kelimeHarfleri = secilenKelime.split('');
    let dogruTahmin = false;

    kelimeHarfleri.forEach((kelimeHarfi, index) => {
        if (kelimeHarfi.toLocaleUpperCase('tr') === harf.toLocaleUpperCase('tr')) {
            gorunenKelime[index] = kelimeHarfi;
            dogruTahmin = true;
        }
    });

    if (dogruTahmin) {
        if (buton) buton.classList.add("dogru-harf");
        skor += 10;
        playSound("dogru");
        kelimeyiGoster();
        if (!gorunenKelime.includes('_')) {
            oyunBitti(true);
        }
    } else {
        if (buton) buton.classList.add("yanlis-harf");
        kalanHak--;
        playSound("yanlis");
        adamParcasiGoster();
        if (kalanHak <= 0) {
            oyunBitti(false);
        }
    }
}

function adamParcasiGoster() {
    const parcalarSira = ["kafa", "govde", "sol-kol", "sag-kol", "sol-bacak", "sag-bacak"];
    const adim = baslangicHak - kalanHak - 1;
    if (adim >= 0 && adim < parcalarSira.length) {
        const selector = `#adam-asmaca .${parcalarSira[adim]}`;
        document.querySelector(selector).style.display = "block";
    }
}

function guncelleSure() {
    sure--;
    sureText.textContent = sure;
    const baslangicSure = zorluk === "kolay" ? 40 : zorluk === "orta" ? 50 : 60;
    const yuzde = (sure / baslangicSure) * 100;
    sureDolgu.style.width = `${yuzde}%`;

    if (sure <= 0) {
        oyunBitti(false);
    }
}

function oyunaBasla() {
    try {
        body.classList.add("game-active");
        popupBackdrop.style.display = 'none';
        oyunSonuAlani.style.display = 'none';
        kaybetmePopup.style.display = 'none';
        
        kelimeSec();
        if (!secilenKelime) throw new Error("Kelime seçilemedi.");

        gorunenKelime = secilenKelime.split('').map(c => (c === ' ' ? ' ' : '_'));
        tahminEdilenHarfler = [];
        skor = 0;
        sure = zorluk === "kolay" ? 40 : zorluk === "orta" ? 50 : 60;
        ipucuHakki = 5;

        ipucuButonu.disabled = false;
        dilGuncelle();
        kelimeTuruAlani.textContent = dil[aktifDil][secilenTur] || secilenTur;
        sureText.textContent = sure;
        sureDolgu.style.transition = 'none';
        sureDolgu.style.width = '100%';
        setTimeout(() => {
             sureDolgu.style.transition = `width ${sure}s linear`;
             sureDolgu.style.width = '0%';
        }, 100);

        kelimeyiGoster();
        harfButonlariOlustur();
        adamParcalariSifirla();

        clearInterval(sureInterval);
        sureInterval = setInterval(guncelleSure, 1000);

        document.addEventListener("keydown", handleKeydown);
    } catch (e) {
        alert(dil[aktifDil].hata + e.message);
        anasayfayaDon();
    }
}

function oyunBitti(kazandi) {
    clearInterval(sureInterval);
    document.removeEventListener("keydown", handleKeydown);
    harfButonlari.forEach(btn => btn.disabled = true);
    ipucuButonu.disabled = true;

    istatistikler.toplamOyun++;
    if (kazandi) {
        istatistikler.kazananOyun++;
        skor += kalanHak * 10 + sure * 2;
    }
    localStorage.setItem("oyunIstatistikleri", JSON.stringify(istatistikler));
    const kazanmaOrani = ((istatistikler.kazananOyun / istatistikler.toplamOyun) * 100).toFixed(1);

    popupBackdrop.style.display = "block";

    if (kazandi) {
        oyunSonuMesaj.textContent = dil[aktifDil].kazandi;
        oyunSonuSkor.textContent = skor;
        oyunSonuToplam.textContent = istatistikler.toplamOyun;
        oyunSonuKazanan.textContent = istatistikler.kazananOyun;
        oyunSonuOran.textContent = kazanmaOrani;
        oyunSonuAlani.style.display = "flex";
    } else {
        kaybetmeMesaj.innerHTML = `${dil[aktifDil].kaybetti} <span class="dogru-kelime">${secilenKelime}</span>`;
        kaybetmeSkor.textContent = skor;
        kaybetmeToplam.textContent = istatistikler.toplamOyun;
        kaybetmeKazanan.textContent = istatistikler.kazananOyun;
        kaybetmeOran.textContent = kazanmaOrani;
        kaybetmePopup.style.display = "flex";
    }
}

function anasayfayaDon() {
    body.classList.remove("game-active");
    popupBackdrop.style.display = 'none';
    oyunSonuAlani.style.display = 'none';
    kaybetmePopup.style.display = 'none';

    clearInterval(sureInterval);
    document.removeEventListener("keydown", handleKeydown);
    
    secilenTur = null;
    secilenKelime = null;
    skor = 0;
    dilGuncelle();
}

function handleKeydown(e) {
    if (popupBackdrop.style.display === "block") return;
    const currentTime = Date.now();
    if (currentTime - lastKeyTime < 100) return;
    lastKeyTime = currentTime;
    const harf = e.key.toUpperCase();
    const buton = harfButonlari.find(b => b.textContent === harf && !b.disabled);
    if (buton) {
        harfTahminEt(harf, buton);
    }
}

function ipucuAl() {
    if (ipucuHakki <= 0 || kalanHak <= 1 || !gorunenKelime.includes('_')) return;

    const bilinmeyenIndeksler = [];
    gorunenKelime.forEach((h, i) => { if (h === '_') bilinmeyenIndeksler.push(i); });
    
    if (bilinmeyenIndeksler.length > 0) {
        const ipucuHarf = secilenKelime[bilinmeyenIndeksler[0]].toLocaleUpperCase('tr');
        const buton = harfButonlari.find(b => b.textContent === ipucuHarf && !b.disabled);
        if (buton) {
            harfTahminEt(ipucuHarf, buton);
            ipucuHakki--;
            ipucuButonu.textContent = `${dil[aktifDil].ipucu} (${ipucuHakki})`;
            if (ipucuHakki === 0) ipucuButonu.disabled = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    oyunBaslaButonu.addEventListener("click", oyunaBasla);
    sonrakiKelimeButonu.addEventListener("click", oyunaBasla);
    soruyuYenileButonu.addEventListener("click", oyunaBasla);
    anasayfayaDonButonu.addEventListener("click", anasayfayaDon);
    ipucuButonu.addEventListener("click", ipucuAl);

    document.querySelectorAll("#popup-anasayfaya-don, #popup-anasayfaya-don-kaybetme").forEach(btn => {
        btn.addEventListener("click", anasayfayaDon);
    });

    document.querySelectorAll(".seviye-buton").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".seviye-buton.active").classList.remove("active");
            btn.classList.add("active");
            zorluk = btn.id;
        });
    });

    document.querySelectorAll(".dil-buton").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".dil-buton.active").classList.remove("active");
            btn.classList.add("active");
            aktifDil = btn.id;
            dilGuncelle();
        });
    });

    anasayfayaDon();
});