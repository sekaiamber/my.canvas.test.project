function drawScreen(self) {
  // Rect
  var context = self.context;
  context.fillStyle = '#000000';
  context.strokeStyle = '#ff00ff';
  context.lineWidth = 2;
  context.fillRect(10, 10, 40, 40);
  context.strokeRect(0, 0, 60, 60);
  context.clearRect(20, 20, 20, 20);

  // line
  context.strokeStyle = "black";
  context.lineWidth = 10;
  context.lineCap = 'square';
  context.beginPath();
  context.moveTo(100, 0);
  context.lineTo(200, 0);
  context.stroke();
  context.closePath();

  // advance line: 圆形端点，斜角连接
  context.strokeStyle = "black";
  context.lineWidth = 10;
  context.lineJoin = 'bevel';
  context.lineCap = 'round';
  context.beginPath();
  context.moveTo(120, 20);
  context.lineTo(145, 20);
  context.lineTo(145, 45);
  context.stroke();
  context.closePath();

  // advance line: 平直端点，圆形连接
  context.lineJoin = 'round';
  context.lineCap = 'butt';
  context.beginPath();
  context.moveTo(160, 20);
  context.lineTo(185, 20);
  context.lineTo(185, 45);
  context.stroke();
  context.closePath();

  // arc
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 5;
  context.arc(300, 30, 20, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(350, 30, 20, (Math.PI / 180) * 0, (Math.PI / 180) * 90, false);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(400, 30, 20, (Math.PI / 180) * 0, (Math.PI / 180) * 90, true);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(100, 200);
  context.arcTo(350, 350, 100, 100, 20);
  context.stroke();
  context.closePath();

  // Bezier curve
  context.beginPath();
  context.moveTo(100, 100);
  context.quadraticCurveTo(200, 125, 100, 150);
  context.stroke();
  context.closePath();
  
  context.beginPath();
  context.moveTo(200, 100);
  context.bezierCurveTo(50, 225, 350, 275, 200, 400);
  context.stroke();
  context.closePath();
}

module.exports = drawScreen;