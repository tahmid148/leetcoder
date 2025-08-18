function validTreeOG(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false;

  let adjacencyList: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([a, b]) => {
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  });
  let visited: Set<number> = new Set();

  console.log(adjacencyList);

  // is valid tree
  const dfs = (node: number, path: number[], prev: number): boolean => {
    // False if contains cycle
    console.log(`Node: ${node}, Path: [${path}], prev: ${prev}`);
    if (path.includes(node)) {
      return false;
    }

    if (visited.has(node)) return true;

    path.push(node);
    for (const neighbor of adjacencyList[node].filter((x) => x !== prev)) {
      if (!dfs(neighbor, path, node)) return false;
    }
    path.pop();
    visited.add(node);

    return true;
  };

  dfs(0, [], -1);

  return visited.size === n;
}

function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false;

  let adjacencyList: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([a, b]) => {
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  });
  let visited: Set<number> = new Set();

  const dfs = (node: number, parent: number): boolean => {
    // Returns false if there is a cycle or not valid tree
    if (visited.has(node)) return false;
    visited.add(node);

    const neighbors = adjacencyList[node];
    for (const neighbor of neighbors) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }

    return true;
  };

  return dfs(0, -1);
}

const n = 5;
const edges = [
  [0, 1],
  [0, 2],
  [2, 3],
  [1, 3], // still a cycle: 0-1-3-2-0
  [1, 4],
];

// const n = 5;
// const edges = [
//   [0, 1],
//   [2, 0],
//   [3, 0],
//   [1, 4],
// ];

// const n = 5;
// const edges = [
//   [0, 1],
//   [0, 2],
//   [0, 3],
//   [1, 4],
// ];

console.log(validTree(n, edges));
