 // Prototypal Inheritance
 

 const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age;
    this.likes = likes;
}

// here we are using a regular function and we are not using an error function
// because inside of our methods we also have access to this which means that we can pull out 
// the individual pieces of information that we actually need
Person.prototype.getBio = function (){
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach((like) =>{
        bio += `${this.firstName} likes ${like}.`;
    })
    return bio;
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
};

const me = new Person('Andrew', 'Mead', 27, ['Teching', 'Biking'])
me.setName('sdfsd sdfsd')
const person2 = new Person('tien', 'vu', 40)
console.log(person2.getBio())