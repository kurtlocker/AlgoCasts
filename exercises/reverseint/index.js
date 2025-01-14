// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const reversedInt = n
//     .toString()
//     .split('')
//     .reverse();
//   if (reversedInt.includes('-')) {
//     reversedInt.pop();
//     reversedInt.unshift('-');
//   }
//   return Number(reversedInt.join(''));
// }

function reverseInt(n) {
  const sign = Math.sign(n);
  return Number(
    (sign === -1 ? '-' : '') +
      Math.abs(n)
        .toString()
        .split('')
        .reverse()
        .join('')
  );
}

module.exports = reverseInt;
