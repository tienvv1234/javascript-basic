var sayHello = function (name) {
    var text = 'Hello, ' + name;  // scope cha
    return function () {
      console.log(text);  // có thể truy cập từ scope con.
    };
  };

sayHello('tien')// no output, and no error
sayHello('tien1')()// display Hello, tien1
const hellotien2 = sayHello('tien2');
hellotien2() // display Hello, tien2

