// Langkah 6 — Hubungkan HTML dengan JavaScript.
const inputTugas = document.getElementById("inputTugas");
const tombol = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

// Langkah 7 — Membuat tombol Tambah merespons klik. test
// tombol.addEventListener("click", function(){
//     console.log("tombol diklik");
// });

// Langkah 8 — Ambil teks dari input (inget, Day 14 dulu kita sudah belajar: <input> → gunakan .value Sedangkan: <p>, <div>, <h1> → biasanya gunakan .textConten)

// Sekarang kita manfaatkan itu. Ubah isi addEventListener menjadi:
tombol.addEventListener("click", function(){
    console.log(inputTugas.value);
});

// Langkah 9 — Menampilkan tugas ke halaman
tombol.addEventListener("click", function(){
    daftarTugas.textContent = inputTugas.value;
});

// Langkah 10 — Kenapa kita butuh Array?. Saat ini kita hanya punya satu tempat untuk menyimpan tugas: daftarTugas.textContent = inputTugas.value; Masalahnya, setiap klik berikutnya mengganti tugas sebelumnya. Kita butuh tempat untuk menyimpan banyak tugas.

