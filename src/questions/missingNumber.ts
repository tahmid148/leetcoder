function missingNumber(nums: number[]): number {

    let res = 0;


    for (let i = 0; i <= nums.length; i++) {
        res ^= i;
    }

    for (let n of nums) {
        res ^= n;
    }

    return res;
};

const nums = [0, 1];
console.log(missingNumber(nums));
// console.log(0 ^ 0)

// nums [0, 1]
//