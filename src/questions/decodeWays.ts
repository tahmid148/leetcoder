
function numDecodings_recursive(s: string): number {

    const dfs = (i: number): number => {
        if (i === s.length) {
            return 1;
        }

        if (s[i] === '0') {
            return 0;
        }

        if (i < s.length - 1 && s[i] === '1' || (s[i] === '2' && s[i + 1] < '7')) {
            return dfs(i + 1) + dfs(i + 2);
        }

        return dfs(i + 1);
    }

    return dfs(0);
};


function numDecodings_top_down(s: string): number {

    let cache = new Array(s.length).fill(-1);

    const dfs = (i: number): number => {

        if (cache[i] > -1) {
            return cache[i];
        }

        if (i === s.length) {
            return 1;
        }

        if (s[i] === '0') {
            return 0;
        }

        if (i < s.length - 1 && s[i] === '1' || (s[i] === '2' && s[i + 1] < '7')) {
            cache[i] = dfs(i + 1) + dfs(i + 2);
            return cache[i];
        } else {
            cache[i] = dfs(i + 1);
            return cache[i];
        }
    }

    return dfs(0);
};

function numDecodings_bottom_up(s: string): number {

    const SIZE = s.length;

    let dp = new Array(SIZE).fill(0);

    if (s[SIZE - 1] !== '0') {
        dp[SIZE - 1] = 1;
    }

    for (let i = SIZE - 2; i >= 0; i--) {
        // Valid current index
        if (s[i] !== '0') {
            dp[i] += dp[i + 1];

            // Valid 2-digits
            if (s[i] === '1' || (s[i] === '2' && s[i + 1] < '7')) {
                dp[i] += i + 2 < SIZE ? dp[i + 2] : 1;
            }
        }
    }

    return dp[0];
}

