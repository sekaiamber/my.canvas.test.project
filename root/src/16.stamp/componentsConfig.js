var config = {
  tile: {
    component: 'tile',
    option: {
      type: 'character',
      anime: [{
        frame: 'normal',
        end: 1
      }],
      image_src: require('./../../assets/map/tile.png'),
      counts: 0,
      currentFrame: 'normal',
      totalcounts: 1,
      position: {
        x: 160,
        y: 112
      },
      scale: {
        x: 1,
        y: 1,
      },
      face: 1,
      speed: 1,
      turning_speed: .1,
      zindex: 0,
      onMouseMove: function (canvas, e) {
        let mx = e.clientX - canvas.dom.offsetLeft;
        let my = e.clientY - canvas.dom.offsetTop;
        mx = mx < 0 ? 0 : mx;
        my = my < 0 ? 0 : my;
        
      }
    }
  }
}
module.exports = config;