function update(self) {
  var yOffset = self.state.yOffset;
  yOffset += 1;
  yOffset = yOffset % 400;
  self.setState({
    yOffset: yOffset
  });
}

module.exports = update;