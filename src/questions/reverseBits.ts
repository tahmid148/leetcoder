function reverseBits(n: number): number {
    const indexes = 31;
    let res = 0;

    for (let i = 0; i <= 31; i++) {
        const mask = 1 << i;
        if ((n & mask) !== 0) {
            console.log(`Time to set the bit at ${31 - i}`);
            const newMask = 1 << (31 - i);
            res = res | newMask;
        }

    }

    return res >>> 0;
};

console.log(reverseBits(0b00000010100101000001111010011100)) // 964176192

// Before: 0 1 2 3 4 5 6 7 8
// After:  8 7 6 5 4 3 2 1 0

// Index 8 goes to Index 0 (-8)
// Index 7 goes to Index 1 (-6)
// Index 6 goes to Index 2 (-4)
// Index 5 goes to Index 3 (-2)
// Index 4 goes to Index 4 (0)
// Index 3 goes to Index 5 (+2)
// Index 2 goes to Index 6 (+4)
// Index 1 goes to Index 7 (+6)
// Index 0 goes to Index 8 (+8)
