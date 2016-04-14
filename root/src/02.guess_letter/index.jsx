const React = require('react');
const $ = require('jquery');
const CanvasApp = require('./canvasapp');
const Support = require('../components/support');

var Index = React.createClass({
  getInitialState() {
    // $('document').ready(canvasApp);
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
        <h1>02. Guess Letter</h1>
        <Support />
        <CanvasApp />
      </div>
    )
  }
});

module.exports = Index;
