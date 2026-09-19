# Day 12 — DOM Selection & Traversal

Materi:

* DOM (Document Object Model)
* DOM Selection
* `getElementById()`
* `querySelector()`
* `querySelectorAll()`
* DOM Traversal
* `parentElement`
* `children`
* `firstElementChild`
* `lastElementChild`
* `nextElementSibling`
* `previousElementSibling`

Pada materi ini saya mulai mempelajari bagaimana JavaScript dapat menemukan dan berinteraksi dengan elemen HTML melalui DOM.

Materi ini menjadi dasar sebelum mempelajari manipulasi DOM seperti mengubah teks, mengubah style, membuat elemen, menghapus elemen, dan menangani event.

```text
alur materi DOM Selection & Traversal

A. DOM dasar
   └── document

B. DOM Selection
   ├── getElementById()
   ├── getElementsByClassName()
   ├── getElementsByTagName()
   ├── querySelector()
   └── querySelectorAll()

C. DOM Traversal
   ├── parentElement
   ├── children
   ├── firstElementChild
   ├── lastElementChild
   ├── nextElementSibling
   └── previousElementSibling

D. Latihan
   └── mencari dan berpindah antar-elemen HTML
```

---

## Tujuan Belajar

Pada materi ini saya belajar:

* Memahami konsep DOM.
* Memahami hubungan antara HTML dan DOM.
* Memilih elemen HTML menggunakan JavaScript.
* Menggunakan `getElementById()`.
* Menggunakan `querySelector()`.
* Menggunakan `querySelectorAll()`.
* Memahami hubungan parent dan child pada DOM.
* Berpindah dari satu elemen ke elemen lainnya menggunakan DOM Traversal.
* Memahami struktur DOM sebelum melakukan manipulasi.

---

## Apa Itu DOM?

DOM atau **Document Object Model** adalah representasi dokumen HTML dalam bentuk struktur objek yang dapat diakses dan dimanipulasi menggunakan JavaScript.

Contoh HTML:

```html
<div id="container">
    <h1>Belajar JavaScript</h1>
    <p>Belajar DOM</p>
</div>
```

Secara sederhana, struktur DOM dapat dibayangkan seperti:

```text
document
└── div#container
    ├── h1
    └── p
```

JavaScript dapat menggunakan struktur tersebut untuk menemukan elemen HTML tertentu.

---

## DOM Selection

DOM Selection digunakan untuk memilih atau menemukan elemen HTML dari JavaScript.

### `getElementById()`

Digunakan untuk memilih satu elemen berdasarkan `id`.

```javascript
const container = document.getElementById("container");

console.log(container);
```

HTML:

```html
<div id="container">
    <h1>Belajar JavaScript</h1>
</div>
```
jika ingin mrnghasilkan elemen:
```html
<h1 id="judul">Toko Dika</h1>
```
```javascript
console.log(judul.textContent);
```
maka hasilnya:
```text
Toko Dika
```
**Ada satu hal penting yang perlu perhatikan:**

Misalnya:
```html
<h1 id="judul">Toko Dika</h1>
```
maka javascriptnya:
```javascript
let judul = document.getElementById("judul");
```
**Hubungannya:**
```text
HTML                         JavaScript

id="judul"  ───────────────→ "judul"
                                ↓
                     getElementById()
                                ↓
                         elemen <h1>
```
Jadi `judul` pada JavaScript harus cocok dengan:
```html
id="judul"
```

Kalau HTML-nya:
```html
<h1 id="nama-toko">Toko Dika</h1>
```
maka:
```javascript
document.getElementById("judul");
```
***tidak akan menemukan elemen tersebut.***

---

### `querySelector()`

Digunakan untuk memilih elemen pertama yang sesuai dengan CSS selector.

```javascript
const heading = document.querySelector("h1");
```

Bisa juga menggunakan class:

```javascript
const card = document.querySelector(".card");
```

Atau ID:

```javascript
const container = document.querySelector("#container");
```

---

### `querySelectorAll()`

Digunakan untuk memilih semua elemen yang sesuai dengan selector.

```javascript
const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
```

Contoh:

```html
<p>Materi pertama</p>
<p>Materi kedua</p>
<p>Materi ketiga</p>
```

`querySelectorAll()` akan mengambil seluruh elemen `<p>` tersebut.

---

## DOM Traversal

DOM Traversal adalah proses berpindah dari satu elemen ke elemen lain berdasarkan hubungan antar-elemen dalam struktur DOM.

Contoh:

```text
div
├── h1
├── p
└── button
```

Jika JavaScript sedang berada pada `div`, maka `h1`, `p`, dan `button` merupakan child dari `div`.

---

## Parent dan Child

### `parentElement`

Digunakan untuk mendapatkan elemen parent.

```javascript
const heading = document.querySelector("h1");

console.log(heading.parentElement);
```

Struktur:

```text
div
└── h1
    ↑
    parentElement → div
```

---

### `children`

