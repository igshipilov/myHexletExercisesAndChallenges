import fs from 'fs';

/*

https://ru.hexlet.io/courses/js-asynchronous-programming/lessons/timers/exercise_unit

Реализуйте и экспортируйте по умолчанию асинхронную функцию,
которая следит за изменением файла с заданной периодичностью.
Функция должна возвращать идентификатор таймера, запущенного внутри.

Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек.
Если во время анализа файла (через fs.stat) произошла ошибка,
то нужно остановить таймер и вызвать колбек, передав туда ошибку.

Отслеживание изменений файла должно начинаться с момента вызова функции.
Параметры функции:

  • Путь до файла, который нужно отслеживать
  • Период отслеживания
  • Колбек, принимающий аргументом ошибку

import watch from './watcher.js';

const id = watch(filepath, 500, (err) => {
  console.log('Wow!');
});

setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
setTimeout(() => clearInterval(id), 5000); // остановить отслеживание через 5 секунд.

Функция должна с заданным периодом отслеживать изменения файла и вызывать колбек,
если обнаружено изменение файла. После вызова колбека, функция должна
продолжать отслеживать измения. Отслеживание останавливают сами тесты,
для этого ваша функция должна возвращать id таймера.

Подсказки

  • stats.mtimeMs — время последнего изменения
  • Date.now() — текущая дата
  • clearInterval

*/

/*

«Возвращать идентификатор таймера (id)» означает записать таймер в константу:
  const timerId = setTimeout(f, 1000);

fs.stat(filepath, (err, stats) => {...})
  Внутри `stats` будет инфа о дате последнего изменения файла, переданного в filepath.

Мы передаём fs.stat в setInterval.
fs.stat уже должна содержать в себе аргументы, поэтому используем функцию-обёртку:
  setInterval(() => fs.stat(filepath, (err, stats) => {...}), interval)

Функция watcher:
  - с помощью setInterval запускает fs.stat каждые interval
    -- Если возникла ошибка, тогда:
      1. остановить таймер с помощью clearInterval(id)
        Что такое id? По идее id = setInterval.
        Но мы не можем передать переменную внутрь себя самой.
        UPD. А, нет, можем.
      2. cb(err)
  - сравнивает stats.mtimeMs и Date.now()
    -- Если не совпало, то вызывает cb

*/

export default (filepath, interval, cb) => {
  // stats.mtimeMs возвращает время последнего изменения файла –
  // если файл был изменён, тогда это значение изменится.

  // Нам надо сравнивать текущее значение stats.mtimeMs и предыдущее.
  // Для этого предыдущее значение мы записываем в переменную: let lastCheck
  let lastCheck = Date.now();

  const checkFile = (id) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        // Останавливаем таймер, передаём в колбек ошибку, останавливаем работу функции
        clearInterval(id);
        cb(err);
        return;
      }
      // Перезаписываем последнее значение текущим
      const { mtimeMs } = stats;
      if (mtimeMs > lastCheck) {
        lastCheck = mtimeMs;
        cb(null);
      }
    });
  };

  const id = setInterval(() => checkFile(id), interval);

  return id;
};

// ============= TEACHER =====================
// export default (filepath, period, cb) => {
//   // фиксируем время последней проверки - момент запуска функции
//   let lastCheckTime = Date.now();
//   // функция проверки файла
//   const check = (timerId) => {
//     fs.stat(filepath, (err, stats) => {
//       // в случае ошибки отключаем таймер
//       // и отдаем в колбэк ошибку
//       if (err) {
//         clearInterval(timerId);
//         cb(err);
//         return;
//       }
//       // извлекаем время последней модификации файла
//       const { mtimeMs } = stats;
//       // если файл был модифицирован после запуска функции,
//       // вызываем колбэк и меняем время последней проверки
//       if (mtimeMs > lastCheckTime) {
//         cb(null);
//         lastCheckTime = mtimeMs;
//       }
//     });
//   };
//   // создаем таймер и передаем его id в функцию проверки файла
//   const timerId = setInterval(() => check(timerId), period);
//   return timerId;
// };
// ===========================================
