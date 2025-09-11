// Gerekli modülleri içe aktarıyoruz: File System (Dosya Sistemi)
const fs = require('fs');

// Dosya isimlerini tanımlıyoruz
const girisDosyasi = './kelimeler.js';
const ciktiDosyasi = './kelime.js';

try {
    const { kelimeListesi } = require(girisDosyasi);

    if (!kelimeListesi) {
        throw new Error(`'${girisDosyasi}' dosyasından 'kelimeListesi' yüklenemedi. Lütfen dosyanın yapısını ve 'module.exports' satırını kontrol edin.`);
    }

    // Sıralama fonksiyonu
    const islemYapVeSirala = (dizi) => {
        const gecerliDizi = dizi.filter(item => typeof item === 'string');
        const benzersizDizi = [...new Set(gecerliDizi)];
        benzersizDizi.sort((a, b) => {
            const uzunlukFarki = a.length - b.length;
            if (uzunlukFarki !== 0) return uzunlukFarki;
            return a.localeCompare(b, 'tr');
        });
        return benzersizDizi;
    };

    // Diziyi harf sayısına göre gruplayıp metne dönüştüren fonksiyon
    const formatla = (dizi) => {
        if (dizi.length === 0) {
            return '[]';
        }
        const gruplar = {};
        dizi.forEach(kelime => {
            const uzunluk = kelime.length;
            if (!gruplar[uzunluk]) {
                gruplar[uzunluk] = [];
            }
            gruplar[uzunluk].push(`"${kelime}"`);
        });
        const indent = ' '.repeat(12);
        const satirlar = Object.values(gruplar).map(grup => grup.join(', '));
        return `[\n${indent}${satirlar.join(',\n' + indent)}\n${' '.repeat(8)}]`;
    };

    // Tüm kategorileri işle ve sırala
    for (const dil in kelimeListesi) {
        for (const kategori in kelimeListesi[dil]) {
            if (Array.isArray(kelimeListesi[dil][kategori])) {
                kelimeListesi[dil][kategori] = islemYapVeSirala(kelimeListesi[dil][kategori]);
            }
        }
    }

    // Çıktı metnini oluştur
    let yeniIcerik = 'const kelimeListesi = {\n';
    const diller = Object.keys(kelimeListesi);
    diller.forEach((dil, dilIndex) => {
        yeniIcerik += `    ${dil}:\n    {\n`;
        const kategoriler = Object.keys(kelimeListesi[dil]);
        kategoriler.forEach((kategori, kategoriIndex) => {
            
            // --- YENİ EKLENEN KISIM BURASI ---
            const islenmisDizi = kelimeListesi[dil][kategori];
            const kelimeSayisi = islenmisDizi.length;
            const yorumSatiri = `// ${kelimeSayisi} kelime`;
            
            // Diziyi formatla
            const formatlanmisDizi = formatla(islenmisDizi);
            
            // Yorum satırını formatlanmış dizinin içine ekle
            const sonHali = formatlanmisDizi.substring(0, 1) + ` ${yorumSatiri}` + formatlanmisDizi.substring(1);
            // --- YENİ KISIM SONU ---

            yeniIcerik += `        ${kategori}: ${sonHali}`;
            yeniIcerik += (kategoriIndex < kategoriler.length - 1) ? ',\n' : '\n';
        });
        yeniIcerik += '    }';
        yeniIcerik += (dilIndex < diller.length - 1) ? ',\n' : '\n';
    });
    yeniIcerik += '};\n\nmodule.exports = { kelimeListesi };\n';

    // Sonucu dosyaya yaz
    fs.writeFileSync(ciktiDosyasi, yeniIcerik, 'utf8');

    console.log("\n--- İŞLEM BAŞARIYLA TAMAMLANDI! ---");
    console.log(`Veriler işlendi ve "${ciktiDosyasi}" dosyasına KELİME SAYILARI EKLENEREK kaydedildi.`);

} catch (error) {
    console.error("\n--- BİR HATA OLUŞTU! ---");
    console.error("Hata Mesajı:", error.message);
    console.error("\nLütfen 'kelimeler.js' dosyanızda bir yazım hatası (syntax error) olup olmadığını kontrol edin.");
}