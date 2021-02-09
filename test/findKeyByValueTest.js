const index = require('../index');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//Console Testing

//index.assertEqual(index.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//index.assertEqual(index.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

//Mocha & Chai Testing

describe("#findKeyByValue", () => {
  it("returns 'drama' for 'The Wire'", () => {
    index.assert.deepEqual(index.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for 'That '70s Show'", () => {
    index.assert.deepEqual(index.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});