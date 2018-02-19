'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MasterLayout = require('gatsby-theme-bulma/MasterLayout');

var _MasterLayout2 = _interopRequireDefault(_MasterLayout);

var _SimpleTopNav = require('./components/SimpleTopNav');

var _SimpleTopNav2 = _interopRequireDefault(_SimpleTopNav);

var _heartWhite = require('./assets/heart-white.svg');

var _heartWhite2 = _interopRequireDefault(_heartWhite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleLayout = function (_React$Component) {
  (0, _inherits3.default)(SimpleLayout, _React$Component);

  function SimpleLayout() {
    (0, _classCallCheck3.default)(this, SimpleLayout);
    return (0, _possibleConstructorReturn3.default)(this, (SimpleLayout.__proto__ || (0, _getPrototypeOf2.default)(SimpleLayout)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleLayout, [{
    key: 'render',
    value: function render() {
      var sitemetadata = this.props.sitemetadata;


      return _react2.default.createElement(
        _MasterLayout2.default,
        { sitemetadata: sitemetadata, id: 'SimpleLayout' },
        _react2.default.createElement(_SimpleTopNav2.default, { sitemetadata: sitemetadata, location: this.props.location }),
        this.props.children,
        _react2.default.createElement(
          'section',
          { className: 'footer' },
          _react2.default.createElement(
            'div',
            { className: 'container content has-text-centered' },
            _react2.default.createElement(
              'p',
              { className: 'copyright' },
              '\xA9 All rights reserved.'
            ),
            _react2.default.createElement(
              'p',
              { className: 'copyright' },
              'Made with ',
              _react2.default.createElement(Heart, { icon: _heartWhite2.default, alt: 'heart' }),
              ' by',
              ' ',
              _react2.default.createElement(
                'a',
                { className: 'copyright', href: sitemetadata.siteTwitterUrl },
                'Jacob Bolda'
              )
            )
          )
        )
      );
    }
  }]);
  return SimpleLayout;
}(_react2.default.Component);

var Heart = function Heart(_ref) {
  var icon = _ref.icon,
      alt = _ref.alt;
  return _react2.default.createElement('img', {
    src: icon,
    alt: alt,
    style: {
      height: '25px',
      marginBottom: '-7px'
    }
  });
};

exports.default = SimpleLayout;