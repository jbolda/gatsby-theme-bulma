module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          '.cache/gatsby-theme-bulma',
        ]
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
