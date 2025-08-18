// Definition for singly-linked list
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createListFromArray(values: number[]): ListNode | null {
  if (values.length === 0) return null;

  const head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

export function printList(head: ListNode | null): void {
  let current = head;
  const values: number[] = [];

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  console.log(values.join(" -> "));
}
