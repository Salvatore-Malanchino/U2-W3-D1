class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
    this.x = 10;
    this.y = 5;
  }
}

const NewUser1 = new User('Mario', 'Rossi', 23, 'Italy');
const NewUser2 = new User('Barack', 'Obama', 62, 'USA');
