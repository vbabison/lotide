const takeUntil = function(array, callback) {
  let arr = [];
  for (const e of array) {
    if (!callback(e)) {
      arr.push(e);
    } else {
      return arr;
    }
  }
};

module.exports = takeUntil;