/*

https://ru.hexlet.io/courses/js-asynchronous-programming/lessons/promise-all/exercise_unit

Это упражнение вы уже делали (JS/course/10-asynchronous-programming/parallel-execution),
но теперь то же самое нужно сделать с помощью промисов.


Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории (не включая поддиректории).



Пример:

import { getDirectorySize } from './file.js';

getDirectorySize('/usr/local/bin').then(console.log);


Подсказка

fsPromises.readdir - чтение содержимого директории
path.join - конструирует пути
fsPromises.stat - информация о файле
_.sumBy - нахождение суммы в массиве

*/


import fsp from 'fs/promises';
import path from 'path';
import _ from 'lodash';


export const getDirectorySize = (dirpath) => {
  // fsp.readdir создаёт промис-массив с названиями содержимого директории
  const promises = fsp.readdir(dirpath)

    // заменяем каждый элемент массива (coll) на объект fs.Stats
    .then((coll) => coll.map((element) => fsp.stat(path.join(dirpath, element))))

  // добавляем получившийся массив-промисов в Promise.all
  const promise = Promise.all(promises)

    // фильтруем массив, оставляя в нём только файлы и затем суммируем их размеры с помощью _.sumBy
    .then((arr) => _.sumBy(arr.filter((stat) => stat.isFile()), 'size'))

  return promise;
};




// export const getDirectorySize = (dirpath) => {
//   const arrPromise = fsp.readdir(dirpath);

//   arrPromise.then((coll) => coll.map((el) => fsp.stat(path.join(dirpath, el))))
//   // .then((currentPath) => fsp.stat(currentPath))
//   .then(console.log)

//   const promises = Promise.all(arrPromise);

//   // return promises.then((elem) => console.log(elem.size));
// };




// export const getDirectorySize = (dirpath) => {
//   const arrPromise = fsp.readdir(dirpath);

//   arrPromise.then((coll) => coll.map((el) => path.join(dirpath, el)))
//     .then((result) => _.sumBy(result
//       .map((element) => fsp.stat(element))
//       .then((arr) => arr.filter((stat) => stat.isFile()), 'size')))
//     .then(console.log);

// };



getDirectorySize('JS/-staff/files-for-practice');




