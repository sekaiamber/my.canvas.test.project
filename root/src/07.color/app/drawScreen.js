function drawScreen(self) {
  var context = self.context;
  // 线性水平渐变
  var gr = context.createLinearGradient(0, 0, 200, 0);

  // 添加颜色结点
  gr.addColorStop(0, 'rgb(255, 0, 0)');
  gr.addColorStop(.5, 'rgb(0, 255, 0)');
  gr.addColorStop(1, 'rgb(255, 0, 0)');
  
  // 应用
  context.fillStyle = gr;
  context.fillRect(0, 0, 100, 100);
  context.fillRect(0, 100, 50, 100);
  context.fillRect(0, 200, 200, 100);
  
  // 描边
  context.strokeStyle = gr;
  context.strokeRect(120, 0, 100, 100);
  
  // 径向渐变
  gr = context.createRadialGradient(50, 50, 25, 100, 100, 100);
  gr.addColorStop(0, 'rgb(255, 0, 0)');
  gr.addColorStop(.5, 'rgb(0, 255, 0)');
  gr.addColorStop(1, 'rgb(255, 0, 0)');
  
  context.fillStyle = gr;
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(150, 100);
  context.lineTo(200, 150);
  context.lineTo(150, 200);
  context.lineTo(100, 200);
  context.lineTo(100, 100);
  context.stroke();
  context.fill();
  context.closePath();
}

module.exports = drawScreen;