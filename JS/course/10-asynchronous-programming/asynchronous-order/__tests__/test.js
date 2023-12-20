import { compareFileSizes } from '../info.js';

test('compareFileSizes 1', () => {
  const filepath = '__tests__/test.js';
  return new Promise((resolve) => {
    compareFileSizes(filepath, filepath, (_error1, result) => {
      expect(result).toBe(0);
      resolve(0);
    });
  });
});

test('compareFileSizes 2', () => {
  const filepath1 = '__tests__/test.js';
  const filepath2 = 'Makefile';
  return new Promise((resolve) => {
    compareFileSizes(filepath1, filepath2, (_error1, result) => {
      expect(result).toBe(1);
      resolve();
    });
  });
});

test('compareFileSizes 3', () => {
  const filepath1 = 'Makefile';
  const filepath2 = '__tests__/test.js';
  return new Promise((resolve) => {
    compareFileSizes(filepath1, filepath2, (_error1, result) => {
      expect(result).toBe(-1);
      resolve();
    });
  });
});
