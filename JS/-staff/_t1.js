// Такую функцию принято называть конструктором (хотя технически это обычная функция с контекстом)
// Конструкторы пишутся с заглавной буквы
function Company(name, website) {
  this.name = name;
  this.website = website;
  // Методы по-прежнему определены снаружи как обычные функции
  this.getName = getName;
  this.getWebsite = getWebsite;
}

// const company = new Company('Hexlet', 'https://hexlet.io');
// console.log(company.getName()); // Hexlet

// Упрощенная иллюстрация работы new внутри интерпретатора при таком вызове:
// new Company();

const obj = {};
Company.bind(obj)(name, website); // этот вызов просто наполнил this (равный obj) нужными данными
console.log(obj);
