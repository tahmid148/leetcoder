import { TreeNode } from "../classes/TreeNode";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const dfs = (a: TreeNode | null, b: TreeNode | null): boolean => {
    if (!a && !b) return true;
    if (!a || !b) return false;

    return a.val === b.val && dfs(a.left, b.left) && dfs(a.right, b.right);
  };
  return dfs(p, q);
}

let p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(p, q));
