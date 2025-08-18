function pacificAtlantic(heights: number[][]): number[][] {
    let ROWS = heights.length; let COLS = heights[0].length;
    let pacific: boolean[][] = Array.from({length: ROWS}, () => new Array(COLS).fill(false)),
        atlantic: boolean[][] = Array.from({length: ROWS}, () => new Array(COLS).fill(false));

    for (let c = 0; c < COLS; c++) {
        dfs(0, c, pacific, heights[0][c]); // First row
        dfs(ROWS - 1, c, atlantic, heights[ROWS - 1][c]); // Last Row
    }

    for (let r = 0; r < ROWS; r++) {
        console.log('rows!')
        dfs(r, 0, pacific, heights[r][0]);
        dfs(r, COLS - 1, atlantic, heights[r][COLS - 1]);
    }

    function dfs(row: number, col: number, ocean: boolean[][], prevHeight: number): void {
        if (row >= heights.length || col >= heights[0].length || row < 0 || col < 0 || ocean[row][col] || heights[row][col] < prevHeight) {
            return;
        }
        
        console.log(`Row: ${row}, Column: ${col}`);
        ocean[row][col] = true;
        dfs(row + 1, col, ocean, heights[row][col]);
        dfs(row - 1, col, ocean, heights[row][col])
        dfs(row, col + 1, ocean, heights[row][col])
        dfs(row, col - 1, ocean, heights[row][col])
    }

    let result: number[][] = [];

    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
};

let heights = [
                [1, 2, 2, 3, 5],
                [3, 2, 3, 4, 4],
                [2, 4, 5, 3, 1],
                [6, 7, 1, 4 ,5],
                [5, 1, 1, 2, 4]
            ];

console.log(pacificAtlantic(heights));