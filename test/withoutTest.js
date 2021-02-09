const index = require('../index');

const words = ["hello", "world", "lighthouse"];

index.without([1, 2, 3], [1]); // => [2, 3]
index.without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
index.without(words, ["lighthouse"]);
index.assertArraysEqual(words, ["hello", "world", "lighthouse"]);
//Make sure the original array was not altered by the without function