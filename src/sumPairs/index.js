/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  const numbers = new Map();
  const solution = new Map();

  A.forEach((element) => numbers.set(element, element));

  A.forEach((element) => {
    const diff = N - element;
    // Line 15 ensures we do not end up with a number paired with itself, like [5,5]
    if (diff !== element) {
      const diffExists = numbers.get(diff);
      if (diffExists) {
        // Ensuring we do not end up with the same number pair like [3,7] and [7,3]
        if (element < diffExists) {
          solution.set(element, diffExists);
        } else {
          solution.set(diffExists, element);
        }
      }
    }
  });

  return [...solution];
}

module.exports = sumPairs;
