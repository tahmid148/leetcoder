function coinChange_numberOfWays(coins: number[], amount: number): number {

    const ROWS = coins.length;
    const COLS = amount + 1;

    let ways = Array.from({ length: ROWS }, () => new Array(COLS).fill(0));

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (j === 0) ways[i][j] = 1;
            else {
                if (j - coins[i] >= 0) {
                    ways[i][j] += ways[i][j - coins[i]];
                }
                if (i - 1 >= 0) {
                    ways[i][j] += ways[i - 1][j];
                }
            }

        }
    }

    return ways[coins.length - 1][amount];
};

function coinChange_recursive(coins: number[], amount: number): number {

    const dfs = (currAmount: number): number => {
        if (currAmount === 0) {
            return 0;
        }

        let result = Infinity;

        if (currAmount < 0) {
            return result;
        }

        for (let coin of coins) {
            result = Math.min(1 + dfs(currAmount - coin), result);
        }
 
        return result;
    }

    const result = dfs(amount);
    return result === Infinity ? - 1 : result;
}

function coinChange_top_down(coins: number[], amount: number): number {

    let cache = new Array(amount + 1).fill(-1);

    const dfs = (currAmount: number): number => {
        if (currAmount === 0) {
            return 0;
        }

        if (cache[currAmount] > -1) {
            return cache[currAmount];
        }

        let result = Infinity;

        if (currAmount < 0) {
            return result;
        }

        for (let coin of coins) {
            result = Math.min(1 + dfs(currAmount - coin), result);
        }

        console.log(cache);
        cache[currAmount] = result;
        return result;
    }

    const result = dfs(amount);
    return result === Infinity ? - 1 : result;
}

function coinChange_bottom_up(coins: number[], amount: number): number {

    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let currAmount = 1; currAmount < amount + 1; currAmount++) {
        for (let coin of coins) {
            if (currAmount - coin >= 0) {
                const candidateCount = 1 + dp[currAmount - coin];
                dp[currAmount] = Math.min(dp[currAmount], candidateCount);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}