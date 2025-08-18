function dailyTemperatures(temperatures: number[]): number[] {
    let res = new Array(temperatures.length).fill(0);

    let stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        const curr = temperatures[i];

        if (stack.length > 0) {
            while (curr > temperatures[stack[stack.length - 1]]) {
                const j = stack.pop()!;
                res[j] = i - j;
            }
            stack.push(i);
        } else {
            stack.push(i);
        }
    }

    return res;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // [1,1,4,2,1,1,0,0]