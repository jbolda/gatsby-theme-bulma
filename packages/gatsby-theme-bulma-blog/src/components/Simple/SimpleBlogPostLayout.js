import React from "react"
import Link from "gatsby-link"
import SimpleNav from "gatsby-theme-bulma-layout/Simple/SimpleNav"

class SimpleBlogPostLayout extends React.Component {
  render() {
    let {sitemetadata} = this.props

    return (
      <SimpleNav sitemetadata={sitemetadata} location={this.props.location}>
        {this.props.children}
        <section className="section">
          <hr />
          <div className="container">
            <p>
              {sitemetadata.siteDescr}
              <a href={sitemetadata.siteTwitterUrl}>
                <br /> <strong>{sitemetadata.siteAuthor}</strong> on Twitter
              </a>
            </p>
          </div>
        </section>
      </SimpleNav>
    )
  }
}

export default SimpleBlogPostLayout

/*
can't seem to get the fragment to work here, not a location gatsby expects?
export const pageQuery = graphql`
fragment SimpleSiteMetadata on Site {
    siteMetadata {
      siteTitle
      siteDescr
      siteAuthor
      siteEmailUrl
      siteEmailPretty
      siteTwitterUrl
      siteTwitterPretty
    }
}
`
*/