
// Recursive DFS
function minCostClimbingStairs_dfs(cost: number[]): number {

    const dfs = (i: number): number => {
        if (i >= cost.length) {
            return 0;
        }
        return cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
    }

    return Math.min(dfs(0), dfs(1));
}

// Memoization (top-down)
function minCostClimbingStairs_memoization(cost: number[]): number {
    let cache = new Array(cost.length).fill(-1);

    const dfs = (i: number): number => {
        if (cache[i] > -1) {
            return cache[i];
        }
        if (i >= cost.length) {
            return 0;
        }
        cache[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
        return cache[i];
    }

    return Math.min(dfs(0), dfs(1));
}


// Tabulation (bottom-up)
function minCostClimbingStairs_tabulation(cost: number[]): number {
    let dp = new Array(cost.length).fill(0);

    dp[cost.length - 1] = cost[cost.length - 1];
    dp[cost.length - 2] = cost[cost.length - 2];

    for (let i = cost.length - 3; i >= 0; i--) {
        dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
    }

    return Math.min(dp[0], dp[1]);
}

// Space-optimised tabulation (bottom-up)
function minCostClimbingStairs_space_optimized_tabulation(cost: number[]): number {
    let a = cost[cost.length - 2], b = cost[cost.length - 1];

    for (let i = cost.length - 3; i >= 0; i--) {
        let tmp = a;
        a = cost[i] + Math.min(a, b);
        b = tmp;
    }

    return Math.min(a, b);
}