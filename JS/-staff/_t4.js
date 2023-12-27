import fsp from 'fs/promises';

fsp.readdir('JS/-staff/files-for-practice')
  .then((data) => fsp.stat(`JS/-staff/files-for-practice/`))
  .then((res) => console.log(res))
  // .then((data) => console.log(data[0]))
