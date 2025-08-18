function subsets(nums: number[]): number[][] {
  let res = [];

  const dfs = (i: number, path: number[]): void => {
    // console.log(`i: ${i}, path: ${path}`);
    if (i >= nums.length) {
      res.push([...path]);
      return;
    }

    path.push(nums[i]);
    dfs(i + 1, path);
    path.pop();
    dfs(i + 1, path);
  };

  dfs(0, []);
  return res;
}

const nums = [1, 2, 3];
console.log(subsets(nums));
