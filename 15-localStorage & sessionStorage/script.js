// localStorage.setItem("tema", "dark");

// const tema = localStorage.getItem("tema");
// console.log(tema);

// sessionStorage.setItem("nama", "Handika");
// const nama = sessionStorage.getItem("nama");
// console.log(nama);


// latihan kecil yang menggabungkan Day 14 + Day 15.


const nama = document.getElementById("nama");
const hasil = document.getElementById("hasil");

button.addEventListener("click", function(event){

    event.preventDefault();

    hasil.textContent = "Nama: " + nama.value;
    localStorage.setItem("nama", nama.value);
});

button.addEventListener("click", function(reset){

    reset.preventDefault();
    localStorage.removeItem("nama");
})

const namaTersimpan = localStorage.getItem("nama");
console.log(namaTersimpan);