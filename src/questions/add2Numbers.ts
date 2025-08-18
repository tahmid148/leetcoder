import { createListFromArray, ListNode, printList } from "../classes/ListNode";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0,
    newHead: ListNode | null = new ListNode(),
    curr = newHead;

  while (l1 && l2) {
    let sum = l1.val + l2.val + carry;

    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }

    curr.next = new ListNode(sum);
    curr = curr.next;

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    let sum = l1.val + carry;

    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }
    console.log(sum);

    curr.next = new ListNode(sum);
    curr = curr.next;
    l1 = l1.next;
  }

  while (l2) {
    let sum = l2.val + carry;

    if (sum > 9) {
      carry = Math.floor(sum / 10);
      sum = sum % 10;
    } else {
      carry = 0;
    }

    curr.next = new ListNode(sum);
    curr = curr.next;
    l2 = l2.next;
  }

  if (carry) {
    curr.next = new ListNode(carry);
  }

  return newHead.next;
}

// const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

const l1 = createListFromArray([9, 9, 9, 9, 9, 9, 9]);
const l2 = createListFromArray([9, 9, 9, 9]);

printList(addTwoNumbers(l1, l2));
