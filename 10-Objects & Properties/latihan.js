let biodata = {
    nama: "Handika",
    tempatLahir: "Tempirai",
    umur: 22,
    identitas: "Mahasiswa"
};

console.log("Biodata: ", biodata);

console.log(biodata.nama);
console.log(biodata.tempatLahir);
console.log(biodata.umur);
console.log(biodata.identitas);

// =======================================================
// Latihan ke 2 - Mengubah Property
let biodata1 ={
    nama1: "Handika",
    umur1: 22,
    jurusan: "Teknik Informatika"
};
console.log("Nama Sebelum: ", biodata1.nama1);
console.log("Umur sebelum: ",biodata1.umur1);
console.log("jurusan Sebelum: ", biodata1.jurusan);

// Saatnya kita mengubah property
biodata1.umur1 = 23;
biodata1.jurusan = "PAI";
biodata1.nama1 = "Handika Saputra";

console.log("Nama setelah: ",biodata1.nama1);
console.log("Umur setelah: ",biodata1.umur1);
console.log("Jurusan Sebelum: ",biodata1.jurusan);

// Latihan ke 3 Menambahkan Property
let mahasiswa = {
    nama : "handika",
    umur : 22
    
};
mahasiswa.semester = 3;
mahasiswa.jurusan = "Pendidikan Agama Islam";
mahasiswa.hobi = "Pemrograman";

console.log("Sebelum dihapus: ", mahasiswa);
console.log("Nama: ", mahasiswa.nama);
console.log("Umur: ", mahasiswa.umur);
console.log("Jurusan: ", mahasiswa.jurusan);
console.log("Semester: ", mahasiswa.semester);
console.log("Hobi: ", mahasiswa.hobi);

// Kita menghapus propertynya
delete mahasiswa.hobi;
delete mahasiswa.umur;

console.log("Setelah dihapus: ", mahasiswa)

// Kita menggunakan Bracket Notation
console.log(mahasiswa["nama"]);
console.log(mahasiswa["jurusan"]);
console.log(mahasiswa["semester"]);