function leastInterval(tasks: string[], n: number): number {
  let numberOfTasks: Map<string, number> = new Map();
  tasks.forEach((t) => numberOfTasks.set(t, (numberOfTasks.get(t) ?? 0) + 1));
  const nums = Array.from(numberOfTasks.values()).sort((a, b) => a - b);

  let maxHeap = new Array();
  let queue: [number, number][] = new Array();

  const getParentIdx = (idx: number): number => Math.floor((idx - 1) / 2);
  const getLeftIdx = (idx: number): number => 2 * idx + 1;
  const getRightIdx = (idx: number): number => 2 * idx + 2;

  const heapifyUp = (idx: number): void => {
    const parentIdx = getParentIdx(idx);
    if (parentIdx >= 0) {
      if (maxHeap[parentIdx] < maxHeap[idx]) {
        const tmp = maxHeap[parentIdx];
        maxHeap[parentIdx] = maxHeap[idx];
        maxHeap[idx] = tmp;
        heapifyUp(parentIdx);
      }
    }
  };

  const heapifyDown = (idx: number): void => {
    const leftIdx = getLeftIdx(idx);
    const rightIdx = getRightIdx(idx);
    let largest = idx;

    if (leftIdx < maxHeap.length && maxHeap[leftIdx] > maxHeap[largest]) {
      largest = leftIdx;
    }

    if (rightIdx < maxHeap.length && maxHeap[rightIdx] > maxHeap[largest]) {
      largest = rightIdx;
    }

    if (largest !== idx) {
      [maxHeap[idx], maxHeap[largest]] = [maxHeap[largest], maxHeap[idx]];
      heapifyDown(largest);
    }
  };

  const add = (n: number): void => {
    maxHeap.push(n);
    heapifyUp(maxHeap.length - 1);
  };

  const remove = (): number => {
    const tmp = maxHeap[0];
    maxHeap[0] = maxHeap[maxHeap.length - 1];
    maxHeap[maxHeap.length - 1] = tmp;
    maxHeap.pop();
    heapifyDown(0);
    return tmp;
  };

  for (const n of nums) {
    add(n);
  }

  let t = 0;
  while (maxHeap.length || queue.length) {
    const head = remove();
    if (head - 1 > 0) {
      queue.push([head - 1, t + n]);
    }
    if (queue.length && t === queue[0][1]) {
      add(queue.shift()![0]);
    }

    t++;
  }

  return t;
}

const tasks = ["A", "A", "A", "B", "B", "B"];
const n = 2;
console.log(leastInterval(tasks, n));
