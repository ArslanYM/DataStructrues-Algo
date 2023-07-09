#include <unordered_map>
#include <string>

using std::unordered_map;
using std::string;

class TrieNode {
public:
    unordered_map<char, TrieNode*> children_;
    bool word_ = false;
};

class Trie {
public:
    TrieNode root_;
    
    void insert(string word) {
        TrieNode *curr = &root_;
        for (char c: word) {
            if (curr->children_.count(c) == 0) {
                curr->children_[c] = new TrieNode();
            }
            curr = curr->children_[c];
        }
        curr->word_ = true;
    }

    bool search(string word) {
        TrieNode *curr = &root_;

        for (char c: word) {
            if (curr->children_.count(c) == 0) {
                return false;
            }
            curr = curr->children_[c];
        }
        return curr->word_;
    }

    bool startsWith(string prefix) {
        TrieNode *curr = &root_;
        for (char c: prefix) {
            if (curr->children_.count(c) == 0) {
                return false;
            }
            curr = curr->children_[c];
        }
        return true;
    }
};