const myURL = new URL('https://example.com/?name=Jonathan&age=18');

let params = new URLSearchParams(myURL);
let tname = params.get("name"); // is the string "Jonathan"
let tage = parseInt(params.get("age"), 10); // is the number 18

console.log(myURL);
console.log();

console.log(tname);
console.log();

console.log(tage);
console.log();
