# Check if array contains a pair of duplicate values,
# where the two duplicates are no farther than k positions from 
# eachother (i.e. arr[i] == arr[j] and abs(i - j) + 1 <= k).
# O(n * k)
def closeDuplicatesBruteForce(nums, k):
    for L in range(len(nums)):
        for R in range(L + 1, min(len(nums), L + k)):
            if nums[L] == nums[R]:
                return True
    return False

# Same problem using sliding window.
# O(n)
def closeDuplicates(nums, k):
    window = set() # Cur window of size <= k
    L = 0

    for R in range(len(nums)):
        if R - L + 1 > k:
            window.remove(nums[L])
            L += 1
        if nums[R] in window:
            return True
        window.add(nums[R])

    return False