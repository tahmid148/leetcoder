function largestRectangleArea_naive(heights: number[]): number {
  let largest = 0;

  let maxLeftExtension: number[] = new Array(heights.length).fill(0);
  for (let i = 1; i < heights.length; i++) {
    let b = i - 1;
    while (b >= 0 && heights[b] >= heights[i]) {
      maxLeftExtension[i]++;
      b--;
    }
  }

  let maxRightExtension: number[] = new Array(heights.length).fill(0);
  for (let i = heights.length - 2; i >= 0; i--) {
    let b = i + 1;
    while (b < heights.length && heights[b] >= heights[i]) {
      maxRightExtension[i]++;
      b++;
    }
  }

  heights.forEach((v, i) => {
    largest = Math.max(
      largest,
      v * (maxLeftExtension[i] + maxRightExtension[i] + 1)
    );
  });

  return largest;
}

function largestRectangleArea(heights: number[]): number {
  let largest = 0;

  let stack = new Array();
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const x = stack.pop();
      const leftBoundary = stack.length > 0 ? stack[stack.length - 1] + 1 : 0;
      const rightBoundary = i;
      const width = rightBoundary - leftBoundary;
      largest = Math.max(largest, heights[x] * width);
    }
    stack.push(i);
  }

  const length = heights.length;
  while (stack.length > 0) {
    const x = stack.pop();
    const leftBoundary = stack.length > 0 ? stack[stack.length - 1] + 1 : 0;
    const rightBoundary = length;
    const width = rightBoundary - leftBoundary;
    largest = Math.max(largest, heights[x] * width);
  }

  return largest;
}

const heights = [1, 5, 6, 2, 3];
// const heights = [2, 1, 2];
// const heights = [5, 4, 1, 2];
console.log("Result:", largestRectangleArea(heights));
