let a = 1;
let b = 2;

console.log("=== ARITMATIKA DASAR ===");
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

//OPERATOR PERBANDINGAN
console.log("=== OPERATOR PERBANDINGAN ===");
console.log("10 === 5 =", 10 === 5);
console.log("10 == 5 = ", 10 == 5);
console.log("10 !== 5 =", 10 !== 5);
console.log("10 != 5 = ", 10 != 5);
console.log("10 >  5 = ", 10 > 5);
console.log("10 <  5 = ", 10 < 5);
console.log("10 >= 5 = ", 10 >= 5);
console.log("10 <= 5 = ", 10 <= 5);

//PERBEDAAN ANTARA == DAN ===
console.log("=== PERBEDAAN ANTARA == DAN === ===");
console.log('10 == "10" = ', 10 == "10"); // true karena hanya membandingkan nilai
console.log('10 === "10" = ', 10 === "10"); // false karena membandingkan nilai dan tipe data

//OPERATOR LOGIKA
console.log("=== OPERATOR LOGIKA ===");
console.log("true && true = ", true && true); // true
console.log("true && false = ", true && false); // false
console.log("false && true = ", false && true); // false
console.log("false && false = ", false && false); // false
console.log("true || true = ", true || true); // true
console.log("true || false = ", true || false); // true
console.log("false || true = ", false || true); // true
console.log("false || false = ", false || false); // false
console.log("!true = ", !true); // false
console.log("!false = ", !false); // true

console.log("\n\n===KALKULATOR===");
const panjang = 12,
  lebar = 10;
const luas = panjang * lebar;
const keliling = 2 * (panjang + lebar);

console.log(`Panjang persegi panjang: ${panjang}`);
console.log(`Lebar persegi panjang:  ${lebar}`);
console.log("  ");
console.log(`Luas persegi panjang: ${luas}`);
console.log(`Keliling persegi panjang : ${keliling}`);

luas > 100;
console.log("\n Apakah luas lebih besar dari 100?:", luas > 100);
