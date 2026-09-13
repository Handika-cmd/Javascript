// === 1. FUNCTION DECLARATION (Cara Standar) ===

// Ini adalah cara membuat fungsi dengan kata kunci 'function'
function hitungGaji(namaKaryawan, gajiPokok){
    let pajak = gajiPokok * 0.1;
    let gajiBersih = gajiPokok - pajak;

    return gajiBersih;
}

// Cara memakai mesinnya (Memanggil/Call Function):
let gajiRirin = hitungGaji("Ririn", 6500000);
let gajiHandika = hitungGaji("Handika", 6500000);

console.log("Gaji Bersih Ririn Dwi Aryanti: Rp. ", gajiRirin);
console.log("Haji Bersih Handika Saputra: Rp. ", gajiHandika);

function perkenalan(nama){
    return "Nama saya, " + nama + "!!";
}
perkenalan("Handika Saputra");
console.log(perkenalan("Handika Saputra"));

// Menghitung luas dengan arrow modern
const luas = (panjang, lebar) => panjang * lebar;
console.log(luas(5, 3));

// ==============================================================
// Function dengan Dua Parameter
// 1. tambah
function tambah(a, b){
    console.log(a + b);
}
tambah(5, 3);

// 2. kurang
function kurang(a, b){
    console.log(a - b);
}
kurang(5, 3);

// 3. bagi
function bagi(a, b){
    console.log(a / b);
}
bagi(5, 3);

// kali
function kali(a, b){
    console.log(a * b);
}
kali(5, 3);

// bagi sisa
function bagiSisa(a, b){
    console.log(a % b);
}
bagiSisa(5, 3);