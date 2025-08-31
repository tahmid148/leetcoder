import { createListFromArray, ListNode, printList } from "../classes/ListNode";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const getNextHead = (currentNode: ListNode | null): ListNode | null => {
    let n = k;
    while (currentNode && n > 0) {
      currentNode = currentNode.next;
      n--;
    }
    return currentNode;
  };

  const dummy = new ListNode(0, head);
  let last = dummy; // One Node before our group

  while (true) {
    const nextHead = getNextHead(last);
    const nextGroupStart = nextHead?.next;

    if (!nextHead) break;

    let curr = last.next;
    let prev = nextGroupStart; // You want your new tail to point to the old head of the next group

    while (curr !== nextGroupStart) {
      const next = curr?.next;
      curr!.next = prev!;
      prev = curr;
      curr = next!;
    }
    const next = last.next;
    last.next = prev!;
    last = next!;
  }

  return dummy.next;
}

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const head = createListFromArray(x);
const k = 3;

printList(reverseKGroup(head, k));
