// Brute Force: O(n^2)
function bruteForce(nums) {
    let maxSum = nums[0];

    for (let L = 0; L < nums.length; L++) { 
        let curSum = 0;
        for (let R = L; R < nums.length; R++) {
            curSum += nums[R];
            maxSum = Math.max(maxSum, curSum);
        }    
    }       
    return maxSum;
}

// Kadane's Algorithm: O(n)
function kadanes(nums) {
    let maxSum = nums[0];
    let curSum = 0;

    for (let n of nums) {
        curSum = Math.max(curSum, 0);
        curSum += n;
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}

// Return the left and right index of the max subarray sum,
// assuming there's exactly one result (no ties).
// Sliding window variation of Kadane's: O(n)
function slidingWindow(nums) {
    let maxSum = nums[0];
    let curSum = 0;
    let maxL = 0, maxR = 0;
    let L = 0;

    for (let R = 0; R < nums.length; R++) {
        if (curSum < 0) {
            curSum = 0;
            L = R;
        }
        curSum += nums[R];
        if (curSum > maxSum) {
            maxSum = curSum;
            maxL = L; 
            maxR = R;     
        }    
    }    
    return [maxL, maxR];
}