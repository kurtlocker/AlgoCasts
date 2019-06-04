// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.split(/\s/).reduce((a, b) => {
    return (
      a[0].toUpperCase() + a.slice(1) + ' ' + b[0].toUpperCase() + b.slice(1)
    );
  })
}

module.exports = capitalize;
