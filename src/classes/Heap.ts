class MinHeap {
  heap: number[];
  length: number;

  constructor() {
    this.heap = new Array();
    this.length = 0;
  }

  getMin(): number {
    return this.heap[0];
  }

  insert(n: number): void {
    this.length++;
    this.heap.push(n);
    this.bubbleUp();
  }

  removeMin(): void {
    const tmp = this.heap[0];
    this.heap[0] = this.heap[this.length - 1];
    this.heap[this.length - 1] = tmp;
    this.heap.pop();
    this.heapifyDown();
  }
  private bubbleUp(): void {
    let idx = this.length - 1;
    // The index of the parent will be `Math.floor((i - 1) / 2))`
    while (Math.floor((idx - 1) / 2) >= 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] < this.heap[parentIdx]) {
        const tmp = this.heap[parentIdx];
        this.heap[parentIdx] = this.heap[idx];
        this.heap[idx] = tmp;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let curr = 0;
    while (curr < this.length - 3) {
      const leftIdx = 2 * curr + 1;
      const rightIdx = 2 * curr + 2;
      const min = Math.min(this.heap[leftIdx], this.heap[rightIdx]);
      if (this.heap[curr] > min) {
        if (min === this.heap[leftIdx]) {
          const tmp = this.heap[curr];
          this.heap[curr] = this.heap[leftIdx];
          this.heap[leftIdx] = tmp;
        } else {
          const tmp = this.heap[curr];
          this.heap[curr] = this.heap[rightIdx];
          this.heap[rightIdx] = tmp;
        }
      }
    }
  }
}
