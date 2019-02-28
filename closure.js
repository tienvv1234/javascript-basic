var sayHello = function(name) {
  var text = 'Hello, ' + name; // scope cha
  return function() {
    console.log(text); // có thể truy cập từ scope con.
    // ý nghĩa chính xác của closures là
    // khi đã call function đấy biến của scope cha ở đây là text
    // vẫn tồn tại ngay cả khi đã execute xong rồi
    // và call function nằm trong đó vẫn có thể lấy biến text ra
  };
};

sayHello('tien'); // no output, and no error
sayHello('tien1')(); // display Hello, tien1
const hellotien2 = sayHello('tien2');
hellotien2(); // display Hello, tien2
