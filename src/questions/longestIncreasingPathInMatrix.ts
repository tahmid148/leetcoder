function longestIncreasingPath(matrix: number[][]): number {
  const ROWS = matrix.length,
    COLS = matrix[0].length;
  let max = 0;

  let dp: number[][] = Array.from({ length: ROWS }, () =>
    new Array(COLS).fill(-1)
  );

  // console.log(dp);

  const dfs = (i: number, j: number, prev: number): number => {
    // console.log(`dfs(${i}, ${j}, ${prev})`);
    if (i < 0 || j < 0 || i > ROWS - 1 || j > COLS - 1) return 0;
    if (matrix[i][j] <= prev) return 0;
    if (dp[i][j] !== -1) return dp[i][j];

    // console.log(dfs(i - 1, j, matrix[i][j]));
    // console.log(dfs(i + 1, j, matrix[i][j]));
    // console.log(dfs(i, j - 1, matrix[i][j]));
    // console.log(dfs(i, j + 1, matrix[i][j]));

    dp[i][j] =
      1 +
      Math.max(
        dfs(i - 1, j, matrix[i][j]),
        dfs(i + 1, j, matrix[i][j]),
        dfs(i, j - 1, matrix[i][j]),
        dfs(i, j + 1, matrix[i][j])
      );

    return dp[i][j];
  };

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      max = Math.max(max, dfs(i, j, -1));
    }
  }

  // console.log(dp);

  return max;
}

const matrix = [
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1],
];
console.log("Result:", longestIncreasingPath(matrix));
