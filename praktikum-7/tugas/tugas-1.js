class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const val = this.head.data;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.size--;
    return val;
  }

  front() {
    return this.head ? this.head.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.data);
      cur = cur.next;
    }
    return arr;
  }
}

class Pasien {
  constructor(id, nama, prioritas) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // 'darurat' or 'biasa'
    this.waktuDaftar = new Date();
  }
}

class AntrianRS {
  constructor() {
    this.antrianDarurat = new Queue();
    this.antrianBiasa = new Queue();
  }

  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.enqueue(pasien);
      console.log(`Daftar: [DARURAT] ${pasien.nama} (id:${pasien.id})`);
    } else {
      this.antrianBiasa.enqueue(pasien);
      console.log(`Daftar: [Biasa] ${pasien.nama} (id:${pasien.id})`);
    }
  }

  layani() {
    let pasien = null;
    if (!this.antrianDarurat.isEmpty()) {
      pasien = this.antrianDarurat.dequeue();
      console.log(`Layani (DARURAT): ${pasien.nama} (id:${pasien.id})`);
    } else if (!this.antrianBiasa.isEmpty()) {
      pasien = this.antrianBiasa.dequeue();
      console.log(`Layani (Biasa): ${pasien.nama} (id:${pasien.id})`);
    } else {
      console.log("Tidak ada pasien dalam antrian.");
    }
    return pasien;
  }

  tampilkanAntrian() {
    const darurat = this.antrianDarurat
      .toArray()
      .map((p) => `${p.nama}(id:${p.id})`);
    const biasa = this.antrianBiasa
      .toArray()
      .map((p) => `${p.nama}(id:${p.id})`);
    console.log("\nStatus Antrian:");
    console.log(
      "  Antrian Darurat ->",
      darurat.length ? darurat.join(" <- ") : "Kosong",
    );
    console.log(
      "  Antrian Biasa   ->",
      biasa.length ? biasa.join(" <- ") : "Kosong",
    );
  }
}

//  Simulasi: daftarkan 10 pasien secara acak (mix darurat dan biasa)
function randomPrioritas() {
  // probability ~30% darurat, 70% biasa
  return Math.random() < 0.3 ? "darurat" : "biasa";
}

const namaContoh = [
  "Andi",
  "Budi",
  "Citra",
  "Dewi",
  "Eka",
  "Fajar",
  "Gina",
  "Hasan",
  "Indra",
  "Joko",
  "Kiki",
  "Lina",
];

const rumahSakit = new AntrianRS();

// daftar 10 pasien
for (let i = 1; i <= 10; i++) {
  const nama = namaContoh[Math.floor(Math.random() * namaContoh.length)];
  const prioritas = randomPrioritas();
  const p = new Pasien(i, nama, prioritas);
  rumahSakit.daftar(p);
}

rumahSakit.tampilkanAntrian();

console.log("\n--- Mulai Melayani ---");
while (
  !rumahSakit.antrianDarurat.isEmpty() ||
  !rumahSakit.antrianBiasa.isEmpty()
) {
  rumahSakit.layani();
}
console.log("Selesai melayani semua pasien.");
