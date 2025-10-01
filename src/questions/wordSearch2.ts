import { Trie, TrieNode } from "./Trie";

function findWords(board: string[][], words: string[]): string[] {
  const res = new Set<string>();
  const trie = new Trie();
  for (const w of words) trie.insert(w);

  function backtrack(i: number, j: number, node: TrieNode, path: string) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
    const ch = board[i][j];
    if (ch === "#") return;

    const nextNode = node.get(ch);
    if (!nextNode) return;

    const nextPath = path + ch;
    if (nextNode.isWordCompleted()) res.add(nextPath);

    board[i][j] = "#";
    backtrack(i + 1, j, nextNode, nextPath);
    backtrack(i - 1, j, nextNode, nextPath);
    backtrack(i, j + 1, nextNode, nextPath);
    backtrack(i, j - 1, nextNode, nextPath);
    board[i][j] = ch;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      backtrack(i, j, trie.root, "");
    }
  }
  return [...res];
}

const board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
const words = ["oath", "pea", "eat", "rain"];
console.log(findWords(board, words));
