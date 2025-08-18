/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {

    const ROWS = matrix.length;
    const COLS = matrix[0].length;
    let rowZero = false;

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0;
                if (r === 0) {
                    rowZero = true;
                } else {
                    matrix[r][0] = 0;
                }
            }
        }
    }

    for (let r = 1; r < ROWS; r++) {
        for (let c = 1; c < COLS; c++) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                matrix[r][c] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let r = 0; r < ROWS; r++) {
            matrix[r][0] = 0;
        }
    }

    if (rowZero) {
        for (let c = 0; c < COLS; c++) {
            matrix[0][c] = 0;
        }
    }
}

const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(matrix);