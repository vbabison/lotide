const index = require('../index');

const result = index.tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    index.assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("returns '3' for 3", () => {
    index.assert.strictEqual(words.length, 3);
  });
});