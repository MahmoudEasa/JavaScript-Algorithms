const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  const resultArr = [...sortedArr, ...leftArr, ...rightArr];

  return resultArr;
}; // O(n log n)

console.log(mergeSort([8, 20, -2, 4, -6])); // [ -6, -2, 4, 8, 20 ]
console.log(mergeSort([-6, 20, 8, -2, 4])); // [ -6, -2, 4, 8, 20 ]
console.log(mergeSort([-6, 20, 8, -2, 4, 1, 11, 2, 22])); // [-6, -2,  1,  2, 4, 8, 11, 20, 22]
