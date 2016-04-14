const React = require('react');
const ReactDOM = require('react-dom');
const initGame = require('./app/initGame');
const drawScreen = require('./app/drawScreen');
const update = require('./app/update');
const helloworld = new Image();
helloworld.src = require('./../../assets/images/logo.svg');

var CanvasApp = React.createClass({
  dom: null,
  getInitialState() {
    return {
      alpha: .5,
      type: this.props.type || "fadeIn",
      text: 'Hello World',
      image: helloworld
    };
  },
  saveImage() {
    window.open(this.dom.toDataURL(), "canvasImage", `left=0,top=0,width=${this.dom.offsetWidth},height=${this.dom.offsetHeight},toolbar=0,resizeable=0`);
  },
  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this.refs.dom);
    this.context = this.dom.getContext('2d');
    initGame(this);
    var self = this;
    (function renderLoop() {
      window.requestAnimationFrame(renderLoop);
      update(self);
    })();
    drawScreen(this);
  },
  componentDidUpdate() {
    drawScreen(this);
  },
  render: function () {
    let canvasOne = {
      id: 'canvasOne',
      width: 500,
      height: 500,
    }
    return (
      <div>
        <canvas ref="dom" {...canvasOne}>
          Your browser does not support HTML5 Canvas
        </canvas>
        <div>
          <input type="button" value="Export Canvas Image" onClick={this.saveImage}/>
        </div>
      </div>
    )
  }
});

module.exports = CanvasApp;