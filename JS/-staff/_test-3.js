let url = new URL("https://example.com?foo=1&bar=2");
console.log(url);
console.log();

console.log(url.search);
console.log();

let params = new URLSearchParams(url.search);
console.log(params);
console.log();

params.set('foo', 'testONE');
console.log(params);
console.log();

let one = params.get('foo');
let two = params.get('bar');
console.log(one);
console.log(two);
console.log();

// params.set('test', 'abxcg')
// console.log(params);
// console.log(params.toString());
// console.log();

// url.search = params;
// console.log(url);
// console.log();

// // Add a third parameter.
// params.set("baz", 3);
// console.log(params.toString()); // "foo=1&bar=2&baz=3"
// console.log();
// console.log(url);
