const Debug = require("debug");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNodeField, createNode } = actions;
  const fileNode = getNode(node.parent);

  let slug;
  if (node.internal.type === `MarkdownRemark`) {
    try {
      const parsedFilePath = path.parse(fileNode.relativePath);

      if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === ``) {
        slug = `/${parsedFilePath.name}/`;
      } else {
        slug = `/${parsedFilePath.dir}/`;
      }

      // Add slug as a field on the node.
      createNodeField({ node, name: `slug`, value: slug });
      createNodeField({
        node,
        name: `sourceInstanceName`,
        value: fileNode.sourceInstanceName
      });
      createNodeField({
        node,
        name: `heroImageSet`,
        value: !!node.frontmatter.heroImage
      });
    } catch (error) {
      // nil
      console.log(error);
    }
  }

  if (
    (node.internal.type === `MarkdownRemark` || node.internal.type === `JavascriptFrontmatter`) &&
    (fileNode.sourceInstanceName === `blog` || fileNode.sourceInstanceName === `articles`)
    ) {
    const nodeData = {
      title: node.frontmatter.title,
      written: node.frontmatter.written,
      updated: node.frontmatter.updated,
      path: node.frontmatter.path,
      category: node.frontmatter.category,
      description: node.frontmatter.description,
      heroImage: node.frontmatter.heroImage
    }

    const blogNode = {
      id: createNodeId(`${node.id} >>> BlogPost`),
      children: [],
      parent: node.id,
      frontmatter: nodeData,
      internal: {
        contentDigest: JSON.stringify(nodeData),
        type: `BlogPost`,
      },
    }

    createNode(blogNode)
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const mdBlogPost = require.resolve(
      `./src/Simple/templates/SimpleBlogPostTemplate.js`
    );
    const mdBlogPostWithoutImage = require.resolve(
      `./src/Simple/templates/SimpleBlogPostTemplateWithoutImage.js`
    );

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { fields: { sourceInstanceName: { eq: "articles" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                  fields {
                    slug
                    heroImageSet
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          console.log(result);
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.frontmatter.path) {
            createPage({
              path: edge.node.frontmatter.path, // required
              component: edge.node.fields.heroImageSet
                ? mdBlogPost
                : mdBlogPostWithoutImage,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
        });

        createPage({
          path: '/articles/',
          component: require.resolve(`./src/Simple/templates/SimpleBlogPostList.js`)
        })

        return;
      })
    );
  });
};

/**
 * When shipping NPM modules, they typically need to be either
 * pre-compiled or the user needs to add bundler config to process the
 * files. Gatsby lets us ship the bundler config *with* the theme, so
 * we never need a lib-side build step.  Since we dont pre-compile the
 * theme, this is how we let webpack know how to process files.
 * snipped from gatsby-theme-example at
 * https://github.com/ChristopherBiscardi/gatsby-theme-examples/blob/master/themes/gatsby-theme-blog/gatsby-node.js
 */
exports.onCreateWebpackConfig = ({ stage, loaders, plugins, actions }) => {
  const debug = Debug("gatsby-theme-bulma:onCreateWebpackConfig");
  debug("ensuring Webpack will compile theme code");
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve("gatsby-theme-bulma-blog")),
          use: [loaders.js()]
        }
      ]
    }
  });
};
