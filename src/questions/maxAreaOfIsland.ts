function maxAreaOfIsland(grid: number[][]): number {
    let currentMax: number = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                // DFS
                currentMax = Math.max(dfs(i, j), currentMax);
            }
        }
    }

    function dfs(i: number, j: number): number {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
            return 0;
        }

        if (grid[i][j] === 0 || grid[i][j] === -1) {
            return 0;
        }

        grid[i][j] = -1;
        
        return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
    }

    return currentMax;
};

let grid = 
    [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ];
console.log(maxAreaOfIsland(grid));