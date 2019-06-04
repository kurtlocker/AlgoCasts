// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
  if (stringA.length !== stringB.length) {
    return false;
  }
  const charMap = {};
  // Populate the character map with chars from first string
  for (const char of stringA) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  // Now iterate through the other string, comparing each char
  // with that of the charMap, if no char or count < 1, we are not
  // an anagram.
  for (const char of stringB) {
    if (!charMap[char] || charMap[char] < 1) {
      return false;
    } else { // Decrement the count of this char in the map by 1
      charMap[char] -= 1;
    }
  }
  return true;
}
/**
 * Compares the strings directly by sorting them alphabetically.
 *
 * @param {*} str1
 * @param {*} str2
 */
function anagram2(str1, str2) {
  return 
    str1
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('') ===
      str1
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

module.exports = anagrams;
