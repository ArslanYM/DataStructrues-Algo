// Visit www.neon.rip for more content!

import java.util.PriorityQueue;
import java.util.Collections;

public class Median {
    
    PriorityQueue<Integer> small;   // maxHeap
    PriorityQueue<Integer> large;   // minHeap

    public Median() {
        small = new PriorityQueue<>(Collections.reverseOrder());
        large = new PriorityQueue<>();
    }

    public void insert(int num) {
        // Push to the max heap and swap with min heap if needed.
        small.add(num);
        int val;
        if (!small.isEmpty() && !large.isEmpty() && small.peek() > large.peek()) {
            val = small.poll();
            large.add(val);
        }

        // Handle uneven size
        if (small.size() > large.size() + 1) {
            val = small.poll();
            large.add(val);
        }
        if (large.size() > small.size() + 1) {
            val = large.poll();
            small.add(val);
        }
    }

    public double getMedian() {
        if (small.size() > large.size()) {
            return (double) (small.peek());
        } else if (large.size() > small.size()) {
            return (double) large.peek();
        }

        // Even # of elements, return avg of two middle nums
        return (double) (small.peek() + large.peek()) / 2;
    }     
}
