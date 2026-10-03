const tugas = [];

// Langkah 6 — Hubungkan HTML dengan JavaScript.

const inputTugas = document.getElementById("inputTugas");
const tombol = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

// Langkah 7, 8, 9 — Klik tombol → ambil isi input → tampilkan ke halaman.

tombol.addEventListener("click", function () {
  const tugasBaru = {
    id: tugas.length + 1,
    teks: inputTugas.value,
    selesai: false
  }
  tugas.push(tugasBaru);
  console.log(tugas);

  // Langkah 12 — Kenapa tugas bisa terduplikasi?
  daftarTugas.innerHTML = "";
  // Langkah 11 — Menampilkan semua tugas dari Array
  for (let i = 0; i < tugas.length; i++) {
    if(tugas[i].selesai === false){
    daftarTugas.innerHTML += `
        <div class="flex items-center justify-between">
            <div class="gap-2 flex items-center">
                <input type="checkbox">
                <span class="">${tugas[i].teks}</span>
            </div>
            <button>Hapus</button>
        </div>`;
  }};
});
