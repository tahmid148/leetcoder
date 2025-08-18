function sortArray(nums: number[]): number[] {
    quicksort(nums, 0, nums.length - 1); // No reassignment needed
    return nums;
}

function quicksort(nums: number[], lo: number, hi: number): void { // No return needed
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(nums, lo, hi);
    quicksort(nums, lo, pivotIdx - 1);
    quicksort(nums, pivotIdx + 1, hi);
}

function partition(nums: number[], lo: number, hi: number): number {
    const pivot = nums[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (nums[i] <= pivot) {
            idx++;
            [nums[i], nums[idx]] = [nums[idx], nums[i]]; // Swap
        }
    }

    idx++;
    [nums[hi], nums[idx]] = [nums[idx], nums[hi]]; // Swap pivot into correct position
    return idx;
}

// Test case
let nums = [5, 2, 3, 1];
console.log(sortArray(nums)); // Output: [1, 2, 3, 5]