// === 1. FUNCTION DECLARATION (Cara Standar) ===

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

// Nah, sekarang kita membuat function dengan return
function tambah(a, b){
    return a + b;
}

let hasil = tambah(20, 10);
console.log(hasil);

// Sekarang masuk bagian kedua yaitu scope. silahkan buka file yang bernama scope.