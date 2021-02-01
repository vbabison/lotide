const tail = function(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i]);
  }
  return arr1.splice(1, arr1.length);
};

const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(words.length);
assertEqual(words.length, 3);

/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual(1, 3);
assertEqual('Hello', "Hello");
*/