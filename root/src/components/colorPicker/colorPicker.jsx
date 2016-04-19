var React = require('react');
let classnames = require('classnames');
let $ = require('jquery');
import { ChromePicker } from 'react-color';
require('./colorPicker.scss');

const ColorPicker = React.createClass({
  getInitialState() {
    var eptfun = function() {};
    var self = this;
    $('body').click(function(e) {
        var target = e.target;
        var isClose = true;
        while(target.tagName.toLowerCase() != "body") {
            if ($(target).hasClass('colorpicker')) {
                isClose = false;
            }
            target = target.parentNode;
        }
        if (isClose && self.state.display) {
            self.setState({ display: false });
        }
    });
    return {
      display: false,
      color: {r: 0, g: 0, b: 0, a: 1}
    };
  },
  setColor(color) {
    this.setState({color: color});
  },
  handleClick() {
    this.setState({ display: !this.state.display });
  },
  handleChange(c) {
      this.setState({color: c.rgb});
      if (this.props.onColorChange) {
        this.props.onColorChange(c);
      }
  },
  render() {
    let containerClasses = classnames('colorpicker-container', {'show': this.state.display})
    return (
      <div className="colorpicker">
        <div className="colorpicker-bt" onClick={ this.handleClick }>
            <div className="colorpicker-bt-color" style={{background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`}}></div>
        </div>
        <div className={containerClasses}>
            <ChromePicker ref="colorpicker"
                color= {this.state.color}
                onChange={ this.handleChange } />
        </div>
      </div>
    );
  }
});


module.exports = ColorPicker;