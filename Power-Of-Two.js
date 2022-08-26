// n = 8
// 8/2 = 4 (remainder 0)
// 4/2 = 2 (remainder 0)
// 2/2 = 1 (remainder 0)

const isPowerOfTwoBitWise = (n) => {
  if (n < 1) {
    return false;
  }
  console.log(n & (n - 1));
  return (n & (n - 1)) === 0;
}; // O(1)

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false

// const isPowerOfTow = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }; // O(logn)

// console.log(isPowerOfTow(1)); // true
// console.log(isPowerOfTow(2)); // true
// console.log(isPowerOfTow(5)); // false
