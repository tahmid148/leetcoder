function climbStairs_top_down(n: number): number {

    let cache: number[] = new Array(n + 1).fill(-1);

    const dfs = (i: number): number => {

        if (i > n) {
            return 0;
        }

        if (cache[i] != -1) {
            return cache[i];
        }

        if (i === n) {
            return 1;
        }

        cache[i] = dfs(i + 1) + dfs(i + 2);

        return cache[i];
    }

    return dfs(0);
}

function climbStairs(n: number): number {
    let a = 1, b = 1;

    for (let i = n - 2; i >= 0; i--) {
        const tmp = a;
        a = a + b;
        b = tmp
    }

    return a;
}


console.log('Result: ' + climbStairs(0));