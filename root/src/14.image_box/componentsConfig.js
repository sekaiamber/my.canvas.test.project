var config = {
  loli1: {
    component: 'loli',
    option: {
      anime: [{
        frame: 'normal1',
        end: 30
      }, {
        frame: 'normal2',
        end: 60
      }],
      image_src: require('./../../assets/images/loli_1.png'),
      counts: 0,
      currentFrame: 'normal1',
      totalcounts: 60,
      position: {
        x: 100,
        y: 150
      },
      scale: {
        x: 1,
        y: 1,
      },
      face: 1,
      speed: 1,
      turning_speed: .1,
    }
  },
  loli2: {
    component: 'loli',
    option: {
      anime: [{
        frame: 'normal1',
        end: 15
      }, {
        frame: 'normal2',
        end: 30
      }],
      image_src: require('./../../assets/images/loli_1.png'),
      counts: 0,
      currentFrame: 'normal1',
      totalcounts: 30,
      position: {
        x: 100,
        y: 350
      },
      scale: {
        x: .5,
        y: .5,
      },
      face: 1,
      speed: 2,
      turning_speed: .2,
    }
  }
}
module.exports = config;