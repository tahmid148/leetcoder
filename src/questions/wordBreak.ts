function wordBreak_recursive(s: string, wordDict: string[]): boolean {
    if (s.length <= 0) {
        return true;
    }

    const wordSet = new Set(wordDict);

    const dfs = (i: number): boolean => {
        if (i === s.length) {
            return true;
        }
        if (i > s.length - 1) {
            console.log(i)
            return false;
        }

        let word = "";
        for (let j = i; j < s.length; j++) {
            word += s[j];
            if (wordSet.has(word)) {
                if (dfs(i + word.length)) {
                    return true;
                }
            }
        }
        return false;
    }

    return dfs(0);
};

function wordBreak_top_down(s: string, wordDict: string[]): boolean {
    if (s.length <= 0) {
        return true;
    }

    const wordSet = new Set(wordDict);

    let cache: boolean[] = new Array(s.length).fill(undefined);

    const dfs = (i: number): boolean => {
        if (cache[i] !== undefined) {
            return cache[i];
        }
        if (i === s.length) {
            return true;
        }
        if (i > s.length - 1) {
            console.log(i)
            return false;
        }

        let word = "";
        for (let j = i; j < s.length; j++) {
            word += s[j];
            if (wordSet.has(word)) {
                if (dfs(i + word.length)) {
                    cache[i] = true;
                    return true;
                }
                cache[i] = false;
            }
        }
        return false;
    }

    return dfs(0);
};

function wordBreak_bottom_up(s: string, wordDict: string[]): boolean {
    const dp = new Array(s.length + 1).fill(false);
    dp[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (const w of wordDict) {
            if (i + w.length <= s.length &&
                s.slice(i, i + w.length) === w) {
                dp[i] = dp[i + w.length];
            }
            if (dp[i]) {
                break;
            }
        }
    }

    return dp[0];
}