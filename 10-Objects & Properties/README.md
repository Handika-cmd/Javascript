# 📚 JavaScript Object & Property

> Learning JavaScript — Object dan Property

## 🎯 Tujuan Belajar

Pada materi ini saya belajar:

* Memahami konsep Object
* Membuat Object di JavaScript
* Memahami Property
* Mengakses Property
* Mengubah nilai Property
* Menambahkan Property baru
* Menghapus Property

## 📖 Ringkasan Materi

**Object** digunakan untuk menyimpan beberapa data yang saling berkaitan dalam bentuk **key dan value**.

Contoh:

```javascript
let mahasiswa = {
    nama: "Handika",
    umur: 22,
    jurusan: "Pendidikan Agama Islam"
};
```

Pada Object tersebut:

* `nama`, `umur`, dan `jurusan` adalah **Property**
* `"Handika"`, `22`, dan `"Pendidikan Agama Islam"` adalah **Value**

Secara sederhana:

```text
Object
│
├── nama     → "Handika"
├── umur     → 22
└── jurusan  → "Pendidikan Agama Islam"
```

## 💻 Membuat Object

Object dapat dibuat menggunakan `{}`.

```javascript
let mahasiswa = {
    nama: "Handika",
    umur: 22,
    jurusan: "Pendidikan Agama Islam"
};
```

## 🔍 Mengakses Property

Property dapat diakses menggunakan **dot notation (`.`)**.

```javascript
console.log(mahasiswa.nama);
console.log(mahasiswa.umur);
```

Output:

```text
Handika
22
```

Property juga dapat diakses menggunakan **bracket notation (`[]`)**.

```javascript
console.log(mahasiswa["nama"]);
```

Output:

```text
Handika
```

## ✏️ Mengubah Property

Nilai Property dapat diubah setelah Object dibuat.

```javascript
mahasiswa.umur = 23;
```

Sekarang nilai `umur` menjadi:

```text
23
```

## ➕ Menambahkan Property

Property baru dapat ditambahkan menggunakan assignment.

```javascript
mahasiswa.alamat = "Tangerang";
```

Object sekarang memiliki Property baru:

```javascript
{
    nama: "Handika",
    umur: 23,
    jurusan: "Pendidikan Agama Islam",
    alamat: "Tangerang"
}
```

## ❌ Menghapus Property

Property dapat dihapus menggunakan `delete`.

```javascript
delete mahasiswa.alamat;
```

Property `alamat` sekarang sudah dihapus dari Object.

## 🧠 Yang Saya Pahami

* Object digunakan untuk mengelompokkan data yang saling berkaitan.
* Object dibuat menggunakan `{}`.
* Data di dalam Object disimpan dalam bentuk **Property dan Value**.
* Property memiliki nama dan value.
* Property dapat diakses menggunakan dot notation (`.`).
* Property juga dapat diakses menggunakan bracket notation (`[]`).
* Nilai Property dapat diubah.
* Property baru dapat ditambahkan.
* Property dapat dihapus menggunakan `delete`.

## 🛠️ Latihan

* [x] Membuat Object
* [x] Membuat Property
* [x] Mengakses Property dengan dot notation
* [x] Mengakses Property dengan bracket notation
* [x] Mengubah nilai Property
* [x] Menambahkan Property
* [x] Menghapus Property

## 📂 Struktur File

| File         | Keterangan               |
| ------------ | ------------------------ |
| `index.html` | Struktur halaman latihan |
| ------------ | ------------------------ |
| `script.js`  | Praktik JavaScript       |
| ------------ | ------------------------ |
| `README.md`  | Dokumentasi materi       |

## 🚧 Tantangan

Saya masih perlu memperbanyak latihan agar lebih terbiasa membedakan Object, Property, Key, dan Value serta memahami kapan menggunakan dot notation dan bracket notation.

## ✅ Progress

|   status  |        Materi        |  Day |
|:---------:|:--------------------:|:----:|
| Selesai   | Objects & Properties | Rabu |

---

### 📌 Learning Log

**Tanggal:** 16 September 2026

**Fokus:** Object & Property

**Hasil:** Memahami cara membuat Object, membuat dan mengakses Property, serta mengubah, menambahkan, dan menghapus Property.
