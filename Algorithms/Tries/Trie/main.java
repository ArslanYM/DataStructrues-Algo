import java.util.Map;
import java.util.HashMap;

public class Trie {
    
    class TrieNode {
        boolean word;   // isLeaf
        Map<Character, TrieNode> children = new HashMap<>();
    }
    
    TrieNode root;

    public Trie() {
        root = new TrieNode(); 
    }

    public void insert(String word) {
        TrieNode curr = this.root;
        for (char c : word.toCharArray()) {
            if (!curr.children.containsKey(c)) {
                curr.children.put(c, new TrieNode());
            }
            curr = curr.children.get(c);
        }
        curr.word = true;
    }

    public boolean search(String word) {
        TrieNode curr = this.root;
        for (char c : word.toCharArray()) {
            if (!curr.children.containsKey(c)) {
                return false;
            }
            curr = curr.children.get(c);
        }
        return curr.word;
    }

    public boolean startsWith(String prefix) {
        TrieNode curr = this.root;
        for (char c : prefix.toCharArray()) {
            if (!curr.children.containsKey(c)) {
                return false;
            }
            curr = curr.children.get(c);
        }
        return true;
    }
}