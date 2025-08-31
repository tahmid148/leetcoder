import { createListFromArray, ListNode, printList } from "../classes/ListNode";

class NodeMinHeap {
  public heap: ListNode[];

  constructor() {
    this.heap = new Array();
  }

  public empty(): boolean {
    return this.heap.length === 0;
  }

  public add(node: ListNode): void {
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }

  private heapifyUp(i: number): void {
    if (i > 0) {
      const curr = this.heap[i];
      const parentIdx = this.getParentIndex(i);
      const parent = this.heap[parentIdx];
      if (curr.val < parent.val) {
        this.heap[parentIdx] = curr;
        this.heap[i] = parent;
        this.heapifyUp(parentIdx);
      }
    }
  }

  public pop(): ListNode | undefined {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop();

    this.swap(0, this.heap.length - 1);
    const minValue = this.heap.pop();
    this.heapifyDown(0);

    return minValue;
  }

  private heapifyDown(i: number): void {
    const curr = this.heap[i];
    const leftIdx = this.getLeftChildIndex(i);
    const rightIdx = this.getRightChildIndex(i);

    if (rightIdx < this.heap.length) {
      const left = this.heap[leftIdx];
      const right = this.heap[rightIdx];
      const min = Math.min(left.val, right.val);
      if (min < curr.val) {
        if (min === left.val) {
          this.swap(i, leftIdx);
          this.heapifyDown(leftIdx);
        } else if (min === right.val) {
          this.swap(i, rightIdx);
          this.heapifyDown(rightIdx);
        }
      }
    } else if (leftIdx < this.heap.length) {
      const left = this.heap[leftIdx];
      if (left.val < curr.val) {
        this.swap(i, leftIdx);
        this.heapifyDown(leftIdx);
      }
    }
  }

  private getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private getLeftChildIndex(i: number): number {
    return 2 * i + 1;
  }

  private getRightChildIndex(i: number): number {
    return 2 * i + 2;
  }

  private swap(i: number, j: number): void {
    const tmp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = tmp;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const minHeap = new NodeMinHeap();
  let head = new ListNode();
  const ref = head;

  for (const node of lists) {
    if (node) {
      minHeap.add(node);
    }
  }

  //   console.log(minHeap);

  while (!minHeap.empty()) {
    const top = minHeap.pop()!;
    // console.log("Popped: ", top);
    const node = new ListNode(top.val);
    head.next = node;
    head = head.next;
    if (top.next) {
      minHeap.add(top.next);
    }
    // console.log(minHeap);
  }

  return ref.next;
}

const lists = [
  createListFromArray([1, 4, 5]),
  createListFromArray([1, 3, 4]),
  createListFromArray([2, 6]),
];

printList(mergeKLists(lists));
