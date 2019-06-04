// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const columnN = 2 * n - 1;
  for (let i = 1; i <= n; i++) {
    const hashN = 2 * i - 1;
    const spaceN = (columnN - hashN) / 2;
    console.log(' '.repeat(spaceN) + '#'.repeat(hashN) + ' '.repeat(spaceN));
  }
}

// function pyramid(n) {
//   let rightSteps = ' '.repeat(n);
//   for (let i = 1; i <= n; i++) {
//     rightSteps = `#${rightSteps}`;
//     rightSteps = rightSteps.substring(0, rightSteps.length - 1);
//     let leftSteps = rightSteps.split('').reverse();
//     leftSteps.pop();
//     leftSteps = leftSteps.join('');
//     console.log(leftSteps + rightSteps);
//   }
// }

module.exports = pyramid;
