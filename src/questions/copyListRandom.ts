import { _Node, generateRandomList, printRandomList } from "../classes/Node";

function copyRandomList(head: _Node | null): _Node | null {
  let first = head;
  let copy = new _Node(-1),
    ptr: _Node | null = copy;

  let oldToNew: Map<_Node, _Node> = new Map();

  while (first) {
    copy.next = new _Node(first.val);
    oldToNew.set(first, copy.next);
    copy = copy.next;
    first = first.next;
  }

  let newHead = ptr.next,
    curr = newHead,
    oldHead = head;

  while (curr && oldHead) {
    curr.random = oldToNew.get(oldHead.random!)!;

    curr = curr.next;
    oldHead = oldHead.next;
  }

  return newHead;
}

const head = generateRandomList([
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
]);
printRandomList(head);
printRandomList(copyRandomList(head));
// copyRandomList(head);
