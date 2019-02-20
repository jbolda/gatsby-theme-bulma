// const { withThemePath } = require('gatsby-theme')
const path = require("path");
const Debug = require("debug");

const withThemePath = (relativePath, root) => {
  const debug = Debug("gatsby-theme:with-theme-path");
  debug("resolving", relativePath);
  let pathResolvedPath = path.resolve(relativePath);
  let finalPath = pathResolvedPath;

  try {
    debug("checking", pathResolvedPath);
    // check if the user's site has the file
    require.resolve(pathResolvedPath);
    finalPath = pathResolvedPath;
  } catch (e) {
    try {
      // if the user hasn't implemented the file,
      finalPath = path.resolve(path.dirname(root), relativePath);
    } catch (e) {
      console.log(e);
      return relativePath;
    }
  }

  debug("using", finalPath);
  return finalPath;
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [".cache/gatsby-theme-bulma"]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: withThemePath(
          "./src/utils/typography.js",
          require.resolve(".")
        )
      }
    }
  ]
};
