function combinationSum(candidates: number[], target: number): number[][] {
  let foundPaths: number[][] = [];

  const backtrack = (
    start: number,
    currentPath: number[],
    total: number
  ): void => {
    if (total === target) {
      foundPaths.push([...currentPath]);
      return;
    }
    if (total > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      currentPath.push(candidates[i]);
      backtrack(i, currentPath, total + candidates[i]);
      currentPath.pop();
    }
  };

  backtrack(0, [], 0);

  return foundPaths;
}

let candidates = [2, 3, 6, 7];
let target = 7;
console.log(combinationSum(candidates, 7)); // [[2,2,3],[7]]
