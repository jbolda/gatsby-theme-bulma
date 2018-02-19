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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostPublished = function (_React$Component) {
  (0, _inherits3.default)(PostPublished, _React$Component);

  function PostPublished() {
    (0, _classCallCheck3.default)(this, PostPublished);
    return (0, _possibleConstructorReturn3.default)(this, (PostPublished.__proto__ || (0, _getPrototypeOf2.default)(PostPublished)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostPublished, [{
    key: "render",
    value: function render() {
      var frontmatter = this.props.frontmatter;


      if (frontmatter.updated == null) {
        var published = _react2.default.createElement(
          "div",
          { className: "date-published" },
          _react2.default.createElement(
            "em",
            null,
            "published " + frontmatter.written
          )
        );
      } else {
        var published = _react2.default.createElement(
          "div",
          { className: "date-published" },
          _react2.default.createElement(
            "em",
            null,
            "originally published " + frontmatter.written + "\n              and updated " + frontmatter.updated
          )
        );
      }

      return _react2.default.createElement(
        "div",
        { className: "container content" },
        published
      );
    }
  }]);
  return PostPublished;
}(_react2.default.Component);

exports.default = PostPublished;