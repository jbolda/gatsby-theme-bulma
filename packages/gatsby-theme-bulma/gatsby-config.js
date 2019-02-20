module.exports = {
  __experimentalThemes: [
    { resolve: `gatsby-theme-bulma-core`, options: { root: __dirname } },
    { resolve: `gatsby-theme-bulma-layout`, options: { root: __dirname } },
    { resolve: `gatsby-theme-bulma-homepage`, options: { root: __dirname } },
    { resolve: `gatsby-theme-bulma-blog`, options: { root: __dirname } }
  ],
  plugins: []
};
