const findKeyByValue = function(object, value) {
  let keys = "";
  for (const element in object) {
    if (object[element] === value) {
      keys = element;
      break;
    } else {
      keys = undefined;
    }
  }
  return keys;
};

module.exports = findKeyByValue;