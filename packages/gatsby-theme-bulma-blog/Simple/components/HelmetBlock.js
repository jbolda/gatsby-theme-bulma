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

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelmetBlock = function (_React$Component) {
  (0, _inherits3.default)(HelmetBlock, _React$Component);

  function HelmetBlock() {
    (0, _classCallCheck3.default)(this, HelmetBlock);
    return (0, _possibleConstructorReturn3.default)(this, (HelmetBlock.__proto__ || (0, _getPrototypeOf2.default)(HelmetBlock)).apply(this, arguments));
  }

  (0, _createClass3.default)(HelmetBlock, [{
    key: 'render',
    value: function render() {
      var frontmatter = this.props.frontmatter;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, {
          title: frontmatter.title + " | Jacob Bolda",
          meta: [{ name: 'description', content: frontmatter.description }, { property: 'og:url', content: 'https://www.jacobbolda.com/' + frontmatter.path }, { property: 'og:description', content: frontmatter.description }, { property: 'og:type', content: 'article' }, { property: 'og:article:author', content: 'Jacob Bolda' }, { property: 'og:article:published_time', content: (0, _moment2.default)(frontmatter.written, 'YYYY-MM-DD') }, { property: 'og:article:modified_time', content: (0, _moment2.default)(frontmatter.updated, 'YYYY-MM-DD') }, { property: 'og:article:tag', content: frontmatter.category }, { name: 'twitter:label1', content: 'Category' }, { name: 'twitter:data1', content: frontmatter.category }, { name: 'twitter:label2', content: 'Written' }, { name: 'twitter:data2', content: frontmatter.written }]
        })
      );
    }
  }]);
  return HelmetBlock;
}(_react2.default.Component);

exports.default = HelmetBlock;