class Node {
  constructor(d) {
    this.data = d;
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
  print() {
    let s = "TOP ->",
      cur = this.top;
    while (cur) {
      s += `[${cur.data}] `;
      cur = cur.next;
    }
    console.log("", s.trim());
  }
}

// aplikasi validasi kurung
function validasiKurung(expression) {
  const stack = new Stack();
  const buka = "({[";
  const tutup = ")}]";
  const pasangan = { ")": "(", "}": "{", "]": "[" };

  for (const ch of expression) {
    if (buka.includes(ch)) stack.push(ch);
    else if (tutup.includes(ch)) {
      if (stack.isEmpty() || stack.pop() !== pasangan[ch]) return false;
    }
  }
  return stack.isEmpty();
}

// aplikasi evaluasi ekspresi postfix
// postfix = operator dibelakang operand: 3 4 + 2 *
function evaluationPostfix(expression) {
  const stack = new Stack();
  const operators = "+-*/";
  const tokens = expression.split(" ");
  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
      }
    }
  }
  return stack.pop();
}
console.log(`Validasi Kurung`);
console.log(validasiKurung("({[]})")); // true
console.log(validasiKurung("({[})")); // false

console.log(`\n\nEvaluation Postfix`);
console.log("3 4 + 2 * =", evaluationPostfix("3 4 + 2 *")); // 14
console.log("5 1 2 + 4 * + 3 - =", evaluationPostfix("5 1 2 + 4 * + 3 -")); // 14
console.log("2 3 4  *  + =", evaluationPostfix("2 3 4 * +")); // 14
