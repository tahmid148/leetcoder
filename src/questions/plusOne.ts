function plusOne(digits: number[]): number[] {

    let carry = 0;
    let completed = false;
    for (let i = digits.length - 1; i >= 0; i--) {

        if (completed) {
            return digits;
        }

        if (carry) {
            if (digits[i] + carry <= 9) {
                digits[i] = digits[i] + carry;
                completed = true;
            } else {
                digits[i] = 0;
                if (i === 0) {
                    digits.unshift(1);
                }
            }
        } else {
            if (digits[i] + 1 <= 9) {
                digits[i] = digits[i] + 1;
                completed = true;
            } else {
                carry = 1;
                digits[i] = 0;
                if (i === 0) {
                    digits.unshift(1);
                }
            }
        }

    }

    return digits;
};

function plusOne_2(digits: number[]): number[] {
    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        if (sum <= 9) {
            digits[i] = sum;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    // If we're here, we overflowed completely
    digits.unshift(1);
    return digits;
}
const digits = [9, 9];
console.log(plusOne(digits));