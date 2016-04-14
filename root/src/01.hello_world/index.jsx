const React = require('react');
const $ = require('jquery');
const canvasApp = require('./canvasapp');
const Support = require('../components/support');

var Index = React.createClass({
  getInitialState() {
    $('document').ready(canvasApp);
    return {
      theme: 'light',
    };
  },
  render: function () {
    let canvasOne = {
      id: 'canvasOne',
      width: 500,
      height: 300,
    }
    return (
      <div>
        <h1>01. Hello World</h1>
        <Support />
        <canvas {...canvasOne}>
          Your browser does not support HTML5 Canvas
        </canvas>
      </div>
    )
  }
});

module.exports = Index;
