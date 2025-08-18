function mergeTriplets(triplets: number[][], target: number[]): boolean {

    const candidates = triplets.filter(([x, y, z]) => (x <= target[0] && y <= target[1] && z <= target[2]));

    const matchingCandidates = candidates.map(([x, y, z]) => {
        return [x === target[0], y === target[1], z === target[2]];
    });

    const result = matchingCandidates.reduce(([x, y, z], [i, j, k]) => {
        return [x || i, y || j, z || k];
    }, [false, false, false])

    return result.every((v) => v);
};

const triplets = [
    [2, 5, 3],
    [1, 8, 4],
    [1, 7, 5]
];
const target =
    [2, 7, 5];
console.log(mergeTriplets(triplets, target));