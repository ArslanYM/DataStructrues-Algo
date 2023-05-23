// Given a string of characters, return true if it's a palindrome,
// return false otherwise: O(n)
function isPalindrome(word) {
    let L = 0, R = word.length - 1;
    while (L < R) {
        if (word.charAt(L) != word.charAt(R)) {
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
function targetSum(nums, target) {
    let L = 0, R = nums.length - 1;
    while (L < R) {
        if (nums[L] + nums[R] > target) {
            R--;
        } else if (nums[L] + nums[R] < target) {
            L++;
        } else {
            return [L, R];
        }    
    }
    return null;
}  

// Move all unique values in the array to the front in-place.
function removeDuplicatesInPlace(nums) {
    let L = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i- 1]) {
            nums[L] = nums[i];
            L++;
        }
    }
    return L;
}
