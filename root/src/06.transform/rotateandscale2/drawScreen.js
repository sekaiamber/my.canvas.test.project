function drawScreen(self) {
  var context = self.context;
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, 500, 500);
  // Rect
  var x = 100;
  var y = 100;
  var width = 100;
  var height = 100;
  // 设置transform原点，应用transform
  context.translate(x + .5 * width, y + .5 * height);
  context.rotate(self.state.angle * Math.PI / 180);
  context.scale(self.state.scale, self.state.scale);
  // 绘制，注意原点移动
  context.fillStyle = "red";
  context.fillRect(-.5 * width, -.5 * height, width, height);
}

module.exports = drawScreen;