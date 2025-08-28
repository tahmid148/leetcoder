function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const total = nums1.length + nums2.length;
  const sizeOfLeftPartition = Math.floor(total / 2);

  const a = nums1.length < nums2.length ? nums1 : nums2; // Smaller array
  const b = nums1.length < nums2.length ? nums2 : nums1;

  let l = 0,
    r = a.length - 1;

  while (l <= r) {
    const midpoint = Math.floor((l + r) / 2);

    const l1 = a[midpoint] ?? Number.MIN_SAFE_INTEGER;
    const l2 = b[sizeOfLeftPartition - midpoint - 2] ?? Number.MIN_SAFE_INTEGER;

    const r1 = a[midpoint + 1] ?? Number.MAX_SAFE_INTEGER;
    const r2 = b[sizeOfLeftPartition - midpoint - 1] ?? Number.MAX_SAFE_INTEGER;

    const leftMax = Math.max(l1, l2);
    const rightMin = Math.min(r1, r2);

    if (leftMax > rightMin) {
      l = midpoint + 1;
    } else {
      if (total % 2 === 1) {
        return rightMin;
      } else {
        return (leftMax + rightMin) / 2;
      }
    }
  }

  if (total % 2 === 1) {
    return a[0] ?? b[0];
  }

  return (a[a.length - 1] + b[0]) / 2;
}

const nums1 = [-10, -9, -8];
const nums2 = [1, 2];
// const nums1 = [1, 2];
// const nums2 = [3, 4];

// const nums1 = [1, 3];
// const nums2 = [2];

// const nums1 = [1, 2, 3, 4, 5];
// const nums2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// const nums1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const nums2 = [1, 2, 3, 4];
console.log(findMedianSortedArrays(nums1, nums2));

// l: 3, r: 4
// l [ 1, 2, 1, 2, 3, 4 ] r [ 3, 4, 5, 6, 7, 8 ]
