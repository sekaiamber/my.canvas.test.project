const React = require('react');
const $ = require('jquery');
const CanvasApp = require('./canvasapp');
const Support = require('../components/support');

// noop
const noop = function() {};

// apps
const rotate = require('./rotate/drawScreen');
const scale = require('./scale/drawScreen');
const rotateandscale = require('./rotateandscale/drawScreen');
const rotateandscale2 = require('./rotateandscale2/drawScreen');
const rotateandscale_update2 = require('./rotateandscale2/update');

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
        <h1>06. Transform</h1>
        <Support />
        <h2>Rotate</h2>
        <CanvasApp update={noop} render={rotate} />
        <h2>Scale</h2>
        <CanvasApp update={noop} render={scale} />
        <h2>Rotate & Scale</h2>
        <CanvasApp update={noop} render={rotateandscale} />
        <h2>Rotate & Scale animation</h2>
        <CanvasApp data={{angle: 0, scale: 1, scaled: 1}} update={rotateandscale_update2} render={rotateandscale2} />
      </div>
    )
  }
});

module.exports = Index;
