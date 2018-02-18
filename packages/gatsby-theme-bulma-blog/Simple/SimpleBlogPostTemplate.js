import React from "react"
import moment from "moment"
import SimpleChrome from "./SimpleChrome"

class SimpleBlogPostTemplate extends React.Component {
  render() {
    const {html, frontmatter} = this.props.data.post

    return (
      <SimpleChrome
        post={this.props.data.post}
        hero={this.props.data.hero}
        sitemetadata={this.props.data.site.siteMetadata}
        location={this.props.location}
        >
        <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      </SimpleChrome>
    )
  }
}

export default SimpleBlogPostTemplate

export const pageQuery = graphql`
  query SimpleBlogPostTemplatePostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      ...MarkdownBlogPost_frontmatter
    }
    hero: file(relativePath: {eq: "hero.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
    site {
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
  }
`
