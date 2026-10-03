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
        <div class="flex items-center justify-between mb-2 border border-gray-500 rounded-lg p-2">
            <div class="gap-2 flex items-center bg-blue-100 px-4 py-2 text-black rounded-lg w-64">
                <input type="checkbox" data-id ="${tugas[i].id}">
                <span class="">${tugas[i].teks}</span>
            </div>
            <button class ="bg-red-500 px-4 py-2 text-white mb-2 rounded-lg">Hapus</button>
        </div>`;
  }};

  const checkbox = document.querySelectorAll('input[type="checkbox"]');

  checkbox.forEach(function(item){
    item.addEventListener("change", function(){
      
      const idTugas = Number(item.dataset.id);
      const tugasDitemukan = tugas.find(function(tugasItem){
        return tugasItem.id === idTugas;
      });

      tugasDitemukan.selesai = true;
      console.log(tugasDitemukan);
      console.log(tugas);
    });
  });
});
