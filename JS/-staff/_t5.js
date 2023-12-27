import fsp from 'fs/promises';
import path from 'path';
import _ from 'lodash';



// export const getDirectorySize = (dirpath) => {
//   const arrPromise = fsp.readdir(dirpath);

//   arrPromise.then((coll) => coll.map((el) => fsp.stat(path.join(dirpath, el))))
//   // .then((currentPath) => fsp.stat(currentPath))
//   .then(console.log)

//   const promises = Promise.all(arrPromise);

//   // return promises.then((elem) => console.log(elem.size));
// };

export const getDirectorySize = (dirpath) => {
  const arrPromise = fsp.readdir(dirpath);

  arrPromise.then((coll) => coll.map((el) => path.join(dirpath, el)))
    .then((result) => _.sumBy(result
      .map((element) => fsp.stat(element))
      .then((arr) => arr.filter((stat) => stat.isFile()), 'size')))
    .then(console.log);

};

getDirectorySize('JS/-staff/files-for-practice');