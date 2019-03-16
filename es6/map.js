const question = new Map();
question.set(
  'question',
  'What is the official name of the lateste major javascriont version?'
);
question.set(1, 'es5');
question.set(2, 'es6');
question.set(3, 'es2015');
question.set(4, 'es7');
question.set('correct', '3');
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
  question.delete(4);
  console.log('Answer 4 is here');
}
//question.clear();

// question.forEach((value, key) =>
//   console.log(`this is ${key}, and it's set to ${value}`)
// );

//question.entries will return all entries of our questions map
// for (let [key, value] of question.entries()) {
//   console.log(`this is ${key}, and it's set to ${value}`);
// }

for (let [key, value] of question.entries()) {
  if (typeof key === 'number') {
    console.log(`this is ${key}, and it's set to ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('answer')));
