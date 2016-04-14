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
},]

module.exports = routes;
