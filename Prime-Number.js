// const isPrime = (n) => {
//   if (n < 2) {
//     return false;
//   }

//   if (n % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// }; // O(3)

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}; // O(sqrt(n))

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
console.log(isPrime(100)); // false
