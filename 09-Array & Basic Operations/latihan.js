// let mahasiswa = ["Handika Saputra", "Ririn Dwi Aryanti", "Rahmat ramadan"];

// mahasiswa[2] = "RAHMAT RAMADHAN";
// mahasiswa[0] = "HANDIKA SAPUTRA";
// mahasiswa[1] = "RIRIN DWI ARYANTI";

// console.log(mahasiswa[0]);
// console.log(mahasiswa[1]);
// console.log(mahasiswa[2]);
// // console.log(mahasiswa.length);

// // Menambahkan Data Array
let mahasiswa = ["Handika Saputra", "Ririn Dwi Aryanti", "Rahmat ramadan"];

mahasiswa[2] = "RAHMAT RAMADHAN";
mahasiswa[0] = "HANDIKA SAPUTRA";
mahasiswa[1] = "RIRIN DWI ARYANTI";

mahasiswa.push("Andi", "Abdurrahman", "Wildan");

console.log(mahasiswa[0]);
console.log(mahasiswa[1]);
console.log(mahasiswa[2]);
console.log(mahasiswa[3]);
console.log(mahasiswa[4]);
console.log(mahasiswa[5]);
console.log(mahasiswa.length);

// =========================================================================
// CHALLENGE 09: MEMBUAT DAFTAR BELANJAAN MENGGUNAKAN ARRAY.
// =========================================================================
let daftarBelanja = [];
daftarBelanja.push("Beras");
daftarBelanja.push("Minyak");
daftarBelanja.push("Kacang");
daftarBelanja.push("Sayur kol");
daftarBelanja.push("Apel");
daftarBelanja.push("Mangga")

console.log("Daftar Belanja: ", daftarBelanja);
console.log("Jumlah Item: ", daftarBelanja.length);

// mode hapus data menggunakan pop, shift
daftarBelanja.pop();
daftarBelanja.shift();

console.log("Daftar Belanja Setelah diPop-shift", daftarBelanja);
console.log("Daftar Belanja Setelah diPop-shift", daftarBelanja.length);
