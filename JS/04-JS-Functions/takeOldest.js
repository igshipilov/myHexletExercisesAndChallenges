import _ from 'lodash';
// Задача
/*

Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых.
Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице.
Экспортируйте данную функцию по умолчанию.

Пример использования
const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

takeOldest(users);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];
Другие примеры смотрите в модуле с тестами.

Подсказки

Для преобразования дат в единое представление — unixtimestamp — используйте метод Date.parse()
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/parse

В рамках данного упражнения, для записи дат используется только формат RFC2822.

sortBy
https://lodash.com/docs/4.17.15#sortBy

Подумайте, что из себя представляет данная функция: команду или запрос?

*/

/*

# Логика

== Общее ==
Выстроить всех в порядке возрастания (наименьшее число = старший)
Возвращать коллекцию с элементами от 1 до quantity (второй аргумент функции takeOldest())

== Подробнее ==
Перевести все значения ключей birthday в миллисекунды с помощью Date.parse()
Создать новый Объект, перезаписав в нём birthday полученными значениями
Отсортировать этот объект с помощью _.sortBy()
Создать ещё один объект на основе отсортированного, конвертировав миллисекунды обратно в даты

А как возвращать нужное количество элементов из объекта?
Может быть, вызывать надо подмассивы, а затем превращать их в объект прямо во время вызова?

*/

// Функция sortBy принимает вторым параметром или массив или функцию.
// В нашем случае, это функция ({ birthday }) => Date.parse(birthday).
// В первом случае birthday в фигурных скобках, т.к. это дуструктуризация объекта.
// Т.е. из очередного элемента массива users { name: 'Tirion', birthday: 'Nov 19, 1988' }
// функция "берет" только birthday и помещает значение в переменную birthday.
// А во втором случае мы используем круглые скобки, т.к. мы передаем эту переменную в функцию parse

const takeOldest = (col, quantity = 1) => {
  const sorted = _.sortBy(col, ({ birthday }) => Date.parse(birthday));
  const result = sorted.slice(0, quantity);

  return result;
};

const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(takeOldest(users));

// export default takeOldest();

// console.log(takeOldest(users));
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];
