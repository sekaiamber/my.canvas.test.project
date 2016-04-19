const React = require('react');
const ReactDOM = require('react-dom');
const helloworld = new Image();
helloworld.src = require('./../../assets/images/logo.svg');

var CanvasApp = React.createClass({
  dom: null,
  getInitialState() {
    return {};
  },
  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this.refs.dom);
    this.context = this.dom.getContext('2d');
    if (this.props.init) {
      this.props.init(this);
    }
    var self = this;
    (function renderLoop() {
      window.requestAnimationFrame(renderLoop);
      self.props.update(self);
    })();
    this.props.render(this);
  },
  componentDidUpdate() {
    this.props.render(this);
  },
  // APIs
  saveImage() {
    window.open(this.dom.toDataURL(), "canvasImage", `left=0,top=0,width=${this.dom.offsetWidth},height=${this.dom.offsetHeight},toolbar=0,resizeable=0`);
  },
  saveCanvasState() {
    this.context.save();
  },
  restoreCanvasState() {
    this.context.restore();
  },
  render: function () {
    let canvasOne = {
      id: 'canvasOne',
      width: 500,
      height: 550,
      style: {
        border: '#ddd solid 1px'
      }
    }
    return (
      <div className="canvas-app">
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