function maxSlidingWindow(nums: number[], k: number): number[] {
  let res: number[] = new Array();

  let queue: number[] = new Array();

  let l = 0,
    r = k - 1;

  const pushToQueue = (index: number): void => {
    if (queue.length === 0) queue.push(index);
    else {
      while (nums[index] >= nums[queue[queue.length - 1]]) {
        queue.pop();
      }
      queue.push(index);
    }
  };

  for (let i = 0; i < k; i++) {
    pushToQueue(i);
  }

  while (r < nums.length) {
    console.log(queue);
    res.push(nums[queue[0]]);
    if (queue[0] === l) queue.shift();
    l++;
    r++;
    pushToQueue(r);
  }

  return res;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
// const nums = [1, 2, 5, 1, 2, 1, 1, 1, 1],k = 3;
// const nums = [1, 1, 1, 1, 1, 4, 5],k = 6;
console.log("Result:", maxSlidingWindow(nums, k));
