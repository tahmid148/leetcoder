import { getBFS, TreeNode } from "../classes/TreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return bfs(p, q);
};

function dfs(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    }

    if (!p || !q || (p.val !== q.val)) {
        return false;
    }

    return dfs(p.left, q.left) && dfs(p.right, q.right);
}

function bfs(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    } else if ((!p && q) || (p && !q)) {
        return false;
    }

    if (p && q) {
        let aQueue: (TreeNode | undefined | null)[] = [p];
        let bQueue: (TreeNode | undefined | null)[] = [q];
        
        while (aQueue.length && bQueue.length) {
             const queueSize = aQueue.length;

            for (let i = 0; i < queueSize; i++) {
                let a = aQueue.shift();
                let b = bQueue.shift();
                if (a?.val !== b?.val) {
                    return false;
                }
                if (!a && !b) {
                    continue;
                }
                aQueue.push(a?.left);
                aQueue.push(a?.right);
                bQueue.push(b?.left);
                bQueue.push(b?.right);
            }
        }
    }

    return true;
}



let p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// let q = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)));
console.log(isSameTree(p, q));
// [4,7,2,9,6,3,1]