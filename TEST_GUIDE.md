# Test Suite Guide

## Available Test Commands

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run Specific Test File
```bash
# Run by file pattern
npx jest maxDepth

# Run specific test file
npx jest src/__tests__/maxDepth.test.ts

# Run tests matching a pattern
npm run test:file "Max Depth"
```

## Writing Tests for Your Functions

### Step 1: Export Functions from Question Files
Add `export` to your functions in `src/questions/`:

```typescript
// Before
function maxDepth(root: TreeNode | null): number {
    // your code
}

// After
export function maxDepth(root: TreeNode | null): number {
    // your code
}
```

### Step 2: Create Test File
Create a test file in `src/__tests__/` with the pattern `*.test.ts`:

```typescript
// src/__tests__/yourFunction.test.ts
import { yourFunction } from '../questions/yourFile';
import { TreeNode, buildTree } from '../classes/TreeNode';
import { ListNode, createListFromArray } from '../classes/ListNode';

describe('Your Function Name', () => {
    test('should handle edge case', () => {
        expect(yourFunction(null)).toBe(0);
    });

    test('should handle normal case', () => {
        const input = buildTree([1, 2, 3]);
        expect(yourFunction(input)).toBe(expectedResult);
    });
});
```

## Available Test Utilities

### Tree Testing
```typescript
import { TreeNode, buildTree } from '../classes/TreeNode';
import { expectTreesEqual, treeToArray } from './testUtils';

const tree = buildTree([1, 2, 3, null, null, 4, 5]);
expectTreesEqual(actualTree, expectedTree);
```

### List Testing
```typescript
import { ListNode, createListFromArray } from '../classes/ListNode';
import { expectListsEqual } from './testUtils';

const list = createListFromArray([1, 2, 3]);
expectListsEqual(actualList, [1, 2, 3]);
```

### Array Testing
```typescript
import { expectArraysEqual, expectArrayOfArraysEqual } from './testUtils';

expectArraysEqual([3, 1, 2], [1, 2, 3]); // Order doesn't matter
expectArrayOfArraysEqual([[1, 2], [3, 4]], [[3, 4], [1, 2]]);
```

## Example Test Structure

```typescript
describe('Problem Name', () => {
    describe('Edge Cases', () => {
        test('empty input', () => {
            expect(solution([])).toEqual([]);
        });

        test('single element', () => {
            expect(solution([1])).toEqual([1]);
        });
    });

    describe('Normal Cases', () => {
        test('typical case 1', () => {
            expect(solution([1, 2, 3])).toEqual([expected]);
        });

        test('typical case 2', () => {
            expect(solution([4, 5, 6])).toEqual([expected]);
        });
    });

    describe('Complex Cases', () => {
        test('large input', () => {
            const largeInput = Array.from({length: 1000}, (_, i) => i);
            expect(solution(largeInput)).toBeDefined();
        });
    });
});
```