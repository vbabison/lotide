const index = require('../index');
/*Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
*/

console.log(index.eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(index.eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(index.eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(index.eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
index.assertEqual(index.eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


//Stretch

/*
index.assertEqual(index.eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
index.assertEqual(index.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]), false) // => false
index.assertEqual(index.eqArrays([[2, 3], [4]], [[2, 3], 4]), false )// => false
*/

