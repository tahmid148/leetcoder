function change_top_down(amount: number, coins: number[]): number {

    let cache: number[][] = Array.from({ length: amount + 1 }, () => new Array(coins.length).fill(-1));

    const dfs = (a: number, i: number): number => {

        if (a > amount) {
            return 0;
        }

        if (i >= coins.length) {
            return 0;
        }

        if (cache[a][i] !== -1) {
            return cache[a][i];
        }

        if (a === amount) {
            return 1;
        }

        let res = 0;

        for (let j = i; j < coins.length; j++) {
            const next = a + coins[j];
            if (next <= amount) {
                if (cache[next][j] === -1) {
                    cache[next][j] = dfs(next, j);
                }
                res += cache[next][j];
            }
        }

        return cache[a][i] = res;
    }

    const res = dfs(0, 0);
    console.log(cache);
    return res;
};

function change(amount: number, coins: number[]): number {

    let dp: number[][] = Array.from({ length: coins.length }, () => new Array(amount + 1).fill(0));

    for (let coinIdx = 0; coinIdx < coins.length; coinIdx++) {
        for (let a = 0; a < amount + 1; a++) {

            if (a === 0) {
                dp[coinIdx][a] = 1;
            } else {
                const above = coinIdx === 0 ? 0 : dp[coinIdx - 1][a];
                const left = a - coins[coinIdx] < 0 ? 0 : dp[coinIdx][a - coins[coinIdx]];
                dp[coinIdx][a] = above + left;
            }

        }
    }

    return dp[coins.length - 1][amount];
}

const amount = 5;
const coins = [1, 2, 5];
console.log(change(amount, coins));