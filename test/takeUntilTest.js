const index = require('../index');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = index.takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = index.takeUntil(data2, x => x === ',');
console.log(results2);
/*
Expected Output
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

//Console Testing

//console.log("Running Tests")
//console.log("-------------")

//index.assertArraysEqual(results1, [1, 2, 5, 7, 2]);
//index.assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

//Mocha & Chai Testing

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    index.assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it("returns ['I've', 'been', 'to', 'Hollywood'] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
    index.assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
});