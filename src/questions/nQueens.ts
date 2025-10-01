function isSafe(board: string[][], row: number, col: number): boolean {
  const n = board.length;

  // column
  for (let r = 0; r < row; r++) if (board[r][col] === "Q") return false;

  // upper-left diagonal
  for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--)
    if (board[r][c] === "Q") return false;

  // upper-right diagonal
  for (let r = row - 1, c = col + 1; r >= 0 && c < n; r--, c++)
    if (board[r][c] === "Q") return false;

  return true;
}

function solveNQueens(n: number): string[][] {
  let paths: string[][] = [];
  let board: string[][] = Array.from({ length: n }, () =>
    new Array(n).fill(".")
  );

  const backtrack = (row: number, col: number): void => {
    if (col >= n) return;
    if (row === n) {
      paths.push(board.map((x) => x.join("")));
      return;
    }

    if (!isSafe(board, row, col)) {
      backtrack(row, col + 1); // try next column
      return;
    }

    board[row][col] = "Q";
    backtrack(row + 1, 0);
    board[row][col] = ".";
    backtrack(row, col + 1);
  };

  backtrack(0, 0);

  return paths;
}

function solveNQueens_optimal(n: number): string[][] {
  let paths: string[][] = [];
  const board: string[][] = Array.from({ length: n }, () =>
    new Array(n).fill(".")
  );

  const cols = new Set<number>();
  const diag1 = new Set<number>();
  const diag2 = new Set<number>();

  function backtrack(row: number) {
    if (row === n) {
      paths.push(board.map((r) => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      // check if column or diagonals are blocked
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col))
        continue;

      // place queen
      board[row][col] = "Q";
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);

      backtrack(row + 1);

      // remove queen (backtrack)
      board[row][col] = ".";
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack(0);
  return paths;
}

const n = 4;
console.log(solveNQueens(n));
