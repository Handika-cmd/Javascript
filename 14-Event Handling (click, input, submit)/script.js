// let tombol1 = document.querySelector("#tombol1");
// tombol1.addEventListener("click", function(){
//     console.log("tombol diklik!!!");
//     alert("Tombol di klik");
// });


// Latihan ke 2 gabungan
// const tombol = document.querySelector("#tombol");

// tombol.addEventListener("click", function(){
//     judul.textContent = "Sudah diklik!!!";
//     judul.style.color = "green"
// });

// const input = document.getElementById('inputName');
// const hasil = document.getElementById('hasil');

// input.addEventListener("input", function(){
    
//     hasil.textContent = input.value;

//     input.style.color = "grey";
//     input.style.border ="2px solid green";
// });

// Latihan 3 input nama dan umur

// const inputNama = document.getElementById("inputNama");
// const inputUmur = document.getElementById("inputUmur");
// const hasil = document.getElementById("hasil");

// function tampilkanHasil(){
//     hasil.textContent = "Halo nama saya " + inputNama.value + ", sekarang umur saya " + inputUmur.value + " tahun";
// };

// inputNama.addEventListener("input", tampilkanHasil);
// inputUmur.addEventListener("input", tampilkanHasil);

// const form = document.getElementById("form");
// const inputNama = document.getElementById("nama");
// const inputUmur = document.getElementById("umur");
// const hasil = document.getElementById("hasil");

// form.addEventListener("submit", function(event){

//     event.preventDefault();

//     hasil.textContent = "Halo, Nama saya " + inputNama.value + ", Umur " + inputUmur.value + " tahun."
// });

// ========================================================================
// // FORM PENDAFTARAN MAHASISWA
// ========================================================================

// Gabungkan semuanya menjadi satu assignment:
// const form = document.getElementById("form");
// const nama = document.getElementById("nama");
// const email = document.getElementById("email");
// const jurusan = document.getElementById("jurusan");
// const hasil = document.getElementById("hasil");

// form.addEventListener("submit", function(event){

//     event.preventDefault();

//     hasil.textContent = "Nama: " + nama.value +
//     " | Email Aktif: " + email.value +
//     " | Jurusan: " + jurusan.value;

// });
// ============================================================================
// cara yang lebih enak untuk tampilan beberapa baris.
// Menggunakan InnerHTML

const form = document.getElementById("form");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const jurusan = document.getElementById("jurusan");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event){

    event.preventDefault();

    hasil.innerHTML =
    "Nama: " + nama.value + "<br>" + 
    "Email: " + email.value + "<br>" +
    "jurusan: " + jurusan.value;
})