const tail = function(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i]);
  }
  return arr1.splice(1, arr1.length);
};
module.exports = tail;