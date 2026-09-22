let judul = document.querySelector("#judul h1");

judul.innerHTML = "DI<span>KA</span>";

judul.style.color = "blue";

judul.style.fontSize = "50px";


// Latihan 
 judul.textContent = "Handika Saputra";

 deskripsi.innerHTML = "sedang belajar <strong>Full Stack Developer</strong>";

 judul.style.color ="green";
 judul.style.fontSize = "35px";

 deskripsi.style.color = "grey";

//  Latihan 1 — Profil
let judul = document.querySelector("#judul h1");
let status = document.querySelector("#status p");
let skill = document.querySelector("#skill p")


judul.textContent = "Handika Saputra";
judul.style.color = "green";
judul.style.fontSize = "50px";

status.textContent ="Mahasiswa Aktif PAI";
status.style.color ="grey";

skill.innerHTML = "Belajar <strong>Javascript, CSS, HTML</strong>"
skill.style.color ="green";