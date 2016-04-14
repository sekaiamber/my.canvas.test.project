const keyPressHandle = require('./keyPressHandle');
const $ = require('jquery');

function initGame(self) {
  var idx = Math.floor(Math.random() * self.state.Letters.length);
  $(window).keydown((e) => keyPressHandle(self, e));
  self.setState({
    LetterToGuess: self.state.Letters[idx],
    guesses: 0,
    LettersGuessed: [],
    gameOver: false
  });
}

module.exports = initGame;