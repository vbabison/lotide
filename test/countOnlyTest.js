const index = require('../index');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = index.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//Console Testing

//index.assertEqual(result1["Jason"], 1);
//index.assertEqual(result1["Karima"], undefined);
//index.assertEqual(result1["Fang"], 2);
//index.assertEqual(result1["Agouhanna"], undefined);

//Mocha & Chai Testing

describe("#countOnly", () => {
  it("returns 1 for 'Jason'", () => {
    index.assert.deepEqual(result1["Jason"], 1);
  });
  it("returns undefined for 'Karima'", () => {
    index.assert.deepEqual(result1["Karima"], undefined);
  });
  it("returns 2 for 'Fang'", () => {
    index.assert.deepEqual(result1["Fang"], 2);
  });
  it("returns undefined for 'Agouhanna'", () => {
    index.assert.deepEqual(result1["Agouhanna"], undefined);
  });
});