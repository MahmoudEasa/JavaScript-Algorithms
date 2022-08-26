// 1. Two Sum

// var twoSum = function (nums, target) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] + nums[i] === target) {
//         arr.push(i);
//         arr.push(j);
//       }
//     }
//   }

//   return arr;
// };

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([3, 3, 6], 9));
//
//
//
//

// 9. Palindrome Number
// var isPalindrome = function (x) {
//   const str = x.toString();
//   const arr = [];
//   for (let i = str.length; i >= 0; i--) {
//     arr.push(str[i]);
//   }

//   if (str != arr.join("")) {
//     return false;
//   }
//   return true;
// };

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));

//
//
//
//

// 231. Power of Two
// var isPowerOfTwo = function (n) {
//   if (n < 1) {
//     return false;
//   }

//   return (n & (n - 1)) === 0;
// };

// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(16)); // true
// console.log(isPowerOfTwo(3)); // false
//
//
//
//
//
//

// 326. Power of Three
// var isPowerOfThree = function (n) {
//   if (n < 1) {
//     return false;
//   }

//   while (n > 1) {
//     if (n % 3 !== 0) {
//       return false;
//     }
//     n = n / 3;
//   }

//   return true;
// };

// console.log(isPowerOfThree(0)); // false
// console.log(isPowerOfThree(27)); // true
// console.log(isPowerOfThree(9)); // true
// console.log(isPowerOfThree(45)); // false
//
//
//
//
//

// 342. Power of Four
// var isPowerOfFour = function (n) {
//   if (n < 1) {
//     return false;
//   }

//   while (n > 1) {
//     if (n % 4 !== 0) {
//       return false;
//     }
//     n = n / 4;
//   }

//   return true;
// };

// console.log(isPowerOfFour(16)); // true
// console.log(isPowerOfFour(5)); // false
// console.log(isPowerOfFour(1)); // true
//
//
//
//
//
//

// 371. Sum of Two Integers
// var getSum = function (a, b) {

//   return Math.log2(2 ** a * 2 ** b);
// };

// console.log(getSum(1, 2));
// console.log(getSum(2, 3));
//
//
//
//
//
// 2. Add Two Numbers
// My Solution
// var addTwoNumbers = function (l1, l2) {
//   // const res = +l1.reverse().join("") + +l2.reverse().join("");
//   // return res.toString().split("").reverse();
// };

// LeetCode Solution
// var addTwoNumbers = function (l1, l2) {
//   let sum = 0;
//   let current = new ListNode(0);
//   let result = current;

//   while (l1 || l2) {
//     if (l1) {
//       sum += l1.val;
//       l1 = l1.next;
//     }

//     if (l2) {
//       sum += l2.val;
//       l2 = l2.next;
//     }

//     current.next = new ListNode(sum % 10);
//     current = current.next;

//     sum = sum > 9 ? 1 : 0;
//   }

//   if (sum) {
//     current.next = new ListNode(sum);
//   }

//   return result.next;
// };

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); // [7,0,8]
// console.log(addTwoNumbers([0], [0])); // [0]
// console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); //[8,9,9,9,0,0,0,1]
//
//
//
//
//                                                                                        Hard
// 383. Ransom Note
// const sort1 = ransomNote.split("").sort().join("");
// const sort2 = magazine.split("").sort().join("");
// const re = new RegExp(sort1, "gi");
// console.log(re.test(sort2, "gi"));
// var canConstruct = function (ransomNote, magazine) {
//   const sort1 = ransomNote.split("").sort().join("");

//   if (ransomNote.length < 3 && magazine.length < 3) {
//     if (!magazine.includes(ransomNote)) {
//       return false;
//     }
//   } else {
//     for (let i = 0; i < sort1.length; i++) {
//       if (!magazine.includes(sort1[i])) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// console.log(canConstruct("a", "b")); // false
// console.log(canConstruct("aa", "ab")); // false
// console.log(canConstruct("aa", "aab")); // true
// console.log(canConstruct("aab", "baa")); // true
// console.log(
//   canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
// ); // true
// console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")); // false
