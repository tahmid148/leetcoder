const letterToDigit: Map<number, string> = new Map<number, string>([
  [2, "abc"],
  [3, "def"],
  [4, "ghi"],
  [5, "jkl"],
  [6, "mno"],
  [7, "pqrs"],
  [8, "tuv"],
  [9, "wxyz"],
]);

function letterCombinations(digits: string): string[] {
  let res: string[] = [];
  const numbers = digits.split("").map((x) => Number(x));
  const groups = numbers.map((n) => letterToDigit.get(n)!);

  const dfs = (groupIndex: number, charIndex: number, curr: string): void => {
    if (groupIndex === groups.length) {
      if (!!curr) res.push(curr);
      return;
    }
    if (charIndex === groups[groupIndex].length) return;

    dfs(groupIndex + 1, 0, curr + groups[groupIndex][charIndex]);
    dfs(groupIndex, charIndex + 1, curr);
  };

  dfs(0, 0, "");
  return res;
}

const digits = "23";
console.log(letterCombinations(digits));
