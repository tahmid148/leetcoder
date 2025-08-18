function checkValidString(s: string): boolean {

    let leftMin = 0, leftMax = 0;


    for (let c of s) {
        if (c === '(') {        // left case: (
            leftMin++;
            leftMax++;
        } else if (c === ')') {  // right case: )
            leftMax--;
            leftMin--;
            if (leftMin < 0) {
                leftMin = 0;
            }
            if (leftMax < 0) {
                return false;
            }
        } else if (c === '*') {
            leftMax++;
            leftMin--;
            if (leftMin < 0) {
                leftMin = 0;
            }
        }
    }

    console.log(`LeftMin: ${leftMin} and LeftMax: ${leftMax}`);

    return leftMin === 0;
};

const s = "(*)";
console.log(checkValidString(s));