<p align="center">
  <img src="https://www.ydop.com/wp-content/uploads/2015/06/json-logo.png" width="90" alt="JavaScript Logo">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Belajar-JSON-blue?labelColor=yellow&style=for-the-badge" alt="Belajar JSON" />
  <img src="https://img.shields.io/badge/stringify()_%26_parse()-333333?style=for-the-badge" alt="stringify & parse" />
</p>

<p align="center">
  Memahami cara JavaScript mengubah Object menjadi JSON String dan sebaliknya.
</p>

---

## Target Belajar

Pada Day 16 ini saya belajar:

* Memahami apa itu JSON
* Memahami perbedaan JavaScript Object dan JSON String
* Memahami `JSON.stringify()`
* Memahami `JSON.parse()`
* Mengubah Object menjadi JSON
* Mengubah JSON kembali menjadi Object
* Mengubah Array menjadi JSON
* Mengubah JSON kembali menjadi Array
* Menggunakan JSON bersama `localStorage`
* Memahami hubungan JSON dengan penyimpanan data dan API

---

## 1. Apa Itu JSON?

**JSON (JavaScript Object Notation)** adalah format pertukaran data yang sering digunakan untuk menyimpan dan mengirim data.

Contoh JSON:

```json
{
  "nama": "Handika Saputra",
  "jurusan": "PAI",
  "semester": 2
}
```

Sekilas bentuknya mirip JavaScript Object.

Namun ada perbedaan penting.

JavaScript Object:

```javascript
const mahasiswa = {
    nama: "Handika Saputra",
    jurusan: "PAI",
    semester: 2
};
```

JSON:

```json
{
    "nama": "Handika Saputra",
    "jurusan": "PAI",
    "semester": 2
}
```

JSON pada dasarnya merupakan **data dalam bentuk teks/string**.

---

# 2. JSON.stringify()

`JSON.stringify()` digunakan untuk mengubah JavaScript Object atau Array menjadi JSON String.

Sintaks:

```javascript
JSON.stringify(data);
```

Contoh:

```javascript
const mahasiswa = {
    nama: "Handika Saputra",
    jurusan: "PAI",
    semester: 2
};

const dataJSON = JSON.stringify(mahasiswa);

console.log(dataJSON);
```

Hasil:

```text
{"nama":"Handika Saputra","jurusan":"PAI","semester":2}
```

Sekarang kita cek tipe datanya:

```javascript
console.log(typeof mahasiswa);
console.log(typeof dataJSON);
```

Hasil:

```text
object
string
```

Jadi:

```text
Object
   ↓
JSON.stringify()
   ↓
JSON String
```

---

# 3. JSON.parse()

`JSON.parse()` digunakan untuk mengubah JSON String kembali menjadi JavaScript Object atau Array.

Sintaks:

```javascript
JSON.parse(data);
```

Contoh:

```javascript
const dataJSON = '{"nama":"Handika Saputra","jurusan":"PAI","semester":2}';

const mahasiswa = JSON.parse(dataJSON);

console.log(mahasiswa);
```

Sekarang data sudah kembali menjadi Object.

```javascript
console.log(mahasiswa.nama);
console.log(mahasiswa.jurusan);
console.log(mahasiswa.semester);
```

Hasil:

```text
Handika Saputra
PAI
2
```

Alurnya:

```text
JSON String
     ↓
JSON.parse()
     ↓
JavaScript Object
```

---

# 4. stringify() vs parse()

| Method             | Dari           | Menjadi        |
| ------------------ | -------------- | -------------- |
| `JSON.stringify()` | Object / Array | JSON String    |
| `JSON.parse()`     | JSON String    | Object / Array |

Cara mengingatnya:

```text
STRINGIFY
Object → String

PARSE
String → Object
```

---

# 5. Praktik Object → JSON

```javascript
const mahasiswa = {
    nama: "Dika",
    jurusan: "PAI",
    semester: 2
};

const dataJSON = JSON.stringify(mahasiswa);

console.log(dataJSON);
console.log(typeof dataJSON);
```

