export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function buildTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]!);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift()!;

    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]!);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]!);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

export function getBFS(node: TreeNode | null): (number | undefined | null)[] {
  let q: TreeNode[] = [];
  let result = [];

  if (node) {
    q.push(node);
  }

  while (q.length) {
    const currentSize = q.length;

    for (let i = 0; i < currentSize; i++) {
      const head = q.shift();
      result.push(head?.val);
      if (head?.left) {
        q.push(head.left);
      }
      if (head?.right) {
        q.push(head.right);
      }
    }
  }

  return result;
}

function preorderDFS(node: TreeNode | null): void {
  if (node) {
    console.log(node.val);
    preorderDFS(node.left);
    preorderDFS(node.right);
  }
}

function inorderDFS(node: TreeNode | null): void {
  if (node) {
    inorderDFS(node.left);
    console.log(node.val);
    inorderDFS(node.right);
  }
}

// let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// console.log('Pre-order');
// preorderDFS(root);
// console.log();
// console.log('In-order');
// inorderDFS(root);
