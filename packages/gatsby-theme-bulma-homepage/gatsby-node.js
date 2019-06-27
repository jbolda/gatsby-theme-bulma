const Debug = require("debug");
const path = require("path");

exports.createPages = ({ actions, store }) => {
  const { createPage } = actions;

  const hasBlogInstalled = !!store.getState().nodesByType.get(`BlogPost`);

  return new Promise((resolve, reject) => {
    let homepage;
    const plugin = store
      .getState()
      .themes.themes.reduce(
        (acc, plugin) =>
          plugin.themeName === `gatsby-theme-bulma-blog` ? plugin : acc,
        {}
      );

    if (hasBlogInstalled || !plugin.themeConfig.showArticlesOnHomepage) {
      homepage = require.resolve(`./src/Hero/HeroTemplatePlain.js`);
    } else {
      homepage = require.resolve(`./src/Hero/HeroTemplateWithArticles.js`);
    }

    resolve(
      createPage({
        path: "/", // required
        component: homepage
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
          include: path.dirname(require.resolve("gatsby-theme-bulma-homepage")),
          use: [loaders.js()]
        }
      ]
    }
  });
};
