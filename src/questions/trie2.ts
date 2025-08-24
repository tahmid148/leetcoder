class Trie_Node {
  private value: string | undefined; // Root node is undefined
  private children: Map<string, Trie_Node>;
  private end: boolean;

  constructor(value?: string) {
    this.value = value;
    this.children = new Map();
    this.end = false;
  }

  add(char: string): Trie_Node {
    if (!this.children.has(char)) {
      this.children.set(char, new Trie_Node(char));
    }
    return this.children.get(char)!;
  }

  hasChild(char: string): boolean {
    return this.children.has(char);
  }

  getChild(char: string): Trie_Node | undefined {
    return this.children.get(char);
  }

  setEnd(end: boolean): void {
    this.end = end;
  }

  isEnd(): boolean {
    return this.end;
  }
}

class Trie2 {
  rootNode: Trie_Node;

  constructor() {
    this.rootNode = new Trie_Node();
  }

  insert(word: string): void {
    let curr = this.rootNode;
    const characters = word.split("");
    for (const char of characters) {
      curr.add(char);
      curr = curr.getChild(char)!;
    }
    curr.setEnd(true);
  }

  search(word: string): boolean {
    let curr: Trie_Node | undefined = this.rootNode;
    const characters = word.split("");
    for (const char of characters) {
      if (!curr?.hasChild(char)) {
        return false;
      }
      curr = curr.getChild(char);
    }

    return curr?.isEnd() ?? false;
  }

  startsWith(prefix: string): boolean {
    let curr: Trie_Node | undefined = this.rootNode;
    const characters = prefix.split("");
    for (const char of characters) {
      if (!curr?.hasChild(char)) {
        return false;
      }
      curr = curr.getChild(char);
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie2 = new Trie2();
console.log(trie2.search("a"));
console.log(trie2.startsWith("a"));
