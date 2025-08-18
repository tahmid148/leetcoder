import { buildTree, TreeNode } from "../classes/TreeNode";
import { isSameTree } from "./sameTree2";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const dfs = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return (
      isSameTree(root.left, subRoot?.left ?? null) ||
      isSameTree(root.right, subRoot?.right ?? null)
    );
  };
  return dfs(root, subRoot);
}

// let root = new TreeNode(
//   3,
//   new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
//   new TreeNode(5)
// );

const root = new TreeNode(
  3,
  new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
  new TreeNode(5)
);
let subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

console.log(isSubtree(root, subRoot));
