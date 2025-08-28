function minWindow(s: string, t: string): string {
  const freqMap: Map<string, number> = new Map();
  const referenceMap: Map<string, number> = new Map();
  t.split("").forEach((x) => {
    if (!referenceMap.has(x)) {
      referenceMap.set(x, 0);
      freqMap.set(x, 0);
    }
    referenceMap.set(x, referenceMap.get(x)! + 1);
  });
  let need = t.length;

  let l = 0,
    lMin = 0,
    rMin = Number.MAX_SAFE_INTEGER;
  for (let r = l; r < s.length; r++) {
    const right = s[r];
    if (freqMap.has(right)) {
      freqMap.set(right, freqMap.get(right)! + 1);
      if (freqMap.get(right)! <= referenceMap.get(right)!) need--;
    }

    while (need === 0) {
      if (r - l < rMin - lMin) [lMin, rMin] = [l, r];

      const left = s[l];
      if (freqMap.has(left)) {
        freqMap.set(left, freqMap.get(left)! - 1);
        console.log(freqMap);
        if (freqMap.get(left)! < referenceMap.get(left)!) need++;
      }
      l++;
    }
  }

  if (rMin > s.length) return "";

  return s.slice(lMin, rMin + 1);
}

const s = "aab";
const t = "aab";
console.log(minWindow(s, t));
