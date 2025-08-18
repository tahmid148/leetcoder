import { getBFS, TreeNode } from "../classes/TreeNode";

function invertTree_DFS(root: TreeNode | null): TreeNode | null {
  const dfs = (root: TreeNode | null): TreeNode | null => {
    if (!root) {
      return null;
    }

    const left = root?.left;
    const right = root?.right;

    if (left) {
      dfs(root.left);
    }

    if (right) {
      dfs(root.right);
    }

    root.left = right;
    root.right = left;

    return root;
  };

  return dfs(root);
}

function invertTree_BFS(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  let queue = [root];
  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const head = queue.shift()!;
      const left = head?.left ?? null;
      const right = head?.right ?? null;

      if (left) {
        queue.push(left);
      }
      if (right) {
        queue.push(right);
      }
      head.left = right;
      head.right = left;
    }
  }

  return root;
}

// let root = new TreeNode(
//   4,
//   new TreeNode(2, new TreeNode(1), new TreeNode(3)),
//   new TreeNode(7, new TreeNode(6), new TreeNode(9))
// );
// console.log(getBFS(invertTree(root)));
// invertTree(root);
