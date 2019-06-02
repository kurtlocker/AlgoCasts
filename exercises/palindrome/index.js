// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let lPointer = 0;
//   let rPointer = str.length - 1;
//   while (lPointer < rPointer) {
//     if (str[lPointer] !== str[rPointer]) {
//       return false;
//     }
//     lPointer += 1;
//     rPointer -= 1;
//   }
//   return true;
// }

function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;
