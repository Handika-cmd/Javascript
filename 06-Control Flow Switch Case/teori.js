alert("Selamat Datang di ATM!");

let inputMenu = prompt("Pilih Menu: \n1. Cek Saldo\n2. Tarik tunai\n3. Transfer\n4. Keluar");
let pilihan = Number(inputMenu);
let dana = 20000000;

switch (pilihan){
    case 1:
        alert (`Saldo anda saat ini Rp ${dana}`);
        break;
    case 2:
        let tarik = prompt("Tarik nominal Dana: ");
        let number = Number(tarik);
        alert(`anda menarik uang sebesar Rp ${tarik}. Silahkan ambil uang anda dan sisa dana anda saat ini ${dana - number}`);
        console.log(`anda menarik uang sebesar Rp ${tarik}. Silahkan ambil dana anda. Sisa dana anda saat ini ${dana - number}`);
        break;
    case 3:
        let inputtransfer = prompt("Masukkan nominal Transfer");
        let transfer = Number(inputtransfer);
        alert(`anda mengirimkan uang sebesar ${transfer}`);
        console.log(`anda mengirimkan uang sebesar ${transfer}`);
        break;
    case 4:
        alert("Terima Kasih telah menjadi bagian dari ATM");
        console.log("Terima Kasih telah menjadi bagian dari ATM");
        break;
    default:
        alert("Pilihan tidak tersedia");
        console.log("Pilihan tidak tersedia");
        break;

}

console.log("Transaksi ATM selesai.")