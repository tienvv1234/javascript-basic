// primitive value: string, number, boolean, null, undefined

//object: myObject --> Object.prototype --> null
// const product = {
//     name: 'abc'
// }

const product = new Object({
  name: 'The War of Art'
});

Object.prototype.someNewMethod = () => 'this is the new method';

console.log(product.someNewMethod());
console.log(product);

// array: myArray --> Array.prototype --> object.prototype --> null
// const team = ['Luke', 'Maddison']
const team = new Array(['Luke', 'Maddison']);
console.log(team);

// function:myFunc --> Function.prototype --> object prototype --> null
const getScore = () => {};
console.log(getScore);

const product = 'computer';
console.log(product);

// String: myString --> String.prototype --
const otherProduct = new String('Phone');
console.log(otherProduct);
