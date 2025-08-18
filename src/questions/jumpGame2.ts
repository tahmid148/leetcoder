function jump_dfs(nums: number[]): number {

    let cache = new Array(nums.length).fill(-1);

    const dfs = (index: number): number => {

        if (cache[index] !== -1) {
            return cache[index];
        }

        if (index === nums.length - 1) {
            return 0;
        }

        let min = Number.MAX_VALUE;
        for (let i = 1; i <= nums[index]; i++) {
            if (index + i >= nums.length) break;
            const res = 1 + dfs(index + i);
            min = Math.min(min, res);
            cache[index] = min;
        }

        return min;
    }

    return dfs(0);
};

function jump(nums: number[]): number {
    let jumps = 0, l = 0, r = 0;

    while (r < nums.length - 1) {
        let farthest = 0;
        for (let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        r = farthest;
        jumps++;
    }

    return jumps;
}

// const nums = [2, 3, 1, 1, 4];
const nums = [5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5];
console.log(jump(nums));