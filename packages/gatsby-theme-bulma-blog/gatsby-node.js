const Debug = require('debug')
const path = require('path')

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  let slug
  if (
    node.internal.type === `MarkdownRemark` ||
    node.internal.type === `JavascriptFrontmatter`
  ) {
    try {
      const fileNode = getNode(node.parent)
      const parsedFilePath = path.parse(fileNode.relativePath)
      if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
      } else if (parsedFilePath.dir === ``) {
        slug = `/${parsedFilePath.name}/`
      } else {
        slug = `/${parsedFilePath.dir}/`
      }
  
      // Add slug as a field on the node.
      createNodeField({ node, name: `slug`, value: slug })
    } catch (error) {
      // nil
    }

  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const mdBlogPost = path.resolve(`node_modules/gatsby-theme-bulma-blog/src/components/Simple/SimpleBlogPostTemplate.js`)

    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    layoutType
                    path
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          console.log(result)
          reject(result.errors)
        }

        // Create from markdown
        result.data.allMarkdownRemark.edges.forEach(edge => {
          const frontmatter = edge.node.frontmatter
          if (frontmatter.layoutType === `post`) {
            createPage({
              path: frontmatter.path, // required
              component: mdBlogPost,
              context: {
                slug: edge.node.fields.slug,
                heroImage: frontmatter.hero || `hero.jpg`,
              },
            })
          }
        })

        return
      })
    )
  })
}

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
  const debug = Debug('gatsby-theme-bulma:onCreateWebpackConfig')
  debug('ensuring Webpack will compile theme code')
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve('gatsby-theme-bulma-blog')),
          use: [loaders.js()],
        },
      ],
    },
  })
}
