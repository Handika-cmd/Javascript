// Pakai parentElement
let produk = document.querySelector(".card p");
console.log(produk);

const parent = produk.parentElement;
console.log(parent);


// Pakai children
const card = document.querySelector(".card");
console.log(card.children[0]);
console.log(card.children[1]);
console.log(card.children[2]);
console.log(card.children[0].textContent);
console.log(card.children[1].textContent);
console.log(card.children[2].textContent);
const parent1 = card.parentElement;
console.log(parent1);

produk.parentElement.style.backgroundColor = 'yellow';
produk.parentElement.style.color = 'red';