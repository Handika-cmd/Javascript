# Day 15 — Browser localStorage & sessionStorage

Materi:

* Browser Storage
* `localStorage`
* `sessionStorage`
* `setItem()`
* `getItem()`
* `removeItem()`
* Menyimpan data di browser
* Menyimpan pilihan tema pengguna
* Membuat Theme Switcher sederhana

Pada materi ini saya belajar bagaimana JavaScript dapat menyimpan data sederhana di browser menggunakan Web Storage API.

Materi ini berbeda dari variable biasa. Data yang disimpan menggunakan `localStorage` dapat tetap tersedia ketika halaman ditutup dan dibuka kembali.

---

# Tujuan Belajar

Pada materi ini saya belajar:

* Memahami konsep Browser Storage.
* Memahami perbedaan `localStorage` dan `sessionStorage`.
* Menyimpan data menggunakan `setItem()`.
* Mengambil data menggunakan `getItem()`.
* Menghapus data menggunakan `removeItem()`.
* Menyimpan pilihan pengguna di browser.
* Membuat fitur penyimpanan tema menggunakan `localStorage`.
* Menghubungkan Browser Storage dengan DOM dan Event Handling.

---

# Apa Itu Browser Storage?

Browser Storage adalah mekanisme yang memungkinkan website menyimpan data sederhana di browser pengguna.

Salah satu API yang disediakan browser adalah:

```text
Web Storage API
│
├── localStorage
│
└── sessionStorage
```

Data tersebut disimpan oleh browser dan dapat diakses kembali menggunakan JavaScript.

Contoh sederhana:

```javascript
localStorage.setItem("nama", "Handika");
```

Kemudian data tersebut dapat diambil kembali:

```javascript
const nama = localStorage.getItem("nama");

console.log(nama);
```

Hasil:

```text
Handika
```

---

# localStorage

`localStorage` digunakan untuk menyimpan data yang tetap tersedia meskipun halaman ditutup atau browser dimuat kembali.

Contoh:

```javascript
localStorage.setItem("nama", "Handika");
```

Setelah browser ditutup:

```text
Browser ditutup
     ↓
Browser dibuka kembali
     ↓
Website dibuka
     ↓
Data localStorage masih tersedia
```

Contoh penggunaan:

* Pilihan tema
* Preferensi bahasa
* Pengaturan tampilan
* Data sederhana aplikasi
* Preferensi pengguna

---

# sessionStorage

`sessionStorage` juga digunakan untuk menyimpan data di browser, tetapi masa hidup datanya berbeda.

Data `sessionStorage` biasanya tersedia selama sesi halaman/tab tersebut.

Contoh:

```javascript
sessionStorage.setItem("nama", "Handika");
```

Secara sederhana:

```text
localStorage
    ↓
Data dapat bertahan setelah browser/page ditutup
    ↓
Sampai data dihapus

sessionStorage
    ↓
Data digunakan selama session/tab
    ↓
Session berakhir → data hilang
```

---

# Perbandingan localStorage dan sessionStorage

| Fitur                            | `localStorage`                   | `sessionStorage` |
| -------------------------------- | -------------------------------- | ---------------- |
| Menyimpan data                   | Ya                               | Ya               |
| Menggunakan key-value            | Ya                               | Ya               |
| Bertahan setelah reload          | Ya                               | Ya               |
| Bertahan setelah browser ditutup | Umumnya ya                       | Tidak            |
| Berlaku selama session/tab       | Tidak terbatas pada satu session | Ya               |
| Cocok untuk preferensi pengguna  | Ya                               | Tidak selalu     |

Catatan:

Keduanya digunakan untuk data sederhana di sisi browser dan bukan pengganti database untuk aplikasi web yang membutuhkan penyimpanan data server.

---

# `setItem()`

`setItem()` digunakan untuk menyimpan data.

Sintaks:

```javascript
localStorage.setItem("key", "value");
```

Contoh:

```javascript
localStorage.setItem("nama", "Handika");
```

Artinya:

```text
key
 ↓
nama

value
 ↓
Handika
```

Data disimpan dalam pasangan:

```text
key → value
```

---

# `getItem()`

`getItem()` digunakan untuk mengambil data berdasarkan key.

Contoh:

```javascript
localStorage.setItem("nama", "Handika");

const nama = localStorage.getItem("nama");

console.log(nama);
```

