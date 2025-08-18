function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let res = 0;

    for (let num of set) {
        let tmp = num;
        let curr = 0;
        if (set.has(num + 1)) {
            while (set.has(tmp)) {
                console.log(`found: ${tmp}`);
                curr++;
                tmp++;
            }
            console.log();
            res = Math.max(res, curr);
        }
    }
    return res;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));