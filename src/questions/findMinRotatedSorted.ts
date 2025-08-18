function search(nums: number[], target: number): number {
  let lo = 0,
    hi = nums.length;

  while (lo < hi) {
    console.log(`lo: ${lo} - hi: ${hi}`);
    const midpoint = Math.floor(lo + (hi - lo) / 2);

    console.log(`Midpoint: ${midpoint}`);

    const curr = nums[midpoint];

    if (curr === target) {
      return midpoint;
    } else {
      if (nums[lo] <= curr) {
        // if we are in the left sorted half
        if (target >= nums[lo] && target < curr) {
          hi = midpoint;
        } else {
          lo = midpoint + 1;
        }
      } else {
        // we are in the right-sorted half
        if (target <= nums[hi - 1] && target > curr) {
          lo = midpoint + 1;
        } else {
          hi = midpoint;
        }
      }
    }

    console.log();
  }

  return -1;
}

// const nums = [4, 5, 6, 7, 0, 1, 2];
// const target = 0;
// const nums = [3, 1];
// const target = 3;
const nums = [7, 8, 1, 2, 3, 4, 5, 6];
const target = 2;
console.log(search(nums, target));
