import { TreeNode } from "../classes/TreeNode";
import { levelOrder } from "./levelOrder";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // Root node will always be the preorder[0]  
    // Pre-order traversal visits as it goes down
    // In-order traversal visits from left-to-right from the bottom

    // First left child will be preorder[1];

    if (!preorder.length || !inorder.length) {
        return null;
    }

    let root = new TreeNode(preorder[0]);
    const rootIndex = inorder.indexOf(root.val);

    // Build the left side
    let leftInorder = inorder.slice(0, rootIndex);
    let leftPreorder = preorder.slice(1, leftInorder.length + 1);
    root.left = buildTree(leftPreorder, leftInorder);

    // Build the right side
    let rightInorder = inorder.slice(rootIndex + 1);
    let rightPreorder = preorder.slice(leftInorder.length + 1);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
};


let preorder = [3, 9, 20, 15, 7];
let inorder =  [9, 3, 15, 20, 7];
let tree = buildTree(preorder, inorder);
console.log(levelOrder(tree));
