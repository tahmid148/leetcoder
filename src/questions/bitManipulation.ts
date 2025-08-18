function is_power_of_2(n: number): boolean {
    return n > 0 && ((n & (n - 1)) === 0);
}

function set_bit_at_i(n: number, i: number): number {
    const mask = 1 << i;
    return n | mask;
}

function clear_bit_at_i(n: number, i: number): number {
    const mask = ~(1 << i);
    return n & mask;
}

function toggle_bit_at_i(n: number, i: number): number {
    const mask = 1 << i;
    return n ^ mask;
}

console.log(toggle_bit_at_i(12, 3));