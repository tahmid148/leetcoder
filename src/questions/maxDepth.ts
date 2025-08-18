import { TreeNode } from "../classes/TreeNode";

export function dfs(curr: TreeNode | null): number {
    if (!curr) {
        return 0;
    }

    console.log(1 + dfs(curr.left));
    // console.log(1 + dfs(curr.right));

    return 1 + Math.max(dfs(curr.left), dfs(curr.right));
}

export function bfs(curr: TreeNode | null): number {
    let queue: TreeNode[] = [];
    let result = 0;

    if (curr) {
        queue.push(curr);
    }

    while (queue.length) {
        let currentSize = queue.length;

        for (let i = 0; i < currentSize; i++) {
            let head = queue.shift();
            
            if (head?.left) {
                queue.push(head.left);
            }
            if (head?.right) {
                queue.push(head.right);
            }
        }
        result++;
    }

    return result;
}

export function maxDepth(root: TreeNode | null): number {
    return bfs(root);
}