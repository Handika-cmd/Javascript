const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const jurusan = document.getElementById("jurusan");
const semester = document.getElementById("semester");
const simpan = document.getElementById("simpan");
const hapus = document.getElementById("hapus");
const hasil = document.getElementById("hasil");

function tampilkanPengguna(pengguna) {
  if (!pengguna) {
    hasil.textContent = "Belum ada data tersimpan";
    return;
  }

  hasil.replaceChildren(
    "Nama: " + pengguna.nama,
    document.createElement("br"),
    "Email: " + pengguna.email,
    document.createElement("br"),
    "Jurusan: " + pengguna.jurusan,
    document.createElement("br"),
    "Semester: " + pengguna.semester
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const pengguna = {
    nama: nama.value,
    email: email.value,
    jurusan: jurusan.value,
    semester: semester.value
  };
  const dataJSON = JSON.stringify(pengguna);
  localStorage.setItem("pengguna", dataJSON);
  tampilkanPengguna(pengguna);
  console.log(dataJSON);
});

const dataTersimpan = localStorage.getItem("pengguna");
const penggunaTersimpan = JSON.parse(dataTersimpan);

console.log(penggunaTersimpan);
tampilkanPengguna(penggunaTersimpan);

hapus.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.removeItem("pengguna");

  hasil.textContent = "Belum ada data tersimpan.";

  form.reset();
});
