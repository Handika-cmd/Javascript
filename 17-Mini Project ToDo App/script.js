const inputTugas = document.getElementById("inputTugas");
const tombol = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

const dataTersimpan = localStorage.getItem("tugas");
const tugasTersimpan = JSON.parse(dataTersimpan);

let tugas = tugasTersimpan || [];

tombol.addEventListener("click", function(){

  if (inputTugas.value.trim() === ""){
    alert("Isi nama tugasnya dulu ya!!");
    return;
  }

  daftarTugas.innerHTML += `
    <div class=" flex bg-blue-100 rounded-lg py-2 justify-between items-center p-2 mb-2">
    <span class="text-black">${inputTugas.value}</span>
    <button class="p-2 w-32 bg-red-500 hover:bg-red-500 rounded-lg text-white">Hapus</button>
    </div>`;
  
  tugas.push(inputTugas.value);
  
  const dataJSON = JSON.stringify(tugas);

  localStorage.setItem("tugas", dataJSON);

});

for (i =0; i < tugasTersimpan.length; i++){
  daftarTugas.innerHTML += `
    <div class=" flex bg-blue-100 rounded-lg py-2 justify-between items-center p-2 mb-2">
    <span class="text-black">${tugasTersimpan[i]}</span>
    <button class="p-2 w-32 bg-red-500 hover:bg-red-800 rounded-lg text-white">Hapus</button>
    </div>`;
};
