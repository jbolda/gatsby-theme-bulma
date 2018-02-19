"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blogPostFragment = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  fragment MarkdownBlogPost_frontmatter on MarkdownRemark {\n    frontmatter {\n      title\n      path\n      layoutType\n      written(formatString: \"MMMM Do YYYY\")\n      updated(formatString: \"MMMM Do YYYY\")\n      category\n      description\n    }\n  }\n"], ["\n  fragment MarkdownBlogPost_frontmatter on MarkdownRemark {\n    frontmatter {\n      title\n      path\n      layoutType\n      written(formatString: \"MMMM Do YYYY\")\n      updated(formatString: \"MMMM Do YYYY\")\n      category\n      description\n    }\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SimpleBlogPostLayout = require("./SimpleBlogPostLayout");

var _SimpleBlogPostLayout2 = _interopRequireDefault(_SimpleBlogPostLayout);

var _HelmetBlock = require("./components/HelmetBlock");

var _HelmetBlock2 = _interopRequireDefault(_HelmetBlock);

var _PostPublished = require("./components/PostPublished");

var _PostPublished2 = _interopRequireDefault(_PostPublished);

var _gatsbyImage = require("gatsby-image");

var _gatsbyImage2 = _interopRequireDefault(_gatsbyImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleChrome = function (_React$Component) {
  (0, _inherits3.default)(SimpleChrome, _React$Component);

  function SimpleChrome() {
    (0, _classCallCheck3.default)(this, SimpleChrome);
    return (0, _possibleConstructorReturn3.default)(this, (SimpleChrome.__proto__ || (0, _getPrototypeOf2.default)(SimpleChrome)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleChrome, [{
    key: "render",
    value: function render() {
      var frontmatter = this.props.post.frontmatter;

      var HeroImage = function HeroImage(props) {
        if (props.hero) {
          return _react2.default.createElement(
            "section",
            { className: "hero is-medium" },
            _react2.default.createElement(
              "div",
              { className: "container-fluid" },
              _react2.default.createElement(_gatsbyImage2.default, { className: "image", sizes: props.hero.childImageSharp.sizes })
            )
          );
        } else {
          return _react2.default.createElement("div", null);
        }
      };

      var adjustTitleStyle = this.props.hero ? {
        color: "white",
        textShadow: ["1px 1px 0 #000", "-1px -1px 0 #000", "1px -1px 0 #000", "-1px 1px 0 #000", "1px 1px 0 #000"]
      } : {};
      var adjustPostStyle = this.props.hero ? { marginTop: "-30%" } : {};

      return _react2.default.createElement(
        _SimpleBlogPostLayout2.default,
        { sitemetadata: this.props.sitemetadata, location: this.props.location },
        _react2.default.createElement(HeroImage, { hero: this.props.hero }),
        _react2.default.createElement(
          "section",
          { className: "section", style: (0, _extends3.default)({ paddingBottom: "1rem" }, adjustPostStyle) },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "h1",
              { className: "title is-1 is-hidden-mobile", style: (0, _extends3.default)({ fontSize: "5rem" }, adjustTitleStyle) },
              frontmatter.title
            ),
            _react2.default.createElement(
              "h1",
              { className: "title is-hidden-tablet", style: (0, _extends3.default)({ fontSize: "2rem" }, adjustTitleStyle) },
              frontmatter.title
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "section", style: { paddingTop: "0px" } },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "box" },
              this.props.children,
              _react2.default.createElement(_PostPublished2.default, { frontmatter: frontmatter })
            )
          )
        ),
        _react2.default.createElement(_HelmetBlock2.default, { frontmatter: frontmatter })
      );
    }
  }]);
  return SimpleChrome;
}(_react2.default.Component);

exports.default = SimpleChrome;
var blogPostFragment = exports.blogPostFragment = graphql(_templateObject);