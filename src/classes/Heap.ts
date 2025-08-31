export class MinHeap {
  heap: number[];

  constructor() {
    this.heap = new Array();
  }

  public size(): number {
    return this.heap.length;
  }

  public add(n: number): void {
    this.heap.push(n);
    this.heapifyUp(this.heap.length - 1);
  }

  public pop(): number | null {
    if (this.heap.length <= 1) return this.heap.pop() ?? null;
    this.swap(0, this.heap.length - 1);
    const min = this.heap.pop() ?? null;
    this.heapifyDown(0);

    return min;
  }

  public peek(): number | null {
    return this.heap[0] ?? null;
  }

  private heapifyUp(i: number): void {
    if (i > 0) {
      const curr = this.heap[i];
      const parentIdx = this.getParentIdx(i);
      const parent = this.heap[parentIdx];

      if (curr < parent) {
        this.swap(i, parentIdx);
        this.heapifyUp(parentIdx);
      }
    }
  }

  private heapifyDown(i: number): void {
    if (i < this.heap.length) {
      const curr = this.heap[i];
      const leftIdx = this.getLeftChildIdx(i),
        rightIdx = this.getRightChildIdx(i);

      if (rightIdx < this.heap.length) {
        const left = this.heap[leftIdx],
          right = this.heap[rightIdx];

        const minValue = Math.min(left, right);

        if (minValue < curr) {
          if (left === minValue) {
            this.swap(i, leftIdx);
            this.heapifyDown(leftIdx);
          } else {
            this.swap(i, rightIdx);
            this.heapifyDown(rightIdx);
          }
        }
      } else if (leftIdx < this.heap.length) {
        const left = this.heap[leftIdx];
        if (left < curr) {
          this.swap(i, leftIdx);
          this.heapifyDown(leftIdx);
        }
      }
    }
  }
  private swap(i: number, j: number): void {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }

  private getParentIdx(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private getLeftChildIdx(i: number): number {
    return 2 * i + 1;
  }

  private getRightChildIdx(i: number): number {
    return 2 * i + 2;
  }
}

export class MaxHeap {
  heap: number[];

  constructor() {
    this.heap = new Array();
  }

  public size(): number {
    return this.heap.length;
  }

  public add(n: number): void {
    this.heap.push(n);
    this.heapifyUp(this.heap.length - 1);
  }

  public pop(): number | null {
    if (this.heap.length <= 1) return this.heap.pop() ?? null;

    this.swap(0, this.heap.length - 1);
    const max = this.heap.pop()!;
    this.heapifyDown(0);

    return max;
  }

  public peek(): number | null {
    return this.heap[0] ?? null;
  }

  private heapifyUp(i: number): void {
    if (i > 0) {
      const curr = this.heap[i];
      const parentIdx = this.getParentIdx(i);

      const parentValue = this.heap[parentIdx];
      if (curr > parentValue) {
        this.swap(i, parentIdx);
        this.heapifyUp(parentIdx);
      }
    }
  }

  private heapifyDown(i: number): void {
    if (i < this.heap.length) {
      const curr = this.heap[i];
      const leftIdx = this.getLeftChildIdx(i),
        rightIdx = this.getRightChildIdx(i);

      if (rightIdx < this.heap.length) {
        const left = this.heap[leftIdx],
          right = this.heap[rightIdx];

        const maxValue = Math.max(left, right);

        if (maxValue > curr) {
          if (left === maxValue) {
            this.swap(i, leftIdx);
            this.heapifyDown(leftIdx);
          } else {
            this.swap(i, rightIdx);
            this.heapifyDown(rightIdx);
          }
        }
      } else if (leftIdx < this.heap.length) {
        const left = this.heap[leftIdx];
        if (left > curr) {
          this.swap(i, leftIdx);
          this.heapifyDown(leftIdx);
        }
      }
    }
  }

  private swap(i: number, j: number): void {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }

  private getParentIdx(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private getLeftChildIdx(i: number): number {
    return 2 * i + 1;
  }

  private getRightChildIdx(i: number): number {
    return 2 * i + 2;
  }
}
