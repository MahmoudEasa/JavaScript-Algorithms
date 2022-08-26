// My Solation
// const fibonacci = (n) => {
//   const arr = [];
//   const arr2 = [];

//   for (let i = 0; i < n; i++) {
//     arr.push(i);
//   } // O(n)

//   arr.map((item, i) => {
//     if (item === 0) {
//       arr2.push(item);
//     } else if (item === 1) {
//       arr2.push(item + i - 1);
//     } else {
//       arr2.push(arr2[i - 1] + arr2[i - 2]);
//     }
//   }); // O(n)
//   return arr2;
// }; // O(n2)

// Solation Course
const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}; // O(n)

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
