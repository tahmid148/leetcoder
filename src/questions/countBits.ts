function countBits_logn(n: number): number[] {
    let res: number[] = [];
    for (let i = 0; i <= n; i++) {
        let curr = i;
        let res2 = 0;
        while (curr > 0) {
            curr = curr & (curr - 1);
            res2++;
        }
        res.push(res2);
    }
    return res;
};

function countBits(n: number): number[] {
    let dp = new Array(n + 1).fill(0);
    let offset = 1; // most recent power of 2

    for (let i = 1; i <= n; i++) {
        if (i === offset * 2) {
            offset = i;
        }
        dp[i] = 1 + dp[i - offset];
    }

    return dp;
}

console.log(countBits(8));


