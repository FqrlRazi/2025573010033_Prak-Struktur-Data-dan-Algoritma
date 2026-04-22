// --- O(1) Space: hanya pakai variabel tambahan konstan ---
function jumlahArray(arr) {
  let total = 0; // hanya 1 variabel tambahan
  for (const x of arr) total += x;
  return total;
}

// --- O(n) Space: membuat struktur baru sebesar input ---
function duplikasiArray(arr) {
  const baru = []; // array baru tumbuh seiring arr
  for (const x of arr) baru.push(x * 2);
  return baru;
}

// --- O(n) Space: rekursi (call stack) ---
function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1); // n frame di call stack
}

// --- O(1) Space: faktorial iteratif ---
function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel
  return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Jumlah array :", jumlahArray(arr)); // O(1) space
console.log("Duplikasi array:", duplikasiArray(arr)); // O(n) space
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));

// Visualisasi: hitung elemen unik (O(n) space)
function hitungUnik(arr) {
  const seen = new Set(); // Set tumbuh hingga n elemen
  for (const x of arr) seen.add(x);
  return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak)); // 7

console.log("\n===LATIHAN===");
function cariPasanganLambat(arr, target) {
  // Big O Time: O(n²) - nested loop
  // Big O Space: O(1) - no extra space
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

function cariPasanganCepat(arr, target) {
  // Big O Time: O(n)
  // Big O Space: O(n) - Set menyimpan elemen
  const seen = new Set();
  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }
  return null;
}

console.log("Test dengan [2, 7, 11, 15] dan target 9:");
console.log("cariPasanganLambat:", cariPasanganLambat([2, 7, 11, 15], 9));
console.log("cariPasanganCepat:", cariPasanganCepat([2, 7, 11, 15], 9));

console.log("\nTest dengan array 50.000 angka:");

const largeArr = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 100000),
);
const target = 999999;

function hitungWaktu(fn, arr, target) {
  const start = Date.now();
  fn(arr, target);
  const end = Date.now();
  return end - start;
}

console.log(
  "cariPasanganLambat: " +
    hitungWaktu(cariPasanganLambat, largeArr, target) +
    "ms",
);
console.log(
  "cariPasanganCepat: " +
    hitungWaktu(cariPasanganCepat, largeArr, target) +
    "ms",
);

console.log("\nDiskusi:");
console.log("cariPasanganCepat lebih baik karena O(n) vs O(n²)");
console.log(
  "Trade-off: Menggunakan lebih banyak memori (Set) untuk kecepatan yang lebih baik",
);
