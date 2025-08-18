function partition(s: string): string[][] {
  const res: string[][] = [];

  const dfs = (i: number, curr: string, partition: string[]): void => {
    // console.log(`i: ${i}, curr: ${curr}, partition: [${partition}]`);
    if (i === s.length) {
      if (!!curr) {
        if (!isPalindrome(curr)) return;
      }
      res.push([...partition, curr]);
      return;
    }

    dfs(i + 1, curr + s[i], [...partition]);
    if (i > 0) {
      if (!isPalindrome(curr)) return;
      dfs(i + 1, s[i], !!curr ? [...partition, curr] : [...partition]);
    }
  };

  dfs(0, "", []);
  return res;
}

function isPalindrome(s: string): boolean {
  const word = s.toLowerCase().match(/[a-zA-Z0-9]/g)!;
  if (!word || !word.length) {
    return true;
  }
  let start = 0,
    end = word.length - 1;

  while (end >= start) {
    if (word[end] !== word[start]) {
      return false;
    }
    end--;
    start++;
  }

  return true;
}

const s = "efe";
console.log(partition(s));
