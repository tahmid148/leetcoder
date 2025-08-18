function hammingWeight_math(n: number): number {
    let res = 0;

    while (n > 0) {
        n -= Math.pow(2, Math.floor(Math.log2(n)));
        res++;
    }

    return res;
};

function hammingWeight_a(n: number): number {

    let res = 0;

    while (n > 0) {
        if (n & 1) {
            res++;
        }
        n = n >> 1;
    }

    return res;
}

function hammingWeight_b(n: number): number {
    let res = 0;
    while (n > 0) {
        n = n & (n - 1);
        res++;
    }
    return res;
}


console.log(hammingWeight_b(11));
