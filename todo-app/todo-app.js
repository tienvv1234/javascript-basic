// const p = document.querySelectorAll('p');

// p.forEach(function(element) {
//   if (element.textContent.includes('the')) {
//     element.remove();
//   }
// });


const Person = function(name) {
  this.name = name
};

// here we are using a regular function and we are not using an error function
// because inside of our methods we also have access to this which means that we can pull out
// the individual pieces of information that we actually need
Person.prototype.displayName = function() {
  console.log(this.name);
};

var tien = new Person('tien');
