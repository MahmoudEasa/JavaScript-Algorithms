// My Solation
// const factorial = (n) => {
//   if (n <= 1) {
//     return 1;
//   }
//   for (let i = n - 1; i > 0; i--) {
//     n *= i;
//   }
//   return n;
// }; // O(n)

// Solation Course
const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}; // O(n)

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
