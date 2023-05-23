#include <vector>
#include <string>ß
#include <algorithm>
#include <iostream>

using std::vector;
using std::string;
using std::max;
using std::min;

// Given a string of characters, return true if it's a palindrome,
// return false otherwise: O(n)
bool isPalindrome(string word) {
    int L = 0, R = word.length() - 1;
    while (L < R) {
        if (word[L] != word[R]) {
            return false;
        }       
        L++;
        R--;
    }

    return true;
}

//  Given a sorted array of integers, return the indices
//  of two elements (in different positions) that sum up to
//  the target value. Assume there is exactly one solution.
//  O(n)
vector<int> targetSum(vector<int>& nums, int target) {
    int L = 0, R = nums.size() - 1;
    while (L < R) {
        if (nums[L] + nums[R] > target) {
            R--;
        } else if (nums[L] + nums[R] < target) {
            L++;
        } else {
            return vector<int>{L, R};
        }    
    }
}  