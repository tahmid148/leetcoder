function maxProduct_brute(nums: number[]): number {

    let max = Math.max(...nums);

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            curr *= nums[j];
            max = Math.max(max, curr);
        }
    }

    return max;
};

function maxProduct(nums: number[]): number {
    let result = Math.max(...nums);
    let curMin = 1, curMax = 1;

    for (let n of nums) {
        let tmp = curMax * n;
        curMax = Math.max(tmp, n * curMin, n);
        curMin = Math.min(tmp, n * curMin, n);
        result = Math.max(result, curMax);
    }

    return result;
}

const nums = [0, 1];
console.log(maxProduct(nums));