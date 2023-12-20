// @ts-check
/* eslint-disable import/prefer-default-export */

/*

Реализуйте и экспортируйте асинхронную функцию getDirectorySize(),
которая считает размер переданной директории, не включая поддиректории.
Анализ размера файла должен происходить параллельно, для этого воспользуйтесь библиотекой async.


Примеры

import { getDirectorySize } from './info.js';

getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});


Подсказки
  fs.readdir() - чтение содержимого директории, возвращает файлы и папки в директории
  path.join() - конструирует пути
  async.map()
  fs.stat() - информация о файле. В получаемом объекте содержится метод isFile() для проверки является ли элемент файлом
  _.sumBy() - нахождение суммы в массиве
  колбек должен вызываться и в случае ошибки

*/


import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN (write your solution here)

// END
