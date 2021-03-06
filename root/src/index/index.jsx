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
        <h3>基础</h3>
        <ol>
          <li><a href="./hello_world.html">Hello world</a></li>
          <li><a href="./guess_letter.html">Guess Letter</a></li>
          <li><a href="./anime_hello_world.html">Anime Hello World</a></li>
        </ol>
        <h3>在Canvas上的绘图</h3>
        <ol>
          <li><a href="./shape.html">Shape</a></li>
          <li><a href="./composite.html">Composite</a></li>
          <li><a href="./transform.html">Transform</a></li>
          <li><a href="./color.html">Color</a></li>
          <li><a href="./fill_image.html">Fill Image</a></li>
          <li><a href="./shadow.html">Shadow</a></li>
          <li><a href="./clean_canvas.html">Clean Canvas</a></li>
          <li><a href="./check_point_in_path.html">Check Point In Path</a></li>
        </ol>
        <h3>文本控制</h3>
        <ol>
          <li><a href="./text_in_form.html">Text In Form</a></li>
          <li><a href="./text_in_form_v2.html">Text In Form 2.0</a></li>
        </ol>
        <h3>图像控制</h3>
        <ol>
          <li><a href="./image_box.html">Lolis In A Box</a></li>
          <li><a href="./walk_in_map.html">Walk In Map</a></li>
        </ol>
      </div>
    )
  }
});

module.exports = Index;
