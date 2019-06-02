// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     const char = str[i];
//     reversed += char;
//   }
//   return reversed;
// }

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let reveresed = '';
//   for (const char of str) {
//     reveresed = char + reveresed;
//   }
//   return reveresed;
// }

// function reverse(str) {
//   return str.length === 0
//     ? str
//     : str[str.length - 1] + reverse(str.slice(0, str.length - 1));
// }

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
