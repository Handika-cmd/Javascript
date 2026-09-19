let umur = [15, 20, 25, 30, 35, 40, 50];

let perubahanUmur = umur.map(function(item){
    return item + 1;
});

console.log("Umur bertambah: ", perubahanUmur);
// ==============================================================================================================================
// map() dengan object.
let daftarBarang1 =[
    {nama: "Baju", harga: 28000},
    {nama: "Celana", harga: 38000},
    {nama: "Sepatu", harga: 98000}
];

let hargaBaru = daftarBarang1.map(function(item){
    return {
        nama: item.nama,
        harga: item.harga + 2000
    };
});

console.log("Harga Terbaru: ", hargaBaru);

// // Gabungan map() dan filter()
let barang = [
    { nama: "Baju", harga: 28000 },
    { nama: "Celana", harga: 38000 },
    { nama: "Sepatu", harga: 98000 },
    { nama: "Jaket", harga: 75000 }
];

let hasil = barang
    .filter(function(item){
        return item.harga >= 75000;
    })
    .map(function(item){
        return{
            nama: item.nama,
            harga: item.harga + 10000
        }
    });

console.log("Harga terbaru: ", hasil);


let hargaJam = [25000, 35000, 40000];

let hasilHarga = hargaJam.reduce(function(total, item){
    return total + item;
}, 0);

console.log("Harga Naik: ",hasilHarga);