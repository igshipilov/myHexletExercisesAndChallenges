import fsp from 'fs/promises';
import fs from 'fs';

const filepath = 'JS/-staff/files-for-practice/file1.txt';
const readedFile = fs.readFileSync(filepath, 'utf-8');

console.log(fs.statSync(filepath).size)
