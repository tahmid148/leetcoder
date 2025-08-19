class NodeMinHeap {
  private heap: number[][] = [];

  insert(value: number[]) {
    // value = [2, 0] [node value, distance]
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  size(): number {
    return this.heap.length;
  }

  removeMin(): number[] | undefined {
    const n = this.heap.length;
    if (n === 0) return undefined;
    if (n === 1) return this.heap.pop();

    const head = this.heap[0];
    this.swap(0, n - 1);
    this.heap.pop();
    this.heapifyDown(0);
    return head!;
  }

  private heapifyDown(i: number): void {
    const length = this.heap.length;
    const leftIdx = this.left(i),
      rightIdx = this.right(i);

    if (i >= length) return;
    if (rightIdx < length) {
      const left = this.heap[leftIdx],
        right = this.heap[rightIdx],
        curr = this.heap[i];
      const minWeight = Math.min(left[1], right[1]);
      if (minWeight < curr[1]) {
        if (left[1] === minWeight) {
          this.swap(leftIdx, i);
          this.heapifyDown(leftIdx);
        } else if (right[1] === minWeight) {
          this.swap(rightIdx, i);
          this.heapifyDown(rightIdx);
        }
      }
    } else if (leftIdx < length) {
      const left = this.heap[leftIdx];
      if (left[1] < this.heap[i][1]) {
        this.swap(leftIdx, i);
        this.heapifyDown(leftIdx);
      }
    }
  }

  private heapifyUp(i: number): void {
    const parentIdx = this.parent(i);

    if (parentIdx >= 0) {
      const [np, wp] = this.heap[parentIdx],
        [n, w] = this.heap[i];

      if (w < wp) {
        this.swap(i, parentIdx);
        this.heapifyUp(parentIdx);
      }
    }
  }

  private parent(i: number) {
    return Math.floor((i - 1) / 2);
  }
  private left(i: number) {
    return 2 * i + 1;
  }
  private right(i: number) {
    return 2 * i + 2;
  }
  private swap(i: number, j: number) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
}

function networkDelayTime(times: number[][], n: number, k: number): number {
  let minHeap: NodeMinHeap = new NodeMinHeap();
  minHeap.insert([k, 0]);

  let visited: Set<number> = new Set();
  let maxTime: number = 0;

  while (minHeap.size() > 0) {
    const [node, weight] = minHeap.removeMin()!;

    if (visited.has(node)) continue;

    visited.add(node);
    maxTime = Math.max(maxTime, weight);

    const neighbors = times.filter(
      ([a, b, c]) => a === node && !visited.has(b)
    );
    console.log(neighbors);

    for (const [u, v, w] of neighbors) {
      minHeap.insert([v, weight + w]);
    }
  }

  return visited.size === n ? maxTime : -1;
}

// const times = [[1, 2, 1]];
// const n = 2;
// const k = 2;

const times = [
  [1, 2, 1],
  [2, 3, 2],
  [1, 3, 2],
];
const n = 3;
const k = 1;

// const times = [
//   [1, 2, 1],
//   [2, 1, 3],
// ];
// const n = 2;
// const k = 2;

// const times = [
//   [2, 1, 1],
//   [2, 3, 1],
//   [3, 4, 1],
// ];
// const n = 4;
// const k = 2;

console.log(networkDelayTime(times, n, k));
