function carFleet1(target: number, position: number[], speed: number[]): number {
    const cars: [number, number][] = position.map((v, i): [number, number] => [v, speed[i]]).sort((a, b) => b[0] - a[0]);
    let stack: [number, number][] = new Array();
    if (cars.length) {
        stack.push(cars.shift()!);
    }

    while (cars.length) {
        const top = stack[stack.length - 1];
        const curr = cars.shift()!;

        const t1 = (target - top[0]) / top[1];
        const t2 = (target - curr[0]) / curr[1];

        if (t2 > t1) {
            stack.push(curr);
        }
        console.log(stack);
    }

    return stack.length;
};

function carFleet(target: number, position: number[], speed: number[]): number {
    const cars: [number, number][] = position.map((v, i): [number, number] => [v, speed[i]]).sort((a, b) => b[0] - a[0]);
    let stack: number[] = new Array();

    for (let i = 0; i < cars.length; i++) {
        const [currPosition, currSpeed] = cars[i];
        const currTimeToArrive = (target - currPosition) / currSpeed;

        if (stack.length) {
            if (currTimeToArrive > stack[stack.length - 1]) stack.push(currTimeToArrive);
        } else {
            stack.push(currTimeToArrive);
        }
    }

    return stack.length;
};


const target = 12;
const position = [10, 8, 0, 5, 3];
const speed = [2, 4, 1, 1, 3]
console.log('Result: ' + carFleet(target, position, speed));