# Day 13 — DOM Manipulation & Style Modification

Materi:

* DOM Manipulation
* `innerHTML`
* `textContent`
* `style`
* `style.color`

Pada materi ini saya belajar bagaimana mengubah isi dan tampilan elemen HTML menggunakan JavaScript.

Sebelumnya saya belajar memilih dan melakukan traversal pada elemen DOM. Sekarang elemen yang sudah dipilih dapat dimanipulasi secara langsung.

---

## Tujuan Belajar

Pada materi ini saya belajar:

* Memahami konsep DOM Manipulation.
* Mengubah isi elemen menggunakan `innerHTML`.
* Mengubah teks elemen menggunakan `textContent`.
* Mengubah style elemen menggunakan JavaScript.
* Mengubah warna teks menggunakan `style.color`.
* Memahami perbedaan `innerHTML` dan `textContent`.
* Menghubungkan DOM Selection dengan DOM Manipulation.

---

## Konsep Utama

Alur dasar DOM Manipulation:

```text
HTML
  ↓
DOM Selection
  ↓
Memilih elemen
  ↓
DOM Manipulation
  ↓
Mengubah isi / teks / style
  ↓
Tampilan halaman berubah
```

Contoh:

```javascript
const heading = document.querySelector("h1");

heading.textContent = "Belajar JavaScript";
heading.style.color = "blue";
```

JavaScript memilih elemen `<h1>`, kemudian mengubah teks dan warnanya.

---

## `textContent`

`textContent` digunakan untuk membaca atau mengubah seluruh teks yang terdapat di dalam sebuah elemen.

Contoh HTML:

```html
<h1>Judul Lama</h1>
```

JavaScript:

```javascript
const heading = document.querySelector("h1");

heading.textContent = "Judul Baru";
```

Hasil:

```html
<h1>Judul Baru</h1>
```

`textContent` berfokus pada **teks**, bukan HTML.

---

## `innerHTML`

`innerHTML` digunakan untuk membaca atau mengubah isi HTML di dalam sebuah elemen.

Contoh:

```html
<div class="container">
    <p>Paragraf lama</p>
</div>
```

JavaScript:

```javascript
const container = document.querySelector(".container");

container.innerHTML = "<p>Paragraf baru</p>";
```

JavaScript tidak hanya mengubah teks, tetapi memasukkan struktur HTML baru.

Contoh lain:

```javascript
container.innerHTML = `
    <h2>Belajar DOM</h2>
    <p>JavaScript dapat mengubah HTML.</p>
`;
```

---

## Perbedaan `textContent` dan `innerHTML`

Perbedaan utama:

| Property      | Fungsi                         |
| ------------- | ------------------------------ |
| `textContent` | Mengubah atau membaca teks     |
| `innerHTML`   | Mengubah atau membaca isi HTML |

Contoh:

```javascript
element.textContent = "<strong>Hello</strong>";
```

Hasilnya akan dianggap sebagai teks:

```text
<strong>Hello</strong>
```

Sedangkan:

```javascript
element.innerHTML = "<strong>Hello</strong>";
```

Akan membuat elemen HTML:

```html
<strong>Hello</strong>
```

Secara sederhana:

```text
textContent
    ↓
Teks

innerHTML
    ↓
HTML
```

---

## `style`

Property `style` digunakan untuk mengubah CSS inline suatu elemen melalui JavaScript.

Contoh:

```javascript
const heading = document.querySelector("h1");

heading.style.color = "blue";
```

HTML yang dihasilkan secara konsep menjadi:

```html
<h1 style="color: blue;">
    Judul
</h1>
```

---

## `style.color`

`style.color` digunakan untuk mengubah warna teks sebuah elemen.

Contoh:

```javascript
const paragraph = document.querySelector("p");

paragraph.style.color = "red";
```

Contoh lainnya:

```javascript
paragraph.style.color = "green";
```

atau:

```javascript
paragraph.style.color = "#2563eb";
```

---

## Mengubah Beberapa Style

Property `style` dapat digunakan untuk mengubah beberapa CSS sekaligus.

```javascript
const heading = document.querySelector("h1");

heading.style.color = "blue";
heading.style.backgroundColor = "lightgray";
heading.style.fontSize = "32px";
```

Perhatikan bahwa CSS:

```css
background-color
```

ditulis dalam JavaScript sebagai:

```javascript
backgroundColor
```

Karena JavaScript menggunakan penulisan property dengan **camelCase**.

---

## Contoh DOM Manipulation

HTML:

```html
<div class="card">
    <h1>Judul Lama</h1>
    <p>Deskripsi lama</p>
</div>
```

JavaScript:

```javascript
const card = document.querySelector(".card");

const heading = card.querySelector("h1");
const paragraph = card.querySelector("p");

heading.textContent = "Belajar DOM";

paragraph.innerHTML = "Saya sedang belajar <strong>JavaScript</strong>.";

heading.style.color = "blue";
```

Alurnya:

```text
.card
  ↓
Pilih h1 dan p
  ↓
Ubah isi
  ↓
Ubah teks
  ↓
Ubah warna
  ↓
Tampilan HTML berubah
```

---

## Latihan

* [ ] Mengubah teks menggunakan `textContent`.
* [ ] Mengubah HTML menggunakan `innerHTML`.
* [ ] Mengubah warna menggunakan `style.color`.
* [ ] Mengubah beberapa property CSS menggunakan `style`.
* [ ] Membandingkan hasil `innerHTML` dan `textContent`.
* [ ] Membuat latihan perubahan tampilan menggunakan JavaScript.
* [ ] Menggabungkan DOM Selection dengan DOM Manipulation.

---

## Yang Saya Pahami

Tuliskan pemahaman dengan bahasa sendiri setelah praktik.

Contoh:

> `textContent` digunakan ketika saya ingin mengubah isi berupa teks.

> `innerHTML` digunakan ketika saya ingin memasukkan atau mengubah struktur HTML di dalam suatu elemen.

> `style.color` digunakan untuk mengubah warna teks elemen melalui JavaScript.

> DOM Manipulation memungkinkan JavaScript mengubah halaman setelah elemen HTML berhasil dipilih.

---

## Visualisasi

Jika ingin menambahkan diagram proses DOM Manipulation:

```html
<p align="center">
    <img src="./images/dom-manipulation.png" width="650">
</p>
```

Contoh konsep:

```text
HTML Element
     ↓
querySelector()
     ↓
Element ditemukan
     ↓
Manipulation
     ├── textContent
     ├── innerHTML
     └── style.color
     ↓
Tampilan berubah
```

---

## Struktur File

| File         | Keterangan                       |
| ------------ | -------------------------------- |
| `index.html` | Struktur HTML untuk latihan DOM  |
| `script.js`  | Praktik DOM Manipulation         |
| `README.md`  | Dokumentasi dan ringkasan materi |
| `images/`    | Gambar atau diagram pendukung    |

---

## Progress

**No:** 13

**Materi:** DOM Manipulation & Style Modification

**Status:** In Progress

**Fokus utama:**

```text
DOM Selection
      ↓
Memilih Element
      ↓
DOM Manipulation
      ↓
innerHTML / textContent
      ↓
Style Modification
      ↓
Tampilan berubah
```

---

## Learning Log

**Tanggal:** 21 September 2026

**Fokus:** DOM Manipulation & Style Modification

**Materi:** `innerHTML`, `textContent`, `style`, dan `style.color`
