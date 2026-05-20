class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // tambah node di depan
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  // hapus node depan
  removeHead() {
    if (!this.head) {
      return null;
    }

    const removedData = this.head.data;

    this.head = this.head.next;

    this.length--;

    return removedData;
  }

  // lihat data paling depan
  getHead() {
    if (!this.head) {
      return null;
    }

    return this.head.data;
  }

  // cek kosong
  isEmpty() {
    return this.length === 0;
  }

  // ukuran list
  size() {
    return this.length;
  }

  // print isi list
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";

    console.log(result);
  }
}

// CLASS STACK
class Stack {
  constructor() {
    // komposisi:
    // Stack memiliki LinkedList
    this.list = new LinkedList();
  }

  // PUSH
  push(data) {
    this.list.prepend(data);
  }

  // POP
  pop() {
    return this.list.removeHead();
  }

  // PEEK
  peek() {
    return this.list.getHead();
  }

  // ISEMPTY
  isEmpty() {
    return this.list.isEmpty();
  }

  // SIZE
  size() {
    return this.list.size();
  }

  // PRINT
  print() {
    this.list.print();
  }
}

// DEMO STACK
console.log("=== DEMO STACK ===");

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log("Top:", stack.peek());

console.log("Pop:", stack.pop());
stack.print();

console.log("Size:", stack.size());

console.log("Is Empty:", stack.isEmpty());

// SIMULASI UNDO
console.log("\n=== SIMULASI UNDO ===");

const undoStack = new Stack();
const actions = [
  "Menulis A",
  "Menulis B",
  "Menghapus Kalimat",
  "Menambahkan Gambar",
];

for (let action of actions) {
  console.log("Action:", action);

  undoStack.push(action);
}

console.log("\nIsi Stack:");
undoStack.print();

console.log("\nUndo 1:", undoStack.pop());
console.log("Undo 2:", undoStack.pop());

console.log("\nSisa Stack:");
undoStack.print();