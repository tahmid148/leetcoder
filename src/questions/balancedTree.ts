import { TreeNode } from "../classes/TreeNode";

function isBalanced1(root: TreeNode | null): boolean {
  let ok = true;

  const dfs = (root: TreeNode | null): number => {
    if (!root) return 0;

    const leftHeight = dfs(root.left);
    const rightHeight = dfs(root.right);

    console.log(
      `At node: ${root.val}, the left height: ${leftHeight}, and right height: ${rightHeight}`
    );

    if (Math.abs(leftHeight - rightHeight) > 1) {
      ok = false;
    }

    return Math.max(1 + dfs(root.left), 1 + dfs(root.right));
  };

  dfs(root);

  return ok;
}

function isBalanced(root: TreeNode | null): boolean {
  //                                    isBalanced, height
  const dfs = (root: TreeNode | null): [boolean, number] => {
    if (!root) return [true, 0];

    const left = dfs(root.left);
    const right = dfs(root.right);

    if (Math.abs(right[1] - left[1]) > 1)
      return [false, 1 + Math.max(left[1], right[1])];

    return [left[0] && right[0], 1 + Math.max(left[1], right[1])];
  };

  console.log(dfs(root));

  return dfs(root)[0];
}

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(isBalanced1(root));
