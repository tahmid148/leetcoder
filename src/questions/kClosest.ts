type Point = {
  x: number;
  y: number;
  distanceToOrigin: number;
};

function kClosest_sorting(points: number[][], k: number): number[][] {
  const pointsWithOrigin: Point[] = points.map(
    (v, i): Point => ({
      x: v[0],
      y: v[1],
      distanceToOrigin: Math.pow(v[0], 2) + Math.pow(v[1], 2),
    })
  );

  pointsWithOrigin.sort((a, b) => a.distanceToOrigin - b.distanceToOrigin);
  return pointsWithOrigin.slice(0, k).map((x) => [x.x, x.y]);
}

function kClosest(points: number[][], k: number): number[][] {
  const heap: Point[] = [];

  const getParentIdx = (i: number) => Math.floor((i - 1) / 2);
  const getLeftIdx = (i: number) => 2 * i + 1;
  const getRightIdx = (i: number) => 2 * i + 2;

  const heapifyUp = (idx: number): void => {
    const parentIdx = getParentIdx(idx);
    if (
      parentIdx >= 0 &&
      heap[idx].distanceToOrigin > heap[parentIdx].distanceToOrigin // MaxHeap
    ) {
      [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
      heapifyUp(parentIdx);
    }
  };

  const heapifyDown = (idx: number): void => {
    const left = getLeftIdx(idx);
    const right = getRightIdx(idx);
    let largest = idx;

    if (
      left < heap.length &&
      heap[left].distanceToOrigin > heap[largest].distanceToOrigin
    ) {
      largest = left;
    }

    if (
      right < heap.length &&
      heap[right].distanceToOrigin > heap[largest].distanceToOrigin
    ) {
      largest = right;
    }

    if (largest !== idx) {
      [heap[idx], heap[largest]] = [heap[largest], heap[idx]];
      heapifyDown(largest);
    }
  };

  for (const [x, y] of points) {
    const point: Point = {
      x,
      y,
      distanceToOrigin: x * x + y * y,
    };

    heap.push(point);
    heapifyUp(heap.length - 1);

    if (heap.length > k) {
      // Remove the farthest (root of MaxHeap)
      [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
      heap.pop();
      heapifyDown(0);
    }
  }

  return heap.map(({ x, y }) => [x, y]);
}

const points = [
  [3, 3],
  [5, -1],
  [-2, 4],
];
const k = 2;
console.log(kClosest(points, k));
