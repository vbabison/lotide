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

module.exports = flatten;