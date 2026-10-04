// Langkah 1: JavaScript Kita ambil elemen yang ada di HTML dulu:
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

// Langkah 2: Buat array Kita butuh tempat menampung tugas yang dibuat user:
tugas = [];

// Langkah 3: Tambahkan event saat tombol diklik Sekarang kita dengarkan kejadian klik tombol:
tambahTugas.addEventListener("click", function(){
  // didalam ini kita buat pesan tidak boleh kosong
  const hasilTugas = inputTugas.value.trim();

  if(pesan === ""){
    alert("Pesan tidak boleh kosong");
  }

  // Langkah 3: sekarang kita mau nampilin tugas yang ditampilin oleh user
  tugas.push(hasilTugas);
  
});