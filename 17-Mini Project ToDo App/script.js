// Langkah 1: JavaScript Kita ambil elemen yang ada di HTML dulu:
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

// Langkah 2: Buat array Kita butuh tempat menampung tugas yang dibuat user:
const array =[];

// Langkah 3: Tambahkan event saat tombol diklik Sekarang kita dengarkan kejadian klik tombol:
tambahTugas.addEventListener("click", function(){

  const teksTugas = inputTugas.value.trim();

  if (teksTugas === ""){
    alert("Tugas tidak boleh kosong");
    return;
  }

  array.push(teksTugas);
  daftarTugas.innerHTML += "<p>" + teksTugas + "</p>"
  inputTugas.value === "";
  inputTugas.focus();
});