const React = require('react');
const ReactDOM = require('react-dom');
const initGame = require('./app/initGame');
const drawScreen = require('./app/drawScreen');

var CanvasApp = React.createClass({
  dom: null,
  getInitialState() {
    return {
      guesses: 0,
      message: "Guess The Letter From a to z",
      Letters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
      today: new Date(),
      LetterToGuess: '',
      higherOrLower: '',
      LettersGuessed: [],
      gameOver: false,
    };
  },
  saveImage() {
    window.open(this.dom.toDataURL(), "canvasImage", `left=0,top=0,width=${this.dom.offsetWidth},height=${this.dom.offsetHeight},toolbar=0,resizeable=0`);
  },
  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this.refs.dom);
    this.context = this.dom.getContext('2d');
    initGame(this);
  },
  componentDidUpdate() {
    drawScreen(this);
  },
  render: function () {
    let canvasOne = {
      id: 'canvasOne',
      width: 500,
      height: 300,
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