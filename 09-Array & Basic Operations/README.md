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
```javascript
contoh:
let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
buah.splice(1, 1); ---> menghapus mulai dari index 1 dan jumlah dihapus 1 data.
buah.splice(2, 0, "Durian", "Srikaya"); ---> menambahkan 2 data di mulai dari index 2.
buah.splice(1, 2, "Anggur", "Manggis"); ---> mengubah 2 data di mulai dari index 1.
```

## `slice()`
* slice() → menyalin sebagian data dari array tanpa mengubah array asli.
```javascript
let makanan = ["Pizza", "Spageti", "Mie", "Bakso", "Sate"];

let hasil = makanan.slice(1, 4);
```
artinya:
```javascript
slice(1, 4)
      ↑  ↑
    mulai sampai sebelum index 4
```
Index-nya:
```javascript
0        1         2       3        4
Pizza  Spageti    Mie    Bakso    Sate

Maka yang diambil:
Spageti → Mie → Bakso
```
`hasil` menjadi:
```javascript
["Spageti", "Mie", "Bakso"]

`perlu diingat`: Index awal masuk, index akhir tidak masuk. bukan 4.
```
nah jika hanya menggunakan satu angka saja slice(2), maka:
```javascript
mulai dari index 2 sampai akhir.
```
contoh hanya 1 angka saja:
```javascript
let buah = ["Apel", "Mangga", "Jeruk", "Pisang", "Anggur"];

let hasil = buah.slice(2);
// maka hasilnya:
["Jeruk", "Pisang", "Anggur"]
```
Index array:
```javascript
0        1         2        3        4
Apel   Mangga    Jeruk    Pisang   Anggur
                    ↑
                 mulai dari 2

Mulai dari index 2, ambil semuanya sampai akhir.
```

jika hanya `slice()` aja, maka: semua isi array

## 🧠 Yang Saya Pahami

* Array dapat menyimpan banyak data dalam satu variabel.
* Index Array dimulai dari `0`.
* Data Array dapat diakses menggunakan index.
* Nilai Array dapat diubah.
* `push()` menambahkan data ke akhir Array.
* `pop()` menghapus data terakhir Array.
* `splice()` menambah atau menghapus atau mengubah data array.
* `slice()` Menyalin atau mengaambil data Array.

## 🛠️ Latihan

* [x] Membuat Array
* [x] Mengakses Array berdasarkan index
* [x] Mengubah data Array
* [x] Menggunakan `push()`
* [x] Menggunakan `pop()`
* [x] Menggunakan `splice()`
* [x] Menggunakan `slice()`
* [x] Mencoba operasi Array lainnya

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
