// arrow functions lexical 'this' keyword
// arrow function do not have a this keyword
// they simply use the this keyword of the function they are written in
// so that they have a lexical this variable

// es5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    console.log(this.color);
    // this is solution for es5
    var self = this;
    // change this to self
    document.querySelector('.green').addEventListener('click', function() {
      var str =
        'This is box number' + this.position + ' and it is ' + this.color;
      alert(str); //result will undefined because the object call clickme function is this <div class="box green">I'm green!</div> the window object
    });
  }
};

// box5.clickMe();

// es6
// that with arrow functions, the actually share the surrounding this keyword
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    console.log(this.color);
    document.querySelector('.green').addEventListener('click', () => {
      // the arrow function shares the lexical this keyword in clickme function
      var str =
        'This is box number' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
};

box6.clickMe();

// const box66 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//     // this method also share the lexical this keyword from it's surroundings
//     // and surrounding of this is the golbal context, which points to the
//     // global object window
//     console.log(this.color);
//     document.querySelector('.green').addEventListener('click', () => {
//       // the arrow function shares the lexical this keyword in clickme function
//       var str =
//         'This is box number' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   }
// };

// box66.clickMe();

function Person(name) {
  this.name = name;
}

//es5
Person.prototype.myFriends = function(friends) {
  var arr;
  console.log('this.name', this.name);
  arr = friends.map(
    function(el) {
      return this.name + ' is friends with ' + el;
    }.bind(this)
  );

  console.log(arr);
};

var friends = ['Bob', 'Jane'];
new Person('John').myFriends(friends);

//es6
Person.prototype.myFriends = function(friends) {
  var arr;
  console.log('this.name', this.name);
  arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr);
};

new Person('Mike').myFriends(friends);
