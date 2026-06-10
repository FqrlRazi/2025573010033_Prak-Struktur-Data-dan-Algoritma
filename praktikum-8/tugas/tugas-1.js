// Implementasi HashMap dengan Linear Probing dan Tombstone
class HashMapLinearProbing {
  constructor(initialCapacity = 8) {
    this._capacity = initialCapacity;
    this._size = 0; // number of active elements
    this._tombstones = 0; // number of deleted markers
    this._keys = new Array(this._capacity).fill(null);
    this._values = new Array(this._capacity).fill(null);
    this._states = new Array(this._capacity).fill(0); // 0 = empty, 1 = used, 2 = tombstone
  }

  _hash(key) {
    let h = 0;
    const s = String(key);
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) - h) + s.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h) % this._capacity;
  }

  _probeIndex(key) {
    let idx = this._hash(key);
    let firstTombstone = -1;
    for (let i = 0; i < this._capacity; i++) {
      const state = this._states[idx];
      if (state === 0) {
        return firstTombstone !== -1 ? firstTombstone : idx;
      }
      if (state === 2 && firstTombstone === -1) {
        firstTombstone = idx;
      }
      if (state === 1 && this._keys[idx] === key) {
        return idx;
      }
      idx = (idx + 1) % this._capacity;
    }
    return firstTombstone !== -1 ? firstTombstone : -1;
  }

  set(key, value) {
    if ((this._size + this._tombstones) / this._capacity > 0.7) {
      this._resize(this._capacity * 2);
    }

    const idx = this._probeIndex(key);
    if (idx === -1) throw new Error('HashMap is full');

    if (this._states[idx] !== 1) {
      // inserting new slot
      if (this._states[idx] === 2) this._tombstones--;
      this._keys[idx] = key;
      this._values[idx] = value;
      this._states[idx] = 1;
      this._size++;
    } else {
      // updating existing
      this._values[idx] = value;
    }
  }

  get(key) {
    let idx = this._hash(key);
    for (let i = 0; i < this._capacity; i++) {
      const state = this._states[idx];
      if (state === 0) return undefined;
      if (state === 1 && this._keys[idx] === key) return this._values[idx];
      idx = (idx + 1) % this._capacity;
    }
    return undefined;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  delete(key) {
    let idx = this._hash(key);
    for (let i = 0; i < this._capacity; i++) {
      const state = this._states[idx];
      if (state === 0) return false;
      if (state === 1 && this._keys[idx] === key) {
        this._states[idx] = 2; // tombstone
        this._keys[idx] = null;
        this._values[idx] = null;
        this._size--;
        this._tombstones++;
        return true;
      }
      idx = (idx + 1) % this._capacity;
    }
    return false;
  }

  _resize(newCapacity) {
    const oldKeys = this._keys;
    const oldValues = this._values;
    const oldStates = this._states;

    this._capacity = newCapacity;
    this._keys = new Array(this._capacity).fill(null);
    this._values = new Array(this._capacity).fill(null);
    this._states = new Array(this._capacity).fill(0);
    this._size = 0;
    this._tombstones = 0;

    for (let i = 0; i < oldKeys.length; i++) {
      if (oldStates[i] === 1) {
        this.set(oldKeys[i], oldValues[i]);
      }
    }
  }

  entries() {
    const out = [];
    for (let i = 0; i < this._capacity; i++) {
      if (this._states[i] === 1) out.push([this._keys[i], this._values[i]]);
    }
    return out;
  }

  get size() { return this._size; }
  get capacity() { return this._capacity; }
}

// Simple HashMap using chaining for comparison
class HashMapChaining {
  constructor(initialCapacity = 8) {
    this._capacity = initialCapacity;
    this._buckets = new Array(this._capacity).fill(null).map(() => []);
    this._size = 0;
  }

  _hash(key) {
    let h = 0;
    const s = String(key);
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) - h) + s.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h) % this._capacity;
  }

  set(key, value) {
    const idx = this._hash(key);
    const bucket = this._buckets[idx];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this._size++;
  }

  get(key) {
    const idx = this._hash(key);
    const bucket = this._buckets[idx];
    for (let i = 0; i < bucket.length; i++) if (bucket[i][0] === key) return bucket[i][1];
    return undefined;
  }

  delete(key) {
    const idx = this._hash(key);
    const bucket = this._buckets[idx];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this._size--;
        return true;
      }
    }
    return false;
  }

  entries() {
    const out = [];
    for (const b of this._buckets) for (const kv of b) out.push(kv);
    return out;
  }

  get size() { return this._size; }
  get capacity() { return this._capacity; }
}

// Simple benchmark to compare distribution and basic operation times
function benchmark() {
  const n = 20000;
  const keys = [];
  for (let i = 0; i < n; i++) keys.push('key_' + Math.floor(Math.random() * n));

  const lm = new HashMapLinearProbing(16);
  const ch = new HashMapChaining(16);

  console.time('linear-insert');
  for (let k of keys) lm.set(k, k.length);
  console.timeEnd('linear-insert');

  console.time('chaining-insert');
  for (let k of keys) ch.set(k, k.length);
  console.timeEnd('chaining-insert');

  console.time('linear-get');
  for (let k of keys) lm.get(k);
  console.timeEnd('linear-get');

  console.time('chaining-get');
  for (let k of keys) ch.get(k);
  console.timeEnd('chaining-get');

  console.log('linear size/capacity', lm.size, lm.capacity);
  console.log('chaining size/capacity', ch.size, ch.capacity);

  console.log('linear tombstones:', lm._tombstones);
}

if (typeof require !== 'undefined' && require && require.main === module) {
  benchmark();
}

module.exports = { HashMapLinearProbing, HashMapChaining };
