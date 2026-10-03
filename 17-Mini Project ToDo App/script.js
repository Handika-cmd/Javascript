// SETUP 1: Ambil semua elemen html
const inputTugas = document.getElementById("inputTugas");
const tombol = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftartugas");

// STEP 2: Buat array untuk menyimpan semua tugas
const tugas =[];

// =================================================================
// STEP 3: BUAT HELPER FUNCTIONS:  buat fungsi-fungsi pembantu.
// ===============================================================
// fungsi 1: Validasi Tugas tidak boleh kosong
function validasiTugas(teks){
  if (teks.trim() === ""){
    alert("Tugas tidak boleh kosong");
    return false;
  }
  return true;
}