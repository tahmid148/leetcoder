function minMeetingRooms(intervals: number[][]): number {
    let numberOfRooms = 0;
    let maxRooms = 0;

    const starts = intervals.map((v, i) => v[0]).sort((a, b) => a - b);
    const ends = intervals.map((v, i) => v[1]).sort((a, b) => a - b);

    let currStart = 0, currEnd = 0;

    while (currStart < starts.length || currEnd < ends.length) {
        const isStartNext = starts[currStart] < ends[currEnd];

        if (isStartNext) {
            numberOfRooms++;
            console.log(`Meeting started at: ${starts[currStart]} - rooms ${numberOfRooms}`);
            currStart++;
        } else {
            numberOfRooms--;
            console.log(`Meeting ended at: ${ends[currEnd]} - rooms ${numberOfRooms}`);
            currEnd++;
        }
        maxRooms = Math.max(maxRooms, numberOfRooms);
    }

    return maxRooms;
}

const intervals = [[0, 40], [5, 10], [15, 20]];
console.log(minMeetingRooms(intervals));