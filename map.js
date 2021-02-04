/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback = word => word[0]) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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

const results1 = map(words, word => word[0]);
console.log(results1);

//results1 comparison
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
//map comparison with default parameter
assertArraysEqual(map(words), [ 'g', 'c', 't', 'm', 't' ])
//map comparison
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])