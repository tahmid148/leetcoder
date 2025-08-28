function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const total = nums1.length + nums2.length;
  const sizeOfLeftPartition = Math.floor(total / 2);

  let a = nums1,
    b = nums2;
  if (nums1.length > nums2.length) {
    a = nums2;
    b = nums1;
  }

  // Search on a -> Criteria: How much of a is on the first half of the merged array?
  let l = 0,
    r = a.length;

  while (l <= r) {
    const midpointA = Math.floor((l + r) / 2);
    const midpointB = sizeOfLeftPartition - midpointA;

    console.log(`l: ${l}, r: ${r}, midpoint: ${midpointA}`);

    // The first half of the merged array will be made up on a[0:midpointA - 1] + b[0:midpointB - 1] a.k.a. a1 + b1
    const a1 = a[midpointA - 1] ?? Number.MIN_SAFE_INTEGER;
    const b1 = b[midpointB - 1] ?? Number.MIN_SAFE_INTEGER;

    const a2 = a[midpointA] ?? Number.MAX_SAFE_INTEGER;
    const b2 = b[midpointB] ?? Number.MAX_SAFE_INTEGER;

    if (a1 <= b2 && b1 <= a2) {
      const firstHalfMax = Math.max(a1, b1);
      const secondHalfMin = Math.min(a2, b2);
      // We found the correct ordering
      if (total % 2 === 1) {
        // Odd case
        return secondHalfMin;
      } else {
        // Even case
        return (firstHalfMax + secondHalfMin) / 2;
      }
    } else if (a1 > b2) {
      // We need less of a in the first half of the merged array
      r = midpointA - 1;
    } else {
      // We need more of a in the first half of the merged array
      l = midpointA + 1;
    }
  }

  return -1;
}

// const nums1 = [-10, -9, -8];
// const nums2 = [1, 2];

// const nums1 = [1, 2];
// const nums2 = [3, 4];

const nums1 = [1, 3];
const nums2 = [10, 11];

// const nums1 = [1, 2, 3, 4, 5];
// const nums2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

// const nums1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const nums2 = [1, 2, 3, 4];
console.log(findMedianSortedArrays(nums1, nums2));

// l: 3, r: 4
// l [ 1, 2, 1, 2, 3, 4 ] r [ 3, 4, 5, 6, 7, 8 ]
