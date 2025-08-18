function partitionLabels(s: string): number[] {

    let finalAppearance: Map<string, number> = new Map();

    for (let i = 0; i < s.length; i++) {
        finalAppearance.set(s[i], i);
    }
    console.log(finalAppearance);

    let result: number[] = [];

    let currEnd = 0;
    let sizeCounter = 0;
    for (let i = 0; i < s.length; i++) {
        const next = s[i];
        currEnd = Math.max(currEnd, finalAppearance.get(next)!);
        console.log(`Current Index: ${i} - Current End: ${currEnd}`);
        sizeCounter++;
        if (i === currEnd) {
            console.log('split here');
            result.push(sizeCounter);
            currEnd = 0;
            sizeCounter = 0;
        }
    }


    return result;
};

const s = "ababcc";
console.log(partitionLabels(s));