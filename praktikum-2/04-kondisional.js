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

if (bulan == 12 || bulan == 1 || bulan == 2) {
  console.log("Musim: Musim Dingin");
} else if (bulan == 3 || bulan == 4 || bulan == 5) {
  console.log("Musim: Musim Semi");
} else if (bulan == 6 || bulan == 7 || bulan == 8) {
  console.log()("Musim: Musim Panas");
} else if (bulan == 9 || bulan == 10 || bulan == 11) {
  console.log("Musim: Musim Gugur");
} else {
  console.log("Bulan tidak valid");
}

console.log("\n=== Cek Cuaca ===");
const adaAwan = false;
const adaAngin = false;

if (adaAwan && adaAngin) {
  console.log("Cuaca: Mendung dan Berangin");
} else if (adaAwan && !adaAngin) {
  console.log("Cuaca: Mendung");
} else if (!adaAwan && adaAngin) {
  console.log("Cuaca: Berangin");
} else {
  console.log("Cuaca: Cerah");
}
