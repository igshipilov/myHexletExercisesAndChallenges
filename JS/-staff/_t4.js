class Money {
  constructor(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }

  exchangeTo(newCurrency) {
    if (this.currency === newCurrency) {
      return new Money(this.value, this.currency);
    }
    // this.constructor.rates находится в функции-конструкторе
    const newValue = this.value * this.constructor.rates[this.currency][newCurrency];
    return new Money(newValue, newCurrency);
  };

  // Определение статического свойства
  static rates = {
    usd: {
      eur: 0.7,
    },
    eur: {
      usd: 1.2,
    },
  };

  // Определение статического метода
  static setRate(from, to, value) {
    this.rates[from][to] = value;
  }
};
const test = new Money(5);
console.log(test);
console.log(`\n\n`);

console.log(Money.rates.usd.eur); // 0.7
const money1 = new Money(100, 'eur');
console.log(money1);
console.log(`\n\n`);

Money.setRate('usd', 'eur', 0.8);
console.log(Money.rates.usd.eur); // 0.8
const money2 = money1.exchangeTo('usd');
console.log(money2);
console.log(`\n\n`);



