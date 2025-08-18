import { getBFS, TreeNode } from "../classes/TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
    return bfs(root);
};

function bfs(root: TreeNode | null): TreeNode | null {
    let treeQueue: (TreeNode | null)[] = [];
    if (root) {
        treeQueue.push(root);
    }

    while (treeQueue.length) {
        const currentSize = treeQueue.length;
        for (let i = 0; i < currentSize; i++) {
            const head = treeQueue.shift();
            if (head) {
                const left = head.left;
                const right = head.right;
                head.left = right;
                head.right = left;
                treeQueue.push(right);
                treeQueue.push(left);
            }
        }
    }
    return root;
}

let root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
console.log(getBFS(invertTree(root)));
// [4,7,2,9,6,3,1]