const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (
    node.internal.type === `MarkdownRemark` ||
    node.internal.type === `JavascriptFrontmatter`
  ) {
    try {
      const fileNode = getNode(node.parent);
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
    } catch (error) {
      // nil
    }
  }

  if (node.internal.type === `Airtable` && node.table === `Recipes`) {
    slug = `/${node.data.Name.replace(/ /g, "-")
      .replace(/[,&]/g, "")
      .toLowerCase()}/`;

    // Add slug as a field on the node.
    createNodeField({ node, name: `slug`, value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const mdSimplePage = path.resolve(`src/templates/mdSimplePage.js`);

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
        `
      ).then(result => {
        if (result.errors) {
          result.errors.forEach(error => {
            console.log(error);
          });

          reject(result.errors);
        }

        // Create from markdown
        result.data.allMarkdownRemark.edges.forEach(edge => {
          let frontmatter = edge.node.frontmatter;
          if (frontmatter.layoutType === `page`) {
            createPage({
              path: frontmatter.path, // required
              component: mdSimplePage,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
        });

        return;
      })
    );
  });
};
