function calcDistance(a: number[], b: number[]): number {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function minCostConnectPoints(points: number[][]): number {
  let visited: Set<number> = new Set();
  let cheapestPathToIndex: number[] = new Array(points.length).fill(Infinity);
  let acc = 0;

  if (points.length > 0) {
    visited.add(0);

    for (let i = 0; i < points.length; i++) {
      if (visited.has(i)) continue;
      cheapestPathToIndex[i] = calcDistance(points[0], points[i]);
    }
  }

  while (visited.size < points.length) {
    const nextCheapestValue = Math.min(...cheapestPathToIndex);
    const nextCheapestIndex = cheapestPathToIndex.findIndex(
      (v) => v === nextCheapestValue
    )!;
    acc += nextCheapestValue;
    visited.add(nextCheapestIndex);
    cheapestPathToIndex[nextCheapestIndex] = Infinity;

    for (let i = 0; i < points.length; i++) {
      if (visited.has(i)) continue;
      cheapestPathToIndex[i] = Math.min(
        cheapestPathToIndex[i],
        calcDistance(points[nextCheapestIndex], points[i])
      );
    }
  }

  return acc;
}

const points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];
console.log(minCostConnectPoints(points));
