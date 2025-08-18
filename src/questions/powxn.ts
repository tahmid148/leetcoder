function myPow_basic(x: number, n: number): number {
    let sum = 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    for (let i = 0; i < n; i++) {
        sum *= x;
    }
    return sum;
};

function myPow(x: number, n: number): number {
    if (n < 0) {
        return 1 / myPow(x, -n);
    }
    if (x === 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }

    let half = myPow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return half * half;
    } else {
        return x * half * half;
    }
}

const x = 2.000000;
const n = 10;
console.log(myPow(x, n));
