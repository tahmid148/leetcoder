function checkInclusion(s1: string, s2: string): boolean {
    const window_size = s1.length;
    let refMap: Map<string, number> = new Map();

    for (let i = 0; i < s1.length; i++) {
        refMap.set(s1[i], (refMap.get(s1[i]) ?? 0) + 1);
    }

    for (let i = 0; i < s2.length; i++) {
        let freqMap: Map<string, number> = new Map();
        for (let j = i; j < i + window_size; j++) {
            freqMap.set(s2[j], (freqMap.get(s2[j]) ?? 0) + 1);
        }

        let same = true;

        // compare maps
        for (let [char, count] of refMap) {
            if (freqMap.get(char) !== count) {
                same = false;
                break;
            }
        }

        if (same) {
            return true
        }
    }

    return false;
};

const s1 = "ab";
const s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));