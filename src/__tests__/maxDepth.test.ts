import { TreeNode, buildTree } from '../classes/TreeNode';
import { dfs, bfs, maxDepth } from '../questions/maxDepth';

describe('Max Depth of Binary Tree', () => {
    describe('DFS Approach', () => {
        test('should return 0 for null tree', () => {
            expect(dfs(null)).toBe(0);
        });

        test('should return 1 for single node', () => {
            const root = new TreeNode(1);
            expect(dfs(root)).toBe(1);
        });

        test('should return 3 for [3,9,20,null,null,15,7]', () => {
            const root = buildTree([3, 9, 20, null, null, 15, 7]);
            expect(dfs(root)).toBe(3);
        });

        test('should return 2 for [1,null,2]', () => {
            const root = buildTree([1, null, 2]);
            expect(dfs(root)).toBe(2);
        });
    });

    describe('BFS Approach', () => {
        test('should return 0 for null tree', () => {
            expect(bfs(null)).toBe(0);
        });

        test('should return 1 for single node', () => {
            const root = new TreeNode(1);
            expect(bfs(root)).toBe(1);
        });

        test('should return 3 for [3,9,20,null,null,15,7]', () => {
            const root = buildTree([3, 9, 20, null, null, 15, 7]);
            expect(bfs(root)).toBe(3);
        });

        test('should return 2 for [1,null,2]', () => {
            const root = buildTree([1, null, 2]);
            expect(bfs(root)).toBe(2);
        });
    });

    describe('Main Function', () => {
        test('should work with various tree structures', () => {
            // Empty tree
            expect(maxDepth(null)).toBe(0);
            
            // Single node
            const single = new TreeNode(5);
            expect(maxDepth(single)).toBe(1);
            
            // Balanced tree
            const balanced = buildTree([1, 2, 3, 4, 5, 6, 7]);
            expect(maxDepth(balanced)).toBe(3);
            
            // Left-skewed tree
            const leftSkewed = buildTree([1, 2, null, 3, null, null, null]);
            expect(maxDepth(leftSkewed)).toBe(3);
        });
    });
});