const INF = 2147483647;

function islandsAndTreasure(grid: number[][]): void {
  const ROW = grid.length;
  const COL = grid[0].length;

  let queue: [number, number][] = [];

  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COL; col++) {
      if (grid[row][col] === 0) {
        queue.push([row, col]);
      }
    }
  }

  while (queue.length) {
    const length = queue.length;
    console.log(queue);

    for (let i = 0; i < length; i++) {
      const [a, b] = queue.shift()!;

      if (a + 1 < ROW && grid[a + 1][b] === INF) {
        grid[a + 1][b] = grid[a][b] + 1;
        queue.push([a + 1, b]);
      }

      if (a - 1 >= 0 && grid[a - 1][b] === INF) {
        grid[a - 1][b] = grid[a][b] + 1;
        queue.push([a - 1, b]);
      }

      if (b + 1 < COL && grid[a][b + 1] === INF) {
        grid[a][b + 1] = grid[a][b] + 1;
        queue.push([a, b + 1]);
      }

      if (b - 1 >= 0 && grid[a][b - 1] === INF) {
        grid[a][b - 1] = grid[a][b] + 1;
        queue.push([a, b - 1]);
      }
    }
  }
  console.log(grid);
}

const grid = [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

islandsAndTreasure(grid);
