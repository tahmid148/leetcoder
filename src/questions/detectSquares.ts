class DetectSquares {
  private xToY: Map<number, Set<number>>; // (x, y[])
  private yToX: Map<number, Set<number>>; // (y, x[])
  private pointCount: Map<string, number>;
  constructor() {
    this.xToY = new Map();
    this.yToX = new Map();
    this.pointCount = new Map();
  }

  add(point: number[]): void {
    const [x, y] = point;
    const key = `${x},${y}`;
    if (!this.xToY.has(x)) this.xToY.set(x, new Set());
    if (!this.yToX.has(y)) this.yToX.set(y, new Set());
    if (!this.pointCount.has(key)) this.pointCount.set(key, 0);

    this.xToY.get(x)?.add(y);
    this.yToX.get(y)?.add(x);
    this.pointCount.set(key, this.pointCount.get(key)! + 1);
  }

  count(point: number[]): number {
    const [x1, y1] = point;
    let counter = 0;
    if (!this.xToY.has(x1) || !this.yToX.has(y1)) return counter;

    for (const x2 of this.yToX.get(y1) ?? []) {
      for (const y2 of this.xToY.get(x2) ?? []) {
        if (x2 !== x1 && y2 !== y1 && Math.abs(x2 - x1) === Math.abs(y2 - y1)) {
          // Update Counter
          const count1 = this.pointCount.get(`${x2},${y1}`) || 0; // Point (x2, y1)
          const count2 = this.pointCount.get(`${x2},${y2}`) || 0; // Point (x2, y2)
          const count3 = this.pointCount.get(`${x1},${y2}`) || 0; // Point (x1, y2)
          counter += count1 * count2 * count3;
        }
      }
    }

    return counter;
  }
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */

let detectSquares = new DetectSquares();
detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);
console.log("Result:", detectSquares.count([11, 10])); // return 1. You can choose:

detectSquares.add([11, 2]);
console.log("Result:", detectSquares.count([11, 10])); // return 2;
