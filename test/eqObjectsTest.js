const index = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
//Console Testing

console.log(index.eqObjects(ab, ba)); // => true
console.log(index.eqObjects(ab, abc)); // => false
console.log(index.eqObjects(cd, dc)); // => true
index.assertEqual(index.eqObjects(cd, dc), true); // => true
index.assertEqual(index.eqObjects(cd, cd2), false); // => false

//Stretch
/*
console.log(index.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(index.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(index.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
*/
//Mocha & Chai Testing

/*
describe("#eqObjects", () => {
  it("returns true for (ab, ba)", () => {
    index.assert.strictEqual(index.eqObjects(ab, ba), true);
  });
  it("returns false for (ab, abc)", () => {
    index.assert.strictEqual(index.eqObjects(ab, abc), false);
  });
  it("returns true for (cd, dc)", () => {
    index.assert.strictEqual(index.eqObjects(cd, dc), true);
  });
  it("returns false for (cd, cd2)", () => {
    index.assert.strictEqual(index.eqObjects(cd, cd2), false);
  });
});
*/