const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1)
  const obj2 = Object.keys(object2)
  
  if (obj1.length != obj2.length) {
    return false
  }
  for (const element of obj1) {
    if (Array.isArray(object1[element]) &&Array.isArray(object2[element])) {
      return eqArrays(object1[element], object2[element])
    } else if (object1[element] === object2[element]){
      continue
    } else {
      return false
    }
  }
  return true
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })