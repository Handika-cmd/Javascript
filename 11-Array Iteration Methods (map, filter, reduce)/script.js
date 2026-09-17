// Contoh dasar menggunakan filter()
let harga = [2000, 5000, 10000, 15000, 20000];

let hargaMahal = harga.filter(function(harga){
    return harga >= 10000;
});

console.log(hargaMahal);