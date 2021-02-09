
const eqArrays = function(arr1, arr2) {
  let fakeValue = true;
  arr1.forEach((e1) => arr2.forEach((e2) => {
    if (Array.isArray(e1) && Array.isArray(e2)) {
      eqArrays(e1, e2);
    } else if (e1 === e2) {
      fakeValue = true;
    } else {
      fakeValue = false;
    }
  }));
  return fakeValue;
  /*
  let fakeValue = true;
  for (const ele in )
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      fakeValue = true;
    } else {
      fakeValue = false;
    }
  }
  return fakeValue;
  */
};

module.exports = eqArrays;