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

var _SimpleNav = require("gatsby-theme-bulma-layout/Simple/SimpleNav");

var _SimpleNav2 = _interopRequireDefault(_SimpleNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleBlogPostLayout = function (_React$Component) {
  (0, _inherits3.default)(SimpleBlogPostLayout, _React$Component);

  function SimpleBlogPostLayout() {
    (0, _classCallCheck3.default)(this, SimpleBlogPostLayout);
    return (0, _possibleConstructorReturn3.default)(this, (SimpleBlogPostLayout.__proto__ || (0, _getPrototypeOf2.default)(SimpleBlogPostLayout)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleBlogPostLayout, [{
    key: "render",
    value: function render() {
      var sitemetadata = this.props.sitemetadata;


      return _react2.default.createElement(
        _SimpleNav2.default,
        { sitemetadata: sitemetadata, location: this.props.location },
        this.props.children,
        _react2.default.createElement(
          "section",
          { className: "section" },
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "p",
              null,
              sitemetadata.siteDescr,
              _react2.default.createElement(
                "a",
                { href: sitemetadata.siteTwitterUrl },
                _react2.default.createElement("br", null),
                " ",
                _react2.default.createElement(
                  "strong",
                  null,
                  sitemetadata.siteAuthor
                ),
                " on Twitter"
              )
            )
          )
        )
      );
    }
  }]);
  return SimpleBlogPostLayout;
}(_react2.default.Component);

exports.default = SimpleBlogPostLayout;

/*
can't seem to get the fragment to work here, not a location gatsby expects?
export const pageQuery = graphql`
fragment SimpleSiteMetadata on Site {
    siteMetadata {
      siteTitle
      siteDescr
      siteAuthor
      siteEmailUrl
      siteEmailPretty
      siteTwitterUrl
      siteTwitterPretty
    }
}
`
*/