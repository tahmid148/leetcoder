function subsetsWithDup(nums: number[]): number[][] {
  let res: number[][] = [];

  nums.sort((a, b) => a - b);
  const dfs = (index: number, path: number[]): void => {
    console.log(`index: ${index}, path: ${path}`);
    if (index === nums.length) {
      res.push([...path]);
      return;
    }

    path.push(nums[index]);
    dfs(index + 1, path);
    path.pop();
    let next = index + 1;
    while (next < nums.length && nums[next] === nums[index]) next++;
    dfs(next, path);
  };

  dfs(0, []);
  return res;
}

const nums = [1, 2, 2];
console.log(subsetsWithDup(nums));
