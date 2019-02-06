


puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.getStatusMessage();
window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    console.log(guess);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.getPuzzle();
    guessesEl.textContent = game1.getStatusMessage();
})