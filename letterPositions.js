const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};
console.log("Your Answer", letterPositions("lighthouse in the house"))
const eqArrays = function(arr1, arr2) {
  let fakeValue = true;
  arr1.forEach((e1) => arr2.forEach((e2) =>{
    if (e1 === e2) {
      fakeValue = true;
    } else {
      fakeValue = false;
    }
  }));
  return fakeValue;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


assertArraysEqual(letterPositions("hello").e, [1]);