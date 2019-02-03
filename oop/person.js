 // Prototypal Inheritance
 

 const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

// here we are using a regular function and we are not using an error function
// because inside of our methods we also have access to this which means that we can pull out 
// the individual pieces of information that we actually need
Person.prototype.getBio = function (){
    return `${this.firstName} is ${this.age}.`;
}

Person.prototype.location = 'Thailand';

const me = new Person('Andrew', 'Mead', 27)
console.log(me.location)
const person2 = new Person('tien', 'vu', 40)
console.log(person2.getBio())