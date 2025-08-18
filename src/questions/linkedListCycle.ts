import { ListNode } from "../classes/ListNode";

function hasCycle(head: ListNode | null): boolean {
  let a = head,
    b = head;

  while (b) {
    a = a?.next ?? null;
    b = b.next?.next ?? null;

    if (a === b) {
      return true;
    }
  }

  return false;
}

const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
hasCycle(list2);
