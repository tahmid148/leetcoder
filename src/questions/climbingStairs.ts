// Recursive
function climbStairs_recursive(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return climbStairs_recursive(n - 1) + climbStairs_recursive(n - 2);
}

// DFS Recursive
function climbStairs_dfs(n: number): number {

    function dfs(i: number): number {
        if (i >= n) {
            return (i === n) ? 1 : 0;
        }
        return dfs(i + 1) + dfs(i + 2);
    }

    return dfs(0);
}

// Memoization (top-down)
function climbStairs_memoization_dfs(n: number): number {
    
    let cache = new Array(n + 1).fill(-1);

    function dfs(i: number): number {
        if (cache[i] > -1) {
            return cache[i];
        } else if (i >= n) {
            return (i === n) ? 1 : 0;
        }
        cache[i] = dfs(i + 1) + dfs(i + 2);
        return cache[i];
    }

    return dfs(0);
}

function climbStairs_memoization(n: number): number {
    let cache = new Array(n + 1).fill(-1);

    const recurse = (i: number): number => {
        if (cache[i] > -1) {
            return cache[i];
        }
        if (i === 0 || i === 1) {
            return 1;
        }
        cache[i] = recurse(i - 1) + recurse(i - 2);
        return cache[i];
    }

    return recurse(n);
}

// Tabulation (bottom-up)
function climbStairs_tabulation(n: number): number {
    let dp = new Array(n + 1).fill(0);
    dp[n] = dp[n - 1] = 1;

    for (let i = n - 2; i >= 0; i--) {
        dp[i] = dp[i + 1] + dp[i + 2];
    }
    return dp[0];
}

// Space-optimised tabulation (bottom-up)
function climbStairs_space_optimised_tabulation(n: number): number {
    let a = 1, b = 1;

    for (let i = 2; i <= n; i++) {
        let tmp = b;
        b = a + b;
        a = tmp;
    }
    return b;
}