// Prototypal Inheritance
// myPerson --> Person.prototype --> object.prototype --> null
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach(like => {
      bio += `${this.firstName} likes ${like}.`;
    });

    return bio;
  }

  setName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }

  set fullName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes = []) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  getBio() {
    return `${this.fullName} is a ${this.position}.`;
  }
}

const myPerson = new Person('Andrew', 'Mead', 27, ['Teaching']);
console.log(myPerson.getBio());

const myEmployee = new Employee('Andrew', 'Mead', 27, 'Teacher', ['Teaching']);
console.log(myEmployee.getBio());
