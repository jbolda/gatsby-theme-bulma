import React from "react";
import Link from "gatsby-link";
import SimpleNav from "gatsby-theme-bulma-layout/Simple/SimpleNav";

class SimpleBlogPostLayout extends React.Component {
  render() {
    let { sitemetadata } = this.props;

    return React.createElement(
      SimpleNav,
      { sitemetadata: sitemetadata, location: this.props.location },
      this.props.children,
      React.createElement(
        "section",
        { className: "section" },
        React.createElement("hr", null),
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "p",
            null,
            sitemetadata.siteDescr,
            React.createElement(
              "a",
              { href: sitemetadata.siteTwitterUrl },
              React.createElement("br", null),
              " ",
              React.createElement(
                "strong",
                null,
                sitemetadata.siteAuthor
              ),
              " on Twitter"
            )
          )
        )
      )
    );
  }
}

export default SimpleBlogPostLayout;

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