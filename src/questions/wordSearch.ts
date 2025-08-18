function exist(board: string[][], word: string): boolean {
    let doesExist = false;
    const width = board[0].length;
    const height = board.length;

    function backtrack(i: number, j: number, currentIndex: number) {
        console.log(`Current Index of the real word: ${word[currentIndex]}`)
        if (currentIndex === word.length) {
            doesExist = true;
            return;
        }
        if (
            (i < 0) ||
            (j < 0) ||
            (i >= height) ||
            (j >= width) ||
            board[i][j] !== word[currentIndex]
        ) {
            return;
        }

        let temp = board[i][j];
        board[i][j] = '#';
        backtrack(i + 1, j, currentIndex + 1);
        backtrack(i - 1, j, currentIndex + 1);
        backtrack(i, j + 1, currentIndex + 1);
        backtrack(i, j - 1, currentIndex + 1);
        board[i][j] = temp;
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            backtrack(i, j, 0);
        }
    }
    return doesExist;
};

// let board = [
//                 ["A","B","C","E"],
//                 ["S","F","C","S"],
//                 ["A","D","E","E"]
//             ];
// let word = "ABCCED";

let board = [
                ["A","B","C","E"],
                ["S","F","C","S"],
                ["A","D","E","E"]
            ];

let word = "ABCB";
console.log(exist(board, word))

// let visitedIndexes: Map<number, number[]> = new Map<number, number[]>();
// visitedIndexes.set(1, [2, 3]);
// console.log(visitedIndexes.get(1));
// console.log(visitedIndexes.get(2));