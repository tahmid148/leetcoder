class KthLargest {
    public k: number;
    private minHeap: number[];

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.minHeap = [];

        for (let n of nums) {
            this.add(n);
        }

        while (this.minHeap.length > k) {
            this.remove();
        }
    }

    private heapifyUp(idx: number): void {
        let parentIndex = this.parentIndex(idx);
        if (parentIndex >= 0) {
            const parentNode = this.minHeap[parentIndex];
            const currentNode = this.minHeap[idx];
            if (currentNode < parentNode) {
                // Swap
                this.minHeap[parentIndex] = currentNode;
                this.minHeap[idx] = parentNode;
                this.heapifyUp(parentIndex);
            }
        }
    }

    private remove() {
        this.minHeap.shift();
        this.minHeap.unshift(this.minHeap.pop()!);
        this.heapifyDown(0);
    }

    private heapifyDown(idx: number): void {
        const leftChildIndex = this.leftChildIndex(idx);
        const rightChildIndex = this.rightChildIndex(idx);
        if ((leftChildIndex <= this.minHeap.length - 1) || (rightChildIndex <= this.minHeap.length - 1)) {
            let leftChildNode = Number.MAX_SAFE_INTEGER, rightChildNode = Number.MAX_SAFE_INTEGER;
            if (leftChildIndex <= this.minHeap.length - 1) {
                leftChildNode = this.minHeap[leftChildIndex];
            }
            if (rightChildIndex <= this.minHeap.length - 1) {
                rightChildNode = this.minHeap[rightChildIndex];
            }
            const currentNode = this.minHeap[idx];
            const smallestChildNode = Math.min(leftChildNode, rightChildNode);
            if (currentNode > smallestChildNode) {
                // Swap with the child
                if (smallestChildNode === leftChildNode) {
                    this.minHeap[idx] = leftChildNode;
                    this.minHeap[leftChildIndex] = currentNode;
                    this.heapifyDown(leftChildIndex);
                } else if (smallestChildNode === rightChildNode) {
                    this.minHeap[idx] = rightChildNode;
                    this.minHeap[rightChildIndex] = currentNode;
                    this.heapifyDown(rightChildIndex);
                }
            }
        }
    }

    private parentIndex(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private leftChildIndex(idx: number): number {
        return (2 * idx) + 1;
    }

    private rightChildIndex(idx: number): number {
        return (2 * idx) + 2;
    }

    add(val: number): number {
        this.minHeap.push(val);
        this.heapifyUp(this.minHeap.length - 1);
        if (this.minHeap.length > this.k) {
            this.remove();
        }
        return this.minHeap[0];
    }
}

let kthLargest: KthLargest = new KthLargest(4,[7,7,7,7,8,3]);
console.log(kthLargest.add(2)); // 2
console.log(kthLargest.add(10)); // 7
console.log(kthLargest.add(9)); // 7 
console.log(kthLargest.add(9)); // 8

// let kthLargest: KthLargest = new KthLargest(3, [4, 5, 8, 2]);
// console.log(kthLargest.add(3)); // return 4
// console.log(kthLargest.add(5)); // return 5
// console.log(kthLargest.add(10)); // return 5
// console.log(kthLargest.add(9)); // return 8
// console.log(kthLargest.add(4)); // return 8