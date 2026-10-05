const inputTugas = document.getElementById("inputTugas");
const tombol = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

tombol.addEventListener("click", function(){
  daftarTugas.innerHTML += `
    <div>
    ${inputTugas.value}
    </div>`;

  if (inputTugas.value.trim() === ""){
    alert("Isi nama tugasnya dulu ya!!");
  }else{};
  inputTugas.value = "";
});
