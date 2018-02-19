"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

require("./css/base.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MasterLayout = function (_React$Component) {
  (0, _inherits3.default)(MasterLayout, _React$Component);

  function MasterLayout() {
    (0, _classCallCheck3.default)(this, MasterLayout);
    return (0, _possibleConstructorReturn3.default)(this, (MasterLayout.__proto__ || (0, _getPrototypeOf2.default)(MasterLayout)).apply(this, arguments));
  }

  (0, _createClass3.default)(MasterLayout, [{
    key: "render",
    value: function render() {
      var sitemetadata = this.props.sitemetadata;


      return _react2.default.createElement(
        "div",
        { className: "MasterLayout is-light" },
        _react2.default.createElement(_reactHelmet2.default, {
          defaultTitle: sitemetadata.siteTitle,
          title: sitemetadata.siteTitle,
          meta: [{ name: "description", content: sitemetadata.siteDescr }, { name: "keywords", content: "articles" }]
        })
      );
    }
  }]);
  return MasterLayout;
}(_react2.default.Component);

exports.default = MasterLayout;