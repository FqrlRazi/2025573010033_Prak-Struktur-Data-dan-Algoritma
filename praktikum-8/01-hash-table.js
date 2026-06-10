// hashmap dari 0
class HashMap {
  constructor(kapasitas = 53) {
    this.table = new Array(kapasitas)
    this.kapasitas = kapasitas
    this.ukuran = 0
  }

  //hash function untuk string key
  _hash(key) {
    let hash = 0
    const PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas
    }
    return hash
  }

  //set key value (chaining dengan array)
  set(key, value) {
    const idx = this._hash(key)
    if (!this.table[idx])
      this.table[idx] = []
    // update cek key sudah ada?
    const existing = this.table[idx].find(([k]) => k === key)
    if (existing) {
      existing[1] = value
      return
    }
    this.table[idx].push([key, value])
    this.ukuran++
  }

  //get value by key
  get(key) {
    const idx = this._hash(key)
    if (!this.table[idx])
      return undefined
    const pair = this.table[idx].find(([k]) => k === key)
    return pair ? pair[1] : undefined
  }

  //delete key
  delete(key) {
    const idx = this._hash(key)
    if (!this.table[idx])
      return false
    const i = this.table[idx].findIndex(([k]) => k === key)
    if (i === -1)
      return false
    this.table[idx].splice(i, 1)
    this.ukuran--
    return true
  }

  has(key) {
    return this.get(key) !== undefined
  }

  //ambil semua keys
  keys() {
    const result = []
    for (const bucket of this.table)
      if (bucket)
        bucket.forEach(([k]) => result.push(k))
    return result
  }

  //ambil semua values
  values() {
    const result = []
    for (const bucket of this.table)
      if (bucket) bucket.forEach(([k]) => result.push(k))
    return result
  }

  //visualisasi distribusi slot
  infoDistribusi() {
    let terisi = 0, maks = 0
    for (const b of this.table) {
      if (b && b.length) {
        terisi++
        if (b.length > maks) maks = b.length
      }
    }
    console.log(`Kapasitas: ${this.kapasitas}, Terisi: ${terisi}, Load factor: ${(this.ukuran / this.kapasitas).toFixed(2)}, Max chain: ${maks}`)
  }
}

const map = new HashMap()
['javascript', 'python', 'java', 'c++', 'rust', 'go', 'typescript'].forEach((lang, i) => map.set(lang, i + 1))


console.log('=== HashMap Demo ===')
console.log('get(java) :', map.get('java'))
console.log('get(kotlin) :', map.get('kotlin'))
console.log('has(python) :', map.has('python'))
console.log('tampilkan semua data:', map.values())
map.delete('java')
console.log('Setelah hapus java:', map.has('java'))
console.log('Keys:', map.keys())
map.infoDistribusi()