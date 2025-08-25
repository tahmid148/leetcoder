function canPartition(nums: number[]): boolean {
  const totalSum = nums.reduce((a, b) => a + b, 0);
  if (totalSum % 2) return false; // Odd-case no chance

  const target = totalSum / 2;

  let dp: boolean[][] = Array.from({ length: nums.length + 1 }, () =>
    new Array(target + 1).fill(undefined)
  );

  const dfs = (i: number, sum: number): boolean => {
    if (dp[i][sum] !== undefined) return dp[i][sum];
    if (sum === target) return true;
    if (sum > target || i >= nums.length) return (dp[i][sum] = false);

    const result = dfs(i + 1, nums[i] + sum) || dfs(i + 1, sum);
    dp[i][sum] = result;

    return result;
  };

  return dfs(0, 0);
}

const nums = [1, 5, 11, 5];
console.log(canPartition(nums));
