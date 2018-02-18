const path = require(`path`)

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
    const mdBlogPost = path.resolve(`./plugins/gatsby-theme-bulma-blog/Simple/SimpleBlogPostTemplate.js`)

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
          let frontmatter = edge.node.frontmatter
          if (frontmatter.layoutType === `post`) {
            createPage({
              path: frontmatter.path, // required
              component: mdBlogPost,
              context: {
                slug: edge.node.fields.slug,
                heroImage: `hero.jpg`, // this won't work, query allFile and get relative image
              },
            })
          }
        })



        return
      })
    )
  })
}
