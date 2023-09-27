// Задача
/*

*/

/*

# Алгоритм

В общем, надо вернуть всё что идёт между  `X_FORWARDED_` и ближайшей запятой

Функция принимает строку
В этой строке находит и возвращает
  - все строки, начинающиеся с environment
  - в этих строках находит всё от `X_FORWARDED_` до ближайшей запятой
и возвращает эту строку без текста `X_FORWARDED_`

Алгоритм
Разбиваем входную строку на массив через str.split(',')
Фильтруем каждый элемент массива по наличию в нём `X_FORWARDED_`
Мэпим этот же элемент, но теперь без `X_FORWARDED_` -- используем slice()?
Результирующий массив объединяем с помощью arr.join(',')

*/

// ============= MY =====================

// ------- V1 -----------------------
// const getForwardedVariables = (str) => {
//   const arr = str.split('\n');
//   // console.log(arr);

//   const hasEnv = arr.filter((str) => str.includes('environment'));
//   // console.log(hasEnv);

//   const hasForward = hasEnv.filter((el) => el.includes('X_FORWARDED_'));
//   // console.log(hasForward);

//   const clean = hasForward.map((el) => el.replaceAll('"', ''));
//   // console.log(clean);

//   const join = clean.join();
//   // console.log(join);

//   const commas = join.split(',');
//   // console.log(commas)

//   const forwarded = commas.filter((el) => el.includes('X_FORWARDED_'));
//   // console.log(forwarded);

//   // console.log();

//   const result = forwarded.map((el) => el.split('X_FORWARDED_')[1]);
//   // console.log(result);

//   return result.join(',');
// }
// ----------------------------------

// ------- V1 -----------------------
// const getForwardedVariables = (str) => str
//   .split('\n')
//   .filter((el) => el.includes('environment') && el.includes('X_FORWARDED_'))
//   .map((el) => el.replaceAll('"', ''))
//   .join()
//   .split(',')
//   .filter((el) => el.includes('X_FORWARDED_'))
//   .map((el) => el.split('X_FORWARDED_')[1])
//   .join(',');

// export default getForwardedVariables;
// END

// ----------------------------------

// ------- MY-TEACHER----------------

const getForwardedVariables = (config) => {
  const lines = config.split('\n');
  return lines
    .filter((line) => line.startsWith('environment='))
    .map((line) => line.replaceAll('environment=', ''))
    .map((line) => line.replaceAll('"', ''))
    .flatMap((line) => line.split(','))
    .filter((kv) => kv.startsWith('X_FORWARDED_'))
    .map((kv) => kv.replaceAll('X_FORWARDED_', ''))
    .join(',');
};

// ----------------------------------

// ======================================

// ============= TEACHER =====================
// const getForwardedVariables = (config) => {
//   const lines = config.split('\n');
//   return lines
//     .filter((line) => line.startsWith('environment='))
//     .map((line) => line.replaceAll('environment=', ''))
//     .map((line) => line.replaceAll('"', ''))
//     .flatMap((line) => line.split(','))
//     .filter((kv) => kv.startsWith('X_FORWARDED_'))
//     .map((kv) => kv.replace('X_FORWARDED_', ''))
//     .join(',');
// };
// ===========================================
const str = `
[foo:bar]
environment="X_FORWARDED_var1=111"

[bar:baz]
environment="key2=true,X_FORWARDED_var2=123"
command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make prepare'

[baz:foo]
key3="value3"
command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make prepare'

[program:prepare]
environment="key5=value5,X_FORWARDED_var3=value,key6=value6"

[program:start]
environment="pwd=/temp,user=tirion"

[program:options]
environment="X_FORWARDED_mail=tirion@google.com,X_FORWARDED_HOME=/home/tirion,language=en"
command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make environment'

[empty]
command="X_FORWARDED_HOME=/ cd ~"
`;

console.log('>> INITIAL STRING:');
console.log(str);
console.log('================');
console.log();
console.log('>> RESULT:');
console.log(getForwardedVariables(str));

export default getForwardedVariables;

// -------- TESTS bckp -------------
// // @ts-check
// /* eslint-disable @typescript-eslint/naming-convention */

// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// import getForwardedVariables from '../getForwardedVariables.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // возвращают строку
// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
// // const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
// const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

// // test logs
// // console.log('>> getFixturePath:');
// // console.log(getFixturePath('s1.conf'));
// // console.log();

// // console.log('>> readFixture: ');
// // console.log(readFixture('s1.conf'));
// // console.log();
// //

// const data = [
//   ['s1.conf', 'variable=value'],
//   ['s2.conf', 'var1=111,var2=123,var3=value,mail=tirion@google.com,HOME=/home/tirion'],
// ];

// describe('getForwardedVariables', () => {
//   test.each(data)('with %s', (filename, expected) => {
//     const config = readFixture(filename);
//     expect(getForwardedVariables(config)).toEqual(expected);
//   });
// });

// ----------------------------------
