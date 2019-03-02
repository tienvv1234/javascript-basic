var john = {
    name: 'John',
    age: 29,
    job:'teacher',
    persentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay +', Ladies and gentlemen ! I\'m ' + this.name + " " + this.age + " " + this.job)
        }else if(style === 'friendly'){
            console.log('Hey ' + timeOfDay +', What\'s up? ! I\'m ' + this.name + " " + this.age + " " + this.job)
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

// call method because emily object have no persentation function so we need to use call method from John
// first argument will bind to this variable, and next arguments is arguments of presentation function of john
// this is called method borrowing
// and call method execute one time when it is called
john.persentation.call(emily, 'friendly', 'afternoon');

// apply method same to call method, the only one difference is argument which accepts the arguments as an array
// john.persentation.apply(emily, ['friendly', 'afternoon']) // ==> this is not gonna work, because the function persentation not 
// accepts the array

// bind method doesn't immediatly call the function, but instead it generates a copy of the function so that we can store 
// it somewhere, and the bind method will return function 

var johnFriendly = john.persentation.bind(john, 'friendly');
johnFriendly('morning')
// this actually has a name, and it's called carrying
var emilyFormal = john.persentation.bind(emily);
emilyFormal('formal', 'afternoon')

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
      arrRes.push(fn(arr[i]));
    }
    return arrRes;
  }
  
  function calculateAge(el) {
    return 2016 - el;
  }
  
  function isFullAge(limit, el) {
    return el >= limit;
  }

  var ages = arrayCalc(years, calculateAge);
  console.log(ages)
  var fullJapan = arrayCalc(arr, isFullAge.bind(this, 20));
  
  console.log(fullAge)