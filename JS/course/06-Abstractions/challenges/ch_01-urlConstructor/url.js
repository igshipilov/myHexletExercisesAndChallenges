/*
https://ru.hexlet.io/challenges/js_data_abstraction_url_exercise/instance

url.js
Реализуйте абстракцию для работы с урлами. Она должна извлекать и менять части адреса. Интерфейс:

make(url) - Конструктор. Создает урл.

setProtocol(data, protocol) - Сеттер. Меняет схему.

getProtocol(data) - Селектор (геттер). Извлекает схему.

setHost(data, host) - Сеттер. Меняет хост.

getHost(data) - Геттер. Извлекает хост.

setPath(data, path) - Сеттер. Меняет строку запроса.

getPath(data) - Геттер. Извлекает строку запроса.

setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.

getQueryParam(data, paramName, default = null) - Геттер. Извлекает значение для параметра запроса.
Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда, когда в запросе не было такого параметра

toString(data) - Геттер. Преобразует урл в строковой вид.

const url = make('https://hexlet.io/community?q=low');

setProtocol(url, 'http:');
toString(url); // 'http://hexlet.io/community?q=low'

setPath(url, '/404');
toString(url); // 'http://hexlet.io/404?q=low'

setQueryParam(url, 'page', 5);
toString(url); // 'http://hexlet.io/404?q=low&page=5'

setQueryParam(url, 'q', 'high');
toString(url); // 'http://hexlet.io/404?q=high&page=5'

Подсказки
Используйте стандартный объект URL для работы с адресами: URL
Методы set() и get()

*/

// ============== MY-TEACHER ========================
const make = (stringURL) => new URL(stringURL);

const getProtocol = (data) => data.protocol;
const getHost = (data) => data.host;
const getPath = (data) => data.pathname;

const setProtocol = (data, protocol) => {
  data.protocol = protocol;
};

const setHost = (data, host) => {
  data.hostname = host;
};

const setPath = (data, path) => {
  data.pathname = path;
};

const getQueryParam = (data, paramName, defaultValue = null) => (
  data.searchParams.get(paramName) || defaultValue
);

const setQueryParam = (data, key, value) => {
  data.searchParams.set(key, value);
};

const toString = (url) => url.toString();
// =======================================================

// -------- tests ------------------------------------
const url = make('https://hexlet.io/community?q=low&user=guest');
// console.log(url);
// console.log();

// const params = new URLSearchParams(url.search);
// const result = params.get('user')
// console.log(result)

// const param = new URLSearchParams(url.origin)
// console.log(param);
// console.log();

// console.log(getQueryParam(url, 'low', 'user'));

// setProtocol(url, 'http:');
// console.log(toString(url)); // 'http://hexlet.io/community?q=low'
// console.log();

// setPath(url, '/404');
// console.log(toString(url)); // 'http://hexlet.io/404?q=low'
// console.log();

// setQueryParam(url, 'page', 5);
// console.log(toString(url)); // 'http://hexlet.io/404?q=low&page=5'
// console.log();

// setQueryParam(url, 'q', 'high');
// console.log(toString(url)); // 'http://hexlet.io/404?q=high&page=5'

// ----------------------------------------

export {
  make,
  getProtocol,
  getHost,
  getPath,
  setProtocol,
  setHost,
  setPath,
  getQueryParam,
  setQueryParam,
  toString,
};
