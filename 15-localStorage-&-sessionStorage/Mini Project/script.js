const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const jurusan = document.getElementById("jurusan");
const semester = document.getElementById("semester");
const simpan = document.getElementById("simpan");
const hapus = document.getElementById("hapus");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  hasil.innerHTML =
    "Nama: " +
    nama.value +
    "<br>" +
    "<br>" +
    "Email: " +
    email.value +
    "<br>" +
    "<br>" +
    "Jurusan: " +
    jurusan.value +
    "<br>" +
    "<br>" +
    "Semester: " +
    semester.value +
    "<br>" +
    "<br>";

  localStorage.setItem("nama", nama.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("jurusan", jurusan.value);
  localStorage.setItem("semester", semester.value);
});

const namaTersimpan = localStorage.getItem("nama");
const emailTersimpan = localStorage.getItem("email");
const jurusanTersimpan = localStorage.getItem("jurusan");
const semesterTersimpan = localStorage.getItem("semester");

if (namaTersimpan){
  hasil.innerHTML =
  "Nama: " +
  namaTersimpan +
  "<br>" +
  "Email: " +
  emailTersimpan +
  "<br>" +
  "Jurusan: " +
  jurusanTersimpan +
  "<br>" +
  "Semester: " +
  semesterTersimpan;
}else{
  hasil.textContent = "Belum ada data tersimpan";
}

hapus.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.removeItem("nama");
  localStorage.removeItem("email");
  localStorage.removeItem("jurusan");
  localStorage.removeItem("semester");

  hasil.textContent = "Belum ada data tersimpan.";

  form.reset();
});
