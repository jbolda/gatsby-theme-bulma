module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          '.cache/gatsby-theme-bulma-core',
        ]
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
