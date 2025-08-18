function multiply(num1: string, num2: string): string {

    let res: number[] = new Array(num1.length + num2.length).fill(0);

    for (let i = num2.length - 1; i >= 0; i--) {
        for (let j = num1.length - 1; j >= 0; j--) {
            const a = parseInt(num2[i]);
            const b = parseInt(num1[j]);
            const product = a * b;
            res[i + j + 1] += product;
        }
    }

    let carry = 0;
    for (let i = res.length - 1; i >= 0; i--) {
        if (carry > 0) {
            res[i] += carry;
        }


        if (res[i] >= 10) {
            console.log(`Carry needed on ${res[i]} by removing ${Math.floor(res[i] / 10)}`);
            carry = Math.floor(res[i] / 10);
            res[i] = res[i] % 10;
        } else {
            carry = 0;
        }
    }

    const result = res.join('').replace(/^0+/, '');


    return result === '' ? '0' : result;
};

const num1 = "0";
const num2 = "0";
console.log(multiply(num1, num2));