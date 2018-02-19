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

var _gatsbyLink = require("gatsby-link");

var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

var _palette = require("../../palette.json");

var _palette2 = _interopRequireDefault(_palette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleTopNav = function (_React$Component) {
  (0, _inherits3.default)(SimpleTopNav, _React$Component);

  function SimpleTopNav() {
    (0, _classCallCheck3.default)(this, SimpleTopNav);
    return (0, _possibleConstructorReturn3.default)(this, (SimpleTopNav.__proto__ || (0, _getPrototypeOf2.default)(SimpleTopNav)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleTopNav, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "nav",
        { className: "navbar is-fixed-top", role: "navigation", "aria-label": "main navigation" },
        _react2.default.createElement(
          "div",
          { className: "navbar-brand" },
          _react2.default.createElement(
            _gatsbyLink2.default,
            {
              to: "/",
              className: "navbar-item",
              style: this.props.location.pathname == '/' ? { backgroundColor: _palette2.default.colors.P5 } : {}
            },
            _react2.default.createElement(
              "span",
              {
                className: "title",
                style: this.props.location.pathname == '/' ? { color: _palette2.default.colors.P2 } : { color: _palette2.default.colors.P5 }
              },
              "B"
            )
          ),
          _react2.default.createElement(
            _gatsbyLink2.default,
            {
              to: "/",
              className: "navbar-item",
              style: this.props.location.pathname == '/' ? { backgroundColor: _palette2.default.colors.P5, color: _palette2.default.colors.P2 } : {}
            },
            "Articles"
          ),
          _react2.default.createElement(
            _gatsbyLink2.default,
            {
              to: "/about/",
              className: "navbar-item",
              style: this.props.location.pathname == '/about/' ? { backgroundColor: _palette2.default.colors.P5, color: _palette2.default.colors.P2 } : {}
            },
            "About"
          ),
          _react2.default.createElement(
            _gatsbyLink2.default,
            {
              to: "/contact/",
              className: "navbar-item",
              style: this.props.location.pathname == '/contact/' ? { backgroundColor: _palette2.default.colors.P5, color: _palette2.default.colors.P2 } : {}
            },
            "Contact"
          )
        )
      );
    }
  }]);
  return SimpleTopNav;
}(_react2.default.Component);

exports.default = SimpleTopNav;