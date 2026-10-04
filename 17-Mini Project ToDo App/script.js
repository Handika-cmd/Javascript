const inputTugas = document.getElementById("inputTugas");
const tombol = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

tombol.addEventListener("click", function(){
  daftarTugas.innerHTML = inputTugas.value;
})