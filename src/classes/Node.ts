// Definition for _Node
export class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

export function printRandomList(head: _Node | null): void {
  let curr = head;
  const output: string[] = [];

  while (curr) {
    const val = curr.val;
    const nextVal = curr.next ? curr.next.val : "null";
    const randomVal = curr.random ? curr.random.val : "null";

    output.push(`{ val: ${val}, next: ${nextVal}, random: ${randomVal} }`);
    curr = curr.next;
  }

  console.log(output.join(" -> "));
}
export function generateRandomList(
  input: [number, number | null][]
): _Node | null {
  if (input.length === 0) return null;

  // Step 1: Create all nodes
  const nodes: _Node[] = input.map(([val]) => new _Node(val));

  // Step 2: Set next pointers
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  // Step 3: Set random pointers
  for (let i = 0; i < input.length; i++) {
    const [, randomIndex] = input[i];
    nodes[i].random = randomIndex !== null ? nodes[randomIndex] : null;
  }

  return nodes[0]; // return the head
}
