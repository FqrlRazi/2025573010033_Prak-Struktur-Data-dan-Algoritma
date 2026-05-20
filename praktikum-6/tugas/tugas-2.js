// Class Node untuk Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//  Cek apakah Linked List adalah palindrom
function palindromLL(head) {
  if (!head) return true;

  // Konversi ke array
  const arr = [];
  let current = head;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  // Cek apakah array adalah palindrom
  let left = 0, right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}

//  Hapus node ke-n dari akhir
function hapusNDariAkhir(head, n) {
  // Buat dummy node untuk menangani kasus hapus head
  const dummy = new Node(0);
  dummy.next = head;

  let first = dummy;
  let second = dummy;

  // Geser first pointer n+1 langkah
  for (let i = 0; i <= n; i++) {
    if (first.next === null) return head;
    first = first.next;
  }

  // Geser both pointer hingga first mencapai akhir
  while (first) {
    first = first.next;
    second = second.next;
  }

  // Hapus node
  second.next = second.next.next;
  return dummy.next;
}

//  Kembalikan node tengah
function tengahLinkedList(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  // Geser fast pointer 2 langkah, slow pointer 1 langkah
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// ===== TEST CASE =====
// Fungsi helper untuk membuat linked list dari array
function createLL(arr) {
  if (arr.length === 0) return null;
  const head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

// Fungsi helper untuk print linked list
function printLL(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return '[' + result.join('→') + ']';
}

console.log('===== TEST PALINDROM LL =====');

// Palindrom - [1→2→3→2→1]
const test1_1 = createLL([1, 2, 3, 2, 1]);
console.log('Test 1:', printLL(test1_1), '→', palindromLL(test1_1), '(expected: true)');

// Bukan palindrom - [1→2→3→4→5]
const test1_2 = createLL([1, 2, 3, 4, 5]);
console.log('Test 2:', printLL(test1_2), '→', palindromLL(test1_2), '(expected: false)');

// Single node - [5]
const test1_3 = createLL([5]);
console.log('Test 3:', printLL(test1_3), '→', palindromLL(test1_3), '(expected: true)');

console.log('\n===== TEST HAPUS N DARI AKHIR =====');

// Hapus node ke-2 dari akhir di [1→2→3→4→5]
const test2_1 = createLL([1, 2, 3, 4, 5]);
const result2_1 = hapusNDariAkhir(test2_1, 2);
console.log('Test 1: Hapus node ke-2 dari [1→2→3→4→5] →', printLL(result2_1), '(expected: [1→2→3→5])');

// Hapus head (node ke-5 dari akhir) di [1→2→3→4→5]
const test2_2 = createLL([1, 2, 3, 4, 5]);
const result2_2 = hapusNDariAkhir(test2_2, 5);
console.log('Test 2: Hapus node ke-5 dari [1→2→3→4→5] →', printLL(result2_2), '(expected: [2→3→4→5])');

// Hapus tail (node ke-1 dari akhir) di [1→2→3→4→5]
const test2_3 = createLL([1, 2, 3, 4, 5]);
const result2_3 = hapusNDariAkhir(test2_3, 1);
console.log('Test 3: Hapus node ke-1 dari [1→2→3→4→5] →', printLL(result2_3), '(expected: [1→2→3→4])');

console.log('\n===== TEST TENGAH LINKED LIST =====');

// List ganjil - [1→2→3→4→5] → node tengah = 3
const test3_1 = createLL([1, 2, 3, 4, 5]);
const result3_1 = tengahLinkedList(test3_1);
console.log('Test 1: Tengah dari [1→2→3→4→5] → value:', result3_1.value, '(expected: 3)');

// List genap - [1→2→3→4] → node tengah kedua = 3
const test3_2 = createLL([1, 2, 3, 4]);
const result3_2 = tengahLinkedList(test3_2);
console.log('Test 2: Tengah dari [1→2→3→4] → value:', result3_2.value, '(expected: 3)');

// Single node - [10] → node tengah = 10
const test3_3 = createLL([10]);
const result3_3 = tengahLinkedList(test3_3);
console.log('Test 3: Tengah dari [10] → value:', result3_3.value, '(expected: 10)');

