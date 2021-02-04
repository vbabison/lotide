const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let fakeValue = true;
  arr1.forEach((e1) => arr2.forEach((e2) =>{
    if (e1 === e2) {
      fakeValue = true;
    } else {
      fakeValue = false;
    }
  }
  ));
  return fakeValue;
};

const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const element of obj1) {
    if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
      return eqArrays(object1[element], object2[element]);
    } else if (object1[element] === object2[element]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false