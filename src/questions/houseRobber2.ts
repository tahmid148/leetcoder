function rob2(nums: number[]): number {
  let dp = new Array(nums.length).fill(-1);

  const dfs = (i: number) => {
    if (i >= nums.length) return 0;
    if (dp[i] !== -1) return dp[i];

    dp[i] = Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
    return dp[i];
  };

  return dfs(0);
}

function rob(nums: number[]): number {
  const noFirst = nums.slice(1);
  const noLast = nums.slice(0, nums.length - 1);

  return nums.length === 1 ? nums[0] : Math.max(rob2(noFirst), rob2(noLast));
}

const nums = [1];
console.log(rob(nums));
