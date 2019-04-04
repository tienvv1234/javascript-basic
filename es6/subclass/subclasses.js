//es 5
// var Person5 = function(name) {
//   this.name = name;
// };

// Person5.prototype.displayName = function() {
//   console.log(this.name);
// };

// var Athlete5 = function(name, olymicGames, medals) {
//   Person5.call(this, name); // same like call super
//   this.olymicGames = olymicGames;
//   this.medals = medals;
// };

// Athlete5.prototype = Object.create(Person5.prototype);
// // note that this function need write after the object.create
// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// };

// var person = new Person5('tien');

// var johnAthlete5 = new Athlete5('john', 3, 10);
// johnAthlete5.wonMedal();

//es 6
class Person6 {
  constructor(name) {
    this.name = name;
  }

  displayName() {
    console.log(this.name);
  }
}

class Athlete6 extends Person6 {
  constructor(name, olymicGames, medals) {
    super(name);
    this.olymicGames = olymicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('john', 3, 10);
johnAthlete6.displayName();
johnAthlete6.wonMedal();
