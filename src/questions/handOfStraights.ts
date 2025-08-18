function isNStraightHand_1(hand: number[], groupSize: number): boolean {

    if (hand.length % groupSize !== 0) {
        return false;
    }

    const occurances: Map<number, number> = hand.reduce((prev, curr) => prev.set(curr, (prev.get(curr) ?? 0) + 1), new Map());

    while (occurances.size > 0) {
        const keys = Array.from(occurances.keys());
        let minKey = Math.min(...keys);

        const currValue = occurances.get(minKey)!;
        const newValue = currValue - 1;
        if (newValue > 0) {
            occurances.set(minKey, newValue);
        } else {
            occurances.delete(minKey);
        }

        console.log('Starting key: ' + minKey);
        for (let i = 1; i < groupSize; i++) {
            if (keys.includes(minKey + i)) {
                console.log(`found ${minKey + i}`);
                const currValue = occurances.get(minKey + i)!;
                const newValue = currValue - 1;
                if (newValue > 0) {
                    occurances.set(minKey + i, newValue);
                } else {
                    occurances.delete(minKey + i);
                }
            } else {
                return false;
            }
        }
    }
    return true;
};

function isNStraightHand(hand: number[], groupSize: number): boolean {

    if (hand.length % groupSize !== 0) {
        return false;
    }

    const occurances: Map<number, number> = hand.reduce((prev, curr) => prev.set(curr, (prev.get(curr) ?? 0) + 1), new Map());

    for (const curr of hand) {
        let start = curr;
        while (occurances.get(start - 1)! > 0) start--;
        console.log(occurances);
    }

    return true;
};

const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
const groupSize = 3;
console.log(`Result: ${isNStraightHand(hand, groupSize)}`);