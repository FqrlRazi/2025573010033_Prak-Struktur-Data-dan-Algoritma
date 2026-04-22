// Fungsi A: O(1)
// Big O: O(1) - Operasi hanya dilakukan satu kali
function fnA(n) {
  return n * 2;
}

// Fungsi B: O(n²)
// Big O: O(n²) - Loop nested dua tingkat
function fnB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }
}

// Fungsi C: O(log n)
// Big O: O(log n) - Nilai i dikalikan 2 setiap iterasi
function fnC(n) {
  for (let i = 1; i < n; i *= 2) {}
}

// Fungsi D: O(n³)
// Big O: O(n³) - Loop nested tiga tingkat
function fnD(arr) {
  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {});
    });
  });
}

function hitungKompleksitas(n, fn) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  return end - start;
}

const n = 1000;

console.log("Pengukuran Kompleksitas dengan n=" + n);
console.log("================================");

console.log("\nFungsi A (O(1)):");
console.log("Waktu: " + hitungKompleksitas(n, fnA) + "ms");

console.log("\nFungsi C (O(log n)):");
console.log("Waktu: " + hitungKompleksitas(n, fnC) + "ms");

console.log("\nFungsi B (O(n²)):");
console.log("Waktu: " + hitungKompleksitas(n, fnB) + "ms");

console.log("\nFungsi D (O(n³)):");
const arr = Array.from({ length: n }, (_, i) => i);
console.log("Waktu: " + hitungKompleksitas(n, () => fnD(arr)) + "ms");
