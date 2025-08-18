function numIslands(grid: string[][]): number {
  let islands = 0;

  // Iterate through each row, if you find a 1, mark that whole 1 island as seen and continue iterating

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const curr = grid[i][j];
      if (curr === "1") {
        // DFS
        islands++;
        dfs(i, j);
      }
      console.log(grid);
    }
  }

  function dfs(i: number, j: number): void {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
      return;
    }

    if (grid[i][j] === "0" || grid[i][j] === "-1") {
      return;
    }

    if (grid[i][j] === "1") {
      // Set as seen
      grid[i][j] = "-1";
    }

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  return islands;
}

function numIslands2(grid: string[][]): number {
  const ROW = grid.length;
  const COL = grid[0].length;
  let counter = 0;

  const dfs = (row: number, col: number): void => {
    if (row >= ROW || col >= COL || row < 0 || col < 0) return;
    console.log(grid[row]);

    if (grid[row][col] !== "1") return;

    if (grid[row][col] === "1") {
      grid[row][col] = "#";
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
    }
  };

  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COL; col++) {
      console.log(`Row: ${row}, Col: ${col}`);

      if (grid[row][col] === "1") {
        dfs(row, col);
        counter++;
      }
    }
  }

  return counter;
}

let grids1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let grids2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands2(grids1));
