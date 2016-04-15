function drawScreen(self) {
  var context = self.context;
  // Rect
  context.setTransform(1, 0, 0, 1, 0, 0);
  var x = 100;
  var y = 100;
  var width = 50;
  var height = 50;
  // 设置transform原点，应用transform
  context.translate(x + .5 * width, y + .5 * height);
  context.scale(2, 2);
  // 绘制，注意原点移动
  context.fillStyle = "red";
  context.fillRect(-.5 * width, -.5 * height, width, height);
}

module.exports = drawScreen;