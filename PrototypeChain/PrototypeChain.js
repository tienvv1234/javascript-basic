// var john = {
//   name: 'John',
//   yearOfBirth: 1991,
//   job: 'teacher'
// }

// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function() {
//   console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1991, 'teacher');
// var john1 = new Person('John1', 1992, 'teacher1');
// var john2 = new Person('John2', 1993, 'teacher2');

// john.calculateAge();
// john1.calculateAge();
// john2.calculateAge();

// console.log(john.lastName)

// Object.create
var personProto = {
  calculateAge: function() {
    console.log(2016);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teach';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { yearOfBirth: 1991 },
  job: { job: 'designer' }
});

// The difference between Object.create and the function constructor pattern is
// that Object.create builds an object that inherits directly from the one that
// we passed into the first argument, While, on the other hand, the function
// constructor the newly created object inherits from the constructor's prototype
// property