Hasil:

```text
Handika
```

Jika key tidak ditemukan:

```javascript
const data = localStorage.getItem("alamat");

console.log(data);
```

Hasilnya:

```text
null
```

---

# `removeItem()`

`removeItem()` digunakan untuk menghapus data berdasarkan key.

Contoh:

```javascript
localStorage.setItem("nama", "Handika");

localStorage.removeItem("nama");
```

Setelah dihapus:

```javascript
console.log(localStorage.getItem("nama"));
```

Hasil:

```text
null
```

---

# Alur Dasar localStorage

Secara sederhana:

```text
Menyimpan
    ↓
setItem()

Mengambil
    ↓
getItem()

Menghapus
    ↓
removeItem()
```

Contoh lengkap:

```javascript
localStorage.setItem("tema", "dark");

const tema = localStorage.getItem("tema");

console.log(tema);

localStorage.removeItem("tema");
```

---

# Data yang Disimpan

Web Storage menyimpan data dalam bentuk string.

Contoh:

```javascript
localStorage.setItem("umur", 22);
```

Ketika diambil:

```javascript
const umur = localStorage.getItem("umur");

console.log(umur);
```

Nilainya akan diperoleh sebagai string.

Jika membutuhkan tipe data tertentu, JavaScript dapat melakukan konversi.

Contoh:

```javascript
const umur = Number(localStorage.getItem("umur"));
```

Untuk object dan Array, biasanya digunakan:

```javascript
JSON.stringify()
```

dan:

```javascript
JSON.parse()
```

Contoh:

```javascript
const mahasiswa = {
    nama: "Handika",
    umur: 22
};

localStorage.setItem(
    "mahasiswa",
    JSON.stringify(mahasiswa)
);
```

Mengambil kembali:

```javascript
const data = JSON.parse(
    localStorage.getItem("mahasiswa")
);

console.log(data.nama);
```

Pada materi ini fokus utama masih pada penyimpanan data sederhana menggunakan key-value.

---

# Studi Kasus — Menyimpan Pilihan Tema

Salah satu penggunaan `localStorage` yang umum adalah menyimpan pilihan tema website.

Contoh:

```text
User memilih Dark Mode
        ↓
JavaScript menangkap click
        ↓
Tema berubah
        ↓
localStorage menyimpan "dark"
        ↓
User reload halaman
        ↓
JavaScript membaca localStorage
        ↓
Dark Mode diterapkan kembali
```

Tanpa `localStorage`:

```text
User pilih Dark Mode
        ↓
Reload
        ↓
Tema kembali ke default
```

Dengan `localStorage`:

```text
User pilih Dark Mode
        ↓
Reload
        ↓
Dark Mode tetap aktif
```

---

# Contoh Menyimpan Tema

HTML:

```html
<button id="themeButton">
    Ganti Tema
</button>
```

JavaScript:

```javascript
const themeButton = document.querySelector("#themeButton");

themeButton.addEventListener("click", function() {
    localStorage.setItem("theme", "dark");
});
```

Data:

```text
key
 ↓
theme

value
 ↓
dark
```

---

# Membaca Tema Saat Halaman Dibuka

JavaScript:

```javascript
const savedTheme = localStorage.getItem("theme");

console.log(savedTheme);
```

Jika sebelumnya pengguna memilih dark mode:

```text
savedTheme
    ↓
"dark"
```

JavaScript kemudian dapat menerapkan tema tersebut.

---

# Menghapus Tema

Untuk menghapus preferensi tema:

```javascript
localStorage.removeItem("theme");
```

Setelah itu:

```javascript
const savedTheme = localStorage.getItem("theme");

console.log(savedTheme);
```

Hasil:

```text
null
```

---

# Studi Kasus Website Nyata

Konsep Browser Storage dapat digunakan pada berbagai fitur website.

| Fitur Website       | Contoh Storage   |
| ------------------- | ---------------- |
| Dark Mode           | `localStorage`   |
| Light/Dark Theme    | `localStorage`   |
| Bahasa website      | `localStorage`   |
| Preferensi tampilan | `localStorage`   |
| Data sementara form | `sessionStorage` |
| Status UI sementara | `sessionStorage` |
| Pengaturan pengguna | `localStorage`   |

Contoh website:

