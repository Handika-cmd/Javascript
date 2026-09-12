// Latihan menggabungkan materi yang telah dipelajari 01-08

function hitungGaji (nama_Karyawan, gajiPokok, tunjangan, lembur, bonus, potonganLain){
    let pajak = gajiPokok * 0.1;
    let totalPendapatan = gajiPokok + tunjangan + lembur + bonus + potonganLain;
    let gajiBersih = totalPendapatan - pajak - potonganLain;

    let status;
    if (gajiBersih >= 10000000){
        status = "Gaji Tinggi";
    }
    else if (gajiBersih >= 7000000){
        status = "Gaji Menengah";
    }
    else{
        status = "Gaji Rendah";
    }

    return{
        nama: nama,
        gajiBersih: gajiBersih,
        status: status
    }
}