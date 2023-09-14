/*

Функция получает ссылку
Из неё:
  • в ключ name записывает домен 1-го и 2-го уровня
  • в ключ scheme записывает протокол (http или https)
  • не записывает символы ":" и "/"

*/

const getDomainInfo = (weblink) => {
  const weblinkSeparated = weblink.split(':');
  // console.log(`>> weblink.split(':')`);
  // console.log(weblinkSeparated);

  let [scheme, name] = weblinkSeparated;
  // console.log('!! scheme:');
  // console.log(scheme);

  if (!scheme.startsWith('http')) {
    name = scheme;
    scheme = 'http';
  } else {
    name = name.replace('//', '');
  }

  const resultObj = { scheme, name };

  return resultObj;
};

console.log(getDomainInfo('yandex.ru'));
console.log();

console.log(getDomainInfo('https://hexlet.io'));
console.log();

console.log(getDomainInfo('http://google.com'));

// =============== TEACHER ====================

// const getDomainInfo = (domain) => {
//   let scheme = '';

//   if (domain.startsWith('https')) {
//     scheme = 'https';
//   } else {
//     scheme = 'http';
//   }

//   let name = domain.replace(`${scheme}://`, '');

//   return { scheme, name };

// };

// ============================================
