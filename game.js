document.addEventListener('DOMContentLoaded', () => {
    const basarimlar = {
        ilk_zafer: { ad: "İlk Zafer", aciklama: "İlk oyununu kazan.", kazanildi: false },
        kusursuz: { ad: "Kusursuz!", aciklama: "Hiç hata yapmadan bir kelime bil.", kazanildi: false },
        hizli: { ad: "Zamana Karşı", aciklama: "Bir kelimeyi 30 saniyeden fazla süre varken bil.", kazanildi: false },
        seri_5: { ad: "Sıcak Gidiyor...", aciklama: "5 oyun üst üste kazan.", kazanildi: false },
        gurme: { ad: "Gurme", aciklama: "'Yemekler' kategorisinde 5 kelime bil.", kazanildi: false },
        kil_payi: { ad: "Kıl Payı Kurtuluş", aciklama: "Sadece 1 hakkın kalmışken oyunu kazan.", kazanildi: false },
        dil_bilgini: { ad: "Dil Bilgini", aciklama: "Hem Türkçe hem de İngilizce modunda en az birer oyun kazan.", kazanildi: false },
        maceraperest: { ad: "Maceraperest", aciklama: "Tüm zorluk seviyelerinde (Kolay, Orta, Zor) en az birer oyun kazan.", kazanildi: false },
        risk_ustasi: { ad: "Risk Ustası", aciklama: "Hiç ipucu kullanmadan art arda 3 oyunu kazan.", kazanildi: false }
    };
    const dil = {
        tr: {
            ustBaslik: "Ozcelik Inc.", sonraki: "Sonraki Kelime", ipucu: "İpucu", basla: "Oyuna Başla", anasayfa: "Ana Sayfa", yenile: "Yenile", kazandi: "🎉 Tebrikler, kazandınız! 🎉", kaybetti: "😔 Kaybettiniz!", hata: "Bir hata oluştu: ", sure: "Süre: ", sehirler: "Şehirler", meyveler: "Meyveler", hayvanlar: "Hayvanlar", ulkeler: "Ülkeler", yemek: "Yemekler", meslek: "Meslekler", esya: "Eşyalar", kurallar: "Gizli kelimeyi bulmak için harfleri tahmin et. Yanlış tahminler ve süre puanını etkiler. İpuçları için puanını kullan!",
            gunluk_gorev_aciklama: (hedef, kategori) => `"${dil.tr[kategori] || kategori}" kategorisinden ${hedef} kelime bul.`,
            gunluk_gorev_odul: (puan) => `Görev tamamlandı! +${puan} Puan kazandın!`,
            yetersiz_puan: "Yetersiz Puan!",
        ipucu_kullanilamaz: "İpucu Kullanılamaz" // YENİ EKLENDİ

        },
        en: {
            ustBaslik: "Ozcelik Inc.", sonraki: "Next Word", ipucu: "Hint", basla: "Start Game", anasayfa: "Home", yenile: "New", kazandi: "🎉 Congratulations, you won! 🎉", kaybetti: "😔 You lost!", hata: "An error occurred: ", sure: "Time: ", sehirler: "Cities", meyveler: "Fruits", hayvanlar: "Animals", ulkeler: "Countries", yemek: "Foods", meslek: "Professions", esya: "Items", kurallar: "Guess the letters to find the hidden word. Wrong guesses and time affect your score. Use your score for hints!",
            gunluk_gorev_aciklama: (hedef, kategori) => `Find ${hedef} words from the "${dil.en[kategori] || kategori}" category.`,
            gunluk_gorev_odul: (puan) => `Quest complete! You earned +${puan} Points!`,
            yetersiz_puan: "Not enough points!",
        ipucu_kullanilamaz: "Hint Not Available" // YENİ EKLENDİ

        }
    };
    const kelimeListesi = {
        tr: {
            sehirler: ["ADANA", "ADIYAMAN", "AFYONKARAHİSAR", "AĞRI", "AMASYA", "ANKARA", "ANTALYA", "ARTVİN", "AYDIN", "BALIKESİR", "BİLECİK", "BİNGÖL", "BİTLİS", "BOLU", "BURDUR", "BURSA", "ÇANAKKALE", "ÇANKIRI", "ÇORUM", "DENİZLİ", "DİYARBAKIR", "EDİRNE", "ELAZIĞ", "ERZİNCAN", "ERZURUM", "ESKİŞEHİR", "GAZİANTEP", "GİRESUN", "GÜMÜŞHANE", "HAKKARİ", "HATAY", "ISPARTA", "MERSİN", "İSTANBUL", "İZMİR", "KARS", "KASTAMONU", "KAYSERİ", "KIRKLARELİ", "KIRŞEHİR", "KOCAELİ", "KONYA", "KÜTAHYA", "MALATYA", "MANİSA", "KAHRAMANMARAŞ", "MARDİN", "MUĞLA", "MUŞ", "NEVŞEHİR", "NİĞDE", "ORDU", "RİZE", "SAKARYA", "SAMSUN", "SİİRT", "SİNOP", "SİVAS", "TEKİRDAĞ", "TOKAT", "TRABZON", "TUNCELİ", "ŞANLIURFA", "UŞAK", "VAN", "YOZGAT", "ZONGULDAK", "AKSARAY", "BAYBURT", "KARAMAN", "KIRIKKALE", "BATMAN", "ŞIRNAK", "BARTIN", "ARDAHAN", "IĞDIR", "YALOVA", "KARABÜK", "KİLİS", "OSMANİYE", "DÜZCE"],
            meyveler: ["ELMA", "ARMUT", "MUZ", "ÇİLEK", "KARPUZ", "KAVUN", "ÜZÜM", "KİRAZ", "VİŞNE", "ŞEFTALİ", "KAYISI", "PORTAKAL", "MANDALİNA", "LİMON", "GREYFURT", "NAR", "İNCİR", "HURMA", "KİVİ", "NEKTARİN", "YENİ DÜNYA", "AHUDUDU", "YABAN MERSİNİ", "KARADUT", "DUT", "KIZILCIK", "AYVA", "BÖĞÜRTLEN", "ALTIN ÇİLEK", "HİNDİSTAN CEVİZİ", "ERİK", "YEŞİL ERİK", "SARI ERİK", "MÜRDÜM ERİĞİ", "MUŞMULA", "ALIÇ", "BERGAMOT", "TURUNÇ", "KAN PORTAKALI", "KUMKAT", "ARONYA", "KARAYEMİŞ", "GİLABURU", "KOCAYEMİŞ", "MİSKET LİMONU", "CENNET HURMASI", "HÜNNAP", "İĞDE", "KEÇİBOYNUZU", "CAN ERİĞİ", "PAPAZ ERİĞİ", "DEVECİ ARMUDU", "AKÇA ARMUT", "AMASYA ELMASI", "NAPOLYON KİRAZI", "SARI KİRAZ", "SALİHLİ KİRAZI", "DAĞ ÇİLEĞİ","FRENK ÜZÜMÜ", "BADEM", "FINDIK"],
            hayvanlar: ["ASLAN", "KAPLAN", "FİL", "KÖPEK", "KEDİ", "AT", "İNEK", "KOYUN", "KEÇİ", "TAVUK", "HOROZ", "ÖRDEK", "KAZ", "TAVŞAN", "MAYMUN", "AYI", "KURT", "TİLKİ", "ZÜRAFA", "KANGURU", "LEOPAR", "ÇİTA", "YILAN", "KERTENKELE", "KAPLUMBAĞA", "KURBAĞA", "BALIK", "YUNUS", "BALİNA", "PAPAĞAN", "SERÇE", "KARGA", "KARTAL","ŞAHİN", "BAYKUŞ", "DEVE", "SİNEK", "ARI", "KARINCA", "KELEBEK", "AKREP", "KÖSTEBEK", "DENİZ ATI", "DENİZ ANASI", "PENGUEN", "FARE", "SİNCAP","GEYİK", "BOĞA", "MANDA", "PORSUK", "SANSAR", "ÇAKAL", "VAŞAK", "PUMA", "JAGUAR", "GORİL", "ŞEMPANZE", "ORANGUTAN", "PANDA", "KOALA", "SU AYGIRI","GERGEDAN", "RAKUN", "SURİKAT", "KÖPEK BALIĞI", "VATOZ", "AHTAPOT", "MÜREN", "ALABALIK", "SOMON", "TONBALİĞİ", "MİDYE", "YENGEÇ", "KARİDES", "ISTAKOZ","PELİKAN", "FLAMİNGO", "LEYLEK", "MARTI", "ALBATROS", "GÜVERCİN", "SAKSAĞAN", "KUĞU", "KIRLANGIÇ", "İSPİNOZ", "ÇEKİRGE", "KENE", "TİMSAH", "ALİGATÖR",
                        "İGUANA", "KEKLİK",  "KİVİ KUŞU", "CEYLAN", "SİVRİSİNEK", "TARANTULA", "FOK"],
            ulkeler: ["AFGANİSTAN", "ALMANYA", "AMERİKA BİRLEŞİK DEVLETLERİ", "ANDORRA", "ANGOLA", "ARJANTİN", "ARNAVUTLUK", "AVUSTRALYA", "AVUSTURYA", "AZERBAYCAN", "BAHAMALAR", "BAHREYN", "BANGLADEŞ", "BARBADOS", "BELARUS", "BELÇİKA", "BELİZE", "BENİN", "BHUTAN", "BİRLEŞİK ARAP EMİRLİKLERİ", "BİRLEŞİK KRALLIK", "BOLİVYA", "BOSNA HERSEK", "BOTSVANA", "BREZİLYA", "BRUNEİ", "BULGARİSTAN", "BURKİNA FASO", "BURUNDI", "CEZAYİR", "ÇAD", "ÇEKYA", "ÇİN", "CİBUTİ", "DOMİNİKA", "DOMİNİK CUMHURİYETİ", "DOĞU TİMOR", "EKVADOR", "EKVATOR GİNESİ", "EL SALVADOR", "ENDONEZYA", "ERİTRE","ERMENİSTAN", "ESTONYA", "ESVATİNİ", "ETİYOPYA", "FAS", "FİJİ", "FİLİPİNLER", "FİLİSTİN", "FİNLANDİYA", "FİLDİŞİ SAHİLİ", "FRANSA", "GABON","GAMBİYA", "GANA", "GİNE", "GİNE-BİSAU", "GRENADA", "GUATEMALA", "GUYANA", "GÜNEY AFRİKA", "GÜNEY KORE", "SUDAN", "GÜRCİSTAN", "HAİTİ","HIRVATİSTAN", "HİNDİSTAN", "HOLLANDA", "HONDURAS", "IRAK", "İRAN", "İRLANDA", "İSPANYA", "İSRAİL", "İSVEÇ", "İSVİÇRE", "İTALYA", "İZLANDA","JAMAİKA", "JAPONYA", "KAMBOÇYA", "KAMERUN", "KANADA", "KATAR", "KAZAKİSTAN", "KENYA", "KİRİBATİ", "KIRGIZİSTAN", "KOMORLAR", "KOLOMBİYA","KONGO CUMHURİYETİ", "DEMOKRATİK KONGO CUMHURİYETİ", "KOSTARİKA", "KOSOVA", "KUVEYT", "KÜBA", "LAOS", "LESOTO", "LETONYA", "LİBERYA", "LİBYA","LİHTENŞTAYN", "LİTVANYA", "LÜBNAN", "LÜKSEMBURG", "MADAGASKAR", "KUZEY MAKEDONYA", "MALAVİ", "MALDİVLER", "MALEZYA", "MALİ", "MALTA", "MARŞAL ADALARI", "MORİTANYA", "MORİTYUS", "MEKSİKA", "MİKRONEZYA", "MOLDOVA", "MONAKO", "MOĞOLİSTAN", "MOZAMBİK", "MYANMAR", "NAMİBYA","NAURU", "NEPAL", "NİJER", "NİJERYA", "NİKARAGUA", "NORVEÇ", "UMMAN", "ÖZBEKİSTAN", "PAKİSTAN", "PALAU", "PANAMA", "PAPUA YENİ GİNE", "PARAGUAY","PERU", "POLONYA", "PORTEKİZ", "ROMANYA", "RUANDA", "RUSYA",   "SAINT LUCIA", "SAMOA", "SAN MARİNO",   "SENEGAL", "SEYŞELLER", "SİERRA LEONE", "SİNGAPUR", "SIRBİSTAN", "SLOVAKYA", "SLOVENYA", "SOLOMON ADALARI", "SOMALİ", "SRİLANKA", "SUDAN", "SURİNAM", "SURİYE", "SUUDİ ARABİSTAN", "ŞİLİ", "TACİKİSTAN", "TANZANYA", "TAYLAND", "TAYVAN", "TOGO", "TONGA", "TRİNİDAD TOBAGO", "TUNUS", "TÜRKİYE", "TÜRKMENİSTAN", "TUVALU", "UGANDA", "UKRAYNA", "ÜRDÜN", "URUGUAY", "VANUATU", "VATİKAN", "VENEZUELA", "VİETNAM", "YEMEN", "YENİ ZELANDA", "YEŞİL BURUN ADALARI", "YUNANİSTAN", "ZAMBİYA", "ZİMBABVE"],
            yemek: ["KURU FASULYE", "PİLAV", "DÖNER", "İSKENDER", "LAHMACUN", "PİDE", "MANTI", "KÖFTE", "İÇLİ KÖFTE", "YAPRAK SARMA", "KARNIYARIK", "MÜCVER","BULGUR PİLAVI", "MENEMEN", "TARHANA ÇORBASI", "MERCİMEK ÇORBASI","EZOGELİN ÇORBASI", "YAYLA ÇORBASI", "DOMATES ÇORBASI", "ZEYTİNYAĞLI DOLMA","HÜNKAR BEĞENDİ", "TANTUNİ", "KUMPİR", "KAVURMA", "SAC KAVURMA","FIRINDA TAVUK", "ELBASAN TAVA", "GÜVEÇ", "KAZAN KEBABI", "TESTİ KEBABI","ADANA KEBABI", "URFA KEBABI", "ÇİĞ KÖFTE", "SUCUKLU YUMURTA","KABAK MÜCVER", "KISIR", "ÇİĞDEM", "BAMYA YEMEĞİ", "NOHUT YEMEĞİ", "TAVUK SOTE", "İMAM BAYILDI", "CACIK", "ŞAKŞUKA", "ALİNAZİK","PATLICAN MUSAKKA", "GÖZLEME", "BÖREK", "SU BÖREĞİ", "SİGARA BÖREĞİ","KIYMALI PİDE", "KUŞBAŞILI PİDE", "ETLİ EKMEK", "ÇÖKERTME KEBABI","SOĞAN KEBABI", "BOSTAN KEBABI", "ÇÖPŞİŞ", "TAS KEBABI", "PERDE PİLAVI","İÇ PİLAV", "ARAPSAÇI YEMEĞİ", "ETLİ NOHUT", "ETLİ KURU FASULYE","SEBZELİ PİLAV", "ŞEHRİYE ÇORBASI", "DÜĞÜN ÇORBASI", "PAÇA ÇORBASI","BALIK ÇORBASI", "HAMSİ KÖFTE", "LÜFER IZGARA", "TEKİR TAVA","TAVUK GÜVEÇ", "TERBİYELİ KÖFTE","İSLİM KEBABI", "TEKİRDAĞ KÖFTE", "İNEGÖL KÖFTE", "SUCUKLU PİDE","PASTIRMA KAVURMA", "KAYSERİ YAĞLAMASI", "TİRİT", "EDİRNE TAVA CİĞER","ARNAVUT CİĞERİ", "KARNABAHAR YEMEĞİ","LAHANA SARMASI", "KARA LAHANA ÇORBASI", "GAVUR DAĞI SALATASI","ÇOBAN SALATASI", "MERCİMEK KÖFTESİ", "PATATES KÖFTESİ", "PATATES OTURTMA","PATATES MUSAKKA", "TAZE FASULYE", "KARNABAHAR KIZARTMASI","BROKOLİ GRATEN", "ISPANAK BORANİ", "ISPANAKLI BÖREK", "KABAK ÇİÇEĞİ DOLMASI","KABAK ÇORBASI"],
            meslek: ["ÖĞRETMEN", "DOKTOR", "AVUKAT", "MÜHENDİS", "HEMŞİRE", "POLİS", "ASKER","İTFAİYECİ", "MİMAR", "ŞOFÖR", "MUHASEBECİ", "ÇİFTÇİ", "ESNAF", "KUAFÖR","BERBER", "GARSON", "AŞÇI", "PASTACI", "VETERİNER", "DİŞ HEKİMİ","PSİKOLOG", "ECZACI", "BANKACI", "TEKNİSYEN", "ELEKTRİKÇİ","İNŞAAT USTASI", "BOYACI", "TESİSATÇI", "KAYNAKÇI", "BÜRO MEMURU","KASİYER", "SEKRETER", "SATIŞ TEMSİLCİSİ", "MÜDÜR", "YAZILIMCI","BİLGİSAYAR PROGRAMCISI", "GAZETECİ", "SPİKER", "SANATÇI", "OYUNCU","ŞARKICI", "YÖNETMEN", "ÇEVİRMEN", "GÜVENLİK GÖREVLİSİ", "DEKORATÖR","MODACI", "FOTOĞRAFÇI", "REHBER ÖĞRETMEN", "ASTRONOT", "PİLOT","KABİN MEMURU", "DENİZCİ", "KAPTAN", "GEMİ MÜHENDİSİ", "UÇAK MÜHENDİSİ","ENDÜSTRİ MÜHENDİSİ", "PETROL MÜHENDİSİ", "JEOLİJİ MÜHENDİSİ","VERİ BİLİMCİ", "YAPAY ZEKA UZMANI", "SİSTEM ANALİSTİ", "AĞ YÖNETİCİSİ","GRAFİK TASARIMCI", "WEB TASARIMCI", "OYUN GELİŞTİRİCİSİ", "UX TASARIMCI","SOSYAL MEDYA YÖNETİCİSİ", "PAZARLAMA UZMANI","LOJİSTİK UZMANI", "PROJE YÖNETİCİSİ", "İŞ GELİŞTİRME UZMANI","SATIN ALMA UZMANI", "HUKUK DANIŞMANI", "NOTER", "MUHTAR","BELEDİYE BAŞKANI", "DİPLOMAT", "BÜYÜKELÇİ", "SİYASET BİLİMCİ","EKONOMİST", "SOSYOLOG", "ARKEOLOG", "TARİHÇİ", "İSTATİSTİKÇİ", "BİYOLOG","KİMYAGER", "FİZİKÇİ", "MATEMATİKÇİ", "JEOGRAF", "ASTRONOM", "METEOROLOG","PSİKİYATR", "NÖROLOJİ UZMANI", "KARDİYOLOG", "DERMATOLOG","GÖZ DOKTORU", "FİZYOTERAPİST"],
            esya: ["MASA", "SANDALYE", "TELEFON", "TELEVİZYON", "BİLGİSAYAR", "LAMBA","BUZDOLABI", "ÇAMAŞIR MAKİNESİ", "BULAŞIK MAKİNESİ", "FIRIN", "OCAK","TABAK", "BARDAK", "ÇATAL", "BIÇAK", "KAŞIK", "TENCERE", "TAVA", "KANEPE","KOLTUK", "YATAK", "YASTIK", "BATTANİYE", "DOLAP", "ÇEKMECE", "AYNA","PERDE", "HALI", "KİTAP", "DEFTER", "KALEM", "SİLGİ", "MAKAS", "ÇANTA","ÇALAR SAAT", "RADYO", "KÜVET", "DUŞ", "HAVLU", "FÖN MAKİNESİ","ELEKTRİKLİ SÜPÜRGE", "ÜTÜ", "TERAZİ", "TEPSİ", "TERMOS", "SÜRAHİ","SEHPA", "ASKI", "PRİZ", "ÇAKMAK", "ÇEKİÇ", "TORNAVİDA", "METRE","MATKAP", "ANAHTAR", "KİLİT", "KİLİM", "PASPAS", "ÇÖP KUTUSU","SPREY ŞİŞE", "VAZO", "SAKSI", "TOST  MAKİNESİ", "KAHVE MAKİNESİ","SU ISITICI", "BLENDER", "MİKSER", "RONDO", "DETERJAN", "TEMİZLİK BEZİ","EL FENERİ", "PİL", "ŞARJ ALETİ", "KULAKLIK", "MOUSE", "KLAVYE", "MONİTÖR","PROJEKSİYON", "PERGEL", "CETVEL", "ZIMBA", "DELGEÇ", "YAPIŞKAN BANT","KLASÖR", "ZARF", "DOSYA", "AJANDA", "TAKVİM", "POSTER", "UYDU ALICI","MODEM", "ROUTER", "UZATMA KABLOSU", "KABLO", "ÇAKI", "TESTERE", "MERDANE","OKLAVA", "BARBEKÜ", "TERMOMETRE"]
        },
        en: {
            sehirler: ["NEW YORK", "LONDON", "PARIS", "TOKYO", "BERLIN", "SYDNEY", "MOSCOW", "DUBAI", "MUMBAI", "TORONTO", "LOS ANGELES", "SAN FRANCISCO", "CHICAGO", "MIAMI", "SEATTLE", "BOSTON", "VANCOUVER", "HONG KONG", "SINGAPORE", "CAPE TOWN", "RIO DE JANEIRO", "BUENOS AIRES", "ISTANBUL", "BANGKOK", "SEOUL"],
            meyveler: ["GREEN APPLE", "SWEET BANANA", "ORANGE", "STRAWBERRY", "CHERRY", "WATERMELON", "PINEAPPLE", "MANGO", "KIWI", "PEACH", "APRICOT", "PLUM", "FIG", "GRAPE", "POMEGRANATE", "AVOCADO", "LEMON", "LIME", "COCONUT", "BLUEBERRY", "RASPBERRY", "BLACKBERRY", "CRANBERRY", "DRAGON FRUIT", "PASSION FRUIT"],
            hayvanlar: ["BLACK CAT", "LOYAL DOG", "LION", "TIGER", "ELEPHANT", "GIRAFFE", "MONKEY", "SNAKE", "HORSE", "COW", "SHEEP", "GOAT", "RABBIT", "BEAR", "FOX", "SQUIRREL", "MOUSE", "HEDGEHOG", "KANGAROO", "PANDA", "DOLPHIN", "FISH", "BIRD", "CRAB", "LOBSTER"],
            ulkeler: ["UNITED STATES", "UNITED KINGDOM", "FRANCE", "GERMANY", "JAPAN", "CHINA", "BRAZIL", "CANADA", "AUSTRALIA", "INDIA", "ITALY", "SPAIN", "RUSSIA", "SOUTH AFRICA", "MEXICO", "SWEDEN", "NORWAY", "DENMARK", "FINLAND", "NETHERLANDS", "TURKEY", "ARGENTina", "EGYPT", "INDONESIA", "PAKİSTAN"],
            yemek: ["FRENCH TOAST", "CHICKEN CURRY", "BEEF STROGANOFF", "CAESAR SALAD", "PANCAKE", "PIZZA", "HAMBURGER", "SUSHI", "PASTA", "TACO", "BURRITO", "FISH AND CHIPS", "PAD THAI", "TOM YUM", "LASAGNA", "CROISSANT", "BAGEL", "DONUT", "FRIED RICE", "SPRING ROLL"],
            meslek: ["SOFTWARE ENGINEER", "DENTIST", "GRAPHIC DESIGNER", "LAWYER", "TEACHER", "DOCTOR", "NURSE", "ARCHITECT", "PSYCHOLOGIST", "JOURNALIST", "POLICE OFFICER", "FIREFIGHTER", "CHEF", "ELECTRICIAN", "CARPENTER", "BARBER", "PHARMACIST", "VETERINARIAN", "PILOT", "JUDGE"],
            esya: ["TABLE LAMP", "BOOKSHELF", "COMPUTER DESK", "PEN", "NOTEBOOK", "CHAIR", "SOFA", "TELEVISION", "REFRIGERATOR", "OVEN", "WASHING MACHINE", "DISHWASHER", "CURTAIN", "CARPET", "PILLOW", "BLANKET", "MIRROR", "CLOCK", "PLATE", "FORK"]
        }
    };
    const body = document.body;
    const kelimeTuruAlani = document.getElementById("kelime-turu");
    const kelimeAlani = document.getElementById("kelime-alani");
    const harfAlani = document.getElementById("harf-alani");
    const oyunBaslaButonu = document.getElementById("oyun-basla");
    const sonrakiKelimeButonu = document.getElementById("sonraki-kelime");
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
    const anasayfayaDonButonu = document.getElementById("anasayfaya-don");
    const soruyuYenileButonu = document.getElementById("soruyu-yenile");
    const ipucuButonu = document.getElementById("ipucu-buton");
    const adamParcalari = document.querySelectorAll("#adam-asmaca .kafa, #adam-asmaca .govde, #adam-asmaca .sol-kol, #adam-asmaca .sag-kol, #adam-asmaca .sol-bacak, #adam-asmaca .sag-bacak");
    const popupAnasayfaButon1 = document.getElementById("popup-anasayfaya-don");
    const popupAnasayfaButon2 = document.getElementById("popup-anasayfaya-don-kaybetme");
    const komboMesaji = document.getElementById("kombo-mesaji");
    const puanGostergesi = document.getElementById("puan-gostergesi");
    const basarimButonu = document.getElementById("basarim-butonu");
    const basarimPopup = document.getElementById("basarim-popup");
    const basarimListesi = document.getElementById("basarim-listesi");
    const basarimBildirimi = document.getElementById("basarim-bildirimi");
    const istatistikButonu = document.getElementById("istatistik-butonu");
    const istatistikPopup = document.getElementById("istatistik-popup");
    const istatistikIcerik = document.getElementById("istatistik-icerik");
    const gunlukGorevKutusu = document.getElementById("gunluk-gorev-kutusu");
    const gunlukGorevAciklama = document.getElementById("gunluk-gorev-aciklama");
    const gunlukGorevIlerlemeDolgu = document.getElementById("gunluk-gorev-ilerleme-dolgu");
    const gunlukGorevDurum = document.getElementById("gunluk-gorev-durum");
    const popupKapatButonlari = document.querySelectorAll(".popup-kapat-buton");

    // --- OYUN DEĞİŞKENLERİ ---
    let aktifDil = "tr", secilenTur, secilenKelime, gorunenKelime;
    let kalanHak, baslangicHak, tahminEdilenHarfler = [], harfButonlari = [];
    let puan = 0, zorluk = "kolay";
    let sure, sureInterval;
    let kullanilmisKelimeler = {};
    let komboSayaci = 0;
    let ipucuKullanildi = false;
    let ipucsuzKazanmaSerisi = 0, ustUsteKazanma = 0;
    let gunlukGorev = {};
    const ipucuBedeli = 75;
    const gunlukGorevOdulu = 250;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // --- MERKEZİ VERİ YÖNETİMİ ---
    function istatistikleriGetir() {
        const varsayilan = { toplamOyun: 0, kazananOyun: 0, kategoriDetaylari: {}, kazanilanDiller: {}, kazanilanZorluklar: {} };
        const kayitli = JSON.parse(localStorage.getItem("oyunIstatistikleri"));
        return { ...varsayilan, ...kayitli };
    }
    function istatistikleriKaydet(yeniIstatistikler) {
        localStorage.setItem("oyunIstatistikleri", JSON.stringify(yeniIstatistikler));
    }

    // --- OYUN FONKSİYONLARI ---
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
        puanGostergesi.textContent = `💰 ${puan}`;
        localStorage.setItem('toplamPuan', puan.toString());
    }

    function dilGuncelle() {
        document.querySelector("#oyun-kurallari p").textContent = dil[aktifDil].kurallar;
        ipucuButonu.textContent = `${dil[aktifDil].ipucu} (-${ipucuBedeli}P)`;
        sonrakiKelimeButonu.textContent = dil[aktifDil].sonraki;
        popupYenidenOynaButon.textContent = dil[aktifDil].yenile;
        oyunBaslaButonu.textContent = dil[aktifDil].basla;
        anasayfayaDonButonu.textContent = dil[aktifDil].anasayfa;
        popupAnasayfaButon1.textContent = dil[aktifDil].anasayfa;
        popupAnasayfaButon2.textContent = dil[aktifDil].anasayfa;
        soruyuYenileButonu.textContent = dil[aktifDil].yenile;
        if (secilenTur) kelimeTuruAlani.textContent = dil[aktifDil][secilenTur] || secilenTur.toUpperCase();
        gunlukGorevUIGuncelle();
    }

    function adamParcalariSifirla() {
        adamParcalari.forEach(p => p.classList.remove("parca-gorunur"));
    }

    function kelimeSec() {
        let tumTurler = Object.keys(kelimeListesi[aktifDil]);
        secilenTur = tumTurler[Math.floor(Math.random() * tumTurler.length)];
        if (!kullanilmisKelimeler[secilenTur]) {
            kullanilmisKelimeler[secilenTur] = [];
        }
        let kelimeler = kelimeListesi[aktifDil][secilenTur];
        let uygunKelimeler = kelimeler.filter(k => !kullanilmisKelimeler[secilenTur].includes(k));
        if (uygunKelimeler.length === 0) {
            kullanilmisKelimeler[secilenTur] = [];
            uygunKelimeler = kelimeler;
        }
        let seviyeyeUygunKelimeler;
        if (zorluk === "kolay") { seviyeyeUygunKelimeler = uygunKelimeler.filter(k => k.replace(/\s/g, '').length <= 5); baslangicHak = kalanHak = 7; }
        else if (zorluk === "orta") { seviyeyeUygunKelimeler = uygunKelimeler.filter(k => k.replace(/\s/g, '').length > 5 && k.replace(/\s/g, '').length <= 9); baslangicHak = kalanHak = 7; }
        else { seviyeyeUygunKelimeler = uygunKelimeler.filter(k => k.replace(/\s/g, '').length >= 10); baslangicHak = kalanHak = 6; }
        if (seviyeyeUygunKelimeler.length === 0) seviyeyeUygunKelimeler = uygunKelimeler;
        secilenKelime = [...seviyeyeUygunKelimeler].sort(() => 0.5 - Math.random())[0];
        kullanilmisKelimeler[secilenTur].push(secilenKelime);
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

    // YENİ DÜZENLEME: Kelime sayısını ve toplam uzunluğu kontrol et
    const kelimeSayisi = secilenKelime.split(' ').length;
    const toplamKarakter = secilenKelime.length;

    // Eğer kelime 3 veya daha fazlaysa VEYA tek kelime ama 13 karakterden uzunsa "uzun-kelime" sınıfını ekle
    if (kelimeSayisi >= 3 || toplamKarakter > 13) {
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
        if (!isHint) { playSound('tiklama'); }
        buton.disabled = true;
        tahminEdilenHarfler.push(harf);
        let dogruTahmin = secilenKelime.includes(harf);
        if (dogruTahmin) {
            if (!isHint) {
                komboSayaci++;
                if (komboSayaci > 1) {
                    let bonusPuan = komboSayaci * 5;
                    puanGuncelle(puan + bonusPuan);
                    komboMesaji.textContent = `KOMBO x${komboSayaci}! +${bonusPuan}`;
                    komboMesaji.classList.add('goster');
                    setTimeout(() => komboMesaji.classList.remove('goster'), 1000);
                }
            } else {
                komboSayaci = 0;
            }
            let oncekiGorunum = [...gorunenKelime];
            secilenKelime.split('').forEach((h, i) => { if (h === harf) gorunenKelime[i] = h; });
            kelimeyiGoster();
            secilenKelime.split('').forEach((h, i) => {
                if (h === harf && oncekiGorunum[i] === '_') {
                    if(kelimeAlani.children[i]) kelimeAlani.children[i].classList.add('yeni-harf');
                }
            });
            buton.classList.add("dogru-harf");
            playSound("dogru");
            if (!gorunenKelime.includes('_')) oyunBitti(true);
        } else {
            komboSayaci = 0;
            kalanHak--;
            buton.classList.add("yanlis-harf");
            playSound("yanlis");
            adamParcasiGoster();
            body.classList.add('ekran-titremesi');
            setTimeout(() => body.classList.remove('ekran-titremesi'), 300);
            if (kalanHak <= 0) oyunBitti(false);
        }
    }

    function adamParcasiGoster() {
        const adim = baslangicHak - kalanHak - 1;
        if (adim >= 0 && adim < adamParcalari.length) {
            adamParcalari[adim].classList.add("parca-gorunur");
        }
    }

    function guncelleSure() {
        sure--;
        sureText.textContent = sure;
        let sureYuzdesi = (sure / (zorluk === 'kolay' ? 70 : zorluk === 'orta' ? 80 : 90)) * 100;
        sureDolgu.style.width = `${sureYuzdesi}%`;
        if (sure <= 0) {
            oyunBitti(false);
        }
    }

    function oyunaBasla() {
        ipucuKullanildi = false;
        komboSayaci = 0;
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('popup-goster'));
        popupBackdrop.style.display = 'none';
        body.classList.add("game-active");
        kelimeSec();
        gorunenKelime = secilenKelime.split('').map(c => c === ' ' ? ' ' : '_');
        tahminEdilenHarfler = [];
        ipucuButonu.disabled = false;
        sure = zorluk === 'kolay' ? 70 : zorluk === 'orta' ? 80 : 90;
        dilGuncelle();
        kelimeTuruAlani.textContent = dil[aktifDil][secilenTur] || secilenTur.toUpperCase();
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
        document.onkeydown = handleKeydown;
    }

    function oyunBitti(kazandi) {
        clearInterval(sureInterval);
        document.onkeydown = null;
        if (harfButonlari) harfButonlari.forEach(btn => btn.disabled = true);
        ipucuButonu.disabled = true;
        
        let istatistikler = istatistikleriGetir();
        
        if (secilenTur) {
            if (!istatistikler.kategoriDetaylari[secilenTur]) {
                istatistikler.kategoriDetaylari[secilenTur] = { oynama: 0, kazanma: 0 };
            }
            istatistikler.kategoriDetaylari[secilenTur].oynama++;
        }
        istatistikler.toplamOyun++;

        if (kazandi) {
            let kazanilanPuan = (kalanHak * 10) + sure;
            puanGuncelle(puan + kazanilanPuan);
            oyunSonuPuan.textContent = `+${kazanilanPuan}`;
            oyunSonuToplamPuan.textContent = puan;
        document.getElementById('kazanan-kelime').textContent = secilenKelime;

            istatistikler.kazananOyun++;
            if (secilenTur) istatistikler.kategoriDetaylari[secilenTur].kazanma++;
            gunlukGorevIlerlemeKaydet();
            
            if (!ipucuKullanildi) {
                ipucsuzKazanmaSerisi++;
                ustUsteKazanma++;
                basarimKontrolEt();
            } else {
                ipucsuzKazanmaSerisi = 0;
                ustUsteKazanma = 0;
            }
            
            localStorage.setItem('ipucsuzKazanmaSerisi', ipucsuzKazanmaSerisi.toString());
            localStorage.setItem('ustUsteKazanma', ustUsteKazanma.toString());
            
            if (!istatistikler.kazanilanDiller) istatistikler.kazanilanDiller = {};
            istatistikler.kazanilanDiller[aktifDil] = true;
            
            if (!istatistikler.kazanilanZorluklar) istatistikler.kazanilanZorluklar = {};
            istatistikler.kazanilanZorluklar[zorluk] = true;
            
            playSound("kazanma");
        } else {
            ustUsteKazanma = 0;
            ipucsuzKazanmaSerisi = 0;
            localStorage.setItem('ustUsteKazanma', '0');
            localStorage.setItem('ipucsuzKazanmaSerisi', '0');
            playSound("kaybetme");
        }
        istatistikleriKaydet(istatistikler);
        
        const popup = kazandi ? oyunSonuAlani : kaybetmePopup;
        if (!kazandi) {
            kaybetmeMesaj.innerHTML = `${dil[aktifDil].kaybetti} <br>Doğru kelime: <span class="dogru-kelime">${secilenKelime || ""}</span>`;
        } else {
            oyunSonuMesaj.textContent = dil[aktifDil].kazandi;
        }
        popupBackdrop.style.display = "block";
        popup.classList.add("popup-goster");
    }

    function anasayfayaDon() {
        body.classList.remove("game-active");
        document.querySelectorAll('.popup').forEach(p => p.classList.remove('popup-goster'));
        popupBackdrop.style.display = 'none';
        clearInterval(sureInterval);
        document.onkeydown = null;
        kullanilmisKelimeler = {};
        gunlukGorevUIGuncelle();
        dilGuncelle();
    }

    function handleKeydown(e) {
        if (popupBackdrop.style.display === "block" || e.repeat) return;
        const buton = harfButonlari.find(b => b.textContent === e.key.toLocaleUpperCase('tr') && !b.disabled);
        if (buton) harfTahminEt(buton.textContent, buton);
    }

   function ipucuAl() {
    playSound('tiklama');

    // 1. Yetersiz puan kontrolü (Mevcut haliyle doğru çalışıyor)
    if (puan < ipucuBedeli) {
        playSound("uyari");
        ipucuButonu.classList.add('ekran-titremesi');
        const originalText = ipucuButonu.textContent;
        ipucuButonu.textContent = dil[aktifDil].yetersiz_puan;
        setTimeout(() => {
            ipucuButonu.classList.remove('ekran-titremesi');
            ipucuButonu.textContent = originalText;
        }, 1000);
        return;
    }

    // 2. Son can veya kelime bitme durumu için YENİ UYARI KONTROLÜ
    if (kalanHak <= 1 || !gorunenKelime.includes('_')) {
        playSound("uyari");
        ipucuButonu.classList.add('ekran-titremesi');
        const originalText = ipucuButonu.textContent;
        ipucuButonu.textContent = dil[aktifDil].ipucu_kullanilamaz; // Yeni uyarı metnini kullanıyoruz
        setTimeout(() => {
            ipucuButonu.classList.remove('ekran-titremesi');
            ipucuButonu.textContent = originalText;
        }, 1000);
        return; // Fonksiyondan çık
    }

    // 3. Verilebilecek geçerli bir harf var mı kontrolü (Mevcut haliyle doğru çalışıyor)
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
            basarimBildirimi.textContent = `🏆 Başarım Kazanıldı: ${basarimlar[key].ad}`;
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
        if(secilenTur === 'yemek') {
            const kategoriVerisi = istatistikler.kategoriDetaylari.yemek || { kazanma: 0 };
            if(kategoriVerisi.kazanma >= 5) basarimKazan('gurme');
        }
        if(ustUsteKazanma >= 5) basarimKazan('seri_5');
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
            div.innerHTML = `<h3>${b.ad} ${b.kazanildi ? '✔️' : '❌'}</h3><p>${b.aciklama}</p>`;
            basarimListesi.appendChild(div);
        });
        popupBackdrop.style.display = 'block';
        basarimPopup.classList.add('popup-goster');
    }

    function istatistikPopupGoster() {
        const istatistikler = istatistikleriGetir();
        const genelOran = istatistikler.toplamOyun > 0 ? ((istatistikler.kazananOyun / istatistikler.toplamOyun) * 100).toFixed(1) : 0;
        
        let icerikHTML = `
            <p style="font-weight:bold; font-size:1.1rem;">Genel Başarı: ${istatistikler.kazananOyun} / ${istatistikler.toplamOyun} (%${genelOran})</p>
            <table>
                <thead><tr><th>Kategori</th><th>Kazanma</th><th>Oynama</th><th>Oran</th></tr></thead><tbody>`;

        const kategoriDetaylari = istatistikler.kategoriDetaylari || {};
        for(const kategori in kelimeListesi[aktifDil]) {
            const detay = kategoriDetaylari[kategori] || { kazanma: 0, oynama: 0 };
            const oran = detay.oynama > 0 ? ((detay.kazanma / detay.oynama) * 100).toFixed(1) : 0;
            icerikHTML += `
                <tr>
                    <td>${dil[aktifDil][kategori] || kategori}</td>
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
        if (gunlukGorev.ilerleme >= gunlukGorev.hedef) {
            gunlukGorevAciklama.textContent = "Günün görevi tamamlandı! Yarın tekrar gel.";
            gunlukGorevIlerlemeDolgu.style.width = '100%';
            gunlukGorevDurum.textContent = `✔️`;
        } else {
            gunlukGorevAciklama.textContent = dil[aktifDil].gunluk_gorev_aciklama(gunlukGorev.hedef, gunlukGorev.kategori);
            const ilerlemeYuzdesi = (gunlukGorev.ilerleme / gunlukGorev.hedef) * 100;
            gunlukGorevIlerlemeDolgu.style.width = `${ilerlemeYuzdesi}%`;
            gunlukGorevDurum.textContent = `${gunlukGorev.ilerleme} / ${gunlukGorev.hedef}`;
        }
    }

    function gunlukGorevIlerlemeKaydet() {
        if (gunlukGorev.kategori === secilenTur && !gunlukGorev.odulAlindi) {
            gunlukGorev.ilerleme++;
            if (gunlukGorev.ilerleme >= gunlukGorev.hedef) {
                gunlukGorev.odulAlindi = true;
                puanGuncelle(puan + gunlukGorevOdulu);
                basarimBildirimi.textContent = dil[aktifDil].gunluk_gorev_odul(gunlukGorevOdulu);
                basarimBildirimi.classList.add('goster');
                setTimeout(() => basarimBildirimi.classList.remove('goster'), 3000);
            }
            localStorage.setItem('gunlukGorev', JSON.stringify(gunlukGorev));
            gunlukGorevUIGuncelle();
        }
    }
    
    oyunBaslaButonu.onclick = () => { playSound('tiklama'); oyunaBasla(); };
    soruyuYenileButonu.onclick = () => { playSound('tiklama'); oyunaBasla(); };
    anasayfayaDonButonu.onclick = () => { playSound('tiklama'); anasayfayaDon(); };
    ipucuButonu.onclick = () => { ipucuAl(); };
    basarimButonu.onclick = () => { playSound('tiklama'); basarimPopupGoster(); };
    istatistikButonu.onclick = () => { playSound('tiklama'); istatistikPopupGoster(); };
    
    popupKapatButonlari.forEach(btn => {
        btn.onclick = () => {
            playSound('tiklama');
            btn.closest('.popup').classList.remove('popup-goster');
            const halaAcikPopupVar = document.querySelector('.popup.goster');
            if (!halaAcikPopupVar) {
                popupBackdrop.style.display = 'none';
            }
        };
    });
    
    sonrakiKelimeButonu.onclick = () => { playSound('tiklama'); oyunaBasla(); };
    popupYenidenOynaButon.onclick = () => { playSound('tiklama'); oyunaBasla(); };
    popupAnasayfaButon1.onclick = () => { playSound('tiklama'); anasayfayaDon(); };
    popupAnasayfaButon2.onclick = () => { playSound('tiklama'); anasayfayaDon(); };

    document.querySelectorAll(".seviye-buton").forEach(btn => {
        btn.onclick = () => {
            playSound('tiklama');
            document.querySelector(".seviye-buton.active").classList.remove("active");
            btn.classList.add("active");
            zorluk = btn.id;
        };
    });

    document.querySelectorAll(".dil-buton").forEach(btn => {
        btn.onclick = () => {
            playSound('tiklama');
            document.querySelector(".dil-buton.active").classList.remove("active");
            btn.classList.add("active");
            aktifDil = btn.id;
            dilGuncelle();
        };
    });

    anasayfayaDon();
    verileriYukle();
});

