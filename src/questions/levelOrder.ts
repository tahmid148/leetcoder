import { TreeNode } from "../classes/TreeNode";


export function levelOrder(root: TreeNode | null): number[][] {
    return bfs(root);
}

function bfs(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    let queue = [root];
    let result = [];
    while (queue.length > 0) {
        const queueSize = queue.length;
        let level = [];
        for (let i = 0; i < queueSize; i++) {
            const head = queue.shift();
            if (head!.val !== undefined) {
                level.push(head!.val);
            }
            if (head?.left) {
                queue.push(head.left);
            }
            if (head?.right) {
                queue.push(head.right);
            }
        }
        result.push(level);
    }
    return result;
}


let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// let root = new TreeNode(0);
// console.log(levelOrder(root));