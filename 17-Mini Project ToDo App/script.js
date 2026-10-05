const inputTugas = document.getElementById("inputTugas");
const tombol = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

tombol.addEventListener("click", function(){
  daftarTugas.innerHTML += `
    <div class=" flex bg-blue-200 rounded-lg py-2 justify-between items-center p-2">
    <span>${inputTugas.value}</span>
    <button class="p-2 bg-red-500 hover:bg-red-500 rounded-lg text-white">Hapus</button>
    </div>`;

  if (inputTugas.value.trim() === ""){
    alert("Isi nama tugasnya dulu ya!!");
  }else{};
  inputTugas.value = "";
});
