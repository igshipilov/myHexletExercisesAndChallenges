/*

https://ru.hexlet.io/courses/js-asynchronous-programming/lessons/error-handling/exercise_unit

Реализуйте и экспортируйте функцию move, которая асинхронно перемещает файл из одного места в другое. Ее параметры:

Путь до файла исходника
Путь по которому нужно копировать файл
Колбек, у которого единственный аргумент — ошибка.
Алгоритм работы функции следующий:

Читаем исходный файл
Создаём новый файл и записываем туда данные исходного файла (это важно сделать до попытки удаления исходного файла!)
Удаляем исходный файл
Реальная функция move устроена не так. Если исходник и приемник находятся на одном устройстве, то копирования не происходит, меняются лишь указатели в фс

import { move } from './file.js';

move('/opt/myfile', '/tmp/newfile', (error) => {
  if (error) {
    console.log('oops');
    return;
  }
  console.log('yes!');
});

Другие примеры смотрите в тестах

Подсказки
  fs.unlink - удаление файла
  fs.readFile - чтение файла
  fs.writeFile - запись в файл

*/

/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const move = (oldFile, newFile, cb) => {
  fs.readFile(oldFile, 'utf-8', (errorRead, data) => {
    if (errorRead) {
      cb(errorRead);
      return;
    }
    fs.writeFile(newFile, data, 'utf-8', (errorWrite) => {
      if (errorWrite) {
        cb(errorWrite);
        return;
      }
      fs.unlink(oldFile, cb);
    });
  });
};
// END
