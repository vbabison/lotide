const index = require('../index');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = index.map(words, word => word[0]);
console.log(results1);

//Console Testing

//results1 comparison
//index.assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
//map comparison with default parameter
//index.assertArraysEqual(index.map(words), [ 'g', 'c', 't', 'm', 't' ]);
//map comparison
//index.assertArraysEqual(index.map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);

//Mocha & Chai Testing

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    index.assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    index.assert.deepEqual(index.map(words), [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns [ 'g', 'c', 't', 'm', 't' ] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    index.assert.deepEqual(index.map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
});