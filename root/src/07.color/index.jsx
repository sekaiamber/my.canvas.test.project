const React = require('react');
const $ = require('jquery');
const CanvasApp = require('./canvasapp');
const Support = require('../components/support');

// noop
const noop = function() {};

// apps
const app = require('./app/drawScreen');

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
        <h1>07. Color</h1>
        <Support />
        <CanvasApp update={noop} render={app} />
      </div>
    )
  }
});

module.exports = Index;
