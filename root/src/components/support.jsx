const React = require('react');

var Support = React.createClass({
  getInitialState() {
    return {
      support: Modernizr.canvas,
    };
  },
  render: function () {
    return this.state.support ? null : (
      <div>
        Your browser does not support HTML5 Canvas
      </div>
    )
  }
});

module.exports = Support;
