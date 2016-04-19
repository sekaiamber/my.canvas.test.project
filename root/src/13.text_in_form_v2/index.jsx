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
      text: 'HHHHHHHHH',
      fillorstroke: 'fill',
      fontStyle: 'normal',
      fontWeight: 'normal',
      font: 'serif',
      fontSize: 120,
      fontColorFillType: 'linear',
      fontColor1: '000000',
      fontColor2: '000000',
      fontBaseline: 'top',
      alpha: 1,
      shadowColor: '000000',
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowBlur: 2,
    };
  },
  onStateChange(key, e, color) {
    var obj = {};
    obj[key] = color ? e.hex : e.target.value;
    this.setState(obj);
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
      fontColorFillType: this.state.fontColorFillType,
      fontColor1: this.state.fontColor1,
      fontColor2: this.state.fontColor2,
      fontBaseline: this.state.fontBaseline,
      alpha: this.state.alpha,
      shadowColor: this.state.shadowColor,
      shadowOffsetX: this.state.shadowOffsetX,
      shadowOffsetY: this.state.shadowOffsetY,
      shadowBlur: this.state.shadowBlur,
    }
    return (
      <div>
        <h1>13. Text In Form 2.0</h1>
        <Support />
        <div className="opt">
          <CanvasApp {...CanvasData} update={noop} render={app} />
          <div className="form-area">
            <form>
              <fieldset>
                <legend>Text</legend>
                <input type="textBox" placeholder="Your text" value={this.state.text} onChange={e => this.onStateChange('text', e)}/>
              </fieldset>
              <fieldset>
                <legend>Canvas</legend>
                Alpha: <input type="range" min="0.0" max="1.0" step="0.01" value={this.state.alpha} onChange={e => this.onStateChange('alpha', e)}/> {this.state.alpha}
                <br/>
                Shadow Color: <ColorPicker onColorChange={v => this.onStateChange('shadowColor', v, 'color')}/>
                <br/>
                Shadow X: <input type="range" min="-100" max="100" step="1" value={this.state.shadowOffsetX} onChange={e => this.onStateChange('shadowOffsetX', e)}/> {this.state.shadowOffsetX}
                <br/>
                Shadow Y: <input type="range" min="-100" max="100" step="1" value={this.state.shadowOffsetY} onChange={e => this.onStateChange('shadowOffsetY', e)}/> {this.state.shadowOffsetY}
                <br/>
                Shadow Blur: <input type="range" min="1" max="100" step="1" value={this.state.shadowBlur} onChange={e => this.onStateChange('shadowBlur', e)}/> {this.state.shadowBlur}
              </fieldset>
              <fieldset>
                <legend>Font</legend>
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
                Font Baseline: <select value={this.state.fontBaseline} onChange={e => this.onStateChange('fontBaseline', e)}>
                  <option value="top">top</option>
                  <option value="hanging">hanging</option>
                  <option value="middle">middle</option>
                  <option value="alphabetic">alphabetic</option>
                  <option value="ideographic">ideographic</option>
                  <option value="bottom">bottom</option>
                </select>
                <br/>
                Font Color Fill Type: <select value={this.state.fontColorFillType} onChange={e => this.onStateChange('fontColorFillType', e)}>
                  <option value="linear">linear</option>
                  <option value="radial">radial</option>
                  <option value="image">image</option>
                </select>
                <br/>
                Font Color 1: <ColorPicker onColorChange={v => this.onStateChange('fontColor1', v, 'color')}/>
                <br/>
                Font Color 2: <ColorPicker onColorChange={v => this.onStateChange('fontColor2', v, 'color')}/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Index;