```text
Website
   ↓
User memilih tema
   ↓
JavaScript
   ↓
localStorage.setItem()
   ↓
Browser menyimpan pilihan
   ↓
User membuka kembali website
   ↓
localStorage.getItem()
   ↓
Tema diterapkan kembali
```

---

# Perbedaan dengan Variable

Variable biasa:

```javascript
let tema = "dark";
```

Ketika halaman dimuat ulang, nilai tersebut akan dibuat ulang berdasarkan kode JavaScript.

Sedangkan:

```javascript
localStorage.setItem("tema", "dark");
```

menyimpan data pada browser sehingga data tersebut dapat dibaca kembali ketika halaman dimuat ulang.

Secara sederhana:

```text
Variable
    ↓
Data selama JavaScript berjalan

localStorage
    ↓
Data disimpan oleh browser
```

---

# Latihan

## Latihan 1 — setItem()

* [ ] Menyimpan nama menggunakan `localStorage`.
* [ ] Menyimpan tema menggunakan `localStorage`.
* [ ] Menyimpan data menggunakan `sessionStorage`.

## Latihan 2 — getItem()

* [ ] Mengambil data dari `localStorage`.
* [ ] Menampilkan data ke console.
* [ ] Menampilkan data ke halaman HTML.

## Latihan 3 — removeItem()

* [ ] Menghapus data berdasarkan key.
* [ ] Memeriksa hasil setelah data dihapus.

## Latihan 4 — Theme Storage

* [ ] Membuat tombol perubahan tema.
* [ ] Mengubah tampilan halaman.
* [ ] Menyimpan tema menggunakan `localStorage`.
* [ ] Membaca tema ketika halaman dibuka.
* [ ] Menerapkan tema yang tersimpan.
* [ ] Membuat tombol reset tema.

---

# Yang Saya Pahami


> `localStorage` digunakan untuk menyimpan data sederhana di browser yang dapat tetap tersedia setelah halaman dimuat kembali.

> `sessionStorage` digunakan untuk menyimpan data selama session/tab berlangsung.

> `setItem()` digunakan untuk menyimpan data.

> `getItem()` digunakan untuk mengambil data.

> `removeItem()` digunakan untuk menghapus data berdasarkan key.

> `localStorage` dapat digunakan untuk menyimpan preferensi pengguna seperti pilihan tema.

---

# Hal yang Masih Membingungkan

Tuliskan bagian yang belum benar-benar dipahami.

Contoh:

* Masih perlu memahami perbedaan `localStorage` dan `sessionStorage`.
* Masih perlu memahami bagaimana browser menyimpan data.
* Masih perlu memahami penyimpanan Array dan Object menggunakan JSON.
* Masih perlu memahami kapan sebaiknya menggunakan Browser Storage dan database.

---

# Visualisasi

Diagram Browser Storage dapat ditempatkan di sini.

```html
<p align="center">
    <img src="./images/browser-storage.png" width="650">
</p>
```

Konsep utama:

```text
JavaScript
    ↓
Web Storage API
    ↓
┌───────────────────────┐
│                       │
│    localStorage       │
│    sessionStorage     │
│                       │
└───────────────────────┘
    ↓
Browser
```

---

# Struktur File

```text
15-browser-storage/
│
├── README.md
├── index.html
├── style.css
├── script.js
└── images/
    └── browser-storage.png
```

| File         | Keterangan                                |
| ------------ | ----------------------------------------- |
| `index.html` | Struktur halaman dan elemen aplikasi      |
| `style.css`  | Styling halaman dan tema                  |
| `script.js`  | Logika Browser Storage dan Theme Switcher |
| `README.md`  | Dokumentasi dan ringkasan materi          |
| `images/`    | Gambar atau diagram pendukung             |

---

# Progress

**No:** 15

**Materi:** Browser localStorage & sessionStorage

**Status:** In Progress

**API yang dipelajari:**

```text
localStorage
sessionStorage
```

**Method yang dipelajari:**

```text
setItem()
getItem()
removeItem()
```

**Studi kasus:**

```text
Theme Switcher
     ↓
Simpan pilihan tema
     ↓
localStorage
     ↓
Baca kembali saat halaman dibuka
```

---

# Learning Log

**Tanggal:** 24/09/2026

**Fokus:** Browser localStorage & sessionStorage

**Materi:** `setItem()`, `getItem()`, `removeItem()`

**Studi kasus:** Menyimpan pilihan tema pengguna.

---

