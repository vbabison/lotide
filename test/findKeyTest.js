const index = require('../index');

const actual = index.findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

//Console Testing

index.assertEqual(actual, "noma");

//Mocha & Chai Testing

describe("#findKey", () => {
  it("returns 'noma' for 'noma'", () => {
    index.assert.deepEqual(actual, "noma");
  });
});