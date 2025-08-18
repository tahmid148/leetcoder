import { ListNode, printList } from "../classes/ListNode";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let first: ListNode | null = new ListNode(-1, head),
    second = head,
    ptr = first;

  for (let i = 0; i < n; i++) {
    second = second?.next ?? null;
  }

  while (second && first) {
    first = first.next ?? null;
    second = second.next ?? null;
  }

  if (first?.next) {
    first.next = first?.next?.next ?? null;
  }

  return ptr?.next ?? null;
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const n = 4;

// const head = new ListNode(1);
// const n = 1;

printList(removeNthFromEnd(head, n));
