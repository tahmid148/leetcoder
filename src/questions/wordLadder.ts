function isAdjacent(word1: string, word2: string): boolean {
  let diff = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diff++;
  }
  return diff === 1;
}

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  let adjacencyList: { [word: string]: string[] } = {};

  for (const word of wordList) {
    adjacencyList[word] = [];
  }

  for (let i = 0; i < wordList.length; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      const a = wordList[i],
        b = wordList[j];
      if (isAdjacent(a, b)) {
        adjacencyList[a].push(b);
        adjacencyList[b].push(a);
      }
    }
  }

  if (!(beginWord in adjacencyList)) {
    adjacencyList[beginWord] = [];
    for (const w of wordList) {
      if (isAdjacent(beginWord, w)) {
        adjacencyList[beginWord].push(w);
        adjacencyList[w].push(beginWord);
      }
    }
  }

  console.log(adjacencyList);

  let queue = [beginWord];
  let visited: Set<string> = new Set();
  let steps = 0;
  while (queue.length) {
    const length = queue.length;
    steps++;
    for (let i = 0; i < length; i++) {
      const head = queue.shift()!;
      if (head === endWord) return steps;

      for (const neighbor of adjacencyList[head]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }

  return 0;
}

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));
