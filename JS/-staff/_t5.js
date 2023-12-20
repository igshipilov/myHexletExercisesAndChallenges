import fs from 'fs';
import { map } from 'async';

// orig
// map(['JS/-staff/files-for-practice/file1.txt', 'JS/-staff/files-for-practice/file2.txt'], fs.readFile, (err1, results) => {
//   if (err1) {
//     return;
//   }
//   fs.writeFile('JS/-staff/files-for-practice/new-file', results.join(''), (err2) => {
//     if (err2) {
//       return;
//     }
//     console.log('finished!');
//   });
// });

const path1 = 'JS/-staff/files-for-practice/file1.txt';
const path2 = 'JS/-staff/files-for-practice/file2.txt';
const pathResult = 'JS/-staff/files-for-practice/resultFile.txt';

map([path1, path2], fs.readFile, (err1, results) => {
  if (err1) {
    return;
  }

  fs.writeFile(pathResult, results.join(' '), (err2) => {
    if (err2) {
      return;
    }
    console.log('success!')
  })
});
