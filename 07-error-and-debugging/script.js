/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE

// // - Jenis kesalahan kesalahan saat operasi tidak dapat dilakukan, 
//      biasanya (tetapi tidak secara eksklusif) ketika nilai tidak dari jenis yang diharapkan.
// //   TypeError dapat dilempar ketika: operan atau argumen yang diteruskan ke suatu fungsi tidak sesuai dengan tipe yang diharapkan oleh operator 
//      atau fungsi tersebut; atau ketika mencoba mengubah nilai yang tidak dapat diubah; atau ketika mencoba menggunakan nilai dengan cara yang tidak pantas.
// // - Reference Error = kesalahan ketika variabel yang tidak ada direferensikan.
// // - Range Error = Rentang Kesalahan kesalahan saat nilai tidak dalam set atau rentang nilai yang diizinkan.
// // - Syntax Error = kesalahan saat mencoba menafsirkan kode yang tidak valid secara sintaksis. Itu dilemparkan ketika mesin JavaScript menemukan token 
//      atau urutan token yang tidak sesuai dengan sintaks bahasa saat mengurai kode



/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

// ReferenceError pada baris console.log(salaryWithConst) ini di karenakan mengakses variable yang belum di inisialisasi. 
// tidak error pada console.log(salaryWithVar) karena perlakuan javascript kepada var yang membuat dapat di akses sebelum inisialisasinya namun tetap harus ada inisialisasinya.