// const product = {
//     name: 'abc'
// }

const product = new Object({
    name: 'The War of Art'
})

Object.prototype.someNewMethod = () => 'this is the new method';

console.log(product.someNewMethod())
console.log(product)