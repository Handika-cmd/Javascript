// Contoh dasar menggunakan filter()
let harga = [2000, 5000, 10000, 15000, 20000];

let hargaMahal = harga.filter(function(harga){
    return harga >= 10000;
});

console.log(hargaMahal);

// Latihan 1 filter data harga tinggi
let hargaBarang =[25000, 30000, 45000, 55000, 65000, 70000];

let hargaTinggi = hargaBarang.filter(function(hargaBarang){
    return hargaBarang >= 55000;
})
console.log("Harga Tinggi: ", hargaTinggi);

// Latihan 2 — Filter data harga rendah
let hargabarang = [25000, 30000, 45000, 55000, 65000, 70000];

let hargaRendah = hargabarang.filter(function(harga){
    return harga < 45000;
});

console.log(`Harga rendah: Rp ${hargaRendah}`);

// Latihan 3 daftar harga

let daftarHarga = [
    15000,
    25000,
    50000,
    65000,
    70000,
    75000,
    80000
];

let hargaRendah = daftarHarga.filter(function(harga){
    return harga < 65000;
});

console.log(`Daftar Harga: ${daftarHarga}`);
console.log(`Harga Rendah: ${hargaRendah}`);