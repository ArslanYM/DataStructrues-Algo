# Given a string of characters, return true if it's a palindrome,
# return false otherwise: O(n)
def isPalindrome(word):
    L, R = 0, len(word) - 1
    while L < R:
        if word[L] != word[R]:
            return False
        L += 1
        R -= 1
    return True

# Given a sorted array of integers, return the indices
# of two elements (in different positions) that sum up to
# the target value. Assume there is exactly one solution.
# O(n)
def targetSum(nums, target):
    L, R = 0, len(nums) - 1
    while L < R:
        if nums[L] + nums[R] > target:
            R -= 1
        elif nums[L] + nums[R] < target:
            L += 1
        else:
            return [L, R]