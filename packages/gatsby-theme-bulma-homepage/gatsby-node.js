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
