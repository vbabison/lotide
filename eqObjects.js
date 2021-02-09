const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;