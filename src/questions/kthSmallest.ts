import { TreeNode } from "../classes/TreeNode";

function kthSmallest(root: TreeNode | null, k: number): number {
  let result: number | null = null;

  function dfs(root: TreeNode | null) {
    if (!root || result !== null) return;

    dfs(root.left);

    k--;
    if (k === 0) {
      result = root.val;
    }

    dfs(root.right);
  }

  dfs(root);
  return result!;
}

function kthSmallest2(root: TreeNode | null, k: number): number {
  let res: number = -1;
  const dfs = (curr: TreeNode | null): void => {
    if (!curr) return;

    dfs(curr.left);
    k--;
    if (k === 0) {
      res = curr.val;
    }

    dfs(curr.right);
  };
  dfs(root);
  return res;
}

let root = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4)
);
console.log(kthSmallest2(root, 1));
