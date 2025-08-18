function canCompleteCircuit_first(gas: number[], cost: number[]): number {

    const NUMBER_OF_STATIONS = gas.length;
    let result = -1;

    for (let i = 0; i < NUMBER_OF_STATIONS; i++) {
        let tank = 0;
        // console.log(`Starting at Station ${i} with tank ${tank + gas[i]}`);
        // console.log(`Cost to Station ${i + 1} = ${cost[i]}`);
        let currentStation = i;

        if (cost[i] > tank + gas[i]) {
            // console.log(`We cannot start at Station ${i}`);
            continue;
        } else {
            // console.log(`Starting from Station ${i}`)
        }

        while (currentStation !== i + NUMBER_OF_STATIONS) {
            // update tank
            tank += gas[currentStation % NUMBER_OF_STATIONS];
            console.log(`Arrived at Station ${currentStation % NUMBER_OF_STATIONS} with tank = ${tank}`);
            // try to go -> if not enough fuel, skip
            if (cost[currentStation % NUMBER_OF_STATIONS] > tank) {
                console.log(`Not enough fuel to get to ${(currentStation + 1) % NUMBER_OF_STATIONS}. Break.`)
                break;
            }
            tank -= cost[currentStation % NUMBER_OF_STATIONS];
            currentStation++;
        }

        if (currentStation === i + NUMBER_OF_STATIONS) {
            result = i;
        }
        console.log();
    }

    return result;
};

function canCompleteCircuit(gas: number[], cost: number[]): number {
    const NUMBER_OF_STATIONS = gas.length;

    let tank = 0;
    let currentStartingStation = 0;

    for (let i = 0; i < NUMBER_OF_STATIONS * 2; i++) {
        if (tank < 0) {
            tank = 0;
            currentStartingStation = i;
        }

        if (i === currentStartingStation + NUMBER_OF_STATIONS) {
            return currentStartingStation % NUMBER_OF_STATIONS;
        }

        tank += gas[i % NUMBER_OF_STATIONS];
        tank -= cost[i % NUMBER_OF_STATIONS];

    };

    return -1;
}

const gas: number[] = [1, 2, 3, 4, 5];
const cost: number[] = [3, 4, 5, 1, 2];
console.log('Result: ' + canCompleteCircuit(gas, cost));