//Rest Parameters

//es5
// function isFullAge5() {
//   // arguments is object not is array
//   console.log('arguments', arguments);
//   var argsArry = Array.prototype.slice.call(arguments);
//   argsArry.forEach(function(cur) {
//     console.log(2016 - cur >= 18);
//   });
// }

// //isFullAge5(1990, 1999, 1965);

// //es6
// function isFullAge6(...years) {}

// isFullAge6(1990, 1999, 1965);

// the difference between spread and rest paramaters is
// the spread is used in the function call  sum(...numbers) and while the rest
// operator is used in the function declaration

//

//es5
function isFullAge5(limit) {
  // arguments is object not is array
  console.log('limit', limit); // 1990
  console.log('arguments', arguments); ///1990, 1999, 1965
  var argsArry = Array.prototype.slice.call(arguments, 1); // 1999, 1965
  console.log('argsArry', argsArry);
  // this mean call(arguments, 1) it's goting to start cutting at position number one
  argsArry.forEach(function(cur) {
    console.log(2016 - cur >= limit); // >= 1990
  });
}

isFullAge5(1990, 1999, 1965);

//es6
function isFullAge6(limit, ...years) {
  years.forEach(cur => {
    console.log(2016 - cur >= limit);
  });
}

isFullAge6(1990, 1999, 1965);
