import fsp from 'fs/promises';

const p = Promise.resolve([1, 2, 3]);

p.then((arr) => arr.map((num) => num + 1))
  .then(console.log);
