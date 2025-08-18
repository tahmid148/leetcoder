function rotate(matrix: number[][]): void {

    const N = matrix.length;

    for (let i = 0; i < Math.floor(N / 2); i++) {
        for (let j = i; j < N - 1 - i; j++) {
            /**
             * a (i, j)
             * b (j, N - 1 - i)
             * c (N - 1 - i, N - 1 - j)
             * d (N - 1 - j, i)
             */

            const tmp = matrix[i][j];

            // d -> a
            matrix[i][j] = matrix[N - 1 - j][i]

            // c -> d
            matrix[N - 1 - j][i] = matrix[N - 1 - i][N - 1 - j]

            // b -> d
            matrix[N - 1 - i][N - 1 - j] = matrix[j][N - 1 - i]

            // d -> a
            matrix[j][N - 1 - i] = tmp
        }
    }
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rotate(matrix);