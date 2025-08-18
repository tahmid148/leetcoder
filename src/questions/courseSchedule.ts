function canFinishOG(numCourses: number, prerequisites: number[][]): boolean {
  if (!prerequisites.length) {
    return true;
  }
  const ROWS = prerequisites.length,
    COLS = prerequisites[0].length;

  let adjacencyList: number[][] = Array.from({ length: numCourses }, () => []);
  let visited: Set<number> = new Set();

  for (let r = 0; r < ROWS; r++) {
    const a = prerequisites[r][0];
    const b = prerequisites[r][1];
    adjacencyList[a].push(b);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i, [])) {
      return false;
    }
  }

  function dfs(currentNode: number, path: number[]): boolean {
    if (visited.has(currentNode)) {
      return true;
    }

    if (path.includes(currentNode)) {
      return false;
    }
    path.push(currentNode);
    const neighbors = adjacencyList[currentNode];

    for (let neighbor of neighbors) {
      if (!dfs(neighbor, path)) {
        return false;
      }
    }

    path.pop();

    visited.add(currentNode);
    return true;
  }

  return true;
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const adjacencyList: number[][] = Array.from(
    { length: numCourses },
    () => []
  );
  prerequisites.forEach(([a, b]) => adjacencyList[a].push(b));

  let nodesWithNoCycle: Set<number> = new Set();

  const dfs = (node: number, path: number[]): boolean => {
    // DFS returns true if detects a cycle
    if (path.includes(node)) return true;

    if (nodesWithNoCycle.has(node)) return false;

    const neightborNodes = adjacencyList[node];

    path.push(node);

    for (const neighbor of neightborNodes) {
      if (dfs(neighbor, path)) return true;
    }

    path.pop();

    nodesWithNoCycle.add(node);

    return false;
  };

  for (let course = 0; course < numCourses; course++) {
    console.log(`Neighbors of ${course}: [${adjacencyList[course]}]`);
    if (dfs(course, [])) return false;
  }

  return true;
}

let numCourses = 7;
let prerequisites = [
  [1, 0],
  [0, 3],
  [0, 2],
  [3, 2],
  [2, 5],
  [4, 5],
  [5, 6],
  [2, 4],
];

// let numCourses = 3;
// let prerequisites = [
//   [1, 0],
//   [1, 2],
//   [0, 1],
// ];

console.log("Result: " + canFinish(numCourses, prerequisites));
