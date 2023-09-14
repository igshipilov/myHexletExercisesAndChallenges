import _ from 'lodash';
// Задача

/*

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов,
а возвращает количество емейлов, расположенных на каждом бесплатном домене.
Список бесплатных доменов хранится в константе freeEmailDomains.

Примеры
const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];

getFreeDomainsCount(emails);
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
Другие примеры смотрите в модуле с тестами.

Подсказки

При решении вам может понадобится функция get() из библиотеки lodash.
https://lodash.com/docs/4.17.15#get

*/

/*

# Алгоритм

Отобразить (map): сократить адреса до доменов, напр. gmail.com, yandex.ru (отсечь всё слева, начиная с @)
Отфильтровать (filter) emails по freeEmailDomains
Из отфильтрованного массива агрегацией (reduce) записать каждый домен

*/

// =============== MY-PHIND =============================
// const getFreeDomainsCount = (col) => {
//   return col
//     .map((domain) => domain.split('@')[1])
//     .filter((domain) => (freeEmailDomains.includes(domain) ? domain : ''))
//     .reduce((acc, domain) => {
//       if (acc[domain]) {
//         acc[domain] += 1;
//       } else {
//         acc[domain] = 1;
//       }

//       return acc;
//     }, {});
// };
// ======================================================

// Я себе объясняю решение учителя
/*

1.Спред-оператор распаковывает объект внутри объекта.
«Распаковывает» означает вытаскивает из себя всё содержимое: ключи и их значения.

2. Когда мы в один объект помещаем другой объект, то одинаковые ключи объединяются,
при этом приоритет у ключа справа – правые ключи заменяют собой левые.

Обе идеи можно выразить таким примером:

const first = { name: 'foo', age: 42 };
const second = { name: 'bar', age: 0, anotherKey: 'test', ...first };

console.log(second); // { name: 'foo', age: 42, anotherKey: 'test' }

Поэтому в решении учителя `...acc` стоит слева – он хранит в себе накопленный результат,
а `[domain]: count` стоит справа — записывает новый результат, в том числе перезаписывает его при совпадении ключа:
return { ...acc, [domain]: count };

ведь .reduce() поочереди итерирует каждое значение из входного массива, а результат заносит в acc.
Вот этот acc из каждой прошлой итерации мы вписываем в возвращаемый объект.

Справа от него, через запятую мы вписываем [ключ]: текущее значение, в виде: [domain]: count.
Квадратные скобки нужны, чтобы [domain] подменился текущим итерируемым элементом:
  Если я напишу `domain: count`, то получу `domain: 3`,
  Если я напишу `[domain]: count`, то получу `gmail.com: 3`.

Почему справа? Чтобы перезаписать старое значение acc, если вдруг ключ совпадёт.

*/

// =============== MY-SEMI-TEACHERS =============================

// const getFreeDomainsCount = (col) => {
//   return col
//   .map((domain) => domain.split('@')[1])
//   .filter((domain) => freeEmailDomains.includes(domain) ? domain : '')
//   .reduce((acc, domain) => {
//     // >> teacher
//     // На каждом шаге .reduce() должен возвращать новый аккумулятор.
//     // Поэтому здесь спред оператор `...acc` копирует с предыдущего шага `acc` и распаковывает его в объект-вывод
//     const count = _.get(acc, domain, 0) + 1; return { ...acc, [domain]: count }; }, {});
// };
// ==============================================================

const getFreeDomainsCount = (col) => col
  .map((domain) => domain.split('@')[1])
  .filter((domain) => (freeEmailDomains.includes(domain) ? domain : ''))
  .reduce((acc, domain) => {
    const count = _.get(acc, domain, 0) + 1;
    // const current = domain;

    return { ...acc, [domain]: count };
  }, {});

// =============== TEACHER ======================================

// ==============================================================

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

console.log(getFreeDomainsCount(emails));
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
