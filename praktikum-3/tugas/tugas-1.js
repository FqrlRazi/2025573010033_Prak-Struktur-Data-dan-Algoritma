console.log("=== Sistem Nilai Mahasiswa ===");

const dataMahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 70 },
  { nama: "Citra", nilai: 92 },
  { nama: "Dewi", nilai: 60 },
  { nama: "Eko", nilai: 78 },
  { nama: "Fajar", nilai: 55 },
];

function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce(
    (acc, mhs) => {
      acc.totalNilai += mhs.nilai;

      if (mhs.nilai > acc.tertinggi) {
        acc.tertinggi = mhs.nilai;
      }

      if (mhs.nilai < acc.terendah) {
        acc.terendah = mhs.nilai;
      }

      return acc;
    },
    {
      totalNilai: 0,
      tertinggi: arrMahasiswa[0].nilai,
      terendah: arrMahasiswa[0].nilai,
    },
  );

  return {
    total: arrMahasiswa.length,
    rataRata: (hasil.totalNilai / arrMahasiswa.length).toFixed(2),
    tertinggi: hasil.tertinggi,
    terendah: hasil.terendah,
  };
}

function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter((mhs) => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map((mhs) => {
    let grade;

    if (mhs.nilai >= 85) {
      grade = "A";
    } else if (mhs.nilai >= 75) {
      grade = "B";
    } else if (mhs.nilai >= 65) {
      grade = "C";
    } else if (mhs.nilai >= 50) {
      grade = "D";
    } else {
      grade = "E";
    }

    return {
      ...mhs,
      grade: grade,
    };
  });
}

// ===== Memanggil Function =====

// Hitung statistik
const statistik = hitungStatistik(dataMahasiswa);

// Filter mahasiswa lulus (misal batas 70)
const mahasiswaLulus = filterLulus(dataMahasiswa, 70);

// Tambah grade
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

// ===== Tampilkan Hasil =====

console.log("\n=== Statistik Nilai ===");
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata Nilai: ${statistik.rataRata}`);
console.log(`Nilai Tertinggi: ${statistik.tertinggi}`);
console.log(`Nilai Terendah : ${statistik.terendah}`);

console.log("\n=== Mahasiswa Lulus (>= 70) ===");

mahasiswaLulus.forEach((mhs) => {
  console.log(`- ${mhs.nama} (${mhs.nilai})`);
});

console.log("\n=== Daftar Mahasiswa + Grade ===");

mahasiswaDenganGrade.forEach((mhs) => {
  console.log(`${mhs.nama} - Nilai: ${mhs.nilai}, Grade: ${mhs.grade}`);
});