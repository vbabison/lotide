const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter === " ") {
      continue;
    } else if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;

//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.