"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageQuery = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  query SimpleBlogPostTemplatePostBySlug($slug: String!) {\n    post: markdownRemark(fields: { slug: { eq: $slug } }) {\n      html\n      ...MarkdownBlogPost_frontmatter\n    }\n    hero: file(relativePath: {eq: \"hero.jpg\"}) {\n      childImageSharp {\n        sizes(maxWidth: 1920) {\n          ...GatsbyImageSharpSizes_tracedSVG\n        }\n      }\n    }\n    site {\n      siteMetadata {\n        siteTitle\n        siteDescr\n        siteAuthor\n        siteEmailUrl\n        siteEmailPretty\n        siteTwitterUrl\n        siteTwitterPretty\n      }\n    }\n  }\n"], ["\n  query SimpleBlogPostTemplatePostBySlug($slug: String!) {\n    post: markdownRemark(fields: { slug: { eq: $slug } }) {\n      html\n      ...MarkdownBlogPost_frontmatter\n    }\n    hero: file(relativePath: {eq: \"hero.jpg\"}) {\n      childImageSharp {\n        sizes(maxWidth: 1920) {\n          ...GatsbyImageSharpSizes_tracedSVG\n        }\n      }\n    }\n    site {\n      siteMetadata {\n        siteTitle\n        siteDescr\n        siteAuthor\n        siteEmailUrl\n        siteEmailPretty\n        siteTwitterUrl\n        siteTwitterPretty\n      }\n    }\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SimpleChrome = require("./SimpleChrome");

var _SimpleChrome2 = _interopRequireDefault(_SimpleChrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleBlogPostTemplate = function (_React$Component) {
  (0, _inherits3.default)(SimpleBlogPostTemplate, _React$Component);

  function SimpleBlogPostTemplate() {
    (0, _classCallCheck3.default)(this, SimpleBlogPostTemplate);
    return (0, _possibleConstructorReturn3.default)(this, (SimpleBlogPostTemplate.__proto__ || (0, _getPrototypeOf2.default)(SimpleBlogPostTemplate)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleBlogPostTemplate, [{
    key: "render",
    value: function render() {
      var _props$data$post = this.props.data.post,
          html = _props$data$post.html,
          frontmatter = _props$data$post.frontmatter;


      return _react2.default.createElement(
        _SimpleChrome2.default,
        {
          post: this.props.data.post,
          hero: this.props.data.hero,
          sitemetadata: this.props.data.site.siteMetadata,
          location: this.props.location
        },
        _react2.default.createElement("div", { className: "content", dangerouslySetInnerHTML: { __html: html } })
      );
    }
  }]);
  return SimpleBlogPostTemplate;
}(_react2.default.Component);

exports.default = SimpleBlogPostTemplate;
var pageQuery = exports.pageQuery = graphql(_templateObject);