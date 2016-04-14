const React = require('react');

function supportRequestAnimationFrame() {
  window.requestAnimationFrame = (() => {
    return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
  })();
}

var Support = React.createClass({
  getInitialState() {
    supportRequestAnimationFrame();
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
