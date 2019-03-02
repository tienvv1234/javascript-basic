var Question = function(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
};

Question.prototype.checkAnswer = function(choseAnswer) {
  if (this.correctAnswer === choseAnswer) {
    console.log('correct answer');
  } else {
    console.log('wrong answer');
  }
};

Question.prototype.displayQuestion = function() {
  console.log(this.question);
  for (let i = 0; i < this.answers.length; i++) {
    console.log(i + ': ' + this.answers[i]);
  }
};

var nameQuestion = new Question('what is your name', ['tien', 'tung'], 1);
var nameQuestionWrong = new Question(
  'what do your do',
  ['developer', 'designer'],
  1
);

var listOfArray = [nameQuestion, nameQuestionWrong];

function nextQuest() {
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getQuestion(listOfArray) {
    var question = listOfArray[getRandomNumber(0, 1)];
    question.displayQuestion();
    return question;
  }

  var selectedQuestion = getQuestion(listOfArray);

  var answer = prompt('Please enter your answer', '');

  selectedQuestion.checkAnswer(Number(answer));
  nextQuest();
}
nextQuest();
