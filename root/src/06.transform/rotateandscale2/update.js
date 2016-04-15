function update(self) {
  var angle = self.state.angle;
  var scale = self.state.scale;
  var scaled = self.state.scaled;
  angle += 1;
  angle = angle % 360;

  scale += .01 * scaled;
  if (scale >= 2 || scale <= 1) {
    scaled = 0 - scaled;
  }
  self.setState({
    angle: angle,
    scale: scale,
    scaled: scaled
  });
}

module.exports = update;