function singleNumber(nums: number[]): number {

    let result = 0;
    for (let n of nums) {
        result ^= n;
    }

    return result;
};

const nums = [4, 1, 2, 1, 2]
console.log('result: ' + singleNumber(nums));