const middle = function(arr) {
  let middleEle = [];
  const midOddLen = (arr.length - 1) / 2;
  const midEvenLen1 = arr.length / 2 - 1;
  const midEvenLen2 = arr.length / 2;
  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (arr.length < 3) {
    return middleEle;
  } else if (arr.length % 2 === 1) {
    //For arrays with odd number of elements, an array containing a single middle element should be returned.
    middleEle.push(arr[midOddLen]);
  } else if (arr.length % 2 === 0) {
    //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    middleEle.push(arr[midEvenLen1]);
    middleEle.push(arr[midEvenLen2]);
  }
  console.log(middleEle);
};

module.exports = middle;