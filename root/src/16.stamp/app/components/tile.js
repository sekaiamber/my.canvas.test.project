var tile = function (option) {
  for (var key in option) {
    if (option.hasOwnProperty(key)) {
      this[key] = option[key];
    }
  }
  this.loaded = false;
  this.image = new Image();
  this.image.src = option.image_src;
  var self = this;
  this.image.addEventListener('load', function () {
    self.loaded = true;
    if (self._loaded) {
      self._loaded();
    }
  }, false);
}

var proto = {
  frames: [{
    name: 'normal',
    sx: 0,
    sy: 0,
    sw: 320,
    sh: 224,
  }],
  update: function () { },
  onLoaded(cb) {
    if (this.loaded) {
      cb();
    } else {
      this._loaded = cb;
    }
  }
}

for (var i = 0; i < proto.frames.length; i++) {
  proto[i] = proto.frames[i];
  proto[proto.frames[i].name] = proto.frames[i];
}

tile.prototype = proto;

module.exports = tile;