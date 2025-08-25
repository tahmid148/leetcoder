function insert(intervals: number[][], newInterval: number[]): number[][] {
  let res: number[][] = new Array();
  let inserted = false;
  let [newStart, newEnd] = newInterval;
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    console.log(
      `Checking interval ${i} [${start},${end}] against [${newStart},${newEnd}]`
    );
    if (inserted) {
      res.push(intervals[i]);
    }
    if (end < newStart) {
      // current interval completely before
      res.push(intervals[i]);
    } else if (start > newEnd) {
      // current interval completely after
      res.push([newStart, newEnd]);
      res.push(intervals[i]);
      inserted = true;
    } else {
      // overlap
      newStart = Math.min(start, newStart);
      newEnd = Math.max(end, newEnd);
      console.log(`Updated newInterval to [${newStart},${newEnd}]`);
    }
  }

  if (!inserted) res.push([newStart, newEnd]);

  return res;
}

const intervals = [
  [0, 1],
  [6, 9],
];
const newInterval = [2, 5];

console.log(insert(intervals, newInterval));
