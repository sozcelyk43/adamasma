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
const sureText = document.getElementById("sure-text");
const sureDolgu = document.getElementById("sure-dolgu");
const anasayfayaDonButonu = document.getElementById("anasayfaya-don");
const soruyuYenileButonu = document.getElementById("soruyu-yenile");
const ipucuButonu = document.getElementById("ipucu-buton");
const adamParcalariDiv = document.querySelectorAll("#adam-asmaca .kafa, #adam-asmaca .govde, #adam-asmaca .kol, #adam-asmaca .bacak");

// Oyun Değişkenleri
let aktifDil = "tr", secilenTur, secilenKelime, gorunenKelime;
let kalanHak, baslangicHak, tahminEdilenHarfler;
let skor = 0, zorluk = "kolay", harfButonlari = [];
let sure, sureInterval, ipucuHakki = 1;
let sonKategori = null;

let istatistikler = JSON.parse(localStorage.getItem("oyunIstatistikleri")) || { toplamOyun: 0, kazananOyun: 0 };

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) { try { const o = audioCtx.createOscillator(); o.type = type === "dogru" ? "sine" : "square"; o.frequency.setValueAtTime(type === "dogru" ? 800 : 200, audioCtx.currentTime); o.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime + 0.15); } catch (e) { console.error(e); } }

function dilGuncelle() {
    document.querySelector("#oyun-kurallari p").textContent = dil[aktifDil].kurallar;
    ipucuButonu.textContent = `${dil[aktifDil].ipucu}`;
    sonrakiKelimeButonu.textContent = dil[aktifDil].sonraki;
    oyunBaslaButonu.textContent = dil[aktifDil].basla;
    anasayfayaDonButonu.textContent = dil[aktifDil].anasayfa;
    document.querySelectorAll("#popup-anasayfaya-don, #popup-anasayfaya-don-kaybetme").forEach(btn => btn.textContent = dil[aktifDil].anasayfa);
    soruyuYenileButonu.textContent = dil[aktifDil].yenile;
    if (secilenTur) kelimeTuruAlani.textContent = dil[aktifDil][secilenTur] || secilenTur;
}

function adamParcalariSifirla() { adamParcalariDiv.forEach(p => p.style.display = "none"); }

// Eski kelimeSec fonksiyonunu silip bunu yapıştırın
function kelimeSec() {
    let tumTurler = Object.keys(kelimeListesi[aktifDil]);
    let uygunTurler = tumTurler.filter(tur => tur !== sonKategori);
    if (uygunTurler.length === 0) { uygunTurler = tumTurler;    }
    secilenTur = uygunTurler[Math.floor(Math.random() * uygunTurler.length)];
    sonKategori = secilenTur;
    let kelimeler = kelimeListesi[aktifDil][secilenTur];
    let seviyeyeUygunKelimeler;
    if (zorluk === "kolay") { seviyeyeUygunKelimeler = kelimeler.filter(k => k.replace(/\s/g, '').length <= 5); baslangicHak = kalanHak = 7; }
    else if (zorluk === "orta") { seviyeyeUygunKelimeler = kelimeler.filter(k => k.replace(/\s/g, '').length > 5 && k.replace(/\s/g, '').length <= 9); baslangicHak = kalanHak = 7; }
    else { seviyeyeUygunKelimeler = kelimeler.filter(k => k.replace(/\s/g, '').length >= 10); baslangicHak = kalanHak = 6; }
    if (seviyeyeUygunKelimeler.length === 0) seviyeyeUygunKelimeler = kelimeler;
    secilenKelime = [...seviyeyeUygunKelimeler].sort(() => 0.5 - Math.random())[0];
}

