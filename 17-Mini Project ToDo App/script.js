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

  tugas.push({
    nama: inputTugas.value,
    selesai: false
  });

  const dataJSON = JSON.stringify(tugas);

  localStorage.setItem("tugas", dataJSON);

  tampilkanTugas();

  inputTugas.value = "";
});


function tampilkanTugas() {
  daftarTugas.innerHTML = "";
  for (i = 0; i < tugas.length; i++) {
    daftarTugas.innerHTML += `
      <div class="${tugas[i].selesai ? "bg-transparent" : "bg-green-200"} flex bg-green-200 rounded-lg py-2 justify-between items-center p-2 mb-2">
        <div class="flex gap-2">
           <input 
            type ="checkbox"
            data-index ="${i}"
            ${tugas[i].selesai ? "checked" : ""}
          >
          <span class="${tugas[i].selesai ? "line-through text-gray-400": ""}">${tugas[i].nama}</span>
        </div>
          <button data-index="${i}" class="p-2 w-24 bg-red-500 hover:bg-red-700 rounded-lg text-white">Hapus</button>
      </div>
      `;
  }

  const hapus = document.querySelectorAll("button[data-index]");
  hapus.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
      const indexTugas = tombol.dataset.index;
      tugas.splice(Number(indexTugas), 1);
      const dataJSON = JSON.stringify(tugas);
      localStorage.setItem("tugas", dataJSON);
      tampilkanTugas();
    });
  });

  const checklist = document.querySelectorAll('input[type="checkbox"]');
  checklist.forEach(function(checkbox){
    checkbox.addEventListener("change", function(){
      const indexTugas = Number(checkbox.dataset.index);
      tugas[indexTugas].selesai  = checkbox.checked;
      localStorage.setItem("tugas", JSON.stringify(tugas));

      tampilkanTugas();
    })
  })
}

tampilkanTugas();
