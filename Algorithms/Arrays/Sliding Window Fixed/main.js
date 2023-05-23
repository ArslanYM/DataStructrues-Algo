// Check if array contains a pair of duplicate values,
// where the two duplicates are no farther than k positions from 
// eachother (i.e. arr[i] == arr[j] and abs(i - j) + 1 <= k).
// O(n * k)
function closeDuplicatesBruteForce(nums, k) {
    for (let L = 0; L < nums.length; L++) {
        for (let R = L + 1; R < Math.min(nums.length, L + k); R++) {
            if (nums[L] == nums[R]) {
                return true;
            }
        }
    }
    return false;
}

// Same problem using sliding window.
// O(n)
function closeDuplicates(nums, k) {
    let window = new Set();     //Cur window of size <= k
    let L = 0;

    for (let R = 0; R < nums.length; R++) {
        if (R - L + 1 > k) {
            window.delete(nums[L]);
            L++;
        }
        if (window.has(nums[R])) {
            return true;
        }
        window.add(nums[R]);
    }
    return false;
}