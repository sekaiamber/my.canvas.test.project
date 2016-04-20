function update(self) {
  if (self.props.anime) {
    for (var i = 0; i < self.props.animeColor.length; i++) {
      self.props.animeColor[i].stopPercent += .015;
      if (self.props.animeColor[i].stopPercent > 1) {
        self.props.animeColor[i].stopPercent = 0;
      }
    }
  }
  self.setState({
    keepRendering: true,
  })
}

module.exports = update;