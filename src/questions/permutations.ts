function permute(nums: number[]): number[][] {
  let res: number[][] = [];

  const dfs = (i: number, candidates: number[], path: number[]) => {
    console.log(`i: ${i}, candidates: [${candidates}], path: [${path}]`);

    if (candidates.length === 0) {
      res.push([...path]);
      return;
    }

    if (i >= candidates.length) return;

    const tmp = [...candidates];
    path.push(candidates[i]);
    candidates.splice(i, 1);
    dfs(0, candidates, path);
    path.pop();
    dfs(i + 1, tmp, path);
  };

  dfs(0, nums, []);
  return res;
}

const nums = [1, 2, 3];
console.log(permute(nums));
