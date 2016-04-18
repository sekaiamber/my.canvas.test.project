function drawScreen(self) {
  var context = self.context;
  // 获取图片
  var pattern = new Image();
  pattern.onload = (() => {
    var fillPattern = context.createPattern(pattern, 'repeat');
    context.fillStyle = fillPattern;
    context.fillRect(0, 0, 300, 300);
  });
  pattern.src = require('./../../../assets/images/pattern.jpg');
}

module.exports = drawScreen;