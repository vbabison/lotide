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

const middle = function(arr) {
  let middleEle = [];
  const midOddLen = (arr.length - 1) / 2
  const midEvenLen1 = arr.length / 2 - 1
  const midEvenLen2 = arr.length / 2
  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length < 3) {
    return middleEle;
  } 
  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  else if (arr.length % 2 == 1) {
    middleEle.push(arr[midOddLen])
  } //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  else if (arr.length % 2 == 0) {
    middleEle.push(arr[midEvenLen1])
    middleEle.push(arr[midEvenLen2])
  }
  console.log(middleEle)
}

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 5, 5, 109, 2, 10, 14, 22, 1, 2]) // => [2]
//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);