function drawScreen(self) {
  var context = self.context;
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(50, 0);
  context.lineTo(50, 50);
  context.stroke();
  
  var point1 = context.isPointInPath(0, 0);
  var point2 = context.isPointInPath(10, 20);
  
  // text
  context.fillStyle = "#000000";
  context.font = "20px Sans-Serif";
  context.textBaseline = "top";
  context.fillText(`(0, 0) is in path? ${point1}`, 195, 80);
  context.fillText(`(10, 20) is in path? ${point2}`, 195, 180);
  context.closePath();
}

module.exports = drawScreen;