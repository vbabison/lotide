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

const without = function(source, itemsToRemove) {
  const filtered = source.filter(el => {
    return itemsToRemove.indexOf(el) === -1;
  });
  console.log(filtered);
};


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);