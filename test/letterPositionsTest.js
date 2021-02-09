const index = require('../index');

//index.assertArraysEqual(index.letterPositions("hello").e, [1]);
//index.assertArraysEqual(index.letterPositions("lighthouse in the house").e, [9, 16, 22]);

describe("#letterPositions", () => {
  it("returns [1] for 'hello'", () => {
    index.assert.deepEqual(index.letterPositions("hello").e, [1]);
  });
  it("returns [9, 16, 22] for 'lighthouse in the house'", () => {
    index.assert.deepEqual(index.letterPositions("lighthouse in the house").e, [9, 16, 22]);
  });
});