const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('');
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = 'playing';
};

Hangman.prototype.getStatusMessage = function() {
  if (this.status === 'playing') {
    return `Guesses left: ${this.remainingGuesses}`;
  } else if (this.status === 'failed') {
    return `nice try! the word is : "${this.word.join('')}"`;
  } else {
    return 'Great work! you got the word.';
  }
};

Hangman.prototype.calculateStatus = function() {
  // let finished = true;

  // this.word.forEach((letter) => {
  //     if(this.guessedLetters.includes(letter)){
  //     }else{
  //         finished = false;
  //     }
  // })
  // let finished = true;
  //   console.log('this.guessedLetters', this.guessedLetters);

  const finished = this.word.every(
    letter => this.guessedLetters.includes(letter) || letter === ' '
  );

  console.log('finished', finished);
  if (this.remainingGuesses === 0) {
    this.status = 'failed';
    console.log(1);
  } else if (finished) {
    console.log(2);
    this.status = 'finished';
  } else {
    console.log(3);
    this.status = 'playing';
  }
};

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';

  this.word.forEach(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle = puzzle + letter;
    } else {
      puzzle = puzzle + '*';
    }
  });

  return puzzle;
};

Hangman.prototype.makeGuess = function(guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (this.status !== 'playing') {
    return;
  }

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }

  this.calculateStatus();
};

const game1 = new Hangman('Car parts', 2);
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

// game1.makeGuess('c');
// game1.makeGuess('t');
// game1.makeGuess('z');
// guess c, t, z

// const game2 = new Hangman('New Jersey', 4)
// game2.makeGuess('w');
// console.log(game2.getPuzzle());
