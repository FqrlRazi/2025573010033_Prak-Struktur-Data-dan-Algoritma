// --- IF / ELSE IF / ELSE: Konversi nilai ke grade ---
let nilaiUjian = 78;
console.log("=== Konversi Grade ===");
console.log("Nilai:", nilaiUjian);
if (nilaiUjian >= 90) {
  console.log("Grade: A (Sangat Baik)");
} else if (nilaiUjian >= 80) {
  console.log("Grade: B (Baik)");
} else if (nilaiUjian >= 70) {
  console.log("Grade: C (Cukup)");
} else if (nilaiUjian >= 60) {
  console.log("Grade: D (Kurang)");
} else {
  console.log("Grade: E (Tidak Lulus)");
}

// --- SWITCH: Cek nama hari ---
let namaHari = "Rabu";
console.log("\n=== Cek Jenis Hari ===");
switch (namaHari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log(`${namaHari} adalah hari kerja.`);
    break;
  case "Sabtu":
  case "Minggu":
    console.log(`${namaHari} adalah akhir pekan.`);
    break;
  default:
    console.log("Nama hari tidak dikenali.");
}
// --- TERNARY OPERATOR: Cek kelulusan ---
let nilaiAkhir = 65;
let statusLulus = nilaiAkhir >= 60 ? "LULUS" : "TIDAK LULUS";
console.log("\n=== Status Kelulusan ===");
console.log(`Nilai ${nilaiAkhir}: ${statusLulus}`);

//KONVERTER MUSIM DAN CUACA
console.log("\n=== Cek Musim ===");
const bulan = 4;

let musim =
  [12,1,2].includes(bulan) ? "Musim Dingin" :
  [3,4,5].includes(bulan) ? "Musim Semi" :
  [6,7,8].includes(bulan) ? "Musim Panas" :
  [9,10,11].includes(bulan) ? "Musim Gugur" :
  "Bulan tidak valid";

console.log(musim);

console.log("\n=== Cek Cuaca ===");
const adaAwan = true;
const adaAngin = true;

if (adaAwan || adaAngin) {
  console.log(adaAwan && adaAngin ? "Mendung dan Berangin" : adaAwan ? "Mendung" : "Berangin");
} else {
  console.log("Cuaca: Cerah");
}

