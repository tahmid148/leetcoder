class _ListNode {
  val: number;
  next: _ListNode | null;
  prev: _ListNode | null;

  constructor(val: number, next?: _ListNode | null, prev?: _ListNode | null) {
    this.val = val;
    this.next = next ?? null;
    this.prev = prev ?? null;
  }
}

class LRUCache {
  capacity: number;
  length: number;
  head: _ListNode | null;
  tail: _ListNode | null;
  keyToNode: Map<number, _ListNode>;
  nodeToKey: Map<_ListNode, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.length = 0;
    this.head = this.tail = null;
    this.keyToNode = new Map();
    this.nodeToKey = new Map();
  }

  get(key: number): number {
    const node = this.keyToNode.get(key);

    if (node) {
      if (node === this.head) {
        return node.val;
      }

      if (node.prev) node.prev.next = node.next;
      if (node.next) node.next.prev = node.prev;
      if (node === this.tail) this.tail = node.prev;

      // Move to head;
      node.next = this.head;
      node.prev = null;
      if (this.head) this.head.prev = node;
      this.head = node;

      return node.val;
    }

    return -1;
  }

  put(key: number, value: number): void {
    // If key doesn't already exist
    if (!this.keyToNode.get(key)) {
      // Adding a new key to the cache
      const newNode = new _ListNode(value);

      if (this.head) {
        // Items already exist in the cache
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else {
        // Cache is empty
        this.head = this.tail = newNode;
      }
      this.keyToNode.set(key, newNode);
      this.nodeToKey.set(newNode, key);
      this.length++;
    } else {
      // Updating an existing key
      const existingNode = this.keyToNode.get(key)!;
      //   console.log("we are updating an existing key", existingNode.val);

      // Update tail
      if (this.tail === existingNode && existingNode !== this.head) {
        // console.log("we are updating the tail", this.tail);
        this.tail = this.tail.prev;
      }

      // Move to head
      existingNode.val = value;
      if (existingNode !== this.head) {
        if (existingNode.next) {
          existingNode.next.prev = existingNode.prev;
        }
        if (existingNode.prev) {
          existingNode.prev.next = existingNode.next;
        }
        existingNode.next = existingNode.prev = null;
        this.head!.prev = existingNode;
        existingNode.next = this.head;
        this.head = existingNode;
      }
    }

    // console.log(`Length after updating ${key} to ${value} = ${this.length}`);
    if (this.length > this.capacity) {
      // Evict the tail
      console.log("tail", this.tail);
      const oldTail = this.tail;
      if (oldTail) {
        const keyToRemove = this.nodeToKey.get(oldTail)!;
        this.keyToNode.delete(keyToRemove);
        this.nodeToKey.delete(oldTail);

        this.tail = oldTail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }

        this.length--;
      }
    }

    // console.log("head", this.head);
    // console.log("tail", this.tail);
    // console.log();
  }
}

let lRUCache = new LRUCache(2); // LRU cache capacity = 2
lRUCache.put(2, 1); // cache is {2=1}
lRUCache.put(2, 2); // updates value of key 2 → cache is {2=2}
console.log(lRUCache.get(2)); // returns 2
lRUCache.put(1, 1); // cache is {2=2, 1=1}
lRUCache.put(4, 1); // evicts LRU key 2 → cache is {1=1, 4=1}
console.log(lRUCache.get(2)); // returns -1 (not found)

// let lRUCache: LRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1)); // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2)); // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1)); // return -1 (not found)
// console.log(lRUCache.get(3)); // return 3
// console.log(lRUCache.get(4)); // return 4
