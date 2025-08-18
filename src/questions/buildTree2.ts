import { TreeNode } from "../classes/TreeNode";
import { levelOrder } from "./levelOrder";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]);

  const leftInOrder = inorder.slice(
      0,
      inorder.findIndex((x) => x === preorder[0])
    ),
    rightInOrder = inorder.slice(
      inorder.findIndex((x) => x === preorder[0]) + 1
    );

  const leftPreOrder = preorder.slice(1, leftInOrder.length + 1),
    rightPreOrder = preorder.slice(leftInOrder.length + 1);

  root.left = buildTree(leftPreOrder, leftInOrder);
  root.right = buildTree(rightPreOrder, rightInOrder);

  return root;
}

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
let tree = buildTree(preorder, inorder);
console.log(levelOrder(tree));
