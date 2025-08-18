import { TreeNode } from "../classes/TreeNode";


function isValidBST(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function dfs(root: TreeNode | null, lowerLimit: number, upperLimit: number): boolean {
    if (!root) {
        return true;
    }

    if (root.val >= upperLimit || root.val <= lowerLimit) {
        return false;
    }

    return dfs(root.left, lowerLimit, root.val) && dfs(root.right, root.val, upperLimit);
}

let root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
// let root = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
// let root = new TreeNode(99, new TreeNode(50, new TreeNode(40), new TreeNode(100)), new TreeNode(110, new TreeNode(88), new TreeNode(112)));
console.log(isValidBST(root));