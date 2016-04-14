function drawScreen(self) {
  var context = self.context;
  // background
  context.fillStyle = "#ffffaa";
  context.fillRect(0, 0, 500, 300);
  // border
  context.strokeStyle = "#000000";
  context.strokeRect(5, 5, 490, 290);
  
  context.textBaseline = "top";
  // text
  context.fillStyle = "#000000";
  context.font = "10px Sans-Serif";
  context.fillText(self.state.today, 150, 10);
  
  // message
  context.fillStyle = "#FF0000";
  context.font = "14px Sans-Serif";
  context.fillText(self.state.message, 125, 30);
  
  // guess time
  context.fillStyle = "#109910";
  context.font = "16px Sans-Serif";
  context.fillText(`Guesses: ${self.state.guesses}`, 215, 50);
  
  // higher or lower
  context.fillStyle = "#000000";
  context.font = '16px Sans-Serif';
  context.fillText(`Higher Or Lower: ${self.state.higherOrLower}`, 150, 125);
  
  // guessed
  context.fillStyle = "#FF0000";
  context.font = "16px Sans-Serif";
  context.fillText(`Letters Guessed: ${self.state.LettersGuessed}`, 10, 260);
  
  if (self.state.gameOver) {
    context.fillStyle = "#FF0000";
    context.font = "40px Sans-Serif";
    context.fillText("You Got It!", 150, 180);
  }
  
}

module.exports = drawScreen;