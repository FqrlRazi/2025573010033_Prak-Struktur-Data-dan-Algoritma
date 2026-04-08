// function tanpa parameter dan return value
function sapa() {
  console.log("Halo, selamat datang di praktikum JavaScript! \n");
}
sapa();
sapa();

// function dengan parameter dan tanpa return value
function sapaNama(nama) {
  console.log(`Halo, ${nama}! Selamat datang di praktikum JavaScript! \n`);
}
sapaNama("Andi");
sapaNama("Randi");

// function dengan beberapa parameter dan return value
function tambahAngka(angka1, angka2) {
  const hasil = angka1 + angka2;
  return hasil;
}
const hasilTambah = tambahAngka(5, 10);
console.log("10 + 5 = ", hasilTambah);
console.log("20 + 15 = ", tambahAngka(20, 15));

// function dengan parameter default
function kurangAngka(angka1, angka2 = 6) {
  const hasil = angka1 - angka2;
  return hasil;
}
console.log("10 - 7 = ", kurangAngka(10, 7));
console.log("10 - 6 = ", kurangAngka(10));

// scope variabel
const namaGlobal = "Global";
function contohScope() {
  const namaLocal = "Local";
  console.log("\nNama Global:", namaGlobal);
  console.log("Nama Local: ", namaLocal);
}
contohScope();

// LATIHAN FUNCTION KALKULATOR LENGKAP
console.log("\n=== Function Kalkulator===");
function tambah(a, b) {
  return a + b;
}
console.log("\n 5 + 3 = ", tambah(5, 3));
function kurang(a, b) {
  return a - b;
}
console.log("\n 10 - 4 = ", kurang(10, 4));
function kali(a, b) {
  return a * b;
}
console.log("\n 6 * 7 = ", kali(6, 7));
function bagi(a, b) {
  if (b === 0) {
    return "Error: Pembagian dengan nol tidak diperbolehkan.";
  }
  return a / b;
}
console.log("\n 9 / 3 = ", bagi(9, 3));
console.log("\n 7 / 0 = ", bagi(7, 0));

console.log("\n=== Kalkulator dengan Operator ===");
function kalkulator(angka1, angka2, operator) {
  switch (operator) {
    case "+":
      return tambah(angka1, angka2);
    case "-":
      return kurang(angka1, angka2);
    case "*":
      return kali(angka1, angka2);
    case "/":
      if (angka2 === 0) {
        return "Error: Pembagian dengan nol tidak diperbolehkan.";
      }
      return bagi(angka1, angka2);
    default:
      return "Error: Operator tidak valid.";
  }
}

console.log("\n 5 + 3 =", kalkulator(5, 3, "+"));
console.log("\n 10 - 4 =", kalkulator(10, 4, "-"));
console.log("\n 6 * 7 =", kalkulator(6, 7, "*"));
console.log("\n 9 / 3 =", kalkulator(9, 3, "/"));
console.log("\n 7 / 0 =", kalkulator(7, 0, "/"));
