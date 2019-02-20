import React from "react";
import { graphql } from "gatsby";
import SimpleChrome from "../SimpleChrome.js";

class SimpleBlogPostTemplate extends React.Component {
  render() {
    const { html } = this.props.data.post;

    return (
      <SimpleChrome
        post={this.props.data.post}
        hero={this.props.data.post.frontmatter.heroImage}
        location={this.props.location}
      >
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </SimpleChrome>
    );
  }
}

export default SimpleBlogPostTemplate;

export const pageQuery = graphql`
  query GatsbyThemeBulmaBlogSimpleBlogPostTemplatePostBySlugWithImage(
    $slug: String!
  ) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
        writtenPretty: written(formatString: "MMMM Do YYYY")
        updatedPretty: updated(formatString: "MMMM Do YYYY")
        written
        updated
        category
        description
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
