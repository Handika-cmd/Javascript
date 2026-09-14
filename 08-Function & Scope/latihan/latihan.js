function sapa(nama){
    console.log("Halo, "+ nama);
}
sapa("Handika Saputra");
sapa("Ririn Dwi Aryanti");

// Latihan 2 — Parameter
function perkenalan(nama, umur){
    console.log("Nama saya " + nama + ", umur " + umur + " tahun");
}
perkenalan("Dika", 22);
perkenalan("Ririn Dwi Aryanti", 20);
perkenalan("Rahmat Ramadan ", 300);


// Latihan 3 - Return
function namaPengguna(nama, umur, hobi){
    return "Nama saya " + nama + ", umur " + umur + ", dan hobi " + hobi;
}

let pengguna = namaPengguna("Handika Saputra", 22, "Belajar Programan");
let pengguna1 = namaPengguna("Ririn Dwi Aryanti", 20, "Mam enak ama mam spageti")
console.log(pengguna);