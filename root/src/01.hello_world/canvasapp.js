function canvasApp() {
  var drawScreen = require('./app/drawScreen');
  var context = document.getElementById('canvasOne').getContext('2d');
  drawScreen(context);
}

module.exports = canvasApp;