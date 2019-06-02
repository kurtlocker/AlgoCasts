// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunks = [];
//   let chnk = [];
//   for (const num of array) {
//     if (chnk.length === size) {
//       chunks.push(chnk);
//       chnk = [];
//     }
//     chnk.push(num);
//   }
//   if (chnk.length > 0) {
//     chunks.push(chnk);
//   }
//   return chunks;
// }

function chunk(array, size) {
  const chunked = [];
  let i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }
  return chunked;
}

module.exports = chunk;
