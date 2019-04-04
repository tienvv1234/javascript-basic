//Classes

//es6
class Person6 {
  constructor(name) {
    this.name = name;
  }

  displayName() {
    console.log(this.name);
  }

  //static method
  //are methods that are simply attached to the class but not inherited by the class
  // instances

  static greeting() {
    console.log('Hey there!');
  }

  // the class definition are not hoisted
  // we can only add methods to classes
}

const john6 = new Person6('john');
john6.displayName();
Person6.greeting();
