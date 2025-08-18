import { TreeNode } from "../classes/TreeNode";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    console.log(`Searching between ${p?.val} and ${q?.val}`)
    return dfs(root, p, q);
};

function dfs(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root || !p || !q) return null; 

    if (root.val > p.val && root.val > q.val) {
        return dfs(root.left, p, q); // Search left
    } else if (root.val < p.val && root.val < q.val) {
        return dfs(root.right, p, q); // Search right
    }

    return root; // Found LCA
}
let root = new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9)));
console.log("Answer: " + lowestCommonAncestor(root, new TreeNode(5), new TreeNode(3))?.val);