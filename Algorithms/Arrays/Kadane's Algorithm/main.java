import java.util.Arrays;

public class Kadane {
    
    // Brute Force: O(n^2)
    public static int bruteForce(int[] nums) {
        int maxSum = nums[0];

        for (int i = 0; i < nums.length; i++) { 
            int curSum = 0;
            for (int j = i; j < nums.length; j++) {
                curSum += nums[j];
                maxSum = Math.max(maxSum, curSum);
            }    
        }       
        return maxSum;
    }

    // Kadane's Algorithm: O(n)
    public static int kadanes(int[] nums) {
        int maxSum = nums[0];
        int curSum = 0;

        for (int n : nums) {
            curSum = Math.max(curSum, 0);
            curSum += n;
            maxSum = Math.max(maxSum, curSum);
        }
        return maxSum;
    }

    // Return the left and right index of the max subarray sum,
    // assuming there's exactly one result (no ties).
    // Sliding window variation of Kadane's: O(n)
    public static int[] slidingWindow(int[] nums) {
        int maxSum = nums[0];
        int curSum = 0;
        int maxL = 0, maxR = 0;
        int L = 0;

        for (int R = 0; R < nums.length; R++) {
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
        return new int[] {maxL, maxR};
    }   
}