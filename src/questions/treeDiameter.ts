/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../classes/TreeNode";

function diameterOfBinaryTree1(root: TreeNode | null): number {

    const depth = (root: TreeNode | null): number => {
        if (!root) {
            return 0;
        }

        return 1 + Math.max(depth(root.left), depth(root.right))
    }

    const dfs = (root: TreeNode | null): number => {
        if (!root) return 0;
        return Math.max(
            depth(root?.left ?? null) + depth(root?.right ?? null),
            dfs(root?.left ?? null),
            dfs(root?.right ?? null)
        );
    }

    return dfs(root);
};

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;

    const dfs = (root: TreeNode | null): number => {
        if (!root) return 0;

        const leftDepth = dfs(root.left);
        const rightDepth = dfs(root.right);

        return 1 + Math.max(leftDepth, rightDepth);
    }

    dfs(root);
    return maxDiameter;
}


let root = new TreeNode(1, new TreeNode(2, null));
console.log(diameterOfBinaryTree(root));
