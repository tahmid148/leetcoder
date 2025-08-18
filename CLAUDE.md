# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a TypeScript-based LeetCode problem-solving repository. Common commands include:

- **Run TypeScript files**: `npx tsx src/main.ts` or `npx tsx src/questions/<filename>.ts`
- **Type checking**: `npx tsc --noEmit`
- **Build**: `npx tsc` (outputs to default directory based on tsconfig.json)

## Architecture Overview

This repository follows a structured approach to organizing LeetCode problem solutions:

### Core Structure
- **`src/classes/`**: Contains reusable data structure definitions
  - `TreeNode.ts`: Binary tree implementation with utility functions (`buildTree`, `getBFS`, DFS traversals)
  - `ListNode.ts`: Linked list implementation with helper functions (`createListFromArray`, `printList`)
  - `Node.ts`: Generic node structure
  - `Heap.ts`: Heap data structure implementation

- **`src/questions/`**: Individual LeetCode problem solutions organized by topic areas:
  - Tree problems (e.g., `maxDepth.ts`, `invertTree.ts`, `isValidBST.ts`)
  - Dynamic programming (e.g., `fibonacci.ts`, `coinChange.ts`, `houseRobber.ts`)
  - Graph problems (e.g., `cloneGraph.ts`, `numIslands.ts`, `courseSchedule.ts`)
  - Array/String problems (e.g., `twoSum.ts`, `longestPalindrome.ts`)
  - Linked list problems (e.g., `reverseLinkedList.ts`, `mergeLinkedLists.ts`)

### Code Patterns
- Each problem solution typically includes:
  - Main solution function(s)
  - Test cases with execution at the bottom (often commented out)
  - Import statements for shared data structures from `src/classes/`

- Tree problems commonly use the `TreeNode` class and `buildTree` utility
- Linked list problems use the `ListNode` class and associated helpers
- Many files contain multiple solution approaches or variations of the same problem

### Development Workflow
- Solutions are implemented as standalone TypeScript files
- Test execution is done by running individual files with `npx tsx`
- The `main.ts` file appears to be minimal/empty and not actively used
- No formal test framework is configured; testing is done via console output in individual solution files