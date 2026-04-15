class Stack {
  constructor() {
    this.data = [];
    this.ukuran = 0;
  }

  push(elemen) {
    this.data.push(elemen);
    this.ukuran++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.ukuran--;
    return this.data.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.ukuran === 0;
  }

  size() {
    return this.ukuran;
  }
}

function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();

  for (let i = 0; i < ekspresi.length; i++) {
    const karakter = ekspresi[i];
    if (karakter === "(") {
      stack.push(karakter);
    } else if (karakter === ")") {
      if (stack.isEmpty()) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.isEmpty();
}

const daftarUji = [
  "(2 + 3) * (4 - 1)",
  "((a + b)",
  ")(",
  "((()))",
  "((2 + 3) * (4 - 1))",
];

console.log("=== Hasil Pemeriksaan Kurung ===");
daftarUji.forEach((ekspresi) => {
  const seimbang = cekKurungSeimbang(ekspresi);
  console.log(`'${ekspresi}' -> Seimbang: ${seimbang}`);
});