Hasil:

```text
{"nama":"Dika","jurusan":"PAI","semester":2}
string
```

---

# 6. Praktik JSON → Object

```javascript
const dataJSON = '{"nama":"Dika","jurusan":"PAI","semester":2}';

const mahasiswa = JSON.parse(dataJSON);

console.log(mahasiswa);
console.log(typeof mahasiswa);

console.log(mahasiswa.nama);
console.log(mahasiswa.jurusan);
```

Hasil:

```text
{
    nama: "Dika",
    jurusan: "PAI",
    semester: 2
}

object

Dika
PAI
```

---

# 7. Menggunakan stringify() dan parse() Bersamaan

Keduanya sering digunakan secara berpasangan.

```javascript
const mahasiswa = {
    nama: "Dika",
    jurusan: "PAI",
    semester: 2
};

// Object → JSON String
const dataJSON = JSON.stringify(mahasiswa);

console.log(dataJSON);

// JSON String → Object
const dataObject = JSON.parse(dataJSON);

console.log(dataObject);
```

Alurnya:

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON String
       ↓
JSON.parse()
       ↓
JavaScript Object
```

---

# 8. JSON dengan Array

JSON juga bisa digunakan untuk Array.

Contoh:

```javascript
const mahasiswa = [
    {
        nama: "Dika",
        jurusan: "PAI"
    },
    {
        nama: "Ririn",
        jurusan: "Informatika"
    },
    {
        nama: "Budi",
        jurusan: "Manajemen"
    }
];

const dataJSON = JSON.stringify(mahasiswa);

console.log(dataJSON);
```

Kemudian JSON tersebut bisa dikembalikan menjadi Array:

```javascript
const dataObject = JSON.parse(dataJSON);

console.log(dataObject);
```

Mengakses data:

```javascript
console.log(dataObject[0].nama);
console.log(dataObject[1].jurusan);
```

Hasil:

```text
Dika
Informatika
```

---

# 9. JSON dan localStorage

JSON sangat berguna ketika menggunakan `localStorage`.

Hal ini karena `localStorage` menyimpan data dalam bentuk **string**.

Misalnya kita memiliki Object:

```javascript
const mahasiswa = {
    nama: "Dika",
    jurusan: "PAI",
    semester: 2
};
```

Kita tidak menyimpan Object secara langsung.

Gunakan:

```javascript
localStorage.setItem(
    "mahasiswa",
    JSON.stringify(mahasiswa)
);
```

Data Object diubah menjadi JSON String menggunakan:

```javascript
JSON.stringify(mahasiswa)
```

---

## Mengambil Data dari localStorage

Gunakan:

```javascript
const data = localStorage.getItem("mahasiswa");
```

Data yang didapatkan masih berupa String.

Maka kita ubah kembali:

```javascript
const mahasiswa = JSON.parse(data);
```

Sekarang kita bisa mengakses Object:

```javascript
console.log(mahasiswa.nama);
console.log(mahasiswa.jurusan);
console.log(mahasiswa.semester);
```

---

# 10. Alur JSON + localStorage

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON String
       ↓
localStorage
       ↓
JSON String
       ↓
JSON.parse()
       ↓
JavaScript Object
```

Contoh lengkap:

```javascript
const mahasiswa = {
    nama: "Dika",
    email: "dika@gmail.com",
    jurusan: "PAI",
    semester: 2
};

// Menyimpan data
localStorage.setItem(
    "mahasiswa",
    JSON.stringify(mahasiswa)
);

// Mengambil data
const data = localStorage.getItem("mahasiswa");

// Mengubah kembali menjadi Object
const dataObject = JSON.parse(data);

console.log(dataObject);
console.log(dataObject.nama);
console.log(dataObject.email);
```

---

# 11. JSON dalam Pengembangan Web

JSON tidak hanya digunakan bersama `localStorage`.

JSON juga banyak digunakan dalam komunikasi antara:

