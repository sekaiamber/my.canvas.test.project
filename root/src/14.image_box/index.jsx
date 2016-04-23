const React = require('react');
const $ = require('jquery');
const CanvasApp = require('./canvasapp');
const Support = require('../components/support');
const ColorPicker = require('../components/colorPicker/colorPicker');
require('./index.scss');

// noop
const noop = function () { };

// apps
const app = require('./app/drawScreen');
const update = require('./app/update');

// component factory
const componentFactory = require('./app/componentsFactory');
const components = require('./componentsConfig');

var Index = React.createClass({
  getInitialState() {
    // image
    let image_loli = new Image();
    image_loli.src = require('./../../assets/images/loli_1.png');
    var self = this;
    image_loli.addEventListener('load', function () {
      self.setState({ loading: false });
    }, false);
    let ret = {
      theme: 'light',
      loading: true,
      images: {
        loli: image_loli
      },
      components: components,
    };
    for (var key in ret.components) {
      if (ret.components.hasOwnProperty(key)) {
        var component = new componentFactory[ret.components[key].component](ret.components[key].option);
        ret.components[key] = component;
      }
    }
    return ret;
  },
  onStateChange(key, e, type) {
    var obj = {};
    switch (type) {
      case 'color':
        obj[key] = e.hex;
        break;
      case 'checkbox':
        obj[key] = e.target.checked;
        break;
      default:
        obj[key] = e.target.value;
        break;
    }
    this.setState(obj);
  },
  render: function () {
    let canvasOne = {
      id: 'canvasOne',
      width: 500,
      height: 300,
    }
    let CanvasData = {}
    for (var key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        CanvasData[key] = this.state[key];
      }
    }
    return (
      <div>
        <h1>14. Image Box</h1>
        <Support />
        <div className="opt">
          <CanvasApp {...CanvasData} update={update} render={app} />
          <div className="form-area">
            <form>
              <fieldset>
                <legend>Text</legend>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Index;
