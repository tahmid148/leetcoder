function longestPalindrome(s: string): string {
    let lMax = 0, rMax = 0, lenMax = 0;

    for (let i = 0; i < s.length; i++) {
        // Check odd-length palindromes
        let left = i - 1, right = i + 1;
        while ((left >= 0 && right < s.length) && s[left] === s[right]) {
            left--;
            right++;
        }
        if (right - left + 1 > lenMax) {
            lenMax = right - left + 1;
            lMax = left, rMax = right;
        }

        // Check even-length palindromes
        left = i, right = i + 1;
        while ((left >= 0 && right < s.length) && s[left] === s[right]) {
            left--;
            right++;
        }
        if (right - left + 1 > lenMax) {
            lenMax = right - left + 1;
            lMax = left, rMax = right;
        }
    }

    return s.slice(lMax + 1, rMax);
};






console.log(longestPalindrome("babad"));