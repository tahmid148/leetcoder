function spiralOrder(matrix: number[][]): number[] {

    const N = matrix.length;
    const M = matrix[0].length;

    console.log(`(${N} x ${M})`);
    console.log();

    let res: number[] = [];

    let top = 0;
    let bottom = N - 1;
    let left = 0;
    let right = M - 1;

    while (top <= bottom && left <= right) {

        // top row 
        for (let i = left; i <= right; i++) {
            console.log(`(${top},${i})`);
            res.push(matrix[top][i]);
        }
        top++;

        // right col
        for (let i = top; i <= bottom; i++) {
            console.log(`(${i},${right})`);
            res.push(matrix[i][right]);
        }
        right--;

        // bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                console.log(`(${bottom},${i})`);
                res.push(matrix[bottom][i]);

            }
            bottom--;
        }

        // left col
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                console.log(`(${i},${left})`);
                res.push(matrix[i][left]);

            }
            left++;
        }
    }

    return res;
};

const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(spiralOrder(matrix));