class TimeMap {
  map: Map<string, [string, number][]>;
  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.map.has(key)) {
      this.map.set(key, [[value, timestamp]]);
    } else {
      this.map.get(key)?.push([value, timestamp]);
    }
  }

  get(key: string, timestamp: number): string {
    const entries = this.map.get(key);
    if (!entries) return "";

    let lo = 0,
      hi = entries.length;

    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (entries[mid][1] === timestamp) {
        return entries[mid][0];
      } else if (entries[mid][1] > timestamp) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo > 0 ? entries[lo - 1][0] : "";
  }
}

const timeMap: TimeMap = new TimeMap();
timeMap.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1.
console.log(timeMap.get("foo", 1)); // return "bar"
console.log(timeMap.get("foo", 3)); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
console.log(timeMap.get("foo", 4)); // return "bar2"
// timeMap.get("foo", 5);         // return "bar2"
