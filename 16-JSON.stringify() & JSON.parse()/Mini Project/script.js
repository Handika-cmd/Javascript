const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const jurusan = document.getElementById("jurusan");
const semester = document.getElementById("semester");
const simpan = document.getElementById("simpan");
const hapus = document.getElementById("hapus");
const hasil = document.getElementById("hasil");
const daftarSkill = document.getElementById("daftarSkill");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const pengguna = {
    nama: nama.value,
    email: email.value,
    jurusan: jurusan.value,
    semester: semester.value,
    skill: ["HTML", "Tailwindcss","CSS","TypeScript","Flutter","Python"]
  };
  const dataJSON = JSON.stringify(pengguna);
  localStorage.setItem("pengguna", dataJSON);
  console.log(dataJSON);
});

const dataTersimpan = localStorage.getItem("pengguna");
const penggunaTersimpan =JSON.parse(dataTersimpan);
const skill = penggunaTersimpan.skill;

for (let i = 0; i < skill.length; i++){
  daftarSkill.innerHTML += skill [i] + "<br>";
}

daftarSkill.innerHTML = "<ul>";

console.log(penggunaTersimpan);
// menambahkan fungsi untuk menampilkan data yang tersimpan di localStorage
function tampilkanData() { const dataTersimpan = localStorage.getItem("pengguna");
if (penggunaTersimpan){
  hasil.innerHTML =
  "Nama: " +
  penggunaTersimpan.nama +
  "<br>" +
  "Email: " +
  penggunaTersimpan.email +
  "<br>" +
  "Jurusan: " +
  penggunaTersimpan.jurusan +
  "<br>" +
  "Semester: " +
  penggunaTersimpan.semester,
  "Skill: " + penggunaTersimpan.skill;
}else{
  hasil.textContent = "Belum ada data tersimpan";
};
}

tampilkanData();

hapus.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.removeItem("pengguna");

  hasil.textContent = "Data Berhasil dihapus.";

  form.reset();
});
