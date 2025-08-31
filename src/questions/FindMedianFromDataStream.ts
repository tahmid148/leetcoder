import { MaxHeap, MinHeap } from "../classes/Heap";

class MedianFinder {
  leftHeap: MaxHeap;
  rightHeap: MinHeap;

  constructor() {
    this.leftHeap = new MaxHeap();
    this.rightHeap = new MinHeap();
  }

  addNum(num: number): void {
    if (num <= (this.leftHeap.peek() ?? Number.MAX_SAFE_INTEGER)) {
      this.leftHeap.add(num);
    } else {
      this.rightHeap.add(num);
    }
    this.balance();

    console.log("left", this.leftHeap.heap);
    console.log("right", this.rightHeap.heap);
  }

  private balance(): void {
    // Ensure heaps differ by at most 1 element
    if (this.leftHeap.size() > this.rightHeap.size() + 1) {
      const max = this.leftHeap.pop()!;
      this.rightHeap.add(max);
    } else if (this.rightHeap.size() > this.leftHeap.size() + 1) {
      const min = this.rightHeap.pop()!;
      this.leftHeap.add(min);
    }
  }

  findMedian(): number {
    const totalSize = this.leftHeap.size() + this.rightHeap.size();

    if (totalSize % 2 === 1) {
      // Odd case
      if (this.leftHeap.size() > this.rightHeap.size()) {
        return this.leftHeap.peek()!;
      } else {
        return this.rightHeap.peek()!;
      }
    }

    // Even case
    return ((this.leftHeap.peek() ?? 0) + (this.rightHeap.peek() ?? 0)) / 2;
  }
}

const medianFinder = new MedianFinder();
medianFinder.addNum(-1);
console.log(medianFinder.findMedian());
medianFinder.addNum(-2);
console.log(medianFinder.findMedian());
