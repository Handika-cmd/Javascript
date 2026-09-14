// === 1. FUNCTION DECLARATION (Cara Standar) ===

// Ini adalah cara membuat fungsi dengan kata kunci 'function'
// function hitungGaji(namaKaryawan, gajiPokok){
//     let pajak = gajiPokok * 0.1;
//     let gajiBersih = gajiPokok - pajak;

//     return gajiBersih;
// }

// // Cara memakai mesinnya (Memanggil/Call Function):
// let gajiRirin = hitungGaji("Ririn", 6500000);
// let gajiHandika = hitungGaji("Handika", 6500000);

// console.log("Gaji Bersih Ririn Dwi Aryanti: Rp. ", gajiRirin);
// console.log("Haji Bersih Handika Saputra: Rp. ", gajiHandika);

// ===============================================================================
// ===============================================================================
// eksperimen menghitung diskon

function hitungDiskon(harga, diskon, jumlah){
    let hargaTotal = harga * jumlah;
    let hargaDiskon = hargaTotal * 0.1;
    let hargaAkhir = hargaTotal - hargaDiskon;

    return hargaAkhir;
}

let hasil = hitungDiskon(100000, 0.1, 2);
console.log(hasil);
