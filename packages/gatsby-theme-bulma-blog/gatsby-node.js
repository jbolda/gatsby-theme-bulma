"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require("path");

exports.onCreateNode = function (_ref) {
  var node = _ref.node,
      boundActionCreators = _ref.boundActionCreators,
      getNode = _ref.getNode;
  var createNodeField = boundActionCreators.createNodeField;

  var slug = void 0;
  if (node.internal.type === "MarkdownRemark" || node.internal.type === "JavascriptFrontmatter") {
    try {
      var fileNode = getNode(node.parent);
      var parsedFilePath = path.parse(fileNode.relativePath);
      if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = "/" + parsedFilePath.dir + "/" + parsedFilePath.name + "/";
      } else if (parsedFilePath.dir === "") {
        slug = "/" + parsedFilePath.name + "/";
      } else {
        slug = "/" + parsedFilePath.dir + "/";
      }

      // Add slug as a field on the node.
      createNodeField({ node: node, name: "slug", value: slug });
    } catch (error) {
      // nil
    }
  }
};

exports.createPages = function (_ref2) {
  var graphql = _ref2.graphql,
      boundActionCreators = _ref2.boundActionCreators;
  var createPage = boundActionCreators.createPage;


  return new _promise2.default(function (resolve, reject) {
    var pages = [];
    var mdBlogPost = path.resolve("node_modules/gatsby-theme-bulma-blog/Simple/SimpleBlogPostTemplate.js");

    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(graphql("\n          {\n            allMarkdownRemark {\n              edges {\n                node {\n                  frontmatter {\n                    layoutType\n                    path\n                  }\n                  fields {\n                    slug\n                  }\n                }\n              }\n            }\n          }\n        ").then(function (result) {
      if (result.errors) {
        console.log(result.errors);
        console.log(result);
        reject(result.errors);
      }

      // Create from markdown
      result.data.allMarkdownRemark.edges.forEach(function (edge) {
        var frontmatter = edge.node.frontmatter;
        if (frontmatter.layoutType === "post") {
          createPage({
            path: frontmatter.path, // required
            component: mdBlogPost,
            context: {
              slug: edge.node.fields.slug,
              heroImage: "hero.jpg" // this won't work, query allFile and get relative image
            }
          });
        }
      });

      return;
    }));
  });
};