function countComponents(n: number, edges: number[][]): number {
  let adjacencyList: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([a, b]) => {
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  });
  let count = 0;
  let visited: Set<number> = new Set();

  console.log(adjacencyList);

  const dfs = (node: number) => {
    if (visited.has(node)) return;

    visited.add(node);
    for (const neighbor of adjacencyList[node]) {
      dfs(neighbor);
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }

  return count;
}

const n = 3;
const edges = [
  [0, 1],
  [0, 2],
  [1, 2],
];

// const n = 3;
// const edges = [
//   [0, 1],
//   [1, 2],
// ];

console.log(countComponents(n, edges));
