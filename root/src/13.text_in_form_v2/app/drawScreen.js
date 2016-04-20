var pattern = new Image();
pattern.src = require('./../../../assets/images/pattern.jpg');

function drawScreen(self) {
  var context = self.context;
  var canvas = self.dom;
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Canvas属性
  context.globalAlpha = self.props.alpha;
  context.shadowColor = `#${self.props.shadowColor}`;
  context.shadowOffsetX = self.props.shadowOffsetX;
  context.shadowOffsetY = self.props.shadowOffsetY;
  context.shadowBlur = self.props.shadowBlur;
  // Font属性，具体请见12.text_in_form
  context.font = `${self.props.fontStyle} ${self.props.fontWeight} ${self.props.fontSize}px ${self.props.font}`;
  context.textBaseline = self.props.fontBaseline;
  context.strokeStyle = self.props.fillorstroke == 'both' ? '#000000' : '#FF0000';
  var metrics = context.measureText(self.props.text);
  var textWidth = metrics.width;
  var fillStyle;
  switch (self.props.fontColorFillType) {
    case 'linear':
      fillStyle = context.createLinearGradient(100, 0, canvas.offsetWidth - 100, 0);
      break;
    case 'radial':
      fillStyle = context.createRadialGradient(canvas.offsetWidth / 2, 200, 250, canvas.offsetWidth / 2, 200, 0);
      break;
    case 'image':
      fillStyle = context.createPattern(pattern, 'repeat');
      break;
    default:
      fillStyle = `#${self.props.fontColor1}`;
      break;
  }
  if (self.props.fontColorFillType == 'linear' || self.props.fontColorFillType == 'radial') {
    if (self.props.anime) {
      for (var i = 0; i < self.props.animeColor.length; i++) {
        fillStyle.addColorStop(self.props.animeColor[i].stopPercent, `#${self.props.animeColor[i].color}`);
      }
    } else {
      fillStyle.addColorStop(0, `#${self.props.fontColor1}`);
      fillStyle.addColorStop(1, `#${self.props.fontColor2}`);
    }
  }
  context.fillStyle = fillStyle;
  var xPosition = (canvas.offsetWidth / 2) - (textWidth / 2);
  if (self.props.fillorstroke == 'fill' || self.props.fillorstroke == 'both') {
    context.fillText(self.props.text, xPosition, 200);
  }
  if (self.props.fillorstroke == 'stroke' || self.props.fillorstroke == 'both') {
    context.strokeText(self.props.text, xPosition, 200);
  }

}

module.exports = drawScreen;