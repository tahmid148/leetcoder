import { buildTree, TreeNode } from "../classes/TreeNode";

function maxPathSum(root: TreeNode | null): number {
  let res = Number.MIN_SAFE_INTEGER;

  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;

    const left = Math.max(dfs(node.left), 0); // In case it is better not to take the left
    const right = Math.max(dfs(node.right), 0);

    res = Math.max(res, left + node.val + right);

    return node.val + Math.max(left, right);
  };

  dfs(root);

  return res;
}

// const root = new TreeNode(
//   1,
//   new TreeNode(2),
//   new TreeNode(3, new TreeNode(4), new TreeNode(5))
// );

// const root = buildTree([1, 2, 3]);
// const root = buildTree([-10, 9, 20, null, null, 15, 7]);
const root = buildTree([-3]);
// const root = buildTree([2, -1]);
// const root = buildTree([1, -2, 3]);
// const root = buildTree([1, -2, -3, 1, 3, -2, null, -1]);
console.log(maxPathSum(root));
