// Membuat array
const mahasiswa = ["Budi", "Siti", "Ahmad", "Rina"];
const nilai = [85, 92, 78, 95, 88];

console.log("=== Array Awal ===");
console.log("Mahasiswa:", mahasiswa);
console.log("Nilai :", nilai);
console.log("Jumlah mahasiswa:", mahasiswa.length);

// Mengakses elemen
console.log("\n=== Akses Elemen ===");
console.log("Elemen pertama :", mahasiswa[0]);
console.log("Elemen ketiga :", mahasiswa[2]);
console.log("Elemen terakhir:", mahasiswa[mahasiswa.length - 1]);

// Mengubah elemen
mahasiswa[1] = "Siti Rahayu"; // ubah elemen indeks 1
console.log("\nSetelah diubah:", mahasiswa);

// Menambah dan menghapus elemen
console.log("\n=== Manipulasi Array ===");
mahasiswa.push("Doni"); // tambah di akhir
console.log("Setelah push :", mahasiswa);

mahasiswa.unshift("Zahra"); // tambah di awal
console.log("Setelah unshift :", mahasiswa);

const dihapusAkhir = mahasiswa.pop(); // hapus dari akhir
console.log("Dihapus (pop) :", dihapusAkhir);
console.log("Setelah pop :", mahasiswa);

const dihapusAwal = mahasiswa.shift(); // hapus dari awal
console.log("Dihapus (shift) :", dihapusAwal);
console.log("Setelah shift :", mahasiswa);

// Mencari elemen
console.log("\n=== Pencarian ===");
console.log("Indeks Ahmad :", mahasiswa.indexOf("Ahmad"));
console.log("Ada Rina? :", mahasiswa.includes("Rina"));
console.log("Ada Budi? :", mahasiswa.includes("Budi"));

// Mengiris array dengan slice
const sebagian = nilai.slice(1, 4);
console.log("\nNilai asli :", nilai);
console.log("Slice [1,4] :", sebagian);

// LATIHAN MANAJEMEN DAFTAR BELANJA
const daftarBelanja = ["Susu", "Roti", "Telur"];
console.log("\n=== Daftar Belanja Awal ===");
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(daftarBelanja[i]);
}

daftarBelanja.push("Beras");
daftarBelanja.push("Gula");
console.log("\n=== Daftar Belanja Baru ===");
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(daftarBelanja[i]);
}

daftarBelanja.shift(0);

console.log("\n=== Daftar Belanja Terbaru ===");
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(daftarBelanja[i]);
}

console.log(`Adakah susu? ${daftarBelanja.includes("Susu")}`);