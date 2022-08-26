const bubbleSort = (arr) => {
  // Solution Course
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  // My Solution
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = arr.length - 1; j >= i; j--) {
  //     if (arr[i] > arr[j]) {
  //       [arr[i], arr[j]] = [arr[j], arr[i]]
  //     }
  //   }
  // }

  return arr;
}; // O(n^2)

console.log(bubbleSort([-6, 20, 8, -2, 4])); // [ -6, -2, 4, 8, 20 ]
console.log(bubbleSort([-6, 20, 8, -2, 4, 1, 11, 2, 22])); // [-6, -2,  1,  2, 4, 8, 11, 20, 22]