```text
Frontend
   ↓
JSON
   ↓
Backend / API
   ↓
JSON
   ↓
Frontend
```

Contoh data dari API:

```json
{
  "nama": "Handika Saputra",
  "jurusan": "PAI",
  "semester": 2
}
```

JavaScript kemudian dapat mengolah data tersebut sebagai Object.

Konsep ini nantinya akan sangat penting ketika mulai belajar:

* Fetch API
* REST API
* Backend
* Node.js
* Express.js
* Database
* Full Stack Development

---

# 12. Mini Practice

Buat sebuah Object produk:

```javascript
const produk = {
    nama: "Laptop",
    harga: 7500000,
    kategori: "Elektronik",
    tersedia: true
};
```

Kemudian:

### Task 1

Ubah Object menjadi JSON:

```javascript
const dataJSON = JSON.stringify(produk);
```

### Task 2

Tampilkan hasil JSON:

```javascript
console.log(dataJSON);
```

### Task 3

Ubah kembali JSON menjadi Object:

```javascript
const dataObject = JSON.parse(dataJSON);
```

### Task 4

Tampilkan:

```javascript
console.log(dataObject.nama);
console.log(dataObject.harga);
console.log(dataObject.kategori);
```

---

# 13. Challenge

Buat data beberapa produk:

```javascript
const produk = [
    {
        nama: "Laptop",
        harga: 7500000
    },
    {
        nama: "Mouse",
        harga: 150000
    },
    {
        nama: "Keyboard",
        harga: 350000
    }
];
```

Kemudian lakukan:

* Ubah Array menjadi JSON menggunakan `JSON.stringify()`
* Tampilkan JSON
* Ubah JSON kembali menggunakan `JSON.parse()`
* Tampilkan seluruh data
* Tampilkan nama produk pertama
* Tampilkan harga produk kedua
* Simpan JSON ke `localStorage`
* Ambil kembali data dari `localStorage`
* Parse data tersebut menjadi Array

Target akhirnya:

```text
Array
  ↓
JSON.stringify()
  ↓
JSON String
  ↓
localStorage
  ↓
JSON.parse()
  ↓
Array
```

---

# 14. Cheat Sheet

| Kebutuhan     | Kode                                                |
| ------------- | --------------------------------------------------- |
| Object → JSON | `JSON.stringify(object)`                            |
| Array → JSON  | `JSON.stringify(array)`                             |
| JSON → Object | `JSON.parse(json)`                                  |
| JSON → Array  | `JSON.parse(json)`                                  |
| Simpan JSON   | `localStorage.setItem("key", JSON.stringify(data))` |
| Ambil JSON    | `JSON.parse(localStorage.getItem("key"))`           |

### Contoh cepat

```javascript
// Object
const user = {
    nama: "Dika",
    umur: 22
};

// Object → JSON
const json = JSON.stringify(user);

// JSON → Object
const data = JSON.parse(json);

console.log(data.nama);
```

---


# Progress

### JavaScript Fundamental

* [x] Variables
* [x] Data Types
* [x] Operators
* [x] Conditional
* [x] Loops
* [x] Functions
* [x] Scope
* [x] Arrays
* [x] Objects
* [x] Array Methods
* [x] DOM
* [x] DOM Manipulation
* [x] Events
* [x] localStorage & sessionStorage
* [x] JSON
* [ ] Fetch API
* [ ] Async JavaScript
* [ ] Promise
* [ ] Error Handling
* [ ] Modules
* [ ] JavaScript Project

---

## Next

**Day 17 — Fetch API**

Setelah memahami JSON, langkah berikutnya adalah belajar bagaimana JavaScript mengambil data dari API menggunakan:

```javascript
fetch()
```

Target berikutnya:

```text
JavaScript
    ↓
fetch()
    ↓
API
    ↓
JSON
    ↓
JSON.parse()
    ↓
JavaScript
    ↓
DOM
```

---

<p align="center">
  <strong>Day 16 — JSON</strong>
  <br>
  Object → JSON → Object
</p>
