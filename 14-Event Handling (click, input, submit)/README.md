# Day 4 — Event Handling

Materi:

* Event Handling
* `click`
* `input`
* `submit`
* `addEventListener()`
* Event Object
* Event Handler
* Interaksi pengguna dengan halaman web
* Counter App
* Form Login sederhana

Pada materi ini saya belajar bagaimana JavaScript dapat merespons tindakan yang dilakukan pengguna pada halaman web.

Sebelumnya saya sudah mempelajari cara memilih elemen HTML dan memanipulasinya menggunakan DOM.

Sekarang saya mulai menghubungkan DOM dengan tindakan pengguna, seperti menekan tombol, mengetik pada input, dan mengirimkan form.

---

## Tujuan Belajar

Pada materi ini saya belajar:

* Memahami konsep Event pada JavaScript.
* Memahami Event Handler.
* Menggunakan `addEventListener()`.
* Menangani event `click`.
* Menangani event `input`.
* Menangani event `submit`.
* Mengambil nilai dari input pengguna.
* Mencegah perilaku default form menggunakan `preventDefault()`.
* Membuat interaksi sederhana antara HTML dan JavaScript.
* Membuat Counter App interaktif.
* Memahami penerapan Event Handling pada website nyata.

---

## Apa Itu Event?

Event adalah suatu kejadian yang terjadi pada halaman web sebagai akibat dari tindakan pengguna atau proses tertentu.

Contoh tindakan pengguna:

```text
Pengguna
   │
   ├── Klik tombol
   │       ↓
   │     click
   │
   ├── Mengetik
   │       ↓
   │     input
   │
   └── Mengirim form
           ↓
         submit
```

JavaScript dapat mendengarkan event tersebut dan menjalankan kode tertentu ketika event terjadi.

---

## Apa Itu Event Handling?

Event Handling adalah proses membuat JavaScript merespons suatu event.

Contoh sederhana:

```javascript
const tombol = document.querySelector("#tombol");

tombol.addEventListener("click", function() {
    console.log("Tombol diklik!");
});
```

Alurnya:

```text
Pilih tombol
    ↓
addEventListener()
    ↓
Menunggu event click
    ↓
Pengguna klik tombol
    ↓
Function dijalankan
```

---

# `addEventListener()`

`addEventListener()` digunakan untuk memberikan instruksi kepada JavaScript agar menunggu event tertentu pada sebuah elemen.

Struktur dasarnya:

```javascript
element.addEventListener("event", function() {
    // kode yang dijalankan
});
```

Contoh:

```javascript
const tombol = document.querySelector("#tombol");

tombol.addEventListener("click", function() {
    alert("Tombol diklik!");
});
```

Pada contoh tersebut:

```text
element
   ↓
tombol

event
   ↓
click

function
   ↓
kode yang dijalankan ketika tombol diklik
```

---

# Event `click`

Event `click` terjadi ketika pengguna melakukan klik pada suatu elemen.

Contoh HTML:

```html
<button id="tombol">Klik Saya</button>
```

JavaScript:

```javascript
const tombol = document.querySelector("#tombol");

tombol.addEventListener("click", function() {
    alert("Tombol diklik!");
});
```

Setiap kali tombol diklik, function akan dijalankan.

---

## Contoh Mengubah Isi Halaman

HTML:

```html
<h1 id="judul">Belum diklik</h1>
<button id="tombol">Klik</button>
```

JavaScript:

```javascript
const tombol = document.querySelector("#tombol");
const judul = document.querySelector("#judul");

tombol.addEventListener("click", function() {
    judul.textContent = "Tombol sudah diklik!";
    judul.style.color = "green";
});
```

Alurnya:

```text
User klik tombol
      ↓
Event click terjadi
      ↓
Function dijalankan
      ↓
textContent berubah
      ↓
color berubah
      ↓
Tampilan halaman berubah
```

---

# Event `input`

Event `input` terjadi ketika nilai pada elemen input berubah.

Event ini berguna ketika kita ingin mengetahui perubahan input secara langsung saat pengguna mengetik.

