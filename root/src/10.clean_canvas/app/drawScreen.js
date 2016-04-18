function drawScreen(self) {
  var context = self.context;
  var canvas = self.dom;
  context.clearRect(0, 0, canvas.width, canvas.height);
  var currentPath = context.beginPath();
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.moveTo(0, 0 + self.state.yOffset);
  context.lineTo(50, 0 + self.state.yOffset);
  context.lineTo(50, 50 + self.state.yOffset);
  context.stroke();
  context.closePath();
}

module.exports = drawScreen;