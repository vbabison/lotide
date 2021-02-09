const index = require('../index');

//Console Testing

//index.assertEqual(index.countLetters("LHL"), { L: 2, H: 1 });
//index.assertEqual(index.countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });

//Mocha & Chai Testing

describe("#countLetters", () => {
  it("returns { L: 2, H: 1 } for 'LHL'", () => {
    index.assert.deepEqual(index.countLetters("LHL"), { L: 2, H: 1 });
  });
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    index.assert.deepEqual(index.countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
});