Contoh HTML:

```html
<input id="nama" type="text">
<p id="hasil"></p>
```

JavaScript:

```javascript
const nama = document.querySelector("#nama");
const hasil = document.querySelector("#hasil");

nama.addEventListener("input", function() {
    hasil.textContent = nama.value;
});
```

Ketika pengguna mengetik:

```text
Handika
```

Maka halaman dapat langsung menampilkan:

```text
Handika
```

Alurnya:

```text
User mengetik
      ↓
Event input
      ↓
Ambil value
      ↓
Tampilkan ke halaman
```

---

# `value`

`value` digunakan untuk mengambil nilai yang dimasukkan pengguna ke dalam elemen form seperti `<input>`.

Contoh:

```javascript
const nama = document.querySelector("#nama");

console.log(nama.value);
```

Jika pengguna mengetik:

```text
Handika
```

Maka:

```javascript
nama.value
```

menghasilkan:

```text
Handika
```

---

# Event `submit`

Event `submit` terjadi ketika sebuah form dikirim.

Contoh HTML:

```html
<form id="formLogin">

    <input
        id="username"
        type="text"
        placeholder="Username"
    >

    <input
        id="password"
        type="password"
        placeholder="Password"
    >

    <button type="submit">
        Login
    </button>

</form>
```

JavaScript:

```javascript
const formLogin = document.querySelector("#formLogin");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form dikirim!");
});
```

---

# `preventDefault()`

Secara default, browser akan melakukan perilaku tertentu ketika form dikirim.

Misalnya form dapat menyebabkan halaman melakukan reload atau berpindah halaman.

Untuk latihan JavaScript, kita sering menggunakan:

```javascript
event.preventDefault();
```

untuk mencegah perilaku default tersebut.

Contoh:

```javascript
formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form berhasil diproses oleh JavaScript");
});
```

Alurnya:

```text
User klik Login
      ↓
submit event
      ↓
preventDefault()
      ↓
Browser tidak menjalankan perilaku default
      ↓
JavaScript memproses form
```

---

# Event Object

Pada event listener, kita dapat menerima informasi tentang event melalui parameter.

Contoh:

```javascript
tombol.addEventListener("click", function(event) {
    console.log(event);
});
```

Parameter:

```javascript
event
```

merupakan object yang berisi informasi mengenai event yang terjadi.

Contoh lainnya:

```javascript
formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log(event);
});
```

Untuk tahap awal, fokus utama adalah memahami bahwa:

```text
event
   ↓
berisi informasi tentang event yang sedang terjadi
```

---

# Studi Kasus 1 — Counter App

Salah satu latihan paling sederhana untuk memahami Event Handling adalah membuat penghitung klik.

Konsep:

```text
Nilai awal
    ↓
0
    ↓
User klik tombol
    ↓
+1
    ↓
1
    ↓
User klik lagi
    ↓
+1
    ↓
2
```

Contoh HTML:

```html
<h1 id="counter">0</h1>

<button id="tambah">
    Tambah
</button>
```

JavaScript:

```javascript
let angka = 0;

const counter = document.querySelector("#counter");
const tombolTambah = document.querySelector("#tambah");

tombolTambah.addEventListener("click", function() {
    angka++;

    counter.textContent = angka;
});
```

Setiap klik akan menambah nilai:

```text
0 → 1 → 2 → 3 → 4 → 5
```

Konsep yang digunakan:

```text
Variable
   +
DOM Selection
   +
click event
   +
addEventListener()
   +
textContent
```

---

# Studi Kasus 2 — Counter App Lengkap

Counter dapat dikembangkan menjadi aplikasi sederhana dengan tombol tambah, kurang, dan reset.

Contoh tampilan:

```text
       Counter

          0

    [-]   [Reset]   [+]
```

HTML:

```html
<h1 id="counter">0</h1>

<button id="kurang">-</button>
<button id="reset">Reset</button>
<button id="tambah">+</button>
```

JavaScript:

