const index = require('../index');

index.assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });