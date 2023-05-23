public class SlidingWindowVariableSize {
    
    // Find the length of longest subarray with the same 
    // value in each position: O(n)
    public static int longestSubarray(int[] nums) {
        int length = 0;
        int L = 0;

        for (int R = 0; R < nums.length; R++) {
            if (nums[L] != nums[R]) {
                L = R;
            }
            length = Math.max(length, R - L + 1);
        }
        return length;
    }

    // Find length of minimum size subarray where the sum is 
    // greater than or equal to the target: O(n)
    public static int shortestSubarray(int[] nums, int target) {
        int L = 0, total = 0;
        int length = Integer.MAX_VALUE;

        for (int R = 0; R < nums.length; R++) {
            total += nums[R];
            while (total >= target) {
                length = Math.min(R - L + 1, length);
                total -= nums[L];
                L++;
            }
        }

        if (length ==  Integer.MAX_VALUE) {
            return 0;
        } 
        return length;
    }
}