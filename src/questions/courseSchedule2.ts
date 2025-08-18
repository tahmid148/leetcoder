function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let adjacencyList: number[][] = Array.from({ length: numCourses }, () => []);
  prerequisites.forEach(([a, b]) => {
    adjacencyList[b].push(a);
  });
  let result: number[] = [];

  console.log("Adjacency List:", adjacencyList);

  let nodeHasNoCycle: Set<number> = new Set();

  const dfs = (node: number, path: number[]): boolean => {
    console.log(`Node: ${node}, Path: ${path}`);
    // True if contains cycle
    if (path.includes(node)) return true;

    if (nodeHasNoCycle.has(node)) return false;

    const neighbors = adjacencyList[node];

    for (const neighbor of neighbors) {
      if (dfs(neighbor, [...path, node])) return true;
    }

    nodeHasNoCycle.add(node);
    result.unshift(node);
    console.log(`We're done with ${node}`);

    return false;
  };

  for (let course = 0; course < numCourses; course++) {
    if (dfs(course, [])) {
      return [];
    }
  }

  return result;
}

// const numCourses = 2;
// const prerequisites = [[1, 0]];

const numCourses = 4;
const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

console.log(findOrder(numCourses, prerequisites));
