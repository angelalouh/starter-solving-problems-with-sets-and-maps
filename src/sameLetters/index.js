/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
  const results = new Map();

  words.forEach((word) => {
    const set = new Set(word.toLowerCase());

    const arrayOfSetLetters = [...set];
    const sortedArrayOfLetters = arrayOfSetLetters.sort();
    const stringOfLetters = sortedArrayOfLetters.join("");

    if (results.get(stringOfLetters)) {
      const existingArrayValue = results.get(stringOfLetters);
      results.set(stringOfLetters, [...existingArrayValue, word]);
    } else {
      results.set(stringOfLetters, [word]);
    }
  });

  return results;
}

module.exports = sameLetters;
