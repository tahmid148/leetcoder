function searchMatrix(matrix: number[][], target: number): boolean {
  let lo = 0,
    hi = matrix.length;
  let row = -1;

  // Find which matrix target should be in
  while (lo < hi) {
    const midmatrix = Math.floor(lo + (hi - lo) / 2);

    const currMatrix = matrix[midmatrix];

    if (target < currMatrix[0]) {
      hi = midmatrix;
    } else if (target > currMatrix[currMatrix.length - 1]) {
      lo = midmatrix + 1;
    } else {
      row = midmatrix;
      break;
    }
  }

  if (row !== -1) {
    let lo = 0,
      hi = matrix[row].length;

    while (lo < hi) {
      const midpoint = Math.floor(lo + (hi - lo) / 2);
      if (target > matrix[row][midpoint]) {
        lo = midpoint + 1;
      } else if (target < matrix[row][midpoint]) {
        hi = midpoint;
      } else {
        return true;
      }
    }
  }

  return false;
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;

console.log(searchMatrix(matrix, target));
