// Visit www.neon.rip for more content!

class PrefixSum {
    
    constructor(nums) {
        this.prefix = new Array();
        let total = 0;
        for (let n of nums) {
            total += n;
            this.prefix.push(total);
        }
    }

    rangeSum(left, right) {
        let preRight = this.prefix[right];
        let preLeft = left > 0 ? this.prefix[left - 1] : 0;
        return (preRight - preLeft);      
    }
}