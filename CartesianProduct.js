const cartesianProduct = (arr1, arr2) => {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push(new Array(arr1[i], arr2[j]));
    }
  }

  return result;
}; // O(mn)

console.log(cartesianProduct([1, 2], [3, 4, 5])); // [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]
console.log(cartesianProduct([1, 2, 3], [3, 4, 5, 6])); // [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]
