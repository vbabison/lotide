const findKey = function(object, callback) {
  for (const e in object) {
    if (callback(object[e])) {
      return e;
    }
  }
  return undefined;
};

module.exports = findKey;