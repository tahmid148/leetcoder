import { ListNode, printList } from "../classes/ListNode";

function reverseList_recursive(head: ListNode | null): ListNode | null {
  const recurse = (curr: ListNode | null): ListNode | null => {
    if (!curr) return null;
    if (!curr.next) return curr;

    let newHead = recurse(curr.next);
    curr.next.next = curr;
    curr.next = null;

    return newHead;
  };

  return recurse(head);
}

function reverseList_iterative(head: ListNode | null): ListNode | null {
  let prev = null,
    curr = head;

  while (curr !== null) {
    const tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  return prev;
}

// let head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );

let head = new ListNode(1, new ListNode(2, new ListNode(3)));

printList(reverseList_iterative(head));
// reverseList(head);
