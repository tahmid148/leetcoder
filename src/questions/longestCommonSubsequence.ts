function longestCommonSubsequence_top_down(text1: string, text2: string): number {

    let cache: number[][] = Array.from({ length: text1.length }, () => new Array(text2.length).fill(-1));

    const dfs = (a: number, b: number): number => {

        if (a > text1.length - 1 || b > text2.length - 1) {
            return 0;
        }

        if (cache[a][b] !== -1) {
            return cache[a][b];
        }

        if (text1[a] === text2[b]) {
            return 1 + dfs(a + 1, b + 1);
        }

        return cache[a][b] = Math.max(dfs(a + 1, b), dfs(a, b + 1));
    }

    const res = dfs(0, 0);

    console.log(cache);
    return res;
};

function longestCommonSubsequence(text1: string, text2: string): number {

    let dp: number[][] = Array.from({ length: text1.length + 1 }, () => new Array(text2.length + 1).fill(0));

    for (let row = text1.length - 1; row >= 0; row--) {
        for (let col = text2.length - 1; col >= 0; col--) {
            if (text1[row] === text2[col]) {
                dp[row][col] = 1 + dp[row + 1][col + 1];
            } else {
                dp[row][col] = Math.max(dp[row + 1][col], dp[row][col + 1]);
            }
        }
    }

    return dp[0][0];
}

const text1 = "abcde";
const text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));