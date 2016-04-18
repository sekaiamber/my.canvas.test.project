var routes = [{
  name: 'index',
  entry: './index/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'index.html'
  }
}, {
  name: '01',
  entry: './01.hello_world/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'hello_world.html'
  }
}, {
  name: '02',
  entry: './02.guess_letter/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'guess_letter.html'
  }
}, {
  name: '03',
  entry: './03.anime_hello_world/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'anime_hello_world.html'
  }
}, {
  name: '04',
  entry: './04.shape/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'shape.html'
  }
}, {
  name: '05',
  entry: './05.composite/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'composite.html'
  }
}, {
  name: '06',
  entry: './06.transform/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'transform.html'
  }
}, {
  name: '07',
  entry: './07.color/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'color.html'
  }
}, {
  name: '08',
  entry: './08.fill_image/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'fill_image.html'
  }
}, {
  name: '09',
  entry: './09.shadow/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'shadow.html'
  }
}, {
  name: '10',
  entry: './10.clean_canvas/start',
  plugins: {
    template: './../templates/index.html',
    filename: 'clean_canvas.html'
  }
},]

module.exports = routes;
