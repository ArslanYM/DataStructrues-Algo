class ListNode {    
    constructor (val) {
        this.val = val;
        this.next = null;
    } 
}

// Find the middle of a linked list with two pointers.
// Time: O(n), Space: O(1)
function middleOfList(head) {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Determine if the linked list contains a cycle.
// Time: O(n), Space: O(1)
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
}

// Determine if the linked list contains a cycle and
// return the beginning of the cycle, otherwise return null.
// Time: O(n), Space: O(1)
function cycleStart(head) {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            break;
        }
    }
    if (fast == null || fast.next == null) {
        return null;
    }
    let slow2 = head;
    while (slow != slow2) {
        slow = slow.next;
        slow2 = slow2.next;
    }
    return slow;
}