function kelimeyiGoster() {
    kelimeAlani.innerHTML = gorunenKelime.map(harf => `<span class="harf-kutusu">${harf === '_' ? '' : harf}</span>`).join('');
    kelimeAlani.classList.toggle("uzun-kelime", secilenKelime.length > 12);
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

function harfTahminEt(harf, buton) {
    if (tahminEdilenHarfler.includes(harf) || kalanHak <= 0) return;
    buton.disabled = true;
    tahminEdilenHarfler.push(harf);
    let dogruTahmin = secilenKelime.includes(harf);

    if (dogruTahmin) {
        secilenKelime.split('').forEach((h, i) => { if (h === harf) gorunenKelime[i] = harf; });
        buton.classList.add("dogru-harf");
        playSound("dogru");
        kelimeyiGoster();
        if (!gorunenKelime.includes('_')) oyunBitti(true);
    } else {
        kalanHak--;
        buton.classList.add("yanlis-harf");
        playSound("yanlis");
        adamParcasiGoster();
        if (kalanHak <= 0) oyunBitti(false);
    }
}

function adamParcasiGoster() {
    const adim = baslangicHak - kalanHak - 1;
    if (adim < adamParcalariDiv.length) adamParcalariDiv[adim].style.display = "block";
}

function guncelleSure() {
    sure--;
    sureText.textContent = sure;
    sureDolgu.style.width = `${(sure / (zorluk === 'kolay' ? 70 : zorluk === 'orta' ? 80 : 90)) * 100}%`;
    if (sure <= 0) oyunBitti(false);
}

function oyunaBasla() {
    body.classList.add("game-active");
    [oyunSonuAlani, kaybetmePopup, popupBackdrop].forEach(el => el.style.display = 'none');
    kelimeSec();
    gorunenKelime = secilenKelime.split('').map(c => c === ' ' ? ' ' : '_');
    tahminEdilenHarfler = []; skor = 0; ipucuHakki = 1;
    sure = zorluk === 'kolay' ? 70 : zorluk === 'orta' ? 80 : 90;
    
    ipucuButonu.disabled = false;
    dilGuncelle();
    kelimeTuruAlani.textContent = dil[aktifDil][secilenTur] || secilenTur;
    sureText.textContent = sure;
    sureDolgu.style.transition = 'none';
    sureDolgu.style.width = '100%';
    setTimeout(() => { sureDolgu.style.transition = `width ${sure}s linear`; sureDolgu.style.width = '0%'; }, 100);

    kelimeyiGoster();
    harfButonlariOlustur();
    adamParcalariSifirla();
    clearInterval(sureInterval);
    sureInterval = setInterval(guncelleSure, 1000);
    document.onkeydown = handleKeydown;
}

function oyunBitti(kazandi) {
    clearInterval(sureInterval);
    document.onkeydown = null;
    harfButonlari.forEach(btn => btn.disabled = true);
    ipucuButonu.disabled = true;
    istatistikler.toplamOyun++;
    if (kazandi) { istatistikler.kazananOyun++; skor += kalanHak * 10 + sure * 2; }
    localStorage.setItem("oyunIstatistikleri", JSON.stringify(istatistikler));
    const oran = ((istatistikler.kazananOyun / istatistikler.toplamOyun) * 100).toFixed(1);
    popupBackdrop.style.display = "block";

    const popup = kazandi ? oyunSonuAlani : kaybetmePopup;
    popup.querySelector(kazandi ? '#oyun-sonu-mesaj' : '#kaybetme-mesaj').innerHTML = dil[aktifDil][kazandi ? 'kazandi' : 'kaybetti'] + (kazandi ? '' : ` <span class="dogru-kelime">${secilenKelime}</span>`);
    popup.querySelector(kazandi ? '#oyun-sonu-skor' : '#kaybetme-skor').textContent = skor;
    popup.querySelector(kazandi ? '#oyun-sonu-toplam' : '#kaybetme-toplam').textContent = istatistikler.toplamOyun;
    popup.querySelector(kazandi ? '#oyun-sonu-kazanan' : '#kaybetme-kazanan').textContent = istatistikler.kazananOyun;
    popup.querySelector(kazandi ? '#oyun-sonu-oran' : '#kaybetme-oran').textContent = oran;
    popup.style.display = "flex";
}

function anasayfayaDon() {
    body.classList.remove("game-active");
    [oyunSonuAlani, kaybetmePopup, popupBackdrop].forEach(el => el.style.display = 'none');
    clearInterval(sureInterval);
    document.onkeydown = null;
    secilenTur = null;
    sonKategori = null;
    dilGuncelle();
}

function handleKeydown(e) {
    if (popupBackdrop.style.display === "block" || e.repeat) return;
    const buton = harfButonlari.find(b => b.textContent === e.key.toLocaleUpperCase('tr') && !b.disabled);
    if (buton) harfTahminEt(buton.textContent, buton);
}

function ipucuAl() {
    if (ipucuHakki > 0 && kalanHak > 1 && gorunenKelime.includes('_')) {
        const bilinmeyenHarfler = secilenKelime.split('').filter(h => !tahminEdilenHarfler.includes(h) && h !== ' ');
        if (bilinmeyenHarfler.length > 0) {
            const ipucuHarf = bilinmeyenHarfler[0];
            const buton = harfButonlari.find(b => b.textContent === ipucuHarf);
            if(buton && !buton.disabled) {
                harfTahminEt(ipucuHarf, buton);
                ipucuHakki--;
                ipucuButonu.disabled = true;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    [oyunBaslaButonu, sonrakiKelimeButonu, soruyuYenileButonu, anasayfayaDonButonu, ipucuButonu].forEach(btn => {
        if(btn.id === 'oyun-basla' || btn.id === 'sonraki-kelime' || btn.id === 'soruyu-yenile') btn.onclick = oyunaBasla;
        else if(btn.id === 'anasayfaya-don') btn.onclick = anasayfayaDon;
        else if(btn.id === 'ipucu-buton') btn.onclick = ipucuAl;
    });
    document.querySelectorAll(".popup button[aria-label='Anasayfaya dön']").forEach(btn => btn.onclick = anasayfayaDon);
    document.querySelectorAll(".seviye-buton").forEach(btn => btn.onclick = () => { document.querySelector(".seviye-buton.active").classList.remove("active"); btn.classList.add("active"); zorluk = btn.id; });
    document.querySelectorAll(".dil-buton").forEach(btn => btn.onclick = () => { document.querySelector(".dil-buton.active").classList.remove("active"); btn.classList.add("active"); aktifDil = btn.id; dilGuncelle(); });
    anasayfayaDon();
});
