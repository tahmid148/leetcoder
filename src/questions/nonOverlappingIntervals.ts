function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0]);

    let res = 0;

    let newInterval = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        console.log(`Comparing: ${current} with ${newInterval}`);

        if (newInterval[1] <= current[0]) {
            // newInterval ends before the start of current
            newInterval = current;
        } else {
            res++;
            newInterval[1] = Math.min(newInterval[1], current[1]);
        }
    }

    return res;
};

const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];
console.log(eraseOverlapIntervals(intervals));