```javascript
let angka = 0;

const counter = document.querySelector("#counter");

const tombolKurang = document.querySelector("#kurang");
const tombolReset = document.querySelector("#reset");
const tombolTambah = document.querySelector("#tambah");

tombolKurang.addEventListener("click", function() {
    angka--;
    counter.textContent = angka;
});

tombolReset.addEventListener("click", function() {
    angka = 0;
    counter.textContent = angka;
});

tombolTambah.addEventListener("click", function() {
    angka++;
    counter.textContent = angka;
});
```

Di sini saya mulai menggabungkan beberapa event pada beberapa tombol.

---

# Studi Kasus 3 — Form Login

Event Handling banyak digunakan pada form login.

Contoh alur website:

```text
User membuka halaman Login
          ↓
Mengisi Username
          ↓
Mengisi Password
          ↓
Klik Login
          ↓
submit event
          ↓
JavaScript membaca input
          ↓
Validasi
          ↓
Tampilkan hasil
```

Contoh sederhana:

```html
<form id="formLogin">

    <input
        id="username"
        type="text"
        placeholder="Username"
    >

    <input
        id="password"
        type="password"
        placeholder="Password"
    >

    <button type="submit">
        Login
    </button>

</form>

<p id="pesan"></p>
```

JavaScript:

```javascript
const formLogin = document.querySelector("#formLogin");

const username = document.querySelector("#username");
const password = document.querySelector("#password");

const pesan = document.querySelector("#pesan");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    if (username.value === "" || password.value === "") {
        pesan.textContent = "Username dan password harus diisi.";
        return;
    }

    pesan.textContent = "Form berhasil dikirim.";
});
```

Pada latihan ini saya mulai melihat bagaimana konsep Event Handling digunakan dalam aplikasi nyata.

Catatan:

Latihan ini hanya melakukan validasi sederhana di browser. Login pada website sungguhan membutuhkan backend, database, autentikasi, hashing password, session atau token, dan mekanisme keamanan lainnya.

---

# Studi Kasus 4 — Live Input

Event `input` dapat digunakan untuk membuat tampilan yang berubah secara langsung ketika pengguna mengetik.

Contoh:

```html
<input
    id="nama"
    type="text"
    placeholder="Masukkan nama"
>

<h2 id="preview"></h2>
```

JavaScript:

```javascript
const nama = document.querySelector("#nama");
const preview = document.querySelector("#preview");

nama.addEventListener("input", function() {
    preview.textContent = nama.value;
});
```

Jika pengguna mengetik:

```text
Handika
```

Maka:

```text
Preview:
Handika
```

Konsep seperti ini dapat ditemukan pada berbagai website, misalnya:

* Search box
* Live preview
* Form pendaftaran
* Pencarian produk
* Pengaturan profil
* Form komentar

---

# Penerapan pada Website Nyata

Event Handling merupakan konsep dasar dari banyak interaksi pada website.

| Website Feature      | Event yang dapat digunakan |
| -------------------- | -------------------------- |
| Tombol Like          | `click`                    |
| Tombol Login         | `submit`                   |
| Search Box           | `input`                    |
| Form Registrasi      | `submit`                   |
| Counter              | `click`                    |
| Live Search          | `input`                    |
| Tombol Menu          | `click`                    |
| Form Komentar        | `submit`                   |
| Preview Username     | `input`                    |
| Tombol Tambah Produk | `click`                    |

Contoh sederhana pada aplikasi e-commerce:

```text
User klik "Tambah ke Keranjang"
             ↓
          click
             ↓
JavaScript menjalankan function
             ↓
Jumlah produk bertambah
             ↓
Total keranjang diperbarui
```

Contoh pada halaman login:

```text
User mengisi username
             ↓
           input

User mengisi password
             ↓
           input

User klik Login
             ↓
          submit

JavaScript memproses form
```

---

# Perbedaan Event

