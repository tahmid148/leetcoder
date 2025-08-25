function lengthOfLI_top_down(nums: number[]): number {
  let dp = new Array(nums.length).fill(-1);

  const dfs = (i: number): number => {
    if (i === nums.length - 1) return 1;
    if (dp[i] !== -1) return dp[i];

    let result = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        result = Math.max(1 + dfs(j), result);
      }
    }
    dp[i] = result;
    return dp[i];
  };

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, dfs(i));
  }

  console.log(dp);

  return max;
}

function lengthOfLIS(nums: number[]): number {
  let dp = new Array(nums.length).fill(1);

  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  console.log(dp);

  return Math.max(...dp);
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("Result:", lengthOfLIS(nums));
