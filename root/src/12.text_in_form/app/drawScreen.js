function drawScreen(self) {
  var context = self.context;
  var canvas = self.dom;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = `${self.props.fontStyle} ${self.props.fontWeight} ${self.props.fontSize}px ${self.props.font}`;
  context.textBaseline = self.props.fontBaseline;
  context.fillStyle = `#${self.props.fontColor}`;
  context.strokeStyle = self.props.fillorstroke == 'both' ? '#000000' : '#FF0000';
  if (self.props.fillorstroke == 'fill' || self.props.fillorstroke == 'both') {
    context.fillText(self.props.text, 0, 0);
  }
  if (self.props.fillorstroke == 'stroke' || self.props.fillorstroke == 'both') {
    context.strokeText(self.props.text, 0, 0);
  }
  // 水平居中
  var metrics = context.measureText(self.props.text);
  var textWidth = metrics.width;
  // 这里用offsetWidth是因为Retina屏会放大width，详见hidpi-canvas.js
  var xPosition = (canvas.offsetWidth / 2) - (textWidth / 2);
  // 也可以使用textAlign为center来代替textWidth / 2，代码如下：
  // context.textAlign = 'center';
  // var xPosition = canvas.offsetWidth / 2;
  if (self.props.fillorstroke == 'fill' || self.props.fillorstroke == 'both') {
    context.fillText(self.props.text, xPosition, 200);
  }
  if (self.props.fillorstroke == 'stroke' || self.props.fillorstroke == 'both') {
    context.strokeText(self.props.text, xPosition, 200);
  }
  
  // 垂直居中难以实现，但是设置context.textBaseline = 'middle'然后用canvas.offsetHeight / 2来居中，部分解决。
  
}

module.exports = drawScreen;