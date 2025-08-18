function orangesRotting(grid: number[][]): number {

    let queue: [number, number][] = [];
    let fresh = 0;
    let timer = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                fresh++;
            }
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    while (queue.length > 0) {
        const queueSize = queue.length;
        for (let i = 0; i < queueSize; i++) {
            // Check left right up down and rot and add to the queue
            const [x, y]: [number, number] = queue.shift()!;
            if ((x - 1 >= 0) && grid[x - 1][y] === 1) {
                grid[x - 1][y] = 2;
                fresh--;
                queue.push([x - 1, y]);
            }
            if ((x + 1 < grid.length) && grid[x + 1][y] === 1) {
                grid[x + 1][y] = 2;
                fresh--;
                queue.push([x + 1, y]);
            }
            if ((y - 1 >= 0) && grid[x][y - 1] === 1) {
                grid[x][y - 1] = 2;
                fresh--;
                queue.push([x, y - 1]);
            }
            if ((y + 1 < grid[0].length) && grid[x][y + 1] === 1) {
                grid[x][y + 1] = 2;
                fresh--;
                queue.push([x, y + 1]);
            }
        }
        if (queue.length > 0) {
            timer++;
        }
    }

    return fresh > 0 ? -1 : timer;
};

let grid = 
            [
                [2, 1, 1],
                [1, 1, 0],
                [0, 1, 1]
            ];

// let grid = [
//     [2, 1, 1],
//     [0, 1, 1],
//     [1, 0, 1]
// ];

console.log(orangesRotting(grid));