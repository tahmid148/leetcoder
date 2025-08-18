import { TreeNode } from "../classes/TreeNode";

function diameterOfBinaryTree(root: TreeNode | null): number {
    return dfs(root);
};

function dfs(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    return 1 + Math.max(left, right);
}

function dfsBasic(root: TreeNode | null): number[] {
    let result: number[] = [];

    if (root?.left) {
        result = [...result, ...dfsBasic(root.left)];
    }

    if (root?.right) {
        result = [...result, ...dfsBasic(root.right)];
    }

    if (root?.val) {
        result.push(root.val);
    }

    return result;
}

let root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log(diameterOfBinaryTree(root));