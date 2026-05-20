class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // O(1) access to last node
    this.size = 0;
  }

  // append: O(1)
  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  // prepend: O(1)
  prepend(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  // insertAt: O(n) ()
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Index di luar batas!");
      return false;
    }
    if (index === 0) {
      this.prepend(data);
      return true;
    }
    if (index === this.size) {
      this.append(data);
      return true;
    }

    const node = new Node(data);
    // choose traversal direction for efficiency
    let current;
    if (index <= this.size / 2) {
      current = this.head;
      for (let i = 0; i < index - 1; i++) current = current.next;
    } else {
      current = this.tail;
      for (let i = this.size - 1; i > index - 1; i--) current = current.prev;
    }

    node.next = current.next;
    node.prev = current;
    current.next.prev = node;
    current.next = node;
    this.size++;
    return true;
  }

  // delete by value: O(n)
  delete(data) {
    if (!this.head) return false;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next; // removing head

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev; // removing tail

        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // reverse list in-place: O(n)
  reverse() {
    let current = this.head;
    let temp = null;
    while (current) {
      // swap next and prev
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // we swapped, so move to previous
    }
    // swap head and tail
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  // print from head: O(n)
  printForward() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log("Forward:", values.join(" <-> "), `(size: ${this.size})`);
  }

  // print from tail: O(n)
  printBackward() {
    const values = [];
    let current = this.tail;
    while (current) {
      values.push(current.data);
      current = current.prev;
    }
    console.log("Backward:", values.join(" <-> "), `(size: ${this.size})`);
  }

  // helper: isEmpty: O(1)
  isEmpty() {
    return this.size === 0;
  }
}

// --- Contoh penggunaan / pengujian singkat ---
if (require && require.main === module) {
  const dll = new DoublyLinkedList();
  console.log("Mulai pengujian DoublyLinkedList");

  // append O(1)
  dll.append(10);
  dll.append(20);
  dll.append(30);
  dll.printForward();
  dll.printBackward();

  // prepend O(1)
  dll.prepend(5);
  dll.printForward();

  // insertAt O(n)
  dll.insertAt(15, 2); // antara 10 dan 20
  dll.printForward();

  // delete O(n)
  dll.delete(20);
  dll.printForward();
  dll.printBackward();

  // reverse O(n)
  dll.reverse();
  dll.printForward();
  dll.printBackward();

  // demonstrasi tail O(1) append
  console.log("Append lagi (menunjukkan tail O(1))");
  dll.append(100);
  dll.printBackward();
}

module.exports = { DoublyLinkedList, Node };
