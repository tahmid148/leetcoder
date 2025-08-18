function encode(strs: string[]): string {
    return strs.map((s) => s.length + '#' + s).join('');
}

function decode(str: string): string[] {

    let ptr = 0;
    let currLength: string = '';
    let res = [];
    while (ptr < str.length) {
        while (str[ptr] !== '#') {
            currLength += str[ptr];
            ptr++;
        }
        res.push(str.slice(ptr + 1, ptr + Number(currLength) + 1));
        ptr += Number(currLength) + 1;
        currLength = '';
    }

    return res;
}

const strs = ["neet", "code", "love", "you"];

const encoded = encode(strs);
console.log('Encoded: ' + encoded);
const decoded = decode(encoded);

console.log('Decoded: ', decoded);

