function findMin(nums: number[]): number {
  let lo = 0,
    hi = nums.length;

  while (lo < hi) {
    const midpoint = Math.floor(lo + (hi - lo) / 2),
      toLeft = (midpoint - 1) % nums.length,
      toRight = (midpoint + 1) % nums.length;
    const curr = nums[midpoint],
      left = nums[toLeft],
      right = nums[toRight];
    if (right <= curr) {
      return right;
    } else if (curr <= left) {
      return curr;
    } else if (nums[lo] <= curr) {
      lo = midpoint + 1;
    } else {
      hi = midpoint;
    }
  }

  return nums[lo];
}

const nums = [3, 4, 5, 1, 2];
// const nums = [11, 13, 15, 17];
// const nums = [2, 1];
// const nums = [5, 1, 2, 3, 4];
// const nums = [1];
console.log(findMin(nums));
