const React = require('react');
const Support = require('../components/support');
require('./index.scss');

const logo = document.createElement('img');
logo.src = require('./../../assets/images/logo.svg');

var Index = React.createClass({
  getInitialState() {
    return {
      theme: 'light',
    };
  },
  render: function () {
    return (
      <div>
        <h1>Sekai的Canvas学习笔记</h1>
        <div>这个项目专门用来记录Canvas学习过程中的笔记和演示。</div>
        <Support />
        <h2>目录</h2>
        <div>
          <ol>
            <li><a href="./hello_world.html">Hello world</a></li>
            <li><a href="./guess_letter.html">Guess Letter</a></li>
            <li><a href="./anime_hello_world.html">Anime Hello World</a></li>
            <li><a href="./shape.html">Shape</a></li>
            <li><a href="./composite.html">Composite</a></li>
            <li><a href="./transform.html">Transform</a></li>
          </ol>
        </div>
      </div>
    )
  }
});

module.exports = Index;
