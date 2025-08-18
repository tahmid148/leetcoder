function combinationSum2(candidates: number[], target: number): number[][] {
  let res: number[][] = [];

  candidates.sort((a, b) => a - b);
  console.log(candidates);

  const dfs = (index: number, path: number[], sum: number): void => {
    if (index > candidates.length) return;

    console.log(`index: ${index}, path: [${path}], total; ${sum}`);
    if (sum === target) {
      res.push([...path]);
      return;
    } else if (sum > target) {
      return;
    }

    path.push(candidates[index]);
    dfs(index + 1, path, sum + candidates[index]);
    path.pop();
    let next = index + 1;
    while (next < candidates.length && candidates[next] === candidates[index]) {
      next++;
    }
    dfs(next, path, sum);
  };

  dfs(0, [], 0);

  return res;
}

// const candidates = [10, 1, 2, 7, 6, 1, 5]; // [ [1,1,6], [1,2,5], [1,7], [2,6] ]
// const target = 8;

const candidates = [1, 1];
const target = 1;
console.log(combinationSum2(candidates, target));
