function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  let res: number[][] = new Array();
  let [newStart, newEnd] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    console.log(
      `Checking interval [${start},${end}] against [${newStart},${newEnd}]`
    );

    if (newEnd < start) {
      res.push([newStart, newEnd]);
      [newStart, newEnd] = [start, end];
    } else if (start > newEnd) {
      res.push([start, end]);
    } else {
      [newStart, newEnd] = [Math.min(newStart, start), Math.max(newEnd, end)];
    }
  }

  res.push([newStart, newEnd]);
  return res;
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
// const intervals = [[1, 4], [0, 0]];
console.log(merge(intervals));