Digunakan untuk mendapatkan child elements.

```javascript
const container = document.querySelector("#container");

console.log(container.children);
```

Jika HTML:

```html
<div id="container">
    <h1>Judul</h1>
    <p>Paragraf</p>
</div>
```

Maka:

```text
container
├── h1
└── p
```

---

### `firstElementChild`

Mengambil child element pertama.

```javascript
const container = document.querySelector("#container");

console.log(container.firstElementChild);
```

---

### `lastElementChild`

Mengambil child element terakhir.

```javascript
const container = document.querySelector("#container");

console.log(container.lastElementChild);
```

---

### `nextElementSibling`

Mengambil elemen berikutnya yang berada pada level yang sama.

```javascript
const heading = document.querySelector("h1");

console.log(heading.nextElementSibling);
```

Contoh:

```text
div
├── h1
├── p
└── button
    ↑
    nextElementSibling dari h1 → p
```

---

### `previousElementSibling`

Mengambil elemen sebelumnya yang berada pada level yang sama.

```javascript
const button = document.querySelector("button");

console.log(button.previousElementSibling);
```

Contoh:

```text
div
├── h1
├── p
└── button
        ↑
        previousElementSibling → p
```

---

## Konsep Utama

Secara sederhana:

```text
DOM Selection
│
├── getElementById()
├── querySelector()
└── querySelectorAll()

DOM Traversal
│
├── parentElement
├── children
├── firstElementChild
├── lastElementChild
├── nextElementSibling
└── previousElementSibling
```

---

## Perbandingan Method

| Method                   | Fungsi                                      |
| ------------------------ | ------------------------------------------- |
| `getElementById()`       | Memilih elemen berdasarkan ID               |
| `querySelector()`        | Memilih elemen pertama berdasarkan selector |
| `querySelectorAll()`     | Memilih semua elemen berdasarkan selector   |
| `parentElement`          | Mengambil parent element                    |
| `children`               | Mengambil child elements                    |
| `firstElementChild`      | Mengambil child pertama                     |
| `lastElementChild`       | Mengambil child terakhir                    |
| `nextElementSibling`     | Mengambil elemen berikutnya                 |
| `previousElementSibling` | Mengambil elemen sebelumnya                 |

---

## Contoh Struktur DOM

```html
<div class="container">
    <h1>Belajar DOM</h1>
    <p>JavaScript</p>
    <button>Mulai</button>
</div>
```

Struktur sederhananya:

```text
div.container
│
├── h1
├── p
└── button
```

Dari struktur tersebut JavaScript dapat melakukan traversal:

```javascript
const container = document.querySelector(".container");

console.log(container.children);
console.log(container.firstElementChild);
console.log(container.lastElementChild);
```

---

## Latihan

* [ ] Memilih elemen menggunakan `getElementById()`.
* [ ] Memilih elemen menggunakan `querySelector()`.
* [ ] Memilih beberapa elemen menggunakan `querySelectorAll()`.
* [ ] Mendapatkan parent element.
* [ ] Mendapatkan child elements.
* [ ] Mendapatkan child pertama.
* [ ] Mendapatkan child terakhir.
* [ ] Berpindah ke sibling berikutnya.
* [ ] Berpindah ke sibling sebelumnya.
* [ ] Membuat latihan DOM sederhana menggunakan HTML, CSS, dan JavaScript.

---

## Yang Saya Pahami

Contoh:

> DOM membuat struktur HTML dapat diakses oleh JavaScript sebagai objek.

> DOM Selection digunakan untuk menemukan elemen HTML yang ingin digunakan.

> DOM Traversal digunakan untuk berpindah dari suatu elemen ke elemen lain berdasarkan hubungan dalam struktur DOM.

---

## Visualisasi

```html
<p align="center">
    <img src="./images/dom-tree.png" width="650">
</p>
```

---

## Struktur File

| File         | Keterangan                          |
| ------------ | ----------------------------------- |
| `index.html` | Struktur HTML untuk latihan DOM     |
| `script.js`  | Praktik DOM Selection dan Traversal |
| `README.md`  | Dokumentasi dan ringkasan materi    |
| `images/`    | Gambar atau diagram pendukung       |

---

## Progress

**Day:** 12

**Materi:** DOM Selection & Traversal

**Status:** In Progress

**Fokus utama:**

```text
HTML
  ↓
DOM
  ↓
Selection
  ↓
Traversal
  ↓
Manipulation
```

---

## Learning Log

**Tanggal:** 19 September 2026

**Fokus:** DOM Selection & Traversal

**Materi:** DOM, Selection, dan Traversal

**Hasil belajar:**

[Tulis apa yang berhasil dipahami setelah praktik.]

**Kesulitan:**

[Tulis bagian yang masih membingungkan.]

**Catatan penting:**

[Tulis insight atau kesalahan yang ditemukan selama latihan.]

---

## Materi Berikutnya

Day 13 — [Nama Materi]
