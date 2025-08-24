import { TrieNode } from "./Trie";
class WordDictionary {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word: string): void {
    let curr = this.root;
    const characters = word.split("");
    for (const char of characters) {
      curr.add(char);
      curr = curr.get(char)!;
    }
    curr.setCompleted();
  }

  search(word: string): boolean {
    const backtrack = (i: number, curr: TrieNode): boolean => {
      if (i === word.length) return curr.isWordCompleted();

      if (word[i] === ".") {
        const children = curr.children.values();
        for (const child of children) {
          if (backtrack(i + 1, child)) return true;
        }
      } else {
        if (!curr.children.has(word[i])) return false;
        return backtrack(i + 1, curr.children.get(word[i])!);
      }

      return false;
    };

    return backtrack(0, this.root);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let dic = new WordDictionary();
dic.addWord("bad");
dic.addWord("bob");
console.log(dic.search("b.b"));
