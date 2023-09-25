// import url from 'node:url';

const myURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL);

console.log();
console.log(myURL.toString())
// console.log(JSON.stringify(myUrl, null, '  '));