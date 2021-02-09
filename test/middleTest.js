const index = require('../index');

//Console Testing
/*
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 5, 5, 109, 2, 10, 14, 22, 1, 2]); // => [2]
*/

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    index.assert.deepEqual(index.middle([1, 2, 3], [2]));
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    index.assert.deepEqual(index.middle([1, 2, 3, 4, 5], [3]));
  });
  it("returns [2, 3] for [[1, 2, 3, 4]", () => {
    index.assert.deepEqual(index.middle([1, 2, 3, 4], [2, 3]));
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    index.assert.deepEqual(index.middle([1, 2, 3, 4, 5, 6], [3, 4]));
  });
  it("returns [2] for [1, 2, 5, 5, 109, 2, 10, 14, 22, 1, 2]", () => {
    index.assert.deepEqual(index.middle([1, 2, 5, 5, 109, 2, 10, 14, 22, 1, 2], [2]));
  });
});