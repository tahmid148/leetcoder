import { buildTree, TreeNode } from "../classes/TreeNode";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const dfs = (
    curr: TreeNode | null,
    a: TreeNode | null,
    b: TreeNode | null
  ): TreeNode | null => {
    if (!curr) return null;

    if (a!.val < curr.val && b!.val < curr.val) return dfs(curr.left, a, b);

    if (a!.val > curr.val && b!.val > curr.val) return dfs(curr.right, a, b);

    return curr;
  };

  return dfs(root, p, q);
}

let root = new TreeNode(
  6,
  new TreeNode(
    2,
    new TreeNode(0),
    new TreeNode(4, new TreeNode(3), new TreeNode(5))
  ),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
);
console.log(
  "Answer: " + lowestCommonAncestor(root, new TreeNode(2), new TreeNode(4))?.val
);
