const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results= {};
  for (letter of string) {
    if (letter === " ") {
      continue
    } else if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};


console.log(countLetters("LHL"))
console.log(countLetters("lighthouse in the house"))
//The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

//For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

