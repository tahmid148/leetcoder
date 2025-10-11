function maxCoins(nums: number[]): number {
  const length = nums.length;
  nums = [1, ...nums, 1];

  let dp: number[][] = Array.from({ length: nums.length + 1 }, () =>
    new Array(nums.length + 1).fill(-1)
  );

  const dfs = (i: number, j: number): number => {
    console.log(`Let's solve dfs(${i}, ${j})`);
    if (i < 0 || j < 0 || i > nums.length || j > nums.length) return 0;

    if (dp[i][j] !== -1) return dp[i][j];

    if (i > j) return 0;

    let max = 0;
    for (let a = i; a <= j; a++) {
      console.log(`a = ${a}`);
      const pop = nums[i - 1] * nums[a] * nums[j + 1];
      const leftSubproblem = dfs(i, a - 1);
      const rightSubproblem = dfs(a + 1, j);
      console.log(
        `${a} popped = ${pop} + dfs(${i}, ${a - 1}) + dfs(${a + 1}, ${j}) = ${
          pop + leftSubproblem + rightSubproblem
        }`
      );
      max = Math.max(max, pop + leftSubproblem + rightSubproblem);
    }

    return (dp[i][j] = max);
  };

  return dfs(1, length);
}

const nums = [3, 1, 5, 8];
console.log("Result:", maxCoins(nums));
