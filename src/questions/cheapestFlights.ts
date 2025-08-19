function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  let prices = new Array(n).fill(Infinity);

  // Initialise
  prices[src] = 0;

  // Steps
  for (let i = 0; i < k + 1; i++) {
    let tmp = [...prices];
    console.log("tmp", tmp);

    for (const [s, d, c] of flights) {
      const costTo = prices[s] + c;
      tmp[d] = Math.min(tmp[d], costTo);
    }
    prices = tmp;
  }

  return prices[dst] === Infinity ? -1 : prices[dst];
}

// const n = 3,
//   src = 0,
//   dst = 2,
//   k = 1,
//   flights = [
//     [0, 1, 100],
//     [0, 2, 500],
//     [1, 2, 100],
//   ];

const n = 4,
  src = 0,
  dst = 3,
  k = 1,
  flights = [
    [0, 1, 1],
    [0, 2, 5],
    [1, 2, 1],
    [2, 3, 1],
  ];

// const n = 4,
//   flights = [
//     [0, 1, 100],
//     [1, 2, 100],
//     [2, 0, 100],
//     [1, 3, 600],
//     [2, 3, 200],
//   ],
//   src = 0,
//   dst = 3,
//   k = 1;

console.log("Result:", findCheapestPrice(n, flights, src, dst, k));
