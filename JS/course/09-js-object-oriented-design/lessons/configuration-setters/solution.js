class FullName {
  constructor(name, surname, patronymic) {
    this.name = name;
    this.surname = surname;
    this.patronymic = patronymic;
  }

  getFullName() {
    return `${this.surname}${this.name}${this.patronymic}`;
  }
}

class Address {
  constructor(street, house, index) {
    this.street = street;
    this.house = house;
    this.index = index;
  }

  getFullAddress() {
    return `${this.street}${this.house}${this.index}`;
  }

  getStreet() {
    return this.street;
  }
}

class User {
  constructor(name, surname, patronymic, street, house, index) {
    this.name = name;
    this.surname = surname;
    this.patronymic = patronymic;
    this.address = address;
  }

  getUserName() {
    return new FullName(this.surname, this.name, this.patronymic);
  }

  getAddress() {
    return new Address(this.street, this.house, this.index);
  }
}
