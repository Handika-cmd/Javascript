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

const inputNama = document.getElementById("inputNama");
const inputUmur = document.getElementById("inputUmur");
const hasil = document.getElementById("hasil");

function tampilkanHasil(){
    hasil.textContent = "Halo nama saya " + inputNama.value + " sekarang saya umur saya " + inputUmur.value + " tahun";
};

inputNama.addEventListener("input", tampilkanHasil);
inputUmur.addEventListener("input", tampilkanHasil);