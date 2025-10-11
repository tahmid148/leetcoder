function alienOrder(words: string[]): string {
  let adjacencyList: { [char: string]: string[] } = {};
  const letters: Set<string> = new Set(words.reduce((p, c) => p + c));

  for (const letter of letters) {
    adjacencyList[letter] = [];
  }

  for (let i = 1; i < words.length; i++) {
    const a = words[i - 1];
    const b = words[i];
    let foundDiff = false;

    // console.log(`Comparing ${a} and ${b}`);
    for (let j = 0; j < Math.min(a.length, b.length); j++) {
      if (a[j] !== b[j]) {
        // console.log(`Found diff: ${a[j]} -> ${b[j]}`);

        if (!adjacencyList[a[j]].includes(b[j])) adjacencyList[a[j]].push(b[j]);
        foundDiff = true;
        break;
      }
    }

    if (!foundDiff && a.length > b.length) {
      //   console.log(`No diff and ${a} is lnger than ${b}`);
      return "";
    }
  }

  const visited: Set<string> = new Set();
  const currentPath: Set<string> = new Set();
  let res: string[] = [];

  // True if there is a cycle
  const dfs = (curr: string): boolean => {
    if (visited.has(curr)) return false;
    if (currentPath.has(curr)) return true;

    currentPath.add(curr);
    for (const neighbor of adjacencyList[curr]) {
      if (dfs(neighbor)) return true;
    }
    currentPath.delete(curr);
    res.push(curr);
    visited.add(curr);
    return false;
  };

  for (const key of Object.keys(adjacencyList)) {
    if (dfs(key)) return "";
  }

  return res.reverse().join("");
}

// const words = ["apes", "ape"];
// const words = ["wrt", "wrf", "er", "ett", "rftt"];
const words = ["ab", "adc"];
// const words = ["z", "x"];
// const words = ["z", "x", "z"];

console.log(alienOrder(words));
