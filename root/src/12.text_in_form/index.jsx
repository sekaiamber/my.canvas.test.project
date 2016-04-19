const React = require('react');
const $ = require('jquery');
const CanvasApp = require('./canvasapp');
const Support = require('../components/support');
const ColorPicker = require('../components/colorPicker/colorPicker');
require('./index.scss');

// noop
const noop = function() {};

// apps
const app = require('./app/drawScreen');

var Index = React.createClass({
  getInitialState() {
    // $('document').ready(canvasApp);
    return {
      theme: 'light',
      text: '',
      fillorstroke: 'fill',
      fontStyle: 'normal',
      fontWeight: 'normal',
      font: 'serif',
      fontSize: 20,
      fontColor: '000000',
      fontBaseline: 'top',
    };
  },
  onStateChange(key, e) {
    var obj = {};
    obj[key] = e.target.value;
    this.setState(obj);
  },
  onColorChange(v) {
    this.setState({'fontColor': v.hex});
  },
  render: function () {
    let canvasOne = {
      id: 'canvasOne',
      width: 500,
      height: 300,
    }
    let CanvasData = {
      text: this.state.text,
      fillorstroke: this.state.fillorstroke,
      fontStyle: this.state.fontStyle,
      fontWeight: this.state.fontWeight,
      font: this.state.font,
      fontSize: this.state.fontSize,
      fontColor: this.state.fontColor,
      fontBaseline: this.state.fontBaseline,
    }
    return (
      <div>
        <h1>12. Text In Form</h1>
        <Support />
        <div className="opt">
          <CanvasApp {...CanvasData} update={noop} render={app} />
          <div className="form-area">
            <form>
              Text: <input type="textBox" placeholder="Your text" value={this.state.text} onChange={e => this.onStateChange('text', e)}/>
              <br/>
              Fill Or Stroke: <select value={this.state.fillorstroke} onChange={e => this.onStateChange('fillorstroke', e)}>
                <option value="fill">fill</option>
                <option value="stroke">stroke</option>
                <option value="both">both</option>
              </select>
              <br/>
              Font Style: <select value={this.state.fontStyle} onChange={e => this.onStateChange('fontStyle', e)}>
                <option value="normal">normal</option>
                <option value="italic">italic</option>
                <option value="oblique">oblique</option>
              </select>
              <br/>
              Font Weight: <select value={this.state.fontWeight} onChange={e => this.onStateChange('fontWeight', e)}>
                <option value="normal">normal</option>
                <option value="bold">bold</option>
                <option value="bolder">bolder</option>
                <option value="lighter">lighter</option>
              </select>
              <br/>
              Font: <select value={this.state.font} onChange={e => this.onStateChange('font', e)}>
                <option value="serif">serif</option>
                <option value="sans-serif">sans-serif</option>
                <option value="cursive">cursive</option>
                <option value="fantasy">fantasy</option>
                <option value="monospace">monospace</option>
              </select>
              <br/>
              Font Size: <input type="range" min="0" max="200" step="1" value={this.state.fontSize} onChange={e => this.onStateChange('fontSize', e)}/> {this.state.fontSize}px
              <br/>
              Font Color: <ColorPicker onColorChange={this.onColorChange}/>
              <br/>
              Font Baseline: <select value={this.state.fontBaseline} onChange={e => this.onStateChange('fontBaseline', e)}>
                <option value="top">top</option>
                <option value="hanging">hanging</option>
                <option value="middle">middle</option>
                <option value="alphabetic">alphabetic</option>
                <option value="ideographic">ideographic</option>
                <option value="bottom">bottom</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Index;
