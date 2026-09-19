// reduce()

let harga = [
  5000, 7500, 10000, 12000, 15000, 17500, 20000, 22500,
  25000, 27500, 30000, 35000, 40000, 45000, 50000
];

let totalHarga = harga.reduce(function(total, item){
    return total + item;
}, 0);

console.log("Total modal: ", totalHarga);

let angka = [10, 20, 30, 40, 50];

let hasilAngka= angka.reduce(function(total, item){
    return total + item;
}, 0);
console.log("Angka Total: ", hasilAngka);

let angka1 = [10, 20, 30, 40, 50];

let hasilAngka1 = angka1.reduce(function(total, item){
    return total + item;
}, 10);
console.log("Angka Total 1:", hasilAngka1);

let angka2 = [10, 20, 30, 40, 50];

let hasilAngka2 = angka2.reduce(function(total, item){
    return total * item;
}, 2);
console.log("Total Angka: ", hasilAngka2);

//===============================================================================================
// =============================================================================================
// DENGAN OBJEK

let keranjang = [
    {nama: "Baju", harga: 50000},
    {nama: "Celana", harga: 75000},
    {nama: "Sepatu", harga: 150000}
];

let totalBelanja = keranjang.reduce(function(total, item){
    return total + item.harga;
}, 0);
console.log("Total Belanja: ", totalBelanja);

// 
let keranjang1 = [
    {nama: "Baju", harga: 50000, jumlah: 2},
    {nama: "Celana", harga: 75000, jumlah: 1},
    {nama: "Sepatu", harga: 150000, jumlah: 2}
];

let totalBelanja1 = keranjang1.reduce(function(total, item){
    return total + item.harga * item.jumlah;
}, 0);

console.log("Total Belanja: ", totalBelanja1);