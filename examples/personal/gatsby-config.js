module.exports = {
  siteMetadata: {
    siteTitle: `Jacob Bolda`,
    siteDescription: `Structural Engineer with a knack for creative solutions using code and ingenuity.`,
    siteAuthor: `Jacob Bolda`,
    siteAuthorIdentity: `Structural Engineer`,
    siteLanding: `
      Focusing on the intersection of tech and Structural
      Engineering. Masters degree in Structural Engineering
      from the Milwaukee School of Engineering, undergrad in
      Architectural Engineering with a minor in Management,
      and a deep understanding of software and programming.
      Marrying that experience with problem solving and
      systematizing is powerful.
    `,
    siteContact: "https://twitter.com/jacobbolda",
    contactLinks: [
      { url: "mailto:me@jacobbolda.com", text: "me@jacobbolda.com", icon: ["far", "envelope"] },
      { url: "https://twitter.com/jacobbolda", text: "@jacobbolda", icon: ["fab", "twitter"] },
      { url: "https://linkedin.com/in/bolda", text: "linkedin.com/in/bolda", icon: ["fab","linkedin"] },
      { url: "https://github.com/jbolda", text: "github.com/jbolda", icon: ["fab", "github"] },
      { url: "https://keybase.io/jbolda", text: "keybase.io/jbolda", icon: ["fab", "keybase"] },
      { url: "https://angel.co/jacobbolda", text: "angel.co/jacobbolda", icon: ["fab", "angellist"] },
      { url: "http://www.jbolda.com/photo", text: "My Photographs", icon: ["fas", "camera"] }
    ]
  },
  __experimentalThemes: [
    {
      resolve: `gatsby-theme-bulma-core`,
      options: {
        root: __dirname,
        palette: {
          colors: {
            P1: "#000000",
            P2: "#192C3B",
            P3: "#52777D",
            P4: "#9EBBA9",
            P5: "#F4F4F4"
          }
        }
      }
    },
    {
      resolve: `gatsby-theme-bulma-layout`,
      options: {
        root: __dirname
      }
    },
    {
      resolve: `gatsby-theme-bulma-homepage`,
      options: {
        root: __dirname
      }
    },
    {
      resolve: `gatsby-theme-bulma-blog`,
      options: {
        root: __dirname
      }
    }
  ],
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/main/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
      }
    },
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JacobBolda.com`,
        short_name: `Bolda`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: "src/assets/avatar.png"
      }
    }
  ]
};
