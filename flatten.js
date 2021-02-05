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

const flatten = function(arr) {
  let arr1 = [];
  for (const x of arr) {
    if (Array.isArray(x)) {
      for (const y of x) {
        arr1.push(y);
      }
    } else {
      arr1.push(x);
    }
  }
  return arr1;
};

const flat = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flat, [1, 2, 3, 4, 5, 6]);