type State = "holding" | "cooldown" | "ready";

function maxProfit(prices: number[]): number {

    let cache: Map<number, Map<State, number>> = new Map();

    const dfs = (day: number, state: State): number => {

        if (day > prices.length - 1) {
            return 0;
        }

        if (cache.get(day)?.get(state)) {
            return cache.get(day)?.get(state)!;
        }

        if (state === 'ready') {
            // Buy or skip
            const x = Math.max(dfs(day + 1, 'holding') - prices[day], dfs(day + 1, 'ready'));
            if (!cache.has(day)) {
                cache.set(day, new Map());
            }
            cache.get(day)!.set(state, x);
            return x;
        }

        if (state === 'holding') {
            // Buy, sell, or skip
            const x = Math.max(dfs(day + 1, 'holding') - prices[day], prices[day] + dfs(day + 1, 'cooldown'), dfs(day + 1, 'holding'));;
            if (!cache.has(day)) {
                cache.set(day, new Map());
            }
            cache.get(day)!.set(state, x);
            return x;
        }

        if (state === 'cooldown') {
            // Skip
            const x = dfs(day + 1, 'ready');
            cache.get(day)?.set(state, x);
            return x;
        }

        return 0;
    }

    return dfs(0, 'ready');
};

// const prices = [1, 2, 3, 0, 2];
const prices = [48, 12, 60, 93, 97, 42, 25, 64, 17, 56, 85, 93, 9, 48, 52, 42, 58, 85, 81, 84, 69, 36, 1, 54, 23, 15, 72, 15, 11, 94];
console.log(maxProfit(prices));