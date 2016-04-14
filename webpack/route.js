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
},]

module.exports = routes;
