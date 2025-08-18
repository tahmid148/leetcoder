function insert(intervals: number[][], newInterval: number[]): number[][] {

    let result: number[][] = [];
    let inserted = false;

    for (let i = 0; i < intervals.length; i++) {
        console.log(`Comparing: [${intervals[i][0]}, ${intervals[i][1]}] with [${newInterval[0]}, ${newInterval[1]}]`);

        if (Math.max(intervals[i][0], newInterval[0]) <= Math.min(intervals[i][1], newInterval[1])) {
            // Overlap occurred
            console.log('Overlap detected');
            if (newInterval[0] <= intervals[i][0]) {
                intervals[i][0] = newInterval[0];
            } else {
                newInterval[0] = intervals[i][0];
            }

            if (newInterval[1] >= intervals[i][1]) {
                intervals[i][1] = newInterval[1];
            } else {
                newInterval[1] = intervals[i][1];
            }
        } else {
            if (!inserted) {
                if (newInterval[1] < intervals[i][0]) {
                    // new interval ends before current interval starts
                    result.push(newInterval);
                    result.push(intervals[i]);
                    inserted = true;
                } else if (newInterval[0] > intervals[i][1]) {
                    // new interval starts after current interval ends
                    result.push(intervals[i]);
                }
            } else {
                result.push(intervals[i]);
            }
        }

    }

    if (!inserted) {
        result.push(newInterval);
    }

    return result;
};


const intervals = [[0, 1], [6, 9]];
const newInterval = [2, 5];

console.log(insert(intervals, newInterval));