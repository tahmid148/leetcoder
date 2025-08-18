function findKthLargest(nums: number[], k: number): number {
  let minHeap: number[] = new Array();

  const getParentIdx = (idx: number): number => Math.floor((idx - 1) / 2);
  const getLeftIdx = (idx: number): number => 2 * idx + 1;
  const getRightIdx = (idx: number): number => 2 * idx + 2;

  const heapifyUp = (idx: number): void => {
    const parentIdx = getParentIdx(idx);

    if (parentIdx >= 0) {
      if (minHeap[idx] < minHeap[parentIdx]) {
        const tmp = minHeap[parentIdx];
        minHeap[parentIdx] = minHeap[idx];
        minHeap[idx] = tmp;
        heapifyUp(parentIdx);
        // [minHeap[idx], minHeap[parentIdx]] = [minHeap[parentIdx], minHeap[idx]];
      }
    }
  };

  const heapifyDown = (idx: number): void => {
    const leftIdx = getLeftIdx(idx);
    const rightIdx = getRightIdx(idx);
    let smallest = idx;

    if (leftIdx < minHeap.length && minHeap[leftIdx] < minHeap[smallest]) {
      smallest = leftIdx;
    }

    if (rightIdx < minHeap.length && minHeap[rightIdx] < minHeap[smallest]) {
      smallest = rightIdx;
    }

    if (smallest !== idx) {
      [minHeap[idx], minHeap[smallest]] = [minHeap[smallest], minHeap[idx]];
      heapifyDown(smallest);
    }
  };

  const add = (n: number): void => {
    minHeap.push(n);
    heapifyUp(minHeap.length - 1);
  };

  const remove = (): void => {
    [minHeap[0], minHeap[minHeap.length - 1]] = [
      minHeap[minHeap.length - 1],
      minHeap[0],
    ]; // swap
    minHeap.pop(); // remove the old root
    heapifyDown(0); // restore heap order from the root
  };

  for (const n of nums) {
    add(n);
  }

  while (minHeap.length > k) {
    remove();
  }

  return minHeap[0];
}

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;

console.log(findKthLargest(nums, k));
