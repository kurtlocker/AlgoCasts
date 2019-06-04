// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return (str.match(/a|e|i|o|u/gi) || []).length;
}

// function vowels(str) {
//   return str.split('').filter(char => 'aeiou'.includes(char.toLowerCase()))
//     .length;
// }

// function vowels(str) {
//   return str.split('').reduce((p, c) => {
//     const char = c.toLowerCase();
//     return (
//       p +
//       (char === 'a' ||
//       char === 'e' ||
//       char === 'i' ||
//       char === 'o' ||
//       char === 'u'
//         ? 1
//         : 0)
//     );
//   }, 0);
// }

module.exports = vowels;
