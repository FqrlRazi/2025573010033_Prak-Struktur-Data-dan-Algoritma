const beratBadan = 200;
const tinggiBadan = 1.9;

BMI = beratBadan / (tinggiBadan * tinggiBadan);

if (BMI < 18.50) {
  console.log(
    `Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} | BMI: ${BMI.toFixed(2)} | Kategori: Kekurangan Berat Badan`,
  );
} else if (BMI >= 18.50 && BMI <= 24.99) {
  console.log(
    `Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} | BMI: ${BMI.toFixed(2)} | Kategori: Berat Badan Normal`,
  );
} else if (BMI >= 25.00 && BMI <= 29.99) {
  console.log(
    `Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} | BMI: ${BMI.toFixed(2)} | Kategori: Berlebihan Berat Badan`,
  );
} else {
  console.log(
    `Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} | BMI: ${BMI.toFixed(2)} | Kategori: Obesitas`,
  );
}
