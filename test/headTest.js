const index = require('../index');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    index.assert.strictEqual(index.head([5, 6, 7]), 5);
  });
  it("returns 'undefined' for ['5']", () => {
    index.assert.strictEqual(index.head([]), '5');
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    index.assert.strictEqual(index.head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
});