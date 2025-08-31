import { buildTree, TreeNode } from "../classes/TreeNode";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  let nodes: Array<string> = [];

  const dfs = (node: TreeNode | null): void => {
    if (!node) {
      nodes.push("N");
      return;
    }

    nodes.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return nodes.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const nodes = data.split(",");

  const dfs = (i: number): [TreeNode | null, number] => {
    if (nodes[i] === "N") return [null, i];

    const curr = new TreeNode(Number(nodes[i]));

    const [leftMostNode, leftMostIndex] = dfs(i + 1);
    const [rightMostNode, rightMostIndex] = dfs(leftMostIndex + 1);
    curr.left = leftMostNode;
    curr.right = rightMostNode;

    return [curr, rightMostIndex];
  };

  const [x, _] = dfs(0);

  return x;
}

// const root = buildTree([1, 2, 3, null, null, 4, 5, 6, 7]);
// const root = buildTree([1, 2, 3]);
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));
const data = serialize(root);

const backToTree = deserialize(data);
console.log("result", backToTree);
