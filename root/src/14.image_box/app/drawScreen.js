const factory = require('./componentsFactory');

var pattern = new Image();
pattern.src = require('./../../../assets/images/pattern.jpg');

function drawScreen(self) {
  var context = self.context;
  var canvas = self.dom;
  context.clearRect(0, 0, canvas.width, canvas.height);
  // loading
  if (self.props.loading) {
    return;
  }
  // draw components
  for (var key in self.props.components) {
    if (self.props.components.hasOwnProperty(key)) {
      // var frameState = self.props.currentFrame[key];
      var component = self.props.components[key];
      var frame = component[component.currentFrame];
      // save
      context.save();
      context.setTransform(1, 0, 0, 1, 0, 0);
      var component_width = frame.sw * component.scale.x;
      var component_height = frame.sh * component.scale.y;
      context.translate(component.position.x, component.position.y);
      context.scale(component.turning ? component.turning_face : component.face, 1);
      
      context.drawImage(
        component.image,
        frame.sx,
        frame.sy,
        frame.sw,
        frame.sh,
        - component_width / 2,
        - component_height / 2,
        component_width,
        component_height);

      context.restore();
    }
  }
}

module.exports = drawScreen;