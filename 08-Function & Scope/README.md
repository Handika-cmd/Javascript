# Inti konsep (ringkas)
**Function adalah blok kode yang dapat dipanggil ulang untuk melakukan tugas tertentu; menerima parameter dan bisa mengembalikan nilai.**

**Scope menentukan jangkauan variabel: di mana variabel dapat diakses — ada global scope, function scope, dan block scope (ES6: let/const).**

**Hubungan penting: closure terjadi ketika sebuah function "mengingat" lingkungan (scope) tempat ia dibuat — ini berguna untuk enkapsulasi dan state privat.**

## 1. Jenis function dan kapan pakai

### Jenis
1. Function declaration
**contoh:** function add(a,b){
        return a+b
        }
kapan pakai: Fungsi utama yang didefinisikan di top-level

2. Function expression
**contoh:** const add = function(a,b){ 
        return a+b
        }
kapan pakai: Saat ingin assign ke variabel atau pass sebagai argumen

3. Arrow function
**Contoh:** const add = (a,b) => a+b
kapan pakai: Untuk fungsi singkat; lexical this berbeda

4. IIFE
**Contoh:** (function(){ /*...*/ })()
kapan pakai: Inisialisasi modul tanpa polusi global

5. Async function
**Contoh:** async function fetchData(){ await ... }
**kapan pakai:** Untuk operasi asinkron dengan await

## 2. Scope: aturan akses variabel (dengan contoh)
**Global scope:** variabel yang dideklarasikan di luar function; dapat diakses dari mana saja.
let x = 10; // global
function show(){ console.log(x); } // 10

**Function scope:** variabel yang dideklarasikan dengan var atau di dalam function hanya terlihat di dalam function itu.

function foo(){
  var a = 1;
  console.log(a); // 1
}
console.log(typeof a); // undefined

**Block scope:** let dan const hanya terlihat di dalam blok { ... }.
if(true){
  let b = 2;
}
console.log(typeof b); // undefined

**Lexical scope:** fungsi mencari variabel di scope tempat fungsi itu didefinisikan, bukan tempat dipanggil. Ini dasar closure.