| Event    | Kapan terjadi?             | Contoh penggunaan     |
| -------- | -------------------------- | --------------------- |
| `click`  | Ketika elemen diklik       | Tombol                |
| `input`  | Ketika nilai input berubah | Search / live preview |
| `submit` | Ketika form dikirim        | Login / registrasi    |

Cara sederhana mengingatnya:

```text
click
  → User mengklik sesuatu

input
  → User mengubah isi input

submit
  → User mengirim form
```

---

# Pola Dasar Event Handling

Hampir semua latihan Event Handling pada tahap ini mengikuti pola:

```javascript
const element = document.querySelector("...");

element.addEventListener("event", function() {

    // kode yang dijalankan ketika event terjadi

});
```

Contoh:

```javascript
const tombol = document.querySelector("#tombol");

tombol.addEventListener("click", function() {
    console.log("Klik!");
});
```

Pola ini penting untuk dipahami karena akan sering digunakan ketika mempelajari JavaScript DOM lebih lanjut.

---

# Latihan

## Latihan 1 — Button Click

* [ ] Membuat tombol HTML.
* [ ] Memilih tombol menggunakan `querySelector()`.
* [ ] Menambahkan `click` event.
* [ ] Menampilkan `alert()`.
* [ ] Mengubah teks menggunakan `textContent`.

## Latihan 2 — Input

* [ ] Membuat input.
* [ ] Mengambil nilai menggunakan `.value`.
* [ ] Menggunakan event `input`.
* [ ] Menampilkan nilai input secara langsung pada halaman.

## Latihan 3 — Form

* [ ] Membuat form.
* [ ] Menambahkan username.
* [ ] Menambahkan password.
* [ ] Menggunakan event `submit`.
* [ ] Menggunakan `preventDefault()`.
* [ ] Membuat validasi sederhana.

## Latihan 4 — Counter App

* [ ] Membuat nilai awal `0`.
* [ ] Membuat tombol tambah.
* [ ] Menambahkan event `click`.
* [ ] Menambah nilai menggunakan `++`.
* [ ] Menampilkan hasil pada halaman.
* [ ] Menambahkan tombol kurang.
* [ ] Menambahkan tombol reset.

---

# Yang Saya wajib Pahami

Contoh:

> Event adalah kejadian yang dapat dideteksi oleh JavaScript ketika pengguna berinteraksi dengan halaman.

> `addEventListener()` digunakan untuk mendengarkan event pada suatu elemen dan menjalankan function ketika event tersebut terjadi.

> `click` digunakan untuk menangani klik pengguna.

> `input` digunakan untuk mendeteksi perubahan nilai pada input.

> `submit` digunakan untuk menangani pengiriman form.

> `preventDefault()` digunakan untuk mencegah perilaku default browser, misalnya reload ketika form dikirim.
---

# Visualisasi

Diagram Event Handling dapat ditempatkan di sini.

```html
<p align="center">
    <img src="./images/event-handling.png" width="650">
</p>
```

Konsep utama:

```text
User Action
     ↓
Event
     ↓
Event Listener
     ↓
Callback Function
     ↓
JavaScript Logic
     ↓
DOM berubah
     ↓
User melihat hasil
```

---

# Struktur File

| File         | Keterangan                                 |
| ------------ | ------------------------------------------ |
| `index.html` | Struktur halaman dan elemen yang digunakan |
| `script.js`  | Praktik Event Handling                     |
| `README.md`  | Dokumentasi dan ringkasan materi           |
| `images/`    | Gambar atau diagram pendukung              |

---

# Progress

**Day:** 4

**Materi:** Event Handling

**Status:** In Progress

**Event yang dipelajari:**

```text
click
input
submit
```

**Method utama:**

```text
addEventListener()
```

**Latihan utama:**

```text
Button Event
     ↓
Input Event
     ↓
Form Submit
     ↓
Counter App
     ↓
Login Form
```

---

# Learning Log

**Tanggal:** 09/23/2026

**Fokus:** Event Handling

**Materi:** `click`, `input`, `submit`, dan `addEventListener()`

**Latihan:** Button Event, Input Event, Form Submit, Counter App

---