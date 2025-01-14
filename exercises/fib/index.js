// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const fibNums = [0, 1];
//   for (let i = 0; i < n - 1; i++) {
//     const last = fibNums[fibNums.length - 1];
//     const secondLast = fibNums[fibNums.length - 2];
//     fibNums.push(last + secondLast);
//   }
//   return fibNums[fibNums.length - 1];
// }

function memoize(fn) {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn(...args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
