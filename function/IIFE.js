// Immediately invoked function expression(IIFE)
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})(
  // console.log score is undefined

  function(test) {
    var score = Math.random() * 10;
    console.log(score >= 5);
    console.log(test);
  }
)('test');
