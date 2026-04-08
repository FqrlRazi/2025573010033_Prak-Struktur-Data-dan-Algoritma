// function biasa vs arrow function

// function biasa
function kuadrat(x) {
  return x * x;
}
// arrow function
const kuadratArrow = (x) => {
  return x * x;
};

// arrow function ringkas
const kuadratRingkas = (x) => x * x;

console.log("===Perbandingan Penulisan===");
console.log("Biasa:", kuadrat(5));
console.log("Arrow:", kuadratArrow(5));
console.log("Ringkas: ", kuadratRingkas(5));

// arrow dengan beberapa parameter
const luas = (panjang, lebar) => panjang * lebar;
console.log("Luas Persegi Panjang 5 x 3 = ", luas(5, 3));

function lakukanOperasi(angka, operasiCallback) {
  console.log(`Angka awal: ${angka}`);
  const hasil = operasiCallback(angka);
  console.log(`Hasil setelah operasi: ${hasil}`);
}
console.log("\n=== Callback ===");
lakukanOperasi(7, kuadratRingkas);
lakukanOperasi(10, (x) => x + 100);
lakukanOperasi(20, function (x) {
  return x / 2;
});

//setTimeout sebagai contoh callback nyata ---
console.log("\n=== setTimeout (Callback) ===");
console.log("Pesan 1: Sebelum timer");
setTimeout(() => {
  console.log("Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)");
}, 1000);
console.log("Pesan 2: Setelah mendaftarkan timer");

// LATIHAN 2 PIPELINE TRANSFORMASI
const keHurufBesar = (str) => str.toUpperCase();
const tambahTandaSeru = (str) => str + "!";
const hitungKata = (str) => str.split(" ").length;

function prosesTeks(teks, transformasiCallback) {
  return transformasiCallback(teks);
}

console.log("\n=== Pipeline Transformasi ===");
const teksAwal = "Belajar JavaScript itu menyenangkan";
const hasilTransformasi = prosesTeks(teksAwal, (teks) => {
  const besar = keHurufBesar(teks);
  const seru = tambahTandaSeru(besar);
  const jumlahKata = hitungKata(seru);
  console.log(`Teks awal: ${teks}`);
  return `Besar: ${besar}, Transformasi: ${seru} (Jumlah kata: ${jumlahKata})`;
});
console.log(hasilTransformasi);
