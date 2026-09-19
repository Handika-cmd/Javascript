// reduce()

let harga = [
  5000, 7500, 10000, 12000, 15000, 17500, 20000, 22500,
  25000, 27500, 30000, 35000, 40000, 45000, 50000
];

let totalHarga = harga.reduce(function(total, item){
    return total + item;
}, 0);

console.log("Total modal: ", totalHarga);
