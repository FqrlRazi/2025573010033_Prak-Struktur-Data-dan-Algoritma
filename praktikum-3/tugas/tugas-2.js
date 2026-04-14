console.log("=== Pangkat dan Palindrom Rekursif ===");

function pangkat(basis, eksponen) {
  if (eksponen === 0) {
    return 1;
  }

  return basis * pangkat(basis, eksponen - 1);
}

console.log("\n=== Uji Fungsi Pangkat ===");
console.log(`2 pangkat 3 = ${pangkat(2, 3)}`);
console.log(`5 pangkat 2 = ${pangkat(5, 2)}`);
console.log(`3 pangkat 4 = ${pangkat(3, 4)}`);

function balikString(str) {
  if (str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

console.log("\n=== Uji Fungsi Balik String ===");
console.log(`'halo' dibalik menjadi '${balikString("halo")}'`);
console.log(`'javascript' dibalik menjadi '${balikString("javascript")}'`);

function cekPalindrom(str) {
  const hasilBalik = balikString(str);

  if (str === hasilBalik) {
    return true;
  } else {
    return false;
  }
}

console.log("\n=== Uji Cek Palindrom ===");

const kataUji = ["katak", "civic", "level", "halo", "kasur"];

kataUji.forEach((kata) => {
  if (cekPalindrom(kata)) {
    console.log(`${kata} adalah palindrom`);
  } else {
    console.log(`${kata} bukan palindrom`);
  }
});