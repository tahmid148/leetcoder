function minDistance_top_down(word1: string, word2: string): number {

    let cache: number[][] = Array.from({ length: word1.length + 1 }, () => new Array(word2.length + 1).fill(-1));

    const dfs = (i: number, j: number): number => {

        if (cache[i][j] !== -1) {
            return cache[i][j];
        }

        if (i === word1.length && j === word2.length) return 0;

        if (i === word1.length) return 1 + dfs(i, j + 1);

        if (j === word2.length) return 1 + dfs(i + 1, j);

        if (word1[i] === word2[j]) return dfs(i + 1, j + 1);

        const deleted = dfs(i + 1, j);
        const inserted = dfs(i, j + 1);
        const replaced = dfs(i + 1, j + 1);

        return cache[i][j] = 1 + Math.min(deleted, inserted, replaced);
    }

    const res = dfs(0, 0);
    console.log(cache);

    return res;
};

function minDistance(word1: string, word2: string): number {

    let dp: number[][] = Array.from({ length: word1.length + 1 }, () => new Array(word2.length + 1).fill(0));
    dp[word1.length][word2.length] = 0;

    for (let i = 0; i <= word1.length; i++) dp[i][word2.length] = word1.length - i;
    for (let j = 0; j <= word2.length; j++) dp[word1.length][j] = word2.length - j;


    for (let i = word1.length - 1; i >= 0; i--) {
        for (let j = word2.length - 1; j >= 0; j--) {
            // fill dp[i][j] based on dp[i+1][j], dp[i][j+1], and dp[i+1][j+1]
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i + 1][j + 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
            }
        }
    }

    console.log(dp);

    return dp[0][0];
}

const word1 = "horse";
const word2 = "ros";
console.log('Result: ' + minDistance(word1, word2));