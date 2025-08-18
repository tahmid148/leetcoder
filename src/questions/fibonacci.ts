
function fibonacci_recursive(n: number): number {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}
function fibonacci_iterative(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let first = 0, second = 1;
    for (let i = 2; i <= n; i++) {
        let temp = second;
        second = first + second;
        first = temp;
    }
    return second;
}

console.log(fibonacci_iterative(20));