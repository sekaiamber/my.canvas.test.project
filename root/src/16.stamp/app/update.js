function update(self) {
  for (var key in self.props.components) {
    if (self.props.components.hasOwnProperty(key)) {
      var component = self.props.components[key];
      var counts = (component.counts + 1) % component.totalcounts;
      component.counts = counts;
      for (var i = 0; i < component.anime.length; i++) {
        var frame = component.anime[i];
        if (counts < frame.end) {
          component.currentFrame = frame.frame;
          break;
        }
      }
      component.update();
    }
  }
  self.setState({
    keepRendering: true,
  })
}

module.exports = update;