// Scope itu sama dengan jangkauan Variabel, nentuin "variabel ini bisa diakses dari mana".
// jika salah tempat, bisa error.
// =================================================================================
// mari kita jelaskan bahwa ada 3 jenis utama tentang scope

// latihan
// 1. Global Scope
let nama = "Handika Saputra";
function sapa(){
    console.log("Halo, ", nama);
}
sapa();

// 2. local scope
function namaLengkap(){
    let nama = "Handika Saputra";
    console.log(nama);
}

namaLengkap();