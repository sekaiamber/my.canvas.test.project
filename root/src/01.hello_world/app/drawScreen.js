function drawScreen(context) {
  // background
  context.fillStyle = "#ffffaa";
  context.fillRect(0, 0, 500, 300);
  
  // text
  context.fillStyle = "#000000";
  context.font = "20px Sans-Serif";
  context.textBaseline = "top";
  context.fillText('Hello World!', 195, 80);
  
  // image
  var helloworld = new Image();
  helloworld.onload = (() => {
    context.drawImage(helloworld, 0, 0, 600, 600, 50, 50, 100, 100);
  });
  helloworld.src = require('./../../../assets/images/logo.svg');
  
  // border
  context.strokeStyle = "#000000";
  context.strokeRect(5, 5, 490, 290);
}

module.exports = drawScreen;