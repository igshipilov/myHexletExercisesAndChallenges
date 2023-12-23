// import fs from 'fs';
import fsp from 'fs/promises';

// const { promises: fsp } = fs;

// const promise = fs.promises.readFile('JS/-staff/_t4.js', 'utf-8');
const promise = fsp.readFile('JS/-staff/_t4.js', 'utf-8');
// Файл еще не прочитан
promise.then((content) => console.log(content));
