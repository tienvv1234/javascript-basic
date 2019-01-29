const add = function(a, b) {
  //console.log(arguments); // [Arguments] { '0': 11, '1': 22, '2': 33, '3': 44 }
  return arguments[0] + arguments[1]; // 33
  // note arguments only for function expression not arrow function
};

add(11, 22, 33, 44);

const car = {
  color: 'Red',
  getSummary: function() {
    return `the car is ${this.color}`; // this keyword will work in this case
  },
  getSummary1: () => {
    return `the car is ${this.color}`; // this keyword won't work in this case
  }
};

console.log(car.getSummary());
console.log(car.getSummary1());
// those are the main differences between regular functions and arrow functions, arrow function do not bind arguments,
// they don't bind to this and arrow functions come with that advanced shorthand systax
