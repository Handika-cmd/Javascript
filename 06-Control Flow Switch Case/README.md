# Control Flow: Switch Case

*Target Materi*: Menggunakan switch statement untuk pengecekan kondisi yang memiliki banyak opsi spesifik (nilai pasti).

*Penjelasan Singkat:*
Ketika kamu harus mengecek satu variabel terhadap banyak nilai pasti (misalnya pilihan menu 1, 2, 3, 4), menulis if-else if yang panjang akan membuat kode sulit dibaca. Di sinilah switch case sangat berguna.

*Aturan Main Switch:*
1. switch (variabel) : Memasukkan variabel yang ingin dicek nilainya.
2. case nilai: : Jika variabel sama dengan nilai ini, jalankan kode di bawahnya.
3. break; SANGAT PENTING! Ini untuk menghentikan pengecekan. Jika lupa pakai break, kode di bawahnya akan   ikut dijalankan meskipun tidak cocok (disebut fall-through).
4. default: : Sama seperti else di if-else. Dijalankan jika tidak ada case yang cocok.