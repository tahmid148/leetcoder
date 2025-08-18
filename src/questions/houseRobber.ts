function rob_recursive(nums: number[]): number {
    const dfs = (i: number): number => {
        if (i < 0 || i >= nums.length) {
            return 0;
        }

        return Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
    }
    return dfs(0);
};

function rob_memoization(nums: number[]): number {
    let cache = new Array(nums.length).fill(-1);

    const dfs = (i: number): number => {
        if (cache[i] > -1) {
            return cache[i];
        }
        if (i < 0 || i >= nums.length) {
            return 0;
        }

        cache[i] = Math.max(nums[i] + dfs(i + 2), dfs(i + 1))

        return cache[i];
    }
    return dfs(0);
}

function rob_tabulation(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let dp = new Array(nums.length).fill(0);
    dp[nums.length - 1] = nums[nums.length - 1];
    dp[nums.length - 2] = Math.max(nums[nums.length - 1], nums[nums.length - 2]);
    
    for (let i = nums.length - 3; i >= 0; i--) {
        dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
    }

    return dp[0];
}

function rob_tabulation_space_optimised(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let b = nums[nums.length - 1]; // i + 2
    let a = Math.max(nums[nums.length - 1], nums[nums.length - 2]); // i + 1
    
    for (let i = nums.length - 3; i >= 0; i--) {
        let tmp = a;
        a = Math.max(nums[i] + b, tmp);
        b = tmp;
    }

    return a;
}


let numbers = [2, 10, 3];
console.log(rob_tabulation_space_optimised(numbers));