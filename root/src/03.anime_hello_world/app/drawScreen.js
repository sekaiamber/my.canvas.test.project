function drawScreen(self) {
  var context = self.context;
  // background
  context.fillStyle = "#000000";
  context.fillRect(0, 0, 500, 500);
  // img
  context.globalAlpha = .25;
  context.drawImage(self.state.image, 0, 0, 500, 500);
  // text
  context.font = "72px Sans-Serif";
  context.textBaseline = "top";
  
  context.globalAlpha = self.state.alpha;
  context.fillStyle = "#FFFFFF";
  context.fillText(self.state.text, 50, 200);
}

module.exports = drawScreen;