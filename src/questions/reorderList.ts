import { ListNode, printList } from "../classes/ListNode";

function reorderList(head: ListNode | null): void {
  const original = head;

  let slow = head,
    fast = head;

  while (fast) {
    slow = slow?.next ?? null;
    fast = fast.next?.next ?? null;
  }

  let prev = null,
    curr = slow;
  while (curr) {
    let tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }

  let first = head,
    second = prev;
  while (second && first) {
    const tmp1 = first.next;
    const tmp2 = second.next;

    first.next = second;
    second.next = tmp1;

    if (tmp1 && tmp2 === null) {
      tmp1.next = null;
      break;
    }

    first = tmp1;
    second = tmp2;
  }

  printList(original);
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// const head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );
reorderList(head);
