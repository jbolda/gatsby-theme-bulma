const Debug = require('debug')
const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === `MarkdownRemark`) {
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
      createNodeField({ node, name: `sourceInstanceName`, value: fileNode.sourceInstanceName})
    } catch (error) {
      // nil
    }

  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const mdBlogPost = require.resolve(`./src/components/Simple/templates/SimpleBlogPostTemplate.js`)

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(filter: {fields: {sourceInstanceName: {eq: "articles"}}}) {
              edges {
                node {
                  frontmatter {
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

        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: edge.node.frontmatter.path, // required
            component: mdBlogPost,
            context: {
              slug: edge.node.fields.slug,
              heroImage: edge.node.frontmatter.hero || `hero.jpg`,
            },
          })
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
