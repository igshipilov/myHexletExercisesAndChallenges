class Square {
  constructor(side) {
    this.side = side;
    this.area = this.constructor.area(side)
  }

  static area(num) {
    return num ** 2;
  }
};

const square1 = new Square(5);
console.log(square1.area()); // Square { side: 5, area: 25 }