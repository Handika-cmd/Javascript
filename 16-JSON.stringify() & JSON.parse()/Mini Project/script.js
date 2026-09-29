const film ={
    nama: "Sijjin 6",
    genre: "Horor",
    rilis: 2022,
    rating: 9.0,
    tersedia: true
};

const dataJSON = JSON.stringify(film);
console.log(dataJSON);

const dataObject = JSON.parse(dataJSON);
console.log(dataObject);

localStorage.setItem("film", dataJSON);

const dataTersimpan = localStorage.getItem("film");
const ambilData = JSON.parse(dataTersimpan);
console.log(ambilData);
console.log(ambilData.nama);