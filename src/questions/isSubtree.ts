import { getBFS, TreeNode } from "../classes/TreeNode";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    return dfs(root, subRoot);
};

function dfs(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!subRoot) {
        return true;
    }

    if (!root) {
        return false;
    }

    return (isSameTree(root, subRoot)) || dfs(root.left, subRoot) || dfs(root.right, subRoot);
}

function isSameTree(p: TreeNode | null | undefined, q: TreeNode | null | undefined): boolean {
    if ((p && !q) || (!p && q)) {
        return false;
    } else if (!p && !q) {
        return true;
    }
    return (p?.val === q?.val) && (isSameTree(p?.left, q?.left)) && (isSameTree(p?.right, q?.right));
}


let root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))), new TreeNode(5));
let subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(root, subRoot));