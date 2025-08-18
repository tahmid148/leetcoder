// Definition for _Node
class _Node {
    val: number
    neighbors: _Node[]
 
    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

function cloneGraph(node: _Node | null): _Node | null {
    if (!node) {
        return null;
    }

    // If a neighbor is already in the clone hashmap, don't recreate the neighbor, add the value in the map to the neighbors
    let cloneMap: Map<_Node, _Node> = new Map<_Node, _Node>();

    function dfs(node: _Node): _Node {
        if (!node) {
            return node;
        }

        const mapValue = cloneMap.get(node);
        if (mapValue) {
            return mapValue;
        }

        let cloneNode = new _Node(node.val);
        cloneMap.set(node, cloneNode);

        for (let neighbor of node.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor));
        }

        return cloneNode;
    }

    return dfs(node);
};
