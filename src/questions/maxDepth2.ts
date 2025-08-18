import { buildTree, TreeNode } from "../classes/TreeNode";

function maxDepth_dfs(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }

    return 1 + Math.max(dfs(root.left), dfs(root.right));
  };

  return dfs(root);
}

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let level = 0;
  let queue = [root];
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const head = queue.shift();
      if (head?.left) {
        queue.push(head.left);
      }
      if (head?.right) {
        queue.push(head.right);
      }
    }
    level++;
  }

  return level;
}

const root = buildTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(root));
