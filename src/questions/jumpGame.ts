function canJump_dfs(nums: number[]): boolean {

    const memo = new Array(nums.length).fill(undefined);

    const dfs = (i: number): boolean => {
        if (i === nums.length - 1) return true;
        if (memo[i] !== undefined) return memo[i];

        for (let j = 1; j <= nums[i]; j++) {
            if (dfs(i + j)) {
                memo[i] = true;
                return true;
            }
        }
        memo[i] = false;
        return false;
    }

    return dfs(0);
};

function canJump(nums: number[]): boolean {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;
}

const nums = [2, 0, 0];
console.log(canJump(nums));