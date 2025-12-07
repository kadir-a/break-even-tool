// Proje: Maliyet ve Kâr Analizi
// Dosya: Hesaplama Mantığı (JS)

// Hesaplama Fonksiyonu
function basabasHesapla() {
    // 1. ADIM: Kullanıcının girdiği verileri alıyoruz
    // parseFloat ondalıklı sayıları da (kuruşlu) alabilmek için
    let toplamSabitGider = parseFloat(document.getElementById('sabitGiderInput').value);
    let satisFiyati = parseFloat(document.getElementById('satisFiyatiInput').value);
    let degiskenGider = parseFloat(document.getElementById('degiskenGiderInput').value);

    // 2. ADIM: Hata Kontrolü (Validation)
    // Eğer kutucuklar boşsa veya sayı değilse uyarı ver
    if (isNaN(toplamSabitGider) || isNaN(satisFiyati) || isNaN(degiskenGider)) {
        alert("Lütfen tüm alanları sayısal olarak doldurun!");
        return; // Fonksiyonu durdur
    }

    // Satış fiyatı maliyetten düşükse zarar edilir, hesaplanamaz
    if (satisFiyati <= degiskenGider) {
        alert("Hata: Satış fiyatı, değişken giderden (maliyetten) büyük olmalıdır!");
        return;
    }

    // 3. ADIM: Maliyet Muhasebesi Formülü
    // Formül: Sabit Giderler / (Birim Fiyat - Birim Değişken Gider)
    // (Price - Variable Cost) = Katkı Payı
    
    let katkipay = satisFiyati - degiskenGider;
    let sonuc = toplamSabitGider / katkipay;
    
    // 4. ADIM: Sonucu Ekrana Yazdır
    // Math.ceil ile yukarı yuvarlıyoruz çünkü yarım ürün satılamaz
    document.getElementById('sonucAlani').innerText = Math.ceil(sonuc) + " Adet";
    
    // Gizli olan sonuç kutusunu görünür yap
    document.getElementById('result').style.display = 'block';
}
