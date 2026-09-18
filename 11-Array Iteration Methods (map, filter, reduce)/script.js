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

// Latihan 4 objek
let daftarBarang =[
    {nama: "Baju", harga: 35000},
    {nama: "Celana", harga: 45000},
    {nama: "Tas", harga: 50000},
    {nama: "Sepatu", harga: 65000},
    {nama: "Jaket", harga: 70000}
];

let hargaRendah = daftarBarang.filter(function(item){
    return item.harga < 50000;
});

console.log("Item golongan harga rendah", hargaRendah);

// Latihan 5 — Filter berdasarkan property lain
let mahasiswa =[
    {nama: "Handika Saputra", jurusan: "PAI", fakultas: "Tarbiyah", semester: 3},
    {nama: "Ririn Dwi Aryanti", jurusan: "Teknik Informatika", fakultas: "Teknik", semester: 3},
    {nama: "Rahmat Ramadan", jurusan: "PAI", fakultas: "Tarbiyah", semester: 3},
    {nama: "Avanza Khalil", jurusan: "Teknik Elektro", fakultas: "Teknik", semester: 1},
    {nama: "Khairu Wildan", jurusan: "PAI", fakultas: "Tarbiyah", semester: 3}
];

let mahasiswaTarbiyah = mahasiswa.filter(function(item){
    return item.fakultas === "Tarbiyah";
});

let mahasiswaTeknik = mahasiswa.filter(function(item){
    return item.fakultas === "Teknik";
});

let mahasiswaInformatika = mahasiswa.filter(function(item){
    return item.jurusan === "Teknik Informatika"
});

console.log("Daftar Mahasiswa Tarbiyah: ", mahasiswaTarbiyah);
console.log("Daftar Mahasiswa Teknik: ", mahasiswaTeknik);
console.log("Nama Mahasiswa Teknik Informatika: ", mahasiswaInformatika);


// =================================================================================================================
// =================================================================================================================
// Latihan mengambil data mahasiswa menggunakan filter
// =================================================================================================================
let mahasiswa = [
    { nama: "Dika", jurusan: "PAI", semester: 3 },
    { nama: "Ririn", jurusan: "PAI", semester: 2 },
    { nama: "Rahmat", jurusan: "PAI", semester: 3 },
    { nama: "Andi", jurusan: "Informatika", semester: 4 },
    { nama: "Siti", jurusan: "Informatika", semester: 4 },
    { nama: "Budi", jurusan: "Informatika", semester: 2 },
    { nama: "Lina", jurusan: "Manajemen", semester: 5 },
    { nama: "Ahmad", jurusan: "Manajemen", semester: 5 },
    { nama: "Tono", jurusan: "Manajemen", semester: 3 },
    { nama: "Wulan", jurusan: "Ekonomi", semester: 2 },
    { nama: "Rafi", jurusan: "Ekonomi", semester: 2 },
    { nama: "Nisa", jurusan: "Ekonomi", semester: 4 },
    { nama: "Bayu", jurusan: "Hukum", semester: 6 },
    { nama: "Dewi", jurusan: "Hukum", semester: 6 },
    { nama: "Yoga", jurusan: "Hukum", semester: 4 },
    { nama: "Maya", jurusan: "Kedokteran", semester: 1 },
    { nama: "Rangga", jurusan: "Kedokteran", semester: 1 },
    { nama: "Putri", jurusan: "Kedokteran", semester: 3 },
    { nama: "Fajar", jurusan: "Teknik Sipil", semester: 2 },
    { nama: "Intan", jurusan: "Teknik Sipil", semester: 4 }
];

let mahasiswaHukum = mahasiswa.filter(function(item){
    return item.jurusan === "Hukum";
});

let mahasiswaPAI = mahasiswa.filter(function(item){
    return item.jurusan === "PAI";
})

let mahasiswaManajemen = mahasiswa.filter(function(item){
    return item.jurusan === "Manajemen";
});

let mahasiswaEkonomi = mahasiswa.filter(function(item){
    return item.jurusan === "Ekonomi";
});

let mahasiswaInformatika = mahasiswa.filter(function(item){
    return item.jurusan === "Informatika";
});

console.log("Mahasiswa Hukum: ", mahasiswaHukum);
console.log("Mahasiswa PAI: ", mahasiswaPAI);
console.log("Mahasiswa Manajemen: ", mahasiswaManajemen);
console.log("Mahasiswa Ekonomi: ", mahasiswaEkonomi);
console.log("Mahasiswa Informatika: ", mahasiswaInformatika);

// ==============================================================================================================================
// Latihan menggunakan map()
// ==============================================================================================================================

let umur = [15, 20, 25, 30, 35, 40, 50];

let perubahanUmur = umur.map(function(item){
    return item + 1;
});

console.log("Umur bertambah: ", perubahanUmur);
// ==============================================================================================================================
// map() dengan object.
let daftarBarang =[
    {nama: "Baju", harga: 28000},
    {nama: "Celana", harga: 38000},
    {nama: "Sepatu", harga: 98000}
];

let hargaBaru = daftarBarang.map(function(item){
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