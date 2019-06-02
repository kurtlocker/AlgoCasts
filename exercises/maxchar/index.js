// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};
  for (const char of str) {
    map[char] = map[char] + 1 || 1;
  }
  return Object.entries(map).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
}

module.exports = maxChar;
