// string
let namaMahasiswa = 'Andi'
let programStudi = "Teknik Informatika"

let perkenalan = `Halo, nama saya ${namaMahasiswa} dan saya kuliah di program studi ${programStudi}`
console.log(perkenalan)
console.log('Panjang nama:' + namaMahasiswa.length)

//number
let nilaiUjian = 85
let ipk = 3.75
let suhuKulkas = -2

console.log('Nilai ujian:' , nilaiUjian)
console.log('IPK:' , ipk)
console.log('Suhu kulkas:' , suhuKulkas)

//boolean
let sudahLogin = true
let sudahLulus = false

console.log('Sudah login:' , sudahLogin)
console.log('Sudah lulus:' , sudahLulus)

//null
let alamat = null
console.log('Alamat:' , alamat)

//undefined
let nomorTelepon
console.log('Nomor telepon:' , nomorTelepon)

console.log('Nilai :' , nilaiUjian + ipk)

//cek dengan typeof
console.log('Tipe data namaMahasiswa:' , typeof namaMahasiswa)
console.log('Tipe data nilaiUjian:' , typeof nilaiUjian)
console.log('Tipe data sudahLogin:' , typeof sudahLogin)
console.log('Tipe data alamat:' , typeof alamat)
console.log('Tipe data nomorTelepon:' , typeof nomorTelepon)