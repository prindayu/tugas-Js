/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE

/// - Scope merupakan suatu konsep dalam flow data variabel atau  bisa dosebut dengan alur dari varibale.
/// - Terdapat 2 jumlah variabel scope pada JavaScript diantaranya adalah global scope dan local scope.
//  - Global scope merupakan suatu variabel yang bisa diakses dimanapun dalam suatu file dan harus dideklarasikan bersama ddengan block.
//    Local scope merupakan cara untuk mendeklarasikan suatu variabel yang terdapat didalam block seperti function, conditional, dan looping. 
//    Berdasarkan dengan definisi tersebut, local scope hanya bisa diakses didalam block saja dan tidak bisa diakses apabila variabel tersebut berada diluar block.

const nama = "Guru";

function namaSiswa(n) {
  console.log("Guru itu adalah guru Bahasa Indonesia, namanya : " + n);
} 
console.log(namaSiswa("Cantika"));

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}
console.log(printFirstName("Mariah Carey"));

///
// / - "mariah" karena pada console.log syntax tidak terdekteksi.
// / - karena penulisan syntax berantakan, tidak beraturan arah dan tujuannya.
// /   penulisan setelah return terdapat 2 kurung yg berbeda.
//     

