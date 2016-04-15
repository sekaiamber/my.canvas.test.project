const React = require('react');
const $ = require('jquery');
const CanvasApp = require('./canvasapp');
const Support = require('../components/support');

// noop
const noop = function() {};

// app1
const drawScreen1 = require('./app1/drawScreen');

// app2
const drawScreen2 = require('./app2/drawScreen');


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
        <h1>04. Shape</h1>
        <Support />
        <CanvasApp update={noop} render={drawScreen1} />
        <CanvasApp update={noop} render={drawScreen2} />
      </div>
    )
  }
});

module.exports = Index;
