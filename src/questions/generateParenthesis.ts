function generateParenthesis(n: number): string[] {
    let res: string[] = [];

    const dfs = (open: number, closed: number, curr: string): void => {
        console.log(`open: ${open}, closed: ${closed}, curr: ${curr}`);
        if (open === n && closed === n) {
            console.log(curr);
            res.push(curr);
        }

        if (open > closed) {
            dfs(open, closed + 1, curr + ')');
        }

        if (open < n) {
            dfs(open + 1, closed, curr + '(');
        }
    }

    dfs(0, 0, '');

    return res;
};

const n = 3;
console.log(generateParenthesis(n));

// n = 1 -> Output: ["()"]
// n = 3 -> Output: ["((()))","(()())","(())()","()(())","()()()"]