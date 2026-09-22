let tombol1 = document.querySelector("#tombol");
tombol1.addEventListener("click", function(){
    console.log("tombol diklik!!!");
    alert("Tombol di klik");
});


// Latihan ke 2 gabungan
const tombol = document.querySelector("#tombol");

tombol.addEventListener("click", function(){
    judul.textContent = "Tombol sudah diklik!!!";
    judul.style.color = "green"
});