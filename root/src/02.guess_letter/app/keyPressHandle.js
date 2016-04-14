function keyPressHandle(self, e) {
  if (!self.state.gameOver) {
    var letterPressed = String.fromCharCode(e.keyCode).toLowerCase();
    var guesses = self.state.guesses + 1;
    var LettersGuessed = self.state.LettersGuessed;
    var gameOver = self.state.gameOver;
    var higherOrLower = self.state.higherOrLower;
    LettersGuessed.push(letterPressed);
    
    if (letterPressed == self.state.LetterToGuess) {
      gameOver = true;
    } else {
      var letterIndex = self.state.Letters.indexOf(self.state.LetterToGuess);
      var guessIndex = self.state.Letters.indexOf(letterPressed);
      if (guessIndex < 0) {
        higherOrLower = 'That is not a letter';
      } else if (guessIndex > letterIndex) {
        higherOrLower = 'Lower';
      } else {
        higherOrLower = 'Higher';
      }
    }
    self.setState({
      guesses: guesses,
      LettersGuessed: LettersGuessed,
      gameOver: gameOver,
      higherOrLower: higherOrLower
    });
  }
}

module.exports = keyPressHandle;