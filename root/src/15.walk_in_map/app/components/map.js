var map = function (option) {
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
  frames: [],
  update: function () {},
  onLoaded (cb) {
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

map.prototype = proto;

module.exports = map;