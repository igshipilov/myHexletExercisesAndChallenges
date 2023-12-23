// @ts-check
/* eslint-disable import/prefer-default-export */
import fsp from 'fs/promises';

// BEGIN (write your solution here)

export const reverse = (filepath) => fsp.readFile(filepath, 'utf-8')
  .then((file) => file.split('\n').reverse().join('\n'))
  .then((reversedFile) => fsp.writeFile(filepath, reversedFile, 'utf-8'));
// END
