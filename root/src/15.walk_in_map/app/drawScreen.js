const factory = require('./componentsFactory');

var pattern = new Image();
pattern.src = require('./../../../assets/images/pattern.jpg');

let drawList = [];

function drawScreen(self) {
  var context = self.context;
  var canvas = self.dom;
  context.clearRect(0, 0, canvas.width, canvas.height);
  // loading
  if (self.props.loading) {
    return;
  }
  // sort
  drawList.length = 0;
  for (var key in self.props.components) {
    if (self.props.components.hasOwnProperty(key)) {
      // var frameState = self.props.currentFrame[key];
      drawList[drawList.length] = self.props.components[key];
    }
  }
  drawList.sort((a, b) => a.zindex - b.zindex);
  // draw components
  for (var i = 0; i < drawList.length; i++) {
    var component = drawList[i];
    if (component.type == 'character') {
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
    } else if (component.type == 'map') {
      let option = component.option;
      for (let layerIndex = 0; layerIndex < option.layers.length; layerIndex++) {
        let layer = option.layers[layerIndex];
        for (let tileIndex = 0; tileIndex < layer.data.length; tileIndex++) {
          let row = parseInt(tileIndex / option.width);
          let col = tileIndex % option.width;
          let tileId = layer.data[tileIndex];
          if (tileId != 0) {
            tileId -= 1;
            let tileset = option.tilesets[0];
            let tilewidth = tileset.tilewidth;
            let tileheight = tileset.tileheight
            let sourceX = Math.floor(tileId % tileset.columns) * tilewidth;
            let sourceY = Math.floor(tileId / tileset.columns) * tileheight;
            context.drawImage(
              component.image,
              sourceX,
              sourceY,
              tilewidth,
              tileheight,
              col * tilewidth,
              row * tileheight,
              tilewidth,
              tileheight
            )
          }
        }
      }
    }
  }
}

module.exports = drawScreen;