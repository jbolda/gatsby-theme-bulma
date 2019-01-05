const Debug = require('debug')
const path = require('path')
const fs = require('fs')

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
          include: path.dirname(require.resolve('gatsby-theme-bulma-core')),
          use: [loaders.js()],
        },
      ],
    },
  })
}

exports.onPreExtractQueries = async ({store}) => {
  const config = store.getState().config
  const colors = config.siteMetadata.palette.colors

  if (colors) {
    const filePath = `./.cache/gatsby-theme-bulma-core/`
    const fileName = 'uservars.scss'
    const uservars = Object.keys(colors).reduce((builtUpString, key) => {
      const coerceString = `$${key}: '${colors[key]}';\n`
      return `${builtUpString}${coerceString}`
    }, '')
  
    await fs.mkdir(filePath, { recursive: true }, (err) => {
      if (err) throw err;
      fs.writeFile(`${filePath}${fileName}`, uservars, err => {
        if (err) throw err;
      });
    });
  }
}
