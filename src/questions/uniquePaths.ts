function uniquePaths_top_down(m: number, n: number): number {

    let cache: number[][] = Array.from({ length: m }, () => new Array(n).fill(-1));

    const dfs = (x: number, y: number): number => {

        if (x > m - 1 || y > n - 1) {
            return 0;
        }

        if (cache[x][y] !== -1) {
            return cache[x][y];
        }

        if (x === m - 1 && y === n - 1) {
            return 1;
        }

        return cache[x][y] = dfs(x + 1, y) + dfs(x, y + 1);
    }

    return dfs(0, 0);
};

function uniquePaths_bottom_up(m: number, n: number): number {
    let dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));

    dp[m - 1][n - 1] = 1;

    for (let row = m - 1; row >= 0; row--) {
        for (let col = n - 1; col >= 0; col--) {
            if (row === m - 1 && col === n - 1) continue;
            const down = row + 1 <= m - 1 ? dp[row + 1][col] : 0;
            const right = col + 1 <= n - 1 ? dp[row][col + 1] : 0;
            dp[row][col] = down + right;
        }
    }

    return dp[0][0];
}


const m = 3;
const n = 7;
console.log(uniquePaths_bottom_up(m, n));