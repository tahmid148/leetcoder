function findTargetSumWays_top_down(nums: number[], target: number): number {

    // (nums, sum) -> integer
    let cacheMap: Map<number, Map<number, number>> = new Map();

    const dfs = (i: number, currSum: number): number => {

        if (cacheMap.get(i)?.has(currSum)) {
            return cacheMap.get(i)!.get(currSum)!;
        }

        if (i === nums.length) {
            return currSum === target ? 1 : 0;
        }

        const res = dfs(i + 1, currSum + nums[i]) + dfs(i + 1, currSum - nums[i]);

        // Cache the result
        if (!cacheMap.has(i)) {
            cacheMap.set(i, new Map());
        }
        cacheMap.get(i)!.set(currSum, res);

        return res;
    }

    const x = dfs(0, 0);
    console.log(cacheMap);
    return x;
};

function findTargetSumWays_bottom_up(nums: number[], target: number): number {
    const NUMS_TOTAL = nums.reduce((prev, curr) => prev + curr, 0);
    const NUM_OF_SUMS = (NUMS_TOTAL * 2) + 1;

    const dp: number[][] = Array.from({ length: nums.length + 1 }, () => new Array(NUM_OF_SUMS).fill(0));

    dp[0][NUMS_TOTAL] = 1; // Starting at sum 0 (shifted by NUMS_TOTAL)

    for (let i = 1; i <= nums.length; i++) {
        for (let sum = -NUMS_TOTAL; sum <= NUMS_TOTAL; sum++) {
            const index = sum + NUMS_TOTAL;
            const num = nums[i - 1]; // current number we're placing +/- on

            const leftIndex = index - num;
            const rightIndex = index + num;

            if (leftIndex >= 0 && leftIndex < NUM_OF_SUMS) {
                dp[i][index] += dp[i - 1][leftIndex];
            }

            if (rightIndex >= 0 && rightIndex < NUM_OF_SUMS) {
                dp[i][index] += dp[i - 1][rightIndex];
            }
        }
    }

    const targetIndex = target + NUMS_TOTAL;
    return dp[nums.length][targetIndex] ?? 0;
}


const nums: number[] = [1, 1, 1, 1, 1];
const target: number = 3;
console.log('Result: ' + findTargetSumWays_bottom_up(nums, target));