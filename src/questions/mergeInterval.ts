function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);

    let res: number[][] = [];

    let newInterval = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        console.log(`Comparing: ${current} with ${newInterval}`);

        if (newInterval[1] < current[0]) {
            // newInterval ends before the start of current
            res.push(newInterval);
            newInterval = current;
        } else {
            newInterval[0] = Math.min(newInterval[0], current[0]);
            newInterval[1] = Math.max(newInterval[1], current[1]);
        }
    }

    res.push(newInterval);

    return res;
};

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// const intervals = [[1, 4], [0, 0]];
console.log(merge(intervals));