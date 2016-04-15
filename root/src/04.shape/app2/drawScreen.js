function drawScreen(self) {
  var context = self.context;
  // 画个黑色框，显眼
  context.fillStyle = '#000000';
  context.fillRect(10, 10, 200, 200);
  context.save();

  // 设置裁剪区域为rect(0, 0, 50, 50)
  context.beginPath();
  context.rect(0, 0, 50, 50);
  context.clip();

  // 画圆，发现只有一条弧线，因为上面的clip作用类似PS中的剪切蒙版
  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 5;
  context.arc(100, 100, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
  context.stroke();
  context.closePath();
  
  context.restore();
  
  // 这个蒙版面积大于画的蓝圈，所以整个都能看到
  context.beginPath();
  context.rect(0, 0,500,500);
  context.clip();
  
  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 5;
  context.arc(100,100,50,(Math.PI/180)*0,(Math.PI/180)*360,false);
  
  context.stroke();
  context.closePath();
}

module.exports = drawScreen;