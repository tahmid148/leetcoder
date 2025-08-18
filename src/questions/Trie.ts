class TrieNode {
    private value: string | undefined; // Root node is undefined
    private children: Map<string, TrieNode>
    private isEndOfWord: boolean;

    constructor(value?: string) {
        this.value = value;
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
    }

    add(str: string): TrieNode { // Returns the child
        if (!this.get(str)) {  // Check if child already exists
            this.children.set(str, new TrieNode(str));       
        }
        return this.children.get(str)!;
    }

    get(value: string): TrieNode | undefined {
        return this.children.get(value);
    }

    isWordCompleted(): boolean {
        return this.isEndOfWord;
    }

    setCompleted(): void {
        this.isEndOfWord = true;
    }

}


class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let currNode = this.root.add(word[0]);

        for (let i = 1; i < word.length; i++) {
            currNode = currNode.add(word.charAt(i));
        }

        currNode.setCompleted();
    }

    search(word: string): boolean {
        let currNode = this.root.get(word[0]);

        for (let i = 1; i < word.length; i++) {
            currNode = currNode?.get(word[i]);
        }

        return currNode?.isWordCompleted() ?? false;
    }

    startsWith(prefix: string): boolean {
        let currNode = this.root.get(prefix[0]);

        for (let i = 1; i < prefix.length; i++) {
            currNode = currNode?.get(prefix[i]);
        }

        return !!currNode;
    }
}

let trie: Trie = new Trie();
trie.insert("apple");

console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
// trie.insert("app");
console.log(trie.search("app"));     // return True
 