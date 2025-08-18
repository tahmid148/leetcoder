function characterReplacement(s: string, k: number): number {

    let freqMap: Map<string, number> = new Map();
    let res = 1;
    let l = 0, r = 1;
    freqMap.set(s[l], 1);

    while (r < s.length) {
        console.log(`l: ${l}, r: ${r}`);
        freqMap.set(s[r], (freqMap.get(s[r]) ?? 0) + 1);
        r++;
        console.log(freqMap);
        let currMax = 0;
        for (let char of freqMap.keys()) {
            currMax = Math.max(currMax, freqMap.get(char)!);
        }
        console.log('window size - max freq = ' + (r - l - currMax));
        if (r - l - currMax > k) {
            freqMap.set(s[l], freqMap.get(s[l])! - 1);
            l++;
        } else {
            res = Math.max(res, r - l);
        }
        console.log()
    }


    return res;
};

const s = "ABAB";
const k = 2;
console.log(characterReplacement(s, k));