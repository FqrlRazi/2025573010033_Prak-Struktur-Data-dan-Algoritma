class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const val = this.top.data;
    this.top = this.top.next;
    this.size--;
    return val;
  }

  peek() {
    return this.top ? this.top.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }
}

class MinStack {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.isEmpty() || value <= this.minStack.peek()) {
      this.minStack.push(value);
    }
  }

  pop() {
    if (this.stack.isEmpty()) return null;
    const val = this.stack.pop();
    if (val === this.minStack.peek()) {
      this.minStack.pop();
    }
    return val;
  }

  getMin() {
    return this.minStack.isEmpty() ? null : this.minStack.peek();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }

  print() {
    let s = "TOP -> ",
      cur = this.stack.top;
    while (cur) {
      s += `[${cur.data}] `;
      cur = cur.next;
    }
    console.log(" ", s.trim());
  }
}

// --- Uji coba kasus  ---
console.log("=== Uji MinStack ===\n");
const ms = new MinStack();

console.log("push(5) -> getMin()=5");
ms.push(5);
console.log(`  Stack:`, ms.stack.top?.data);
console.log(`  Min:   ${ms.getMin()}`);

console.log("\npush(3) -> getMin()=3");
ms.push(3);
console.log(`  Stack:`, ms.stack.top?.data);
console.log(`  Min:   ${ms.getMin()}`);

console.log("\npush(7) -> getMin()=3");
ms.push(7);
console.log(`  Stack:`, ms.stack.top?.data);
console.log(`  Min:   ${ms.getMin()}`);

console.log("\npush(2) -> getMin()=2");
ms.push(2);
console.log(`  Stack:`, ms.stack.top?.data);
console.log(`  Min:   ${ms.getMin()}`);

console.log("\npop() -> hasilkan 2, getMin()=3");
const p1 = ms.pop();
console.log(`  Pop:   ${p1}`);
console.log(`  Min:   ${ms.getMin()}`);

console.log("\npop() -> hasilkan 7, getMin()=3");
const p2 = ms.pop();
console.log(`  Pop:   ${p2}`);
console.log(`  Min:   ${ms.getMin()}`);

console.log("\npop() -> hasilkan 3, getMin()=5");
const p3 = ms.pop();
console.log(`  Pop:   ${p3}`);
console.log(`  Min:   ${ms.getMin()}`);

console.log("\n=== Big O Analysis ===");
console.log("push(value)  : O(1) - insert ke dua stack dengan operasi konstan");
console.log(
  "pop()        : O(1) - hapus dari dua stack dengan operasi konstan",
);
console.log(
  "getMin()     : O(1) - akses top dari minStack dengan operasi konstan",
);
console.log("isEmpty()    : O(1) - check size dengan operasi konstan");
console.log("print()      : O(n) - traverse seluruh stack dari top ke bottom");
