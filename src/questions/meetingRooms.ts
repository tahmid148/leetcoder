function canAttendMeetings(intervals: number[][]): boolean {

    intervals.sort((a, b) => a[0] - b[0]);

    console.log(intervals);

    let newInterval = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i];
        console.log(`Comparing ${curr} with ${newInterval}`);

        if (curr[0] < newInterval[1]) {
            return false;
        }
        newInterval = curr;
    }

    return true;
}

const intervals = [[5, 8], [9, 15]];
console.log(canAttendMeetings(intervals));