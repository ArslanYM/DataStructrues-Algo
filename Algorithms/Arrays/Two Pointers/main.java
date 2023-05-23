public class TwoPointer {
    
    // Given a string of characters, return true if it's a palindrome,
    // return false otherwise: O(n)
    public static boolean isPalindrome(String word) {
        int L = 0, R = word.length() - 1;
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
    public static int[] targetSum(int[] nums, int target) {
        int L = 0, R = nums.length - 1;
        while (L < R) {
            if (nums[L] + nums[R] > target) {
                R--;
            } else if (nums[L] + nums[R] < target) {
                L++;
            } else {
                return new int[] {L, R};
            }    
        }
        return null;
    }  
}    