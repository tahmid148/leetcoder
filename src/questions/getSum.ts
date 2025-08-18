function getSum(a: number, b: number): number {

    let res = 0;
    let carry = 0;

    for (let i = 0; i < 32; i++) {
        const a_bit = (a >> i) & 1;
        const b_bit = (b >> i) & 1;
        const sum_bit = a_bit ^ b_bit ^ carry;

        carry = (a_bit & b_bit) | (carry & (a_bit ^ b_bit));
        res |= sum_bit << i;
    }

    return res;
}

console.log(getSum(20, 30));