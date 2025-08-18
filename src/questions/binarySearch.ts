function search1(nums: number[], target: number): number {
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        const midpoint = Math.floor((l + r) / 2);
        const curr = nums[midpoint];

        if (curr === target) {
            return midpoint;
        } else if (curr < target) {
            l = midpoint + 1;
        } else if (curr > target) {
            r = midpoint - 1;
        }
    }

    return -1;
};

function search(nums: number[], target: number): number {

    let l = 0, r = nums.length;

    while (l <= r) {
        const midpoint = Math.floor(l + ((r - l) / 2));
        console.log(`l: ${l} - r: ${r} - midpoint: ${midpoint}`);

        if (nums[midpoint] < target) {
            l = midpoint + 1;
        } else if (nums[midpoint] > target) {
            r = midpoint;
        } else {
            return midpoint;
        }

    }

    return -1;
}


let nums = [-1, 0, 3, 5, 9, 12];
let targ: number = 9;
console.log(search(nums, targ));