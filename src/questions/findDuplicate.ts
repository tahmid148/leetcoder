function findDuplicate(nums: number[]): number {
  let slow = 0,
    fast = 0;

  while (slow !== undefined && fast !== undefined) {
    slow = nums[slow];
    fast = nums[fast];
    fast = nums[fast];

    if (slow === fast) {
      break;
    }
  }

  console.log(`Slow: ${slow}, Fast: ${fast}`);

  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  console.log(`Slow: ${slow}, Fast: ${fast}`);

  return slow;
}

const nums = [1, 3, 4, 2, 2, 5];
console.log(findDuplicate(nums));
