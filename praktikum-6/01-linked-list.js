class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // tambah data diakhir
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
    this.size++;
  }

  // tambah data diawal
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  //insert data di posisi tertentu
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log(`Index di luar batas!`);
      return;
    }
    if (index === 0) {
      this.prepend(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) current = current.next;
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  //hapus node berdasarkan nilai
  delete(data) {
    if (!this.head) return false;
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  //tampilkan semua node
  print() {
    if (!this.head) {
      console.log(`  {List Kosong}`);
      return;
    }

    let result = "";
    let current = this.head;
    while (current) {
      result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
      current = current.next;
    }
    console.log(" ", result, ` (size: ${this.size})`);
  }

  //Balik urutan list
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // Konversi ke Array
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  //kembalikan data di posisi index
  getAt(index) {
    if (index < 0 || index >= this.size || !this.head) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) current = current.next;
    return current ? current.data : null;
  }

  //hapus node di posisi index
  deleteAt(index) {
    if (index < 0 || index >= this.size || !this.head) {
      console.log(`Index di luar batas!`);
      return null;
    }

    if (index === 0) {
      const removedData = this.head.data;
      this.head = this.head.next;
      this.size--;
      return removedData;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) current = current.next;
    const removedData = current.next.data;
    current.next = current.next.next;
    this.size--;
    return removedData;
  }

  // Alias untuk search tapi kembalikan -1
  indexOf(data) {
    return this.search(data);
  }

  //kembalikan true jika list kosong
  isEmpty() {
    return this.size === 0;
  }

  //hapus semua node
  clear() {
    this.head = null;
    this.size = 0;
  }
}

// ── Demonstrasi ────────────────────────────────
const ll = new LinkedList();

console.log("=== Append ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.print();

console.log("\n=== Prepend ===");
ll.prepend(5);
ll.print();

console.log("\n=== Insert di indeks 2 ===");
ll.insertAt(15, 2);
ll.print();

console.log("\n=== Search ===");
console.log(" Indeks nilai 20:", ll.search(20));
console.log(" Indeks nilai 99:", ll.search(99));

console.log("\n=== Delete 20 ===");
ll.delete(20);
ll.print();

console.log("\n=== Reverse ===");
ll.reverse();
ll.print();

console.log("\n=== To Array ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
console.log(ll.toArray());

console.log("\n=== Get At ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
console.log("Nilai di indeks 2:", ll.getAt(2));
console.log("Nilai di indeks 5:", ll.getAt(5));

console.log("\n=== Delete At ===");
ll.deleteAt(2);
ll.print();
ll.deleteAt(0);
ll.print();

console.log("\n=== Index Of ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
console.log("Indeks nilai 20:", ll.indexOf(20));
console.log("Indeks nilai 99:", ll.indexOf(99));

console.log("\n=== Is Empty ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
console.log("List kosong:", ll.isEmpty());
ll.deleteAt(0);
ll.deleteAt(0);
ll.deleteAt(0);
ll.deleteAt(0);
console.log("List kosong:", ll.isEmpty());

console.log("\n=== Clear ===");
ll.clear();
ll.print();