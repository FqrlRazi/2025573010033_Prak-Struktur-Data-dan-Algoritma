// --- 1. Declare object literal ---
const mahasiswa = {
  nama: "Fahrol",
  umur: "20",
  jurusan: "TI",
  ipk: "3.99",
  aktif: true,
};

// --- 2. Mengakses property ---
console.log("=== Akses Property ===");
console.log("Nama :", mahasiswa.nama); // dot notasi
console.log("Jurusan :", mahasiswa["jurusan"]); // bracket notasi

// Bracket notation berguna jika key disimpan di variabel
const keyYangDicari = "ipk";
console.log("IPK :", mahasiswa[keyYangDicari]); // berguna!

// --- 3. Menambah dan mengubah property ---
mahasiswa.email = "fahrol@email.com"; // tambah property baru
mahasiswa.umur = 21; // ubah nilai yang ada
console.log("\nSetelah diubah:", mahasiswa);

// --- 4. Menghapus property ---
delete mahasiswa.aktif;
console.log("Setelah delete:", mahasiswa);

// --- 5. Menambahkan method ke object ---
const dosen = {
  nama: "Dr. Ahmad Fauzi",
  mataKuliah: "Struktur Data",
  pengalaman: 10, // tahun

  // method: function di dalam object
  perkenalan() {
    // 'this' merujuk ke object dosen itu sendiri
    return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
  },
  statusSenior() {
    if (this.pengalaman >= 10) {
      return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
  },
};
console.log("\n=== Method Object ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());
// --- 6. Iterasi key-value dengan for...in ---
console.log("\n=== Iterasi Object ===");
for (const key in dosen) {
  if (typeof dosen[key] !== "function") {
    // skip method
    console.log(` ${key}: ${dosen[key]}`);
  }
}
// Object.keys(), Object.values(), Object.entries()
console.log("Keys :", Object.keys(mahasiswa));
console.log("Values:", Object.values(mahasiswa));

//--LATIHAN--

// Object buku
const buku = {
  judul: "Laskar Pelangi",
  pengarang: "Andrea Hirata",
  tahunTerbit: 2005,
  harga: 80000,
  tersedia: true,

  // Method info()
  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
  },

  // Method diskon(persen)
  diskon: function (persen) {
    return this.harga - (this.harga * persen / 100);
  }
};

// Menampilkan info buku
console.log("\n\n=== INFO BUKU ===");
console.log(buku.info());

// Menampilkan harga setelah diskon
console.log("\n=== HARGA DISKON 10% ===");
console.log("Rp" + buku.diskon(10));


// Array koleksiBuku minimal 3 object
const koleksiBuku = [
  buku,
  {
    judul: "Bumi Manusia",
    pengarang: "Pramoedya Ananta Toer",
    tahunTerbit: 1980,
    harga: 90000,
    tersedia: false,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    }
  },
  {
    judul: "Atomic Habits",
    pengarang: "James Clear",
    tahunTerbit: 2018,
    harga: 120000,
    tersedia: true,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    }
  }
];


// forEach menampilkan semua buku
console.log("\n=== SEMUA KOLEKSI BUKU ===");
koleksiBuku.forEach(function(item, index) {
  console.log(`${index + 1}. ${item.info()}`);
});


// filter buku tersedia === true
const bukuTersedia = koleksiBuku.filter(function(item) {
  return item.tersedia === true;
});

console.log("\n=== BUKU YANG TERSEDIA ===");
bukuTersedia.forEach(function(item) {
  console.log(item.judul);
});

