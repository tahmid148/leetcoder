function numDistinct(s: string, t: string): number {
  let dp: number[][] = Array.from({ length: s.length + 1 }, () =>
    new Array(t.length + 1).fill(-1)
  );

  const dfs = (i: number, j: number): number => {
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }

    if (j === t.length) {
      return 1;
    }

    if (i > s.length - 1 || j > t.length - 1) return 0;

    if (s[i] === t[j]) {
      return (dp[i][j] = dfs(i + 1, j + 1) + dfs(i + 1, j));
    } else {
      return (dp[i][j] = dfs(i + 1, j));
    }
  };

  return dfs(0, 0);
}

const s = "rabbbit";
const t = "rabbit";
console.log(numDistinct(s, t));
