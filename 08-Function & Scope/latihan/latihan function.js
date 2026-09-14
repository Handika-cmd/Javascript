// latihan menghitung DrumstickIcon
function hitungDiskon(harga, diskon, jumlah){
    let hargaTotal = 100000 * 5;
    let hargaDiskon = hargaTotal * 0.2;
    let hargaAkhir = hargaTotal - hargaDiskon;

    return hargaAkhir;
}

let hasil2 = hitungDiskon(100000, 0.2, 5);
console.log(hasil2);

// hitung umur
function hitungUmur(umurLahir){
    umur = 2026 - umurLahir;
    return umur;
}

let hasil = hitungUmur(22);
console.log(hasil);