import React from "react";
import { graphql } from "gatsby";
import SimpleNavBridge from "../utils/SimpleNavBridge";

class mdInsetPage extends React.Component {
  render() {
    const { html } = this.props.data.markdownRemark;

    return (
      <SimpleNavBridge {...this.props}>
        <div className="box content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </SimpleNavBridge>
    );
  }
}

export default mdInsetPage;

export const pageQuery = graphql`
  query markdownTemplateBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
    file(relativePath: { eq: "assets/profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

/*
    site {
      siteMetadata {
        siteTitle
        siteDescription
        siteAuthor
        siteEmailUrl
        siteEmailPretty
        siteTwitterUrl
        siteTwitterPretty
        siteLinkedInUrl
        siteLinkedInPretty
        siteGithubUrl
        siteGithubPretty
        siteAngelListUrl
        siteAngelListPretty
        siteKeybaseUrl
        siteKeybasePretty
        sitePhotoUrl
        sitePhotoPretty
      }
    }
*/
