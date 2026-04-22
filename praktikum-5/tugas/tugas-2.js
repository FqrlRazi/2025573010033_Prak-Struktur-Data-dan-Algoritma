// TUGAS 2: VISUALISASI PERTUMBUHAN BIG O

// O(1) - Constant time
function fn_O1(n) {
  return n + 1;
}

// O(n) - Linear time
function fn_On(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// O(n log n) - Linearithmic time
function fn_OnLogn(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.log2(n); j++) {
      count++;
    }
  }
  return count;
}

// O(n²) - Quadratic time
function fn_On2(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}

// Benchmark function
function benchmarkSemua(ukuranData) {
  console.log("=".repeat(80));
  console.log("BENCHMARKING BIG O GROWTH PATTERNS");
  console.log("=".repeat(80));
  console.log("Data Sizes: " + ukuranData.join(", "));
  console.log("=".repeat(80));

  const results = {
    "O(1)": [],
    "O(n)": [],
    "O(n log n)": [],
    "O(n²)": [],
  };

  for (let size of ukuranData) {
    console.log(`\n--- Size: ${size} ---`);

    // Benchmark O(1)
    console.time("O(1)");
    fn_O1(size);
    console.timeEnd("O(1)");

    // Benchmark O(n)
    console.time("O(n)");
    fn_On(size);
    console.timeEnd("O(n)");

    // Benchmark O(n log n)
    console.time("O(n log n)");
    fn_OnLogn(size);
    console.timeEnd("O(n log n)");

    // Benchmark O(n²)
    console.time("O(n²)");
    fn_On2(size);
    console.timeEnd("O(n²)");
  }

  console.log("\n" + "=".repeat(20));
  console.log("ANALISIS PERTUMBUHAN");
  console.log("=".repeat(20));
  console.log(`
Observasi dari hasil benchmark:

1. O(1) - Konstant Time:
   Waktu eksekusi hampir sama untuk semua ukuran data
   Tidak terpengaruh oleh besarnya input
   
2. O(n) - Linear Time:
   Waktu tumbuh secara linear dengan ukuran data
   Jika n meningkat 5x, waktu juga meningkat ~5x
   
3. O(n log n) - Linearithmic Time:
   Waktu tumbuh lebih lambat dari O(n²) tapi lebih cepat dari O(n)
   Tumbuh linear dengan penambahan logaritmik
   
4. O(n²) - Quadratic Time:
   Waktu tumbuh sangat cepat (eksponensial dari n)
   Jika n meningkat 5x, waktu meningkat ~25x
   Paling lambat di antara semua algoritma

Kesimpulan:
Pola pertumbuhan konsisten dengan teori Big O. Semakin tinggi kompleksitas, 
semakin signifikan peningkatan waktu eksekusi seiring bertambahnya input size.
  `);
}

// Panggil benchmark dengan ukuran data yang berbeda
benchmarkSemua([100, 500, 1000, 5000, 10000]);
