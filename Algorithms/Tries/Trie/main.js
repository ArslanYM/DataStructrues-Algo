class TrieNode {
    constructor() {
        this.word = false;   // isLeaf
        this.children = new Map();
    }
}

class Trie {
    constructor() {
       this.root = new TrieNode(); 
    }

    insert(word) {
        let curr = this.root;
        for (let c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }
            curr = curr.children.get(c);
        }
        curr.word = true;
    }

    search(word) {
        let curr = this.root;
        for (let c of word) {
            if (!curr.children.has(c)) {
                return false;
            }
            curr = curr.children.get(c);
        }
        return curr.word;
    }

    startsWith(prefix) {
        let curr = this.root;
        for (let c of prefix) {
            if (!curr.children.has(c)) {
                return false;
            }
            curr = curr.children.get(c);
        }
        return true;
    }
}
