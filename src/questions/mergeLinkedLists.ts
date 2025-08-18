import { ListNode, printList } from "../classes/ListNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let merged = new ListNode();
  const head = merged;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      merged.next = list1;
      list1 = list1.next;
    } else {
      merged.next = list2;
      list2 = list2.next;
    }
    merged = merged.next;
  }

  if (!list1) {
    merged.next = list2;
  }

  if (!list2) {
    merged.next = list1;
  }

  return head.next;
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const merged = mergeTwoLists(list1, list2);
printList(merged);
