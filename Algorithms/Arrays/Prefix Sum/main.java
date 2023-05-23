// Visit www.neon.rip for more content!

import java.util.List;
import java.util.ArrayList;

public class PrefixSum {
    
    List<Integer> prefix;

    public PrefixSum(int[] nums) {
        prefix = new ArrayList<>();
        int total = 0;
        for (int n : nums) {
            total += n;
            prefix.add(total);
        }
    }

    public int rangeSum(int left, int right) {
        int preRight = prefix.get(right);
        int preLeft = left > 0 ? prefix.get(left - 1) : 0;
        return (preRight - preLeft);      
    }
}
