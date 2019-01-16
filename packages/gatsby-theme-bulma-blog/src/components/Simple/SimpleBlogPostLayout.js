import React from "react"
import { StaticQuery, graphql } from 'gatsby';
import SimpleNav from "gatsby-theme-bulma-layout/src/components/Simple/SimpleNav"

class SimpleBlogPostLayout extends React.Component {
  render() {
    let {siteMetadata} = this.props.site

    return (
      <SimpleNav site={this.props.site} location={this.props.location}>
        {this.props.children}
        <section className="section">
          <hr />
          <div className="container">
            <p>
              {siteMetadata.siteDescription}
              <a href={siteMetadata.siteTwitterUrl}>
                <br /> <strong>{siteMetadata.siteAuthor}</strong> on Twitter
              </a>
            </p>
          </div>
        </section>
      </SimpleNav>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query GatsbyThemeBulmaBlogSimpleBlogPostLayout {
        site {
          siteMetadata {
            siteTitle
            siteAuthor
            siteDescription
            siteEmailUrl
            siteEmailPretty
            siteTwitterUrl
            siteTwitterPretty
          }
        }
      }
    `}
    render={queryData => <SimpleBlogPostLayout site={queryData.site} {...props} />}
  />
);
