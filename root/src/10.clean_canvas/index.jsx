const React = require('react');
const $ = require('jquery');
const CanvasApp = require('./canvasapp');
const Support = require('../components/support');

// noop
const noop = function() {};

// apps
const app = require('./app/drawScreen');
const update = require('./app/update');

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
        <h1>10. Clean Canvas</h1>
        <Support />
        <CanvasApp data={{yOffset: 0}} update={update} render={app} />
      </div>
    )
  }
});

module.exports = Index;