# Materi Berikutnya

Day 16 — [Nama Materi]

---

# Mini Project — Theme Switcher

Bagian ini berisi implementasi lengkap dari materi Day 15.

Project terdiri dari:

```text
HTML
+
CSS
+
JavaScript
+
localStorage
```

Fitur:

* Mengubah tema Light/Dark.
* Menyimpan pilihan tema.
* Mengambil tema ketika halaman dibuka kembali.
* Menghapus preferensi menggunakan tombol Reset.

## `index.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Theme Switcher</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <main class="container">

        <h1 id="judul">Theme Switcher</h1>

        <p id="deskripsi">
            Pilihan tema akan disimpan di browser.
        </p>

        <div class="buttons">

            <button id="lightButton">
                Light Mode
            </button>

            <button id="darkButton">
                Dark Mode
            </button>

            <button id="resetButton">
                Reset Tema
            </button>

        </div>

        <p id="status"></p>

    </main>

    <script src="script.js"></script>

</body>
</html>
```

## `style.css`

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;

    background-color: #f5f5f5;
    color: #222;

    transition:
        background-color 0.3s,
        color 0.3s;
}

.container {
    max-width: 600px;

    margin: 100px auto;
    padding: 40px;

    text-align: center;

    background-color: white;

    border-radius: 12px;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.buttons {
    display: flex;

    justify-content: center;

    gap: 10px;

    margin-top: 30px;
}

button {
    padding: 10px 16px;

    border: none;

    border-radius: 6px;

    cursor: pointer;
}

button:hover {
    opacity: 0.8;
}

/* Dark Mode */

body.dark {
    background-color: #181818;
    color: #f5f5f5;
}

body.dark .container {
    background-color: #242424;
}

#status {
    margin-top: 25px;

    font-size: 14px;
}
```

## `script.js`

```javascript
const lightButton = document.querySelector("#lightButton");
const darkButton = document.querySelector("#darkButton");
const resetButton = document.querySelector("#resetButton");

const status = document.querySelector("#status");


// Mengubah tema menjadi Light
lightButton.addEventListener("click", function() {

    document.body.classList.remove("dark");

    localStorage.setItem("theme", "light");

    status.textContent = "Light Mode aktif.";

});


// Mengubah tema menjadi Dark
darkButton.addEventListener("click", function() {

    document.body.classList.add("dark");

    localStorage.setItem("theme", "dark");

    status.textContent = "Dark Mode aktif.";

});


// Menghapus tema yang tersimpan
resetButton.addEventListener("click", function() {

    localStorage.removeItem("theme");

    document.body.classList.remove("dark");

    status.textContent = "Tema dikembalikan ke default.";

});


// Membaca tema ketika halaman pertama kali dibuka
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    status.textContent = "Dark Mode dipulihkan dari localStorage.";

}


if (savedTheme === "light") {

    document.body.classList.remove("dark");

    status.textContent = "Light Mode dipulihkan dari localStorage.";

}
```

---

# Cara Menjalankan Mini Project

Pastikan ketiga file berada dalam satu folder:

```text
15-browser-storage/
│
├── index.html
├── style.css
└── script.js
```

Kemudian buka:

```text
index.html
```

di browser.

Coba urutan berikut:

```text
1. Buka website
       ↓
2. Klik Dark Mode
       ↓
3. Tutup / reload halaman
       ↓
4. Dark Mode masih aktif
       ↓
5. Klik Reset Tema
       ↓
6. Tema kembali ke default
```

---

# Eksperimen

Setelah mini project berhasil, coba ubah kode sendiri.

Beberapa eksperimen:

* [ ] Ganti nama key `theme`.
* [ ] Tambahkan tema lain.
* [ ] Tambahkan tombol `Auto`.
* [ ] Simpan waktu terakhir tema diubah.
* [ ] Tampilkan tema yang sedang aktif.
* [ ] Coba gunakan `sessionStorage` sebagai pengganti `localStorage`.
* [ ] Bandingkan perilaku `localStorage` dan `sessionStorage`.

Tujuan eksperimen bukan menghafalkan kode, tetapi memahami hubungan:

```text
User Action
     ↓
Event
     ↓
JavaScript
     ↓
localStorage
     ↓
Browser menyimpan data
     ↓
Halaman dibuka kembali
     ↓
getItem()
     ↓
Data digunakan kembali
```
