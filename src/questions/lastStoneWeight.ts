function lastStoneWeight(stones: number[]): number {
    let maxHeap: number[] = [];

    // Initialise the maxHeap
    for (let stone of stones) {
        add(stone);
    }

    while (maxHeap.length > 1) {
        let a = remove();
        let b = remove();
        const diff = Math.max(a, b) - Math.min(a, b);
        if (diff > 0) {
            add(diff);
        }
    }

    function add(stone: number): void {
        maxHeap.push(stone);
        heapifyUp(maxHeap.length - 1);
    }

    function remove(): number {
        const rootNode = maxHeap.shift();
        if (maxHeap.length > 1) {
            maxHeap.unshift(maxHeap.pop()!);
            heapifyDown(0);
        }

        return rootNode!;
    }

    function heapifyDown(idx: number): void {
        const leftIdx = leftIndex(idx);
        const rightIdx = rightIndex(idx);
        if (idx <= maxHeap.length - 1 && (leftIdx <= maxHeap.length - 1 || rightIdx <= maxHeap.length - 1)) {
            let leftNode = Number.MIN_SAFE_INTEGER, rightNode = Number.MIN_SAFE_INTEGER;
            const currentNode = maxHeap[idx];
            if (leftIdx <= maxHeap.length - 1) {
                leftNode = maxHeap[leftIdx];
            }
            if (rightIdx <= maxHeap.length - 1) {
                rightNode = maxHeap[rightIdx];
            }
            const largestChild = Math.max(leftNode, rightNode);
            if (currentNode < largestChild) {
                if (largestChild === leftNode) {
                    maxHeap[idx] = leftNode;
                    maxHeap[leftIdx] = currentNode;
                    heapifyDown(leftIdx);
                } else if (largestChild === rightNode) {
                    maxHeap[idx] = rightNode;
                    maxHeap[rightIdx] = currentNode;
                    heapifyDown(rightIdx);
                }
            }
        }
    }

    function heapifyUp(idx: number): void {
        const parentIdx = parentIndex(idx);
        if (parentIdx >= 0) {
            const parentNode = maxHeap[parentIdx];
            const currentNode = maxHeap[idx];
            if (currentNode > parentNode) {
                maxHeap[parentIdx] = currentNode;
                maxHeap[idx] = parentNode;
                heapifyUp(parentIdx);
            } 
        }
    }

    function parentIndex(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    
    function leftIndex(idx: number): number {
        return (2 * idx) + 1;
    }
    
    function rightIndex(idx: number): number {
        return (2 * idx) + 2;
    }

    return maxHeap[0] ?? 0;
};


let stones = [1, 3, 5];
console.log(lastStoneWeight(stones));