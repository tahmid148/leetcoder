function combinationSum(candidates: number[], target: number): number[][] {
  let res: number[][] = [];

  const backtrack = (i: number, path: number[], total: number): void => {
    if (total === target) {
      res.push([...path]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    path.push(candidates[i]);
    backtrack(i, path, total + candidates[i]);
    path.pop();
    backtrack(i + 1, path, total);
  };

  backtrack(0, [], 0);
  return res;
}

const candidates = [2, 3, 6, 7];
const target = 7;

console.log(combinationSum(candidates, target));
