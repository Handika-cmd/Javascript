// Scope itu sama dengan jangkauan Variabel, nentuin "variabel ini bisa diakses dari mana".
// jika salah tempat, bisa error.
// =================================================================================
// mari kita jelaskan bahwa ada 3 jenis utama tentang scope

// 1. global scope
let warna = "biru";
function tampilWarna(){
    console.log(warna);
}

tampilWarna();
console.log(warna);

// 2. scope lokal
function login(){
    let password = "12345";
    console.log(password);
}
login();
console.log(password);