function findRedundantConnection(edges: number[][]): number[] {
  console.log(edges);
  const adjacencyList: number[][] = Array.from(
    { length: edges.length + 1 },
    () => []
  );
  let result: number[] = [];

  console.log(adjacencyList);

  let visited: Set<number> = new Set();
  const dfs = (node: number, parent: number): boolean => {
    if (visited.has(node)) {
      return true;
    }

    visited.add(node);

    for (let neighbor of adjacencyList[node]) {
      if (neighbor === parent) continue;
      if (dfs(neighbor, node)) return true;
    }

    return false;
  };

  for (const [a, b] of edges) {
    visited.clear();
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);

    if (dfs(a, -1)) {
      result = [a, b];
      break;
    }
  }

  return result;
}

// const edges: number[][] = [
//   [1, 2],
//   [1, 3],
//   [2, 3],
// ];

const edges = [
  [1, 2],
  [1, 3],
  [2, 3], // first cycle (1–2–3–1)
  [3, 4],
  [4, 1], // another cycle (1–3–4–1)
];

console.log(findRedundantConnection(edges));
