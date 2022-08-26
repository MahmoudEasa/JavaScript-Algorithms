const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = numberToInsert;
  }

  return arr;
}; // O(n^2)

console.log(insertionSort([8, 20, -2, 4, -6])); // [ -6, -2, 4, 8, 20 ]
console.log(insertionSort([-6, 20, 8, -2, 4, 1, 11, 2, 22])); // [-6, -2,  1,  2, 4, 8, 11, 20, 22]
