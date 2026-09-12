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

let daftarKaryawan = [
    {nama: "Ririn", gajiPokok: 6800000, tunjangan: 1000000, lembur: 500000, bonus: 1500000, potongan: 700000},
    {nama: "Handika", gajiPokok: 7500000, tunjangan: 1200000, lembur: 600000, bonus: 1000000, potongan: 800000},
    {nama: "Budi", gajiPokok: 5000000, tunjangan: 800000, lembur: 300000, bonus: 500000, potongan: 600000}
];

for(let i = 0; i < daftarKaryawan.length; i++){
    let karyawan = daftarKaryawan[i];
    let hasil = hitungGaji(
        karyawan.nama,
        karyawan.gajiPokok,
        karyawan.tunjangan,
        karyawan.lembur,
        karyawan.bonus,
        karyawan.potongan
    );

    console.log(`Nama: ${hasil.nama}`);
    console.log(`Gaji Bersih: Rp ${hasil.gajiBersih}`);
    console.log(`Status: ${hasil.status}`);
    console.log("---------------------------");
}