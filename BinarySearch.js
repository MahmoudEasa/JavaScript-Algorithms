const binarySearch = (arr, t) => {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let middleIndex = Math.floor((first + last) / 2);
    if (arr[middleIndex] === t) {
      return middleIndex;
    }

    if (arr[middleIndex] < t) {
      first = middleIndex + 1;
    } else {
      last = middleIndex - 1;
    }
  }

  return -1;
}; // O(logn)

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
console.log(binarySearch([], 20)); // -1
