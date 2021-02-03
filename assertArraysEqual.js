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
  if (arr1 === arr2) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);