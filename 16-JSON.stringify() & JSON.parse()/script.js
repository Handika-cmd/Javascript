const pengguna = {
    nama: "Handika",
    jurusan: "Pendidikan Agama Islam",
    semester: 2
};

const dataJSON = JSON.stringify(pengguna);
console.log(dataJSON);
console.log(typeof dataJSON);

const dataObject = JSON.parse(dataJSON);
console.log(dataObject);

localStorage.setItem("pengguna", dataJSON);

const dataTersimpan = localStorage.getItem("pengguna");
console.log(dataTersimpan);
console.log(typeof dataTersimpan);

const dataDiAmbil = JSON.parse(dataTersimpan);
console.log(dataDiAmbil);
console.log(dataDiAmbil.nama);