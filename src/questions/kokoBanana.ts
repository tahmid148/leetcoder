function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1,
    hi = Math.max(...piles);

  while (lo < hi) {
    const midpoint = Math.floor(lo + (hi - lo) / 2);
    let hoursNeeded = 0;

    for (let pile of piles) {
      hoursNeeded += Math.ceil(pile / midpoint);
    }

    if (hoursNeeded <= h) {
      hi = midpoint - 1;
    } else if (hoursNeeded > h) {
      lo = midpoint + 1;
    }
  }

  return lo;
}

const piles = [3, 6, 7, 11];
const h = 8;
console.log(minEatingSpeed(piles, h));
