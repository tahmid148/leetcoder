import { buildTree, TreeNode } from "../classes/TreeNode";

function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  const dfs = (curr: TreeNode | null, currMax: number): number => {
    if (!curr) return 0;

    if (curr.val >= currMax) {
      return 1 + dfs(curr.left, curr.val) + dfs(curr.right, curr.val);
    }

    return dfs(curr.left, currMax) + dfs(curr.right, currMax);
  };

  return dfs(root, root.val);
}

const root = buildTree([3, 1, 4, 3, null, 1, 5]);
console.log(goodNodes(root));
