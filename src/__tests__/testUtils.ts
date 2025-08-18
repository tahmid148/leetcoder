import { TreeNode } from '../classes/TreeNode';
import { ListNode } from '../classes/ListNode';

/**
 * Utility functions for testing
 */

// Tree testing utilities
export function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];
  
  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  
  // Remove trailing nulls
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }
  
  return result;
}

export function expectTreesEqual(actual: TreeNode | null, expected: TreeNode | null): void {
  expect(treeToArray(actual)).toEqual(treeToArray(expected));
}

// Linked list testing utilities
export function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  
  return result;
}

export function expectListsEqual(actual: ListNode | null, expected: number[]): void {
  expect(listToArray(actual)).toEqual(expected);
}

// Array comparison utilities
export function expectArraysEqual(actual: any[], expected: any[]): void {
  expect(actual.sort()).toEqual(expected.sort());
}

export function expectArrayOfArraysEqual(actual: any[][], expected: any[][]): void {
  const sortedActual = actual.map(arr => arr.slice().sort()).sort();
  const sortedExpected = expected.map(arr => arr.slice().sort()).sort();
  expect(sortedActual).toEqual(sortedExpected);
}