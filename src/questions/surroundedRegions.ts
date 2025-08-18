/**
 Do not return anything, modify board in-place instead.
 */
 function solve(board: string[][]): void {

    const ROWS = board.length, COLS = board[0].length;
    let reachable: boolean[][] = Array.from({length: ROWS}, () => new Array(COLS).fill(false));

    // Check the top/bottom row
    for (let i = 0; i < COLS; i++) {
        if (board[0][i] === "O") {
            dfs(0, i);
        }
        if (board[ROWS - 1][i] === "O") {
            dfs(ROWS - 1, i);
        }
    }

    // Check left/right column
    for (let i = 0; i < ROWS; i++) {
        if (board[i][0] === "O") {
            dfs(i, 0);
        }
        if (board[i][COLS - 1] === "O") {
            dfs(i, COLS - 1);
        }
    }

    function dfs(row: number, column: number) {
        if (row < 0 || column < 0 || row >= ROWS || column >= COLS || reachable[row][column] || board[row][column] === "X") {
            return;
        }

        reachable[row][column] = true;

        dfs(row + 1, column);
        dfs(row - 1, column);
        dfs(row, column + 1);
        dfs(row, column - 1);
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (!reachable[i][j]) {
                board[i][j] = 'X';
            }
        }
    }

 };

let board = [
    ["X", "X", "X", "X"], 
    ["X", "O", "O", "X"], 
    ["X", "X", "O", "X"], 
    ["X", "O", "X", "X"]
];


solve(board);
console.log(board)