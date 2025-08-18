function maxSubArray(nums: number[]): number {

    let currSum = nums[0];
    let maxSum = nums[0];
    for (let num of nums.slice(1)) {
        currSum = Math.max(num, currSum + num);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));