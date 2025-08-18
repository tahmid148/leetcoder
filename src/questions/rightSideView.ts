import { TreeNode } from "../classes/TreeNode";

function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    let queue = [root];
    let rightSide = [root.val];

    while (queue.length > 0) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const curr = queue.shift();
            if (curr?.left) {
                queue.push(curr.left);
            }
            if (curr?.right) {
                queue.push(curr.right);
            }
        }
        if (queue[queue.length - 1]) {
            rightSide.push(queue[queue.length - 1].val)
        }
    }

    return rightSide;
};

const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4)));
console.log(rightSideView(root));
// [1,3,4]