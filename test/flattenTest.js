const index = require('../index');

const flat = index.flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

//Console Testing

//index.assertArraysEqual(flat, [1, 2, 3, 4, 5, 6]);

//Mocha & Chai Testing

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    index.assert.deepEqual(flat, [1, 2, 3, 4, 5, 6]);
  });
});