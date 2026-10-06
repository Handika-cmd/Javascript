const inputTugas = document.getElementById("inputTugas");
const tombol = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");

const dataTersimpan = localStorage.getItem("tugas");
const tugasTersimpan = JSON.parse(dataTersimpan);

let tugas = tugasTersimpan || [];

tombol.addEventListener("click", function () {
  if (inputTugas.value.trim() === "") {
    alert("Isi nama tugasnya dulu ya!!");
    return;
  }

  tugas.push(inputTugas.value);

  const dataJSON = JSON.stringify(tugas);

  tampilkanTugas();

  localStorage.setItem("tugas", dataJSON);
  inputTugas.value = "";
});


function tampilkanTugas() {
  daftarTugas.innerHTML = "";
  for (i = 0; i < tugas.length; i++) {
    daftarTugas.innerHTML += `
      <div class=" flex bg-green-200 rounded-lg py-2 justify-between items-center p-2 mb-2">
          <span class="text-black">${tugas[i]}</span>

          <button data-index="${i}" class="p-2 w-24 bg-red-500 hover:bg-red-700 rounded-lg text-white">Hapus</button>
      </div>
      `;
  }

  const hapus = document.querySelectorAll("[data-index]");
  hapus.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
      const indexTugas = tombol.dataset.index;
      tugas.splice(Number(indexTugas), 1);
      const dataJSON = JSON.stringify(tugas);
      localStorage.setItem("tugas", dataJSON);
      tampilkanTugas();
    });
  });
}

tampilkanTugas();
