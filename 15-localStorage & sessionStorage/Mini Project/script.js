const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const jurusan = document.getElementById("jurusan");
const semester = document.getElementById("semester");
const simpan = document.getElementById("simpan");
const hapus = document.getElementById("hapus");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event){

    event.preventDefault();

    hasil.innerHTML =
    "Nama: " + nama.value + "<br>" + "<br>" +
    "Email: " + email.value + "<br>" + "<br>" +
    "Jurusan: " + jurusan.value + "<br>" + "<br>" +
    "Semester: " + semester.value + "<br>" +"<br>"

    localStorage.setItem("nama", nama.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("jurusan", jurusan.value);
    localStorage.setItem("semester", semester.value);
});

const namaTersimpan = localStorage.getItem("nama");

hasil.textContent = "Nama: " + namaTersimpan;