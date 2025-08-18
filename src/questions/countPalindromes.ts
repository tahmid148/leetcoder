function countSubstrings(s: string): number {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        count++;

        // odd lengths
        let left = i - 1, right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
        
        // even lengths
        left = i; right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    
    return count;
};

console.log(countSubstrings('aaa'));