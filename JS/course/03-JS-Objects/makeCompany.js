// Описание задачи
/*

https://ru.hexlet.io/courses/js-objects/lessons/spread-operator/exercise_unit

Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его. Для создания компании обязательно только одно свойство – имя компании. Остальные свойства добавляются только если они есть. Параметры:

Имя (обязательно)
Объект с дополнительными свойствами (если они есть)
Также, кроме имени, у компаний есть два свойства со значениями по умолчанию. Если значение этих свойств не передано при создании, то они принимают следующие значения:

state – moderating
createdAt – текущая дата (в формате Unix-времени. Это число - количество миллисекунд, прошедших с полуночи 1 января 1970 года)
import make from '../company.js';

// Дополнительные свойства не переданы
const company = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

// Передаем дополнительные свойства
const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }
Используйте спред-оператор для слияния данных внутри и возврата нового объекта.

Подсказки
Для получения текущей даты в формате Unix-времени используйте метод Date.now()

*/

// const make = (name, properties) => {
//   let result = {};
//   result = {
//     name,
//     state: 'moderating',
//     createdAt: Date.now(),
//     ...properties,
//   };

//   return result;
// };

// =============== TEACHER ====================
const make = (name, properties = {}) => {
  const defaultProperties = {
    state: 'moderating',
    createdAt: Date.now(),
  };

  return { name, ...defaultProperties, ...properties };
};
// ============================================

// Дополнительные свойства не переданы
const company1 = make('Hexlet');
console.log(company1);
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

// Передаем дополнительные свойства
const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
console.log(company2);
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }
