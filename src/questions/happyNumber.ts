function isHappy(n: number): boolean {

    // Sum of the squares of its digits
    let x = n;
    let seen = new Set();

    while (x !== 1) {
        let sum = 0;
        while (x > 0) {
            sum += Math.pow((x % 10), 2);
            x = Math.floor(x / 10);
        }
        if (seen.has(sum)) {
            return false;
        }
        seen.add(sum);
        x = sum;
    }

    return true;
};
