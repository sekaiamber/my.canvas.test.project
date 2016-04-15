function drawScreen(self) {
  var context = self.context;
  // Rect
  context.fillStyle = "black";
  context.fillRect(10, 10, 200, 200);
  
  // globalCompositeOperation 不变
  context.fillStyle = "red";
  context.fillRect(1, 1, 50, 50);
  
  context.globalCompositeOperation = "source-over";
  context.fillRect(60, 1, 50, 50);
  
  context.globalCompositeOperation = "destination-out";
  context.fillRect(1, 60, 50, 50);
  
  context.globalAlpha = .5;
  context.globalCompositeOperation = "source-atop";
  context.fillRect(60, 60, 50, 50);
}

module.exports = drawScreen;