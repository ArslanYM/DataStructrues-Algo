#include <vector>
#include <algorithm>

using std::vector;
using std::max;

// Brute Force: O(n^2)
int bruteForce(vector<int>& nums) {
    int maxSum = nums[0];

    for (int i = 0; i < nums.size(); i++) {
        int curSum = 0;
        for (int j = i; j < nums.size(); j++) {
            curSum += nums[j];
            maxSum = max(maxSum, curSum);
        }
    }
    return maxSum;
}

// Kadane's Algorithm: O(n)
int kadanes(vector<int>& nums) {
    int maxSum = nums[0];
    int curSum = 0;

    for (int n : nums) {
        curSum = max(curSum, 0);
        curSum += n;
        maxSum = max(maxSum, curSum);
    }
    return maxSum;
}

// Return the left and right index of the max subarray sum,
// assuming there's exactly one result (no ties).
// Sliding window variation of Kadane's: O(n)
vector<int> slidingWindow(vector<int> nums) {
    int maxSum = nums[0];
    int curSum = 0;
    int maxL = 0, maxR = 0;
    int L = 0;

    for (int R = 0; R < nums.size(); R++) {
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
    return vector<int>{maxL, maxR};
}   