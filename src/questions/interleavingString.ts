function isInterleave_top_down(s1: string, s2: string, s3: string): boolean {

    if (s1.length + s2.length !== s3.length) return false;

    let cache: boolean[][] = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1));
    console.log(cache);

    const dfs = (i: number, j: number): boolean => {

        if (cache[i][j] !== undefined) {
            return cache[i][j];
        }

        if (i === s1.length && j === s2.length) {
            return true;
        }

        if (i === s1.length) {
            if (s3[i + j] !== s2[j]) return false;
            return dfs(i, j + 1);
        }

        if (j === s2.length) {
            if (s3[i + j] !== s1[i]) return false;
            return dfs(i + 1, j);
        }

        return cache[i][j] = (s1[i] === s3[i + j] ? dfs(i + 1, j) : false) || (s2[j] === s3[i + j] ? dfs(i, j + 1) : false);
    }

    const res = dfs(0, 0);
    console.log(cache);
    return res;
};

function isInterleave(s1: string, s2: string, s3: string): boolean {

    if (s1.length + s2.length !== s3.length) return false;

    let dp: boolean[][] = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1).fill(false));
    dp[s1.length][s2.length] = true;

    for (let row = s1.length; row >= 0; row--) {
        for (let col = s2.length; col >= 0; col--) {
            console.log(`Row: ${row}, Col: ${col} - s3: ${s3[row + col]}`);
            if (row < s1.length && s1[row] === s3[row + col] && dp[row + 1][col]) {
                console.log(`Set true case 1 because s1[${row}] = ${s1[row]}`)
                dp[row][col] = true;
            }
            if (col < s2.length && s2[col] === s3[row + col] && dp[row][col + 1]) {
                console.log(`Set true case 2 becuase s2[${col}] = ${s2[col]}`);
                dp[row][col] = true;
            }
            console.log();
        }
    }

    console.log(dp);

    return dp[0][0];
}

const s1 = "aabcc";
const s2 = "dbbca";
const s3 = "aadbbcbcac";

console.log(isInterleave(s1, s2, s3))