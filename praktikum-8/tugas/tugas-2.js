// Tugas 2: Soal Klasik Hash Table

// 1) subArrayJumlahK(arr, k)
// Hitung jumlah subarray yang jumlah elemennya = k.
// Metode: prefix sum + HashMap
// Time: O(n), Space: O(n)
function subArrayJumlahK(arr, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0, count = 0;
  for (let x of arr) {
    sum += x;
    const need = sum - k;
    if (map.has(need)) count += map.get(need);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

// Naive O(n^2): enumerate all subarrays and sum them.

// 2) firstUniqueChar(s)
// Kembalikan indeks karakter pertama yang tidak berulang.
// Metode: hitung frekuensi dengan Map, lalu satu pass cari pertama dengan count 1.
// Time: O(n), Space: O(1) or O(min(n, alphabet))
function firstUniqueChar(s) {
  const freq = new Map();
  for (let ch of s) freq.set(ch, (freq.get(ch) || 0) + 1);
  for (let i = 0; i < s.length; i++) if (freq.get(s[i]) === 1) return i;
  return -1;
}

// Naive O(n^2): for each char, scan the rest to check uniqueness.

// 3) topKFrequent(arr, k)
// Kembalikan k elemen yang paling sering muncul.
// Metode: hitung frekuensi, gunakan bucket sort (array of lists) -> O(n)
// Time: O(n), Space: O(n)
function topKFrequent(nums, k) {
  const freq = new Map();
  for (let x of nums) freq.set(x, (freq.get(x) || 0) + 1);
  const n = nums.length;
  const buckets = new Array(n + 1).fill(null).map(() => []);
  for (const [num, f] of freq.entries()) buckets[f].push(num);
  const res = [];
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    for (const val of buckets[i]) {
      res.push(val);
      if (res.length === k) break;
    }
  }
  return res;
}

// Naive O(n^2 log n) or O(n^2): repeatedly find max frequency in map.

// --- Contoh / Tes Singkat ---
function _runTests() {
  console.log('subArrayJumlahK([1,1,1], 2) ->', subArrayJumlahK([1, 1, 1], 2), 'expected 2');
  console.log("firstUniqueChar('leetcode') ->", firstUniqueChar('leetcode'), 'expected 0');
  console.log('topKFrequent([1,1,1,2,2,3], 2) ->', topKFrequent([1, 1, 1, 2, 2, 3], 2), 'expected [1,2]');
}

if (typeof require !== 'undefined' && require && require.main === module) _runTests();

module.exports = { subArrayJumlahK, firstUniqueChar, topKFrequent };

