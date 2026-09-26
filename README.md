<div align="center">

<img src="https://cdn.simpleicons.org/javascript/F7DF1E" width="100" alt="JavaScript Logo">

# Belajar JavaScript Fundamental

**Dokumentasi perjalanan mempelajari dasar-dasar JavaScript dari nol melalui teori, latihan, debugging, dan mini project.**

[![JavaScript](https://img.shields.io/badge/JavaScript-Fundamental-F7DF1E?logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Learning-yellow)]()
[![Focus](https://img.shields.io/badge/Focus-Programming_Fundamentals-blue)]()

</div>

---

## Tentang Repository

Repository ini digunakan untuk mempelajari **JavaScript Fundamental** secara bertahap.

Fokus utama repository adalah membangun pemahaman dasar mengenai cara kerja program, syntax JavaScript, pengolahan data, logika pemrograman, function, array, object, hingga interaksi JavaScript dengan halaman web melalui DOM.

Pembelajaran dilakukan dari konsep paling sederhana kemudian berkembang menuju latihan dan mini project.

Repository ini juga berfungsi sebagai **learning log**, sehingga tidak hanya menyimpan kode, tetapi juga mencatat konsep, latihan, kesalahan, debugging, dan hasil pembelajaran.

---

## Tujuan Pembelajaran

Setelah menyelesaikan materi fundamental, targetnya adalah mampu:

* Memahami syntax dasar JavaScript.
* Membuat dan menggunakan variable.
* Memahami berbagai tipe data.
* Menggunakan operator.
* Membuat program dengan kondisi.
* Membuat program dengan perulangan.
* Membuat dan menggunakan function.
* Mengolah data menggunakan array.
* Mengolah data menggunakan object.
* Memahami scope dasar.
* Memahami cara JavaScript bekerja pada browser.
* Mengakses dan memanipulasi DOM.
* Menangani event pengguna.
* Mengambil dan memproses input form.
* Menyimpan data sederhana di browser.
* Membaca error dan melakukan debugging.
* Menggabungkan beberapa konsep menjadi aplikasi sederhana.

---

# Roadmap JavaScript Fundamental

Roadmap disusun dari **dasar bahasa → logika pemrograman → struktur data → browser → interaksi → project**.

## 01. Pengenalan JavaScript

Materi:

* Apa itu JavaScript
* Fungsi JavaScript dalam web
* JavaScript sebagai programming language
* JavaScript di browser
* JavaScript di luar browser
* Cara menjalankan JavaScript
* Console browser
* File `.js`
* `<script>`
* Comments
* Statement
* Expression
* Syntax dasar

Contoh:

```javascript
console.log("Hello, JavaScript!");
```

---

## 02. Variable

Mempelajari cara menyimpan data.

Materi:

* Apa itu variable
* Deklarasi variable
* Assignment
* `let`
* `const`
* `var`
* Perbedaan `let`, `const`, dan `var`
* Reassignment
* Naming convention
* Identifier
* Variable initialization

Contoh:

```javascript
let nama = "Dika";
const umur = 22;
```

---

## 03. Data Types

Mengenal jenis data yang digunakan JavaScript.

Materi:

* String
* Number
* Boolean
* Undefined
* Null
* Object
* Array
* `typeof`
* Primitive data
* Reference data secara pengenalan

Contoh:

```javascript
const nama = "Dika";
const umur = 22;
const mahasiswa = true;

console.log(typeof nama);
console.log(typeof umur);
console.log(typeof mahasiswa);
```

---

## 04. Input & Output

Mempelajari cara menerima dan menampilkan data.

Materi:

* `console.log()`
* `console.error()`
* `console.warn()`
* `alert()`
* `prompt()`
* `confirm()`
* Input dari HTML secara pengenalan

Contoh:

```javascript
const nama = prompt("Siapa nama kamu?");

console.log(`Halo, ${nama}`);
```

---

## 05. Operators

Mempelajari operasi terhadap data.

Materi:

### Arithmetic Operator

```text
+
-
*
/
%
**
```

### Assignment Operator

```text
=
+=
-=
*=
/=
```

### Comparison Operator

```text
>
<
>=
<=
==
===
!=
!==
```

### Logical Operator

```text
&&
||
!
```

### Increment & Decrement

```text
++
--
```

Termasuk memahami perbedaan sederhana antara:

```javascript
i++
```

dan:

```javascript
++i
```

---

## 06. String

Mempelajari pengolahan teks.

Materi:

* String literal
* Single quote
* Double quote
* Template literal
* Concatenation
* String length
* Access character
* `toUpperCase()`
* `toLowerCase()`
* `trim()`
* `includes()`
* `slice()`
* `replace()`

Contoh:

```javascript
const nama = "Dika";

console.log(nama.toUpperCase());
```

---

## 07. Number & Math

Mempelajari pengolahan angka.

Materi:

* Number
* Operasi matematika
* Decimal
* NaN
* Infinity
* `Math.round()`
* `Math.floor()`
* `Math.ceil()`
* `Math.random()`
* `Math.max()`
* `Math.min()`

---

## 08. Conditional

Mempelajari bagaimana program membuat keputusan.

Materi:

* `if`
* `else`
* `else if`
* Nested `if`
* Multiple conditions
* Comparison
* Logical condition
* Ternary operator sebagai pengenalan
* `switch`

Contoh:

```javascript
const nilai = 80;

if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("Belum lulus");
}
```

---

## 09. Loop

Mempelajari perulangan.

Materi:

* Konsep loop
* `for`
* Initialization
* Condition
* Increment
* `while`
* `do...while`
* Nested loop
* `break`
* `continue`

Contoh:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Fokus utama:

```text
i = 1
   ↓
cek kondisi
   ↓
jalankan kode
   ↓
i++
   ↓
cek kondisi lagi
```

---

## 10. Function

Mempelajari cara membuat kode yang dapat digunakan kembali.

Materi:

* Apa itu function
* Function declaration
* Function call
* Parameter
* Argument
* Return
* Function expression
* Arrow function sebagai pengenalan
* Default parameter
* Scope dasar

Contoh:

```javascript
function sapa(nama) {
    return `Halo, ${nama}`;
}

const hasil = sapa("Dika");

console.log(hasil);
```

---

## 11. Scope

Memahami jangkauan variable.

Materi:

* Global scope
* Local scope
* Block scope
* Function scope
* Scope pada `let`
* Scope pada `const`
* Scope pada `var`

Contoh:

```javascript
let nama = "Dika";

if (true) {
    let umur = 22;

    console.log(nama);
    console.log(umur);
}
```

---

## 12. Array

Mempelajari struktur data untuk menyimpan banyak nilai.

Materi:

* Membuat array
* Index
* Access element
* Modify element
* Array length
* Menambah data
* Menghapus data
* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `slice()`
* `splice()`

Contoh:

```javascript
const buah = ["Apel", "Mangga", "Jeruk"];

console.log(buah[0]);
```

---

## 13. Array Iteration

Mempelajari cara melakukan perulangan pada array.

Materi:

* `for`
* `for...of`
* `forEach()`
* Pengenalan `map()`
* Pengenalan `filter()`
* Pengenalan `find()`

Contoh:

```javascript
const buah = ["Apel", "Mangga", "Jeruk"];

buah.forEach((item) => {
    console.log(item);
});
```

Fokus awal tetap pada pemahaman **array dan perulangan**, bukan langsung mengejar banyak array methods.

---

## 14. Object

Mempelajari struktur data berbentuk property dan value.

Materi:

* Object literal
* Property
* Value
* Access property
* Dot notation
* Bracket notation
* Modify property
* Add property
* Delete property
* Nested object
* Object method

Contoh:

```javascript
const mahasiswa = {
    nama: "Dika",
    jurusan: "PAI",
    semester: 2
};

console.log(mahasiswa.nama);
```

---

## 15. Array & Object

Menggabungkan dua struktur data penting.

Materi:

* Array berisi object
* Object berisi array
* Mengakses nested data
* Loop array of objects
* Mengubah data
* Mencari data sederhana

Contoh:

```javascript
const mahasiswa = [
    {
        nama: "Dika",
        jurusan: "PAI"
    },
    {
        nama: "Andi",
        jurusan: "Informatika"
    }
];

console.log(mahasiswa[0].nama);
```

Konsep ini penting karena banyak data aplikasi nyata memiliki struktur seperti ini.

---

# JavaScript di Browser

Setelah fundamental bahasa dipahami, pembelajaran mulai menghubungkan JavaScript dengan HTML.

## 16. DOM Introduction

Materi:

* Apa itu DOM
* HTML menjadi DOM
* Document
* Element
* Node
* DOM tree
* JavaScript dan DOM

Konsep:

```text
HTML
  ↓
Browser
  ↓
DOM
  ↓
JavaScript
```

---

## 17. DOM Selection

Mempelajari cara memilih element HTML.

Materi:

* `getElementById()`
* `querySelector()`
* `querySelectorAll()`
* Class selector
* ID selector
* Element selector

Contoh:

```javascript
const judul = document.querySelector("h1");

console.log(judul);
```

---

## 18. DOM Traversal

Mempelajari hubungan antar-element.

Materi:

* Parent
* Child
* Children
* Sibling
* `parentElement`
* `children`
* `nextElementSibling`
* `previousElementSibling`

---

## 19. DOM Manipulation

Mempelajari cara mengubah HTML menggunakan JavaScript.

Materi:

* `textContent`
* `innerHTML`
* `innerText`
* `style`
* `classList`
* `add()`
* `remove()`
* `toggle()`
* Attribute
* `setAttribute()`
* `getAttribute()`

Contoh:

```javascript
const judul = document.querySelector("h1");

judul.textContent = "Belajar JavaScript";
```

---

## 20. Create & Remove Element

Mempelajari cara membuat element HTML melalui JavaScript.

Materi:

* `createElement()`
* `append()`
* `appendChild()`
* `prepend()`
* `remove()`

Contoh:

```javascript
const item = document.createElement("li");

item.textContent = "Belajar JavaScript";

document.querySelector("ul").append(ite
```