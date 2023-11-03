// const obj = {
//   name: 'Karl',

//   // НЕ РАБОТАЕТ
//   callback() {
//     this.name = this.name.split('').reverse().join('');
//   }

//   // РАБОТАЕТ
//   // callback() {
//   //   return this.name.split('').reverse().join('');
//   // }
// };

const obj = {
  name: 'Karl',
  getName() { return this.name; },
  // getName: this.name,
};

console.log(obj.getName());
