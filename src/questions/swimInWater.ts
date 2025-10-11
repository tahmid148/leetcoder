function swimInWaterDFS(grid: number[][]): number {
  const ROWS = grid.length,
    COLS = grid[0].length;

  let time = 0;

  const dfs = (i: number, j: number, visited: boolean[][]): void => {
    if (i < 0 || j < 0 || i >= ROWS || j >= COLS) return;
    if (visited[i][j]) return;
    if (grid[i][j] > time) return;

    visited[i][j] = true;
    dfs(i + 1, j, visited);
    dfs(i, j + 1, visited);
    dfs(i - 1, j, visited);
    dfs(i, j - 1, visited);
  };

  while (true) {
    let visited: boolean[][] = Array.from({ length: ROWS }, () =>
      new Array(COLS).fill(false)
    );
    dfs(0, 0, visited);
    if (visited[ROWS - 1][COLS - 1]) return time;
    console.log(visited);
    time++;
  }
}

type WaterNode = number[]; // [height, i, j]
class nodeMinHeap {
  private heap: WaterNode[];

  constructor() {
    this.heap = [];
  }

  size(): number {
    return this.heap.length;
  }

  insert(node: WaterNode) {
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }

  pop(): WaterNode | undefined {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop()!;

    this.swap(0, this.heap.length - 1);
    const tail = this.heap.pop()!;
    this.heapifyDown(0);

    return tail;
  }

  private heapifyUp(i: number): void {
    if (i > 0) {
      const [currHeight, i1, j1] = this.heap[i];
      const parentIdx = this.parentIdx(i);
      const [parentHeight, i2, j2] = this.heap[parentIdx];

      if (currHeight < parentHeight) {
        this.swap(i, parentIdx);
        this.heapifyUp(parentIdx);
      }
    }
  }

  private heapifyDown(i: number): void {
    if (i < this.heap.length) {
      const [currHeight, i1, j1] = this.heap[i];
      const leftIdx = this.leftIdx(i),
        rightIdx = this.rightIdx(i);

      if (rightIdx < this.heap.length) {
        const [leftHeight, i2, j2] = this.heap[leftIdx];
        const [rightHeight, i3, j3] = this.heap[rightIdx];

        const minChildHeight = Math.min(leftHeight, rightHeight);
        if (currHeight > minChildHeight) {
          if (minChildHeight === leftHeight) {
            this.swap(i, leftIdx);
            this.heapifyDown(leftIdx);
          } else if (minChildHeight === rightHeight) {
            this.swap(i, rightIdx);
            this.heapifyDown(rightIdx);
          }
        }
      } else if (leftIdx < this.heap.length) {
        const [leftHeight, i2, j2] = this.heap[leftIdx];

        if (currHeight > leftHeight) {
          this.swap(i, leftIdx);
          this.heapifyDown(leftIdx);
        }
      }
    }
  }

  private parentIdx(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private leftIdx(i: number) {
    return i * 2 + 1;
  }

  private rightIdx(i: number) {
    return i * 2 + 2;
  }

  private swap(i: number, j: number) {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
}

function swimInWater(grid: number[][]): number {
  const ROWS = grid.length,
    COLS = grid[0].length;
  const queue: nodeMinHeap = new nodeMinHeap();

  let visited: boolean[][] = Array.from({ length: ROWS }, () =>
    new Array(COLS).fill(false)
  );

  queue.insert([grid[0][0], 0, 0]);
  while (queue.size() > 0) {
    console.log(queue);
    const [height, i, j] = queue.pop()!;

    if (i === ROWS - 1 && j === COLS - 1) return height;

    visited[i][j] = true;
    if (i > 0 && !visited[i - 1][j]) {
      queue.insert([Math.max(height, grid[i - 1][j]), i - 1, j]);
      visited[i - 1][j] = true;
    }

    if (j > 0 && !visited[i][j - 1]) {
      queue.insert([Math.max(height, grid[i][j - 1]), i, j - 1]);
      visited[i][j - 1] = true;
    }

    if (i < ROWS - 1 && !visited[i + 1][j]) {
      queue.insert([Math.max(height, grid[i + 1][j]), i + 1, j]);
      visited[i + 1][j] = true;
    }

    if (j < COLS - 1 && !visited[i][j + 1]) {
      queue.insert([Math.max(height, grid[i][j + 1]), i, j + 1]);
      visited[i][j + 1] = true;
    }
  }

  return 0;
}

// const grid = [
//   [0, 2],
//   [1, 3],
// ];

// const grid = [
//   [0, 1, 3],
//   [2, 4, 1],
//   [1, 2, 1],
// ];

const grid = [
  [0, 1, 2, 3, 4],
  [24, 23, 22, 21, 5],
  [12, 13, 14, 15, 16],
  [11, 17, 18, 19, 20],
  [10, 9, 8, 7, 6],
];

console.log(swimInWater(grid));
