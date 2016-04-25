var loli = function (option) {
  this.image = new Image();
  var imagesrc = option
  this.image.src = option.image_src;
  for (var key in option) {
    if (option.hasOwnProperty(key)) {
      this[key] = option[key];
    }
  }
  this.temp = {
    scale_x: option.scale.x,
  }
}

var proto = {
  frames: [
    {
      name: 'normal1',
      sx: 0,
      sy: 0,
      sw: 120,
      sh: 175,
    }, {
      name: 'normal2',
      sx: 120,
      sy: 0,
      sw: 120,
      sh: 175
    }
  ],
  turning: false,
  turning_scale: 1,
  turning_speed: .2,
  turning_face: -1,
  update: function () {
    // 移动控制，将人物在100-400内来回平移
    this.position.x += this.face * this.speed;
    if (this.position.x > 400 || this.position.x < 100) {
      // 撞边缘时设置转身动画
      this.turning_face = this.face;
      this.face = 0 - this.face;
      this.turning = true;
    }
    // 转身控制，调节turning_scale
    if (this.turning) {
      if (this.turning_face != this.face) {
        this.turning_scale -= this.turning_speed;
        if (this.turning_scale <= 0) {
          this.turning_face = 0 - this.turning_face;
          this.turning_scale = 0;
        }
      } else {
        this.turning_scale += this.turning_speed;
        if (this.turning_scale >= 1) {
          this.turning_scale = 1;
          this.turning = false;
        }
      }
      this.scale.x = this.temp.scale_x * this.turning_scale;
    }
  }
}

for (var i = 0; i < proto.frames.length; i++) {
  proto[i] = proto.frames[i];
  proto[proto.frames[i].name] = proto.frames[i];
}

loli.prototype = proto;

module.exports = loli;