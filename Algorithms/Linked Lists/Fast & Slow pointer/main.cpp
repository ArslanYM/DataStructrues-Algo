class ListNode {
public:
    ListNode* next;
    int val;
};

// Find the middle of a linked list with two pointers.
// Time: O(n), Space: O(1)
ListNode* middleOfList(ListNode* head) {
    ListNode *slow = head, *fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}


// Determine if the linked list contains a cycle.
// Time: O(n), Space: O(1)
bool hasCycle(ListNode* head) {
    ListNode *slow = head, *fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
}


// Determine if the linked list contains a cycle and
// return the beginning of the cycle, otherwise return null.
// Time: O(n), Space: O(1)
ListNode* cycleStart(ListNode* head) {
    ListNode *slow = head, *fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            break;
        }
    }
    if (!fast || !fast->next) {
        return nullptr;
    }
    ListNode *slow2 = head;
    while (slow != slow2) {
        slow = slow->next;
        slow2 = slow2->next;
    }
    return slow;
}