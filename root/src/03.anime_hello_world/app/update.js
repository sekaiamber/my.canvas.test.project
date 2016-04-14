function update(self) {
  var alpha = self.state.alpha;
  var type = self.state.type;
  if (type == "fadeIn") {
    alpha += .01;
    if (alpha >= 1) {
      alpha = 1;
      type = "fadeOut"
    }
  } else {
    alpha -= .01;
    if (alpha <= 0) {
      alpha = 0;
      type = "fadeIn"
    }
  }
  self.setState({
    alpha: alpha,
    type: type
  });
}

module.exports = update;