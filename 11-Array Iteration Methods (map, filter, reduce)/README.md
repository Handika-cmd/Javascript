# Day 11 — Array Iteration Methods

<img src="img/images array.jpg" width="auto">

Materi:

* `map()`
* `filter()`
* `reduce()`

Pada materi ini saya mulai mempelajari cara mengolah data dalam Array menggunakan method modern JavaScript.

Materi ini sedikit lebih tinggi levelnya dibanding operasi Array sebelumnya seperti `push()`, `pop()`, `splice()`, dan `slice()`.

Fokus utama bukan menghafalkan sintaks, tetapi memahami masalah yang dapat diselesaikan oleh masing-masing method.

---

## Tujuan Belajar

Pada materi ini saya belajar:

* Memahami konsep Array Iteration Methods.
* Memahami cara kerja `map()`.
* Memahami cara kerja `filter()`.
* Memahami cara kerja `reduce()`.
* Mengetahui perbedaan fungsi `map()`, `filter()`, dan `reduce()`.
* Mengolah data Array dengan cara yang lebih modern.
* Menerapkan method Array pada latihan sederhana.

---

## Konsep Utama

### `map()`

Digunakan ketika saya ingin membuat Array baru berdasarkan setiap elemen dari Array sebelumnya.

```javascript
const angka = [1, 2, 3, 4];

const hasil = angka.map(function(angka) {
    return angka * 2;
});

console.log(hasil);
```

Hasil:

```text
[2, 4, 6, 8]
```

Sederhananya:

```text
Array lama
    ↓
map()
    ↓
Setiap data diproses
    ↓
Array baru
```

---

### `filter()`

Digunakan ketika saya ingin mengambil data tertentu berdasarkan kondisi.

```javascript
const harga = [10000, 25000, 50000, 75000];

const hasil = harga.filter(function(harga) {
    return harga > 30000;
});

console.log(hasil);
```

Hasil:

```text
[50000, 75000]
```

Sederhananya:

```text
Array
  ↓
filter()
  ↓
Cek kondisi setiap data
  ↓
Ambil yang memenuhi kondisi
```

---

### `reduce()`

Digunakan ketika saya ingin mengolah seluruh data dalam Array menjadi satu nilai.

```javascript
const harga = [10000, 20000, 30000];

const total = harga.reduce(function(total, harga) {
    return total + harga;
}, 0);

console.log(total);
```

Hasil:

```text
60000
```

Sederhananya:

```text
10000
   ↓
+ 20000
   ↓
+ 30000
   ↓
60000
```

---

## Perbedaan `map()`, `filter()`, dan `reduce()`

| Method     | Tujuan                           | Hasil      |
| ---------- | -------------------------------- | ---------- |
| `map()`    | Mengubah setiap data             | Array baru |
| `filter()` | Memilih data berdasarkan kondisi | Array baru |
| `reduce()` | Menggabungkan seluruh data       | Satu nilai |

Cara mengingatnya:

```text
map()    → Ubah data
filter() → Pilih data
reduce() → Gabungkan data
```

---

## Studi Kasus

Saya mencoba menggunakan Array berisi data harga barang.

```javascript
const hargaBarang = [15000, 25000, 50000, 75000, 100000];
```

### Menggunakan `map()`

Mengubah harga menjadi harga setelah ditambahkan pajak.

### Menggunakan `filter()`

Mengambil barang dengan harga di atas nominal tertentu.

### Menggunakan `reduce()`

Menghitung total seluruh harga barang.

Konsep ini mulai mendekati cara pengolahan data yang digunakan dalam aplikasi nyata.

---

## Latihan

* [ ] Membuat Array angka.
* [ ] Menggunakan `map()`.
* [ ] Menggunakan `filter()`.
* [ ] Menggunakan `reduce()`.
* [ ] Mengolah daftar harga barang.
* [ ] Membuat filter harga di atas nominal tertentu.
* [ ] Menghitung total harga menggunakan `reduce()`.

---

## Yang Saya Pahami

Tuliskan pemahaman dengan bahasa sendiri setelah praktik.

Contoh:

> `map()` digunakan ketika saya ingin mengubah atau menghasilkan data baru dari setiap elemen Array.

> `filter()` digunakan ketika saya ingin mengambil sebagian data berdasarkan kondisi tertentu.

> `reduce()` digunakan ketika beberapa data dalam Array perlu diolah menjadi satu hasil.

---

## Hal yang Masih Membingungkan

Tuliskan bagian yang belum benar-benar dipahami.

Contoh:

* Masih perlu memahami parameter `callback`.
* Masih perlu memahami cara kerja `return`.
* Masih perlu memahami bagaimana nilai pada `reduce()` berpindah dari satu elemen ke elemen berikutnya.

---

## Struktur File

| File         | Keterangan                       |
| ------------ | -------------------------------- |
| `index.html` | Struktur halaman latihan         |
| `script.js`  | Praktik Array Iteration Methods  |
| `README.md`  | Dokumentasi dan ringkasan materi |

---

## Progress

**Day:** 11

**Materi:** Array Iteration Methods

**Status:** In Progress

**Method yang dipelajari:**

```text
map()
filter()
reduce()
```

---

## Learning Log

**Tanggal:** 17 September 2026

**Fokus:** Array Iteration Methods

**Materi:** `map()`, `filter()`, dan `reduce()`

**Hasil belajar:**

[Tulis hasil pemahaman setelah menyelesaikan latihan.]

**Catatan:**

[Tulis kesalahan, kebingungan, atau hal penting yang ditemukan selama praktik.]

---

## Materi Berikutnya

Day 12 — [Nama Materi]
