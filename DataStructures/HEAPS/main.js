// Visit www.neon.rip for more content!

import { MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';

class Median {

    constructor() {
        this.small = new MaxPriorityQueue({priority: n => n});
        this.large = new MinPriorityQueue({priority: n => n});
    }

    insert(num) {
        // Push to the max heap and swap with min heap if needed.
        this.small.enqueue(num);
        let val;
        if (!this.small.isEmpty() && !this.large.isEmpty()
            && this.small.front().element > this.large.front().element) {
            val = this.small.dequeue().element;
            this.large.enqueue(val);
        }

        // Handle uneven size
        if (this.small.size() > this.large.size() + 1) {
            val = this.small.dequeue().element;
            this.large.enqueue(val);
        }
        if (this.large.size() > this.small.size() + 1) {
            val = this.large.dequeue().element;
            this.small.enqueue(val);
        }
    }

    getMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front().element;
        } else if (this.large.size() > this.small.size()) {
            return  this.large.front().element;
        }

        // Even # of elements, return avg of two middle nums
        return (this.small.front().element + this.large.front().element) / 2;
    }     
}