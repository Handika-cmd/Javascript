# ARRAY & BASIC OPERATIONS ❤️❤️❤️

> Learning JavaScript — Array dan operasi dasar Array.

## 🎯 Tujuan Belajar

Pada materi ini saya belajar:
* Memahami konsep Array
* Membuat Array
* Mengakses data berdasarkan index
* Mengubah nilai dalam Array
* Menambahkan data dengan `push()`
* Menghapus data dengan `pop()`
* menghapus atau menambahkan data dengan `splice()`

## 📖 Ringkasan Materi

Array digunakan untuk menyimpan beberapa nilai dalam satu variabel.

Contoh:

```javascript
let mahasiswa = [
    "Handika Saputra",
    "Ririn Dwi Aryanti",
    "Rahmat Ramadan"
];
```

Setiap data memiliki posisi atau **index**. Index Array dimulai dari `0`.

```javascript
console.log(mahasiswa[0]);
```

Output:

```text
Handika Saputra
```

## 💻 Array Operations

### `push()`

Digunakan untuk menambahkan data ke bagian akhir Array.

```javascript
mahasiswa.push("Abdurrahman");
```

### `pop()`

Digunakan untuk menghapus data terakhir dari Array.

```javascript
mahasiswa.pop();
```
## `splice()`
digunakan ketika kita ingin menambah, menghapus, atau mengganti data di posisi tertentu.
contoh:
let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
buah.splice(1, 1); ---> menghapus mulai dari index 1 dan jumlah dihapus 1 data.
buah.splice(2, 0, "Durian", "Srikaya"); ---> menambahkan 2 data di mulai dari index 2.
buah.splice(1, 2, "Anggur", "Manggis"); ---> mengubah 2 data di mulai dari index 1.

## 🧠 Yang Saya Pahami

* Array dapat menyimpan banyak data dalam satu variabel.
* Index Array dimulai dari `0`.
* Data Array dapat diakses menggunakan index.
* Nilai Array dapat diubah.
* `push()` menambahkan data ke akhir Array.
* `pop()` menghapus data terakhir Array.

## 🛠️ Latihan

* [x] Membuat Array
* [x] Mengakses Array berdasarkan index
* [x] Mengubah data Array
* [x] Menggunakan `push()`
* [x] Menggunakan `pop()`
* [ ] Mencoba operasi Array lainnya

## 📂 Struktur File

| File         | Keterangan               |
| ------------ | ------------------------ |
| `index.html` | Struktur halaman latihan |
| `script.js`  | Praktik JavaScript       |
| `README.md`  | Dokumentasi materi       |

## 🚧 Tantangan

Saya masih perlu memperbanyak latihan agar lebih terbiasa menggunakan berbagai operasi pada Array.

## ✅ Progress

**Status:** 🟢 Selesai

**Materi berikutnya:** [Isi setelah menentukan materi berikutnya]

---

### 📌 Learning Log

**Tanggal:** 16 September 2026

**Fokus:** Array & Array Operations

**Hasil:** Memahami konsep dasar Array, index, perubahan data, serta penggunaan `push()` dan `pop()`.
